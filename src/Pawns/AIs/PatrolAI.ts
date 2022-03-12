import {Pawn} from "../Pawn";

export class PatrolAI extends Pawn
{
    private pathMinX: number = 0;
    private pathMaxX: number = 0;

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string | Phaser.Textures.Texture, frame?: string | number)
    {
        super(scene, x, y, texture, frame);
        this.lookOnRight();
    }

    // Update
    ////////////////////////////////////////////////////////////////////////

    public update(...args: any[]) : void
    {
        super.update(args);

        if (this.dead())
            return;

        if (this.x <= this.pathMinX)
            this.lookOnRight();
        else if (this.x >= this.pathMaxX)
            this.lookOnLeft();

        this.walk();
    }

    protected updateAnimations() : void
    {
        if (this.isWalking)
            this.anims.play(this.isLookingRight ? "right" : "left", true);
        else
            this.anims.pause();
    }

    public setPath(pathMinX: number, pathMaxX: number) : void
    {
        if (pathMinX < pathMaxX)
        {
            this.pathMinX = pathMinX;
            this.pathMaxX = pathMaxX;
        }
        else
            console.error("pathMinX can't be higher than pathMaxX!");
    }
}