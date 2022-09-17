import {CST} from "../../CST";
import {Pawn} from "../Pawn";
import {AIData} from "./AISpawn";

export class BasicAI extends Pawn
{
    // Patrol
    /** Whether the AI can move */
    protected patrol: boolean = false;

    /** The X start position for the patrol. Must be lower than pathEndX */
    protected pathStartX: number = null;

    /** The X end position for the patrol. Must be greater than pathStartX */
    protected pathEndX: number = null;

    /** The Y start position for the patrol. Must be lower than pathEndY */
    protected pathStartY: number = null;

    /** The Y end position for the patrol. Must be greater than pathStartY */
    protected pathEndY: number = null;

    /** Name used for the animations */
    protected pawnName: string = null;

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
        super.init(aiData);

        if (aiData)
        {
            this.patrol = aiData.patrol;
            this.prepareAttackDelay = aiData.prepareAttackDelay;
            this.setPathX(aiData.pathStartX, aiData.pathEndX);
            this.setPathY(aiData.pathStartY, aiData.pathEndY);
        }
        return this;
    }

    protected initAnimations() : void
    {
        if (!this.pawnName)
        {
            return;   
        }

        const animationsJSON = this.scene.cache.json.get("animationsPawn");
        const animationData = animationsJSON ? animationsJSON[this.pawnName] : null;

        if (!animationData)
        {
            return;
        }

        super.initAnimations(animationData.texture);

        for (let animKey in animationData.anims)
        {
            const animObj = animationData.anims[animKey];

            this.anims.create({
                key: animKey,
                frames: this.anims.generateFrameNames(this.texture.key, { prefix: animationData.prefix + animObj.name + "_", suffix: ".png", start: animObj.start, end: animObj.end, zeroPad: 3 }),
                frameRate: animObj.frameRate,
                repeat: animObj.repeat
            });
        }

        this.on("animationcomplete_Attack", () => { this.stopAttacking(); }, true);
        this.on("animationcomplete_Death", this.onDeathAnimationComplete, this);
        this.on("animationcomplete_Fire", this.onFireAnimationComplete, this);

        this.anims.play("Idle", true);
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

        if (!this.isDead() && !this.isTakingDmg)
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
        if (this.isDead())
        {
           return;
        }
        
        if (this.isPreparingAttack)
        {
            this.anims.play("PrepareAttack", true);
        }
        else if (this.isMeleeAttacking)
        {
            this.anims.play("Attack", true);
        }
        else if (!this.isFiring)
        {
            this.anims.play((this.body.velocity.x != 0 || this.isTakingDmg) ? "Walk" : "Idle", true);
            this.setFlipX(this.isLookingLeft);
        }
    }

    protected onDeath(): void
    {
        this.anims.play("Death", true);
    }

    // Patrols
    ////////////////////////////////////////////////////////////////////////

    public doPatrol()
    {
        if (this.patrol && !this.isFiring)
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

    public doFlyPatrol()
    {
        if (this.patrol)
        {
            if (this.pathStartX != null)
            {
                if (this.x <= this.pathStartX)
                {
                    this.lookOnRight();
                }
                else if (this.x >= this.pathEndX)
                {
                    this.lookOnLeft();
                }
            }
            else
            {
                this.isLookingRight = false;
                this.isLookingLeft = false;
            }
            
            if (this.pathStartY != null)
            {
                if (this.y <= this.pathStartY)
                {
                    this.lookDown();
                }
                else if (this.y >= this.pathEndY)
                {
                    this.lookUp();
                }
            }
            else
            {
                this.isLookingDown = false;
                this.isLookingUp = false;
            }

            this.fly();
        }
    }

    public setPathX(pathStartX: number, pathEndX: number) : void
    {
        if (pathStartX == undefined || pathEndX == undefined)
        {
            return;
        }
        else if (pathStartX < pathEndX)
        {
            this.pathStartX = pathStartX;
            this.pathEndX = pathEndX;
        }
        else
        {
            console.error("pathStartX can't be higher than pathEndX!");
            this.pathStartX = pathEndX;
            this.pathEndX = pathStartX;
        }
    }

    public setPathY(pathStartY: number, pathEndY: number) : void
    {
        if (pathStartY == undefined || pathEndY == undefined)
        {
            return;
        }
        else if (pathStartY < pathEndY)
        {
            this.pathStartY = pathStartY;
            this.pathEndY = pathEndY;
        }
        else
        {
            console.error("pathStartY can't be higher than pathEndY!");
            this.pathStartY = pathEndY;
            this.pathEndY = pathStartY;
        }
    }
}