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
        this.loadAudioSprite();
        this.loadVideos();
        this.loadPawns();
        this.loadWeapons();

        this.load.setPath("./assets");

        this.load.image("background", "./background.png");
        this.load.atlas("UI_atlas", "UI_atlas.png", "UI_atlas.json");
        this.load.atlas("platform_atlas", "platform_atlas.png", "platform_atlas.json");
    }

    /** Load audios from an audio sprite. Below is an example to generate an audio sprite from audios (make sure to run in admin). 
     * audiosprite -e "mp3,ogg" -o ./audiosprite *.mp3 -f howler
     * Check https://www.npmjs.com/package/audiosprite
      */
    private loadAudioSprite() : void
    {
        this.load.setPath("./assets/audio");
        this.load.json("audiosprite", "audiosprite.json");
    }

    private loadVideos() : void
    {
        this.load.setPath("./assets/video");
        //this.load.video("cyberIntro", "./cyberIntro.mp4");
    }

    private loadPawns() : void
    {
        this.load.setPath("./assets/pawns");
        this.load.atlas("player", "player.png", "player.json");
        this.load.atlas("patrol", "patrol.png", "patrol.json");
    }

    private loadWeapons() : void
    {
        this.load.setPath("./assets/weapons");
        this.load.atlas("weapon_atlas", "weapon_atlas.png", "weapon_atlas.json");
        this.load.json("handPositions", "handPositions.json");
    }

    // Create
    ////////////////////////////////////////////////////////////////////////
  
    public create() : void
    {
        this.textures.addSpriteSheetFromAtlas("portal", { atlas: "platform_atlas", frame: "portal.png", frameWidth: 32, frameHeight: 32 });
        this.createWeaponAtlas();
        this.createAudioManager();
        this.createMainMenu();
    }

    private createWeaponAtlas(): void
    {
        this.textures.addSpriteSheetFromAtlas("pistol", { atlas: "weapon_atlas", frame: "pistol.png", frameWidth: 22, frameHeight: 13 });
        this.textures.addSpriteSheetFromAtlas("shotgun", { atlas: "weapon_atlas", frame: "shotgun.png", frameWidth: 22, frameHeight: 13 });
    }

    private createMainMenu(): void
    {
        const sceneMainMenu = this.scene.add(CST.SCENES.MAINMENU_UI, SceneMainMenu_UI, false, null) as SceneMainMenu_UI; 

        // Splash screen
        this.splashScreen = new SplashScreen(this, 0, 0, this.scale.displaySize.width, this.scale.displaySize.height);
        this.splashScreen.onAnimationCompleted(() => {
            this.scene.remove(CST.SCENES.PRELOAD_ASSETS);
            sceneMainMenu.scene.start();
        }, this);

        this.splashScreen.showAnimation();
    }

    private createAudioManager(): void
    {
        let audioSprite = this.cache.json.get("audiosprite");
        audioSprite = JSON.parse(JSON.stringify(audioSprite).replace("urls", "src").replace("./", "./assets/audio/")/*.replace("./", "./assets/audio/")*/);
        AudioManager.init(audioSprite);
    }
}