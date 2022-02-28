import {Pawn} from "./Pawn";

declare type IPlayerKeys = {
    up: Phaser.Input.Keyboard.Key;
    down: Phaser.Input.Keyboard.Key;
    left: Phaser.Input.Keyboard.Key;
    right: Phaser.Input.Keyboard.Key;
    fire: Phaser.Input.Keyboard.Key;
    jump: Phaser.Input.Keyboard.Key;
}

export class Player extends Pawn
{
    private keys: IPlayerKeys;

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string | Phaser.Textures.Texture)
    {
        super(scene, x, y, texture);
    }

    public init(scene: Phaser.Scene, textureKey?: string) : void
    {
        super.init(scene, textureKey);
        this.initKeys(scene);
    }

    private initKeys(scene: Phaser.Scene) : void
    {
        this.keys = scene.input.keyboard.addKeys({
            up: "Z",
            down: "S",
            left: "Q",
            right: "D",
            jump: "SPACE",
            fire: "K"
        }) as IPlayerKeys;
    
        this.keys.jump.on('down', function(event){ this.jump(); }, this);
    }

    public update(...args: any[]) : void
    {
        super.update(args);

        if (this.dead())
            return;

        if (this.keys.up.isDown)
            this.lookUp();
        else if (this.keys.down.isDown)
            this.lookDown();
        else
            this.lookStraight();

        if (this.keys.left.isDown)
            this.walk(-this.getWalkSpeed());
        else if (this.keys.right.isDown)
            this.walk(this.getWalkSpeed());
        else
            this.stopWalking();

        if (this.keys.fire.isDown)
            this.fire();
        else
            this.stopFiring();
    }
}