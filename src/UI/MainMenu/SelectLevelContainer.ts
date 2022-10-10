import { CST } from "../../CST";
import { CYBR_Scene } from "../../Scenes/CYBR_Scene";
import { CYBR_IconButton } from "../CYBR_IconButton";
import { CYBR_TextButton } from "../CYBR_TextButton";

export class SelectLevelContainer extends Phaser.GameObjects.Container
{
    private _currentLevel: number = 1;
    private previewLevelImage: Phaser.GameObjects.Image;
    private titleLevelText: Phaser.GameObjects.Text;

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

        this.selecPreviousLevelButton = new CYBR_TextButton(scene, 0, 0, "   <   ", { fontSize : "68px", color: CST.STYLE.COLOR.ORANGE, strokeThickness : 4});
        scene.centerItem(this.selecPreviousLevelButton, -48, 280);
        this.selecPreviousLevelButton.onClicked(this.onShowPreviousLevel, this);
        this.add(this.selecPreviousLevelButton);

        this.selectNextLevelButon = new CYBR_TextButton(scene, 0, 0, "   >   ", { fontSize : "68px", color: CST.STYLE.COLOR.ORANGE, strokeThickness : 4});
        scene.centerItem(this.selectNextLevelButon, 48, 280);
        this.selectNextLevelButon.onClicked(this.onShowNextLevel, this);
        this.add(this.selectNextLevelButon);

        const playButton = new CYBR_TextButton(scene, CST.GAME.WIDTH - 120, CST.GAME.HEIGHT - 64, "PLAY", { fontSize : "53px", color: CST.STYLE.COLOR.ORANGE, strokeThickness : 4});
        playButton.clickSound = "menuPlayButtonClicked";
        playButton.onClicked(this.onPlayLevelClicked, this);
        this.add(playButton);

        const homeIconButton = new CYBR_IconButton(scene, CST.GAME.WIDTH - 36, 28, "UI_atlas", "iconHome.png");
        homeIconButton.onClicked(() => { this.emit("backToMainMenu") }, this);
        this.add(homeIconButton);

        this.titleLevelText = scene.add.text(0, 0, "Level 0", {fontSize : "50px", color: CST.STYLE.COLOR.ORANGE, strokeThickness : 2, stroke: CST.STYLE.COLOR.BLACK, align: "center"});
        scene.centerItem(this.titleLevelText, 0, -250);
        this.add(this.titleLevelText);

        this.updateTitleLevel();
        this.updatePreviewLevelImage();
    }

    private set currentLevel(currentLevel: number)
    {
        this._currentLevel = currentLevel;
        this.updateTitleLevel();
        this.updatePreviewLevelImage();
    }

    private get currentLevel(): number
    {
        return this._currentLevel;
    }

    private onPlayLevelClicked(): void
    {
        this.emit("playLevel", this.currentLevel);
        this.currentLevel = 1;
    }

    private onShowPreviousLevel(): void
    {
        this.currentLevel = Math.max(1, this.currentLevel - 1); 
    }

    private onShowNextLevel(): void
    {
        this.currentLevel = Math.min(CST.LEVELS.length, this.currentLevel + 1);
    }

    private updateTitleLevel(): void
    {
        this.titleLevelText.setText("Level " + this.currentLevel.toString());
    }

    private updatePreviewLevelImage(): void
    {
        this.previewLevelImage.setTexture("previewLevel" + this.currentLevel.toString());

        this.previewLevelImage.width = 800;
        this.previewLevelImage.height = 460;

        this.previewLevelImage.displayWidth = this.previewLevelImage.width;
        this.previewLevelImage.displayHeight = this.previewLevelImage.height;

        (this.scene as CYBR_Scene).centerItem(this.previewLevelImage, 0, 20);

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