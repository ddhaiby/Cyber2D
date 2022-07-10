import { Pawn } from "../Pawns/Pawn";

export class CyberPunch extends Phaser.Physics.Arcade.Image
{
    /** The damage per attack */
    public damage: number = 0;

    /** The pawn that owns this weapon */
    protected owner: Pawn = null;

    constructor(scene: Phaser.Scene, x: number, y: number)
    {
        super(scene, x, y, "", "");
        scene.physics.add.existing(this);

        this.setVisible(false); // Punch is already rendered with the player
        this.damage = 5;
    }
}