import { AIData } from "./AISpawn";
import { ShooterAI } from "./ShooterAI";

export class RifleAI extends ShooterAI
{
    constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string | Phaser.Textures.Texture, frame?: string | number)
    {
        super(scene, x, y, texture, frame);

        this.pawnName = "PatrolRifle";
    }
}