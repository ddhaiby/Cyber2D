import {CST} from "../../CST";
import {Pawn} from "../Pawn";
import {AIData} from "./AISpawn";

export class BasicAI extends Pawn
{
    // Patrol
    /** Whether the AI can moves */
    public patrol: boolean = false;

    /** The start position for the patrol. Must be lower than pathEndX */
    protected pathStartX: number = 0;

    /** The end position for the patrol. Must be greater than pathStartX */
    protected pathEndX: number = 0;

    /** AI name used as prefix for the animations */
    protected aiName: string = null;

    /** Whether this AI should have a melee attack */
    protected hasMeleeAttackAnim: boolean = false;

    public target: Pawn = null;

    constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string | Phaser.Textures.Texture, frame?: string | number)
    {
        super(scene, x, y, texture, frame);

        this.deathSound = "Robot_Death";
    }

    // Init
    ////////////////////////////////////////////////////////////////////////

    public init(aiData: AIData) : this
    {
        super.init(aiData, "patrol");

        if (aiData)
        {
            this.patrol = aiData.patrol;
            this.pathStartX = aiData.pathStartX;
            this.pathEndX = aiData.pathEndX;
            this.prepareAttackDelay = aiData.prepareAttackDelay;
        }
        return this;
    }

    protected initAnimations(textureKey: string) : void
    {
        super.initAnimations(textureKey);

        if (!this.aiName)
        {
            return;   
        }

        this.anims.create({
            key: "idle",
            frames: this.anims.generateFrameNames(this.texture.key, { prefix: this.aiName + "Idle_", suffix: ".png", start: 1, end: 1, zeroPad: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: "walk",
            frames: this.anims.generateFrameNames(this.texture.key, { prefix: this.aiName +  "Walk_", suffix: ".png", start: 1, end: 5, zeroPad: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: "death",
            frames: this.anims.generateFrameNames(this.texture.key, { prefix: this.aiName + "Death_", suffix: ".png", start: 1, end: 5, zeroPad: 3 }),
            frameRate: 5,
            repeat: 0
        });

        if (this.hasMeleeAttackAnim)
        {
            this.anims.create({
                key: "attack",
                frames: this.anims.generateFrameNames(this.texture.key, { prefix: this.aiName +  "Attack_", suffix: ".png", start: 1, end: 6, zeroPad: 3 }),
                frameRate: 15,
                repeat: 0
            });

            this.anims.create({
                key: "prepareAttack",
                frames: this.anims.generateFrameNames(this.texture.key, { prefix: this.aiName +  "Idle_", suffix: ".png", start: 1, end: 1, zeroPad: 3 }),
                frameRate: 8,
                repeat: 0
            });
        }

        this.on("animationcomplete_attack", () => { this.stopAttacking(); }, true);
        this.on("animationcomplete_death", function (anim: Phaser.Animations.Animation, frame: Phaser.Animations.AnimationFrame) {
            this.scene.time.delayedCall(500, () => { this.disableBody(true, true); }, null, this);
        }, this);

        this.anims.play("idle", true);
        this.body.setSize(this.anims.currentAnim.frames[0].frame.realWidth, this.anims.currentAnim.frames[0].frame.realHeight);
        this.body.setOffset(0,0);
    }

    protected initAttributes() : void
    {
        super.initAttributes();
        this.attributes.set(CST.PAWN.ATTRIBUTES.WALK_SPEED, 100);
    }

    // Update
    ////////////////////////////////////////////////////////////////////////

    public update(...args: any[]) : void
    {
        super.update(args);

        if (!this.dead() && !this.isTakingDmg)
        {
            this.updateControl();
        }
    }

    public postUpdate(): void
    {
    }

    protected updateControl() : void
    {
    }

    protected updateAnimations() : void
    {
        if (this.dead())
        {
            if (this.anims.currentAnim.key != "death")
            {
                this.anims.play("death");
            }
        }
        else if (this.isPreparingAttack)
        {
            this.anims.play("prepareAttack", true);
        }
        else if (this.isMeleeAttacking)
        {
            this.anims.play("attack", true);
        }
        else
        {
            this.anims.play((this.isWalking || this.isTakingDmg) ? "walk" : "idle", true);
            this.setFlipX(this.isLookingLeft);
        }
    }

    // Patrols
    ////////////////////////////////////////////////////////////////////////

    public doPatrol()
    {
        if (this.patrol)
        {
            if (this.x <= this.pathStartX)
            {
                this.lookOnRight();
            }
            else if (this.x >= this.pathEndX)
            {
                this.lookOnLeft();
            }

            this.walk();
        }
    }

    public setPath(pathStartX: number, pathEndX: number) : void
    {
        if (pathStartX == undefined || pathEndX == undefined)
        {
            console.error("pathStartX or pathEndX is undefined!");
        }
        else if (pathStartX < pathEndX)
        {
            this.pathStartX = pathStartX;
            this.pathEndX = pathEndX;
        }
        else
        {
            console.error("pathStartX can't be higher than pathEndX!");
        }
    }
}