import { CST } from "../CST";
import { CYBR_Scene } from "./CYBR_Scene";
import { CYBR_Button } from "../UI/CYBR_Button";
import { SceneGame } from "./SceneGame";
import { CYBR_Graphics } from "../Utils/CYBR_Graphics";

export class SceneGameMenu_UI extends CYBR_Scene
{
    private width: number = 500;
    private height: number = 350;

    private sceneGame: SceneGame;
    private buttonResume: CYBR_Button;
    private buttonRestart: CYBR_Button;
    private buttonMainMenu: CYBR_Button;

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

    public create() : void
    {
        // Background
        let background = new CYBR_Graphics(this);
        background.width = this.width;
        background.height = this.height;
        background.fillStyle(0x171822);
        background.fillRect(0, 0, background.width, background.height);
        this.centerItem(background);

        // Buttons
        this.buttonResume = new CYBR_Button(this, 0, 0, "Resume");
        this.buttonResume.onClicked(this.onResumeClicked, this);

        this.buttonRestart = new CYBR_Button(this, 0, 0, "Restart");
        this.buttonRestart.onClicked(this.onRestartClicked, this);

        this.buttonMainMenu = new CYBR_Button(this, 0, 0, "Main menu");
        this.buttonMainMenu.onClicked(this.onMainMenuClicked, this);

        this.updateButtonsAlignment();
    }

    private updateButtonsAlignment() : void
    {
        const buttons = [this.buttonResume, this.buttonRestart, this.buttonMainMenu];
        const visibleButtons = [];

        for (let button of buttons)
        {
            if (button.visible)
                visibleButtons.push(button);
        }

        const spacing = 24;
        const totalHeight = visibleButtons[0].height * visibleButtons.length + spacing * (visibleButtons.length - 1);
        this.centerItem(visibleButtons[0], 0, (visibleButtons[0].height -totalHeight) * 0.5);

        for (let i = 1; i < visibleButtons.length; ++i)
            Phaser.Display.Align.To.BottomCenter(visibleButtons[i], visibleButtons[0], 0, spacing * i + visibleButtons[0].height * (i - 1));
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

    public setVisible(value: boolean, showResumeButton: boolean = true) : void
    {
        this.scene.setVisible(value);

        if (value)
        {
            this.buttonResume.setVisible(showResumeButton);
            this.updateButtonsAlignment();
        }
    }
}