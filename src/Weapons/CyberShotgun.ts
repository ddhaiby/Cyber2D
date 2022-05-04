import { Bullet, ObjectWithTransform } from "phaser3-weapon-plugin";
import { CYBR_Weapon } from "./CYBR_Weapon";

export class CyberShotgun extends CYBR_Weapon
{
    constructor(scene: Phaser.Scene, x: number, y: number)
    {
        super(scene, x, y, "shotgun");

        this.bulletSpeed = 750;
        this.fireLimit = 3;
        this.fireRate = 650;
        this.reloadRate = 650;
        this.damage = 10;

        this.fireSound = "Shotgun_Shot";
        this.emptyWeaponSound = "Pistol__Shotgun_Empty";
        this.reloadSound = "Shotgun_Reload_One_Bullet";
        this.setGripPosition(-7, 2);
        this.setMuzzlePosition(-16, -2);
    }

    public fire(from?: Phaser.Math.Vector2 | Phaser.GameObjects.Sprite | ObjectWithTransform, x?: number, y?: number, offsetX?: number, offsetY?: number) : Bullet[]
    {
        return super.fire(from, x, y, offsetX, offsetY);
    }
}