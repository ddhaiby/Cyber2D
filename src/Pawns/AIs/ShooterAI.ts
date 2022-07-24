import {Pawn} from "../Pawn";
import { GuardWeapon } from "../../Weapons/FireWeapons/GuardWeapon";
import { CST } from "../../CST";
import { AIData } from "./AISpawn";

export class ShooterAI extends Pawn
{
    // Patrol
    /** Whether the AI can moves */
    public patrol: boolean = false;

    /** The start position for the patrol. Must be lower than pathEndX */
    private pathStartX: number = 0;

    /** The end position for the patrol. Must be greater than pathStartX */
    private pathEndX: number = 0;

    // FireWeapon
    /** Whether the AI has a weapon */
    private fireWeapon: boolean = false;

    /** The delay between each fire */
    private fireWeaponDelay: number = 1000;

    /** The delay before the first fire */
    private startFireWeponDelay: number = 0;

    /** Internal timer to handle fires */
    private fireWeaponTimer: Phaser.Time.TimerEvent;

    constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string | Phaser.Textures.Texture, frame?: string | number)
    {
        super(scene, x, y, texture, frame);

        this.fireWeaponTimer = scene.time.addEvent({}); // Create an empty timer to avoid null error
        this.on("die", () => { this.fireWeaponTimer.remove(false); }, this);
        this.deathSound = "Robot_Death";
    }

    // Init
    ////////////////////////////////////////////////////////////////////////

    public init(aiData: AIData) : this
    {
        super.init(aiData, "patrol");

        if (aiData)
        {
            this.fireWeapon = aiData.fireWeapon;
            this.fireWeaponDelay = aiData.fireWeaponDelay;
            this.patrol = aiData.patrol;
            this.pathStartX = aiData.pathStartX;
            this.pathEndX = aiData.pathEndX;
            this.startFireWeponDelay = aiData.startFireWeponDelay;
        }

        if (this.fireWeapon)
        {
            let weapon = new GuardWeapon(this.scene, this.x, this.y);
            weapon.damage = this.bulletDamage;
            weapon.setBulletPerFire(this.bulletPerFire);
            this.equipWeapon(weapon);
            this.scene.time.delayedCall(this.startFireWeponDelay, this.prepareNextFire, null, this);
        }

        return this;
    }

    protected initAnimations(textureKey: string) : void
    {
        super.initAnimations(textureKey);

        const fireWeaponKeyAnim = this.fireWeapon ? "rifle" : "pistol";

        this.anims.create({
            key: "idle",
            frames: this.anims.generateFrameNames(this.texture.key, { prefix: fireWeaponKeyAnim + "Idle_", suffix: ".png", start: 1, end: 1, zeroPad: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: "walk",
            frames: this.anims.generateFrameNames(this.texture.key, { prefix: fireWeaponKeyAnim +  "Walk_", suffix: ".png", start: 1, end: 5, zeroPad: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: "death",
            frames: this.anims.generateFrameNames(this.texture.key, { prefix: fireWeaponKeyAnim + "Death_", suffix: ".png", start: 1, end: 5, zeroPad: 3 }),
            frameRate: 5,
            repeat: 0
        });

        this.on("animationcomplete_death", function (anim: Phaser.Animations.Animation, frame: Phaser.Animations.AnimationFrame) {
            this.scene.time.delayedCall(500, () => { this.disableBody(true, true); }, null, this);
        }, this);

        this.anims.play("idle", true);
        this.body.setSize(this.anims.currentAnim.frames[0].frame.realWidth, this.anims.currentAnim.frames[0].frame.realHeight);
        this.body.setOffset(0,0);
    }

    protected initAttributes() : void
    {
        super.initAttributes();
        this.attributes.set(CST.PAWN.ATTRIBUTES.WALK_SPEED, 100);
    }

    public reset(x: number, y: number) : void
    {
        super.reset(x,y);
        this.fireWeaponTimer.remove(false);
        this.scene.time.delayedCall(this.startFireWeponDelay, this.prepareNextFire, null, this);
    }

    // Update
    ////////////////////////////////////////////////////////////////////////

    public update(...args: any[]) : void
    {
        super.update(args);

        if (!this.dead() && !this.isTakingDmg)
            this.updateControl();
    }

    protected updateControl() : void
    {
        if (this.patrol)
        {
            if (this.x <= this.pathStartX)
                this.lookOnRight();
            else if (this.x >= this.pathEndX)
                this.lookOnLeft();

            this.walk();
        }
    }

    protected updateAnimations() : void
    {
        if (this.dead())
        {
            if (this.anims.currentAnim.key != "death")
                this.anims.play("death");
        }
        else
        {
            this.anims.play((this.isWalking || this.isTakingDmg) ? "walk" : "idle", true);
            this.setFlipX(this.isLookingLeft);
        }
    }

    public postUpdate(): void
    {
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
            this.fire();
            this.prepareNextFire();
        }});
    }

    public setPath(pathStartX: number, pathEndX: number) : void
    {
        if (pathStartX == undefined || pathEndX == undefined)
            console.error("pathStartX or pathEndX is undefined!");
        else if (pathStartX < pathEndX)
        {
            this.pathStartX = pathStartX;
            this.pathEndX = pathEndX;
        }
        else
            console.error("pathStartX can't be higher than pathEndX!");
    }
}