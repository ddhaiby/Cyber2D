import { CYBR_Graphics } from "../Utils/CYBR_Graphics";

export class SplashScreen extends Phaser.GameObjects.Container {

    private video: Phaser.GameObjects.Video;
    private background: CYBR_Graphics;

    constructor(scene: Phaser.Scene, x: number, y: number, width: number, height: number)
    {        
        super(scene, x, y);

        this.video = scene.add.video(width / 2, height / 2, "cyberIntro");
        this.add(this.video);

        this.background = new CYBR_Graphics(scene, {x: 0, y: 0, width: width, height: height});
        this.background.fillStyle(0x010100);
        this.background.fillRect(this.background.x, this.background.y, this.background.width, this.background.height);
        this.add(this.background);

        scene.add.existing(this);
    }

    public onAnimationCompleted(fn: Function, context?: any) : void
    {
        this.on("animationCompleted", fn, context);
    }

    public showAnimation(): void 
    {
        this.background.setVisible(false);

        this.video.play(false);
        this.video.on("complete", function(){
            
            this.background.setAlpha(0);
            this.background.setVisible(true);

            this.scene.tweens.add({
                targets: this.background,
                alpha: 1,
                ease: Phaser.Math.Easing.Linear,
                delay: 0,
                duration: 1300,
                onComplete: function() : void {
                    this.emit("animationCompleted");
                },
                onCompleteScope: this
            });
        }, this);
    }
}