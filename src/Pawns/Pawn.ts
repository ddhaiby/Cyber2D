import { AudioManager } from "../Managers/AudioManager";
import { CST } from "../CST";
import { CYBR_MeleeWeapon } from "../Weapons/MeleeWeapons/CYBR_MeleeWeapon";
import { CYBR_FireWeapon } from "../Weapons/FireWeapons/CYBR_FireWeapon";
import { PawnData } from "./PawnSpawn";

export class Pawn extends Phaser.Physics.Arcade.Sprite
{
    protected startOnRight: boolean = false;

    // Weapons
    public currentWeapon: CYBR_FireWeapon;

    // States
    public isLookingUp: boolean = false;
    public isLookingDown: boolean = false;
    public isLookingRight: boolean = false;
    public isLookingLeft: boolean = false;
    public isWalking: boolean = false;
    public isJumping: boolean = false;
    protected wasOnFloor: boolean = true;
    public isFiring: boolean = false;
    public isClimbing: boolean = false;
    public isRecovering: boolean = false
    public isTakingDmg: boolean = false

    /** Whether the pawn do a melee attack */
    protected isMeleeAttacking: boolean = false;

    /** Whether the AI is preparing an attack */
    protected isPreparingAttack: boolean = false;
    
    /** The delay before the attack */
    protected prepareAttackDelay: number = 0;
    
    /** The melee weapon */
    protected _meleeWeapon: CYBR_MeleeWeapon = null;

    // Attributes
    protected attributes: Phaser.Structs.Map<string, number>;

    /** Max hp */
    protected maxHealth: number = 10;

    /** The damage when there is a body contact */
    private bodyDamage: number = 5;

    /** The number of bullet shotper fire */
    protected bulletPerFire: number = 1;

    /** The damage of each bullet */
    protected bulletDamage: number = 1;

    // Sounds
    protected hurtSound: string = "";
    protected deathSound: string = "";

    constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string | Phaser.Textures.Texture, frame?: string | number)
    {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);
        scene.physics.add.existing(this);
        (this.body as Phaser.Physics.Arcade.Body).setMaxSpeed(CST.PHYSIC.PAWN_MAX_SPEED);
        this.setGravity(this.scene.physics.world.gravity.x, this.scene.physics.world.gravity.y);
        this.setCollideWorldBounds(false);

        this.on(Phaser.Animations.Events.ANIMATION_COMPLETE, function (anim: Phaser.Animations.Animation, frame: Phaser.Animations.AnimationFrame) {
            this.emit("animationcomplete_" + anim.key, anim, frame);
        }, this);

        this.on(Phaser.Animations.Events.ANIMATION_START, function (anim: Phaser.Animations.Animation, frame: Phaser.Animations.AnimationFrame) {
            this.emit("animationstart_" + anim.key, anim, frame);
        }, this);
    }

    // Init
    ////////////////////////////////////////////////////////////////////////

    public init(pawnData?: PawnData, textureKey?: string): this
    {
        if (pawnData)
        {
            this.x = pawnData.x;
            this.y = pawnData.y;
            this.maxHealth = pawnData.maxHealth;
            this.startOnRight = pawnData.startOnRight;
            this.bodyDamage = pawnData.bodyDamage;
            this.bulletDamage = pawnData.bulletDamage;
            this.bulletPerFire = pawnData.bulletPerFire;
        }

        this.initStates();
        this.initAttributes();
        if (textureKey)
            this.initAnimations(textureKey);

        return this;
    }

    private initStates(): void
    {
        this.isLookingUp = false;
        this.isLookingDown = false;

        if (this.startOnRight)
            this.lookOnRight();
        else
            this.lookOnLeft();
    }

    protected initAnimations(textureKey: string): void
    {
        this.setTexture(textureKey);
    }

    protected initAttributes(): void
    {
        this.attributes = new Phaser.Structs.Map([]);
        this.attributes.set(CST.PAWN.ATTRIBUTES.MAX_HEALTH, this.maxHealth);
        this.attributes.set(CST.PAWN.ATTRIBUTES.HEALTH, this.maxHealth);
        this.attributes.set(CST.PAWN.ATTRIBUTES.BODY_DAMAGE, this.bodyDamage);
        this.setHealth(this.getMaxHealth());
    }

    public reset(x: number, y: number): void
    {
        this.enableBody(true, x, y, true, true);
        this.setHealth(this.getMaxHealth());
        this.setVelocity(0,0);
        this.setAlpha(1);
        this.initStates();
        this.isTakingDmg = false;
    }

    // Update
    ////////////////////////////////////////////////////////////////////////

    public update(...args: any[]): void
    {
        super.update(args);
        this.updateAnimations();
    }

    /** Update the anims of this Pawn */
    protected updateAnimations(): void
    {
    }

    public postUpdate(): void
    {
    }

    public canWalk(): boolean
    {
        return !this.dead() && (this.isOnFloor() || !this.isClimbing);
    }

    public walk(): void
    {
        if (this.canWalk())
        {
            const speed = this.getWalkSpeed();

            if (!this.isWalking)
                this.startWalking();

            this.setVelocityX(this.isLookingRight ? speed : -speed);
        }
    }

    private startWalking(): void
    {
        this.isWalking = true;
    }

    public stopWalking(): void
    {
        if (this.isWalking)
        {
            this.isWalking = false;
        }

        this.setVelocityX(0);
    }

    public climb(speedX: number, speedY: number): void
    {
        if (!this.isClimbing)
            this.startClimbing();

        this.setVelocity(speedX, speedY);
    }

    private startClimbing(): void
    {
        this.setGravity(0, -this.scene.physics.world.gravity.y);
        this.isClimbing = true;
    }

    public stopClimbing(): void
    {
        if (this.isClimbing)
        {
            this.setVelocityY(0);
            this.setGravity(this.scene.physics.world.gravity.x, this.scene.physics.world.gravity.y);
            this.isClimbing = false;
        }
    }

    protected lookUp(): void
    {
        this.isLookingUp = true;
        this.isLookingDown = false;
    }

    protected lookDown(): void
    {
        this.isLookingUp = false;
        this.isLookingDown = true;
    }
    
    protected lookOnRight(): void
    {
        this.isLookingRight = true;
        this.isLookingLeft = false;
    }

    protected lookOnLeft(): void
    {
        this.isLookingRight = false;
        this.isLookingLeft = true;
    }

    protected lookStraight(): void
    {
        this.isLookingUp = false;
        this.isLookingDown = false;
    }

    public isOnFloor(): boolean
    {
        return (this.body as Phaser.Physics.Arcade.Body).onFloor();
    }

    public canJump(): boolean
    {
        return !this.dead() && (this.isOnFloor() || this.isClimbing);
    }

    public jump(): void
    {
        if (this.canJump())
        {
            if (this.isClimbing)
                this.stopClimbing();

            this.setVelocityY(-475);
            this.isJumping = true;
        }
    }

    public hurt(health: number, isProjected: boolean = false, hurtFromRight: boolean = false, velocityProjection: number = 250): void
    {
        this.setHealth(this.getHealth() - health);

        if (!this.dead() && isProjected)
        {
            this.stopWalking();
            this.stopClimbing();

            if (hurtFromRight)
            {
                this.setVelocityX(-velocityProjection);
                this.lookOnRight();
            }
            else
            {
                this.setVelocityX(velocityProjection);
                this.lookOnLeft();
            }

            this.isTakingDmg = true;
            this.scene.time.delayedCall(300, () => { // TODO: Could use an animation instead of a timer
                this.isTakingDmg = false;
                this.setVelocityX(0);
            });
        }


        AudioManager.playSound(this.hurtSound);
    }

    public heal(health: number): void
    {
        this.setHealth(this.getHealth() + health);
    }

    public setHealth(health: number): void
    {
        this.attributes.set(CST.PAWN.ATTRIBUTES.HEALTH, Math.max(0, Math.min(health, this.attributes.get(CST.PAWN.ATTRIBUTES.MAX_HEALTH))));
        this.emit("healthChanged", this.attributes.get(CST.PAWN.ATTRIBUTES.HEALTH), this.attributes.get(CST.PAWN.ATTRIBUTES.MAX_HEALTH));

        if (this.dead())
        {
            this.die();
            this.stopFiring();
        }
    }

    public getAttribute(name: string): number
    {
        return this.attributes.get(name);
    }

    public getHealth(): number
    {
        return this.getAttribute(CST.PAWN.ATTRIBUTES.HEALTH);
    }

    public getMaxHealth(): number
    {
        return this.getAttribute(CST.PAWN.ATTRIBUTES.MAX_HEALTH);
    }

    public getWalkSpeed(): number
    {
        return this.getAttribute(CST.PAWN.ATTRIBUTES.WALK_SPEED);
    }

    public getClimbSpeed(): number
    {
        return this.getAttribute(CST.PAWN.ATTRIBUTES.CLIMB_SPEED);
    }

    public getBodyDamage(): number
    {
        return this.getAttribute(CST.PAWN.ATTRIBUTES.BODY_DAMAGE);
    }

    // Called when the health reaches 0 or to kill instantly 
    public die(): void
    {
        this.attributes.set(CST.PAWN.ATTRIBUTES.HEALTH, 0);
        this.stopWalking();
        this.stopClimbing();
        this.emit("die");

        AudioManager.playSound(this.deathSound);
    }

    public dead(): boolean
    {
        return this.getHealth() <= 0;
    }

    // Melee Attack
    ////////////////////////////////////////////////////////////////////////

    protected canAttack(): boolean
    {
        return !this.dead() && !this.isMeleeAttacking && !this.isPreparingAttack;
    }

    protected attack(): void
    {
        if (this.canAttack())
        {
            this.stopWalking();

            this.isPreparingAttack = true;

            this.scene.time.delayedCall(this.prepareAttackDelay, () => {
                this.isPreparingAttack = false;
                this.isMeleeAttacking = true;
                this._meleeWeapon.enableBody(false, 0, 0, true, false);
            });
        }
    }

    protected stopAttacking(): void
    {
        this.isMeleeAttacking = false;
        this.isPreparingAttack = false;
        this._meleeWeapon.disableBody(true, true);
    }

    public get meleeWeapon(): CYBR_MeleeWeapon
    {
        return this._meleeWeapon;
    }
    
    // Fire weapon
    ////////////////////////////////////////////////////////////////////////

    public equipWeapon(weapon: CYBR_FireWeapon): void
    {
        this.currentWeapon = weapon;
        this.currentWeapon.setOwner(this);
    }

    public fire(fireAngle?: number): void
    {
        if (this.currentWeapon && !this.isClimbing)
        {
            if (!fireAngle)
                fireAngle = this.isLookingRight ? 0 : 180;

            this.currentWeapon.fireAngle = fireAngle;
            this.currentWeapon.fire();
            this.isFiring = true;
        }
    }

    public stopFiring(): void
    {
        if (this.isFiring && this.currentWeapon)
            this.currentWeapon.stopFiring();

        this.isFiring = false;
    }
}