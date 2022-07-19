// https://codepen.io/samme/pen/YzPEqYd
import { Pawn } from "../Pawns/Pawn";

export class MovingPlatform extends Phaser.GameObjects.PathFollower
{
    private pathStartX: number = null;
    private pathStartY: number = null;
    private pathEndX: number = null;
    private pathEndY: number = null;

    /** The duration to go from the pathStart to its pathEnd */
    private time: number = 10;

    /** Whether this platform is activated in its constructor*/
    private activateOnStart: boolean = true;

    /** Whether the platform slow once it's close the end of it's path */
    private slowOnEdges: boolean = true;

    /** If true, this platform will stop moving once it reaches its goal. If false, this platform acts like a yoyo */
    private oneWay: boolean = false;

    /** Whether the platform is activated */
    private activated: boolean = false;

    /** The list of pawns on this platform */
    public collidedObjects: Phaser.Structs.Map<string, Pawn>;

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string | Phaser.Textures.Texture, frame?: string | number)
    {
        super(scene, null, x, y, texture, frame);
        this.collidedObjects = new Phaser.Structs.Map([]);

        scene.physics.add.existing(this);
    }

    public init(): void
    {
        this.setTexture("platform_atlas", (this.pathEndX !== null) ? "movingPlatformHorizontal.png" : "movingPlatformVertical.png");

        const platformBody = (this.body as Phaser.Physics.Arcade.Body);

        platformBody.setSize(this.width, this.height);
        platformBody.allowGravity = false;
        platformBody.setImmovable(true);

        this.pathStartX = this.x;
        this.pathStartY = this.y;
        this.pathEndX = this.pathEndX ?? this.pathStartX;
        this.pathEndY = this.pathEndY ?? this.pathStartY;

        if (this.activateOnStart)
        {
            this.activate();
        }
        else
        {
            this.startFollowPath(this.pathStartX, this.pathStartY, this.pathStartX, this.pathStartY);
        }
    }

    public activate(): void
    {
        if (this.activated)
            return;

        this.stopFollow();
        this.startFollowPath(this.pathStartX, this.pathStartY, this.pathEndX, this.pathEndY);
        this.activated = true;
    }

    public reset(): void
    {
        this.setX(this.pathStartX);
        this.setY(this.pathStartY);

        if (!this.activateOnStart)
        {
            this.stopFollow();
            this.activated = false;
        }
    }

    public addCollidedObject(pawn: Pawn): void
    {
        this.collidedObjects.set(pawn.name, pawn);
    }

    public update(): void
    {
        let newCollidedObjects: Phaser.Structs.Map<string, Pawn> = new Phaser.Structs.Map([]) ;

        const epsilon = 3;
        this.collidedObjects.getArray().forEach((pawn: Pawn) => {
            const isPawnAbovePlatform = ((pawn.y + pawn.height / 2) - (this.y - this.height / 2) <= epsilon);

            if (!pawn.isJumping && isPawnAbovePlatform)
            {
                newCollidedObjects.set(pawn.name, pawn);
            }
        });

        this.collidedObjects = newCollidedObjects;
    }

    private startFollowPath(pathStartX: number, pathStartY: number, pathEndX: number, pathEndY: number): void
    {
        const loop = this.scene.game.loop;
        const path = new Phaser.Curves.Path(pathStartX, pathStartY).lineTo(pathEndX, pathEndY);
        this.setPath(path);

        this.startFollow({
            duration: this.time,
            yoyo: !this.oneWay,
            loop: this.oneWay ? 0 : -1,
            ease: this.slowOnEdges ? Phaser.Math.Easing.Sine.InOut : Phaser.Math.Easing.Linear,
            onUpdate: () => {
                // Scale 'pathDelta' to a 1-second velocity vector, for correct collisions.
                const platformVelocity = new Phaser.Math.Vector2(this.pathDelta.x * 1000 / loop.delta, this.pathDelta.y * 1000 / loop.delta);
                const isPlatformMovingOnRight = (platformVelocity.x >= 0);
                (this.body as Phaser.Physics.Arcade.Body).velocity.copy(new Phaser.Math.Vector2(isPlatformMovingOnRight ? 0.001 : -0.001)); // hack to make sure the physic body is updated

                this.collidedObjects.getArray().forEach((pawn: Pawn) =>
                {
                    let newVelocityX = pawn.body.velocity.x;
                    let newVelocitY = pawn.body.velocity.y;

                    if (!pawn.isJumping)
                    {
                        // Update x
                        if (!pawn.isWalking)
                        {
                            newVelocityX = platformVelocity.x;
                        }
                        else if (isPlatformMovingOnRight && pawn.isLookingRight) // Platform and pawn go on the right
                        {
                            newVelocityX = platformVelocity.x + pawn.getWalkSpeed();
                        }
                        else if(!isPlatformMovingOnRight && pawn.isLookingLeft) // Platform and pawn go on the left
                        {
                            newVelocityX = platformVelocity.x - pawn.getWalkSpeed();
                        }
                        else // Platform and pawn go on opposite directions
                        {
                            newVelocityX = pawn.body.velocity.x;
                        }

                        // Update y
                        if (this.pathDelta.y > 0)
                        {
                            newVelocitY = platformVelocity.y * 2;
                        }
                    }
                    else
                    {
                        newVelocityX = 0;
                        newVelocitY = pawn.body.velocity.y;
                    }

                    pawn.body.velocity.copy(new Phaser.Math.Vector2(newVelocityX, newVelocitY));
                });
            }
        });
    }
}