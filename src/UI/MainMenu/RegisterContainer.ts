import { CYBR_Button } from "../CYBR_Button";
import { TextBox } from 'phaser3-rex-plugins/templates/ui/ui-components.js';
import { CYBR_Scene } from "../../Scenes/CYBR_Scene";
import { HttpServices } from "../../Core/Http.Services";

export class RegisterContainer extends Phaser.GameObjects.Container
{
    private readonly httpService: HttpServices;

    constructor(scene: CYBR_Scene, x?: number, y?: number)
    {
        super(scene, x, y);
        scene.add.existing(this);
        this.width = scene.scale.displaySize.width;
        this.height = scene.scale.displaySize.height;

        const textObject = scene.add.text(0, 0, "Petit test", { fontFamily: "Gemunu Libre", fontSize: "48px", fontStyle: "bold", color: "#171822", align: "center" });
        const textBox = new TextBox(scene, {text: textObject});
        scene.add.existing(textBox);
        this.add(textBox);

        const buttonCancel = new CYBR_Button(scene, 0, 520, "Cancel", "btn_background");
        buttonCancel.onClicked(this.cancelClicked, this);
        scene.centerHItem(buttonCancel, -200);
        this.add(buttonCancel);
    
        const buttonRegister = new CYBR_Button(scene, 0, buttonCancel.y, "Login", "btn_background");
        buttonRegister.onClicked(this.confirmLoginClicked, this);
        scene.centerHItem(buttonRegister, 200);
        this.add(buttonRegister);

        this.httpService = new HttpServices();
    }

    private confirmLoginClicked() : void
    {
        this.httpService.register({mail:"pierreluucmillet@gmail.com",password:"A1azerty*",name:"Pldu78"}).then(res=>console.log(res));
        this.emit("playerConnected");
        //maybe hide button if player already connected
    }

    private cancelClicked() : void
    {
        this.emit("playerCancelledConnection");
    }

    /*//create html form file and preload it, and use the following function that need to be updated to fit with our use
    private createForms () : void
    {
        this.scene.add.image(400, 300, 'pic');

        var text = this.scene.add.text(10, 10, 'Please login to play', { color: 'white', fontFamily: 'Arial', fontSize: '32px '});

        var element = this.scene.add.dom(400, 600).createFromCache('nameform');

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

        this.scene.tweens.add({
            targets: element,
            y: 300,
            duration: 3000,
            ease: 'Power3'
        });
    }*/
}