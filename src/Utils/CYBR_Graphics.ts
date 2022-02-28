export class CYBR_Graphics extends Phaser.GameObjects.Graphics
{
    public width: number;
    public height: number;

    constructor(scene: Phaser.Scene, options?: Phaser.Types.GameObjects.Graphics.Options & {width?: number, height?: number})
    {        
        super(scene, options);
        this.displayOriginX = 0;
        this.displayOriginY = 0;
        this.width = (options && options.width) ? options.width : 0;
        this.height = (options && options.height) ? options.height : 0;

        scene.add.existing(this);
    }
}