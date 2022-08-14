import { CST } from "../CST";
import { CYBR_Scene } from "./CYBR_Scene";
import { SceneData } from "./CYBR_Scene";
import { SceneGame } from "./SceneGame";
import { CYBR_Graphics } from "../Utils/CYBR_Graphics";
import { AudioManager } from "../Managers/AudioManager";
import { MainMenuContainer } from "../UI/MainMenu/MainMenuContainer";
import { SettingsContainer } from "../UI/MainMenu/SettingsContainer";
import { SelectLevelContainer } from "../UI/MainMenu/SelectLevelContainer";

export class SceneMainMenu_UI extends CYBR_Scene
{
    private sceneGame: SceneGame;
    private mainMenuContainer: MainMenuContainer;
    private settingsContainer: SettingsContainer;
    private selectLevelContainer: SelectLevelContainer;

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
        this.mainMenuContainer.on("playClicked", this.launchFirstLevel, this);
        this.mainMenuContainer.on("selectLevelClicked", this.onSelectLevelButtonClicked, this);
        this.mainMenuContainer.on("settingsClicked", this.onSettingsButtonClicked, this);
        this.mainMenuContainer.on("connectClicked", this.onConnectButtonClicked, this);

        this.settingsContainer = new SettingsContainer(this, 0, 0);
        this.settingsContainer.setVisible(false);
        this.settingsContainer.on("saveSettings", this.onSaveChanges, this);
        this.settingsContainer.on("cancelSettings", this.onBackToMainMenu, this);

        this.selectLevelContainer = new SelectLevelContainer(this, 0, 0);
        this.selectLevelContainer.setVisible(false);
        this.selectLevelContainer.on("playLevel", this.launchLevel, this);
        this.selectLevelContainer.on("backToMainMenu", this.onBackToMainMenu, this);

        this.menuContainers = [this.mainMenuContainer, this.settingsContainer, this.selectLevelContainer];
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

    private launchFirstLevel() : void
    {
        this.launchLevel(1);
    }

    private launchLevel(level: number) : void
    {
        const sceneData = {level: level} as SceneData;
        this.sceneGame = this.scene.add(CST.SCENES.GAME, SceneGame, true, sceneData) as SceneGame;
        this.sceneGame.showGame(true);

        this.scene.setActive(false);
        this.scene.setVisible(false);
        this.showMenuContainer(this.mainMenuContainer);
    }

    private onSelectLevelButtonClicked() : void
    {
        this.showMenuContainer(this.selectLevelContainer);
    }

    private onSettingsButtonClicked() : void
    {
        this.showMenuContainer(this.settingsContainer);
    }

    private onConnectButtonClicked() : void
    {
    }

    private onSaveChanges() : void
    {
        this.showMenuContainer(this.mainMenuContainer);
    }

    private onBackToMainMenu() : void
    {
        this.showMenuContainer(this.mainMenuContainer);
    }
}