import { BasicAI } from "./BasicAI";
import { AIData } from "./AISpawn";
import { IronStick } from "../../Weapons/MeleeWeapons/IronStick";

export class MeleeAI extends BasicAI
{
    constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string | Phaser.Textures.Texture, frame?: string | number)
    {
        super(scene, x, y, texture, frame);

        this.aiName = "melee";
        this.hasMeleeAttackAnim = true;

        this._meleeWeapon = new IronStick(scene, this);
        this._meleeWeapon.disableBody(true, true);
        (this._meleeWeapon.body as Phaser.Physics.Arcade.Body).allowGravity = false;
        this._meleeWeapon.on("hit", () => { this._meleeWeapon.disableBody(true, true); }, this);
    }

    // Init
    ////////////////////////////////////////////////////////////////////////

    public init(aiData: AIData) : this
    {
        super.init(aiData);
        this._meleeWeapon.damage = aiData.bodyDamage;

        return this;
    }

    // Update
    ////////////////////////////////////////////////////////////////////////

    /** This AI will patrol unless near the target. In that case, it attack after a short moment */
    protected updateControl() : void
    {
        if (this.isTargetInRange())
        {
            this.attack();
        }

        if (!this.isMeleeAttacking && !this.isPreparingAttack)
        {
            this.doPatrol();
        }
    }

    public postUpdate(): void
    {
        this.postUpdateMeleeWeapon();
    }

    protected postUpdateMeleeWeapon(): void
    {
        const weaponX = this.isLookingRight ? this.x + (this.width / 2 + this._meleeWeapon.width) / 2 : this.x - (this.width / 2 + this._meleeWeapon.width) / 2;
        const weaponY = this.y;
        this._meleeWeapon.setPosition(weaponX, weaponY);
    }

    // Weapon
    ////////////////////////////////////////////////////////////////////////

    protected isTargetInRange(): boolean
    {
        if (this.target)
        {
            const targetDistY = this.target.y - this.y; 

            if (Math.abs(targetDistY) < 30)
            {
                const targetDistX = this.target.x - this.x;

                if (this.isLookingLeft && (this.target.x < this.x))
                {
                    return targetDistX > -40;
                }
                else if (this.isLookingRight && (this.target.x > this.x))
                {
                    return targetDistX < 40;
                }
            }
        }

        return false;        
    }
}