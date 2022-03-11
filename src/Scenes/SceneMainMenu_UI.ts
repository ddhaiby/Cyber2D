import { CST } from "../CST";
import { CYBR_Scene } from "./CYBR_Scene";
import { SceneData } from "./CYBR_Scene";
import { SceneGame } from "./SceneGame";
import { CYBR_Graphics } from "../Utils/CYBR_Graphics";
import { AudioManager } from "../Managers/AudioManager";
import { RegisterContainer } from "../UI/MainMenu/RegisterContainer";
import { MainMenuContainer } from "../UI/MainMenu/MainMenuContainer";

export class SceneMainMenu_UI extends CYBR_Scene
{
    private sceneGame: SceneGame;
    private registerContainer: RegisterContainer;
    private mainMenuContainer: MainMenuContainer;

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
        AudioManager.playMusic(CST.MAIN_MENU.MUSIC);

        // Background
        let background = new CYBR_Graphics(this);
        background.width = this.scale.displaySize.width;
        background.height = this.scale.displaySize.height;
        background.fillStyle(0x171822);
        background.fillRect(0, 0, background.width, background.height);
        this.centerItem(background);

        this.registerContainer = new RegisterContainer(this, 0, 0);
        this.registerContainer.setVisible(false);
        this.registerContainer.on("playerConnected", this.onPlayerConnected, this);
        this.registerContainer.on("playerCancelledConnection", this.onPlayerCancelledConnection, this);

        // Containers
        this.mainMenuContainer = new MainMenuContainer(this, 0, 0);
        this.mainMenuContainer.setVisible(true);
        this.mainMenuContainer.on("play", this.onPlay, this);
        this.mainMenuContainer.on("settings", this.onSettings, this);
        this.mainMenuContainer.on("connect", this.onConnect, this);

        //this.settingsContainer = new SettingsContainer(this, 0, 0);
        //this.settingsContainer.setVisible(false);

        // Game Scene
        const sceneData = {level: 1} as SceneData;
        this.sceneGame = this.scene.add(CST.SCENES.GAME, SceneGame, false, sceneData) as SceneGame;
    }

    // Update
    ////////////////////////////////////////////////////////////////////////

    public update(time: number, delta: number) : void
    {
        super.update(time, delta);
    }

    private onPlay() : void
    {
        this.scene.setActive(false);
        this.scene.setVisible(false);
        this.sceneGame.scene.restart({level: 1} as SceneData);
        this.sceneGame.showGame(true);
    }

    private onSettings() : void
    {
        console.log("Settings requested");
    }

    private onConnect() : void
    {
        this.mainMenuContainer.setVisible(false);
        this.registerContainer.setVisible(true);
    }

    private onPlayerConnected() : void
    {
        this.registerContainer.setVisible(false);
        this.mainMenuContainer.setVisible(true);
    }

    private onPlayerCancelledConnection() : void
    {
        this.registerContainer.setVisible(false);
        this.mainMenuContainer.setVisible(true);
    }
}