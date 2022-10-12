import { AudioManager } from "./AudioManager";

export class CYBR_AudioManager extends AudioManager
{
    /** Max number of spikes that play a sound at the same time*/
    public spikeCount: number = 0;

    /** Max number of weapon fires that play a sound at the same time*/
    public weaponFireCount: number = 0;

    constructor()
    {
        super();
    }

    public init(audiosprite: any): void
    {
        super.init(audiosprite);
        this.spikeCount = 0;
        this.weaponFireCount = 0;
    }

    public update(): void
    {
        super.update();

        this.spikeCount = 0;
        this.weaponFireCount = 0;
    }

    public static get instance(): CYBR_AudioManager
    {
        if (this._instance == null)
        {
            this._instance = new CYBR_AudioManager();
        }
        return this._instance as CYBR_AudioManager;
    }
}