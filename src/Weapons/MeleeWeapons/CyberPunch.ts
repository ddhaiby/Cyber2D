import { Pawn } from "../../Pawns/Pawn";
import { CYBR_MeleeWeapon } from "./CYBR_MeleeWeapon";

export class CyberPunch extends CYBR_MeleeWeapon
{
    constructor(scene: Phaser.Scene, owner?: Pawn)
    {
        super(scene, owner);

        this.range = 12;
    }
}