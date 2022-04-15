import { Player } from "../Pawns/Player";

export class Portal extends Phaser.Physics.Arcade.Sprite
{
    private activating: boolean = false;
    private activated: boolean = false;

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string | Phaser.Textures.Texture, frame?: string | number)
    {
       super(scene, x, y, texture, frame);
    }

    public init(): void
    {
        this.initAnimations();
    }

    public reset(): void
    {
        this.enableBody(true, this.x, this.y, true, true);
        this.anims.play("off", true);
        this.activating = false;
        this.activated = false;
    }

    private initAnimations() : void
    {
        this.anims.create({
            key: "off",
            frames: this.anims.generateFrameNumbers("portal", { start: 0, end: 0 }),
            frameRate: 1,
            repeat: 0
        });

        this.anims.create({
            key: "activating",
            frames: this.anims.generateFrameNumbers("portal", { start: 1, end: 3 }),
            frameRate: 2,
            repeat: 0
        });

        this.anims.play("off", true);

        this.on(Phaser.Animations.Events.ANIMATION_COMPLETE, function (anim: Phaser.Animations.Animation, frame: Phaser.Animations.AnimationFrame) {
            if (anim.key == "activating")
            {
                this.activating = false;
                this.activated = true;
                this.disableBody(true);
                this.emit("activated", anim, frame);
            }
        }, this);
    }

    public activate(player: Player): void
    {
        if (!this.activating && !this.activated)
        {
            this.activating = true;
            this.anims.play("activating", true);
        }
    }

    public onActivated(fn: Function, context?: any): this
    {
        this.on("activated", fn, context);
        return this;
    }
}