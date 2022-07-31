import { PawnSpawn } from "../PawnSpawn";

export declare type AIData = {
    x: number;
    y: number;
    bodyDamage: number;
    bulletDamage: number;
    bulletPerFire: number;
    fireWeapon: boolean;
    fireWeaponDelay: number;
    maxHealth: number;
    patrol: boolean;
    pathStartX: number;
    pathEndX: number;
    pathStartY: number;
    pathEndY: number;
    startOnRight: boolean;
    startUp: boolean;
    startFireWeponDelay: number;
    prepareAttackDelay: number;
}

export class AISpawn extends PawnSpawn
{
    /** Whether the AI has a weapon */
    private fireWeapon: boolean = false;

    /** The delay between each fire */
    private fireWeaponDelay: number = 1000;
    
    /** Whether the AI can moves */
    public patrol: boolean = false;

    /** The start position for the patrol. Must be lower than pathEndX */
    private pathStartX: number = null;

    /** The end position for the patrol. Must be greater than pathStartX */
    private pathEndX: number = null;

    /** The start position for the patrol. Must be lower than pathEndY */
    private pathStartY: number = null;

    /** The end position for the patrol. Must be greater than pathStartY */
    private pathEndY: number = null;
    
    /** The delay before the first fire */
    private startFireWeponDelay: number = 0;

    /** The delay before the attack */
    private prepareAttackDelay: number = 0;

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string | Phaser.Textures.Texture, frame?: string | number)
    {
        super(scene, x, y, texture, frame);
    }

    public getPawnData(): AIData
    {
        return {
            x: this.x,
            y: this.y,
            bodyDamage: this.bodyDamage,
            bulletDamage: this.bulletDamage,
            bulletPerFire: this.bulletPerFire,
            fireWeapon: this.fireWeapon,
            fireWeaponDelay: this.fireWeaponDelay,
            maxHealth: this.maxHealth,
            patrol: this.patrol,
            pathStartX: this.pathStartX,
            pathEndX: this.pathEndX,
            pathStartY: this.pathStartY,
            pathEndY: this.pathEndY,
            startOnRight: this.startOnRight,
            startUp: this.startUp,
            startFireWeponDelay: this.startFireWeponDelay,
            prepareAttackDelay: this.prepareAttackDelay,
        }
    }
}