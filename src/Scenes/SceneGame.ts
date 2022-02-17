import { CST } from "../CST";
import { CYBR_Scene } from "./CYBR_Scene";
import { SceneData } from "./CYBR_Scene";
import {SceneGame_UI} from "./SceneGame_UI";
import {SceneGameMenu_UI} from "./SceneGameMenu_UI";

import { Pawn } from "../Pawns/Pawn";
import {BasicAI} from "../Pawns/AIs/BasicAI";
import {IPlayerKeys, Player} from "../Pawns/Player";

import {CYBR_Weapon} from "../Weapons/CYBR_Weapon";
import {Bullet} from "phaser3-weapon-plugin";
import { Token } from "../Tokens/Token";
import { EffectPickup } from "../Pickups/EffectPickup"
import { HealPickup } from "../Pickups/HealPickup"
import { WeaponBoostPickup } from "../Pickups/WeaponBoostPickup"
import { Portal } from "../Portals/Portal";

export class SceneGame extends CYBR_Scene
{
    // Map
    private currentMap: Phaser.Tilemaps.Tilemap;
    private platforms: Phaser.Tilemaps.TilemapLayer;
    private portals: Phaser.Physics.Arcade.StaticGroup;
    private backgrounds: Phaser.Physics.Arcade.StaticGroup;
    private tokens: Phaser.Physics.Arcade.StaticGroup;
    private pickupItems: Phaser.Physics.Arcade.StaticGroup;

    // Pawns
    public player: Player;
    private enemies: Phaser.Physics.Arcade.StaticGroup;

    // GameMode
    private spawnPositions: Phaser.Structs.Map<string, Phaser.Math.Vector2>;
    private collectedTokens: integer;
    private remainLife: integer;
    private deadZoneY: number;
    private gameOver: boolean;

    public currentLevel: integer;

    private keysPlayer: IPlayerKeys;

    constructor()
    {
        super({key: CST.SCENES.GAME});
    }

    // Init
    ////////////////////////////////////////////////////////////////////////

    init(data?: SceneData)
    {
        this.currentLevel = data && data.level ? data.level : 1;
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
        this.spawnPositions = new Phaser.Structs.Map([]);
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
        }) as IPlayerKeys;
    }

    startLevel()
    {
        this.createGameMode();
        this.createMap();
        this.createBackground();
        this.createPlatforms();
        this.createPortals();
        this.createTokens();
        this.createPickupItems();
        this.createKeyboardMap();
        this.createPlayer();
        this.createEnemies();
        this.createInteractions();
        this.createCameras();
    }

    restartLevel()
    {
        this.restartTokens();
        this.restartPickupItems();
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
        this.setRemainLife(0);
        this.setCollectedTokens(0);
    }

    createMap()
    {
        this.currentMap = this.add.tilemap("level" + this.currentLevel.toString());
    }

    createBackground()
    {
        this.backgrounds = this.physics.add.staticGroup();
        this.backgrounds.add(this.add.image(0, 0, "sky").setScale(12));

        const terrain = this.currentMap.addTilesetImage("terrain_atlas", "terrain");
        this.platforms = this.currentMap.createLayer("Background", [terrain], 0, 0);
    }

    createPlatforms()
    {
        const terrain = this.currentMap.addTilesetImage("terrain_atlas", "terrain");
        this.platforms = this.currentMap.createLayer("Platforms", [terrain], 0, 0);

        const platformsBounds = this.platforms.getBounds();
        this.physics.world.setBounds(0, 0, platformsBounds.width - platformsBounds.x, platformsBounds.height - platformsBounds.y);
        this.deadZoneY = platformsBounds.height - platformsBounds.y;
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

    createPickupItems()
    {
        this.pickupItems = this.physics.add.staticGroup();

        // @ts-ignore - Problem with Phaser’s types. classType supports classes 
        const healObjects = this.currentMap.createFromObjects("Pickups", {name: "Heal", classType: HealPickup});
        healObjects.map((pickup: HealPickup)=>{
            pickup.setTexture("healItem_48");
            pickup.setValue(Number(pickup.data.list["value"]));
            this.pickupItems.add(pickup);
        });

        // @ts-ignore - Problem with Phaser’s types. classType supports classes 
        const weaponBoostObjects = this.currentMap.createFromObjects("Pickups", {name: "WeaponBoost", classType: WeaponBoostPickup});
        weaponBoostObjects.map((boost: WeaponBoostPickup)=>{
            boost.init(this);
            boost.setTexture("weaponBoost_48");
            this.pickupItems.add(boost);
        });
    }

    createPlayer()
    {
        // @ts-ignore - Problem with Phaser’s types. classType supports classes 
        const playerObjects = this.currentMap.createFromObjects("Player", {name: "Player", classType: Player});

        // For this game, there should be exactly one player.
        this.player = playerObjects[0] as Player;
        this.player.init(this, "eyeball", this.keysPlayer);

        this.player.on("healthChanged", this.onPlayerHealthChanged.bind(this));
        this.player.on("die", this.onPlayerDie.bind(this));

        let weapon = new CYBR_Weapon(this, 30, "bullet");
        this.player.equipWeapon(weapon);

        this.player.setName(this.generateUniqueName(this.player));
        this.spawnPositions.set(this.player.name, new Phaser.Math.Vector2(this.player.x, this.player.y));
    }

    createEnemies()
    {
        this.enemies = this.physics.add.staticGroup();

        // @ts-ignore - Problem with Phaser’s types. classType supports classes 
        const enemyObjects = this.currentMap.createFromObjects("Enemies", {name: "BasicAI", classType: BasicAI});

        enemyObjects.map((ai: BasicAI)=>{ this.enemies.add(ai); });

        this.enemies.getChildren().forEach(function (ai: BasicAI) {
            ai.init(this, "eyeball");
            ai.on("die", this.onEnemyDie.bind(this, ai));
            ai.setName(this.generateUniqueName(ai));

            this.spawnPositions.set(ai.name, new Phaser.Math.Vector2(ai.x, ai.y));
        }, this);
    }

    createInteractions()
    {
        this.platforms.setCollisionByProperty({collides:true});
        this.physics.add.collider(this.enemies, this.platforms);
        this.physics.add.collider(this.player, this.platforms);
        this.physics.add.overlap(this.player, this.portals, this.completeLevel, null, this);
        this.physics.add.overlap(this.player, this.tokens, this.collectToken, null, this);
        this.physics.add.overlap(this.player, this.pickupItems, this.applyEffectOnPlayer, null, this);

        if (this.player.currentWeapon)
            this.physics.add.collider(this.player.currentWeapon.bullets, this.platforms, this.onWeaponHitPlatforms.bind(this));

        this.enemies.getChildren().forEach(function (ai: BasicAI) {
            this.physics.add.overlap(this.player, ai, this.onPlayerOverlapEnnemy.bind(this), this.canPlayerOverlapEnnemy.bind(this)); 
            this.physics.add.overlap(this.player.currentWeapon.bullets, ai, this.onWeaponHitEnnemy.bind(this), this.canHitEnemy.bind(this, ai)); 
        }, this);
    }

    createCameras()
    {
        const platformsBounds = this.platforms.getBounds();
        this.cameras.main.setBounds(0, 0, platformsBounds.width - platformsBounds.x, platformsBounds.height - platformsBounds.y);
        this.cameras.main.startFollow(this.player);
    }

    restartTokens()
    {
        this.setCollectedTokens(0); // TODO: For gameMode

        this.tokens.getChildren().forEach(function (token: Token) {
            token.enableBody(true, token.x, token.y, true, true);
        }, this);
    }

    restartPickupItems()
    {
        this.pickupItems.getChildren().forEach(function (pickup: EffectPickup) {
            pickup.enableBody(true, pickup.x, pickup.y, true, true);
        }, this);
    }

    restartAIs()
    {
        this.enemies.getChildren().forEach(function (ai: BasicAI) {
            this.respawnPawn(ai);
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
        // TODO: Use WOLRD_BOUNDS callback: https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Arcade.Events.html#event:WORLD_BOUNDS__anchor
        // It exists on js but I don't see it on ts...
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
        token.disableBody(true, true);
        this.setCollectedTokens(this.getCollectedTokens() + 1);
    }

    applyEffectOnPlayer(player: Player, pickup: EffectPickup)
    {
        pickup.disableBody(true, true);
        pickup.applyEffect(this.player);
    }

    respawnPlayer()
    {
        this.respawnPawn(this.player);
    }

    respawnPawn(pawn: Pawn)
    {
        const pawnPosition = this.spawnPositions.get(pawn.name);
        pawn.enableBody(true, pawnPosition.x, pawnPosition.y, true, true);
        pawn.setHealth(pawn.getMaxHealth());
        pawn.setVelocity(0,0);
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