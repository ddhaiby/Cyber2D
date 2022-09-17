import { GuardWeapon } from "../../Weapons/FireWeapons/GuardWeapon";
import { AIData } from "./AISpawn";
import { BasicAI } from "./BasicAI";

export class ShooterAI extends BasicAI
{
    // FireWeapon
    /** Whether the AI has a weapon */
    protected fireWeapon: boolean = false;

    /** The delay between each fire */
    protected fireWeaponDelay: number = 1000;

    /** The delay before the first fire */
    protected startFireWeponDelay: number = 0;

    /** Internal timer to handle fires */
    protected fireWeaponTimer: Phaser.Time.TimerEvent;

    protected ClassWeapon: Class = GuardWeapon;

    constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string | Phaser.Textures.Texture, frame?: string | number)
    {
        super(scene, x, y, texture, frame);

        this.fireWeaponTimer = scene.time.addEvent({}); // Create an empty timer to avoid null error
        this.on("die", () => { this.fireWeaponTimer.remove(false); }, this);
    }

    // Init
    ////////////////////////////////////////////////////////////////////////

    public init(aiData: AIData) : this
    {
        super.init(aiData);

        if (aiData)
        {
            this.fireWeapon = aiData.fireWeapon;
            this.fireWeaponDelay = aiData.fireWeaponDelay;
            this.startFireWeponDelay = aiData.startFireWeponDelay;
        }

        if (this.fireWeapon)
        {
            //@ts-ignore
            const currentWeapon = new this.ClassWeapon(this.scene, this.x, this.y);
            this.equipWeapon(currentWeapon);
            this.currentWeapon.damage = this.bulletDamage;
            this.currentWeapon.setBulletPerFire(this.bulletPerFire);
            this.currentWeapon.setBulletSpeed(this.bulletSpeed);
            this.equipWeapon(this.currentWeapon);
            this.scene.time.delayedCall(this.startFireWeponDelay, this.prepareNextFire, null, this);
        }

        return this;
    }

    public reset(x: number, y: number) : void
    {
        super.reset(x,y);
        this.fireWeaponTimer.remove(false);
        this.scene.time.delayedCall(this.startFireWeponDelay, this.prepareNextFire, null, this);
    }

    // Update
    ////////////////////////////////////////////////////////////////////////
    
    protected updateControl() : void
    {
        this.doPatrol();
    }

    public postUpdate(): void
    {
        super.postUpdate();
    
        const currentHandPosition = {x: 30, y: 18};

        if (this.currentWeapon)
        {
            this.currentWeapon.setFlipX(this.isLookingRight);
            this.currentWeapon.setPosition(this.x - this.width * this.originX + currentHandPosition.x, this.y - this.height * this.originY + currentHandPosition.y);
        }
    }

    public prepareNextFire() : void
    {
        this.fireWeaponTimer = this.scene.time.addEvent({ delay: this.fireWeaponDelay, callbackScope: this, callback: () => {
            this.stopWalking();
            this.fire();
            this.prepareNextFire();
        }});
    }

}