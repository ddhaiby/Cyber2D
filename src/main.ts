import 'regenerator-runtime/runtime'
import Phaser from 'phaser';
import BBCodeTextPlugin from 'phaser3-rex-plugins/plugins/bbcodetext-plugin.js';
import TextEditPlugin from 'phaser3-rex-plugins/plugins/textedit-plugin.js';
import {ScenePreloadAssets} from "./Scenes/ScenePreloadAssets";
import {CYBR_Game} from './CYBR_Game';
import {CST} from './CST';
import {HttpServices} from "./Core/Http.Services";
import {StorageService} from "./Shared/StorageService";

const httpService: HttpServices = new HttpServices();
const localStorage: StorageService = new StorageService();
let tokenState: Boolean;
document.body.style.margin = String(0);
document.body.style.padding = String(0);
document.body.style.overflow = "hidden";

localStorage.getToken().then(async (token) => {
    if (token != undefined) {
        let result = await httpService.validateToken(token);
        if (result.status == 200) {
            tokenState = JSON.parse(result.data).isValid;
            !tokenState ? await httpService.logout({
                token: token,
                username: (await localStorage.getUserData()).username
            }) : "";
            if (!tokenState) {
                await localStorage.remove(token);
            }
            new CYBR_Game({
                type: Phaser.AUTO,
                width: 960,//document.body.clientWidth,
                height: 576,//window.innerHeight,
                scale: {
                    parent: document.body,
                    autoCenter: Phaser.Scale.CENTER_BOTH
                },
                dom: {createContainer: true},
                scene: [ScenePreloadAssets],
                render: {pixelArt: false},
                physics: {
                    default: "arcade",
                    arcade: {
                        gravity: {y: CST.PHYSIC.GRAVITY},
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
            }, tokenState);
            console.log(CYBR_Game.isConnected, tokenState);
        } else {
            tokenState = false;
            await httpService.logout(token);
            await localStorage.remove("token");
            await localStorage.remove("userData")
            new CYBR_Game({
                type: Phaser.AUTO,
                width: 960,//document.body.clientWidth,
                height: 576,//window.innerHeight,
                scale: {
                    parent: document.body,
                    autoCenter: Phaser.Scale.CENTER_BOTH
                },
                dom: {createContainer: true},
                scene: [ScenePreloadAssets],
                render: {pixelArt: false},
                physics: {
                    default: "arcade",
                    arcade: {
                        gravity: {y: CST.PHYSIC.GRAVITY},
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
            }, tokenState);
            console.log(CYBR_Game.isConnected, tokenState);
        }
    }else {
        new CYBR_Game({
            type: Phaser.AUTO,
            width: 960,//document.body.clientWidth,
            height: 576,//window.innerHeight,
            scale: {
                parent: document.body,
                autoCenter: Phaser.Scale.CENTER_BOTH
            },
            dom: {createContainer: true},
            scene: [ScenePreloadAssets],
            render: {pixelArt: false},
            physics: {
                default: "arcade",
                arcade: {
                    gravity: {y: CST.PHYSIC.GRAVITY},
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
        }, tokenState);
        console.log(CYBR_Game.isConnected, tokenState);
    }
});/*
window.addEventListener("load", event => {
    new CYBR_Game({
        type: Phaser.AUTO,
        width: 960,//document.body.clientWidth,
        height: 576,//window.innerHeight,
        scale: {
            parent: document.body,
            autoCenter: Phaser.Scale.CENTER_BOTH
        },
        dom: {createContainer: true},
        scene: [ScenePreloadAssets],
        render: {pixelArt: false},
        physics: {
            default: "arcade",
            arcade: {
                gravity: {y: CST.PHYSIC.GRAVITY},
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
    }, tokenState);
    console.log(CYBR_Game.isConnected, tokenState);
});*/