import { Weapon, consts, Bullet, ObjectWithTransform } from "phaser3-weapon-plugin";
import { AudioManager } from "../../Managers/AudioManager";
import { CYBR_Bullet } from "./CYBR_Bullet";
import { Pawn } from "..//../Pawns/Pawn";
import { CYBR_Weapon } from "../CYBR_Weapon"

export class CYBR_FireWeapon extends CYBR_Weapon
{
    protected timerReloadWeapon: Phaser.Time.TimerEvent;
    protected weapon: Weapon;

    /** X-position from where the bullets will spawn */
    protected muzzleX: number = 0;

    /** Y-position from where the bullets will spawn */
    protected muzzleY: number = 0;

    /** X-position of the grip. It defines the origin of the weapon */
    protected gripX: number = 0;

    /** Y-position of the grip. It defines the origin of the weapon */
    protected gripY: number = 0;

    /** If set to true, the grip will be internally updated with flipX value */
    protected bindGripToFlipX: boolean = true;

    /** Number of bullets when a fire is triggered */
    protected bulletPerFire: number = 1;

    /** Time to reload the weapon */
    protected reloadRate: number = 400;

    // Sounds
    /** Sound for the fire */
    protected fireSound: string = "";

    /** Sound when trying to fire with 0 bullet */
    protected emptyWeaponSound: string = "";

    /** Last time emptyWeaponSound has been played */
    private lastTimeEmptyWeaponSoundPlayed = 0;

    /** Sound when a weapon is reloaded */
    protected reloadSound: string = "";

    constructor(scene: Phaser.Scene, x: number, y: number, texture?: string | Phaser.Textures.Texture, frame?: string | number, textureBullet?: string, frameBullet?: string)
    {
        super(scene, x, y, texture, frame);
        this.setVisible(!!texture);

        this.weapon = new Weapon(scene, -1, textureBullet, frameBullet);
        this.weapon.trackSprite(this);
        this.bulletClass = CYBR_Bullet;
        this.fireAngle = 0;
        this.bulletKillType = consts.KillType.KILL_WORLD_BOUNDS;
        this.bulletGravity = new Phaser.Math.Vector2(0, -scene.physics.world.gravity.y); // So the bullets ignore the gravity
        this.timerReloadWeapon = scene.time.addEvent({}); // Create an empty timer to avoid null error

        this.weapon.on("fire", (bullet: CYBR_Bullet/*, weapon: Weapon, speed: number*/)=>{
            this.owner.emit("fire", bullet);
            this.owner.emit("shotsChanged", this.shots, this.fireLimit);
        }, this);

        if (this.visible)
        {
            this.weapon.on("fire", ()=>{ this.play("Fire"); }, this);
        }

        this.initAnimations(this.texture.key);
    }

    // Init
    ////////////////////////////////////////////////////////////////////////

    protected initAnimations(key: string): void
    {
        if (this.visible)
        {
            this.anims.create({
                key: "Idle",
                frames: this.anims.generateFrameNumbers(key, { start: 0, end: 0 }),
                frameRate: 1,
                repeat: 0
            });

            this.anims.create({
                key: "Fire",
                frames: this.anims.generateFrameNumbers(key, { start: 0, end: 2 }),
                frameRate: 24,
                repeat: 0
            });

            this.play("Idle");
        }
    }

    // Update
    ////////////////////////////////////////////////////////////////////////

    public fire(from?: Phaser.Math.Vector2 | Phaser.GameObjects.Sprite | ObjectWithTransform, x?: number, y?: number): Bullet[]
    {
        this.stopReloading();

        let bullets = [];

        const offsetX = this.muzzleX;
        const offsetY = this.flipX ? -this.muzzleY: this.muzzleY;

        let offsetWithRotationX = offsetX; 
        let offsetWithRotationY = offsetY;

        const rotation = this.fireAngle * Math.PI / 180;
        const sinAngle = Math.sin(rotation);
        const cosAngle = Math.cos(rotation);

        offsetWithRotationX = offsetX * cosAngle - offsetY * sinAngle;
        offsetWithRotationY = offsetX * sinAngle + offsetY * cosAngle;

        for (let i = 0; i < this.bulletPerFire; ++i)
        {
            this.scene.time.delayedCall(i * 300, ()=> {
                const bullet = this.weapon.fire(from, x, y, offsetWithRotationX, offsetWithRotationY) as CYBR_Bullet;
                bullets.push(bullet);

                if (bullet)
                {
                    bullet.setDepth(0.8);
                    bullet.damage = this.damage;
                    AudioManager.playSound(this.fireSound);
                }
                else if ((this.shots == this.fireLimit) && (new Date().getTime() - this.lastTimeEmptyWeaponSoundPlayed > this.fireRate))
                {
                    AudioManager.playSound(this.emptyWeaponSound);
                    this.lastTimeEmptyWeaponSoundPlayed = new Date().getTime();
                }
            }, null, this);
        }
        return bullets;
    }

    public stopReloading(): void
    {
        this.timerReloadWeapon.remove();
    }

    public tryReloading(): void
    {
        if (this.shots == 0) // Full ammunition
        {
            this.timerReloadWeapon.remove();
            return;
        }
        else if (this.timerReloadWeapon.getRemaining() == 0) // The timer is inactive or it has been triggered 
        {
            this.timerReloadWeapon = this.scene.time.delayedCall(this.reloadRate, () => {
                this.reload();
            }, null, this);
        }
    }

    private reload(): void
    {
        this.decrementShots();
        if (this.shots > 0)
            this.timerReloadWeapon = this.timerReloadWeapon.reset({delay: this.timerReloadWeapon.delay, repeat: 1, callbackScope: this, callback: this.reload });
        else
            this.stopReloading();

        AudioManager.playSound(this.reloadSound);
    }

    private decrementShots(): void
    {
        this.weapon.shots -= 1;
        this.owner.emit("shotsChanged", this.weapon.shots, this.weapon.fireLimit);
    }

    public setShots(shots: number): void
    {
        this.weapon.shots = shots;
        this.owner.emit("shotsChanged", this.weapon.shots, this.weapon.fireLimit);
    }

    public get shots(): number
    {
        return this.weapon.shots;
    }

    public get bullets(): Phaser.GameObjects.Group
    {
        return this.weapon.bullets;
    }

    public stopFiring(): void
    {
        this.tryReloading();
    }

    public setOwner(owner: Pawn): void
    {
        this.owner = owner;
    }

    public setFlipX(value: boolean): this
    {
        this.weapon.trackSprite(this);
        return super.setFlipX(value);
    }

    public setGripPosition(x: number, y: number): void
    {
        this.gripX = x;
        this.gripY = y;
    }

    public setPosition(x?: number, y?: number, z?: number, w?: number): this
    {
        const finalGripX = (this.bindGripToFlipX && !this.flipX) ? this.width - this.gripX : this.gripX;
        return super.setPosition(x - finalGripX, y - this.gripY, z, w);
    }

    public setMuzzlePosition(x: number, y: number): void
    {
        this.muzzleX = x;
        this.muzzleY = y;
    }

    public setBulletPerFire(bulletPerFire: number): void
    {
        this.bulletPerFire = Math.max(bulletPerFire, 1);
    }

    public setBulletSpeed(bulletSpeed: number): void
    {
        this.bulletSpeed = bulletSpeed;
    }

    public trackSprite(sprite: Phaser.GameObjects.Sprite | ObjectWithTransform, offsetX?: number, offsetY?: number, trackRotation?: boolean): void
    {
        this.setPosition(sprite.x, sprite.y);
        this.weapon.trackSprite(sprite, offsetX, offsetY, trackRotation);
    }

    public set bulletGravity(gravity: Phaser.Math.Vector2)
    {
        this.weapon.bulletGravity = gravity;
    }

    public set bulletClass(bulletClass: typeof Bullet)
    {
        this.weapon.bulletClass = bulletClass;
    }

    public get fireAngle(): number
    {
        return this.weapon.fireAngle;
    }

    public set fireAngle(fireAngle: number)
    {
        this.weapon.fireAngle = fireAngle;
    }

    public get fireRate(): number
    {
        return this.weapon.fireRate;
    }

    public set fireRate(fireRate: number)
    {
        this.weapon.fireRate = fireRate;
    }

    public set bulletLifespan(bulletLifespan: number)
    {
        this.weapon.bulletLifespan = bulletLifespan;
    }

    public set bulletSpeed(bulletSpeed: number)
    {
        this.weapon.bulletSpeed = bulletSpeed;
    }

    public set bulletKillType(bulletKillType: number)
    {
        this.weapon.bulletKillType = bulletKillType;
    }

    public get fireLimit(): number
    {
        return this.weapon.fireLimit;
    }

    public set fireLimit(fireLimit: number)
    {
        this.weapon.fireLimit = fireLimit;
    }

    public get autofire(): boolean
    {
        return this.weapon.autofire;
    }

    public set autofire(autofire: boolean)
    {
        this.weapon.autofire = autofire;
    }
}