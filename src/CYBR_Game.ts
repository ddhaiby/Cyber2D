import { CYBR_AudioManager } from "./Managers/CYBR_AudioManager";
import GameConfig = Phaser.Types.Core.GameConfig;

export class CYBR_Game extends Phaser.Game
{
    private static connected: boolean;

    constructor(gameConfig: GameConfig, isConnected: boolean)
    {
        super(gameConfig);
        CYBR_Game.connected = isConnected;
    }

    public onBlur(): void
    {
        super.onBlur();
        CYBR_AudioManager.instance.mute();
    }

    public onFocus(): void
    {
        super.onFocus();
        CYBR_AudioManager.instance.unmute();
    }

    static get isConnected(): boolean
    {
        return CYBR_Game.connected;
    }
}