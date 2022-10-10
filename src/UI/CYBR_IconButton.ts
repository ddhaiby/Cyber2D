import { CST } from "../CST";
import { CYBR_AudioManager } from "../Managers/CYBR_AudioManager";
import { CYBR_Utils } from "../Utils/CYBR_Utils";

export class CYBR_IconButton extends Phaser.GameObjects.Sprite
{
    /** Whether the button is currently pressed */
    private pressed: boolean = false;

    /** Whether the button is enabled */
    private enabled: boolean = true;

    /** Sound when the user clicks on this text button */
    private clickSound: string = "menuButtonClicked";

    /** Sound when the user hovers this text button */
    private hoverSound: string = "";

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string | Phaser.Textures.Texture, frame?: string | number)
    {
        super(scene, x, y, texture, frame);

        this.tintFill = true;
        this.setInteractive(new Phaser.Geom.Rectangle(0, 0, this.width, this.height), Phaser.Geom.Rectangle.Contains);

        // Behaviors
        this.on("pointerover", () => {
            if (this.enabled)
            {
                this.setTintFill(CYBR_Utils.hexColorToNumber(CST.STYLE.COLOR.ICON.HOVERED));
                CYBR_AudioManager.instance.playSound(this.hoverSound);
            }
        }, this);

        this.on("pointerout", () => {
            if (this.enabled)
            {
                this.setTintFill(CYBR_Utils.hexColorToNumber(CST.STYLE.COLOR.ICON.NORMAL));
                this.pressed = false;
            }
        }, this);

        this.on("pointerdown", () => {
            if (this.enabled)
            {
                this.setTintFill(CYBR_Utils.hexColorToNumber(CST.STYLE.COLOR.ICON.PRESSED));
                this.pressed = true;
            }
        }, this);

        this.on("pointerup", () => {
            if (this.enabled)
            {
                this.setTintFill(CYBR_Utils.hexColorToNumber(CST.STYLE.COLOR.ICON.HOVERED));
                this.pressed = false;
                CYBR_AudioManager.instance.playSound(this.clickSound);
            }
        }, this);

        this.emit("pointerout");
    }

    public onClicked(fn: Function, context?: any) : this
    {
        this.on("pointerup", fn, context);
        return this;
    }
}