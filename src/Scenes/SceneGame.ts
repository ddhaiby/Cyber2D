import { CST } from "../CST";
import { CYBR_Scene } from "./CYBR_Scene";
import {SceneGame_UI} from "./SceneGame_UI";
import {SceneGameMenu_UI} from "./SceneGameMenu_UI";

import {BasicAI} from "../Pawns/AIs/BasicAI";
import {Player} from "../Pawns/Player";

import {CYBR_Weapon} from "../Weapons/CYBR_Weapon";
import {Bullet} from "phaser3-weapon-plugin";

export class SceneGame extends CYBR_Scene
{
    private player: Player;
    private enemies: Phaser.Physics.Arcade.StaticGroup;
    private platforms: Phaser.Physics.Arcade.StaticGroup;
    private movingPlatforms: Phaser.Physics.Arcade.StaticGroup;
    private backgrounds: Phaser.Physics.Arcade.StaticGroup;
    private tokens: Phaser.Physics.Arcade.StaticGroup;
    private portals: Phaser.Physics.Arcade.StaticGroup;
    
    private collectedTokens: integer;
    private remainLife: integer;
    private deadZoneY: number;
    
    private gameOver: boolean;
    private playerStartPosition: Phaser.Math.Vector2;
    public currentLevel: integer;

    private keysPlayer: object;

    constructor()
    {
        super({key: CST.SCENES.GAME});
    }

    // Init
    ////////////////////////////////////////////////////////////////////////
   
    init()
    {
        this.physics.world.setBounds(0, 0, 1920 * 6, 1080);
    }

    // Preload
    ////////////////////////////////////////////////////////////////////////
  
    preload()
    {
        this.loadAudio();
        this.loadSprites();
        this.loadImages();
        this.loadLevelData();
    }

    loadImages()
    {
        this.load.setPath("./assets/image");
        this.load.image("sky", "sky.png");
        this.load.image("ground", "platform.png");
        this.load.image("bullet", "bullet.png");
        this.load.image("token", "token_24.png");
        this.load.image("portal", "star.png");

        //for (let prop in CST.IMAGE) {
        //    this.load.image(CST.IMAGE[prop], CST.IMAGE[prop]);
        //}
    }

    loadAudio()
    {
        this.load.setPath("./assets/audio");
        //this.load.audio("shuinvy-childhood.mp3", "shuinvy-childhood.mp3");
    }

    loadSprites()
    {
        this.load.setPath("./assets/sprite");
        this.load.spritesheet("eyeball", "eyeball.png", { frameWidth: 32, frameHeight: 38 });
        this.load.spritesheet("anna", "anna.png", { frameWidth: 40, frameHeight: 60 });

        //for (let prop in CST.SPRITE) {
        //    this.load.spritesheet(CST.SPRITE[prop], CST.SPRITE[prop], frameConfig);
        //}
    }

    loadLevelData()
    {
        //this.load.json("LevelData", "./assets/levels.json");
    }

    // Create
    ////////////////////////////////////////////////////////////////////////
  
    create()
    {
        this.createKeyboardMap();

        this.platforms = this.physics.add.staticGroup();
        this.backgrounds = this.physics.add.staticGroup();
        this.enemies = this.physics.add.staticGroup();
        this.tokens = this.physics.add.staticGroup();
        this.portals = this.physics.add.staticGroup();

        this.currentLevel = 1;
        this.startLevel(this.currentLevel);
        this.createUI();
    }

    createKeyboardMap()
    {
        let keyESC = this.input.keyboard.addKey('ESC');
        keyESC.on('down', function(event){ this.showGameMenu(true); }, this)

        this.keysPlayer = this.input.keyboard.addKeys({
            up: 'Z',
            down: 'S',
            left: 'Q',
            right: 'D',
            jump: 'SPACE',
            fire: 'K'
        });
    }

    startLevel(level)
    {
        console.log("Level", level, "started");

        this.createGameMode(level);
        this.createBackground(level);
        this.createPlatforms(level);
        this.createPortals(level);
        this.createTokens(level);
        this.createPlayer(level);
        this.createAIs(level);
        this.createCameras(level);
    }

    restartLevel()
    {
        this.restartTokens();
        this.restartAIs();
        this.setRemainLife(0); // TODO: Call GameMode.restart() or something
        this.respawnPlayer();
    }

    createGameMode(level?: integer)
    {
        this.playerStartPosition= new Phaser.Math.Vector2(100, 360);
        this.setRemainLife(0);
        this.setCollectedTokens(0);
    }

    createBackground(level?: integer)
    {
        this.backgrounds.clear(true, true)

        this.add.image(0, 0, "sky").setScale(12);
        this.add.text(780, 100, "WELCOME TO CYBR WORLD", { font: '30px Gemunu Libre', color: '#000000' });
    }

    createPlatforms(level?: integer)
    {
        this.deadZoneY = 1200;

        this.platforms.clear(true, true);
        //let levelData = this.cache.json.get('LevelData');
        //console.log(levelData);

        // Zone 1
        this.platforms.create(0, 400, 'ground').setScale(0.1,30).refreshBody();
        this.platforms.create(0, 400, 'ground').setScale(3.5,1).refreshBody();
        this.platforms.create(600, 352, 'ground').setScale(1,4).refreshBody();
        this.platforms.create(1280, 450, 'ground').setScale(1,4).refreshBody();
        this.platforms.create(1680, 498, 'ground').setScale(1,1).refreshBody();

        // Zone 2: Several platform at the same time
        this.platforms.create(2100, 390, 'ground').setScale(0.5,1).refreshBody();
        this.platforms.create(2100, 590, 'ground').setScale(0.5,1).refreshBody();
        
        this.platforms.create(3080, 490, 'ground').setScale(4,1).refreshBody();

        this.platforms.create(4000, 400, 'ground').setScale(0.1,30).refreshBody();

        // this.platforms.create(950, 300, 'ground');
        // this.platforms.create(1200, 568, 'ground').setScale(2).refreshBody();
        // this.platforms.create(1300, 450, 'ground');
        // this.platforms.create(1500, 270, 'ground');
        // this.platforms.create(1900, 360, 'ground');
        // this.platforms.create(2100, 480, 'ground').setScale(2).refreshBody();
        // this.platforms.create(2420, 360, 'ground');
        // this.platforms.create(2920, 360, 'ground');
        // this.platforms.create(3120, 160, 'ground');

        // this.platforms.create(3120, 360, 'ground');
        // this.platforms.create(2920, 260, 'ground');

        //this.movingPlatforms = this.physics.add.staticGroup();
        //this.movingPlatforms.create(150, 350, 'ground');

        // TODO: See how to move these platforms...
        //console.log(this.movingPlatforms.children.getArray()[0])
        //this.movingPlatforms.children.getArray()[0].setVelocityY(-10)
    }

    createPortals(level?: integer)
    {
        this.portals.clear(true, true);
        this.portals.create(3530, 420, 'portal');
    }

    createTokens(level?: integer)
    {
        this.tokens.clear(true, true);

        this.tokens.createMultiple({
            key: "token", /*quantity*/repeat: 4,
            setXY: { x: 440, y: 260, stepX: 80 },
        });

        this.tokens.createMultiple({
            key: "token", repeat: 3,
            setXY: { x: 1220, y: 360, stepX: 80 },
        });

        this.tokens.createMultiple({
            key: "token", repeat: 3, // allowGravity: false
            setXY: { x: 1140, y: 240, stepY: 40 },
           
        });

        // this.tokens.add({
        //     key: "token",
        //     repeat: 4,
        //     setXY: { x: 440, y: 200, stepX: 80 },
        //     allowGravity: false
        // })
    }

    restartTokens()
    {
        this.setCollectedTokens(0);
        this.tokens.getChildren().forEach(function (token: Phaser.Physics.Arcade.Sprite) {
            token.enableBody(true, token.x, token.y, true, true);
        }, this);
    }

    createPlayer(level?: integer)
    {
        if (this.player)
        {            
            this.player.unequipWeapon(true);
            this.player.destroy();
        }

        this.player = new Player(this, this.playerStartPosition.x, this.playerStartPosition.y, "eyeball", this.keysPlayer);
        this.physics.add.collider(this.player, this.platforms);

        this.player.on("healthChanged", this.onPlayerHealthChanged.bind(this));
        this.player.on("die", this.onPlayerDie.bind(this));

        this.physics.add.overlap(this.player, this.tokens, this.collectToken, null, this);

        let weapon = new CYBR_Weapon(this, 30, "bullet");
        this.player.equipWeapon(weapon);

        let collider = this.physics.add.collider(weapon.bullets, this.platforms, this.onWeaponHitPlatforms.bind(this));
        this.player.currentWeapon.addCollider(collider);

        this.physics.add.overlap(this.player, this.portals, this.completeLevel, null, this);
    }

    createAIs(level?: integer)
    {
        this.enemies.clear(true, true);

        this.enemies.add(new BasicAI(this, 200, 360, "eyeball"));

        // Zone 1
        this.enemies.add(new BasicAI(this, 1490, 452, "eyeball"));

        // Zone 2
        this.enemies.add(new BasicAI(this, 3080, 420, "eyeball"));
        this.enemies.add(new BasicAI(this, 3280, 420, "eyeball"));
        this.enemies.add(new BasicAI(this, 3480, 420, "eyeball"));
        
        // TODO: Position of the enemies could be based on the platform.
        // this.enemies.add(new BasicAI(this, 1050, 490, "eyeball"));
        // this.enemies.add(new BasicAI(this, 1160, 490, "eyeball"));
        
        // this.enemies.add(new BasicAI(this, 1200, 400, "eyeball"));
        // this.enemies.add(new BasicAI(this, 1260, 400, "eyeball"));
        // this.enemies.add(new BasicAI(this, 1220, 400, "eyeball"));

        this.physics.add.collider(this.enemies, this.platforms);

        this.enemies.getChildren().forEach(function (ai: BasicAI) {
            ai.startPosition = new Phaser.Math.Vector2(ai.x, ai.y);
            this.physics.add.overlap(this.player, ai, this.onPlayerOverlapEnnemy.bind(this), this.canPlayerOverlapEnnemy.bind(this)); 
            let collider = this.physics.add.overlap(this.player.currentWeapon.bullets, ai, this.onWeaponHitEnnemy.bind(this), this.canHitEnemy.bind(this, ai)); 
            this.player.currentWeapon.addCollider(collider);

            ai.on("die", this.onEnemyDie.bind(this, ai));
        }, this);
    }

    restartAIs()
    {
        this.enemies.getChildren().forEach(function (ai: BasicAI) {
            ai.enableBody(true, ai.startPosition.x, ai.startPosition.y, true, true);
            ai.setHealth(ai.getMaxHealth());
        }, this);
    }

    createCameras(level?: integer)
    {
        //this.cameras.main.setBounds(0, 0, this.physics.world, this.worldHeight);
        this.cameras.main.startFollow(this.player);
    }

    createUI()
    {
        this.scene.add(CST.SCENES.GAME_UI, SceneGame_UI, true, this);
        this.scene.add(CST.SCENES.GAMEMENU_UI, SceneGameMenu_UI, true, this);
        
        this.showGameMenu(false);
    }

    showMainMenu(value)
    {
        this.scene.setActive(value, CST.SCENES.MAINMENU_UI);
        this.scene.setVisible(value, CST.SCENES.MAINMENU_UI);
    }

    showGameUI(value)
    {
        this.scene.setActive(value, CST.SCENES.GAME_UI);
        this.scene.setVisible(value, CST.SCENES.GAME_UI);
    }

    showGameMenu(value)
    {
        this.scene.setActive(value, CST.SCENES.GAMEMENU_UI);
        this.scene.setVisible(value, CST.SCENES.GAMEMENU_UI);
        
        if (value)
            this.scene.pause();
    }

    showGame(value)
    {
        this.scene.setActive(value, CST.SCENES.GAME);
        this.scene.setVisible(value, CST.SCENES.GAME);
        this.showGameUI(value);
    }

    // Update
    ////////////////////////////////////////////////////////////////////////

    update(time: number, delta: number)
    {
        super.update(time, delta);

        // TODO: Find a cleaner way (is there a trigger box with Phaser?) - Probably add this to gameMode
        if (this.player.y > this.deadZoneY && !this.player.dead())
            this.player.setHealth(0);

        this.player.update();
        this.enemies.getChildren().forEach(ai => { ai.update(); }, this);
    }

    // Enemies
    ////////////////////////////////////////////////////////////////////////

    canHitEnemy(enemy)
    {
        return !enemy.dead();
    }

    onWeaponHitEnnemy(obj1, obj2)
    {
        let enemy, bullet;
        if (obj1 instanceof BasicAI)
        {
            enemy = obj1;
            bullet = obj2;
        }
        else
        {
            enemy = obj2;
            bullet = obj1;
        }

        enemy.hurt(35);
        bullet.kill();
    }

    onWeaponHitPlatforms(obj1, obj2)
    {
        let bullet = (obj1 instanceof Bullet) ? obj1 : obj2;

        bullet.active = false;
        bullet.visible = false;
        bullet.kill();
    }

    onEnemyDie(enemy)
    {
        this.time.delayedCall(800, ()=>{ enemy.disableBody(true, true); }, null, this);
    }

    // Player
    ////////////////////////////////////////////////////////////////////////

    canPlayerOverlapEnnemy(obj1, obj2)
    {
        let wasOverlapped = obj1.wasOverlapped || obj2.wasOverlapped;
        let dead = obj1.dead() || obj2.dead();
        return !wasOverlapped && !dead;
    }

    onPlayerOverlapEnnemy(obj1, obj2)
    {
        let other = (obj1 == this.player) ? obj2 : obj1;
        if (!this.player.overlapped)
        {
            this.player.onOverlapBegin(other);
            this.player.hurt(35);
        }
        else
            this.player.onOverlapContinue(other);
    }

    onPlayerHealthChanged(health)
    {
        this.events.emit("playerHealthChanged", health);
    }

    onPlayerDie()
    {
        // TODO: should a gameMode handle all of this ?
        this.setRemainLife(this.getRemainLife() - 1);

        if (!this.IsGameOver())
        {
            this.time.delayedCall(2000, () => {
                this.respawnPlayer();
                this.restartAIs();
            }, null, this);
        }
    }

    collectToken(obj1, obj2)
    {
        let token = (obj1 == this.player) ? obj2 : obj1;
        token.disableBody(true, true);

        this.setCollectedTokens(this.getCollectedTokens() + 1);
    }

    respawnPlayer()
    {
        this.player.setPosition(this.playerStartPosition.x, this.playerStartPosition.y);
        this.player.setHealth(this.player.getMaxHealth());
    }

    IsGameOver()
    {
        return this.gameOver;
    }

    setGameOver(gameOver)
    {
        this.gameOver = gameOver;
        
        if (this.gameOver)
        {
            this.time.delayedCall(2000, () => {
                this.showGameMenu(true);
            }, null, this);
        }

        this.events.emit("onGameOverChanged", gameOver);
    }

    completeLevel()
    {
        this.currentLevel += 1;
        this.startLevel(this.currentLevel);
    }

    getCollectedTokens()
    {
        return this.collectedTokens;
    }

    setCollectedTokens(tokens)
    {
        this.collectedTokens = tokens;
        this.events.emit("onCollectedTokenChanged", this.collectedTokens);
    }

    getRemainLife()
    {
        return this.remainLife;
    }

    setRemainLife(remainLife)
    {
        this.remainLife = remainLife;
        this.events.emit("onPlayerRemainLifeChanged", this.remainLife);
        this.setGameOver(remainLife < 0); // TODO game over tests should be part of a game mode
    }
}