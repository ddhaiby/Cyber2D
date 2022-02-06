import { CST } from "../CST.js";
import { CYBR_Scene } from "./CYBR_Scene.js";

export class SceneGame_UI extends CYBR_Scene
{
    constructor()
    {
        super({key: CST.SCENES.GAME_UI});

        this.sceneGame = null;
    }

    // Init
    ////////////////////////////////////////////////////////////////////////
   
    init(sceneGame)
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

    centerItem(item)
    {
        let sceneWidth = this.scale.displaySize.width;
        let sceneHeight = this.scale.displaySize.height;
    
        item.x = (sceneWidth - item.width) / 2; 
        item.y = (sceneHeight - item.height) / 2; 
    }

    createHealthBar()
    {
        let healthBar = this.add.graphics({ x: 12, y: 12 });

        healthBar.width = 160;
        healthBar.height = 16;
        healthBar.fillStyle(0x990000);
        healthBar.fillRect(0, 0, healthBar.width, healthBar.height);
        
        this.sceneGame.events.on("playerHealthChanged", (health)=> {
            let x = healthBar.x;
            let y = healthBar.y;
            let width = healthBar.width * health.getCurrentValue() / this.player.getMaxHealth();
            let height = healthBar.height;

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
        let tokenImageY = this.healthBar.y + this.healthBar.height + 8;

        let tokenImage = this.add.image(tokenImageX, tokenImageY, "token").setScale(1);
        tokenImage.x += tokenImage.width / 2;
        tokenImage.y += tokenImage.height / 2;

        // Text
        let textX = tokenImage.x + tokenImage.width;
        let textY = tokenImage.y + 1;
    
        let tokenText = this.add.text(textX, textY, "0", { font: '18px Arial', fill: '#000000' });
        tokenText.x -= tokenText.width / 2;
        tokenText.y -= tokenText.height / 2;
        
        this.sceneGame.events.on("onCollectedTokenChanged", (collectedTokens)=> {
            tokenText.text = collectedTokens;
        }, this);

        return new Map([[ "image", tokenImage ], [ "text", tokenText ]]);
    }

    // TODO: Review position
    createLifeItem()
    {
        // Image
        let lifeImageX = this.tokenScoreItem.get("image").x;
        let lifeImageY = this.tokenScoreItem.get("image").y + this.tokenScoreItem.get("image").height;

        let lifeImage = this.add.image(lifeImageX, lifeImageY, "eyeball", 9).setScale(1);
        lifeImage.y += lifeImage.height / 2;

        // Text
        let textX = lifeImage.x + lifeImage.width;
        let textY = lifeImage.y + 1;
    
        let lifeText = this.add.text(textX, textY, this.sceneGame.remainLife, { font: '18px Arial', fill: '#000000' });
        lifeText.x -= lifeText.width / 2;
        lifeText.y -= lifeText.height / 2;
        
        this.sceneGame.events.on("onPlayerRemainLifeChanged", (remainLife)=> {
            lifeText.text = Math.max(0, remainLife);
        }, this);

        return new Map([[ "image", lifeImage ], [ "text", lifeText ]]);
    }

    createGameOverScreen()
    {
        let gameOverText = this.add.text(0, 0, "GAME OVER", { font: '54px Arial', fill: '#000000' });
        gameOverText.visible = false;
        this.centerItem(gameOverText);

        this.sceneGame.events.on("onGameOverChanged", (gameOver)=> {
            gameOverText.visible = gameOver;
        }, this);
    }

    // Update
    ////////////////////////////////////////////////////////////////////////

    update() {}

    // Player
    ////////////////////////////////////////////////////////////////////////
}