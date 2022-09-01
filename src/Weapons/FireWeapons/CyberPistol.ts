import { CYBR_FireWeapon } from "./CYBR_FireWeapon";

export class CyberPistol extends CYBR_FireWeapon
{
    constructor(scene: Phaser.Scene, x: number, y: number)
    {
        super(scene, x, y, "pistol", null, "weapon_atlas", "bulletPistol.png");

        this.bulletSpeed = 100;
        this.fireLimit = 0;
        this.fireRate = 240;
        this.reloadRate = 400;
        this.damage = 5;

        this.fireSound = "Pistol_Shot";
        this.emptyWeaponSound = "Pistol__Shotgun_Empty";
        this.reloadSound = "Pistol_Reload";
        this.setGripPosition(-4, 2);
        this.setMuzzlePosition(5, 1.5);
    }
}