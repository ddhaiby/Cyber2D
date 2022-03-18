import { Pawn } from "../Pawns/Pawn";

export class MovingPlatform extends Phaser.Physics.Arcade.Image
{
    private pathEndX: number = null;
    private pathEndY: number = null;
    private time: number = 10;
    public collidedObjects: Phaser.Structs.Map<string, Phaser.Physics.Arcade.Image>;

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string | Phaser.Textures.Texture, frame?: string | number)
    {
        super(scene, x, y, texture, frame);
        this.setOrigin(0);
        this.collidedObjects = new Phaser.Structs.Map([]);
    }

    public init() : void
    {
        let previousX = 0;
        let previousY = 0;

        let vx = 0;
        let vy = 0;

        this.scene.tweens.add({
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
    }

    public addCollidedObject(object: Phaser.Physics.Arcade.Image) : void
    {
        this.collidedObjects.set(object.name, object);
    }

    public update() : void
    {
        let newCollidedObjects: Phaser.Structs.Map<string, Phaser.Physics.Arcade.Image> = new Phaser.Structs.Map([]) ;

        this.collidedObjects.getArray().forEach((object: Phaser.Physics.Arcade.Image) => {
            if (object.body.touching.down)
                newCollidedObjects.set(object.name, object);
        });

        this.collidedObjects = newCollidedObjects;
    }
}