import { CYBR_Graphics } from "../Utils/CYBR_Graphics";

export class SplashScreen extends Phaser.GameObjects.Container {

    private image: Phaser.GameObjects.Image;
    private background: CYBR_Graphics;

    constructor(scene: Phaser.Scene, x: number, y: number, width: number, height: number)
    {        
        super(scene, x, y);
        
        this.background = new CYBR_Graphics(scene, {x: 0, y: 0, width: width, height: height});
        this.background.fillStyle(0x000000);
        this.background.fillRect(this.background.x, this.background.y, this.background.width, this.background.height);
        this.add(this.background);

        this.image = scene.add.image(width / 2, height / 2, "cyberSplashScreen");
        this.add(this.image);

        scene.add.existing(this);
    }

    public showAnimation(): void 
    {
        this.background.setAlpha(0);
        this.background.setVisible(true);

        this.image.setAlpha(0);
        this.image.setVisible(true);

        this.scene.tweens.add({
            targets: this.background,
            alpha: 1,
            ease: Phaser.Math.Easing.Linear,
            delay: 100,
            duration: 1000,
            onComplete: this.showImage,
            onCompleteScope: this
        });
    }

    private showImage() : void
    {
        this.image.setAlpha(0);
        this.image.setVisible(true);

        this.scene.tweens.add({
            targets: this.image,
            alpha: 1,
            ease: Phaser.Math.Easing.Linear,
            delay: 500,
            duration: 1500,
            onComplete: this.hideImage,
            onCompleteScope: this
        });
    }

    private hideImage() : void
    {
        this.on("animationCompleted", () => { console.log("tes0")}, this);
        
        this.scene.tweens.add({
            targets: this.image,
            alpha: 0,
            ease: Phaser.Math.Easing.Linear,
            delay: 2500,
            duration: 800,
            onComplete: function () : void {
                this.scene.time.delayedCall(200, () => {
                    this.image.setVisible(false);
                    this.background.setVisible(false);
                    this.emit("animationCompleted");
                }, null, this);
            },
            onCompleteScope: this
        });
    }

    public onAnimationCompleted(fn: Function, context?: any) : void
    {
        this.on("animationCompleted", fn, context);
    }
}