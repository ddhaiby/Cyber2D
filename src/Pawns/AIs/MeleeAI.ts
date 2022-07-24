import { BasicAI } from "./BasicAI";

export class MeleeAI extends BasicAI
{
    constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string | Phaser.Textures.Texture, frame?: string | number)
    {
        super(scene, x, y, texture, frame);

        this.weaponName = "melee";
    }
}