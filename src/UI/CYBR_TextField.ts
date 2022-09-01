import { Game } from 'phaser';
import BBCodeText from 'phaser3-rex-plugins/plugins/bbcodetext.js';

export class CYBR_TextField extends BBCodeText
{
    public width: number;
    public height: number;

    public upperCase: boolean = false;

    /** Stores the text when you use the password mode */
    public passwordText: string;

    public containerParent: Phaser.GameObjects.Container;

    constructor(scene: Phaser.Scene, x?: number, y?: number, content?: string, type: string = "text")
    {
        // TODO: Expose this style to the constructor
        const style = {
            color: "yellow",
            fontSize: "24px",
            fixedWidth: 80,
            fixedHeight: 36,
            backgroundColor: "#333333",
            valign: "center",
            halign: "center"
        }

        super(scene, x, y, content, style as BBCodeText.TextStyle);
        scene.add.existing(this);

        this.width = style.fixedWidth;
        this.height = style.fixedHeight;
        this.setInteractive();

        const that = this;

        this.on("pointerdown", () => {
            const config = {
                selectAll: false,
                text: this.passwordText,
                type: type,
                onOpen: () => { that.emit("open"); },
                onClose: () => { that.emit("close"); },
                onTextChanged: (textObject: Phaser.GameObjects.Text, text: string) => {
                    this.passwordText = text;
                    textObject.text = (type == "password") ? new Array(this.passwordText.length + 1).join('•') : text;
                    that.emit("textChanged", text);

                    if (that.upperCase)
                    {
                        textObject.text = textObject.text.toUpperCase();
                    }
                }
            }
            // @ts-ignore
            const editText = this.scene.plugins.get("rexTextEditPlugin").edit(this, config);

            if (this.containerParent)
            {
                editText.inputText.x += this.containerParent.x;
                editText.inputText.y += this.containerParent.y;
            }
        }, this);
    }

    public onTextChanged(fn: Function, context?: any) : this
    {
        this.on("textChanged", fn, context);
        return this;
    }

    public onOpen(fn: Function, context?: any) : this
    {
        this.on("open", fn, context);
        return this;
    }

    public onClose(fn: Function, context?: any) : this
    {
        this.on("close", fn, context);
        return this;
    }

    public clear(): void
    {
        this.setText("");
        this.passwordText = "";
    }
}