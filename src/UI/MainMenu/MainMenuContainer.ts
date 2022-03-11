import { CYBR_Button } from "../CYBR_Button";
import { SceneMainMenu_UI } from "../../Scenes/SceneMainMenu_UI";

export class MainMenuContainer extends Phaser.GameObjects.Container
{
    constructor(scene: SceneMainMenu_UI, x?: number, y?: number)
    {
        super(scene, x, y);
        scene.add.existing(this);
    
        this.width = scene.scale.displaySize.width;
        this.height = scene.scale.displaySize.height;

        let buttonPlay = new CYBR_Button(scene, 0, 200, "Play", "btn_background");
        buttonPlay.onClicked(this.onPlayClicked, this);
        scene.centerHItem(buttonPlay);
        this.add(buttonPlay);
    
        let buttonRegister = new CYBR_Button(scene, 0, buttonPlay.y + buttonPlay.height + 32, "Register", "btn_background");
        buttonRegister.onClicked(this.onRegisterClicked, this);
        scene.centerHItem(buttonRegister);
        this.add(buttonRegister);

        let buttonSettings = new CYBR_Button(scene, 0, buttonRegister.y + buttonRegister.height + 32, "Settings", "btn_background");
        buttonSettings.onClicked(this.onSettingsClicked, this);
        scene.centerHItem(buttonSettings);
        this.add(buttonSettings);
    }

    private onPlayClicked() : void
    {
        this.emit("play");
    }

    private onSettingsClicked() : void
    {
        this.emit("settings");
    }

    private onRegisterClicked() : void
    {
        this.emit("connect");
    }
}