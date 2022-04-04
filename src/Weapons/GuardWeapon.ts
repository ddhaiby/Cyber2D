import { consts, Bullet } from "phaser3-weapon-plugin";
import { CYBR_Weapon } from "./CYBR_Weapon";

export class GuardWeapon extends CYBR_Weapon
{
    constructor(scene: Phaser.Scene, bulletLimit: number, key: string, frame?: string, group?: Phaser.GameObjects.Group)
    {
        super(scene, bulletLimit, key, frame, group);

        this.bulletLifespan = 100;
        this.bulletSpeed = 650;
        this.bulletKillType = consts.KillType.KILL_WORLD_BOUNDS;
        this.fireLimit = 300;
        this.fireRate = 50;
        this.fireAngle = 0;
    }
}