import {Pawn} from "../Pawn";

export class PatrolAI extends Pawn
{
    private pathStartX: number = 0;
    private pathEndX: number = 0;

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

        if (this.x <= this.pathStartX)
            this.lookOnRight();
        else if (this.x >= this.pathEndX)
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

    public setPath(pathStartX: number, pathEndX: number) : void
    {
        if (pathStartX < pathEndX)
        {
            this.pathStartX = pathStartX;
            this.pathEndX = pathEndX;
        }
        else
            console.error("pathStartX can't be higher than pathEndX!");
    }
}