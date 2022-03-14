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

        let buttonRegister = new CYBR_Button(scene, 0, 0, "Register");
        buttonRegister.onClicked(this.onRegisterClicked, this);
        scene.centerItem(buttonRegister);
        this.add(buttonRegister);

        let buttonPlay = new CYBR_Button(scene, 0, 200, "Play");
        buttonPlay.onClicked(this.onPlayClicked, this);
        Phaser.Display.Align.To.TopCenter(buttonPlay, buttonRegister, 0, 40);
        this.add(buttonPlay);

        let buttonSettings = new CYBR_Button(scene, 0, 0, "Settings");
        buttonSettings.onClicked(this.onSettingsClicked, this);
        Phaser.Display.Align.To.BottomCenter(buttonSettings, buttonRegister, 0, 40);
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