import {Pawn} from "./Pawn";
import {IPlayerKeys, PlayerManager} from "../Managers/PlayerManager";
import { CyberPistol } from "../Weapons/FireWeapons/CyberPistol";
import { CyberShotgun } from "../Weapons/FireWeapons/CyberShotgun";
import { CyberPunch } from "../Weapons/MeleeWeapons/CyberPunch";
import { CST } from "../CST";
import { PawnData } from "./PawnSpawn";

export class Player extends Pawn
{
    private keys: IPlayerKeys;
    private currentHandPosition: Phaser.Math.Vector2;
    private handPositions: Phaser.Math.Vector2[];
    private sparkle: Phaser.GameObjects.Sprite = null;

    constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string | Phaser.Textures.Texture) {
        super(scene, x, y, texture);
        this.setDepth(1);
        this.hurtSound = "Player_Damage";
        this.deathSound = "Player_Death";
        this.maxHealth = 15;

        this.sparkle = this.scene.add.sprite(this.x, this.y, "player");
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

        const weaponClass = (Math.random() < 0.5) ? CyberPistol : CyberShotgun;
        let weapon = new weaponClass(this.scene, this.x, this.y);
        this.equipWeapon(weapon);

        PlayerManager.Instance.reloadKeys(this.scene);
        this.keys = PlayerManager.Instance.keyBinding;
        this.keys.jump.on("down", this.jump, this);
        this.keys.punch.on("down", this.attack, this);

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

        for (let mode of modes)
        {
            this.anims.create({
                key: "IdleRight" + mode,
                frames: this.anims.generateFrameNames(this.texture.key, { prefix: "idleRight" + mode + "_", suffix: ".png", start: 1, end: 1, zeroPad: 3 }),
                frameRate: 1,
                repeat: -1
            });

            this.anims.create({
                key: "IdleLeft" + mode,
                frames: this.anims.generateFrameNames(this.texture.key, { prefix: "idleLeft" + mode + "_", suffix: ".png", start: 1, end: 1, zeroPad: 3 }),
                frameRate: 1,
                repeat: -1
            });

            const frameRateWalk = 10;
            this.anims.create({
                key: "WalkRight" + mode,
                frames: this.anims.generateFrameNames(this.texture.key, { prefix:  "walkRight" + mode + "_", suffix: ".png", start: 1, end: 5, zeroPad: 3 }),
                frameRate: frameRateWalk,
                repeat: -1
            });

            this.anims.create({
                key: "WalkLeft" + mode,
                frames: this.anims.generateFrameNames(this.texture.key, { prefix: "walkLeft" + mode + "_", suffix: ".png", start: 1, end: 5, zeroPad: 3 }),
                frameRate: frameRateWalk,
                repeat: -1
            });

            this.anims.create({
                key: "InAirRight" + mode,
                frames: this.anims.generateFrameNames(this.texture.key, { prefix: "jumpRight" + mode + "_", suffix: ".png", start: 3, end: 3, zeroPad: 3 }),
                frameRate: 10,
                repeat: -1
            });

            this.anims.create({
                key: "InAirLeft" + mode,
                frames: this.anims.generateFrameNames(this.texture.key, { prefix: "jumpLeft" + mode + "_", suffix: ".png", start: 3, end: 3, zeroPad: 3 }),
                frameRate: 10,
                repeat: -1
            });
        }

        this.anims.create({
            key: "PunchLeft",
            frames: this.anims.generateFrameNames(this.texture.key, {prefix: "punchLeft_", suffix: ".png", start: 1, end: 5, zeroPad: 3 }),
            frameRate: 18,
            repeat: 0
        });

        this.anims.create({
            key: "PunchRight",
            frames: this.anims.generateFrameNames(this.texture.key, {prefix: "punchRight_", suffix: ".png", start: 1, end: 5, zeroPad: 3 }),
            frameRate: 18,
            repeat: 0
        });

        this.anims.create({
            key: "DeathRight",
            frames: this.anims.generateFrameNames(this.texture.key, { prefix: "deathRight_", suffix: ".png", start: 1, end: 4, zeroPad: 3 }),
            frameRate: 7,
            repeat: 0
        });

        this.anims.create({
            key: "DeathLeft",
            frames: this.anims.generateFrameNames(this.texture.key, { prefix: "deathLeft_", suffix: ".png", start: 1, end: 4, zeroPad: 3 }),
            frameRate: 7,
            repeat: 0
        });

        this.anims.create({
            key: "Climb",
            frames: this.anims.generateFrameNames(this.texture.key, {prefix: "climb_", suffix: ".png", start: 1, end: 4, zeroPad: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.on("animationcomplete_PunchLeft", () => { this.stopAttacking(); }, true);
        this.on("animationcomplete_PunchRight", () => { this.stopAttacking(); }, true);

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
            frames: this.anims.generateFrameNames(this.texture.key, { prefix: "sparkleOrange_", suffix: ".png", start: 1, end: 4, zeroPad: 3 }),
            frameRate: 7,
            repeat: -1
        });

        this.sparkle.anims.create({
            key: "sparkleRed",
            frames: this.anims.generateFrameNames(this.texture.key, { prefix: "sparkleRed_", suffix: ".png", start: 1, end: 4, zeroPad: 3 }),
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
        if (this.keys.up.isDown)
        {
            this.lookUp();
        }
            
        else if (this.keys.down.isDown)
        {
            this.lookDown();
        }
        else
        {
            this.lookStraight();
        }

        if (this.keys.left.isDown)
        {
            this.lookOnLeft();
            this.walk();
        }
        else if (this.keys.right.isDown)
        {
            this.lookOnRight();
            this.walk();
        }
        else
            this.stopWalking();

        if (this.keys.fire.isDown && !this.isMeleeAttacking)
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
        const side = this.isLookingRight ? "Right" : "Left";
        const mode = this.currentWeapon ? "HoldingWeapon" : "";
        const currentAnim = this.anims.currentAnim.key;

        if (this.isDead())
        {
            if (currentAnim != "DeathRight" && currentAnim != "DeathLeft")
                this.anims.play("Death" + side, true);
        }
        else if (this.isClimbing)
        {
            this.anims.play("Climb", true);

            if (this.isOnFloor() || this.body.velocity.y == 0)
            {
                this.anims.pause();
            }
        }
        else if (this.isMeleeAttacking)
        {
            this.anims.play("Punch" + side, true);
        }
        else if (!this.isOnFloor() && !this.wasOnFloor)
        {
            this.anims.play("InAir" + side + mode, true);
        }
        else if (this.isWalking || this.isTakingDmg)
        {
            this.anims.play("Walk" + side + mode, true);
        }
        else
        {
            this.anims.play("Idle" + side + mode, true);
        }
    }

    private updateSparkles(health: number, maxHealth: number): void
    {
        const healthRate = health / maxHealth;

        if (healthRate < 0.4)
        {
            this.sparkle.anims.pause();
            this.sparkle.setVisible(false);
        }
        else if (healthRate < 1)
        {
            this.sparkle.anims.play("sparkleRed", true);
            this.sparkle.setVisible(true);
        }
        else
        {
            this.sparkle.anims.play("sparkleOrange", true);
            this.sparkle.setVisible(true); 
        }
        this.sparkle.setVisible(false);
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

    public recover() : void
    {
        this.isRecovering = true;

        const tweenSlow = this.alphaAnimation(350, 4);
        tweenSlow.on("complete", () => {
            this.setAlpha(1);

            const tweenFast = this.alphaAnimation(100, 6);
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
}