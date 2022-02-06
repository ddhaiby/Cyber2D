export class CYBR_Graphics extends Phaser.GameObjects.Graphics
{
    public width: number;
    public height: number;

    constructor(scene: Phaser.Scene, options?: Phaser.Types.GameObjects.Graphics.Options)
    {
        super(scene, options);
        scene.add.existing(this);

        this.displayOriginX = 0;
        this.displayOriginY = 0;
    }
}