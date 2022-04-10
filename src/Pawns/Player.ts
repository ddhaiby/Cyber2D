import {Pawn} from "./Pawn";
import {IPlayerKeys, PlayerManager} from "../Managers/PlayerManager";
import { PlayerWeapon } from "../Weapons/PlayerWeapon";
import { CST } from "../CST";

export class Player extends Pawn
{
    public isTakingDmg: boolean = false
    private keys: IPlayerKeys;

    constructor(scene: Phaser.Scene, x: number, y: number, texture?: string | Phaser.Textures.Texture) {
        super(scene, x, y, texture);
    }

    // Init
    ////////////////////////////////////////////////////////////////////////

    public init(textureKey?: string) : this
    {
        super.init(textureKey);

        let weapon = new PlayerWeapon(this.scene, 30, "bullet");
        this.equipWeapon(weapon);

        PlayerManager.Instance.reloadKeys(this.scene);
        this.keys = PlayerManager.Instance.keyBinding;
        this.keys.jump.on("down", function (event) {
            this.jump();
        }, this);

        return this;
    }

    protected initAnimations(textureKey: string) : void
    {
        super.initAnimations(textureKey);

        this.anims.create({
            key: "idleRight",
            frames: this.anims.generateFrameNumbers(this.texture.key, { start: 10, end: 10 }),
            frameRate: 1,
            repeat: -1
        });

        this.anims.create({
            key: "idleLeft",
            frames: this.anims.generateFrameNumbers(this.texture.key, { start: 15, end: 15 }),
            frameRate: 1,
            repeat: -1
        });

        const frameRateWalk = 10;
        this.anims.create({
            key: "walkRight",
            frames: this.anims.generateFrameNumbers(this.texture.key, { start: 0, end: 4 }),
            frameRate: frameRateWalk,
            repeat: -1
        });

        this.anims.create({
            key: "walkLeft",
            frames: this.anims.generateFrameNumbers(this.texture.key, { start: 5, end: 9 }),
            frameRate: frameRateWalk,
            repeat: -1
        });

        this.anims.create({
            key: "inAirRight",
            frames: this.anims.generateFrameNumbers(this.texture.key, { start: 13, end: 13 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: "inAirLeft",
            frames: this.anims.generateFrameNumbers(this.texture.key, { start: 18, end: 18 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: "climb",
            frames: this.anims.generateFrameNumbers(this.texture.key, { start: 20, end: 23 }),
            frameRate: 10,
            repeat: -1
        });

        const keyIdle = this.isLookingRight ? "idleRight" : "idleLeft";
        this.anims.play(keyIdle, true);
    }

    protected initAttributes() : void
    {
        super.initAttributes();
        this.attributes.set(CST.PLAYER.ATTRIBUTES.WALK_SPEED, 180);
        this.attributes.set(CST.PLAYER.ATTRIBUTES.CLIMB_SPEED, 150);
    }

    public reset(x: number, y: number) : void
    {
        super.reset(x, y);
        this.isTakingDmg = false;
        this.stopRecovering();
    }

    // Update
    ////////////////////////////////////////////////////////////////////////

    public update(...args: any[]) : void
    {
        super.update(args);

        this.wasJumping = this.isJumping;
        this.wasClimbing = this.isClimbing;

        if (this.isOnFloor())
            this.isJumping = false;

        if (this.dead() || this.isTakingDmg)
            return;

        this.updateControl();
    }

    protected updateControl() : void
    {
        if (this.keys.up.isDown)
            this.lookUp();
        else if (this.keys.down.isDown)
            this.lookDown();
        else
            this.lookStraight();

        if (this.keys.left.isDown)
        {
            this.lookOnLeft();
            this.walk();
        }
        else if (this.keys.right.isDown)
        {
            this.lookOnRight();
            this.walk();
        } else
            this.stopWalking();

        if ( this.keys.fire.isDown)
            this.fire();
        else
            this.stopFiring();
    }

    protected updateAnimations() : void
    {
        const currentAnim = this.anims.currentAnim.key;

        if (this.isClimbing)
        {
            if (this.body.velocity.y != 0)
                this.anims.play("climb", true);
            else
                this.anims.pause();
        }
        else if (!this.isOnFloor())
        {
            this.anims.play(this.isLookingRight ? "inAirRight" : "inAirLeft", true);
        }
        else if (this.isWalking || this.isTakingDmg)
        {
            this.anims.play(this.isLookingRight ? "walkRight" : "walkLeft", true);
        }
        else
        {
            this.anims.play(this.isLookingRight ? "idleRight" : "idleLeft", true);
        }
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

    public hurt(health: number, hurtFromRight?: boolean) : void
    {
        super.hurt(health);
        if (!this.dead())
        {
            this.stopWalking();
            this.stopClimbing();

            let velocityProjection = 250;
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
            this.recover();
        }
    }
}