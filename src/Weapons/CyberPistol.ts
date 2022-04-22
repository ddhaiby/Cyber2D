import { consts, Bullet } from "phaser3-weapon-plugin";
import { CYBR_Weapon } from "./CYBR_Weapon";

export class CyberPistol extends CYBR_Weapon
{
    constructor(scene: Phaser.Scene, x: number, y: number)
    {
        super(scene, x, y, "pistol");

        this.bulletLifespan = 100;
        this.bulletSpeed = 700;
        this.fireRate = 240;
        this.fireAngle = 0;
        this.bulletKillType = consts.KillType.KILL_WORLD_BOUNDS;
        this.fireLimit = 6;

        this.muzzleX = -12;
        this.muzzleY = -2;
    }
}