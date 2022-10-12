import { CYBR_FireWeapon } from "./CYBR_FireWeapon";
import { SceneGame } from "../../Scenes/SceneGame";
import { CYBR_AudioManager } from "../../Managers/CYBR_AudioManager";

export class CyberPistol extends CYBR_FireWeapon
{
    constructor(scene: SceneGame, x: number, y: number)
    {
        super(scene, x, y, "pistol", null, "weapon_atlas", "bulletPistol.png");

        this.bulletSpeed = 100;
        this.fireLimit = 0;
        this.fireRate = 240;
        this.reloadRate = 400;
        this.damage = 5;

        this.fireSoundPrimary = "playerWeaponFirePrimary";
        this.fireSoundSecondary = "playerWeaponFireSecondary";
        this.fireSoundPrimaryVolume = 0.5;
        this.fireSoundSecondaryVolume = 0.4;

        this.emptyWeaponSound = "";
        this.reloadSound = "";
        this.setGripPosition(-4, 2);
        this.setMuzzlePosition(-8, 1.5);
    }

    protected playFireSound(soundName: string, soundVolume: number): void
    {
        CYBR_AudioManager.instance.playSound(soundName, false, soundVolume);
    }
}