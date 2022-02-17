import { CST } from "../CST";
import { CYBR_Scene } from "./CYBR_Scene";
import { SceneData } from "./CYBR_Scene";
import { SceneGame } from "./SceneGame";
import { CYBR_Button } from "../UI/CYBR_Button";
import { CYBR_Graphics } from "../UI/CYBR_Graphics";

export class SceneMainMenu_UI extends CYBR_Scene
{
    private sceneGame: SceneGame;

    constructor()
    {
        super({key: CST.SCENES.MAINMENU_UI});
    }

    // Init
    ////////////////////////////////////////////////////////////////////////

    init() {}

    // Create
    ////////////////////////////////////////////////////////////////////////

    create()
    {        
        // Background
        let background = new CYBR_Graphics(this);
        background.width = 500;
        background.height = 320;
        background.fillStyle(0x171822);
        background.fillRect(0, 0, background.width, background.height);

        this.centerItem(background);

        // Buttons
        let buttonPlay = new CYBR_Button(this, 0, background.y + 28, "buttonPlay");
        this.centerHItem(buttonPlay);

        let buttonSettings = new CYBR_Button(this, 0, buttonPlay.y + buttonPlay.height + 24, "buttonSettings");
        this.centerHItem(buttonSettings);

        let buttonLoginMetaMask = new CYBR_Button(this, 0, buttonSettings.y + buttonSettings.height + 24, "buttonLoginMetaMask");
        this.centerHItem(buttonLoginMetaMask);

        // In my SceneMainMenu
        buttonPlay.on("pointerup", (pointer) => {
            const sceneData = {level: 1} as SceneData;

            if (!this.scene.get(CST.SCENES.GAME))
                this.sceneGame = this.scene.add(CST.SCENES.GAME, SceneGame, true, sceneData) as SceneGame;
            else
                this.sceneGame.scene.restart(sceneData);

            this.scene.setActive(false);
            this.scene.setVisible(false);
            this.sceneGame.showGame(true);
        });

        buttonSettings.on("pointerup", (pointer) => {
            console.log("Settings requested");
        });

        buttonLoginMetaMask.on("pointerup", (pointer) => {
            console.log("Metamask login requested");
        });
    }

    // Update
    ////////////////////////////////////////////////////////////////////////

    update(time: number, delta: number)
    {
        super.update(time, delta);
    }
}