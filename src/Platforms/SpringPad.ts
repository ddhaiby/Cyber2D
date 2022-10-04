import { AudioManager } from "../Managers/AudioManager";
import { Pawn } from "../Pawns/Pawn";

export class SpringPad extends Phaser.Physics.Arcade.Sprite
{
    /** Whether this spring pad is activating */
    private _activating: boolean = false;

    /** Determine the velocity to apply to the pawn */
    private springStrength: number = 400;

    /** Whether the spring applies vertical  */
    private _isVertical: boolean = true;

    private currentPawn: Pawn = null;

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string | Phaser.Textures.Texture, frame?: string | number)
    {
       super(scene, x, y, texture, frame);
    }

    public init(isVertical: boolean): void
    {
        this._isVertical = isVertical;

        if (this._isVertical)
        {
            this.setOrigin(0.5, 1);
            this.setY(this.y + this.height * 0.5);
        }
        else
        {
            // this.setOrigin(0, 0.5);
            // this.setX(this.x - this.width * 0.5);
        }

        this.initAnimations();

        const springPadBody = (this.body as Phaser.Physics.Arcade.Body);
        springPadBody.allowGravity = false;
        springPadBody.setImmovable(true);
    }

    private initAnimations() : void
    {
        this.setTexture("springPad");

        this.anims.create({
            key: "Idle",
            frames: this.anims.generateFrameNames(this.texture.key, { prefix: "springPad_", suffix: ".png", start: 4, end: 4, zeroPad: 3 }),
            frameRate: 1,
            repeat: 0
        });

        const frameRateActivation = 20;

        this.anims.create({
            key: "Down",
            frames: this.anims.generateFrameNames(this.texture.key, { prefix: "springPad_", suffix: ".png", start: 4, end: 1, zeroPad: 3 }),
            frameRate: frameRateActivation,
            repeat: 0
        });

        this.anims.create({
            key: "Up",
            frames: this.anims.generateFrameNames(this.texture.key, { prefix: "springPad_", suffix: ".png", start: 1, end: 4, zeroPad: 3 }),
            frameRate: frameRateActivation,
            repeat: 0
        });

        this.anims.play("Idle", true);

        if (!this._isVertical)
        {
            this.rotation = Math.PI / 2;
        }

        this.on(Phaser.Animations.Events.ANIMATION_UPDATE, function (anim: Phaser.Animations.Animation, frame: Phaser.Animations.AnimationFrame) {
            const springPadBody = (this.body as Phaser.Physics.Arcade.Body);

            if (this.isVertical)
            {
                springPadBody.setSize(this.width, this.height);
            }
            else
            {
                // springPadBody.setSize(this.height, this.width);
                // this.setOrigin(0, 0.5);
                // // this.setX(this.x - this.width * 0.5);
            }
        }, this);

        this.on(Phaser.Animations.Events.ANIMATION_COMPLETE, function (anim: Phaser.Animations.Animation, frame: Phaser.Animations.AnimationFrame) {
            if (anim.key == "Down")
            {
                if (this.isVertical)
                {
                    this.currentPawn.setVelocityY(-this.springStrength);
                    this.currentPawn = null;
                    this._activating = false;
                }
                else
                {
                    let newVelocityX = this.springStrength;
                    if (this.flipX)
                    {
                        newVelocityX = -this.springStrength;
                        this.currentPawn.lookOnLeft();
                    }
                    else
                    {
                        this.currentPawn.lookOnRight();
                    }

                    this.currentPawn.setVelocityX(newVelocityX);
                    this.currentPawn.isTakingDmg = true;

                    this.scene.time.delayedCall(300, () => {
                        this.currentPawn.isTakingDmg = false;
                        this.currentPawn.setVelocityX(0);

                        this.currentPawn = null;
                        this._activating = false;
                    }, null, this);
                }

                this.anims.play("Up", true);
                AudioManager.playSound("SpringPadActivating");
            }
        }, this);
    }

    public activate(pawn: Pawn): void
    {
        if (!this._activating)
        {
            this._activating = true;
            this.currentPawn = pawn;
            this.anims.play("Down", true);
        }
    }

    public get activating(): boolean
    {
        return this._activating;
    }

    public get isVertical(): boolean
    {
        return this._isVertical;
    }
}