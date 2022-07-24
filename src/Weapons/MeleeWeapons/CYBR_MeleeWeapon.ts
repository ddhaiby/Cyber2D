import { Pawn } from "../../Pawns/Pawn";

export class CYBR_MeleeWeapon extends Phaser.Physics.Arcade.Image
{
    /** The damage per attack */
    public damage: number = 0;

    /** The width range of the weapon */
    private _range: number = 10;

    /** The pawn that owns this weapon */
    private _owner: Pawn = null;

    constructor(scene: Phaser.Scene, owner?: Pawn)
    {
        super(scene, 0, 0, "", "");
        scene.physics.add.existing(this);

        this.setVisible(false); // For now melee weapons are already rendered with the owner
        this.damage = 5;
        this.owner = owner;
    }

    public set owner(owner: Pawn)
    {
        this._owner = owner;

        if (this._owner)
        {
            this.setSize(this.range, this._owner.height);
        }
    }

    protected set range(range: number)
    {
        this._range = range;

        if (this._owner)
        {
            this.setSize(this.range, this._owner.height);
        }
    }

    public get range(): number
    {
        return this._range;
    }
}