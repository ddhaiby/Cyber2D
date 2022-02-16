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

    init() {}

    // Preload
    ////////////////////////////////////////////////////////////////////////

    preload()
    {
        this.loadImages();
        this.loadSprites();
        this.loadAudio();
    }

    loadImages()
    {
        // UI
        this.load.setPath("./assets/image/UI/GameMenu");
        this.load.image("buttonPlay", "buttonPlay.png");
        this.load.image("buttonSettings", "buttonSettings.png");
        this.load.image("buttonLoginMetaMask", "buttonLoginMetaMask.png");
        this.load.image("buttonMainMenu", "buttonMainMenu.png");
        this.load.image("buttonRestart", "buttonRestart.png");
        this.load.image("buttonResume", "buttonResume.png");

        // In game
        this.load.setPath("./assets/image");
        this.load.image("sky", "sky.png");
        this.load.image("ground", "platform.png");
        this.load.image("bullet", "bullet.png");
        this.load.image("token_24", "token_24.png");
        this.load.image("token_48", "token_48.png");
        this.load.image("healItem_48", "healItem_48.png");
        this.load.image("portal", "star.png");
    }

    loadSprites()
    {
        this.load.setPath("./assets/sprite");
        this.load.spritesheet("eyeball", "eyeball.png", { frameWidth: 32, frameHeight: 38 });
        this.load.spritesheet("anna", "anna.png", { frameWidth: 40, frameHeight: 60 });

        //for (let prop in CST.SPRITE) {
        //    this.load.spritesheet(CST.SPRITE[prop], CST.SPRITE[prop], frameConfig);
        //}
    }

    loadAudio()
    {
        this.load.setPath("./assets/audio");
        //this.load.audio("shuinvy-childhood.mp3", "shuinvy-childhood.mp3");
    }

    // Create
    ////////////////////////////////////////////////////////////////////////
  
    create()
    {
        this.scene.add(CST.SCENES.MAINMENU_UI, SceneMainMenu_UI, true, null);
        this.scene.remove(CST.SCENES.PRELOAD_ASSETS);
    }
}