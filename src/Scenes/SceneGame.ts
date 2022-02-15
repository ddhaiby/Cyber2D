import { CST } from "../CST";
import { CYBR_Scene } from "./CYBR_Scene";
import {SceneGame_UI} from "./SceneGame_UI";
import {SceneGameMenu_UI} from "./SceneGameMenu_UI";

import { Pawn } from "../Pawns/Pawn";
import {BasicAI} from "../Pawns/AIs/BasicAI";
import {Player} from "../Pawns/Player";

import {CYBR_Weapon} from "../Weapons/CYBR_Weapon";
import {Bullet} from "phaser3-weapon-plugin";
import { Token } from "../Tokens/Token";
import { Portal } from "../Portals/Portal";

export class SceneGame extends CYBR_Scene
{
	// TODO: Probably can use tileLayers for tokens and portals. See once we restart the scene on level clear
    // Map
    private currentMap: Phaser.Tilemaps.Tilemap;
    private platforms: Phaser.Tilemaps.TilemapLayer;
    private portals: Phaser.Physics.Arcade.StaticGroup;
    private backgrounds: Phaser.Physics.Arcade.StaticGroup;
    private tokens: Phaser.Physics.Arcade.StaticGroup;

    // Pawns
    public player: Player;
    private enemies: Phaser.Physics.Arcade.StaticGroup;

    // GameMode
    // private currentMode
    private playerStartPosition: Phaser.Math.Vector2; // TODO: Make it belong to GameMode unless I can easily get player start position from the map
    private collectedTokens: integer;
    private remainLife: integer;
    private deadZoneY: number;
    private gameOver: boolean;

    public currentLevel: integer;

    private keysPlayer: object;

    constructor()
    {
        super({key: CST.SCENES.GAME});
    }

    // Init
    ////////////////////////////////////////////////////////////////////////

	// Todo: Probably store the currentLevel here. So I can load the right level
    init()
    {
        this.physics.world.setBounds(0, 0, 1920 * 6, 1080);
    }

    // Preload
    ////////////////////////////////////////////////////////////////////////

    preload()
    {
        this.loadMaps();
        this.loadAudio();
        this.loadSprites();
        this.loadImages();
    }

    loadMaps()
    {
        this.load.setPath("./assets/maps");
        this.load.image("terrain", "./terrain_atlas.png");

        for (let i=1; i<= CST.LEVELS.LEVEL_COUNT; ++i)
        {
            const levelName = "level" + i.toString();
            this.load.tilemapTiledJSON(levelName, "./" + levelName + "/" + levelName + ".json");
        }
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

    // Create
    ////////////////////////////////////////////////////////////////////////
  
    create()
    {
        this.createKeyboardMap();

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

    startLevel(level: integer)
    {
        console.log("Level", level, "started");

        this.createGameMode(level);
        this.createBackground();
        this.createMap(level);
        this.createPlatforms();
        this.createPortals();
        this.createTokens();
        this.createPlayer();
        this.createEnemies();
        this.createInteractions();
        this.createCameras();
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
        this.playerStartPosition= new Phaser.Math.Vector2(100, 290); // TODO: Should be based on the map
        this.deadZoneY = 1200; // TODO: Should be based on the map. Perhaps have a special object for that ?
        this.setRemainLife(0);
        this.setCollectedTokens(0);
    }

    createBackground()
    {
        this.backgrounds.clear(true, true)
        this.backgrounds.add(this.add.image(0, 0, "sky").setScale(12));
    }

    createMap(level?: integer)
    {
        // TODO: Should I destroy before ?
        //if (this.currentMap)
        //    this.currentMap.destroy();

        console.log("Create map...");
        this.currentMap = this.add.tilemap("level" + level.toString());
    }

    createPlatforms()
    {
        // TODO: Should I destroy before ?
        //if (this.platforms)
        //    this.platforms.destroy();

        console.log("Create platforms...");
        const terrain = this.currentMap.addTilesetImage("terrain_atlas", "terrain");
        this.platforms = this.currentMap.createLayer("Platforms", [terrain], 0, 0);
    }

    createPortals()
    {
        this.portals.clear(true, true);

        // @ts-ignore - Problem with Phaser’s types. classType supports classes 
        const portalObjects = this.currentMap.createFromObjects("Portals", {name: "Portal", classType: Portal});
        portalObjects.map((portal: Portal)=>{
            portal.setTexture("portal");
            this.portals.add(portal);
        });
    }

    createTokens()
    {
        this.tokens.clear(true, true);

        // @ts-ignore - Problem with Phaser’s types. classType supports classes 
        const tokenObjects = this.currentMap.createFromObjects("Tokens", {name: "Token", classType: Token});
        tokenObjects.map((token: Token)=>{
            token.setTexture("token");
            this.tokens.add(token);
        });
    }

    createPlayer()
    {
        if (this.player)
        {
            this.player.unequipWeapon(true);
            this.player.destroy();
        }

        this.player = new Player(this, this.playerStartPosition.x, this.playerStartPosition.y, "eyeball", this.keysPlayer);
        this.respawnPlayer();

        this.player.on("healthChanged", this.onPlayerHealthChanged.bind(this));
        this.player.on("die", this.onPlayerDie.bind(this));

        let weapon = new CYBR_Weapon(this, 30, "bullet");
        this.player.equipWeapon(weapon);
    }

    createEnemies()
    {
        this.enemies.clear(true, true);

        // @ts-ignore - Problem with Phaser’s types. classType supports classes 
        const enemyObjects = this.currentMap.createFromObjects("Enemies", {name: "BasicAI", classType: BasicAI});
        
        enemyObjects.map((ai: BasicAI)=>{
            ai.init(this, "eyeball");
            this.enemies.add(ai);
        })

        this.enemies.getChildren().forEach(function (ai: BasicAI) {
            ai.startPosition = new Phaser.Math.Vector2(ai.x, ai.y); // TODO: See if there is another way
            ai.on("die", this.onEnemyDie.bind(this, ai));
        }, this);
    }

    createInteractions()
    {
        this.platforms.setCollisionByProperty({collides:true});
        this.physics.add.collider(this.enemies, this.platforms);
        this.physics.add.collider(this.player, this.platforms);
        this.physics.add.overlap(this.player, this.portals, this.completeLevel, null, this);
        this.physics.add.overlap(this.player, this.tokens, this.collectToken, null, this);

        if (this.player.currentWeapon)
        {
            let collider = this.physics.add.collider(this.player.currentWeapon.bullets, this.platforms, this.onWeaponHitPlatforms.bind(this));
            this.player.currentWeapon.addCollider(collider);
        }

        this.enemies.getChildren().forEach(function (ai: BasicAI) {
            this.physics.add.overlap(this.player, ai, this.onPlayerOverlapEnnemy.bind(this), this.canPlayerOverlapEnnemy.bind(this)); 
            let collider = this.physics.add.overlap(this.player.currentWeapon.bullets, ai, this.onWeaponHitEnnemy.bind(this), this.canHitEnemy.bind(this, ai)); 
            this.player.currentWeapon.addCollider(collider);
        }, this);
    }

    createCameras()
    {
        this.cameras.main.setBounds(0, 0, 20000, 1080);
        this.cameras.main.startFollow(this.player);
    }

    restartTokens()
    {
        this.setCollectedTokens(0); // TODO: For gameMode

        this.tokens.getChildren().forEach(function (token: Token) {
            token.enableBody(true, token.x, token.y, true, true);
        }, this);
    }

    restartAIs()
    {
        this.enemies.getChildren().forEach(function (ai: BasicAI) {
            ai.enableBody(true, ai.startPosition.x, ai.startPosition.y, true, true);
            ai.setHealth(ai.getMaxHealth());
        }, this);
    }

    createUI()
    {
        this.scene.add(CST.SCENES.GAME_UI, SceneGame_UI, true, this);
        this.scene.add(CST.SCENES.GAMEMENU_UI, SceneGameMenu_UI, true, this);
        
        this.showGameMenu(false);
    }

    showMainMenu(value: boolean)
    {
        this.scene.setActive(value, CST.SCENES.MAINMENU_UI);
        this.scene.setVisible(value, CST.SCENES.MAINMENU_UI);
    }

    showGameUI(value: boolean)
    {
        this.scene.setActive(value, CST.SCENES.GAME_UI);
        this.scene.setVisible(value, CST.SCENES.GAME_UI);
    }

    showGameMenu(value: boolean)
    {
        this.scene.setActive(value, CST.SCENES.GAMEMENU_UI);
        this.scene.setVisible(value, CST.SCENES.GAMEMENU_UI);
        
        if (value)
            this.scene.pause();
    }

    showGame(value: boolean)
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

    canHitEnemy(enemy: Pawn)
    {
        return !enemy.dead();
    }

    onWeaponHitEnnemy(bullet: Bullet, enemy: Pawn)
    {
        enemy.hurt(35);
        bullet.kill();
    }

    onWeaponHitPlatforms(bullet: Bullet, platform: Phaser.Tilemaps.TilemapLayer)
    {
        bullet.active = false;
        bullet.visible = false;
        bullet.kill();
    }

    onEnemyDie(enemy: Pawn)
    {
        this.time.delayedCall(800, ()=>{ enemy.disableBody(true, true); }, null, this);
    }

    // Player
    ////////////////////////////////////////////////////////////////////////

    canPlayerOverlapEnnemy(player: Player, enemy: Pawn)
    {
        return !player.dead() && !enemy.dead();
    }

    onPlayerOverlapEnnemy(player: Player, enemy: Pawn)
    {
        if (!player.overlapped)
        {
            this.player.onOverlapBegin(enemy);
            this.player.hurt(35);
        }
        else
            this.player.onOverlapContinue(enemy);
    }

    onPlayerHealthChanged(health: number, maxHealth: number)
    {
        this.events.emit("onPlayerHealthChanged", health, maxHealth);
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

    collectToken(player: Player, token: Token)
    {
        token.disableBody(true, true)
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

    setGameOver(gameOver: boolean)
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

    setRemainLife(remainLife: integer)
    {
        this.remainLife = remainLife;
        this.events.emit("onPlayerRemainLifeChanged", this.remainLife);
        this.setGameOver(remainLife < 0); // TODO game over tests should be part of a game mode
    }
}