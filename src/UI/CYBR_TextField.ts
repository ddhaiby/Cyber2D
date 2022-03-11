import { Game } from 'phaser';
import BBCodeText from 'phaser3-rex-plugins/plugins/bbcodetext.js';

export class CYBR_TextField extends BBCodeText
{
    public width: number;
    public height: number;

    constructor(scene: Phaser.Scene, x?: number, y?: number, content?: string)
    {
        const style = {
            color: "yellow",
            fontSize: "24px",
            fixedWidth: 370,
            fixedHeight: 48,
            backgroundColor: "#333333",
            valign: "center",
            halign: "center"
        }

        super(scene, x, y, content, style as BBCodeText.TextStyle);
        scene.add.existing(this);

        this.width = style.fixedWidth;
        this.height = style.fixedHeight;
        this.setInteractive();

        this.on("pointerdown", function () {
            const config = {
                selectAll: true,
                onTextChanged: function (textObject: Phaser.GameObjects.Text, text: string) {
                    textObject.text = text;
                }
            }
            this.scene.plugins.get("rexTextEditPlugin").edit(this, config);
        }, this);
    }
}