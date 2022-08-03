import { AudioManager } from "../Managers/AudioManager";
import { CST } from "../CST";
import { CYBR_MeleeWeapon } from "../Weapons/MeleeWeapons/CYBR_MeleeWeapon";
import { CYBR_FireWeapon } from "../Weapons/FireWeapons/CYBR_FireWeapon";
import { PawnData } from "./PawnSpawn";

export class Pawn extends Phaser.Physics.Arcade.Sprite
{
    protected timerPrepareAttack: Phaser.Time.TimerEvent;

    protected startOnRight: boolean = false;
    protected startUp: boolean = false;

    // Weapons
    public currentWeapon: CYBR_FireWeapon;

    // States
    /** Whether the pawn is looking above */
    public isLookingUp: boolean = false;

    /** Whether the pawn is looking down */
    public isLookingDown: boolean = false;

    /** Whether the pawn is looking on right direction */
    public isLookingRight: boolean = false;

    /** Whether the pawn is looking on left direction */
    public isLookingLeft: boolean = false;

    /** Whether the pawn is walking */
    public isWalking: boolean = false;

    /** Whether the pawn is flying */
    protected isFlying: boolean = false;

    /** Whether the pawn is jumping */
    public isJumping: boolean = false;

    /** Whether the pawn was on the floor the last frame */
    protected wasOnFloor: boolean = true;

    /** Whether the pawn was on the floor the last frame */
    public isFiring: boolean = false;

    /** Whether the pawn is climbing */
    public isClimbing: boolean = false;

    /** Whether the pawn is recovering from damage it took. This property is used to handle invincible mode */
    public isRecovering: boolean = false;

    /** Whether the pawn is taking damage. The pawn can't move on this state */
    public isTakingDmg: boolean = false;

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

    /** The number of bullet shotper fire */
    protected bulletSpeed: number = 500;

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
        this.timerPrepareAttack = scene.time.addEvent({}); // Create an empty timer to avoid null error

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
            this.startUp = pawnData.startUp;
            this.bodyDamage = pawnData.bodyDamage;
            this.bulletDamage = pawnData.bulletDamage;
            this.bulletPerFire = pawnData.bulletPerFire;
            this.bulletSpeed = pawnData.bulletSpeed;
        }

        this.initStates();
        this.initAttributes();
        this.initAnimations(textureKey);

        return this;
    }

    private initStates(): void
    {
        this.isLookingUp = false;
        this.isLookingDown = false;

        if (this.startOnRight)
        {
            this.lookOnRight();
        }
        else
        {
            this.lookOnLeft();
        }
    }

    protected initAnimations(textureKey?: string): void
    {
        if (textureKey)
            this.setTexture(textureKey);
    }

    protected initAttributes(): void
    {
        this.attributes = new Phaser.Structs.Map([]);
        this.attributes.set(CST.PAWN.ATTRIBUTES.MAX_HEALTH, this.maxHealth);
        this.attributes.set(CST.PAWN.ATTRIBUTES.HEALTH, this.maxHealth);
        this.attributes.set(CST.PAWN.ATTRIBUTES.BODY_DAMAGE, this.bodyDamage);
        this.attributes.set(CST.PAWN.ATTRIBUTES.FLY_SPEED, 100);
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

    // Walk
    ////////////////////////////////////////////////////////////////////////

    public canWalk(): boolean
    {
        return !this.isDead() && (this.isOnFloor() || !this.isClimbing);
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

    // Fly
    ////////////////////////////////////////////////////////////////////////

    public canFly(): boolean
    {
        return !this.isDead();
    }

    public fly(): void
    {
        if (this.canFly())
        {
            const speed = this.getFlySpeed();

            if (!this.isFlying)
            {
                this.startFlying();
            }

            const velocityX = this.isLookingRight ? speed : (this.isLookingLeft ? -speed : 0);
            const velocityY = this.isLookingDown ? speed : (this.isLookingUp ? -speed : 0);

            this.setVelocityX(velocityX);
            this.setVelocityY(velocityY);
        }
    }

    private startFlying(): void
    {
        this.isFlying = true;
    }

    public stopFlying(): void
    {
        if (this.isFlying)
        {
            this.isFlying = false;
        }

        this.setVelocityX(0);
        this.setVelocityY(0);
    }

    public getFlySpeed(): number
    {
        return this.getAttribute(CST.PAWN.ATTRIBUTES.FLY_SPEED);
    }

    // Climb
    ////////////////////////////////////////////////////////////////////////

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

    // Jump
    ////////////////////////////////////////////////////////////////////////

    public isOnFloor(): boolean
    {
        return (this.body as Phaser.Physics.Arcade.Body).onFloor();
    }

    public canJump(): boolean
    {
        return !this.isDead() && (this.isOnFloor() || this.isClimbing);
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

    // Attributes and damage
    ////////////////////////////////////////////////////////////////////////

    public hurt(health: number, isProjected: boolean = false, hurtFromRight: boolean = false, velocityProjection: number = 250): void
    {
        this.setHealth(this.getHealth() - health);

        if (!this.isDead() && isProjected)
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

        if (this.isDead())
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

    // Death
    ////////////////////////////////////////////////////////////////////////

    // Called when the health reaches 0 or to kill instantly 
    public die(): void
    {
        this.attributes.set(CST.PAWN.ATTRIBUTES.HEALTH, 0);
        this.stopWalking();
        this.stopFlying();
        this.stopClimbing();
        this.timerPrepareAttack.remove();
        this.onDeath();
        this.emit("die");

        AudioManager.playSound(this.deathSound);
    }

    public isDead(): boolean
    {
        return this.getHealth() <= 0;
    }

    protected onDeath(): void
    {
    }

    protected onDeathAnimationComplete(): void
    {
        this.scene.time.delayedCall(500, () => { this.disableBody(true, true); }, null, this);
    }

    // Melee Attack
    ////////////////////////////////////////////////////////////////////////

    protected canAttack(): boolean
    {
        return !this.isDead() && !this.isMeleeAttacking && !this.isPreparingAttack;
    }

    protected attack(): boolean
    {
        if (this.canAttack())
        {
            this.stopWalking();

            this.isPreparingAttack = true;

            this.timerPrepareAttack = this.scene.time.delayedCall(this.prepareAttackDelay, () => {
                this.isPreparingAttack = false;
                this.isMeleeAttacking = true;
                this._meleeWeapon.enableBody(false, 0, 0, true, false);
            });

            return true;
        }

        return false;
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

    public canFire(): boolean
    {
        return !!this.currentWeapon;
    }

    public fire(fireAngle?: number): void
    {
        if (this.canFire())
        {
            if (!fireAngle)
            {
                fireAngle = this.isLookingRight ? 0 : 180;
            }

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