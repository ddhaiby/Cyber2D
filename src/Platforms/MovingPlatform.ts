import { Pawn } from "../Pawns/Pawn";

export class MovingPlatform extends Phaser.Physics.Arcade.Image
{
    private pathStartX: number = null;
    private pathStartY: number = null;
    private pathEndX: number = null;
    private pathEndY: number = null;
    private time: number = 10;
    private activateOnStart: boolean = true;
    private activated: boolean = false;
    private tweenMovement: Phaser.Tweens.Tween = null;
    public collidedObjects: Phaser.Structs.Map<string, Phaser.Physics.Arcade.Image>;

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string | Phaser.Textures.Texture, frame?: string | number)
    {
        super(scene, x, y, texture, frame);
        this.setOrigin(0);
        this.collidedObjects = new Phaser.Structs.Map([]);
    }

    public init(): void
    {
        this.setTexture("platform_atlas", (this.pathEndX !== null) ? "movingPlatformHorizontal.png" : "movingPlatformVertical.png");

        this.pathStartX = this.x;
        this.pathStartY = this.y;

        if (this.activateOnStart)
        {
            this.activate();
        }
    }

    public activate(): void
    {
        if (this.activated)
        {
            return;
        }

        let previousX = this.x;
        let previousY = this.y;

        let vx = 0;
        let vy = 0;

        this.tweenMovement = this.scene.tweens.add({
            targets: this,
            x: (this.pathEndX !== null) ? this.pathEndX : this.x,
            y: (this.pathEndY !== null) ? this.pathEndY : this.y,
            ease: Phaser.Math.Easing.Linear,
            loop: -1,
            duration: this.time,
            yoyo: true,
            onUpdate: function () {
                this.body.x = this.x;
                this.body.y = this.y;
                vx = this.body.x - previousX;
                vy = this.body.y - previousY;
                previousX = this.body.x;
                previousY = this.body.y;

                this.collidedObjects.getArray().forEach((object: Phaser.Physics.Arcade.Image) => {
                    object.setX(object.x + vx);
                    object.setY(object.y + vy);
                });
            },
            onUpdateScope: this
        });

        this.activated = true;
    }

    public reset(): void
    {
        this.setX(this.pathStartX);
        this.setY(this.pathStartY);
        this.body.x = this.x;
        this.body.y = this.y;

        if (!this.activateOnStart && this.tweenMovement)
        {
            this.tweenMovement.remove();
            this.tweenMovement = null;
            this.activated = false;
        }
    }

    public addCollidedObject(object: Phaser.Physics.Arcade.Image): void
    {
        this.collidedObjects.set(object.name, object);
    }

    public update(): void
    {
        let newCollidedObjects: Phaser.Structs.Map<string, Phaser.Physics.Arcade.Image> = new Phaser.Structs.Map([]) ;

        this.collidedObjects.getArray().forEach((object: Phaser.Physics.Arcade.Image) => {
            if (object.body.touching.down)
                newCollidedObjects.set(object.name, object);
        });

        this.collidedObjects = newCollidedObjects;
    }
}