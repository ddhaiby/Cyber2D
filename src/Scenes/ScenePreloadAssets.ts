import { CST } from "../CST";
import { CYBR_Scene } from "./CYBR_Scene";
import { SceneMainMenu_UI } from "./SceneMainMenu_UI";
import { SplashScreen } from "../UI/SplashScreen";
import { AudioManager } from "../Managers/AudioManager";

export class ScenePreloadAssets extends CYBR_Scene
{
    private splashScreen: SplashScreen;

    constructor()
    {
        super({key: CST.SCENES.PRELOAD_ASSETS});
    }

    // Init
    ////////////////////////////////////////////////////////////////////////

    public init() : void
    {
    }

    // Preload
    ////////////////////////////////////////////////////////////////////////

    public preload() : void
    {
        this.loadImages();
        this.loadSprites();
        this.loadAudios();
        this.loadVideos();
    }

    private loadImages() : void
    {
        // UI
        this.load.setPath("./assets/image/UI");
        this.load.image("btn_background", "./btn_background.png");
        this.load.image("btn_background_hovered", "./btn_background_hovered.png");
        this.load.image("cyberSplashScreen", "./cyberSplashScreen.png");

        // In game
        this.load.setPath("./assets/image");
        this.load.image("sky", "sky.png");
        this.load.image("ground", "platform.png");
        this.load.image("bullet", "bullet.png");
        this.load.image("token_24", "token_24.png");
        this.load.image("healthPackage", "healthPackage.png");
        this.load.image("weaponBoost_48", "weaponBoost_48.png");
        this.load.image("portal", "portal.png");
        this.load.image("movingPlatform", "movingPlatform.png");
        this.load.image("checkpointOff", "checkpointOff.png");
        this.load.image("checkpointOn", "checkpointOn.png");

        this.load.image("ladder", "ladders/ladder.png");
        this.load.image("ladderTop", "ladders/ladderTop.png");
        this.load.image("ladderBottom", "ladders/ladderBottom.png");

        this.load.image("tokenCopper", "tokens/tokenCopper.png");
        this.load.image("tokenSilver", "tokens/tokenSilver.png");
        this.load.image("tokenGold", "tokens/tokenGold.png");
        this.load.image("tokenCyber", "tokens/tokenCyber.png");
    }

    private loadSprites() : void
    {
        this.load.setPath("./assets/sprite");
        this.load.spritesheet("player", "Player.png", { frameWidth: 32, frameHeight: 38 });
        this.load.spritesheet("robotPatrolPistol", "RobotPatrolPistol.png", { frameWidth: 32, frameHeight: 38 });
        this.load.spritesheet("robotPatrolRifle", "RobotPatrolRifle.png", { frameWidth: 32, frameHeight: 38 });
    }

    private loadAudios() : void
    {
        // Music
        this.load.setPath("./assets/audio/music");
        this.load.audio("8-bit-samba", "./8-bit-samba20by20ian-post20Artlist.mp3");
        this.load.audio("breaking-point", "./breaking-point20by20ian-post20Artlist.mp3");
        this.load.audio("super-duper", "./super-duper20by20ian-post20Artlist.mp3");
    }

    private loadVideos() : void
    {
        this.load.setPath("./assets/video");
        //this.load.video("cyberIntro", "./cyberIntro.mp4");
    }

    // Create
    ////////////////////////////////////////////////////////////////////////
  
    public create() : void
    {
        const sceneMainMenu = this.scene.add(CST.SCENES.MAINMENU_UI, SceneMainMenu_UI, false, null) as SceneMainMenu_UI; 
        AudioManager.init(sceneMainMenu);

        // Splash screen
        this.splashScreen = new SplashScreen(this, 0, 0, this.scale.displaySize.width, this.scale.displaySize.height);
        this.splashScreen.onAnimationCompleted(() => {
            this.scene.remove(CST.SCENES.PRELOAD_ASSETS);
            sceneMainMenu.scene.start();
        }, this);

        this.splashScreen.showAnimation();
    }
}