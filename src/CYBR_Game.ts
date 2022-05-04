import { AudioManager } from "./Managers/AudioManager";

export class CYBR_Game extends Phaser.Game
{
    public onBlur(): void
    {
        super.onBlur();
        AudioManager.mute();
    }

    public onFocus(): void
    {
        super.onFocus();
        AudioManager.unmute();
    }
}