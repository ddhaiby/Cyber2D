import { CST } from "../CST";
import { CYBR_Scene } from "./CYBR_Scene";
import { CYBR_Button } from "../UI/CYBR_Button";
import { SceneGame } from "./SceneGame";
import { CYBR_Graphics } from "../Utils/CYBR_Graphics";

export class SceneGameMenu_UI extends CYBR_Scene
{
    private sceneGame: SceneGame;

    constructor()
    {
        super({key: CST.SCENES.GAMEMENU_UI});

        this.sceneGame = null;
    }

    // Init
    ////////////////////////////////////////////////////////////////////////
   
    public init(sceneGame: SceneGame) : void
    { 
        this.sceneGame = sceneGame;
    }

    // Create
    ////////////////////////////////////////////////////////////////////////

    // TODO: See how grid/columns work with phaser 3
    public create() : void
    {
        // Background
        let background = new CYBR_Graphics(this);
        background.width = 500;
        background.height = 350;
        background.fillStyle(0x171822);
        background.fillRect(0, 0, background.width, background.height);
        this.centerItem(background);

        // Buttons
        let buttonResume = new CYBR_Button(this, 0, background.y + 28, "Resume", "btn_background");
        buttonResume.onClicked(this.onResumeClicked, this);
        this.centerHItem(buttonResume);

        let buttonRestart = new CYBR_Button(this, 0, buttonResume.y + buttonResume.height + 24, "Restart", "btn_background");
        buttonRestart.onClicked(this.onRestartClicked, this);
        this.centerHItem(buttonRestart);

        let buttonMainMenu = new CYBR_Button(this, 0, buttonRestart.y + buttonRestart.height + 24, "Main menu", "btn_background");
        buttonMainMenu.onClicked(this.onMainMenuClicked, this);
        this.centerHItem(buttonMainMenu);
    }

    // Update
    ////////////////////////////////////////////////////////////////////////

    public update(time: number, delta: number) : void
    {
        super.update(time, delta);
    }

    private onResumeClicked() : void
    {
        this.sceneGame.showGameMenu(false);
        this.sceneGame.showGame(true);
    }

    private onRestartClicked() : void
    {
        this.sceneGame.showGameMenu(false);
        this.sceneGame.showGame(true);
        this.sceneGame.restartLevel();
    }

    private onMainMenuClicked() : void
    {
        this.sceneGame.showMainMenu();
    }
}