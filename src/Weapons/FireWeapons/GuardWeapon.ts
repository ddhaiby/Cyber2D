import { CYBR_FireWeapon } from "./CYBR_FireWeapon";

export class GuardWeapon extends CYBR_FireWeapon
{
    constructor(scene: Phaser.Scene, x: number, y: number)
    {
        super(scene, x, y, null, null, "weapon_atlas", "bulletRobot.png");

        this.bulletSpeed = 300;
        this.fireLimit = 0;
        this.fireRate = 100;
        this.damage = 5;
        this.fireSoundPrimary = "robotWeaponFirePrimary";

        this.setGripPosition(0, 0);
        this.setMuzzlePosition(0, 0);
    }
}