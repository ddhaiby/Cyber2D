import { Pawn } from "../Pawns/Pawn";
import { Player } from "../Pawns/Player";
import { Ladder } from "../Platforms/Ladder";

export class LadderManager {
    private scene: Phaser.Scene;
    private player: Player;

    public ladders: Phaser.Physics.Arcade.Group;
    public laddersOnPlayer: Phaser.Structs.Map<string, Ladder>;

    constructor(scene: Phaser.Scene, ladders: Phaser.Physics.Arcade.Group)
    {
        this.scene = scene;
        this.ladders = ladders;
        this.laddersOnPlayer = new Phaser.Structs.Map<string, Ladder>([]);
    }

    public init(player: Player)
    {
        this.player = player;

        this.ladders.getChildren().forEach((ladder: Ladder) => {
            ladder.on("overlapPlayerBegin", () => { this.laddersOnPlayer.set(ladder.name, ladder); }, this);
            ladder.on("overlapPlayerEnd", () => { this.laddersOnPlayer.delete(ladder.name); }, this);
        }, this);
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
        this.ladders.getChildren().forEach((ladder: Ladder) => {
            ladder.updatePawnInteraction();
            ladder.update();
        }, this);

        if (this.laddersOnPlayer.size == 0)
            this.player.stopClimbing();
    }
}