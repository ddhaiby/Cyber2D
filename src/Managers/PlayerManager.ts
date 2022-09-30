export interface IPlayerKeys
{
    up: Phaser.Input.Keyboard.Key;
    down: Phaser.Input.Keyboard.Key;
    left: Phaser.Input.Keyboard.Key;
    right: Phaser.Input.Keyboard.Key;
    fire: Phaser.Input.Keyboard.Key;
    jump: Phaser.Input.Keyboard.Key;
    punch: Phaser.Input.Keyboard.Key;
}

declare type KeyMap =
{
    up: string;
    down: string;
    left: string;
    right: string;
    fire: string;
    jump: string;
    punch: string;
}

export interface ISetPlayerKeys extends Partial<IPlayerKeys>
{
    scene: Phaser.Scene;
}

export class PlayerManager
{
    // private _keys: IPlayerKeys;
    private keyMap: KeyMap;

    public static instance: PlayerManager;

    constructor()
    {
        PlayerManager.instance = this;
        this.initKeyMap();
    }

    public static get Instance(): PlayerManager
    {
        if (this.instance == null)
        {
            this.instance = new PlayerManager();
        }
        return this.instance;
    }

    public initKeyMap(): void
    {
        this.keyMap = {
            up: "W",
            down: "S",
            left: "A",
            right: "D",
            jump: "SPACE",
            fire: "K",
            punch: "J"
        };
    }

    // public set newKeys(playerKeys: ISetPlayerKeys)
    // {
    //     this._keys = playerKeys.scene.input.keyboard.addKeys({
    //         up: playerKeys.up == undefined ? this.keys.up : playerKeys.up,
    //         down: playerKeys.down == undefined ? this.keys.down : playerKeys.down,
    //         left: playerKeys.left == undefined ? this.keys.left : playerKeys.left,
    //         right: playerKeys.right == undefined ? this.keys.right : playerKeys.right,
    //         jump: playerKeys.jump == undefined ? this.keys.jump : playerKeys.jump,
    //         fire: playerKeys.fire == undefined ? this.keys.fire : playerKeys.fire,
    //         punch: playerKeys.punch == undefined ? this.keys.punch : playerKeys.punch
    //     },false) as IPlayerKeys;
    // }

    loadKeys(scene: Phaser.Scene): IPlayerKeys
    {
        return scene.input.keyboard.addKeys({
            up: this.keyMap.up,
            down: this.keyMap.down,
            left: this.keyMap.left,
            right: this.keyMap.right,
            jump: this.keyMap.jump,
            fire: this.keyMap.fire,
            punch: this.keyMap.punch
        }, true) as IPlayerKeys
    }
}
