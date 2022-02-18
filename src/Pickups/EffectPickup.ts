import { Pawn } from "../Pawns/Pawn";

export class EffectPickup extends Phaser.Physics.Arcade.Image
{
    constructor(scene: Phaser.Scene, x: number, y: number, texture: string | Phaser.Textures.Texture, frame?: string | number)
    {
       super(scene, x, y, texture, frame);
    }

    public applyEffect(pawn: Pawn)
    {
    }
}