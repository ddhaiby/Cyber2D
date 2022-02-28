import { Pawn } from "../Pawns/Pawn";

export class Ladder extends Phaser.Physics.Arcade.Image
{
    private pawn: Pawn = null;
    private pawnLastFrame: Pawn = null;

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string | Phaser.Textures.Texture, frame?: string | number)
    {
       super(scene, x, y, texture, frame);
    }

    public overlapPawnBegin(pawn: Pawn) : void
    {
        this.pawn = pawn;

        if (!this.pawnLastFrame || this.pawn != this.pawnLastFrame)
        {
            this.pawn.setIsOnLadder(true);
            this.emit("onOverlapPawnBegin", this);
        }
        else
            this.overlapContinue();
    }

    private overlapContinue() : void
    {
        this.pawn.setIsOnLadder(true);
    }

    private overlapPawnEnd() : void
    {
        this.emit("onOverlapPawnEnd", this);
    }

    public update() : void
    {
        super.update();

        if (!this.pawn && this.pawnLastFrame)
            this.overlapPawnEnd();

        this.pawnLastFrame = this.pawn;
        this.pawn = null;
    }
}