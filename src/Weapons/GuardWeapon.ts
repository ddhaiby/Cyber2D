import { consts, Bullet } from "phaser3-weapon-plugin";
import { CYBR_Weapon } from "./CYBR_Weapon";

export class GuardWeapon extends CYBR_Weapon
{
    constructor(scene: Phaser.Scene, x: number, y: number)
    {
        super(scene, x, y);

        this.bulletSpeed = 300;
        this.fireLimit = 0;
        this.fireRate = 100;
        this.damage = 5;
        this.fireSound = "";

        this.setGripPosition(0);
        this.setMuzzlePosition(0);
    }
}