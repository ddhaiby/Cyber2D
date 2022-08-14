import { CST } from "../CST";
import { CYBR_Scene } from "./CYBR_Scene";
import { CYBR_TextButton } from "../UI/CYBR_TextButton";
import { CYBR_Button } from "../UI/CYBR_Button";
import { SceneGame } from "./SceneGame";
import { CYBR_Graphics } from "../Utils/CYBR_Graphics";

export class SceneGameMenu_UI extends CYBR_Scene
{
    private width: number = 1000;
    private height: number = 700;

    private sceneGame: SceneGame;
    private buttonResume: CYBR_TextButton;
    private buttonRestart: CYBR_TextButton;
    private buttonMainMenu: CYBR_TextButton;

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
        background.fillStyle(parseInt(CST.STYLE.COLOR.CYBER_BACKGROUND), 0.75);
        background.fillRect(0, 0, background.width, background.height);
        this.centerItem(background);

        // Buttons
        const buttonStyle = { fontSize : "36px", color: CST.STYLE.COLOR.ORANGE, strokeThickness : 4};

        this.buttonResume =  new CYBR_TextButton(this, 0, 0, "Resume", buttonStyle);
        this.buttonResume.onClicked(this.onResumeClicked, this);

        this.buttonRestart =  new CYBR_TextButton(this, 0, 0, "Restart", buttonStyle);
        this.buttonRestart.onClicked(this.onRestartClicked, this);

        this.buttonMainMenu =  new CYBR_TextButton(this, 0, 0, "Main menu", buttonStyle);
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

        const spacing = 36;
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