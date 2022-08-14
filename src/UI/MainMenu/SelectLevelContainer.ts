import { CST } from "../../CST";
import { CYBR_Scene } from "../../Scenes/CYBR_Scene";
import { CYBR_IconButton } from "../CYBR_IconButton";
import { CYBR_TextButton } from "../CYBR_TextButton";

export class SelectLevelContainer extends Phaser.GameObjects.Container
{
    private _currentLevel: number = 1;
    private previewLevelImage: Phaser.GameObjects.Image;
    private bottomMenuHeight: number = 80;

    private selecPreviousLevelButton: CYBR_TextButton;
    private selectNextLevelButon: CYBR_TextButton;

    constructor(scene: CYBR_Scene, x?: number, y?: number)
    {
        super(scene, x, y);
        scene.add.existing(this);
        this.width = scene.scale.displaySize.width;
        this.height = scene.scale.displaySize.height;

        this.previewLevelImage = scene.add.image(0, 0, "");
        this.previewLevelImage.setOrigin(0);
        this.add(this.previewLevelImage);

        this.selecPreviousLevelButton = new CYBR_TextButton(scene, 0, 0, "   <   ", { fontSize : "60px", color: CST.STYLE.COLOR.ORANGE, strokeThickness : 4});
        scene.centerItem(this.selecPreviousLevelButton, -48, 240);
        this.selecPreviousLevelButton.onClicked(this.onShowPreviousLevel, this);
        this.add(this.selecPreviousLevelButton);

        this.selectNextLevelButon = new CYBR_TextButton(scene, 0, 0, "   >   ", { fontSize : "60px", color: CST.STYLE.COLOR.ORANGE, strokeThickness : 4});
        scene.centerItem(this.selectNextLevelButon, 48, 240);
        this.selectNextLevelButon.onClicked(this.onShowNextLevel, this);
        this.add(this.selectNextLevelButon);

        const playButton = new CYBR_TextButton(scene, 0, 0, "Play", { fontSize : "34px", color: CST.STYLE.COLOR.ORANGE, strokeThickness : 4});
        scene.centerItem(playButton, 400, 240);
        playButton.onClicked(() => { this.emit("playLevel", this.currentLevel) }, this);
        this.add(playButton);

        const homeIconButton = new CYBR_IconButton(scene, 930, 30, "UI_atlas", "iconHome.png");
        homeIconButton.onClicked(() => { this.emit("backToMainMenu") }, this);
        this.add(homeIconButton);

        this.updatePreviewLevelImage();
    }

    private set currentLevel(currentLevel: number)
    {
        this._currentLevel = currentLevel;
        this.updatePreviewLevelImage();
    }

    private get currentLevel(): number
    {
        return this._currentLevel;
    }

    private onShowPreviousLevel(): void
    {
        this.currentLevel = Math.max(1, this.currentLevel - 1); 
    }

    private onShowNextLevel(): void
    {
        this.currentLevel = Math.min(CST.LEVELS.length, this.currentLevel + 1);
    }

    private updatePreviewLevelImage(): void
    {
        this.previewLevelImage.setTexture("previewLevel" + this.currentLevel.toString());

        this.previewLevelImage.width = 700;
        this.previewLevelImage.height = 400;

        this.previewLevelImage.displayWidth = this.previewLevelImage.width;
        this.previewLevelImage.displayHeight = this.previewLevelImage.height;

        (this.scene as CYBR_Scene).centerItem(this.previewLevelImage, 0, 0);

        

        if (this.currentLevel <= 1)
        {
            this.selecPreviousLevelButton.disableInteractive();
        }
        else
        {
            this.selecPreviousLevelButton.setInteractive();
        }
 
        if (this.currentLevel >= CST.LEVELS.length)
        {
            this.selectNextLevelButon.disableInteractive();
        }
        else
        {
            this.selectNextLevelButon.setInteractive();
        }
    }
}