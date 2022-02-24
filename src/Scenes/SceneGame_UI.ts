import { CST } from "../CST";
import { CYBR_Scene } from "./CYBR_Scene";
import { SceneGame } from "./SceneGame";
import { CYBR_HealthBar } from "../UI/CYBR_HealthBar";
import { CYBR_BulletBar } from "../UI/CYBR_BulletBar";
import { Player } from "Pawns/Player";

export class SceneGame_UI extends CYBR_Scene
{
    private sceneGame: SceneGame;
    private player: Player;
    private elapsedTime: number = 0;

    // UI Items
    private healthBar: CYBR_HealthBar;
    private bulletBar: CYBR_BulletBar;
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
    }

    private createHealthBar() : void
    {
        this.healthBar = new CYBR_HealthBar(this, { x: 12, y: 12, width: 160, height: 16, color: 0x990000, value: 1});

        this.sceneGame.events.on("onPlayerHealthChanged", (health: number, maxHealth: number)=> {
            this.healthBar.setValue(health / maxHealth);
        }, this);
    }

    private createBulletBar() : void
    {
        // Bar
        let bulletBarX = this.healthBar.x;
        let bulletBarY = this.healthBar.y + this.healthBar.height;

        this.bulletBar = new CYBR_BulletBar(this, { x: bulletBarX, y: bulletBarY, width: 160, height: 12, color: 0x005544, value: 0 });

        this.sceneGame.events.on("onShotsChanged", (shots: number, fireLimit: number)=> {
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
        
        this.sceneGame.events.on("onCollectedTokenChanged", (collectedTokens)=> {
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
        
        this.sceneGame.events.on("onPlayerRemainLifeChanged", (remainLife: integer)=> {
            lifeText.text = Math.max(0, remainLife).toString();
        }, this);

        return new Map<string, Phaser.GameObjects.GameObject>().set("image", lifeImage).set("text", lifeText);
    }

    private createGameOverScreen() : void
    {
        let gameOverText = this.add.text(0, 0, "GAME OVER", { font: '54px Arial', color: '#000000' });
        gameOverText.visible = false;
        this.centerItem(gameOverText);

        this.sceneGame.events.on("onGameOverChanged", (gameOver: boolean)=> {
            gameOverText.visible = gameOver;
        }, this);
    }

    private createChrono() : Phaser.GameObjects.Text
    {
        let sceneWidth = this.scale.displaySize.width;
        return this.add.text(sceneWidth - 100, 16, "00:00:00", { font: '20px Arial', color: '#000000' });
    }

    // Update
    ////////////////////////////////////////////////////////////////////////

    public update(time: number, delta: number) : void
    {
        super.update(time, delta);

        this.elapsedTime += delta;
        this.chronoText.text = CYBR_Scene.formatTime(this.elapsedTime);
    }
}