import { consts, Bullet } from "phaser3-weapon-plugin";
import { CYBR_Weapon } from "./CYBR_Weapon";

export class GuardWeapon extends CYBR_Weapon
{
    constructor(scene: Phaser.Scene, x: number, y: number)
    {
        super(scene, x, y);

        // this.bulletLifespan = 100;
        // this.bulletSpeed = 650;
        // this.bulletKillType = consts.KillType.KILL_WORLD_BOUNDS;
        // this.fireLimit = 300;
        // this.fireRate = 50;
        // this.fireAngle = 0;
    }
}