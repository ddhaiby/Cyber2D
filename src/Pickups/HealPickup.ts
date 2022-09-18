import { EffectPickup } from "./EffectPickup";
import { Pawn } from "../Pawns/Pawn";

export class HealPickup extends EffectPickup
{
    constructor(scene: Phaser.Scene, x: number, y: number, texture: string | Phaser.Textures.Texture, frame?: string | number)
    {
        super(scene, x, y, texture, frame);
    }

    public applyEffect(pawn: Pawn) : void
    {
        pawn.heal(this.value);
    }
}