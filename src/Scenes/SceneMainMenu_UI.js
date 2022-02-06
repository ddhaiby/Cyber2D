import { CST } from "../CST.ts";
import { CYBR_Scene } from "./CYBR_Scene.js";
import { CYBR_Button } from "../UI/CYBR_Button.ts";
import { SceneGame } from "./SceneGame.js";


export class SceneMainMenu_UI extends CYBR_Scene
{
    constructor()
    {
        super({key: CST.SCENES.MAINMENU_UI});
    }

    // Init
    ////////////////////////////////////////////////////////////////////////

    init() {}

    // Preload
    ////////////////////////////////////////////////////////////////////////
  
    preload()
    {
        this.loadSprites();
        this.loadImages();
    }

    loadSprites()
    {
        this.load.setPath("./assets/sprite");
    }

    loadImages()
    {
        this.load.setPath("./assets/image/UI/GameMenu");
        this.load.image("buttonPlay", "buttonPlay.png");
        this.load.image("buttonSettings", "buttonSettings.png");
        this.load.image("buttonLoginMetaMask", "buttonLoginMetaMask.png");
    }

    // Create
    ////////////////////////////////////////////////////////////////////////

    create()
    {
        // Background
        let background = this.add.graphics();
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
            this.scene.setActive(false);
            this.scene.setVisible(false);

            if (!this.sceneGame)
            {
                this.sceneGame = this.scene.get(CST.SCENES.GAME);
                this.sceneGame.scene.start(CST.SCENES.GAME);
            }
            else
            {
                this.sceneGame.showGame(true);
                this.sceneGame.currentLevel = 1;
                this.sceneGame.startLevel(this.sceneGame.currentLevel);
            }
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

    update() {}
}