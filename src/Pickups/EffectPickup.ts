import { Pawn } from "../Pawns/Pawn";

export class EffectPickup extends Phaser.Physics.Arcade.Image
{
    /** Duration of an effect - Set 0 or lower for infinite duration */
    protected duration: number = 0;

    /** Value of the effect if any */
    protected value: number = 0;

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string | Phaser.Textures.Texture, frame?: string | number)
    {
       super(scene, x, y, texture, frame);
    }

    public setValue(value: number) : void
    {
        this.value = value;
    }

    public applyEffect(pawn: Pawn) : void
    {
    }
}