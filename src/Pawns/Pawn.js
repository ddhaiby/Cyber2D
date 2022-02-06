import {Attribute} from "./Attribute.js";

export class Pawn extends Phaser.Physics.Arcade.Sprite
{
    constructor(scene, x, y, texture)
    {
        super(scene, x, y, texture);

        this.init(scene);
    }

    // Init
    ////////////////////////////////////////////////////////////////////////

    init(scene)
    {
        scene.add.existing(this);
        scene.physics.add.existing(this);
        
        this.setCollideWorldBounds(false);
        this.overlapped = false;
        this._overlapped = false;

        this.initStates();
        this.initAnimations();
        this.initAttributes();
    }

    initStates()
    {
        this.isLookingUp = false;
        this.isLookingDown = false;
    }

    initAnimations()
    {
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

    initAttributes()
    {
        this.attributes = new Phaser.Structs.Map([["maxHealth", new Attribute("maxHealth", 100)],
                                                  ["health",    new Attribute("health", 100)]]);
    }

    // Overlap
    ////////////////////////////////////////////////////////////////////////

    onOverlapBegin(obj)
    {
        this.overlapped = true;
        this._overlapped = true;
    }

    onOverlapContinue(obj)
    {
        this._overlapped = true;
    }

    onOverlapEnd()
    {
        this.overlapped = false;
    }

    // Update
    ////////////////////////////////////////////////////////////////////////

    update()
    {
        if (this.overlapped)
        {
            if (this._overlapped)
                this._overlapped = false
            else
                this.onOverlapEnd();
        }
    }

    move(speed)
    {
        if (!this.dead())
        {
            const anim = (speed < 0) ? 'left' : 'right';
            this.anims.play(anim, true);
            this.setVelocityX(speed);
            this.isMoving = true;
        }
    }

    stopMoving()
    {
        this.setVelocityX(0);
        this.anims.pause();
        this.isMoving = false;
    }

    lookUp()
    {
        if (!this.dead())
        {
            this.isLookingUp = true;
            this.isLookingDown = false;
        }
    }

    lookDown()
    {
        if (!this.dead())
        {
            this.isLookingUp = false;
            this.isLookingDown = true;
        }
    }
    
    lookStraight()
    {
        if (!this.dead())
        {
            this.isLookingUp = false;
            this.isLookingDown = false;
        }
    }

    jump()
    {
        if (!this.dead() && this.body.onFloor())
        {
            this.setVelocityY(-330);
            this.isJumping = true;
            //this.anims.play('up', true);
        }
    }

    hurt(health)
    {
        this.setHealth(this.attributes.get("health").getCurrentValue() - health);
    }

    heal(health)
    {
        this.setHealth(this.attributes.get("health").getCurrentValue() + health);
    }

    setHealth(health)
    {
        this.attributes.get("health").setBaseValue(Math.max(0, Math.min(health, this.attributes.get("maxHealth").getCurrentValue())));
        this.emit("healthChanged", this.attributes.get("health"));

        if (this.dead())
        {
            this.die();
            this.stopFiring();
        }
    }

    getHealth()
    {
        return this.attributes.get("health").getCurrentValue();
    }

    getMaxHealth()
    {
        return this.attributes.get("maxHealth").getCurrentValue();
    }

    // Called when the health reaches 0 or to kill instantly 
    die()
    {
        this.attributes.get("health").setBaseValue(0);
        this.stopMoving();
        this.emit("die");
    }

    dead()
    {
        return this.attributes.get("health").getCurrentValue() <= 0;
    }

    equipWeapon(weapon)
    {
        this.currentWeapon = weapon;
        this.currentWeapon.trackSprite(this, 0, 0, false);
    }

    unequipWeapon(destroyWeapon)
    {
        if (this.currentWeapon)
        {
            if (destroyWeapon)
                this.currentWeapon.destroy();
            this.currentWeapon = null;
        }
    }

    fire(fireAngle)
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

    stopFiring()
    {
        this.isFiring = false;
    }
}