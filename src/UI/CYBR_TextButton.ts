import { CST } from "../CST";
import { AudioManager } from "../Managers/AudioManager";

class CYBR_TextButtonStyle
{
    hoveredColor?: string;
    pressedColor?: string;
    disabledColor?: string;
}

export class CYBR_TextButton extends Phaser.GameObjects.Text
{
    /** Whether the button is currently pressed */
    private pressed: boolean = false;

    /** Sound when the user clicks on this text button */
    private clickSound: string = "Menu_Buttons_Click";

    /** Sound when the user hovers this text button */
    private hoverSound: string = "Menu_Buttons_Hover";

    /** Text color when there is no interaction from the user */
    private normalColor: string;

    /** Text color when the user hover the text buton*/
    private hoveredColor: string = CST.STYLE.COLOR.TEXT.HOVERED;

    /** Text color when the user pressed the text buton */
    private pressedColor: string = CST.STYLE.COLOR.TEXT.PRESSED;

    /** Text color when the text buton is disabled */
    private disabledColor: string = CST.STYLE.COLOR.TEXT.DISABLED;

    constructor(scene: Phaser.Scene, x: number, y: number, text: string | string[], style: Phaser.Types.GameObjects.Text.TextStyle & CYBR_TextButtonStyle)
    {
        style.fontFamily = style.fontFamily ? style.fontFamily : "Gemunu Libre";
        style.fontSize = style.fontSize ? style.fontSize : "48px";
        style.fontStyle = style.fontStyle ? style.fontStyle : "bold";
        style.color = style.color ? style.color : CST.STYLE.COLOR.TEXT.NORMAL;
        style.align = style.align ? style.align : "center";
        style.stroke = style.stroke ? style.stroke : CST.STYLE.COLOR.BLACK;
        style.strokeThickness = style.strokeThickness ? style.strokeThickness : 3;
        
        super(scene, x, y, text, style);
        scene.add.existing(this);

        this.normalColor = style.color;
        this.hoveredColor = style.hoveredColor ? style.disabledColor : CST.STYLE.COLOR.TEXT.HOVERED;
        this.pressedColor = style.pressedColor ? style.disabledColor : CST.STYLE.COLOR.TEXT.PRESSED;
        this.disabledColor = style.disabledColor ? style.disabledColor : CST.STYLE.COLOR.TEXT.DISABLED;

        this.setInteractive(new Phaser.Geom.Rectangle(0, 0, this.width, this.height), Phaser.Geom.Rectangle.Contains);

        // Behaviors
        this.on("pointerover", () => {
            this.setColor(this.hoveredColor);
            AudioManager.playSound(this.hoverSound);
        }, this);

        this.on("pointerout", () => {
            this.pressed = false;
            this.setColor(this.normalColor);
        }, this);

        this.on("pointerdown", () => {
            this.pressed = true;
            this.setColor(this.pressedColor);
        }, this);

        this.on("pointerup", () => {
            this.pressed = false;
            this.setColor(this.hoveredColor);
            AudioManager.playSound(this.clickSound);
        }, this);

        this.on("pointermove", () => { this.setColor(this.pressed ? this.pressedColor : this.hoveredColor); }, this);
    }

    public onClicked(fn: Function, context?: any) : this
    {
        this.on("pointerup", fn, context);
        return this;
    }
}