import { AudioManager } from "../Managers/AudioManager";

class CYBR_IconButtonStyle
{
    texture: string | Phaser.Textures.Texture;
    iconNormal: string;
    iconPressed?: string;
    iconHovered?: string;
    iconDisabled?: string;
}

export class CYBR_IconButton extends Phaser.GameObjects.Sprite
{
    /** Whether the button is currently pressed */
    private pressed: boolean = false;

    /** Whether the button is enabled */
    private enabled: boolean = true;

    /** Sound when the user clicks on this text button */
    private clickSound: string = "Menu_Buttons_Click";

    /** Sound when the user hovers this text button */
    private hoverSound: string = "Menu_Buttons_Hover";

    /** The icon when there is no interaction from the user */
    protected iconNormal: string = "";

    /** The icon when the user hover the buton*/
    protected iconHovered: string = "";

    /** The icon when the user press the buton*/
    protected iconPressed: string = "";

    /** The icon when the user hover the buton*/
    protected iconDisabled: string = "";

    constructor(scene: Phaser.Scene, x: number, y: number, style: CYBR_IconButtonStyle)
    {
        super(scene, x, y, style.texture);

        this.iconNormal = style.iconNormal;
        this.iconHovered = style.iconHovered;
        this.iconPressed = style.iconPressed;
        this.iconDisabled = style.iconDisabled;

        this.setFrame(this.iconNormal);
        this.setInteractive(new Phaser.Geom.Rectangle(0, 0, this.width, this.height), Phaser.Geom.Rectangle.Contains);

        // Behaviors
        this.on("pointerover", () => {
            if (this.enabled)
            {
                if (this.iconHovered)
                {
                    this.setFrame(this.iconHovered);
                }
                AudioManager.playSound(this.hoverSound);
            }          
        }, this);

        this.on("pointerout", () => {
            if (this.enabled)
            {
                if (this.iconNormal)
                {
                    this.setFrame(this.iconNormal);
                }
                this.pressed = false;
            }
        }, this);

        this.on("pointerdown", () => {
            if (this.enabled)
            {
                if (this.iconPressed)
                {
                    this.setFrame(this.iconPressed);
                }
                this.pressed = true;
            }
        }, this);

        this.on("pointerup", () => {
            if (this.enabled)
            {
                if (this.iconHovered)
                {
                    this.setFrame(this.iconHovered);
                }
                this.pressed = false;
                AudioManager.playSound(this.clickSound);
            }
        }, this);
    }

    public onClicked(fn: Function, context?: any) : this
    {
        this.on("pointerup", fn, context);
        return this;
    }
}