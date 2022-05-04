import { CST } from "../CST";
import { CYBR_Graphics } from "../Utils/CYBR_Graphics";

export class LevelTransition extends Phaser.GameObjects.Container {

    private levelTitle: Phaser.GameObjects.Text;
    private levelSubTitle: Phaser.GameObjects.Text;
    private levelDescription: Phaser.GameObjects.Text;
    private levelBackground: CYBR_Graphics;

    constructor(scene: Phaser.Scene, x: number, y: number, width: number, height: number)
    {
        super(scene, x, y);

        this.width = width;
        this.height = height;

        this.levelBackground = new CYBR_Graphics(scene, {x: 0, y: 0 , width: 0, height: 0});
        this.add(this.levelBackground);

        this.levelTitle = scene.add.text(0, 240, "", { font: '82px Gemunu Libre', color: '#ffbc32', align: "center" });
        this.levelTitle.setOrigin(0.5);
        this.levelTitle.setSize(600, 0);
        this.add(this.levelTitle);

        this.levelSubTitle = scene.add.text(0, 400, "", { font: '40px Gemunu Libre', color: '#ffedc9', align: "center" });
        this.levelSubTitle.setOrigin(0.5);
        this.levelSubTitle.setSize(600, 0);
        this.add(this.levelSubTitle);

        this.levelDescription = scene.add.text(0, 600, "", { font: '21px Gemunu Libre', color: '#ffedc9', align: "center" });
        this.levelDescription.setOrigin(0.5);
        this.levelDescription.setSize(600, 0);
        this.add(this.levelDescription);

        scene.add.existing(this);
    }
    
    public onAnimationCompleted(key: string, fn: Function, context?: any) : void
    {
        this.on(key, fn, context);
    }

    public showLevelCompletedAnimation() : void 
    {
        this.levelBackground.x = 0;
        this.levelBackground.width = 0;
        this.levelBackground.height = this.height;
        this.levelBackground.clear();
        this.levelBackground.fillStyle(0x171822);
        this.levelBackground.fillRect(this.levelBackground.x, this.levelBackground.y, this.levelBackground.width, this.levelBackground.height);

        this.scene.tweens.add({
            targets: this.levelBackground,
            width: this.width,
            ease: Phaser.Math.Easing.Linear,
            delay: 1000,
            duration: 800,
            onUpdate: function() : void {
                this.levelBackground.clear();
                this.levelBackground.fillStyle(0x171822);
                this.levelBackground.fillRect(this.levelBackground.x, this.levelBackground.y, this.levelBackground.width, this.levelBackground.height);
            },
            onComplete: function() : void {
                this.scene.time.delayedCall(400, () => {
                    this.emit("levelCompletedAnimationCompleted");
                });
            },
            onUpdateScope: this,
            onCompleteScope: this
        });
    }

    public showLevelStartedAnimation(level: number) : void
    {
        this.levelBackground.x = 0;
        this.levelBackground.width = this.width;
        this.levelBackground.height = this.height;
        this.levelBackground.clear();
        this.levelBackground.fillStyle(0x171822);
        this.levelBackground.fillRect(this.levelBackground.x, this.levelBackground.y, this.levelBackground.width, this.levelBackground.height);

        this.levelTitle.setX(this.levelBackground.width / 2);
        this.levelTitle.text = "Level " + level;

        this.levelSubTitle.setX(this.levelBackground.width / 2);
        this.levelSubTitle.text = CST.LEVELS[level - 1].TITLE;

        this.levelDescription.setX(this.levelBackground.width / 2);
        this.levelDescription.text = CST.LEVELS[level - 1].DESCRIPTION;

        this.levelBackground.setVisible(true);
        this.levelTitle.setVisible(true);
        this.levelSubTitle.setVisible(true);
        this.levelDescription.setVisible(true);

        this.scene.tweens.add({
            targets: this.levelBackground,
            width: 0,
            ease: Phaser.Math.Easing.Linear,
            delay: 2200,
            duration: 1000,
            onUpdate: function() : void {
                this.levelBackground.x = (this.width - this.levelBackground.width) / 1.5,
                this.levelBackground.clear();
                this.levelBackground.fillStyle(0x171822);
                this.levelBackground.fillRect(this.levelBackground.x, this.levelBackground.y, this.levelBackground.width, this.levelBackground.height);

                this.levelTitle.setX(this.levelBackground.x + this.width -this.levelBackground.width / 2);
                this.levelSubTitle.setX(this.levelBackground.x + this.width -this.levelBackground.width / 2);
                this.levelDescription.setX(this.levelBackground.x + this.width -this.levelBackground.width / 2);
            },
            onComplete: function() : void { this.emit("levelStartedAnimationCompleted"); },
            onUpdateScope: this,
            onCompleteScope: this
        });
    }
}