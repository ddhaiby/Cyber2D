/** @type {import("../typings/phaser")} */

import { CST } from "./CST";
import { SceneMainMenu_UI } from "./Scenes/SceneMainMenu_UI";
import { ScenePreloadAssets } from "./Scenes/ScenePreloadAssets";

let game = new Phaser.Game({
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: [ScenePreloadAssets],

    render: {
        pixelArt: true
    },

    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 275 },
            debug: false
        }
    }
});