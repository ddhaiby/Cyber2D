import { Bullet } from "phaser3-weapon-plugin";

export class CYBR_Bullet extends Bullet
{
    public damage: number = 0;

    constructor(scene: Phaser.Scene, x: number, y: number, key: string, frame: string | number)
    {
        super(scene, x, y, key, frame);
    }
}
