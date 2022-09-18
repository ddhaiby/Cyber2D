import { EffectPickup } from "./EffectPickup";
import { Pawn } from "../Pawns/Pawn";

export class PotionRed extends EffectPickup
{
    public damageBonus: number = 0;

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string | Phaser.Textures.Texture, frame?: string | number)
    {
        super(scene, x, y, texture, frame);
    }

    public applyEffect(pawn: Pawn) : void
    {
        if (pawn)
        {
            pawn.giveBonusDamage(this.damageBonus, this.duration);
        }
    }
}