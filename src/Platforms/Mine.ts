import { CYBR_AudioManager } from "../Managers/CYBR_AudioManager";

export class Mine extends Phaser.Physics.Arcade.Sprite
{
    private delayAboutToExplode: number = 2000;
    private delayExplosion: number = 3000;
    private damage: number = 5;
    private bigExplosion: boolean = false;

    private _exploding: boolean = false;
    private _activated: boolean = false;

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string | Phaser.Textures.Texture, frame?: string | number)
    {
        super(scene, x, y, texture, frame);

        this.on(Phaser.Animations.Events.ANIMATION_START, function (anim: Phaser.Animations.Animation, frame: Phaser.Animations.AnimationFrame) {
            this.emit("animationstart_" + anim.key, anim, frame);
        }, this);

        this.on(Phaser.Animations.Events.ANIMATION_COMPLETE, function (anim: Phaser.Animations.Animation, frame: Phaser.Animations.AnimationFrame) {
            this.emit("animationcomplete_" + anim.key, anim, frame);
        }, this);
    }

    public init(): void
    {
        this.setOrigin(0.5, this.flipY ? 0 : 1);
        this.setY(this.flipY ? this.y - this.height * 0.5 : this.y + this.height * 0.5);

        this.initAnimations();
    }

    private initAnimations() : void
    {
        this.setTexture("mine");

        const sizeExplosion = this.bigExplosion ? "Big" : "";

        this.anims.create({
            key: "Idle",
            frames: this.anims.generateFrameNames(this.texture.key, { prefix: "mineActivation_", suffix: ".png", start: 1, end: 1, zeroPad: 3 }),
            frameRate: 1,
            repeat: 0
        });

        this.anims.create({
            key: "Activating",
            frames: this.anims.generateFrameNames(this.texture.key, { prefix: "mineActivation_", suffix: ".png", start: 1, end: 4, zeroPad: 3 }),
            frameRate: 4,
            repeat: -1
        });

        this.anims.create({
            key: "AboutToExplode",
            frames: this.anims.generateFrameNames(this.texture.key, { prefix: "mineActivation_", suffix: ".png", start: 1, end: 4, zeroPad: 3 }),
            frameRate: 12,
            repeat: -1
        });

        this.anims.create({
            key: "Explode",
            frames: this.anims.generateFrameNames(this.texture.key, { prefix: "mineExplosion" + sizeExplosion + "_", suffix: ".png", start: 2, end: this.bigExplosion ? 8 : 6, zeroPad: 3 }),
            frameRate: 12,
            repeat: 0
        });

        this.on("animationstart_Explode", () => {
            this.explode();
        }, true);

        this.on("animationcomplete_Explode", () => {
            this.setVisible(false);
            this._exploding = false;
        }, true);

        this.anims.play("Idle", true);
    }

    public reset(): void
    {
        this._activated = false;
        this._exploding = false;
        this.enableBody(false, 0, 0, true, true);
        this.setVisible(true);
        this.anims.play("Idle", true);

        // Make sure the collision box is of the size of the mine
        this.body.setSize(this.anims.currentAnim.frames[0].frame.realWidth, this.anims.currentAnim.frames[0].frame.realHeight);
    }

    public activate(): void
    {
        if (!this._activated)
        {
            this._activated = true;
            this.disableBody();

            this.anims.play("Activating", true);
            this.anims.playAfterDelay("AboutToExplode", this.delayAboutToExplode);
            this.scene.time.delayedCall(this.delayExplosion, () => { this.anims.play("Explode", true); }, null, this);
        }
    }

    private explode(): void
    {
        this._exploding = true;
        this.enableBody(false, 0, 0, true, true);
        // this.body.setSize(this.sizeExplosion, this.sizeExplosion);
        CYBR_AudioManager.instance.playSound("mineExplosion");
        this.scene.time.delayedCall(100, () => { this.disableBody(); this._activated = false; }, null, this);
    }

    public get exploding(): boolean
    {
        return this._exploding;
    }

    public get activated(): boolean
    {
        return this._activated;
    }

    public getDamage(): number
    {
        return this.damage;
    }
}