import { Bullet, ObjectWithTransform } from "phaser3-weapon-plugin";
import { CYBR_Weapon } from "./CYBR_Weapon";

export class CyberShotgun extends CYBR_Weapon
{
    constructor(scene: Phaser.Scene, x: number, y: number)
    {
        super(scene, x, y, "shotgun");

        this.bulletLifespan = 100;
        this.bulletSpeed = 750;
        this.fireRate = 650;
        this.fireLimit = 3;
        this.damage = 90;

        this.setGripPosition(-7, 2);
        this.setMuzzlePosition(-16, -2);
    }

    public fire(from?: Phaser.Math.Vector2 | Phaser.GameObjects.Sprite | ObjectWithTransform, x?: number, y?: number, offsetX?: number, offsetY?: number) : Bullet
    {
        return super.fire(from, x, y, offsetX, offsetY);
    }
}