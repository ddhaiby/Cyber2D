export declare type PawnData = {
    x: number;
    y: number;
    bodyDamage: number;
    bulletDamage: number;
    bulletSpeed: number;
    bulletPerFire: number;
    maxHealth: number;
    startOnRight: boolean;
    startUp: boolean;
}

export class PawnSpawn extends Phaser.GameObjects.Image
{
    /** Max hp */
    protected maxHealth: number = 10000;

    /** Whether the pawn is looking on the right when spawned */
    protected startOnRight: boolean = false;

    /** Whether the pawn is looking up when spawned */
    protected startUp: boolean = false;

    /** The damage when there is a body contact */
    protected bodyDamage: number = 0;

    /** The number of bullet shotper fire */
    protected bulletPerFire: number = 1;

    /** The damage of each bullet */
    protected bulletDamage: number = 1;

    /** The speed of each bullet */
    protected bulletSpeed: number = 750;

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
            startUp: this.startUp,
            bodyDamage: this.bodyDamage,
            bulletDamage: this.bulletDamage,
            bulletSpeed: this.bulletSpeed,
            bulletPerFire: this.bulletPerFire
        }
    }
}