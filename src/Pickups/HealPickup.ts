import { EffectPickup } from "./EffectPickup";
import { Pawn } from "../Pawns/Pawn";

export class HealPickup extends EffectPickup
{
    public value: number;

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string | Phaser.Textures.Texture, frame?: string | number)
    {
        super(scene, x, y, texture, frame);

    }

    public setValue(value: number)
    {
        this.value = value;
    }

    public applyEffect(pawn: Pawn)
    {
        pawn.heal(this.value);
    }
}