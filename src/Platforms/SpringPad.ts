import { CYBR_AudioManager } from "../Managers/CYBR_AudioManager";
import { Pawn } from "../Pawns/Pawn";

export const SPRING_PAD_TYPES = {
    HORIZONTAL: "Horizontal" as SpringPadType,
    VERTICAL: "Vertical" as SpringPadType,
    DIAGONAL: "Diagonal" as SpringPadType
};

export declare type SpringPadType = "Horizontal" | "Vertical" | "Diagonal";

export class SpringPad extends Phaser.Physics.Arcade.Sprite
{
    /** Whether this spring pad is activating */
    private _activating: boolean = false;

    /** Determine the velocity to apply to the pawn */
    private springStrength: number = 400;

    /** Duration of the projection (for horizontal and vertical mode only) */
    private projectionDuration: number = 300;

    /** Whether the spring works in vertical, horizontal or diagonal  */
    private _springPadType: SpringPadType;

    private currentPawn: Pawn = null;

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string | Phaser.Textures.Texture, frame?: string | number)
    {
       super(scene, x, y, texture, frame);
    }

    public init(springPadType: SpringPadType): void
    {
        this._springPadType = springPadType;

        if (this._springPadType == SPRING_PAD_TYPES.HORIZONTAL)
        {
            this.setOrigin(this.flipX ? 1 : 0, 0.5);
            this.setX(this.flipX ? this.x + this.width * 0.5 : this.x - this.width * 0.5);
        }
        else // if (this._springPadType == SPRING_PAD_TYPES.VERTICAL || this._springPadType == SPRING_PAD_TYPES.VERTICAL)
        {
            this.setOrigin(0.5, 1);
            this.setY(this.y + this.height * 0.5);
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
            frames: this.anims.generateFrameNames(this.texture.key, { prefix: "springPad" + this._springPadType + "_", suffix: ".png", start: 4, end: 4, zeroPad: 3 }),
            frameRate: 1,
            repeat: 0
        });

        const frameRateActivation = 20;

        this.anims.create({
            key: "Down",
            frames: this.anims.generateFrameNames(this.texture.key, { prefix: "springPad" + this._springPadType + "_", suffix: ".png", start: 4, end: 1, zeroPad: 3 }),
            frameRate: frameRateActivation,
            repeat: 0
        });

        this.anims.create({
            key: "Up",
            frames: this.anims.generateFrameNames(this.texture.key, { prefix: "springPad" + this._springPadType + "_", suffix: ".png", start: 1, end: 4, zeroPad: 3 }),
            frameRate: frameRateActivation,
            repeat: 0
        });

        this.anims.play("Idle", true);

        this.on(Phaser.Animations.Events.ANIMATION_UPDATE, function (anim: Phaser.Animations.Animation, frame: Phaser.Animations.AnimationFrame) {
            (this.body as Phaser.Physics.Arcade.Body).setSize(this.width, this.height);
        }, this);

        this.on(Phaser.Animations.Events.ANIMATION_COMPLETE, function (anim: Phaser.Animations.Animation, frame: Phaser.Animations.AnimationFrame) {
            if (anim.key == "Down")
            {
                this.anims.play("Up", true);
                CYBR_AudioManager.instance.playSound("SpringPadActivating");

                if (this._springPadType == SPRING_PAD_TYPES.HORIZONTAL)
                {
                    this.projectHorizontal();

                    this.scene.time.delayedCall(this.projectionDuration, () => {
                        this.currentPawn.isTakingDmg = false;
                        this.currentPawn.setVelocityX(0);

                        this.currentPawn = null;
                        this._activating = false;
                    }, null, this);
                }
                else if (this._springPadType == SPRING_PAD_TYPES.VERTICAL)
                {
                    this.projectVertical();
                    this.currentPawn = null;
                    this._activating = false;
                }
                else // if (this._springPadType == SPRING_PAD_TYPES.DIAGONAL)
                {
                    this.projectVertical();
                    this.projectHorizontal();

                    this.scene.time.delayedCall(this.projectionDuration, () => {
                        this.currentPawn.isTakingDmg = false;
                        this.currentPawn.setVelocityX(0);

                        this.currentPawn = null;
                        this._activating = false;
                    }, null, this);
                }
            }
        }, this);
    }

    private projectVertical(): void
    {
        this.currentPawn.setVelocityY(-this.springStrength);
    }

    private projectHorizontal(): void
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

    public get springPadType(): SpringPadType
    {
        return this._springPadType;
    }
}