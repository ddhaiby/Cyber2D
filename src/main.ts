/** @type {import("../typings/phaser")} */

import { SceneMainMenu_UI } from "./Scenes/SceneMainMenu_UI";
import { SceneGame } from "./Scenes/SceneGame";

var game = new Phaser.Game({
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: [SceneMainMenu_UI, SceneGame],

    render: {
        pixelArt: true
    },

    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 500 },
            debug: false
        }
    }
});
