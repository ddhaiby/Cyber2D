import { ShooterAI } from "./ShooterAI";
import { AIData } from "./AISpawn";
import { Gattling } from "../../Weapons/FireWeapons/Gattling";

export class DroneAI extends ShooterAI
{
    constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string | Phaser.Textures.Texture, frame?: string | number)
    {
        super(scene, x, y, texture, frame);

        this.patrol = true;
        this.pawnName = "Drone";
        this.deathSound = "droneDeath";
        this.ClassWeapon = Gattling;
    }

    // Init
    ////////////////////////////////////////////////////////////////////////

    public init(aiData: AIData) : this
    {
        super.init(aiData);

        const droneBody = (this.body as Phaser.Physics.Arcade.Body);
        droneBody.allowGravity = false;
        droneBody.setImmovable(true);

        this.isLookingDown = (this.pathStartY != null) && !this.startUp;
        this.isLookingUp = (this.pathStartY != null) && this.startUp;
        this.isLookingRight = (this.pathStartX != null) && this.startOnRight;
        this.isLookingLeft = (this.pathStartX != null) && !this.startOnRight;

        return this;
    }

    public reset(x: number, y: number): void
    {
        super.reset(x, y);
        if (this.currentWeapon)
        {
            this.currentWeapon.setVisible(true);
            this.currentWeapon.anims.play("Idle");
        }
    }

    // Update
    ////////////////////////////////////////////////////////////////////////

    protected updateControl() : void
    {
        this.doFlyPatrol();
    }

    public postUpdate(): void
    {
        if (this.currentWeapon)
        {
            if (this.target && !this.isDead())
            {
                const rotation = Math.atan2(this.currentWeapon.y - this.target.y, this.currentWeapon.x - this.target.x);
                const aimOnRightSide = Math.abs(rotation) > Math.PI / 2;

                this.currentWeapon.setFlipX(aimOnRightSide);
                this.currentWeapon.rotation = aimOnRightSide ? rotation + Math.PI : rotation;
                this.currentWeapon.setPosition(this.x, this.y);
            }
        }
    }

    public fire(): void
    {
        const fireAngle = this.currentWeapon.flipX ? this.currentWeapon.angle : this.currentWeapon.angle + 180;
        super.fire(fireAngle);

        this.isFiring = false; // Directly set firing to false since there is no anim (could use weapon anim though)
    }

    public hurt(health: number, isProjected: boolean = false, hurtFromRight: boolean = false, velocityProjection: number = 250): void
    {
        super.hurt(health, isProjected, hurtFromRight, 0); // Make sure there is no projection for the drone
    }

    public die(): void
    {
        super.die();

        if (this.currentWeapon)
        {
            this.currentWeapon.anims.play("Death");
        }
    }

    protected onDeathAnimationComplete(): void
    {
        super.onDeathAnimationComplete();

        if (this.currentWeapon)
        {
            this.currentWeapon.setVisible(false);
        }
    }
}