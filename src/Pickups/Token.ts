import { CYBR_AudioManager } from "../Managers/CYBR_AudioManager";

export class Token extends Phaser.Physics.Arcade.Image
{
    // Sounds
    public collectedSound: string = "coinGoldCollected";
    public value: number = -9999;

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string | Phaser.Textures.Texture, frame?: string | number)
    {
       super(scene, x, y, texture, frame);
    }

    public collected(): void
    {
        this.disableBody(true, true);
        CYBR_AudioManager.instance.playSound(this.collectedSound);
    }
}