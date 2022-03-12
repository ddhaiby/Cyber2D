import { CST } from "../CST";
import { CYBR_Scene } from "./CYBR_Scene";
import { SceneData } from "./CYBR_Scene";
import {SceneGame_UI} from "./SceneGame_UI";
import {SceneGameMenu_UI} from "./SceneGameMenu_UI";

import { Pawn } from "../Pawns/Pawn";
import {PatrolAI} from "../Pawns/AIs/PatrolAI";
import {Player} from "../Pawns/Player";

import {CYBR_Weapon} from "../Weapons/CYBR_Weapon";
import {Bullet} from "phaser3-weapon-plugin";
import { Token } from "../Tokens/Token";
import { EffectPickup } from "../Pickups/EffectPickup"
import { HealPickup } from "../Pickups/HealPickup"
import { WeaponBoostPickup } from "../Pickups/WeaponBoostPickup"
import { Portal } from "../Platforms/Portal";

import { LadderManager } from "../Managers/LadderManager";
import { Ladder } from "../Platforms/Ladder";
import { AudioManager } from "../Managers/AudioManager";

export class SceneGame extends CYBR_Scene
{
    // Map
    private currentMap: Phaser.Tilemaps.Tilemap;
    private platforms: Phaser.Tilemaps.TilemapLayer;
    private portals: Phaser.Physics.Arcade.StaticGroup;
    private backgrounds: Phaser.Physics.Arcade.StaticGroup;
    private tokens: Phaser.Physics.Arcade.StaticGroup;
    private pickupItems: Phaser.Physics.Arcade.StaticGroup;

    // Managers
    private ladderManager: LadderManager;

    // Pawns
    public player: Player;
    private enemies: Phaser.Physics.Arcade.StaticGroup;

    // GameMode
    private spawnPositions: Phaser.Structs.Map<string, Phaser.Math.Vector2>;
    private collectedTokens: number;
    private remainLife: number;
    private deadZoneY: number;
    private gameOver: boolean;

    public currentLevel: number;

    constructor()
    {
        super({key: CST.SCENES.GAME});
    }

    // Init
    ////////////////////////////////////////////////////////////////////////

    public init(data?: SceneData) : void
    {
        this.currentLevel = data && data.level ? data.level : 1;
    }

    // Preload
    ////////////////////////////////////////////////////////////////////////

    public preload() : void
    {
        this.loadMap();
    }

    private loadMap() : void
    {
        this.load.setPath("./assets/maps");
        this.load.image("terrain", "./terrain_atlas.png");

        const levelName = "level" + this.currentLevel.toString();
        this.load.tilemapTiledJSON(levelName, "./" + levelName + "/" + levelName + ".json");
    }

    // Create
    ////////////////////////////////////////////////////////////////////////

    public create(data?: SceneData) : void
    {
        this.spawnPositions = new Phaser.Structs.Map([]);
        this.startLevel();
        this.events.emit("levelStarted", data.level);

        AudioManager.playMusic(CST.LEVELS[this.currentLevel - 1].MUSIC);
    }

    private createKeyboardMap() : void
    {
        let keyESC = this.input.keyboard.addKey("ESC");
        keyESC.on("down", function(){
            this.showGameMenu(true);
            this.scene.setActive(false, CST.SCENES.GAME);
            this.scene.setActive(false, CST.SCENES.GAME_UI);
        }, this)
    }

    private startLevel() : void
    {
        this.createUI();
        this.createGameMode();
        this.createMap();
        this.createBackground();
        this.createPlatforms();
        this.createLadders();
        this.createPortals();
        this.createTokens();
        this.createPickupItems();
        this.createKeyboardMap();
        this.createPlayer();
        this.createEnemies();
        this.createInteractions();
        this.createCameras();
    }

    public restartLevel() : void
    {
        this.time.removeAllEvents();
        this.tweens.killAll();

        this.restartTokens();
        this.restartPickupItems();
        this.restartAIs();
        this.setRemainLife(0);
        this.respawnPlayer();
    }

    public startNextLevel() : void
    {
        if (this.currentLevel < CST.LEVELS.length)
            this.scene.restart({level: this.currentLevel + 1});
        else
        {
            this.scene.pause(CST.SCENES.GAME);
            this.scene.pause(CST.SCENES.GAME_UI);
            this.showGameMenu(true);
        }
    }

    private createGameMode() : void
    {
        this.setRemainLife(0);
        this.setCollectedTokens(0);
    }

    private createMap() : void
    {
        this.currentMap = this.add.tilemap("level" + this.currentLevel.toString());
    }

    private createBackground() : void
    {
        this.backgrounds = this.physics.add.staticGroup();
        this.backgrounds.add(this.add.image(0, 0, "sky").setScale(12));

        const terrain = this.currentMap.addTilesetImage("terrain_atlas", "terrain");
        this.currentMap.createLayer("Background", [terrain], 0, 0);
    }

    private createPlatforms() : void
    {
        const terrain = this.currentMap.addTilesetImage("terrain_atlas", "terrain");
        this.platforms = this.currentMap.createLayer("Platforms", [terrain], 0, 0);

        const platformsBounds = this.platforms.getBounds();
        this.physics.world.setBounds(0, 0, platformsBounds.width, platformsBounds.height);
        this.deadZoneY = platformsBounds.height;
    }

    private createLadders() : void
    {
        let ladders = this.physics.add.staticGroup();

        // @ts-ignore - Problem with Phaser’s types. classType supports classes 
        let portalObjects = this.currentMap.createFromObjects("Ladders", {name: "Ladder", classType: Ladder});
        portalObjects.map((ladder: Phaser.Physics.Arcade.Image)=>{
            ladder.setTexture("ladder");
            ladders.add(ladder);
            ladder.setName(this.generateUniqueName(ladder));
        });

        // No physic for the top of the ladder
        portalObjects = this.currentMap.createFromObjects("Ladders", {name: "LadderTop"});
        portalObjects.map((ladder: Phaser.Physics.Arcade.Image)=>{
            ladder.setTexture("ladderTop");
        });

        this.ladderManager = new LadderManager(this, ladders);
    }

    private createPortals() : void
    {
        this.portals = this.physics.add.staticGroup();

        // @ts-ignore - Problem with Phaser’s types. classType supports classes 
        const portalObjects = this.currentMap.createFromObjects("Portals", {name: "Portal", classType: Portal});
        portalObjects.map((portal: Portal)=>{
            portal.setTexture("portal");
            this.portals.add(portal);
        });
    }

    private createTokens() : void
    {
        this.tokens = this.physics.add.staticGroup();

        // @ts-ignore - Problem with Phaser’s types. classType supports classes 
        const tokenObjects = this.currentMap.createFromObjects("Tokens", {name: "Token", classType: Token});
        tokenObjects.map((token: Token)=>{
            token.setTexture("token_24");
            this.tokens.add(token);
        });
    }

    private createPickupItems() : void
    {
        this.pickupItems = this.physics.add.staticGroup();

        // @ts-ignore - Problem with Phaser’s types. classType supports classes 
        const healObjects = this.currentMap.createFromObjects("Pickups", {name: "Heal", classType: HealPickup});
        healObjects.map((pickup: HealPickup)=>{
            pickup.setTexture("healItem_48");
            this.pickupItems.add(pickup);
        });

        // @ts-ignore - Problem with Phaser’s types. classType supports classes 
        const weaponBoostObjects = this.currentMap.createFromObjects("Pickups", {name: "WeaponBoost", classType: WeaponBoostPickup});
        weaponBoostObjects.map((boost: WeaponBoostPickup)=>{
            boost.init();
            boost.setTexture("weaponBoost_48");
            this.pickupItems.add(boost);
        });
    }

    private createPlayer() : void
    {
        // @ts-ignore - Problem with Phaser’s types. classType supports classes 
        const playerObjects = this.currentMap.createFromObjects("Player", {name: "Player", classType: Player});

        // For this game, there should be exactly one player.
        this.player = playerObjects[0] as Player;
        this.player.init(this, "eyeball");

        this.player.on("healthChanged", this.onPlayerHealthChanged.bind(this));
        this.player.on("die", this.onPlayerDie.bind(this));

        let weapon = new CYBR_Weapon(this, 30, "bullet");
        this.player.equipWeapon(weapon);

        this.player.setName(this.generateUniqueName(this.player));
        this.spawnPositions.set(this.player.name, new Phaser.Math.Vector2(this.player.x, this.player.y));
    }

    private createEnemies() : void
    {
        this.enemies = this.physics.add.staticGroup();

        // @ts-ignore - Problem with Phaser’s types. classType supports classes 
        const enemyObjects = this.currentMap.createFromObjects("Enemies", {name: "PatrolAI", classType: PatrolAI});

        enemyObjects.map((ai: PatrolAI)=>{ this.enemies.add(ai); });

        this.enemies.getChildren().forEach((ai: PatrolAI) => {
            ai.init(this, "eyeball");
            ai.on("die", this.onEnemyDie.bind(this, ai));
            ai.setName(this.generateUniqueName(ai));
            this.spawnPositions.set(ai.name, new Phaser.Math.Vector2(ai.x, ai.y));
        }, this);
    }

    // Create all the overlaps and the colldiers - The order is important!
    private createInteractions() : void
    {
        this.ladderManager.init(this.player);

        // Player
        this.physics.add.overlap(this.player, this.ladderManager.ladders, this.overlapLadder, (player: Player, ladder: Ladder) => {
            return Math.abs(player.x - ladder.x) <= 8;
        }, this);

        this.platforms.setCollisionByProperty({collides:true});

        // @ts-ignore
        this.physics.add.collider(this.player, this.platforms, null, (player: Player, platform: Phaser.Tile) => {
            return !player.isClimbing || (!this.ladderManager.areLaddersOnPlayerUnderY(platform.bottom - platform.width / 2));
        }, this);

        this.physics.add.overlap(this.player, this.portals, this.completeLevel, null, this);
        this.physics.add.overlap(this.player, this.tokens, this.collectToken, null, this);
        this.physics.add.overlap(this.player, this.pickupItems, this.applyEffectOnPlayer, null, this);

        if (this.player.currentWeapon)
            this.physics.add.collider(this.player.currentWeapon.bullets, this.platforms, this.onWeaponHitPlatforms.bind(this));

        // Enemies
        this.physics.add.collider(this.enemies, this.platforms);
        this.enemies.getChildren().forEach(function (ai: PatrolAI) {
            this.physics.add.overlap(this.player, ai, this.onPlayerOverlapEnnemy, this.canPlayerOverlapEnnemy, this); 
            this.physics.add.overlap(this.player.currentWeapon.bullets, ai, this.onWeaponHitEnnemy, this.canHitEnemy.bind(this, ai), this); 
        }, this);
    }

    private createCameras() : void
    {
        const platformsBounds = this.platforms.getBounds();
        this.cameras.main.setBounds(0, 0, this.physics.world.bounds.width, this.physics.world.bounds.height);
        this.cameras.main.startFollow(this.player);
    }

    private restartTokens() : void
    {
        this.setCollectedTokens(0); // TODO: For gameMode

        this.tokens.getChildren().forEach(function (token: Token) {
            token.enableBody(true, token.x, token.y, true, true);
        }, this);
    }

    private restartPickupItems() : void
    {
        this.pickupItems.getChildren().forEach(function (pickup: EffectPickup) {
            pickup.enableBody(true, pickup.x, pickup.y, true, true);
        }, this);
    }

    private restartAIs() : void
    {
        this.enemies.getChildren().forEach(function (ai: PatrolAI) {
            this.respawnPawn(ai);
        }, this);
    }

    private createUI() : void
    {
        if (!this.scene.get(CST.SCENES.GAME_UI))
            this.scene.add(CST.SCENES.GAME_UI, SceneGame_UI, true, this);

        if (!this.scene.get(CST.SCENES.GAMEMENU_UI))
            this.scene.add(CST.SCENES.GAMEMENU_UI, SceneGameMenu_UI, true, this);
        
        this.showGameMenu(false);
    }

    public showGameUI(value: boolean) : void
    {
        this.scene.setActive(value, CST.SCENES.GAME_UI);
        this.scene.setVisible(value, CST.SCENES.GAME_UI);
    }

    public showGame(value: boolean) : void
    {
        this.scene.setActive(value, CST.SCENES.GAME);
        this.scene.setVisible(value, CST.SCENES.GAME);
        this.showGameUI(value);
    }

    public showGameMenu(value: boolean)
    {
        this.scene.setActive(value, CST.SCENES.GAMEMENU_UI);
        this.scene.setVisible(value, CST.SCENES.GAMEMENU_UI);
    }

    public showMainMenu() : void
    {
        this.showGame(false);
        this.showGameMenu(false);

        this.scene.setActive(true, CST.SCENES.MAINMENU_UI);
        this.scene.setVisible(true, CST.SCENES.MAINMENU_UI);
        AudioManager.playMusic(CST.MAIN_MENU.MUSIC);
    }

    // Update
    ////////////////////////////////////////////////////////////////////////

    public update(time: number, delta: number) : void
    {
        super.update(time, delta);

        this.ladderManager.update();

        // TODO: Use WOLRD_BOUNDS callback: https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Arcade.Events.html#event:WORLD_BOUNDS__anchor
        // It exists on js but I don't see it on ts...
        if (this.player.y > this.deadZoneY && !this.player.dead())
            this.player.setHealth(0);

        this.player.update();

        this.enemies.getChildren().forEach((ai: PatrolAI) => { ai.update(); }, this);
    }

    // Enemies
    ////////////////////////////////////////////////////////////////////////

    private canHitEnemy(enemy: Pawn) : boolean
    {
        return !enemy.dead();
    }

    private onWeaponHitEnnemy(bullet: Bullet, enemy: Pawn) : void
    {
        enemy.hurt(35);
        bullet.kill();
    }

    private onWeaponHitPlatforms(bullet: Bullet, platform: Phaser.Tilemaps.TilemapLayer) : void
    {
        bullet.active = false;
        bullet.visible = false;
        bullet.kill();
    }

    private onEnemyDie(enemy: Pawn) : void
    {
        this.time.delayedCall(800, ()=>{ enemy.disableBody(true, true); }, null, this);
    }

    // Player
    ////////////////////////////////////////////////////////////////////////

    private canPlayerOverlapEnnemy(player: Player, enemy: Pawn) : boolean
    {
        return !player.dead() && !player.isRecovering && !enemy.dead();
    }

    private onPlayerOverlapEnnemy(player: Player, enemy: Pawn) : void
    {
        this.player.hurt(35, this.player.body.touching.right);
    }

    private onPlayerHealthChanged(health: number, maxHealth: number) : void
    {
        this.events.emit("playerHealthChanged", health, maxHealth);
    }

    private onPlayerDie() : void
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

    private collectToken(player: Player, token: Token) : void
    {
        token.disableBody(true, true);
        this.setCollectedTokens(this.getCollectedTokens() + 1);
    }

    private applyEffectOnPlayer(player: Player, pickup: EffectPickup) : void
    {
        pickup.disableBody(true, true);
        pickup.applyEffect(this.player);
    }

    private respawnPlayer() : void
    {
        this.respawnPawn(this.player);
    }

    private respawnPawn(pawn: Pawn) : void
    {
        if (pawn.currentWeapon)
            pawn.currentWeapon.bullets.getChildren().forEach((bullet: Bullet)=>{ bullet.kill(); });

        const pawnPosition = this.spawnPositions.get(pawn.name);
        pawn.reset(pawnPosition.x, pawnPosition.y);
    }

    private IsGameOver() : boolean
    {
        return this.gameOver;
    }

    private setGameOver(gameOver: boolean) : void
    {
        this.gameOver = gameOver;

        if (this.gameOver)
        {
            this.time.delayedCall(2000, () => {
                this.showGameMenu(true);
                this.showGame(false);
            }, null, this);
        }

        this.events.emit("gameOverChanged", gameOver);
    }

    private completeLevel(player: Player, portal: Portal) : void
    {
        portal.disableBody(true);
        this.events.emit("levelCompleted");
    }

    private overlapLadder(player: Player, ladder: Ladder) : void
    {
        ladder.overlapPawnBegin(player);
    }

    public getCollectedTokens() : number
    {
        return this.collectedTokens;
    }

    private setCollectedTokens(tokens: number) : void
    {
        this.collectedTokens = tokens;
        this.events.emit("collectedTokenChanged", this.collectedTokens);
    }

    public getRemainLife() : number
    {
        return this.remainLife;
    }

    private setRemainLife(remainLife: number) : void
    {
        this.remainLife = remainLife;
        this.events.emit("playerRemainLifeChanged", this.remainLife);
        this.setGameOver(remainLife < 0); // TODO game over tests should be part of a game mode
    }
}