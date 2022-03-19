import { CYBR_Button } from "../CYBR_Button";
import { CYBR_TextField } from "../CYBR_TextField";
import { CYBR_Scene } from "../../Scenes/CYBR_Scene";

export class SettingsContainer extends Phaser.GameObjects.Container
{
    constructor(scene: CYBR_Scene, x?: number, y?: number)
    {
        super(scene, x, y);
        scene.add.existing(this);
        this.width = scene.scale.displaySize.width;
        this.height = scene.scale.displaySize.height;

        const textUp = scene.add.text(40, 60, "Up", )
    }

    private mainMenuClicked() : void
    {
        this.emit("playerCancelledConnection");
    }
}