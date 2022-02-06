import {Pawn} from "./Pawn.js";

export class Player extends Pawn
{
    constructor(scene, x, y, texture, keys)
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