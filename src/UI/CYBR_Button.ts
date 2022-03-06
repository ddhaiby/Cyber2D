export class CYBR_Button extends Phaser.GameObjects.Image
{
    private textObject: Phaser.GameObjects.Text;

    constructor(scene: Phaser.Scene, x: number, y: number, text: string, texture: string | Phaser.Textures.Texture, frame?: string | number)
    {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);

        this.setInteractive({ pixelPerfect: true });
        this.displayOriginX = 0;
        this.displayOriginY = 0;

        this.textObject = scene.add.text(0,0, text, { fontFamily: "Gemunu Libre", fontSize: "48px", fontStyle: "bold", color: "#171822", align: "center" });
        this.textObject.setFixedSize(this.width, 0);
        this.textObject.setOrigin(0.5);
        this.textObject.setX(this.width / 2);
        this.textObject.setY(this.y + this.height / 2);
    }

    public setX(value?: number) : this
    {
        super.setX(value);
        this.textObject.setX(value + this.width / 2);
        return this;
    }

    public onClicked(fn: Function, context?: any) : this
    {
        this.on("pointerup", fn, context);
        return this;
    }
}