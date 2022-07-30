export class Spike extends Phaser.Physics.Arcade.Sprite
{
    private durationPrepareAttack: number = 1000;
    private durationAttack: number = 1500;
    private durationHide: number = 1000;
    private startDelay: number = 0;
    private alwaysShow: boolean = false;
    private damage: number = 5;

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string | Phaser.Textures.Texture, frame?: string | number)
    {
        super(scene, x, y, texture, frame);

        this.on(Phaser.Animations.Events.ANIMATION_COMPLETE, function (anim: Phaser.Animations.Animation, frame: Phaser.Animations.AnimationFrame) {
            this.emit("animationcomplete_" + anim.key, anim, frame);
        }, this);

        this.on(Phaser.Animations.Events.ANIMATION_START, function (anim: Phaser.Animations.Animation, frame: Phaser.Animations.AnimationFrame) {
            this.emit("animationstart_" + anim.key, anim, frame);
        }, this);
    }

    public init(): void
    {
        this.initAnimations();
    }

    private initAnimations() : void
    {
        const spikeName = this.name;
        const idxPrepareAttack = 1;
        const idxAttackEnd = (spikeName == "spikeShort") ? 2 : 4;

        this.anims.create({
            key: "PrepareAttack",
            frames: this.anims.generateFrameNumbers(spikeName, { start: 0, end: idxPrepareAttack }),
            frameRate: 30,
        });

        this.anims.create({
            key: "Attack",
            frames: this.anims.generateFrameNumbers(spikeName, { start: idxPrepareAttack, end: idxAttackEnd }),
            frameRate: 30,
        });

        this.anims.create({
            key: "Hide",
            frames: this.anims.generateFrameNumbers(spikeName, { start: idxAttackEnd, end: 0 }),
            frameRate: 30,
        });

        if (this.alwaysShow)
        {
            this.anims.play({ key: "Attack", frameRate: 100 });
        }
        else
        {
            this.on("animationcomplete_PrepareAttack", () => {
                this.anims.playAfterDelay("Attack", this.durationPrepareAttack);
            }, true);
    
            this.on("animationstart_Attack", () => {
                this.enableBody(false, 0, 0, true, true);
            }, true);
    
            this.on("animationcomplete_Attack", () => {
                this.anims.playAfterDelay("Hide", this.durationAttack);
            }, true);
    
            this.on("animationstart_Hide", () => {
                this.disableBody();
            }, true);
    
            this.on("animationcomplete_Hide", () => {
                this.anims.playAfterDelay("PrepareAttack", this.durationHide);
            }, true);
    
            this.anims.playAfterDelay("PrepareAttack", this.startDelay);
        }
    }

    public getDamage(): number
    {
        return this.damage;
    }
}