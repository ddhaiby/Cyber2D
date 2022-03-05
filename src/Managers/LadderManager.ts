import { Pawn } from "../Pawns/Pawn";
import { Player } from "../Pawns/Player";
import { Ladder } from "../Platforms/Ladder";

export class LadderManager {
    private scene: Phaser.Scene;
    private player: Player;

    public ladders: Phaser.Physics.Arcade.StaticGroup;
    public laddersOnPlayer: Phaser.Structs.Map<string, Ladder>;
    public bottomLadderOnPlayer: Ladder;

    constructor(scene: Phaser.Scene, ladders: Phaser.Physics.Arcade.StaticGroup)
    {
        this.scene = scene;
        this.ladders = ladders;
        this.laddersOnPlayer = new Phaser.Structs.Map<string, Ladder>([]);
    }

    public init(player: Player)
    {
        this.player = player;

        this.ladders.getChildren().forEach((ladder: Ladder) => {
            ladder.on("overlapPlayerBegin", () => { this.addLadderOnPlayer(ladder); }, this);
            ladder.on("overlapPlayerEnd", () => { this.removeLadderOnPlayer(ladder); }, this);
        }, this);
    }

    private addLadderOnPlayer(ladder: Ladder) : void
    {
        if (!this.laddersOnPlayer.has(ladder.name))
        {
            this.laddersOnPlayer.set(ladder.name, ladder);
            this.bottomLadderOnPlayer = this.getBottomLadder(this.laddersOnPlayer.getArray() as Ladder[]);
        }
    }

    private removeLadderOnPlayer(ladder: Ladder) : void
    {
        this.laddersOnPlayer.delete(ladder.name);
        if (this.laddersOnPlayer.size == 0)
            this.player.stopClimbing();

        this.bottomLadderOnPlayer = this.getBottomLadder(this.laddersOnPlayer.getArray() as Ladder[]);
    }

    private getBottomLadder(ladders: Ladder[]) : Ladder
    {
        if (ladders.length == 0)
            return null;
        else if (ladders.length == 1)
            return ladders[0];
        else
        {
            return ladders.reduce(function(ladder1 : Ladder, ladder2 : Ladder) {
                return ladder1.y > ladder2.y ? ladder1 : ladder2;
            });
        }
    }

    /** Return true if at least one ladder is under the given y position. */
    public areLaddersOnPlayerUnderY(y: number) : boolean
    {
        let ladderUnderPlayer = false

        this.laddersOnPlayer.each((ladderName: string) => {
            ladderUnderPlayer = ladderUnderPlayer || (this.laddersOnPlayer.get(ladderName).y >= y);
        });

        return ladderUnderPlayer;
    }

    public update() : void 
    {
        if (this.bottomLadderOnPlayer)
            this.bottomLadderOnPlayer.updatePawnInteraction();

        this.ladders.getChildren().forEach((ladder: Ladder) => { ladder.update();  }, this);
    }
}