import { Player } from "Pawns/Player";
import { CST } from "../CST";
import { CYBR_Scene } from "./CYBR_Scene";
import { SceneGame } from "./SceneGame";

export class SceneGame_UI extends CYBR_Scene
{
    private sceneGame: SceneGame;
    private player: Player;

    // UI Items
    private healthBar: Phaser.GameObjects.Graphics;
    private tokenScoreItem: Map<string, Phaser.GameObjects.GameObject>;
    private lifeItem: Map<string, Phaser.GameObjects.GameObject>;

    constructor()
    {
        super({key: CST.SCENES.GAME_UI});
    }

    // Init
    ////////////////////////////////////////////////////////////////////////
   
    init(sceneGame: SceneGame)
    { 
        this.sceneGame = sceneGame;
        this.player = sceneGame.player;
    }

    // Preload
    ////////////////////////////////////////////////////////////////////////
  
    preload()
    {
        this.loadSprites();
        this.loadImages();
    }

    loadSprites()
    {
        this.load.setPath("./assets/sprite");
        this.load.spritesheet("eyeball", "eyeball.png", { frameWidth: 32, frameHeight: 38 });
    }

    loadImages()
    {
        this.load.setPath("./assets/image");
        this.load.image("token", "token_48.png");
    }

    // Create
    ////////////////////////////////////////////////////////////////////////

    create()
    {
        this.healthBar = this.createHealthBar();
        this.tokenScoreItem = this.createTokenScoreItem();
        this.lifeItem = this.createLifeItem();
        this.createGameOverScreen();
    }

    createHealthBar()
    {
        let healthBar = this.add.graphics({ x: 12, y: 12 });

        // TODO: use width and height
        //healthBar.width = 160;
        //healthBar.height = 16;
        healthBar.fillStyle(0x990000);
        healthBar.fillRect(0, 0, 160, 16/*healthBar.width, healthBar.height*/);
        
        this.sceneGame.events.on("playerHealthChanged", (health)=> {
            let width = 160/*healthBar.width*/ * health.getCurrentValue() / this.player.getMaxHealth();
            let height = 16/*healthBar.height*/;

            healthBar.clear();
            healthBar.fillStyle(0x990000);
            healthBar.fillRect(0, 0, width, height);
        }, this);

        return healthBar;
    }

    createTokenScoreItem()
    {
        // Image
        let tokenImageX = this.healthBar.x;
        let tokenImageY = this.healthBar.y + 16/*this.healthBar.height*/ + 8;

        let tokenImage = this.add.image(tokenImageX, tokenImageY, "token").setScale(1);
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
    createLifeItem()
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
    
        let lifeText = this.add.text(textX, textY, this.sceneGame.getRemainLife().toString(), { font: '18px Arial', color: '#000000' });
        lifeText.x -= lifeText.width / 2;
        lifeText.y -= lifeText.height / 2;
        
        this.sceneGame.events.on("onPlayerRemainLifeChanged", (remainLife)=> {
            lifeText.text = Math.max(0, remainLife).toString();
        }, this);

        return new Map<string, Phaser.GameObjects.GameObject>().set("image", lifeImage).set("text", lifeText);
    }

    createGameOverScreen()
    {
        let gameOverText = this.add.text(0, 0, "GAME OVER", { font: '54px Arial', color: '#000000' });
        gameOverText.visible = false;
        this.centerItem(gameOverText);

        this.sceneGame.events.on("onGameOverChanged", (gameOver)=> {
            gameOverText.visible = gameOver;
        }, this);
    }

    // Update
    ////////////////////////////////////////////////////////////////////////

    update(time: number, delta: number)
    {
        super.update(time, delta);
    }

    // Player
    ////////////////////////////////////////////////////////////////////////
}