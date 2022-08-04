import { CST } from "../CST";
import { CYBR_Scene } from "./CYBR_Scene";
import { SceneData } from "./CYBR_Scene";
import { SceneGame } from "./SceneGame";
import { CYBR_Graphics } from "../Utils/CYBR_Graphics";
import { AudioManager } from "../Managers/AudioManager";
import { MainMenuContainer } from "../UI/MainMenu/MainMenuContainer";
import { SettingsContainer } from "../UI/MainMenu/SettingsContainer";

export class SceneMainMenu_UI extends CYBR_Scene
{
    private sceneGame: SceneGame;
    private mainMenuContainer: MainMenuContainer;
    private settingsContainer: SettingsContainer;

    private menuContainers: Phaser.GameObjects.Container[];

    constructor()
    {
        super({key: CST.SCENES.MAINMENU_UI});
    }

    // Init
    ////////////////////////////////////////////////////////////////////////

    public init() : void
    {
    }

    // Create
    ////////////////////////////////////////////////////////////////////////

    public create() : void
    {
        //AudioManager.playMusic(CST.MAIN_MENU.MUSIC);

        // Background
        let background = new CYBR_Graphics(this);
        background.width = this.scale.displaySize.width;
        background.height = this.scale.displaySize.height;
        background.fillStyle(0x171822);
        background.fillRect(0, 0, background.width, background.height);
        this.centerItem(background);

        // Containers
        this.mainMenuContainer = new MainMenuContainer(this, 0, 0);
        this.mainMenuContainer.setVisible(true);
        this.mainMenuContainer.on("play", this.onPlay, this);
        this.mainMenuContainer.on("settings", this.onSettings, this);
        this.mainMenuContainer.on("connect", this.onConnect, this);

        this.settingsContainer = new SettingsContainer(this, 0, 0);
        this.settingsContainer.setVisible(false);
        this.settingsContainer.on("playerSaveSettings", this.onSaveChanges, this);
        this.settingsContainer.on("playerCancelledSettings", this.onPlayerCancelledSettings, this);

        // Game Scene
        const sceneData = {level: 1} as SceneData;
        this.sceneGame = this.scene.add(CST.SCENES.GAME, SceneGame, false, sceneData) as SceneGame;

        this.menuContainers = [this.mainMenuContainer, this.settingsContainer];
    }

    // Update
    ////////////////////////////////////////////////////////////////////////

    public update(time: number, delta: number) : void
    {
        super.update(time, delta);
    }

    private hideAllMenuContainers() : void
    {
        for (let container of this.menuContainers)
        {
            container.setVisible(false);
        }
    }

    private showMenuContainer(visibleContainer: Phaser.GameObjects.Container) : void
    {
        this.hideAllMenuContainers();
        visibleContainer.setVisible(true);
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
        this.mainMenuContainer.setVisible(false);
        this.settingsContainer.setVisible(true);
    }

    private onConnect() : void
    {

    }

    private onSaveChanges() : void
    {
        this.showMenuContainer(this.mainMenuContainer);
    }

    private onPlayerCancelledSettings() : void
    {
        this.showMenuContainer(this.mainMenuContainer);
    }
}