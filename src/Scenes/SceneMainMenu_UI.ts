import { CST } from "../CST";
import { CYBR_Scene } from "./CYBR_Scene";
import { SceneData } from "./CYBR_Scene";
import { SceneGame } from "./SceneGame";
import { CYBR_Button } from "../UI/CYBR_Button";
import { CYBR_Graphics } from "../Utils/CYBR_Graphics";

export class SceneMainMenu_UI extends CYBR_Scene
{
    private sceneGame: SceneGame;
    private splashScreenImage: Phaser.GameObjects.Image;
    private splashScreenBackground: CYBR_Graphics;

    constructor()
    {
        super({key: CST.SCENES.MAINMENU_UI});
    }

    // Init
    ////////////////////////////////////////////////////////////////////////

    public init() {}

    // Create
    ////////////////////////////////////////////////////////////////////////

    public create() : void
    {        
        // Background
        let background = new CYBR_Graphics(this);
        background.width = 500;
        background.height = 320;
        background.fillStyle(0x171822);
        background.fillRect(0, 0, background.width, background.height);
        this.centerItem(background);

        // Buttons
        let buttonPlay = new CYBR_Button(this, 0, background.y + 52, "Play", "btn_background");
        buttonPlay.onClicked(this.onPlayClicked, this);
        this.centerHItem(buttonPlay);

        let buttonSettings = new CYBR_Button(this, 0, buttonPlay.y + buttonPlay.height + 32, "Settings", "btn_background");
        buttonSettings.onClicked(this.onSettingsClicked, this);
        this.centerHItem(buttonSettings);

        // Game Scene
        const sceneData = {level: 1} as SceneData;
        this.sceneGame = this.scene.add(CST.SCENES.GAME, SceneGame, false, sceneData) as SceneGame;

        // Splash screen
        this.splashScreenBackground = new CYBR_Graphics(this, {x: 0, y: 0, width: this.sys.game.canvas.width, height: this.sys.game.canvas.height});
        this.splashScreenBackground.setVisible(false);
        this.splashScreenBackground.fillStyle(0x000000);
        this.splashScreenBackground.fillRect(this.splashScreenBackground.x, this.splashScreenBackground.y, this.splashScreenBackground.width, this.splashScreenBackground.height);

        this.splashScreenImage = this.add.image(this.sys.game.canvas.width / 2, this.sys.game.canvas.height / 2, "cyberSplashScreen");
        this.splashScreenImage.setVisible(false);
    }

    // Update
    ////////////////////////////////////////////////////////////////////////

    public update(time: number, delta: number) : void
    {
        super.update(time, delta);
    }

    private onPlayClicked() : void
    {
        this.splashScreenBackground.setAlpha(0);
        this.splashScreenBackground.setVisible(true);

        this.tweens.add({
            targets: this.splashScreenBackground,
            alpha: 1,
            ease: Phaser.Math.Easing.Linear,
            delay: 100,
            duration: 1000,
            onComplete: this.showSplashScreen,
            onCompleteScope: this
        });
    }

    private showSplashScreen() : void
    {
        this.splashScreenImage.setAlpha(0);
        this.splashScreenImage.setVisible(true);

        this.tweens.add({
            targets: this.splashScreenImage,
            alpha: 1,
            ease: Phaser.Math.Easing.Linear,
            delay: 500,
            duration: 1500,
            onComplete: this.hideSplashScreen,
            onCompleteScope: this
        });
    }

    private hideSplashScreen() : void
    {
        this.tweens.add({
            targets: this.splashScreenImage,
            alpha: 0,
            ease: Phaser.Math.Easing.Linear,
            delay: 2000,
            duration: 800,
            onComplete: function () : void {
                this.time.delayedCall(200, () => {
                    this.launchGame();
                    this.splashScreenImage.setVisible(false);
                    this.splashScreenBackground.setVisible(false);
                }, null, this);
            },
            onCompleteScope: this
        });
    }
    
    private launchGame() : void
    {
        this.sceneGame.scene.restart({level: 1} as SceneData);
        this.scene.setActive(false);
        this.scene.setVisible(false);
        this.sceneGame.showGame(true);
    }

    private onSettingsClicked() : void
    {
        console.log("Settings requested");
    }
}