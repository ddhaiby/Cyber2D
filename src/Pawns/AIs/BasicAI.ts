import {Pawn} from "../Pawn";

export class BasicAI extends Pawn
{
    // TODO: Review the quality of code. These test members were used for training
    private test: number;
    private testFire: number;
    private left: boolean;

    constructor(scene, x, y, texture)
    {
       super(scene, x, y, texture);

        this.test = 0;
        this.testFire = 0;
        this.left = false;
    }

    // Overlap
    ////////////////////////////////////////////////////////////////////////

    // Update
    ////////////////////////////////////////////////////////////////////////

    update()
    {
        super.update();

        if (this.dead())
            return;

        this.test = (this.test + 1) % 100;
        this.testFire = (this.testFire + 1) % 50;

        if (this.test == 0) this.left = !this.left;

        if (this.left)
            this.move(-180);
        else
            this.move(180);

        if (this.testFire == 0) this.fire();
    }
}