import { AudioManager } from "../Managers/AudioManager";

export class Token extends Phaser.Physics.Arcade.Image
{
     // Sounds
     protected collectedSound: string = "";

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string | Phaser.Textures.Texture, frame?: string | number)
    {
       super(scene, x, y, texture, frame);
    }

    public collected(): void
    {
        this.disableBody(true, true);
        AudioManager.playSound(this.collectedSound);
    }
}