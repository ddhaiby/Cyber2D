import {CYBR_Button} from "../CYBR_Button";
import {CYBR_TextField} from "../CYBR_TextField";
import {CYBR_Scene} from "../../Scenes/CYBR_Scene";
import {PlayerManager} from "../../Managers/PlayerManager";
import Key = Phaser.Input.Keyboard.Key;

export class SettingsContainer extends Phaser.GameObjects.Container
{
    private textFieldUp: CYBR_TextField;
    private textFieldDown: CYBR_TextField;
    private textFieldJump: CYBR_TextField;
    private textFieldLeft: CYBR_TextField;
    private textFieldRight: CYBR_TextField;
    private textFieldFire: CYBR_TextField;

    constructor(scene: CYBR_Scene, x?: number, y?: number) {
        super(scene, x, y);
        scene.add.existing(this);
        this.width = scene.scale.displaySize.width;
        this.height = scene.scale.displaySize.height;

        this.createButtons();
        this.createTextFields();
    }

    private createButtons(): void {

        const buttonCancel = new CYBR_Button(this.scene, 100, 520, "Cancel");
        buttonCancel.onClicked(this.cancelClicked, this);
        (this.scene as CYBR_Scene).centerHItem(buttonCancel, -320);
        this.add(buttonCancel);

        const buttonSave = new CYBR_Button(this.scene, 680, buttonCancel.y, "Save");
        buttonSave.onClicked(this.saveChange, this);
        (this.scene as CYBR_Scene).centerHItem(buttonSave, 320);
        this.add(buttonSave);
    }

    private createTextFields(): void {

        this.textFieldUp = new CYBR_TextField(this.scene, 0, 110, "");
        (this.scene as CYBR_Scene).centerHItem(this.textFieldUp);
        this.add(this.textFieldUp);

        const labelKeyUp = this.scene.add.text(0, 0, "Up", {
            fontFamily: "Gemunu Libre",
            fontSize: "20px",
            color: "yellow"
        });
        labelKeyUp.setPosition(this.textFieldUp.x, this.textFieldUp.y - labelKeyUp.height - 8);
        this.add(labelKeyUp);


        this.textFieldDown = new CYBR_TextField(this.scene, 0, this.textFieldUp.y + this.textFieldUp.height + 64, "");
        Phaser.Display.Align.To.BottomCenter(this.textFieldDown, this.textFieldUp, 0, 60);
        this.add(this.textFieldDown);

        const labelKeyDown = this.scene.add.text(0, 0, "Down", {
            fontFamily: "Gemunu Libre",
            fontSize: "20px",
            color: "yellow"
        });
        labelKeyDown.setPosition(this.textFieldDown.x, this.textFieldDown.y - labelKeyDown.height - 8);
        this.add(labelKeyDown);


        this.textFieldRight = new CYBR_TextField(this.scene, 0, this.textFieldDown.y + this.textFieldDown.height + 64, "");
        Phaser.Display.Align.To.BottomCenter(this.textFieldRight, this.textFieldDown, 0, 60);
        this.add(this.textFieldRight);

        const labelKeyRight = this.scene.add.text(0, 0, "Right", {
            fontFamily: "Gemunu Libre",
            fontSize: "20px",
            color: "yellow"
        });
        labelKeyRight.setPosition(this.textFieldRight.x, this.textFieldRight.y - labelKeyRight.height - 8);
        this.add(labelKeyRight);

        this.textFieldLeft = new CYBR_TextField(this.scene, 0, this.textFieldRight.y + this.textFieldRight.height + 64, "");
        Phaser.Display.Align.To.BottomCenter(this.textFieldLeft, this.textFieldRight, 0, 60);
        this.add(this.textFieldLeft);

        const labelKeyLeft = this.scene.add.text(0, 0, "Left", {
            fontFamily: "Gemunu Libre",
            fontSize: "20px",
            color: "yellow"
        });
        labelKeyLeft.setPosition(this.textFieldLeft.x, this.textFieldLeft.y - labelKeyLeft.height - 8);
        this.add(labelKeyLeft);


        this.textFieldJump = new CYBR_TextField(this.scene, 0, this.textFieldLeft.y + this.textFieldLeft.height + 64, "");
        Phaser.Display.Align.To.BottomCenter(this.textFieldJump, this.textFieldLeft, 0, 60);
        this.add(this.textFieldJump);

        const labelKeyJump = this.scene.add.text(0, 0, "Jump", {
            fontFamily: "Gemunu Libre",
            fontSize: "20px",
            color: "yellow"
        });
        labelKeyJump.setPosition(this.textFieldJump.x, this.textFieldJump.y - labelKeyJump.height - 8);
        this.add(labelKeyJump);


        this.textFieldFire = new CYBR_TextField(this.scene, 0, this.textFieldJump.y + this.textFieldJump.height + 64, "");
        Phaser.Display.Align.To.BottomCenter(this.textFieldFire, this.textFieldJump, 0, 60);
        this.add(this.textFieldFire);

        const labelKeyFire = this.scene.add.text(0, 0, "Fire", {
            fontFamily: "Gemunu Libre",
            fontSize: "20px",
            color: "yellow"
        });
        labelKeyFire.setPosition(this.textFieldFire.x, this.textFieldFire.y - labelKeyFire.height - 8);
        this.add(labelKeyFire);

    }

    public setVisible(value: boolean): this {
        super.setVisible(value);

        if (value) {
            this.textFieldUp.setText(String.fromCharCode((PlayerManager.Instance.keyBinding.up as Phaser.Input.Keyboard.Key).keyCode));
            this.textFieldDown.setText(String.fromCharCode((PlayerManager.Instance.keyBinding.down as Phaser.Input.Keyboard.Key).keyCode));
            this.textFieldRight.setText(String.fromCharCode((PlayerManager.Instance.keyBinding.right as Phaser.Input.Keyboard.Key).keyCode));
            this.textFieldLeft.setText(String.fromCharCode((PlayerManager.Instance.keyBinding.left as Phaser.Input.Keyboard.Key).keyCode));
            this.textFieldJump.setText(String.fromCharCode((PlayerManager.Instance.keyBinding.jump as Phaser.Input.Keyboard.Key).keyCode)==" "?"SPACE":"");
            this.textFieldFire.setText(String.fromCharCode((PlayerManager.Instance.keyBinding.fire as Phaser.Input.Keyboard.Key).keyCode));
        }
        return this;
    }

    private saveChange()
    {
        PlayerManager.Instance.newKeys = {
            scene: this.scene,
            up: this.textFieldUp.text.toString() as unknown as Key,
            down: this.textFieldDown.text.toString()as unknown as Key,
            left: this.textFieldLeft.text.toString()as unknown as Key,
            right: this.textFieldRight.text.toString()as unknown as Key,
            jump: this.textFieldJump.text.toString()as unknown as Key,
            fire: this.textFieldFire.text.toString()as unknown as Key
        }
        this.emit("saveSettings");
    }

    private cancelClicked(): void
    {
        this.emit("cancelSettings");
    }
}