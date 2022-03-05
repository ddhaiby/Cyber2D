import { CST } from "../CST";
import { CYBR_Scene } from "./CYBR_Scene";
import { SceneMainMenu_UI } from "./SceneMainMenu_UI";

export class ScenePreloadAssets extends CYBR_Scene
{
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
        // UI
        this.load.setPath("./assets/image/UI");
        this.load.image("btn_background", "./btn_background.png");
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
        this.scene.add(CST.SCENES.MAINMENU_UI, SceneMainMenu_UI, true, null);
        this.scene.remove(CST.SCENES.PRELOAD_ASSETS);
    }
}