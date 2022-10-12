import { SceneGame } from "../../Scenes/SceneGame";
import { AIData } from "./AISpawn";
import { ShooterAI } from "./ShooterAI";

export class PistolAI extends ShooterAI
{
    constructor(scene: SceneGame, x?: number, y?: number, texture?: string | Phaser.Textures.Texture, frame?: string | number)
    {
        super(scene, x, y, texture, frame);

        this.pawnName = "PatrolPistol";
    }
}