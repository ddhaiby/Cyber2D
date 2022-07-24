import { AudioManager } from "./Managers/AudioManager";
import GameConfig = Phaser.Types.Core.GameConfig;

export class CYBR_Game extends Phaser.Game
{
    private static connected:Boolean;
    constructor(gameConfig:GameConfig,isConnected:Boolean) {
        super(gameConfig);
        CYBR_Game.connected = isConnected;
    }
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
    static get isConnected(){
        return CYBR_Game.connected;
    }
}