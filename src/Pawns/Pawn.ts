import { CYBR_AudioManager } from "../Managers/CYBR_AudioManager";
import { SceneGame } from "../Scenes/SceneGame";
import { CST } from "../CST";
import { CYBR_MeleeWeapon } from "../Weapons/MeleeWeapons/CYBR_MeleeWeapon";
import { CYBR_FireWeapon } from "../Weapons/FireWeapons/CYBR_FireWeapon";
import { PawnSpawnData } from "./PawnSpawn";

export class Pawn extends Phaser.Physics.Arcade.Sprite
{
    protected sceneGame: SceneGame = null;

    /** Name used for the animations */
    protected pawnName: string = null;

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

    /** Whether the pawn is recovering from damage it took. */
    public isRecovering: boolean = false;

    /** Whether the pawn is invincible */
    public isInvincible: boolean = false;

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

    /** Speed bonus for movespeed and climbing */
    public speedBonus: number = 0;

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

    /** Jump velocity for the jump */
    protected jumpVelocity: number = 320;

    // Sounds
    protected hurtSound: string = "";
    protected deathSound: string = "";

    constructor(scene: SceneGame, x?: number, y?: number, texture?: string | Phaser.Textures.Texture, frame?: string | number)
    {
        super(scene, x, y, texture, frame);
        this.sceneGame = scene;

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

    public init(pawnSpawnData?: PawnSpawnData, textureKey?: string): this
    {
        if (pawnSpawnData)
        {
            this.x = pawnSpawnData.x;
            this.y = pawnSpawnData.y;
            this.maxHealth = pawnSpawnData.maxHealth;
            this.startOnRight = pawnSpawnData.startOnRight;
            this.startUp = pawnSpawnData.startUp;
            this.bodyDamage = pawnSpawnData.bodyDamage;
            this.bulletDamage = pawnSpawnData.bulletDamage;
            this.bulletPerFire = pawnSpawnData.bulletPerFire;
            this.bulletSpeed = pawnSpawnData.bulletSpeed;
        }

        this.initStates();
        this.initAttributes();
        this.initAnimations(textureKey);

        const pawnSettings = this.scene.cache.json.get("pawnSettings");
        this.body.setSize(pawnSettings[this.pawnName].body.width, pawnSettings[this.pawnName].body.height);
        this.body.setOffset((this.width - pawnSettings[this.pawnName].body.width) * 0.5, (this.height - pawnSettings[this.pawnName].body.height));
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
        {
            this.setTexture(textureKey);
        }
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
        this.isInvincible = false;
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
            const speed = this.getCurrentWalkSpeed();

            if (!this.isWalking)
            {
                this.startWalking();
            }

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

    public addSpeedBonus(speedBonus: number, duration: number): void
    {
        this.speedBonus += speedBonus;
        this.scene.time.delayedCall(duration, () => {
            this.speedBonus = Math.max(0, this.speedBonus - speedBonus)
        }, null, this);
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
        {
            this.startClimbing();
        }

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

    public lookUp(): void
    {
        this.isLookingUp = true;
        this.isLookingDown = false;
    }

    public lookDown(): void
    {
        this.isLookingUp = false;
        this.isLookingDown = true;
    }
    
    public lookOnRight(): void
    {
        this.isLookingRight = true;
        this.isLookingLeft = false;
    }

    public lookOnLeft(): void
    {
        this.isLookingRight = false;
        this.isLookingLeft = true;
    }

    public lookStraight(): void
    {
        this.isLookingUp = false;
        this.isLookingDown = false;
    }

    // Jump
    ////////////////////////////////////////////////////////////////////////

    /** Whether this Body is touching a tile or the world boundary while moving down */
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
            {
                this.stopClimbing();
            }

            this.setVelocityY(-this.jumpVelocity);
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

        CYBR_AudioManager.instance.playSound(this.hurtSound);
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

    public makeInvincible(duration: number): void
    {
        this.isInvincible = true;
        this.scene.time.delayedCall(duration, () => { this.isInvincible = false; }, null, this);
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

    public getCurrentWalkSpeed(): number
    {
        return this.getWalkSpeed() + this.speedBonus;
    }

    public getClimbSpeed(): number
    {
        return this.getAttribute(CST.PAWN.ATTRIBUTES.CLIMB_SPEED);
    }

    public getCurrentClimbSpeed(): number
    {
        return this.getClimbSpeed() + this.speedBonus;
    }

    public getBodyDamage(): number
    {
        return this.getAttribute(CST.PAWN.ATTRIBUTES.BODY_DAMAGE);
    }

    public giveBonusDamage(damage: number, duration: number): void
    {
        if (this.currentWeapon)
        {
            this.currentWeapon.damageBonus += damage;
            this.scene.time.delayedCall(duration, () => {
                this.currentWeapon.damageBonus = Math.max(0, this.currentWeapon.damageBonus - damage);
            }, null, this);
        }
    }

    // Death
    ////////////////////////////////////////////////////////////////////////

    /** Called when the health reaches 0 or to kill instantly */
    public die(): void
    {
        this.attributes.set(CST.PAWN.ATTRIBUTES.HEALTH, 0);
        this.lookStraight();
        this.stopWalking();
        this.stopFlying();
        this.stopClimbing();

        if (this.meleeWeapon)
        {
            this.stopAttacking();
        }

        this.timerPrepareAttack.remove();
        this.onDeath();
        this.emit("die");

        CYBR_AudioManager.instance.playSound(this.deathSound);
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

    protected onFireAnimationComplete(): void
    {
        this.scene.time.delayedCall(400, () => { this.stopFiring(); }, null, this);
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

            if (this.anims.exists("Fire"))
            {
                this.anims.play("Fire", true);
            }
        }
    }

    public stopFiring(): void
    {
        if (this.isFiring && this.currentWeapon)
        {
            this.currentWeapon.stopFiring();
        }

        this.isFiring = false;
    }
}