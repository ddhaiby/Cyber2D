import { CYBR_Graphics } from "./CYBR_Graphics";

export class CYBR_HealthBar extends CYBR_Graphics
{
    constructor(scene: Phaser.Scene, options?: Phaser.Types.GameObjects.Graphics.Options & {width?: number, height?: number})
    {
        super(scene, options);
    }
}