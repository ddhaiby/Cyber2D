import { CST } from "../CST.js";
import { CYBR_Scene } from "./CYBR_Scene.js";
import { CYBR_Button } from "../UI/CYBR_Button.js";

export class SceneGameMenu_UI extends CYBR_Scene
{
    constructor()
    {
        super({key: CST.SCENES.GAMEMENU_UI});

        this.cursors = null;
        this.sceneGame = null;
    }

    // Init
    ////////////////////////////////////////////////////////////////////////
   
    init(sceneGame)
    { 
        this.sceneGame = sceneGame;
    }

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
        this.load.image("buttonMainMenu", "buttonMainMenu.png");
        this.load.image("buttonRestart", "buttonRestart.png");
        this.load.image("buttonResume", "buttonResume.png");
        this.load.image("buttonSettings", "buttonSettings.png");
        this.load.image("buttonLoginMetaMask", "buttonLoginMetaMask.png");
    }

    // Create
    ////////////////////////////////////////////////////////////////////////

    // TODO: See how grid/columns work with phaser 3
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
        let buttonResume = new CYBR_Button(this, 0, background.y + 28, "buttonResume");
        this.centerHItem(buttonResume);

        let buttonRestart = new CYBR_Button(this, 0, buttonResume.y + buttonResume.height + 24, "buttonRestart");
        this.centerHItem(buttonRestart);

        let buttonMainMenu = new CYBR_Button(this, 0, buttonRestart.y + buttonRestart.height + 24, "buttonMainMenu");
        this.centerHItem(buttonMainMenu);

        buttonResume.on("pointerup", (pointer) => {
            this.sceneGame.showGameMenu(false);
            this.sceneGame.scene.setActive(true);
        });

        buttonRestart.on("pointerup", (pointer) => {
            this.sceneGame.showGameMenu(false);
            this.sceneGame.restartLevel();
            this.sceneGame.scene.setActive(true);
        });

        buttonMainMenu.on("pointerup", (pointer) => {
            this.sceneGame.showGameMenu(false);
            this.sceneGame.showGame(false);
            this.sceneGame.showMainMenu(true);
        });
    }

    // Update
    ////////////////////////////////////////////////////////////////////////

    update() {}
}