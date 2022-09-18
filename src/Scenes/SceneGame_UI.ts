import {CST} from "../CST";
import {CYBR_Scene} from "./CYBR_Scene";
import {SceneGame} from "./SceneGame";
import {HealthBar} from "../UI/HealthBar";
import {BulletBar} from "../UI/BulletBar";
import {LevelTransition} from "../UI/LevelTransition";

export class SceneGame_UI extends CYBR_Scene
{
    private sceneGame: SceneGame;
    private elapsedTime: number = 0;

    // UI Items
    private chronoText: Phaser.GameObjects.Text;
    private tokenScoreItem: Map<string, Phaser.GameObjects.GameObject>;
    private lifeItem: Map<string, Phaser.GameObjects.GameObject>;

    // Level
    private levelTransition: LevelTransition;
    private levelStarting: boolean = false;

    constructor()
    {
        super({key: CST.SCENES.GAME_UI});
    }

    // Init
    ////////////////////////////////////////////////////////////////////////

    public init(sceneGame: SceneGame): void
    {
        this.sceneGame = sceneGame;
    }

    // Create
    ////////////////////////////////////////////////////////////////////////

    public create(): void
    {
        const gameWidth = this.scale.displaySize.width;
        const gameHeight = this.scale.displaySize.height;

        this.tokenScoreItem = this.createTokenScoreItem();
        this.lifeItem = this.createLifeItem();
        this.chronoText = this.createChrono();
        this.createGameOverScreen();

        this.levelTransition = new LevelTransition(this, 0, 0, gameWidth, gameHeight);

        this.sceneGame.events.on("levelStarted", this.startLevelStartedTransition, this);
        this.sceneGame.events.on("levelCompleted", this.startLevelCompletedTransition, this);
    }

    private createTokenScoreItem(): Map<string, Phaser.GameObjects.GameObject>
    {
        // Image
        let tokenImageX = 12;
        let tokenImageY = 12;

        let tokenImage = this.add.image(tokenImageX, tokenImageY, "platform_atlas", "tokenSilver.png");
        tokenImage.x += tokenImage.width / 2;
        tokenImage.y += tokenImage.height / 2;

        // Text
        let textX = tokenImage.x + tokenImage.width + 12;
        let textY = tokenImage.y + 1;

        let tokenText = this.add.text(textX, textY, "0", {font: '24px Gemunu Libre', color: CST.STYLE.COLOR.ORANGE, stroke: CST.STYLE.COLOR.BLACK, strokeThickness: 3});
        tokenText.x -= tokenText.width / 2;
        tokenText.y -= tokenText.height / 2;

        this.sceneGame.events.on("collectedTokenChanged", (collectedTokens: number) => {
            tokenText.text = collectedTokens.toString();
        }, this);

        return new Map<string, Phaser.GameObjects.GameObject>().set("image", tokenImage.setVisible(false)).set("text", tokenText.setVisible(false));
    }

    // TODO: Review position
    private createLifeItem(): Map<string, Phaser.GameObjects.GameObject>
    {
        let tokenImage = this.tokenScoreItem.get("image") as Phaser.GameObjects.Image;

        // Image
        let lifeImageX = tokenImage.x;
        let lifeImageY = tokenImage.y + tokenImage.height;

        let lifeImage = this.add.image(lifeImageX, lifeImageY, "player", "idleLeft_001.png");
        lifeImage.y += lifeImage.height / 2;

        // Text
        let textX = lifeImage.x + lifeImage.width - 5;
        let textY = lifeImage.y + 1;

        let lifeText = this.add.text(textX, textY, "3", {font: '24px Gemunu Libre', color: CST.STYLE.COLOR.ORANGE, stroke: CST.STYLE.COLOR.BLACK, strokeThickness: 3});
        lifeText.x -= lifeText.width / 2;
        lifeText.y -= lifeText.height / 2;

        this.sceneGame.events.on("playerRemainLifeChanged", (remainLife: number) => {
            lifeText.text = Math.max(0, remainLife).toString();
        }, this);

        return new Map<string, Phaser.GameObjects.GameObject>().set("image", lifeImage).set("text", lifeText);
    }

    private createGameOverScreen(): void
    {
        let gameOverText = this.add.text(0, 0, "GAME OVER", {font: '54px Arial', color: CST.STYLE.COLOR.ORANGE, stroke: CST.STYLE.COLOR.BLACK, strokeThickness: 3});
        gameOverText.visible = false;
        this.centerItem(gameOverText);

        this.sceneGame.events.on("gameOverChanged", (gameOver: boolean) => {
            gameOverText.visible = gameOver;
        }, this);
    }

    private createChrono(): Phaser.GameObjects.Text
    {
        let sceneWidth = this.scale.displaySize.width;
        return this.add.text(sceneWidth - 100, 16, "00:00:00", {font: '24px Gemunu Libre', color: CST.STYLE.COLOR.ORANGE, stroke: CST.STYLE.COLOR.BLACK, strokeThickness: 3});
    }

    private startLevelCompletedTransition(): void
    {
        console.log("zebi");
        this.sceneGame.scene.pause();

        this.levelTransition.showLevelCompletedAnimation();
        this.levelTransition.onAnimationCompleted("levelCompletedAnimationCompleted", async () => {
          /*  const playerData: IRequestPlayer = {
                playerId: await this.storageService.getToken(),
                level: this.sceneGame.currentLevel,
                score: this.sceneGame.getCollectedTokens() * 4,
                cybr_coin_amount: this.sceneGame.getCollectedTokens(),
                cybr_coin_per_level: this.sceneGame.getCollectedTokens(),
                best_time: this.elapsedTime,
            }
            let res = await this.httpServices.patchPlayerData(playerData);
            if (res.status == 404) {
                console.log(res.data.message);
            } else {

            }*/
            this.sceneGame.startNextLevel();
        }, this);

    }

    private startLevelStartedTransition(): void
    {
        this.levelStarting = true;

        this.levelTransition.showLevelStartedAnimation(this.sceneGame.currentLevel);
        this.levelTransition.onAnimationCompleted("levelStartedAnimationCompleted", () => {
            this.elapsedTime = 0;
            this.sceneGame.scene.resume();
            this.levelStarting = false;
        }, this);
    }

    // Update
    ////////////////////////////////////////////////////////////////////////

    public update(time: number, delta: number): void
    {
        super.update(time, delta);

        if (!this.scene.isPaused(this.sceneGame))
        {
            this.elapsedTime += delta;
            this.chronoText.setVisible(!this.levelStarting);
            this.chronoText.text = CYBR_Scene.formatTime(this.elapsedTime);
        }
    }

}