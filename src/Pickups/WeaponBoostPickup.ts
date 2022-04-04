import { EffectPickup } from "./EffectPickup";
import { Pawn } from "../Pawns/Pawn";

export class WeaponBoostPickup extends EffectPickup
{
    private boostDuration: number = 0;

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string | Phaser.Textures.Texture, frame?: string | number)
    {
        super(scene, x, y, texture, frame);
    }

    public applyEffect(pawn: Pawn) : void
    {
        if (pawn.currentWeapon)
        {
            const normalFireLimit = pawn.currentWeapon.fireLimit;
            const normalFireRate = pawn.currentWeapon.fireRate;

            pawn.currentWeapon.fireLimit = 0;
            pawn.currentWeapon.fireRate = normalFireRate / 2;
            
            this.scene.time.delayedCall(this.boostDuration, () => {
                pawn.currentWeapon.fireLimit = normalFireLimit;
                pawn.currentWeapon.fireRate = normalFireRate;
                pawn.currentWeapon.setShots(0);
            }, null, this);
        }
    }
}