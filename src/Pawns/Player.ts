import {Pawn} from "./Pawn";

interface IPlayerKeys{
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

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string | Phaser.Textures.Texture, keys)
    {
       super(scene, x, y, texture);
       this.initKeys(keys);
    }

    destroy()
    {
        for (let k in this.keys)
            this.keys[k].removeAllListeners();
        super.destroy();
    }

    initKeys(keys)
    {
        this.keys = keys;
        keys.jump.on('down', function(event){ this.jump(); }, this);
    }

    update()
    {
        super.update();

        if (this.keys.up.isDown)
            this.lookUp();
        else if (this.keys.down.isDown)
            this.lookDown();
        else
            this.lookStraight();

        if (this.keys.left.isDown)
            this.move(-200);
        else if (this.keys.right.isDown)
            this.move(200);
        else
            this.stopMoving();

        if (this.keys.fire.isDown)
            this.fire();
        else
            this.stopFiring();
    }
}