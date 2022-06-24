export declare type PawnData = {
    x: number;
    y: number;
    bodyDamage: number;
    maxHealth: number;
    startOnRight: boolean;
}

export class PawnSpawn extends Phaser.GameObjects.Image
{
    /** Max hp */
    protected maxHealth: number = 10000;

    /** Whether the pawn is looking on the right when spawned */
    protected startOnRight: boolean = false;

    /** The damage when there is a body contact */
    protected bodyDamage: number = 0;

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string | Phaser.Textures.Texture, frame?: string | number)
    {
        super(scene, x, y, texture, frame);
    }

    public getPawnData(): PawnData
    {
        return {
            x: this.x,
            y: this.y,
            maxHealth: this.maxHealth,
            startOnRight: this.startOnRight,
            bodyDamage: this.bodyDamage
        }
    }
}