import {Pawn} from "./Pawn";
import {IPlayerKeys, PlayerManager} from "../Managers/PlayerManager";
import { CyberPistol } from "../Weapons/FireWeapons/CyberPistol";
import { CyberShotgun } from "../Weapons/FireWeapons/CyberShotgun";
import { CyberPunch } from "../Weapons/MeleeWeapons/CyberPunch";
import { CST } from "../CST";
import { PawnData } from "./PawnSpawn";

export class Player extends Pawn
{
    private _keys: IPlayerKeys;
    private currentHandPosition: Phaser.Math.Vector2;
    private handPositions: Phaser.Math.Vector2[];
    private sparkle: Phaser.GameObjects.Sprite = null;

    constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string | Phaser.Textures.Texture) {
        super(scene, x, y, texture);
        this.setDepth(1);
        this.hurtSound = "Player_Damage";
        this.deathSound = "Player_Death";
        this.maxHealth = 15;

        this.sparkle = this.scene.add.sprite(this.x, this.y, "sparkles");
        this.sparkle.setVisible(false);
        this.sparkle.setDepth(1);

        this._meleeWeapon = new CyberPunch(scene, this);
        this._meleeWeapon.disableBody(true, true);
        (this._meleeWeapon.body as Phaser.Physics.Arcade.Body).allowGravity = false;
        this._meleeWeapon.on("hit", () => { this._meleeWeapon.disableBody(true, true); }, this);
    }

    // Init
    ////////////////////////////////////////////////////////////////////////

    public init(playerData: PawnData) : this
    {
        super.init(playerData, "player");
        this._meleeWeapon.damage = playerData.bodyDamage;

        const weaponClass = CyberPistol;
        let weapon = new weaponClass(this.scene, this.x, this.y);
        this.equipWeapon(weapon);
        this.currentWeapon.setBulletPerFire(this.bulletPerFire);
        this.currentWeapon.setBulletSpeed(this.bulletSpeed);

        this._keys = PlayerManager.Instance.loadKeys(this.scene);
        this._keys.jump.on("down", this.jump, this);
        this._keys.punch.on("down", this.attack, this);

        this.on("healthChanged", this.updateSparkles, this);
        this.emit("healthChanged");

        return this;
    }

    protected initAnimations(textureKey: string) : void
    {
        super.initAnimations(textureKey);

        this.initCharacterAnim();
        this.initSparkleAnim();
    }

    private initCharacterAnim(): void
    {
        const modes = ["", "HoldingWeapon"];
        const sides = ["Left", "Right"];
        const hpStates = [ "", "MediumHP", "LowHP"];

        for (let hpState of hpStates)
        {
            for (let side of sides)
            {
                for (let mode of modes)
                {
                    this.anims.create({
                        key: "Idle" + side + mode + hpState,
                        frames: this.anims.generateFrameNames(this.texture.key, { prefix: "idle" + side + mode + hpState + "_", suffix: ".png", start: 1, end: 1, zeroPad: 3 }),
                        frameRate: 1,
                        repeat: -1
                    });

                    this.anims.create({
                        key: "Walk" + side + mode + hpState,
                        frames: this.anims.generateFrameNames(this.texture.key, { prefix:  "walk" + side + mode + hpState + "_", suffix: ".png", start: 1, end: 5, zeroPad: 3 }),
                        frameRate: 10,
                        repeat: -1
                    });

                    this.anims.create({
                        key: "InAir" + side + mode + hpState,
                        frames: this.anims.generateFrameNames(this.texture.key, { prefix: "jump" + side + mode + hpState + "_", suffix: ".png", start: 3, end: 3, zeroPad: 3 }),
                        frameRate: 10,
                        repeat: -1
                    });
                }

                this.anims.create({
                    key: "Punch" + side + hpState,
                    frames: this.anims.generateFrameNames(this.texture.key, {prefix: "punch" + side + hpState + "_", suffix: ".png", start: 1, end: 5, zeroPad: 3 }),
                    frameRate: 18,
                    repeat: 0
                });

                this.anims.create({
                    key: "Death" + side + hpState,
                    frames: this.anims.generateFrameNames(this.texture.key, { prefix: "death" + side + hpState + "_", suffix: ".png", start: 1, end: 4, zeroPad: 3 }),
                    frameRate: 7,
                    repeat: 0
                });
            }

            this.anims.create({
                key: "Climb" + hpState,
                frames: this.anims.generateFrameNames(this.texture.key, {prefix: "climb" + hpState + "_", suffix: ".png", start: 1, end: 4, zeroPad: 3 }),
                frameRate: 10,
                repeat: -1
            });

            this.on("animationcomplete_PunchLeft" + hpState, () => { this.stopAttacking(); }, true);
            this.on("animationcomplete_PunchRight" + hpState, () => { this.stopAttacking(); }, true);
        }

        const keyIdle = this.isLookingRight ? "IdleRightHoldingWeapon" : "IdleLeftHoldingWeapon";
        this.anims.play(keyIdle, true);
        this.handPositions = this.scene.cache.json.get("handPositions");
        this.body.setSize(this.anims.currentAnim.frames[0].frame.realWidth, this.anims.currentAnim.frames[0].frame.realHeight);
        this.body.setOffset(0,0);
    }

    private initSparkleAnim(): void
    {
        this.sparkle.anims.create({
            key: "sparkleOrange",
            frames: this.anims.generateFrameNames(this.sparkle.texture.key, { prefix: "sparkleOrange_", suffix: ".png", start: 1, end: 4, zeroPad: 3 }),
            frameRate: 7,
            repeat: -1
        });

        this.sparkle.anims.create({
            key: "sparkleRed",
            frames: this.anims.generateFrameNames(this.sparkle.texture.key, { prefix: "sparkleRed_", suffix: ".png", start: 1, end: 4, zeroPad: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.sparkle.anims.create({
            key: "sparkleWhite",
            frames: this.anims.generateFrameNames(this.sparkle.texture.key, { prefix: "sparkleWhite_", suffix: ".png", start: 1, end: 4, zeroPad: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.sparkle.anims.create({
            key: "sparkleYellow",
            frames: this.anims.generateFrameNames(this.sparkle.texture.key, { prefix: "sparkleYellow_", suffix: ".png", start: 1, end: 4, zeroPad: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.sparkle.anims.create({
            key: "sparkleGreen",
            frames: this.anims.generateFrameNames(this.sparkle.texture.key, { prefix: "sparkleGreen_", suffix: ".png", start: 1, end: 4, zeroPad: 3 }),
            frameRate: 10,
            repeat: -1
        });
    }

    protected initAttributes() : void
    {
        super.initAttributes();
        this.attributes.set(CST.PAWN.ATTRIBUTES.WALK_SPEED, 180);
        this.attributes.set(CST.PAWN.ATTRIBUTES.CLIMB_SPEED, 150);
    }

    public reset(x: number, y: number) : void
    {
        super.reset(x, y);
        this.sparkle.setVisible(false);
        this.sparkle.anims.pause();
        this.stopRecovering();
    }

    // Update
    ////////////////////////////////////////////////////////////////////////

    public update(...args: any[]) : void
    {
        super.update(args);

        if (this.isOnFloor())
        {
            this.isJumping = false;
        }

        if (!this.isDead() && !this.isTakingDmg)
        {
            this.updateControl();
        }

    }

    public postUpdate(): void
    {
        this.postUpdateHand();
        this.postUpdateSparkles();

        this.wasOnFloor = this.isOnFloor();
    }

    protected updateControl() : void
    {
        if (this._keys.up.isDown)
        {
            this.lookUp();
        }
            
        else if (this._keys.down.isDown)
        {
            this.lookDown();
        }
        else
        {
            this.lookStraight();
        }

        if (this._keys.left.isDown)
        {
            this.lookOnLeft();
            this.walk();
        }
        else if (this._keys.right.isDown)
        {
            this.lookOnRight();
            this.walk();
        }
        else
        {
            this.stopWalking();
        }

        if (this._keys.fire.isDown && !this.isMeleeAttacking)
        {
            this.fire();
        }
        else
        {
            this.stopFiring();
        }
    }

    protected updateAnimations() : void
    {
        if (this.isDead() || this.isMeleeAttacking)
        {
            return;
        }

        const side = this.isLookingRight ? "Right" : "Left";
        const mode = this.currentWeapon ? "HoldingWeapon" : "";
        const ratioHealth = this.getHealth() / this.getMaxHealth();
        const hpState = (ratioHealth > 0.7) ? "" : (ratioHealth > 0.35 ? "MediumHP" : "LowHP");

        if (this.isClimbing)
        {
            this.anims.play("Climb" + hpState, true);

            if (this.isOnFloor() || this.body.velocity.y == 0)
            {
                this.anims.pause();
            }
        }
        else if (!this.isOnFloor() && !this.wasOnFloor)
        {
            this.anims.play("InAir" + side + mode + hpState, true);
        }
        else if (this.isWalking || this.isTakingDmg)
        {
            this.anims.play("Walk" + side + mode + hpState, true);
        }
        else
        {
            this.anims.play("Idle" + side + mode + hpState, true);
        }
    }

    private updateSparkles(health: number, maxHealth: number): void
    {
        // TODO: See the usage of the sparkles

        // const healthRate = health / maxHealth;

        // if (healthRate < 0.4)
        // {
        //     this.sparkle.anims.pause();
        //     this.sparkle.setVisible(false);
        // }
        // else if (healthRate < 1)
        // {
        //     this.sparkle.anims.play("sparkleRed", true);
        //     this.sparkle.setVisible(true);
        // }
        // else
        // {
        //     this.sparkle.anims.play("sparkleOrange", true);
        //     this.sparkle.setVisible(true); 
        // }
        // this.sparkle.setVisible(false);
    }

    private postUpdateSparkles(): void
    {
        this.sparkle.setPosition(this.x, this.y);
    }

    private postUpdateHand(): void
    {
        if (this.currentWeapon)
        {
            const handPosition = this.getHandPosition();

            this.currentWeapon.setVisible(!!handPosition);
            this.currentWeapon.setDepth(0.9);

            if (this.currentWeapon.visible)
            {
                this.currentHandPosition = handPosition;
            
                this.currentWeapon.setFlipX(this.isLookingRight);
                this.currentWeapon.setPosition(this.x - this.width * this.originX + this.currentHandPosition.x, this.y - this.height * this.originY + this.currentHandPosition.y);
            }
        }

        const punchX = this.isLookingRight ? this.x + (this.width / 2 + this._meleeWeapon.width) / 2 : this.x - (this.width / 2 + this._meleeWeapon.width) / 2;
        const punchY = this.y;
        this._meleeWeapon.setPosition(punchX, punchY);
    }

    private getHandPosition(): Phaser.Math.Vector2
    {
        return this.handPositions[this.anims.currentAnim.key] ? this.handPositions[this.anims.currentAnim.key][this.anims.currentFrame.index - 1] as Phaser.Math.Vector2 : null;
    }

    protected onDeath(): void
    {
        const side = this.isLookingRight ? "Right" : "Left";
        const ratioHealth = this.getHealth() / this.getMaxHealth();
        const hpState = (ratioHealth > 0.7) ? "" : (ratioHealth > 0.35 ? "MediumHP" : "LowHP");

        this.anims.play("Death" + side + hpState, true);
    }

    public recover() : void
    {
        this.isRecovering = true;

        const tweenSlow = this.alphaAnimation(350, 2);
        tweenSlow.on("complete", () => {
            this.setAlpha(1);

            const tweenFast = this.alphaAnimation(100, 4);
            tweenFast.on("complete", () => {
                this.setAlpha(1);
                this.stopRecovering();
            }, this);
        }, this);
    }

    private alphaAnimation(duration: number, repeat: number) : Phaser.Tweens.Tween
    {
        return this.scene.tweens.add({
            targets: this,
            alpha: 0.2,
            ease: Phaser.Math.Easing.Linear,
            yoyo: true,
            duration: duration,
            repeat: repeat
        });
    }

    public stopRecovering() : void {
        this.isRecovering = false;
    }

    public hurt(health: number, isProjected: boolean = false, hurtFromRight: boolean = false, velocityProjection: number = 250) : void
    {
        super.hurt(health, isProjected, hurtFromRight, velocityProjection);
        if (!this.isDead())
        {
            this.recover();
        }
    }

    protected canAttack(): boolean
    {
        return super.canAttack() && !this.isClimbing;
    }

    protected attack(): boolean
    {
        if (super.attack())
        {
            const side = this.isLookingRight ? "Right" : "Left";
            const ratioHealth = this.getHealth() / this.getMaxHealth();
            const hpState = (ratioHealth > 0.7) ? "" : (ratioHealth > 0.35 ? "MediumHP" : "LowHP");

            this.anims.play("Punch" + side + hpState, true);
            return true;
        }
        return false;
    }

    public canFire(): boolean
    {
        return this.canFire && !this.isClimbing;
    }

    public makeInvincible(duration: number): void
    {
        super.makeInvincible(duration);

        this.sparkle.setVisible(true);
        this.sparkle.anims.play("sparkleWhite", true);

        this.scene.time.delayedCall(duration, () => {
            if (this.sparkle.anims.currentAnim.key == "sparkleWhite")
            {
                this.sparkle.anims.pause();
                this.sparkle.setVisible(false);
            }
        }, null, this);
    }

    public giveBonusDamage(damage: number, duration: number): void
    {
        super.giveBonusDamage(damage, duration);

        this.sparkle.setVisible(true);
        this.sparkle.anims.play("sparkleRed", true);

        this.scene.time.delayedCall(duration, () => {
            if (this.sparkle.anims.currentAnim.key == "sparkleRed")
            {
                this.sparkle.anims.pause();
                this.sparkle.setVisible(false);
            }
        }, null, this);
    }

    public addSpeedBonus(speedBonus: number, duration: number): void
    {
        super.addSpeedBonus(speedBonus, duration);

        this.sparkle.setVisible(true);
        this.sparkle.anims.play("sparkleOrange", true);

        this.scene.time.delayedCall(duration, () => {
            if (this.sparkle.anims.currentAnim.key == "sparkleOrange")
            {
                this.sparkle.anims.pause();
                this.sparkle.setVisible(false);
            }
        }, null, this);
    }
}