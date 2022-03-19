import { CST } from "../CST";
import { CYBR_Weapon } from "../Weapons/CYBR_Weapon";

export class Pawn extends Phaser.Physics.Arcade.Sprite
{
    // Weapons
    public currentWeapon: CYBR_Weapon;

    // States
    public isLookingUp: boolean = false;
    public isLookingDown: boolean = false;
    public isLookingRight: boolean = false;
    public isLookingLeft: boolean = false;
    public isWalking: boolean = false;
    public isJumping: boolean = false;
    public isFiring: boolean = false;
    public isClimbing: boolean = false;
    public wasClimbing: boolean = false;

    // Attributes
    public attributes: Phaser.Structs.Map<string, number>;

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string | Phaser.Textures.Texture, frame?: string | number)
    {
        super(scene, x, y, texture, frame);
        this.init(scene);
    }

    // Init
    ////////////////////////////////////////////////////////////////////////

    public init(scene: Phaser.Scene, textureKey?: string) : void
    {
        if (textureKey)
            this.setTexture(textureKey);

        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setGravity(this.scene.physics.world.gravity.x, this.scene.physics.world.gravity.y);

        this.setCollideWorldBounds(false);

        this.initStates();
        this.initAnimations();
        this.initAttributes();
    }

    private initStates() : void
    {
        this.isLookingUp = false;
        this.isLookingDown = false;
    }

    // TODO: This should be later defined in the derived classes
    private initAnimations() : void
    {
        // Don't do anything if there is no texture
        if (this.texture.key == "__DEFAULT" || this.texture.key == "")
            return;

        this.anims.create({
            key: "up",
            frames: this.anims.generateFrameNumbers(this.texture.key, { start: 0, end: 2 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: "left",
            frames: this.anims.generateFrameNumbers(this.texture.key, { start: 3, end: 5 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: "down",
            frames: this.anims.generateFrameNumbers(this.texture.key, { start: 6, end: 8 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: "right",
            frames: this.anims.generateFrameNumbers(this.texture.key, { start: 9, end: 11 }),
            frameRate: 10,
            repeat: -1
        });
        
        this.anims.play("right", true);
    }

    private initAttributes() : void
    {
        this.attributes = new Phaser.Structs.Map([]);
        this.attributes.set(CST.PLAYER.ATTRIBUTES.MAX_HEALTH, 100);
        this.attributes.set(CST.PLAYER.ATTRIBUTES.HEALTH, 100);
        this.attributes.set(CST.PLAYER.ATTRIBUTES.WALK_SPEED, 200);
        this.attributes.set(CST.PLAYER.ATTRIBUTES.CLIMB_SPEED, 150);

        this.setHealth(this.getMaxHealth());
    }

    public reset(x: number, y: number) : void
    {
        this.enableBody(true, x, y, true, true);
        this.setHealth(this.getMaxHealth());
        this.setVelocity(0,0);
        this.setAlpha(1);
    }

    // Update
    ////////////////////////////////////////////////////////////////////////

    public update(...args: any[]) : void
    {
        super.update(args);

        if (this.isOnFloor())
            this.isJumping = false;

        this.wasClimbing = this.isClimbing;

        this.updateAnimations();
    }

    /** Update the anims of this Pawn */
    protected updateAnimations() : void
    {
    }

    public canWalk() : boolean
    {
        return !this.dead() && (this.isOnFloor() || !this.isClimbing);
    }

    public walk() : void
    {
        if (this.canWalk())
        {
            const speed = this.getWalkSpeed();

            if (!this.isWalking)
                this.startWalking();

            this.setVelocityX(this.isLookingRight ? speed : -speed);
        }
    }

    private startWalking() : void
    {
        this.isWalking = true;
    }

    public stopWalking() : void
    {
        if (this.isWalking)
        {
            this.setVelocityX(0);
            this.isWalking = false;
        }
    }

    public climb(speedX: number, speedY: number) : void
    {
        if (!this.isClimbing)
            this.startClimbing();

        this.setVelocity(speedX, speedY);
    }

    private startClimbing() : void
    {
        this.setGravity(0, - this.scene.physics.world.gravity.y);
        this.isClimbing = true;
    }

    public stopClimbing() : void
    {
        this.isClimbing = false;

        if (this.wasClimbing)
        {
            this.setVelocityY(0);
            this.setGravity(this.scene.physics.world.gravity.x, this.scene.physics.world.gravity.y);
        }
    }

    protected lookUp() : void
    {
        this.isLookingUp = true;
        this.isLookingDown = false;
    }

    protected lookDown() : void
    {
        this.isLookingUp = false;
        this.isLookingDown = true;
    }
    
    protected lookOnRight() : void
    {
        this.isLookingRight = true;
        this.isLookingLeft = false;
    }

    protected lookOnLeft() : void
    {
        this.isLookingRight = false;
        this.isLookingLeft = true;
    }

    protected lookStraight() : void
    {
        this.isLookingUp = false;
        this.isLookingDown = false;
    }

    public isOnFloor() : boolean
    {
        const body = this.body as Phaser.Physics.Arcade.Body;
        return body.onFloor();
    }

    public canJump() : boolean
    {
        return !this.dead() && (this.isOnFloor() || this.isClimbing);
    }

    public jump() : void
    {
        if (this.canJump())
        {
            if (this.isClimbing)
                this.stopClimbing();

            this.setVelocityY(-330);
            this.isJumping = true;
        }
    }

    public hurt(health: number) : void
    {
        this.setHealth(this.getHealth() - health);
    }

    public heal(health: number) : void
    {
        this.setHealth(this.getHealth() + health);
    }

    public setHealth(health: number) : void
    {
        this.attributes.set(CST.PLAYER.ATTRIBUTES.HEALTH, Math.max(0, Math.min(health, this.attributes.get(CST.PLAYER.ATTRIBUTES.MAX_HEALTH))));
        this.emit("healthChanged", this.attributes.get(CST.PLAYER.ATTRIBUTES.HEALTH), this.attributes.get(CST.PLAYER.ATTRIBUTES.MAX_HEALTH));

        if (this.dead())
        {
            this.die();
            this.stopFiring();
        }
    }

    public getAttribute(name: string) : number
    {
        return this.attributes.get(name);
    }

    public getHealth() : number
    {
        return this.getAttribute(CST.PLAYER.ATTRIBUTES.HEALTH);
    }

    public getMaxHealth() : number
    {
        return this.getAttribute(CST.PLAYER.ATTRIBUTES.MAX_HEALTH);
    }

    public getWalkSpeed() : number
    {
        return this.getAttribute(CST.PLAYER.ATTRIBUTES.WALK_SPEED);
    }

    public getClimbSpeed() : number
    {
        return this.getAttribute(CST.PLAYER.ATTRIBUTES.CLIMB_SPEED);
    }

    // Called when the health reaches 0 or to kill instantly 
    public die() : void
    {
        this.attributes.set(CST.PLAYER.ATTRIBUTES.HEALTH, 0);
        this.stopWalking();
        this.emit("die");
    }

    public dead() : boolean
    {
        return this.getHealth() <= 0;
    }

    public equipWeapon(weapon: CYBR_Weapon) : void
    {
        this.currentWeapon = weapon;
        this.currentWeapon.trackSprite(this, 0, 0, false);
    }

    public fire(fireAngle?: number) : void
    {
        if (this.currentWeapon && !this.isClimbing)
        {
            if (!fireAngle)
                fireAngle = this.isLookingRight ? 0 : 180;

            this.currentWeapon.fireAngle = fireAngle;
            this.currentWeapon.fire();
            this.isFiring = true;
        }
    }

    public stopFiring() : void
    {
        this.isFiring = false;
        if (this.currentWeapon)
            this.currentWeapon.stopFiring();
    }
}