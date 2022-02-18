import { CST } from "../CST";
import { CYBR_Scene } from "./CYBR_Scene";
import { CYBR_Button } from "../UI/CYBR_Button";
import { SceneGame } from "./SceneGame";
import { CYBR_Graphics } from "../UI/CYBR_Graphics";

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
   
    public init(sceneGame: SceneGame)
    { 
        this.sceneGame = sceneGame;
    }

    // Create
    ////////////////////////////////////////////////////////////////////////

    // TODO: See how grid/columns work with phaser 3
    public create()
    {
        // Background
        let background = new CYBR_Graphics(this);
        background.width = 500;
        background.height = 320;
        background.fillStyle(0x171822);
        background.fillRect(0, 0, background.width, background.height);
        this.centerItem(background);

        // Buttons
        let buttonResume = new CYBR_Button(this, 0, background.y + 28, "buttonResume");
        this.centerHItem(buttonResume);

        let buttonRestart = new CYBR_Button(this, 0, buttonResume.y + buttonResume.height + 24, "buttonRestart");
        this.centerHItem(buttonRestart);

        let buttonMainMenu = new CYBR_Button(this, 0, buttonRestart.y + buttonRestart.height + 24, "buttonMainMenu");
        this.centerHItem(buttonMainMenu);

        buttonResume.on("pointerup", (pointer) => {
            this.sceneGame.showGameMenu(false);
            this.sceneGame.showGame(true);
        });

        buttonRestart.on("pointerup", (pointer) => {
            this.sceneGame.showGameMenu(false);
            this.sceneGame.showGame(true);
            this.sceneGame.restartLevel();
        });

        buttonMainMenu.on("pointerup", (pointer) => {
            this.sceneGame.showMainMenu(true);
        });
    }

    // Update
    ////////////////////////////////////////////////////////////////////////

    public update(time: number, delta: number)
    {
        super.update(time, delta);
    }
}