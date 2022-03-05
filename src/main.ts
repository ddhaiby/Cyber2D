///** @type {import("../typings/phaser")} */

import {ScenePreloadAssets} from "./Scenes/ScenePreloadAssets";


document.body.style.margin = String(0);
document.body.style.padding = String(0);
document.body.style.overflow = "hidden";

let game = new Phaser.Game({
    type: Phaser.AUTO,
    width: document.body.clientWidth,
    height: window.innerHeight,
    parent: document.body,

    scene: [ScenePreloadAssets],

    render: {
        pixelArt: true
    },

    physics: {
        default: "arcade",
        arcade: {
            gravity: {y: 275},
            debug: false
        }
    }
});