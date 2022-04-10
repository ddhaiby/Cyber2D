import { consts, Bullet } from "phaser3-weapon-plugin";
import { CYBR_Weapon } from "./CYBR_Weapon";

export class PlayerWeapon extends CYBR_Weapon
{
    constructor(scene: Phaser.Scene, bulletLimit: number, key: string, frame?: string, group?: Phaser.GameObjects.Group)
    {
        super(scene, bulletLimit, key, frame, group);

        this.bulletLifespan = 100;
        this.bulletSpeed = 700;
        this.fireRate = 220;
        this.fireAngle = 0;
        this.bulletKillType = consts.KillType.KILL_WORLD_BOUNDS;
        this.fireLimit = 5;
    }
}