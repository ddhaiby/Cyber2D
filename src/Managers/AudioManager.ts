import { Howl } from "howler";

export class AudioManager {
    private static howl: Howl = null;
    private static loopIDs: number[]; 
    private static loopKeys: string[];

    public static init(audiosprite: any)
    {
        this.howl = new Howl(audiosprite);
        AudioManager.unmute();
    }

    public static mute(): void
    {
        if (!!AudioManager.howl)
            AudioManager.howl.mute(true);
    }

    public static unmute(): void
    {
        if (!!AudioManager.howl)
            AudioManager.howl.mute(false);
    }

    public static playSound(key: string, loop: boolean = false, volume: number = 1): number
    {
        if (loop && AudioManager.loopKeys.includes(key)) // This sound is already playing in loop
            return AudioManager.loopIDs[AudioManager.loopKeys.indexOf(key)];

        const id = AudioManager.howl.play(key);
        AudioManager.howl.volume(volume, id);
        AudioManager.howl.loop(loop, id);

        if (loop)
        {
            AudioManager.loopKeys.push(key);
            AudioManager.loopIDs.push(id);
        }
        return id;
    }
}