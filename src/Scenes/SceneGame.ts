import { CST } from "../CST";
import { CYBR_Scene } from "./CYBR_Scene";
import { SceneData } from "./CYBR_Scene";
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

    init(data?: SceneData)
    {
        this.currentLevel = data && data.level ? data.level : 1;

        // TODO: See if I can set the bounds with the map
        this.physics.world.setBounds(0, 0, 1920 * 6, 1080);
    }

    // Preload
    ////////////////////////////////////////////////////////////////////////

    preload()
    {
        this.loadMap();
    }

    loadMap()
    {
        this.load.setPath("./assets/maps");
        this.load.image("terrain", "./terrain_atlas.png");

        const levelName = "level" + this.currentLevel.toString();
        this.load.tilemapTiledJSON(levelName, "./" + levelName + "/" + levelName + ".json");
    }

    // Create
    ////////////////////////////////////////////////////////////////////////

    create(data?: SceneData)
    {
        this.startLevel();
        this.createUI();
    }

    createKeyboardMap()
    {
        let keyESC = this.input.keyboard.addKey("ESC");
        keyESC.on("down", function(event){ this.showGameMenu(true); }, this)

        this.keysPlayer = this.input.keyboard.addKeys({
            up: "Z",
            down: "S",
            left: "Q",
            right: "D",
            jump: "SPACE",
            fire: "K"
        });
    }

    startLevel()
    {
        this.createGameMode();
        this.createBackground();
        this.createMap();
        this.createPlatforms();
        this.createPortals();
        this.createTokens();
        this.createKeyboardMap();
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

    startNextLevel()
    {
        if (this.currentLevel < CST.LEVELS.LEVEL_COUNT)
            this.scene.restart({level: this.currentLevel + 1});
        else
        {
            this.scene.pause(CST.SCENES.GAME);
            this.showGameMenu(true);
        }
    }

    createGameMode()
    {
        this.playerStartPosition= new Phaser.Math.Vector2(100, 290); // TODO: Should be based on the map
        this.deadZoneY = 1200; // TODO: Should be based on the map. Perhaps have a special object for that ?
        this.setRemainLife(0);
        this.setCollectedTokens(0);
    }

    createBackground()
    {
        this.backgrounds = this.physics.add.staticGroup();
        this.backgrounds.add(this.add.image(0, 0, "sky").setScale(12));
    }

    createMap()
    {
        this.currentMap = this.add.tilemap("level" + this.currentLevel.toString());
    }

    createPlatforms()
    {
        const terrain = this.currentMap.addTilesetImage("terrain_atlas", "terrain");
        this.platforms = this.currentMap.createLayer("Platforms", [terrain], 0, 0);
    }

    createPortals()
    {
        this.portals = this.physics.add.staticGroup();

        // @ts-ignore - Problem with Phaser’s types. classType supports classes 
        const portalObjects = this.currentMap.createFromObjects("Portals", {name: "Portal", classType: Portal});
        portalObjects.map((portal: Portal)=>{
            portal.setTexture("portal");
            this.portals.add(portal);
        });
    }

    createTokens()
    {
        this.tokens = this.physics.add.staticGroup();

        // @ts-ignore - Problem with Phaser’s types. classType supports classes 
        const tokenObjects = this.currentMap.createFromObjects("Tokens", {name: "Token", classType: Token});
        tokenObjects.map((token: Token)=>{
            token.setTexture("token_24");
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
        this.enemies = this.physics.add.staticGroup();

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
        if (!this.scene.get(CST.SCENES.GAME_UI))
            this.scene.add(CST.SCENES.GAME_UI, SceneGame_UI, true, this);

        if (!this.scene.get(CST.SCENES.GAMEMENU_UI))
            this.scene.add(CST.SCENES.GAMEMENU_UI, SceneGameMenu_UI, true, this);
        
        this.showGameMenu(false);
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
            this.showGame(true);
    }

    showGame(value: boolean)
    {
        this.scene.setActive(value, CST.SCENES.GAME);
        this.scene.setVisible(value, CST.SCENES.GAME);
        this.showGameUI(value);
    }

    showMainMenu(value: boolean)
    {
        this.showGame(false);
        this.showGameMenu(false);

        this.scene.setActive(value, CST.SCENES.MAINMENU_UI);
        this.scene.setVisible(value, CST.SCENES.MAINMENU_UI);
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

    completeLevel(player: Player, portal: Portal)
    {
        this.startNextLevel();
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