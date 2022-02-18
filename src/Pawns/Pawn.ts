import { CYBR_Weapon } from "Weapons/CYBR_Weapon";

export class Pawn extends Phaser.Physics.Arcade.Sprite
{
    // Weapons
    public currentWeapon: CYBR_Weapon;

    // States
    protected isLookingUp: boolean;
    protected isLookingDown: boolean;
    protected isMoving: boolean;
    protected isJumping: boolean;
    protected isFiring: boolean;

    // Attributes
    public attributes: Phaser.Structs.Map<string, number>;

    // Physic
    private _overlapped: boolean;
    public overlapped: boolean;

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string | Phaser.Textures.Texture, frame?: string | number)
    {
        super(scene, x, y, texture, frame);
        this.init(scene);
    }

    // Init
    ////////////////////////////////////////////////////////////////////////

    public init(scene: Phaser.Scene, textureKey?: string)
    {
        if (textureKey)
            this.setTexture(textureKey);

        scene.add.existing(this);
        scene.physics.add.existing(this);
        
        this.setCollideWorldBounds(false);
        this.overlapped = false;
        this._overlapped = false;

        this.initStates();
        this.initAnimations();
        this.initAttributes();
    }

    private initStates()
    {
        this.isLookingUp = false;
        this.isLookingDown = false;
    }

    // TODO: Use an object with all the data of sprite. So I can be free of the animation and do nothing if the object is empty
    private initAnimations()
    {
        // Don't do anything if there is no texture
        if (this.texture.key == "__DEFAULT" || this.texture.key == "")
            return;

        this.anims.create({
            key: 'up',
            frames: this.anims.generateFrameNumbers(this.texture.key, { start: 0, end: 2 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers(this.texture.key, { start: 3, end: 5 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'down',
            frames: this.anims.generateFrameNumbers(this.texture.key, { start: 6, end: 8 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers(this.texture.key, { start: 9, end: 11 }),
            frameRate: 10,
            repeat: -1
        });
        
        this.anims.play('right', true);
    }

    private initAttributes()
    {
        this.attributes = new Phaser.Structs.Map([]);
        this.attributes.set("maxHealth", 100).set("health", 100);
    }

    // Overlap
    ////////////////////////////////////////////////////////////////////////

    public onOverlapBegin(obj)
    {
        this.overlapped = true;
        this._overlapped = true;
    }

    public onOverlapContinue(obj)
    {
        this._overlapped = true;
    }

    public onOverlapEnd()
    {
        this.overlapped = false;
    }

    // Update
    ////////////////////////////////////////////////////////////////////////

    public update(...args: any[])
    {
        super.update(args);

        if (this.overlapped)
        {
            if (this._overlapped)
                this._overlapped = false
            else
                this.onOverlapEnd();
        }

        let body = this.body as Phaser.Physics.Arcade.Body;
        if (body.onFloor())
            this.isJumping = false;
    }

    public move(speed: number)
    {
        const anim = (speed < 0) ? 'left' : 'right';
        this.anims.play(anim, true);
        this.setVelocityX(speed);
        this.isMoving = true;
    }

    public stopMoving()
    {
        this.setVelocityX(0);
        this.anims.pause();
        this.isMoving = false;
    }

    public lookUp()
    {
        this.isLookingUp = true;
        this.isLookingDown = false;
    }

    public lookDown()
    {
        this.isLookingUp = false;
        this.isLookingDown = true;
    }
    
    public lookStraight()
    {
        this.isLookingUp = false;
        this.isLookingDown = false;
    }

    public jump()
    {
        let body = this.body as Phaser.Physics.Arcade.Body;

        if (!this.dead() && body.onFloor())
        {
            this.setVelocityY(-330);
            this.isJumping = true;
            //this.anims.play('up', true);
        }
    }

    public hurt(health: number)
    {
        this.setHealth(this.getHealth() - health);
    }

    public heal(health: number)
    {
        this.setHealth(this.getHealth() + health);
    }

    public setHealth(health: number)
    {
        this.attributes.set("health", Math.max(0, Math.min(health, this.attributes.get("maxHealth"))));
        this.emit("healthChanged", this.attributes.get("health"), this.attributes.get("maxHealth"));

        if (this.dead())
        {
            this.die();
            this.stopFiring();
        }
    }

    public getHealth()
    {
        return this.attributes.get("health");
    }

    public getMaxHealth()
    {
        return this.attributes.get("maxHealth");
    }

    // Called when the health reaches 0 or to kill instantly 
    public die()
    {
        this.attributes.set("health", 0);
        this.stopMoving();
        this.emit("die");
    }

    public dead()
    {
        return this.getHealth() <= 0;
    }

    public equipWeapon(weapon: CYBR_Weapon)
    {
        this.currentWeapon = weapon;
        this.currentWeapon.trackSprite(this, 0, 0, false);
    }

    public fire(fireAngle?: number)
    {
        if (this.currentWeapon)
        {
            if (!fireAngle)
            {
                if (this.isLookingUp)
                {
                    if (this.body.velocity.x > 0)
                        fireAngle = -40;
                    else if (this.body.velocity.x < 0)
                        fireAngle = -140;
                    else
                        fireAngle = -90;
                }
                else if (this.isLookingDown)
                {
                    if (this.body.velocity.x > 0)
                        fireAngle = 40;
                    else if (this.body.velocity.x < 0)
                        fireAngle = 140;
                    else
                        fireAngle = 90;
                }
                else
                    fireAngle = this.anims.currentAnim.key == "right" ? 0 : 180;
            }
            this.currentWeapon.fireAngle = fireAngle;
            this.currentWeapon.fire();
            this.isFiring = true;
        }
    }

    public stopFiring()
    {
        this.isFiring = false;
        if (this.currentWeapon)
            this.currentWeapon.stopFiring();
    }
}