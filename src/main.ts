import 'regenerator-runtime/runtime'
import BBCodeTextPlugin from 'phaser3-rex-plugins/plugins/bbcodetext-plugin.js';
import TextEditPlugin from 'phaser3-rex-plugins/plugins/textedit-plugin.js';import {ScenePreloadAssets} from "./Scenes/ScenePreloadAssets";

document.body.style.margin = String(0);
document.body.style.padding = String(0);
document.body.style.overflow = "hidden";

new Phaser.Game({
    type: Phaser.AUTO,
    width: 1000,//document.body.clientWidth,
    height: 600,//window.innerHeight,
    parent: document.body,
    dom: { createContainer: true },
    scene: [ScenePreloadAssets],
    render: { pixelArt: true },
    physics: {
        default: "arcade",
        arcade: {
            gravity: {y: 275},
            debug: false
        }
    },
    plugins: {
        global: [{
            key: "rexBBCodeTextPlugin",
            plugin: BBCodeTextPlugin,
            start: true
        },
        {
            key: "rexTextEditPlugin",
            plugin: TextEditPlugin,
            start: true
        }]
    }
});