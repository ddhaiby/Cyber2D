import { Bullet, ObjectWithTransform } from "phaser3-weapon-plugin";
import { CYBR_FireWeapon } from "./CYBR_FireWeapon";

export class CyberShotgun extends CYBR_FireWeapon
{
    constructor(scene: Phaser.Scene, x: number, y: number)
    {
        super(scene, x, y, "shotgun", null, "weapon_atlas", "bulletShotgun.png");

        this.bulletSpeed = 750;
        this.fireLimit = 0;
        this.fireRate = 650;
        this.reloadRate = 650;
        this.damage = 10;

        this.fireSound = "Shotgun_Shot";
        this.emptyWeaponSound = "Pistol__Shotgun_Empty";
        this.reloadSound = "Shotgun_Reload_One_Bullet";
        this.setGripPosition(-7, 2);
        this.setMuzzlePosition(10, 1.5);
    }
}