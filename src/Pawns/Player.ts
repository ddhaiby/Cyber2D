import {Pawn} from "./Pawn";

export interface IPlayerKeys{
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

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string | Phaser.Textures.Texture, keys?: IPlayerKeys)
    {
       super(scene, x, y, texture);

       if (keys)
        this.initKeys(keys);
    }

    public destroy()
    {
        for (let k in this.keys)
            this.keys[k].removeAllListeners(); // TODO: See if this is still necessary since I restqrt thesecene for eqch level
        super.destroy();
    }

    public init(scene: Phaser.Scene, textureKey?: string, keys?: IPlayerKeys)
    {
        super.init(scene, textureKey);
        if (keys)
            this.initKeys(keys);
    }

    private initKeys(keys: IPlayerKeys)
    {
        this.keys = keys;
        keys.jump.on('down', function(event){ this.jump(); }, this);
    }

    public update(...args: any[])
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