import { Pawn } from "../Pawns/Pawn";

export class Ladder extends Phaser.Physics.Arcade.Image
{
    private pawn: Pawn = null;
    private pawnLastFrame: Pawn = null;

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string | Phaser.Textures.Texture, frame?: string | number)
    {
       super(scene, x, y, texture, frame);
    }

    public overlapPawnBegin(pawn: Pawn) {
        this.pawn = pawn;

        this.pawn.setIsOnLadder(true);
    }   

    private overlapContinue()
    {
        this.pawn.setIsOnLadder(true);
    }

    private overlapPawnEnd()
    {
    }

    public update()
    {
        super.update();

        if (this.pawn)
            this.overlapContinue();
        else if (this.pawnLastFrame)
            this.overlapPawnEnd();

        this.pawnLastFrame = this.pawn;
        this.pawn = null;
    }
}