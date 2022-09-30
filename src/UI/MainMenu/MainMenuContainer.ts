import { CST } from "../../CST";
import { SceneMainMenu_UI } from "../../Scenes/SceneMainMenu_UI";
import { PlayerManager } from "../../Managers/PlayerManager";
import { HttpServices } from "../../Core/Http.Services";
import { StorageService } from "../../Shared/StorageService";
import { CYBR_TextButton } from "../CYBR_TextButton";
import { CYBR_IconButton } from "../CYBR_IconButton";

export class MainMenuContainer extends Phaser.GameObjects.Container
{
    private httpService: HttpServices;
    private localStorage: StorageService;

    constructor(scene: SceneMainMenu_UI, x?: number, y?: number)
    {
        super(scene, x, y);
        scene.add.existing(this);

        this.httpService = new HttpServices();
        this.localStorage = new StorageService();

        this.width = scene.scale.displaySize.width;
        this.height = scene.scale.displaySize.height;

        const playTextButton = new CYBR_TextButton(scene, 100, 100, "PLAY", { fontSize : "116px", color: CST.STYLE.COLOR.ORANGE, strokeThickness : 6});
        scene.centerItem(playTextButton, 0, -10);
        playTextButton.onClicked(() => {
            playTextButton.emit("pointerout"); // Hack to ensure the button ends with its normal state here
            this.onPlayClicked();
        }, this);
        this.add(playTextButton);

        const selectLevelTextButton = new CYBR_TextButton(scene, 100, 100, "SELECT LEVEL", { fontSize : "32px", color: CST.STYLE.COLOR.ORANGE, strokeThickness : 4});
        scene.centerItem(selectLevelTextButton, 0, 180);
        selectLevelTextButton.onClicked(this.onSelectLevelClicked, this);
        this.add(selectLevelTextButton);

        // const settingsIconButton = new CYBR_IconButton(scene, 930, 28, "UI_atlas", "iconGear.png");
        // settingsIconButton.onClicked(this.onSettingsClicked, this);
        // this.add(settingsIconButton);

        // const discordTextButton = new CYBR_TextButton(scene, 800, 12, "Discord", { fontSize : "20px", color: CST.STYLE.COLOR.ORANGE, strokeThickness : 2});
        // discordTextButton.onClicked(this.onDiscordConnectClicked, this);
        // this.add(discordTextButton);
    }

    // On button clicked
    ////////////////////////////////////////////////////////////////////////

    private onPlayClicked() : void
    {
        this.emit("playClicked");
    }

    private onSelectLevelClicked() : void
    {
        this.emit("selectLevelClicked");
    }

    private onSettingsClicked() : void
    {
        this.emit("settingsClicked");
    }

    private onRegisterClicked() : void
    {
        this.emit("connectClicked");
    }

    private onDiscordConnectClicked(): void
    {
        this.httpService.login().then(async result => {
            await this.ShowAuthWindow({path: JSON.parse(result.data as unknown as string).url, callback: {}});

        });
    }

    // Authentification
    ////////////////////////////////////////////////////////////////////////

    private async ShowAuthWindow(options)
    {
            options.windowName = options.windowName || '_blank'; // should not include space for IE
            options.windowOptions = options.windowOptions || 'location=0,status=0,width=800,height=400';
            options.callback = options.callback || function () {
                window.location.reload();
            };

            let _oauthWindow = window.open(options.path, options.windowName, options.windowOptions);


            let _oauthInterval = window.setInterval(function () {
                if (_oauthWindow.closed) {

                    clearInterval(_oauthInterval);
                    new HttpServices().loginValidation().then(result => {
                        if(result.status==200) {
                            new StorageService().setToken(JSON.parse(result.data).JWT).then(() => new StorageService().setUserData({
                                username: JSON.parse(result.data).username,
                                email: JSON.parse(result.data).email
                            }))
                        }
                    });
                }
            }, 100);
    }
}