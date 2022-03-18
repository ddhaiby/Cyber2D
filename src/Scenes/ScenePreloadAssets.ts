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
        this.loadAudio();
    }

    private loadImages() : void
    {
        // Videos
        this.load.setPath("./assets/video");
        this.load.video("cyberIntro", "./cyberIntro.mp4");

        // Music
        this.load.setPath("./assets/audio/music");
        this.load.audio("8-bit-samba", "./8-bit-samba20by20ian-post20Artlist.mp3");
        this.load.audio("breaking-point", "./breaking-point20by20ian-post20Artlist.mp3");
        this.load.audio("super-duper", "./super-duper20by20ian-post20Artlist.mp3");

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
        this.load.image("token_48", "token_48.png");
        this.load.image("healItem_48", "healItem_48.png");
        this.load.image("weaponBoost_48", "weaponBoost_48.png");
        this.load.image("portal", "star.png");
        this.load.image("movingPlatform", "movingPlatform.png");
        this.load.image("ladder", "ladder.png");
        this.load.image("ladderTop", "ladderTop.png");
    }

    private loadSprites() : void
    {
        this.load.setPath("./assets/sprite");
        this.load.spritesheet("eyeball", "eyeball.png", { frameWidth: 32, frameHeight: 38 });
        this.load.spritesheet("anna", "anna.png", { frameWidth: 40, frameHeight: 60 });

        //for (let prop in CST.SPRITE) {
        //    this.load.spritesheet(CST.SPRITE[prop], CST.SPRITE[prop], frameConfig);
        //}
    }

    private loadAudio() : void
    {
        this.load.setPath("./assets/audio");
        //this.load.audio("shuinvy-childhood.mp3", "shuinvy-childhood.mp3");
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