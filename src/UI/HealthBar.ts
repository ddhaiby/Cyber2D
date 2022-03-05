import { Color } from "phaser";
import { CYBR_Graphics } from "../Utils/CYBR_Graphics";

export class HealthBar extends CYBR_Graphics
{
    /** Range value from 0 to 1 */
    private value: number;
    private color: number;

    constructor(scene: Phaser.Scene, options?: Phaser.Types.GameObjects.Graphics.Options & {width?: number, height?: number, value?: number, color?: number})
    {
        super(scene, options);
        this.value = (options && options.value != undefined) ? options.value : 1;
        this.color = (options && options.color != undefined) ? options.color : 0x000000;
        this.redraw();
    }

    setValue(value: number) : void
    {
        this.value = Math.max(0, Math.min(1, value));
        this.redraw();
    }

    getValue() : number
    {
        return this.value;
    }

    redraw() : void
    {
        this.clear();
        this.fillStyle(this.color);
        this.fillRoundedRect(0, 0, this.value * this.width, this.height, 2);
    }
}