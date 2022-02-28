import { EffectPickup } from "./EffectPickup";
import { Pawn } from "../Pawns/Pawn";

export class WeaponBoostPickup extends EffectPickup
{
    private _time: Phaser.Time.Clock;
    private _timerApplyBoost: Phaser.Time.TimerEvent;
    private _events: Phaser.Events.EventEmitter;
    private _boostDuration: number;

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string | Phaser.Textures.Texture, frame?: string | number)
    {
        super(scene, x, y, texture, frame);

        this.init(scene);
    }

    public init(scene: Phaser.Scene) : void
    {
        this._time = scene.time;
        this._timerApplyBoost = this._time.delayedCall(0, () => {}); // Create an empty timer so I am sure it exists
        this._boostDuration = 3000;
    }

    public applyEffect(pawn: Pawn) : void
    {
        if (pawn.currentWeapon)
        {
            const normalFireLimit = pawn.currentWeapon.fireLimit;
            const normalFireRate = pawn.currentWeapon.fireRate;

            pawn.currentWeapon.fireLimit = 0;
            pawn.currentWeapon.fireRate = normalFireRate / 2;
            
            this._timerApplyBoost = this._time.delayedCall(this._boostDuration, () => {
                pawn.currentWeapon.fireLimit = normalFireLimit;
                pawn.currentWeapon.fireRate = normalFireRate;
                pawn.currentWeapon.setShots(0);
            }, null, this);
        }
    }
}