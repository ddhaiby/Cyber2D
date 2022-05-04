import { CYBR_Weapon } from "./CYBR_Weapon";

export class CyberPistol extends CYBR_Weapon
{
    constructor(scene: Phaser.Scene, x: number, y: number)
    {
        super(scene, x, y, "pistol");

        this.bulletSpeed = 750;
        this.fireLimit = 6;
        this.fireRate = 240;
        this.reloadRate = 400;
        this.damage = 5;

        this.fireSound = "Pistol_Shot";
        this.emptyWeaponSound = "Pistol__Shotgun_Empty";
        this.reloadSound = "Pistol_Reload";
        this.setGripPosition(-4, 2);
        this.setMuzzlePosition(-15, -2);
    }
}