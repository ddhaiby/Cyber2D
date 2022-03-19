import {Pawn} from "./Pawn";
import {IPlayerKeys, PlayerManager} from "../Managers/PlayerManager";


export class Player extends Pawn {

    public isRecovering: boolean = false;
    public isTakingDmg: boolean = false
    private keys:IPlayerKeys;
    constructor(scene: Phaser.Scene, x: number, y: number, texture: string | Phaser.Textures.Texture) {
        super(scene, x, y, texture);
    }

    // Init
    ////////////////////////////////////////////////////////////////////////

    public init(scene: Phaser.Scene, textureKey?: string): void {
        super.init(scene, textureKey);
     PlayerManager.Instance.reloadKeys(scene);
     this.keys = PlayerManager.Instance.keyBinding;
     this.keys.jump.on('down', function (event) {
                this.jump();
            }, this);
            console.log(this.keys)
    }

    public reset(x: number, y: number): void {
        super.reset(x, y);
        this.isTakingDmg = false;
        this.stopRecovering();
    }

    // Update
    ////////////////////////////////////////////////////////////////////////

    public update(...args: any[]): void {
        super.update(args);
        if (this.dead() || this.isTakingDmg)
            return;

        if (this.keys.up.isDown)
            this.lookUp();
        else if (this.keys.down.isDown)
            this.lookDown();
        else
            this.lookStraight();

        if (this.keys.left.isDown) {
            this.lookOnLeft();
            this.walk();
        } else if (this.keys.right.isDown) {
            this.lookOnRight();
            this.walk();
        } else
            this.stopWalking();

        if ( this.keys.fire.isDown)
            this.fire();
        else
            this.stopFiring();
    }

    protected updateAnimations(): void {
        if (this.isClimbing) {
            if (this.body.velocity.y != 0)
                this.anims.play("up", true);
            else
                this.anims.pause();
        } else if (this.isWalking || this.isTakingDmg) {
            this.anims.play(this.isLookingRight ? "right" : "left", true);
        } else {
            this.anims.pause();
        }
    }

    public recover(): void {
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

    private alphaAnimation(duration: number, repeat: number): Phaser.Tweens.Tween {
        return this.scene.tweens.add({
            targets: this,
            alpha: 0.2,
            ease: Phaser.Math.Easing.Linear,
            yoyo: true,
            duration: duration,
            repeat: repeat
        });
    }

    public stopRecovering(): void {
        this.isRecovering = false;
    }

    public hurt(health: number, hurtFromRight?: boolean): void {
        super.hurt(health);
        if (!this.dead()) {
            this.stopWalking();
            this.stopClimbing();

            let velocityProjection = 250;
            if (hurtFromRight) {
                this.setVelocityX(-velocityProjection);
                this.lookOnRight();
            } else {
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