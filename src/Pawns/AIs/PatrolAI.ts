import {Pawn} from "../Pawn";
import { GuardWeapon } from "../../Weapons/GuardWeapon";
import { CST } from "../../CST";

export class PatrolAI extends Pawn
{
    // Patrol
    private patrol: boolean = false;
    private pathStartX: number = 0;
    private pathEndX: number = 0;

    // FireWeapon
    private fireWeapon: boolean = false;
    private fireWeaponDelay: number = 1000;
    private fireWeaponTimer: Phaser.Time.TimerEvent;

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string | Phaser.Textures.Texture, frame?: string | number)
    {
        super(scene, x, y, texture, frame);
        this.fireWeaponTimer = scene.time.addEvent({}); // Create an empty timer to avoid null error
        this.on("die", () => { this.fireWeaponTimer.remove(); }, this);
    }

    // Init
    ////////////////////////////////////////////////////////////////////////

    public init(textureKey?: string) : this
    {
        super.init(textureKey);

        if (this.fireWeapon)
        {
            let weapon = new GuardWeapon(this.scene, 30, "bullet");
            this.equipWeapon(weapon);
            this.prepareNextFire();
        }

        return this;
    }

    protected initAnimations(textureKey: string) : void
    {
        super.initAnimations(textureKey);
        this.body.setSize(this.width, this.height - 4);

        this.anims.create({
            key: "idle",
            frames: this.anims.generateFrameNumbers(this.texture.key, { start: 5, end: 5 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: "walk",
            frames: this.anims.generateFrameNumbers(this.texture.key, { start: 0, end: 4 }),
            frameRate: 10,
            repeat: -1
        });
    }

    protected initAttributes() : void
    {
        this.attributes = new Phaser.Structs.Map([]);
        this.attributes.set(CST.PLAYER.ATTRIBUTES.MAX_HEALTH, 100);
        this.attributes.set(CST.PLAYER.ATTRIBUTES.HEALTH, 100);
        this.attributes.set(CST.PLAYER.ATTRIBUTES.WALK_SPEED, 100);
        this.setHealth(this.getMaxHealth());
    }

    // Update
    ////////////////////////////////////////////////////////////////////////

    public update(...args: any[]) : void
    {
        super.update(args);

        if (this.dead())
            return;

        this.updateControl();
    }

    protected updateControl() : void
    {
        if (this.patrol)
        {
            if (this.x <= this.pathStartX)
                this.lookOnRight();
            else if (this.x >= this.pathEndX)
                this.lookOnLeft();

            this.walk();
        }
    }

    protected updateAnimations() : void
    {
        this.anims.play(this.isWalking ? "walk" : "idle", true);
        this.setFlipX(this.isLookingLeft);
    }

    public prepareNextFire() : void
    {
        this.fireWeaponTimer = this.scene.time.addEvent({ delay: this.fireWeaponDelay, callbackScope: this, callback: () => {
            this.fire();
            this.prepareNextFire();
        }});
    }

    public setPath(pathStartX: number, pathEndX: number) : void
    {
        if (pathStartX == undefined || pathEndX == undefined)
            console.error("pathStartX or pathEndX is undefined!");
        else if (pathStartX < pathEndX)
        {
            this.pathStartX = pathStartX;
            this.pathEndX = pathEndX;
        }
        else
            console.error("pathStartX can't be higher than pathEndX!");
    }
}