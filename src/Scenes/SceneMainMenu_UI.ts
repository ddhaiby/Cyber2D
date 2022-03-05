import { CST } from "../CST";
import { CYBR_Scene } from "./CYBR_Scene";
import { SceneData } from "./CYBR_Scene";
import { SceneGame } from "./SceneGame";
import { CYBR_Button } from "../UI/CYBR_Button";
import { CYBR_Graphics } from "../Utils/CYBR_Graphics";
import GridTable from 'phaser3-rex-plugins/plugins/gridtable.js';

export class SceneMainMenu_UI extends CYBR_Scene
{
    private sceneGame: SceneGame;

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
        // Background
        let background = new CYBR_Graphics(this);
        background.width = 500;
        background.height = 320;
        background.fillStyle(0x171822);
        background.fillRect(0, 0, background.width, background.height);
        this.centerItem(background);

        // Buttons
        let buttonPlay = new CYBR_Button(this, 0, background.y + 52, "Play", "btn_background");
        buttonPlay.onClicked(this.onPlayClicked, this);
        this.centerHItem(buttonPlay);

        let buttonSettings = new CYBR_Button(this, 0, buttonPlay.y + buttonPlay.height + 32, "Settings", "btn_background");
        buttonSettings.onClicked(this.onSettingsClicked, this);
        this.centerHItem(buttonSettings);
    }

    // Update
    ////////////////////////////////////////////////////////////////////////

    public update(time: number, delta: number) : void
    {
        super.update(time, delta);
    }

    private onPlayClicked() : void
    {
        console.log(this, this.scene)
        const sceneData = {level: 1} as SceneData;

        if (!this.scene.get(CST.SCENES.GAME))
            this.sceneGame = this.scene.add(CST.SCENES.GAME, SceneGame, true, sceneData) as SceneGame;
        else
            this.sceneGame.scene.restart(sceneData);

        this.scene.setActive(false);
        this.scene.setVisible(false);
        this.sceneGame.showGame(true);
    }

    private onSettingsClicked() : void
    {
        console.log("Settings requested");
    }
}