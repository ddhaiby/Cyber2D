import { CST } from "../../CST";
import { AIData } from "./AISpawn";
import { ShooterAI } from "./ShooterAI";

export class DroneAI extends ShooterAI
{
    constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string | Phaser.Textures.Texture, frame?: string | number)
    {
        super(scene, x, y, texture, frame);

        this.patrol = true;
        this.pawnName = "Drone";
    }

    // Update
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

    protected updateControl() : void
    {
        this.doFlyPatrol();
    }

    public fire(fireAngle?: number): void
    {
        if (this.target)
        {
            //this.fire(angleToTarget)
        }
    }

    public hurt(health: number, isProjected: boolean = false, hurtFromRight: boolean = false, velocityProjection: number = 250): void
    {
        super.hurt(health, isProjected, hurtFromRight, 0); // Make sure there is no projection for the drone
    }
}