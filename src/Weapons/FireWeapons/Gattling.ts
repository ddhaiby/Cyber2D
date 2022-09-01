import { CYBR_FireWeapon } from "./CYBR_FireWeapon";

export class Gattling extends CYBR_FireWeapon
{
    /** Hack on the originX to make sure the weapon correctly rotates */
    private gattlingOriginX: number = 0.25;

    constructor(scene: Phaser.Scene, x: number, y: number)
    {
        super(scene, x, y, "drone", null, "weapon_atlas", "bulletRobot.png");

        this.bulletSpeed = 300;
        this.fireLimit = 0;
        this.fireRate = 240;
        this.reloadRate = 400;
        this.damage = 5;
        this.bindGripToFlipX = false;
    
        this.fireSound = "Pistol_Shot";
        this.setGripPosition(2, -16);
        this.setMuzzlePosition(22, 3);
        this.setOrigin(this.gattlingOriginX, 0.5);
    }

    protected initAnimations(key: string): void
    {
        this.anims.create({
            key: "Idle",
            frames: this.anims.generateFrameNames(this.texture.key, { prefix: "droneGattlingFire_", suffix: ".png", start: 1, end: 1, zeroPad: 3 }),
            frameRate: 1,
            repeat: 0
        });

        this.anims.create({
            key: "Fire",
            frames: this.anims.generateFrameNames(this.texture.key, { prefix: "droneGattlingFire_", suffix: ".png", start: 1, end: 4, zeroPad: 3 }),
            frameRate: 10,
            repeat: 0
        });

        this.anims.create({
            key: "Death",
            frames: this.anims.generateFrameNames(this.texture.key, { prefix: "droneGattlingDeath_", suffix: ".png", start: 1, end: 6, zeroPad: 3 }),
            frameRate: 10,
            repeat: 0
        });

        this.anims.play("Idle");
    }

    public setFlipX(value: boolean): this
    {
        this.setOrigin(value ? this.gattlingOriginX : 1 - this.gattlingOriginX, 0.5);
        return super.setFlipX(value);
    }
}