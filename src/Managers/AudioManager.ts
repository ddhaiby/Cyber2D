import { Howl } from "howler";

export class AudioManager
{
    protected howl: Howl = null;
    protected loopIDs: number[]; 
    protected loopKeys: string[];

    protected baseVolume: number = 1;

    protected static _instance: AudioManager;

    constructor()
    {
        AudioManager._instance = this;
    }

    public static get instance(): AudioManager
    {
        if (this._instance == null)
        {
            this._instance = new AudioManager();
        }
        return this._instance;
    }

    public init(audiosprite: any)
    {
        AudioManager.instance.howl = new Howl(audiosprite);
    }

    public mute(): void
    {
        if (!!AudioManager.instance.howl)
        {
            AudioManager.instance.howl.mute(true);
        }
    }

    public unmute(): void
    {
        if (!!AudioManager.instance.howl)
        {
            AudioManager.instance.howl.mute(false);
        }
    }

    public playSound(key: string, loop: boolean = false, volume: number = 1): number
    {
        if (loop && AudioManager.instance.loopKeys.includes(key)) // This sound is already playing in loop
        {
            return AudioManager.instance.loopIDs[AudioManager.instance.loopKeys.indexOf(key)];
        }

        const id = AudioManager.instance.howl.play(key);
        AudioManager.instance.howl.volume(AudioManager.instance.baseVolume * volume, id);
        AudioManager.instance.howl.loop(loop, id);

        if (loop)
        {
            AudioManager.instance.loopKeys.push(key);
            AudioManager.instance.loopIDs.push(id);
        }
        return id;
    }

    public setSoundPosition(id: number, x: number, y?: number, z?: number)
    {
        AudioManager.instance.howl.pos(x, y, z, id);
    }

    public update(): void
    {

    }

    public getSoundPosX(distX: number): number
    {
        if (distX < 500)
        {
            return 0;
        }
        else if (distX < 900)
        {
            return 10;
        }
        return 9999999;
    }
}