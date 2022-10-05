import {CYBR_IconButton} from "../CYBR_IconButton";
import {CYBR_TextField} from "../CYBR_TextField";
import {CYBR_Scene} from "../../Scenes/CYBR_Scene";
import {PlayerManager} from "../../Managers/PlayerManager";

declare type Key = Phaser.Input.Keyboard.Key;

class KeySelectionWidget extends Phaser.GameObjects.Container
{
    private _textField: CYBR_TextField;
    private _label: Phaser.GameObjects.Text;

    constructor(scene: Phaser.Scene, x?: number, y?: number, label: string = "")
    {
        super(scene, x, y);
        scene.add.existing(this);

        this._textField = new CYBR_TextField(this.scene, 0, 0, "");
        this._textField.containerParent = this;
        this.add(this._textField);

        this._label = this.scene.add.text(0, 0, label);
        this._label.setY(this._textField.y + (this._textField.height - this._label.height) / 2);
        this.label.width = 80;
        this.add(this._label);
    }

    public get textField(): CYBR_TextField
    {
        return this._textField;
    }

    public get label(): Phaser.GameObjects.Text
    {
        return this._label;
    }

    public set spacing(spacing: number)
    {
        this._textField.x = this._label.width + spacing;
    }
}

export class SettingsContainer extends Phaser.GameObjects.Container
{
    private upKeyWidget: KeySelectionWidget;
    private downKeyWidget: KeySelectionWidget;
    private rightKeyWidget: KeySelectionWidget;
    private leftKeyWidget: KeySelectionWidget;
    private jumpKeyWidget: KeySelectionWidget;
    private fireKeyWidget: KeySelectionWidget;
    private punchKeyWidget: KeySelectionWidget;

    constructor(scene: CYBR_Scene, x?: number, y?: number)
    {
        super(scene, x, y);
        scene.add.existing(this);
        this.width = scene.scale.displaySize.width;
        this.height = scene.scale.displaySize.height;

        this.createButtons();
        this.createKeySelectionWidgets();
    }

    private createButtons(): void
    {
        const homeIconButton = new CYBR_IconButton(this.scene, 930, 28, "UI_atlas", "iconHome.png");
        homeIconButton.onClicked(this.saveChange, this);
        this.add(homeIconButton);
    }

    private createKeySelectionWidgets(): void
    {
        this.upKeyWidget = new KeySelectionWidget(this.scene, 0, 0, "UP");
        this.downKeyWidget = new KeySelectionWidget(this.scene, 0, 0, "DOWN");
        this.rightKeyWidget = new KeySelectionWidget(this.scene, 0, 0, "RIGHT");
        this.leftKeyWidget = new KeySelectionWidget(this.scene, 0, 0, "LEFT");
        this.jumpKeyWidget = new KeySelectionWidget(this.scene, 0, 0, "JUMP");
        this.fireKeyWidget = new KeySelectionWidget(this.scene, 0, 0, "FIRE");
        this.punchKeyWidget = new KeySelectionWidget(this.scene, 0, 0, "PUNCH");

        const keyWidgets = [this.upKeyWidget, this.downKeyWidget, this.rightKeyWidget, this.leftKeyWidget, this.jumpKeyWidget, this.fireKeyWidget, this.punchKeyWidget] as KeySelectionWidget[];

        for (let i = 0; i < keyWidgets.length; ++i)
        {
            const keyWidget = keyWidgets[i];
            keyWidget.x = (i % 2 != 0) ? 550 : 250;
            keyWidget.y = (i % 2 != 0) ? (i - 1) * 40 + 150 : i * 40 + 150;
            keyWidget.spacing = 0;
            keyWidget.label.setStyle({ fontFamily: "Gemunu Libre", fontSize: "20px", color: "yellow" });
            keyWidget.textField.upperCase = true;
            this.add(keyWidget);
        }
    }

    public setVisible(value: boolean): this
    {
        super.setVisible(value);

        if (value)
        {
            this.upKeyWidget.textField.setText(PlayerManager.Instance.keyMap.up);
            this.downKeyWidget.textField.setText(PlayerManager.Instance.keyMap.down);
            this.rightKeyWidget.textField.setText(PlayerManager.Instance.keyMap.right);
            this.leftKeyWidget.textField.setText(PlayerManager.Instance.keyMap.left);
            this.jumpKeyWidget.textField.setText(PlayerManager.Instance.keyMap.jump);
            this.fireKeyWidget.textField.setText(PlayerManager.Instance.keyMap.fire);
            this.punchKeyWidget.textField.setText(PlayerManager.Instance.keyMap.punch);
        }
        return this;
    }

    private saveChange()
    {
        PlayerManager.Instance.keyMap =
        {
            up: this.upKeyWidget.textField.text.toString(),
            down: this.downKeyWidget.textField.text.toString(),
            right: this.rightKeyWidget.textField.text.toString(),
            left: this.leftKeyWidget.textField.text.toString(),
            jump: this.jumpKeyWidget.textField.text.toString(),
            fire: this.fireKeyWidget.textField.text.toString(),
            punch: this.punchKeyWidget.textField.text.toString()
        }
        this.emit("backToMainMenu");
    }
}