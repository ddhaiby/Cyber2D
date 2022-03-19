export interface IPlayerKeys {
    up: Phaser.Input.Keyboard.Key;
    down: Phaser.Input.Keyboard.Key;
    left: Phaser.Input.Keyboard.Key;
    right: Phaser.Input.Keyboard.Key;
    fire: Phaser.Input.Keyboard.Key;
    jump: Phaser.Input.Keyboard.Key;
}

export interface ISetPlayerKeys extends Partial<IPlayerKeys> {
    scene: Phaser.Scene;
}

export class PlayerManager {
    private keys: IPlayerKeys;
    static instance: PlayerManager;

    constructor() {
        PlayerManager.instance = this;
    }

    public get keyBinding(): IPlayerKeys {
        return this.keys;
    }

    static get Instance(): PlayerManager {
        if (this.instance == null) {
            this.instance = new PlayerManager();
        }
        return this.instance
    }

    set initKeys(scene: Phaser.Scene) {
        this.keys = scene.input.keyboard.addKeys({
            up: "Z",
            down: "S",
            left: "Q",
            right: "D",
            jump: "SPACE",
            fire: "K"
        }) as IPlayerKeys;
    }

    set newKeys(playerKeys: ISetPlayerKeys) {
        playerKeys.scene.input.keyboard.removeAllKeys(true);
        this.keys = playerKeys.scene.input.keyboard.addKeys({
            up: playerKeys.up == undefined ? this.keyBinding.up : playerKeys.up,
            down: playerKeys.down == undefined ? this.keyBinding.down : playerKeys.down,
            left: playerKeys.left == undefined ? this.keyBinding.left : playerKeys.left,
            right: playerKeys.right == undefined ? this.keyBinding.right : playerKeys.right,
            jump: playerKeys.jump == undefined ? this.keyBinding.jump : playerKeys.jump,
            fire: playerKeys.fire == undefined ? this.keyBinding.fire : playerKeys.jump
        }) as IPlayerKeys;
    }

    reloadKeys(scene: Phaser.Scene) {
        this.keys = scene.input.keyboard.addKeys({
            up: this.keyBinding.up,
            down: this.keyBinding.down,
            left: this.keyBinding.left,
            right: this.keyBinding.right,
            jump: this.keyBinding.jump,
            fire: this.keyBinding.fire
        }) as IPlayerKeys
    }
}
