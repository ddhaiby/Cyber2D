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
    private _keyMap: KeyMap;

    public static _instance: PlayerManager;

    constructor()
    {
        PlayerManager._instance = this;
        this.initKeyMap();
    }

    public static get instance(): PlayerManager
    {
        if (this._instance == null)
        {
            this._instance = new PlayerManager();
        }
        return this._instance;
    }

    public get keyMap(): KeyMap
    {
        return this._keyMap;
    }

    public set keyMap(keyMap: KeyMap)
    {
        this._keyMap = keyMap;
    }

    public initKeyMap(): void
    {
        this._keyMap = {
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
            up: this._keyMap.up,
            down: this._keyMap.down,
            left: this._keyMap.left,
            right: this._keyMap.right,
            jump: this._keyMap.jump,
            fire: this._keyMap.fire,
            punch: this._keyMap.punch
        }, true) as IPlayerKeys
    }
}
