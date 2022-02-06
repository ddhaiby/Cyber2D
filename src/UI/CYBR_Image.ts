export class CYBR_Image extends Phaser.GameObjects.Image
{
    constructor(scene: Phaser.Scene, x: number, y: number, texture: string | Phaser.Textures.Texture, frame?: string | number)
    {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);

        this.displayOriginX = 0;
        this.displayOriginY = 0;
    }
}