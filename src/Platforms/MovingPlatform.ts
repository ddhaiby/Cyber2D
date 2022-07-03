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

        this.scene.physics.add.existing(this);
    }

    public init(): void
    {
        this.setTexture("platform_atlas", (this.pathEndX !== null) ? "movingPlatformHorizontal.png" : "movingPlatformVertical.png");

        const body = (this.body as Phaser.Physics.Arcade.Body);

        body.setSize(this.width, this.height);
        body.allowGravity = false;
        body.setImmovable(true);

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

        this.collidedObjects.getArray().forEach((pawn: Pawn) => {
            if (pawn.body.touching.down && !pawn.isJumping)
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
                const body = this.body as Phaser.Physics.Arcade.Body;
                body.velocity.copy(this.pathDelta).scale(1000 / loop.delta);

                this.collidedObjects.getArray().forEach((pawn: Pawn) =>
                {
                    if (!pawn.isJumping)
                    {
                        // The platform and the pawn go to the same X-direction
                        if ((pawn.body.velocity.x * body.velocity.x) >= 0)
                        {
                            const newVelocity = new Phaser.Math.Vector2(pawn.body.velocity.x + body.velocity.x, pawn.body.velocity.y + body.velocity.y);
                            pawn.body.velocity.copy(newVelocity);
                        }
                        else
                        {
                            const newVelocity = new Phaser.Math.Vector2(pawn.body.velocity.x, pawn.body.velocity.y);
                            pawn.body.velocity.copy(newVelocity);
                        }
                    }
                });
            }
        });
    }
}