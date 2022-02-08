import { Weapon, consts, Bullet, ObjectWithTransform } from "phaser3-weapon-plugin";

export class CYBR_Weapon extends Weapon
{
    private _colliders: Array<Phaser.Physics.Arcade.Collider>;
    private _time: Phaser.Time.Clock;
    private _timerReloadWeapon: Phaser.Time.TimerEvent;
    private _events: Phaser.Events.EventEmitter;

    constructor(scene: Phaser.Scene, bulletLimit: number, key: string, frame?: string, group?: Phaser.GameObjects.Group)
    {
        super(scene, bulletLimit, key, frame, group);
        //scene.add.existing(this);
        //scene.physics.add.existing(this);

        this.bulletGravity = new Phaser.Math.Vector2(0, -scene.physics.world.gravity.y); // So the bullets ignore the gravity
        this.bulletLifespan = 100;
        this.bulletSpeed = 700;
        this.fireRate = 220;
        this.fireAngle = 0;
        this.bulletKillType = consts.KillType.KILL_WORLD_BOUNDS;
        this.fireLimit = 10;

        this._colliders = [];
        this._time = scene.time;
        this._events = scene.events;
        this._timerReloadWeapon = this._time.delayedCall(0, () => {}); // Create an empty timer so I am sure it exists

        this.on("fire", function (bullet: Bullet, weapon: Weapon, speed: number){
            this._events.emit("onShotsChanged", this.shots, this.fireLimit);
        }, this)
    }

    destroy()
    {
        for (let collider of this._colliders)
            collider.destroy();
        super.destroy();
    }

    // Necessary to correctly destroy the weapon.
    addCollider(collider: Phaser.Physics.Arcade.Collider)
    {
        this._colliders.push(collider);
    }

    fire(from?: Phaser.Math.Vector2 | Phaser.GameObjects.Sprite | ObjectWithTransform, x?: number, y?: number, offsetX?: number, offsetY?: number)
    {
        this.stopReloading();
        super.fire(from, x, y, offsetX, offsetY);
    }

    stopReloading()
    {
        this._timerReloadWeapon.remove();
    }

    reload()
    {
        if (this.getShots() == 0) // Full ammunition
        {
            this._timerReloadWeapon.remove();
            return;
        }
        else if (this._timerReloadWeapon.getRemaining() == 0) // The timer is inactive or it has been triggered 
        {
            this._timerReloadWeapon = this._time.delayedCall(100, () => {
                this.decrementShots();
                if (this.getShots() > 0)
                    this._timerReloadWeapon = this._timerReloadWeapon.reset({delay: this._timerReloadWeapon.delay, repeat: 1, callbackScope: this, callback: this.reload });
                else
                    this.stopReloading();
            }, null, this);
        }
    }

    decrementShots()
    {
        this.shots -= 1;
        this._events.emit("onShotsChanged", this.shots, this.fireLimit);
    }

    setShots(shots: number)
    {
        this.shots = shots;
        this._events.emit("onShotsChanged", this.shots, this.fireLimit);
    }

    getShots()
    {
        return this.shots;
    }

    stopFiring()
    {
        this.reload();
    }
}