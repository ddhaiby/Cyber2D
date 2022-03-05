import { CST } from "../CST";
import { CYBR_Scene } from "./CYBR_Scene";
import { SceneGame } from "./SceneGame";
import { CYBR_Graphics } from "../Utils/CYBR_Graphics";
import { HealthBar } from "../UI/HealthBar";
import { BulletBar } from "../UI/BulletBar";
import { Player } from "src/Pawns/Player";

export class SceneGame_UI extends CYBR_Scene
{
    private sceneGame: SceneGame;
    private player: Player;
    private elapsedTime: number = 0;

    // UI Items
    private healthBar: HealthBar;
    private bulletBar: BulletBar;
    private chronoText: Phaser.GameObjects.Text;
    private tokenScoreItem: Map<string, Phaser.GameObjects.GameObject>;
    private lifeItem: Map<string, Phaser.GameObjects.GameObject>;

    constructor()
    {
        super({key: CST.SCENES.GAME_UI});
    }

    // Init
    ////////////////////////////////////////////////////////////////////////
   
    public init(sceneGame: SceneGame) : void
    { 
        this.sceneGame = sceneGame;
        this.player = sceneGame.player;
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

        this.sceneGame.events.on("levelCompleted", this.startLevelTransition, this);
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
    
        let tokenText = this.add.text(textX, textY, "0", { font: '18px Arial', color: '#000000' });
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
    
        let lifeText = this.add.text(textX, textY, this.sceneGame.getRemainLife().toString(), { font: '18px Gemunu Libre', color: '#000000' });
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
        return this.add.text(sceneWidth - 100, 16, "00:00:00", { font: '20px Arial', color: '#000000' });
    }

    private startLevelTransition() : void
    {
        this.sceneGame.scene.pause();

        const gameWidth = this.sys.game.canvas.width;
        const gameHeight = this.sys.game.canvas.height;

        let transitionGraphic = new CYBR_Graphics(this, {x: 0, y: 0, width: 0, height: gameHeight})
        transitionGraphic.fillStyle(0x000000);
        transitionGraphic.fillRect(transitionGraphic.x, transitionGraphic.y, transitionGraphic.width, transitionGraphic.height);

        this.tweens.add({
            targets: transitionGraphic,
            width: gameWidth,
            ease: Phaser.Math.Easing.Linear,
            delay: 1000,
            duration: 1100,
            onUpdate: function(): void {
                transitionGraphic.clear();
                transitionGraphic.fillStyle(0x000000);
                transitionGraphic.fillRect(transitionGraphic.x, transitionGraphic.y, transitionGraphic.width, transitionGraphic.height);
            },
            onComplete: function(): void {
                this.time.delayedCall(900, () => {
                    transitionGraphic.destroy();
                    this.sceneGame.startNextLevel();
                });
            },
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