import { CYBR_Bar } from "./CYBR_Bar";

export class HealthBar extends CYBR_Bar
{
    constructor(scene: Phaser.Scene, options?: Phaser.Types.GameObjects.Graphics.Options & {width?: number, height?: number, value?: number, color?: number})
    {
        super(scene, options);
    }
}