import { CYBR_Graphics } from "./CYBR_Graphics";

export class CYBR_BulletBar extends CYBR_Graphics
{
    /** Range value from 0 to 1 */
    private _value: number;
    private _color: number;
    
    constructor(scene: Phaser.Scene, options?: Phaser.Types.GameObjects.Graphics.Options & {width?: number, height?: number, value?: number, color?: number})
    {
        super(scene, options);
        this._value = (options && options.value != undefined) ? options.value : 1;
        this._color = (options && options.color != undefined) ? options.color : 0x000000;
        this.redraw();
    }

    setValue(value: number)
    {
        this._value = Math.max(0, Math.min(1, value));
        this.redraw();
    }

    getValue()
    {
        return this._value;
    }

    redraw()
    {
        this.clear();
        this.fillStyle(this._color);
        this.fillRoundedRect(0, 0, this._value * this.width, this.height, 2);
    }
}