import { Bullet, consts } from "phaser3-weapon-plugin";

export class CYBR_Weapon
{
    private _colliders: Array<Phaser.Physics.Arcade.Collider>;
    private _weapon: Weapon;
    bullets: Bullet;

    constructor(scene: Phaser.Scene, bulletLimit: number, key: string)
    {
        this._weapon = scene.add.weapon(bulletLimit, key);
        this._weapon.bulletGravity = new Phaser.Math.Vector2(0, -scene.physics.world.gravity.y); // So the bullets ignore the gravity
        this._weapon.bulletLifespan = 100;
        this._weapon.bulletSpeed = 700;
        this._weapon.fireRate = 220;
        this._weapon.fireAngle = 0;
        this._weapon.bulletKillType = consts.KillType.KILL_WORLD_BOUNDS;
        this.bullets = this._weapon.bullets;

        this._colliders = [];
    }

    fire(fireAngle)
    {
        if (fireAngle != undefined)
            this._weapon.fireAngle = fireAngle;
        this._weapon.fire();
    }

    trackSprite(scene, offsetX, offsetY, trackRotation)
    {
        this._weapon.trackSprite(scene, offsetX, offsetY, trackRotation);
    }

    destroy()
    {
        for (let collider of this._colliders)
            collider.destroy();
        this._weapon.destroy();
    }

    // Necessary to correctly destroy the weapon.
    addCollider(collider)
    {
        this._colliders.push(collider);
    }
}