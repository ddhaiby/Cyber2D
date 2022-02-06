import { Weapon, consts } from "phaser3-weapon-plugin";

export class CYBR_Weapon extends Weapon
{
    private _colliders: Array<Phaser.Physics.Arcade.Collider>;

    constructor(scene: Phaser.Scene, bulletLimit: number, key: string, frame?: string, group?: Phaser.GameObjects.Group)
    {
        super(scene, bulletLimit, key, frame, group);
        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.bulletGravity = new Phaser.Math.Vector2(0, -scene.physics.world.gravity.y); // So the bullets ignore the gravity
        this.bulletLifespan = 100;
        this.bulletSpeed = 700;
        this.fireRate = 220;
        this.fireAngle = 0;
        this.bulletKillType = consts.KillType.KILL_WORLD_BOUNDS;
        this._colliders = [];
    }

    destroy()
    {
        for (let collider of this._colliders)
            collider.destroy();
        super.destroy();
    }

    // Necessary to correctly destroy the weapon.
    addCollider(collider)
    {
        this._colliders.push(collider);
    }
}