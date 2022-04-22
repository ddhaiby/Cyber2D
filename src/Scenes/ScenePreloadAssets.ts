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
        this.loadAudios();
        this.loadVideos();
        this.loadPawns();

        this.load.setPath("./assets");

        this.load.image("background", "./background.png");
        this.load.atlas("UI_atlas", "UI_atlas.png", "UI_atlas.json");
        this.load.atlas("platform_atlas", "platform_atlas.png", "platform_atlas.json");
        this.load.atlas("weapon_atlas", "weapon_atlas.png", "weapon_atlas.json");
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

    private loadPawns() : void
    {
        this.load.setPath("./assets/pawns");
        this.load.atlas("player", "player.png", "player.json");
        this.load.atlas("patrol", "patrol.png", "patrol.json");
    }

    // Create
    ////////////////////////////////////////////////////////////////////////
  
    public create() : void
    {
        this.textures.addSpriteSheetFromAtlas("portal", { atlas: "platform_atlas", frame: "portal.png", frameWidth: 32, frameHeight: 32 });
        this.createWeaponAtlas();
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