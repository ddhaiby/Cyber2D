import { Player } from "../Pawns/Player";

export class Ladder extends Phaser.Physics.Arcade.Image
{
    private player: Player = null;
    private playerLastFrame: Player = null;

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string | Phaser.Textures.Texture, frame?: string | number)
    {
       super(scene, x, y, texture, frame);
    }

    public overlapPawnBegin(player: Player) : void
    {
        this.player = player;

        if (!this.playerLastFrame || this.player != this.playerLastFrame)
        {
            this.emit("overlapPlayerBegin", this);
        }
    }

    private overlapPawnEnd() : void
    {
        this.emit("overlapPlayerEnd", this);
    }

    public update() : void
    {
        super.update();

        if (!this.player && this.playerLastFrame)
            this.overlapPawnEnd();

        this.playerLastFrame = this.player;
        this.player = null;
    }

    public updatePawnInteraction() : void
    {
        if (this.player)
        {
            if (this.player.isClimbing)
                this.player.x = this.x;

            const offset = 4;

            if (this.player.isLookingUp)
            {
                if (this.player.y + this.player.height / 2 > this.y - this.height / 2 + offset)
                    this.player.climb(0, -this.player.getClimbSpeed());
            }
            else if (this.player.isLookingDown)
            {
                if (this.player.y - this.player.height / 2 < this.y + this.height / 2)
                    this.player.climb(0, this.player.getClimbSpeed());
            }
            else if (this.player.isClimbing)
            {
                if (this.player.isOnFloor())
                    this.player.stopClimbing();
                else
                    this.player.climb(0,0);
            }
        }
    }
}