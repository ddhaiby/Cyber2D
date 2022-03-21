import { Weapon, consts, Bullet, ObjectWithTransform } from "phaser3-weapon-plugin";
import { Pawn } from "../Pawns/Pawn";

export class CYBR_Weapon extends Weapon
{
    protected timerReloadWeapon: Phaser.Time.TimerEvent;
    public owner: Pawn = null;

    constructor(scene: Phaser.Scene, bulletLimit: number, key: string, frame?: string, group?: Phaser.GameObjects.Group)
    {
        super(scene, bulletLimit, key, frame, group);

        this.bulletGravity = new Phaser.Math.Vector2(0, -scene.physics.world.gravity.y); // So the bullets ignore the gravity

        this.timerReloadWeapon = scene.time.addEvent({}); // Create an empty timer to avoid null error

        this.on("fire", function (/*bullet: Bullet, weapon: Weapon, speed: number*/){
            this.owner.emit("shotsChanged", this.shots, this.fireLimit);
        }, this)
    }

    public fire(from?: Phaser.Math.Vector2 | Phaser.GameObjects.Sprite | ObjectWithTransform, x?: number, y?: number, offsetX?: number, offsetY?: number) : Bullet
    {
        this.stopReloading();
        return super.fire(from, x, y, offsetX, offsetY);
    }

    public stopReloading() : void
    {
        this.timerReloadWeapon.remove();
    }

    public reload() : void
    {
        if (this.getShots() == 0) // Full ammunition
        {
            this.timerReloadWeapon.remove();
            return;
        }
        else if (this.timerReloadWeapon.getRemaining() == 0) // The timer is inactive or it has been triggered 
        {
            this.timerReloadWeapon = this.scene.time.delayedCall(100, () => {
                this.decrementShots();
                if (this.getShots() > 0)
                    this.timerReloadWeapon = this.timerReloadWeapon.reset({delay: this.timerReloadWeapon.delay, repeat: 1, callbackScope: this, callback: this.reload });
                else
                    this.stopReloading();
            }, null, this);
        }
    }

    public decrementShots() : void
    {
        this.shots -= 1;
        this.owner.emit("shotsChanged", this.shots, this.fireLimit);
    }

    public setShots(shots: number) : void
    {
        this.shots = shots;
        this.owner.emit("shotsChanged", this.shots, this.fireLimit);
    }

    public getShots() : number
    {
        return this.shots;
    }

    public stopFiring() : void
    {
        this.reload();
    }

    public setOwner(owner: Pawn) : void
    {
        this.owner = owner;
    }
}