import { CST } from "../CST";
import { CYBR_Scene } from "./CYBR_Scene";
import { SceneData } from "./CYBR_Scene";
import { SceneGame } from "./SceneGame";
import { CYBR_Button } from "../UI/CYBR_Button";
import { CYBR_Graphics } from "../Utils/CYBR_Graphics";
import { AudioManager } from "../Managers/AudioManager";
import {HttpServices} from "../Core/Http.Services";

export class SceneMainMenu_UI extends CYBR_Scene
{
    private sceneGame: SceneGame;
    private readonly httpService:HttpServices;
    constructor()
    {
        super({key: CST.SCENES.MAINMENU_UI});
        this.httpService = new HttpServices();
    }

    // Init
    ////////////////////////////////////////////////////////////////////////

    public init() {}

    // Create
    ////////////////////////////////////////////////////////////////////////

    public create() : void
    {
        AudioManager.playMusic(CST.MAIN_MENU.MUSIC);

        // Background
        let background = new CYBR_Graphics(this);
        background.width = 500;
        background.height = 320;
        background.fillStyle(0x171822);
        background.fillRect(0, 0, background.width, background.height);
        this.centerItem(background);

        // Buttons
        let buttonPlay = new CYBR_Button(this, 0, background.y + 52, "Play", "btn_background");
        buttonPlay.onClicked(this.onPlayClicked, this);
        this.centerHItem(buttonPlay);

        let buttonSettings = new CYBR_Button(this, 0, buttonPlay.y + buttonPlay.height + 32, "Settings", "btn_background");
        buttonSettings.onClicked(this.onSettingsClicked, this);
        this.centerHItem(buttonSettings);


        let buttonRegister = new CYBR_Button(this,0,buttonSettings.y+ buttonSettings.height+24,"Register","btn_background");
        buttonRegister.onClicked(this.registerClicked,this);
        this.centerHItem(buttonRegister);
        // Game Scene
        const sceneData = {level: 1} as SceneData;
        this.sceneGame = this.scene.add(CST.SCENES.GAME, SceneGame, false, sceneData) as SceneGame;
    }

    // Update
    ////////////////////////////////////////////////////////////////////////

    public update(time: number, delta: number) : void
    {
        super.update(time, delta);
    }

    private onPlayClicked() : void
    {
        this.scene.setActive(false);
        this.scene.setVisible(false);
        this.sceneGame.scene.restart({level: 1} as SceneData);
        this.sceneGame.showGame(true);
    }

    private onSettingsClicked() : void
    {
        console.log("Settings requested");
    }

    private registerClicked():void{
        console.log("registeration begin");
        this.httpService.register({mail:"pierreluucmillet@gmail.com",password:"A1azerty*",name:"Pldu78"}).then(res=>console.log(res));
        //maybe hide button if player already connected
    }
    //create html form file and preload it, and use the following function that need to be updated to fit with our use
    /*createForms ()
{
    this.add.image(400, 300, 'pic');

    var text = this.add.text(10, 10, 'Please login to play', { color: 'white', fontFamily: 'Arial', fontSize: '32px '});

    var element = this.add.dom(400, 600).createFromCache('nameform');

    element.setPerspective(800);

    element.addListener('click');

    element.on('click', function (event) {

        if (event.target.name === 'loginButton')
        {
            var inputUsername = this.getChildByName('username');
            var inputPassword = this.getChildByName('password');

            //  Have they entered anything?
            if (inputUsername.value !== '' && inputPassword.value !== '')
            {
                //  Turn off the click events
                this.removeListener('click');

                //  Tween the login form out
                this.scene.tweens.add({ targets: element.rotate3d, x: 1, w: 90, duration: 3000, ease: 'Power3' });

                this.scene.tweens.add({ targets: element, scaleX: 2, scaleY: 2, y: 700, duration: 3000, ease: 'Power3',
                    onComplete: function ()
                    {
                        element.setVisible(false);
                    }
                });

                //  Populate the text with whatever they typed in as the username!
                text.setText('Welcome ' + inputUsername.value);
            }
            else
            {
                //  Flash the prompt
                this.scene.tweens.add({ targets: text, alpha: 0.1, duration: 200, ease: 'Power3', yoyo: true });
            }
        }

    });

    this.tweens.add({
        targets: element,
        y: 300,
        duration: 3000,
        ease: 'Power3'
    });
}
*/
}
