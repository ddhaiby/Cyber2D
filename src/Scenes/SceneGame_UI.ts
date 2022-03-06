import { CST } from "../CST";
import { CYBR_Scene } from "./CYBR_Scene";
import { SceneGame } from "./SceneGame";
import { CYBR_Graphics } from "../Utils/CYBR_Graphics";
import { HealthBar } from "../UI/HealthBar";
import { BulletBar } from "../UI/BulletBar";

export class SceneGame_UI extends CYBR_Scene
{
    private sceneGame: SceneGame;
    private elapsedTime: number = 0;

    // UI Items
    private healthBar: HealthBar;
    private bulletBar: BulletBar;
    private chronoText: Phaser.GameObjects.Text;
    private tokenScoreItem: Map<string, Phaser.GameObjects.GameObject>;
    private lifeItem: Map<string, Phaser.GameObjects.GameObject>;

    // Level
    private levelTitle: Phaser.GameObjects.Text;
    private levelSubTitle: Phaser.GameObjects.Text;
    private levelDescription: Phaser.GameObjects.Text;
    private levelBackground: CYBR_Graphics;

    constructor()
    {
        super({key: CST.SCENES.GAME_UI});
    }

    // Init
    ////////////////////////////////////////////////////////////////////////
   
    public init(sceneGame: SceneGame) : void
    { 
        this.sceneGame = sceneGame;
    }

    // Create
    ////////////////////////////////////////////////////////////////////////

    public create() : void
    {
        this.createHealthBar();
        this.createBulletBar();
        this.tokenScoreItem = this.createTokenScoreItem();
        this.lifeItem = this.createLifeItem();
        this.chronoText = this.createChrono();
        this.createGameOverScreen();

        // Title
        this.levelBackground = new CYBR_Graphics(this, {x: 0, y: 0 , width: 0, height: 0});
        this.levelTitle = this.add.text(0, 240, "", { font: '82px Gemunu Libre', color: '#ffbc32', align: "center" });
        this.levelTitle.setOrigin(0.5);
        this.levelTitle.setSize(600, 0);

        this.levelSubTitle = this.add.text(0, 400, "", { font: '40px Gemunu Libre', color: '#ffedc9', align: "center" });
        this.levelSubTitle.setOrigin(0.5);
        this.levelSubTitle.setSize(600, 0);

        this.levelDescription = this.add.text(0, 600, "", { font: '21px Gemunu Libre', color: '#ffedc9', align: "center" });
        this.levelDescription.setOrigin(0.5);
        this.levelDescription.setSize(600, 0);

        this.sceneGame.events.on("levelStarted", this.startLevelStartedTransition, this);
        this.sceneGame.events.on("levelCompleted", this.startLevelCompletedTransition, this);
    }

    private createHealthBar() : void
    {
        this.healthBar = new HealthBar(this, { x: 12, y: 12, width: 160, height: 16, color: 0x990000, value: 1});

        this.sceneGame.events.on("playerHealthChanged", (health: number, maxHealth: number)=> {
            this.healthBar.setValue(health / maxHealth);
        }, this);
    }

    private createBulletBar() : void
    {
        // Bar
        let bulletBarX = this.healthBar.x;
        let bulletBarY = this.healthBar.y + this.healthBar.height;

        this.bulletBar = new BulletBar(this, { x: bulletBarX, y: bulletBarY, width: 160, height: 12, color: 0x005544, value: 0 });

        this.sceneGame.events.on("shotsChanged", (shots: number, fireLimit: number)=> {
            this.bulletBar.setValue(shots / fireLimit);
        }, this);
    }

    private createTokenScoreItem() : Map<string, Phaser.GameObjects.GameObject>
    {
        // Image
        let tokenImageX = this.bulletBar.x;
        let tokenImageY = this.bulletBar.y + this.bulletBar.height + 8;

        let tokenImage = this.add.image(tokenImageX, tokenImageY, "token_24");
        tokenImage.x += tokenImage.width / 2;
        tokenImage.y += tokenImage.height / 2;

        // Text
        let textX = tokenImage.x + tokenImage.width;
        let textY = tokenImage.y + 1;
    
        let tokenText = this.add.text(textX, textY, "0", { font: '18px Gemunu Libre', color: '#000000' });
        tokenText.x -= tokenText.width / 2;
        tokenText.y -= tokenText.height / 2;
        
        this.sceneGame.events.on("collectedTokenChanged", (collectedTokens)=> {
            tokenText.text = collectedTokens;
        }, this);

        return new Map<string, Phaser.GameObjects.GameObject>().set("image", tokenImage).set("text", tokenText);
    }

    // TODO: Review position
    private createLifeItem() : Map<string, Phaser.GameObjects.GameObject>
    {
        let tokenImage = this.tokenScoreItem.get("image") as Phaser.GameObjects.Image;

        // Image
        let lifeImageX = tokenImage.x;
        let lifeImageY = tokenImage.y + tokenImage.height;

        let lifeImage = this.add.image(lifeImageX, lifeImageY, "eyeball", 9).setScale(1);
        lifeImage.y += lifeImage.height / 2;

        // Text
        let textX = lifeImage.x + lifeImage.width;
        let textY = lifeImage.y + 1;
    
        let lifeText = this.add.text(textX, textY, "", { font: '18px Gemunu Libre', color: '#000000' });
        lifeText.x -= lifeText.width / 2;
        lifeText.y -= lifeText.height / 2;

        this.sceneGame.events.on("playerRemainLifeChanged", (remainLife: integer)=> {
            lifeText.text = Math.max(0, remainLife).toString();
        }, this);

        return new Map<string, Phaser.GameObjects.GameObject>().set("image", lifeImage).set("text", lifeText);
    }

    private createGameOverScreen() : void
    {
        let gameOverText = this.add.text(0, 0, "GAME OVER", { font: '54px Arial', color: '#000000' });
        gameOverText.visible = false;
        this.centerItem(gameOverText);

        this.sceneGame.events.on("gameOverChanged", (gameOver: boolean)=> {
            gameOverText.visible = gameOver;
        }, this);
    }

    private createChrono() : Phaser.GameObjects.Text
    {
        let sceneWidth = this.scale.displaySize.width;
        return this.add.text(sceneWidth - 100, 16, "00:00:00", { font: '20px Gemunu Libre', color: '#000000' });
    }

    private startLevelCompletedTransition() : void
    {
        this.sceneGame.scene.pause();

        const gameWidth = this.sys.game.canvas.width;
        const gameHeight = this.sys.game.canvas.height;

        this.levelBackground.x = 0;
        this.levelBackground.width = 0;
        this.levelBackground.height = gameHeight;
        this.levelBackground.clear();
        this.levelBackground.fillStyle(0x171822);
        this.levelBackground.fillRect(this.levelBackground.x, this.levelBackground.y, this.levelBackground.width, this.levelBackground.height);

        this.tweens.add({
            targets: this.levelBackground,
            width: gameWidth,
            ease: Phaser.Math.Easing.Linear,
            delay: 1000,
            duration: 800,
            onUpdate: function(): void {
                this.levelBackground.clear();
                this.levelBackground.fillStyle(0x171822);
                this.levelBackground.fillRect(this.levelBackground.x, this.levelBackground.y, this.levelBackground.width, this.levelBackground.height);
            },
            onComplete: function(): void {
                this.time.delayedCall(900, () => {
                    this.sceneGame.startNextLevel();
                });
            },
            onUpdateScope: this,
            onCompleteScope: this
        });
    }

    private startLevelStartedTransition() : void
    {
        this.sceneGame.scene.pause();

        const gameWidth = this.sys.game.canvas.width;
        const gameHeight = this.sys.game.canvas.height;

        this.levelBackground.x = 0;
        this.levelBackground.width = gameWidth;
        this.levelBackground.height = gameHeight;
        this.levelBackground.clear();
        this.levelBackground.fillStyle(0x171822);
        this.levelBackground.fillRect(this.levelBackground.x, this.levelBackground.y, this.levelBackground.width, this.levelBackground.height);

        this.levelTitle.setX(this.levelBackground.width / 2);
        this.levelTitle.text = "Level " + this.sceneGame.currentLevel;

        this.levelSubTitle.setX(this.levelBackground.width / 2);
        this.levelSubTitle.text = CST.LEVELS[this.sceneGame.currentLevel - 1].TITLE;

        this.levelDescription.setX(this.levelBackground.width / 2);
        this.levelDescription.text = CST.LEVELS[this.sceneGame.currentLevel - 1].DESCRIPTION;

        this.levelBackground.setVisible(true);
        this.levelTitle.setVisible(true);
        this.levelSubTitle.setVisible(true);
        this.levelDescription.setVisible(true);

        this.tweens.add({
            targets: this.levelBackground,
            width: 0,
            ease: Phaser.Math.Easing.Linear,
            delay: 2200,
            duration: 1100,
            onUpdate: function(): void {
                this.levelBackground.x = gameWidth - this.levelBackground.width,
                this.levelBackground.clear();
                this.levelBackground.fillStyle(0x171822);
                this.levelBackground.fillRect(this.levelBackground.x, this.levelBackground.y, this.levelBackground.width, this.levelBackground.height);

                this.levelTitle.setX(this.levelBackground.x + gameWidth -this.levelBackground.width / 2);
                this.levelSubTitle.setX(this.levelBackground.x + gameWidth -this.levelBackground.width / 2);
                this.levelDescription.setX(this.levelBackground.x + gameWidth -this.levelBackground.width / 2);
            },
            onComplete: function(): void {
                this.elapsedTime = 0;
                this.sceneGame.scene.resume();
            },
            onUpdateScope: this,
            onCompleteScope: this
        });
    }

    // Update
    ////////////////////////////////////////////////////////////////////////

    public update(time: number, delta: number) : void
    {
        super.update(time, delta);

        if (!this.scene.isPaused(this.sceneGame))
        {
            this.elapsedTime += delta;
            this.chronoText.text = CYBR_Scene.formatTime(this.elapsedTime);
        }
    }
}