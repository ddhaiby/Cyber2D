import { CST } from "../CST";

import { CYBR_Scene } from "./CYBR_Scene";
import { SceneData } from "./CYBR_Scene";
import {SceneGame_UI} from "./SceneGame_UI";
import {SceneGameMenu_UI} from "./SceneGameMenu_UI";
import {SceneMainMenu_UI} from "./SceneMainMenu_UI";

import { Pawn } from "../Pawns/Pawn";
import {PatrolAI} from "../Pawns/AIs/PatrolAI";
import {Player} from "../Pawns/Player";

import { CYBR_Bullet } from "../Weapons/CYBR_Bullet";

import { Token } from "../Pickups/Token";
import { CyberToken } from "../Pickups/CyberToken";
import { EffectPickup } from "../Pickups/EffectPickup"
import { HealPickup } from "../Pickups/HealPickup"
import { WeaponBoostPickup } from "../Pickups/WeaponBoostPickup"

import { Ladder } from "../Platforms/Ladder";
import { Portal } from "../Platforms/Portal";
import { MovingPlatform } from "../Platforms/MovingPlatform";

import { LadderManager } from "../Managers/LadderManager";
import { AudioManager } from "../Managers/AudioManager";

import {HttpServices} from "../Core/Http.Services";

export class SceneGame extends CYBR_Scene
{
    // Scene
    private sceneGame_UI: SceneGame_UI = null;
    private sceneGameMenu_UI: SceneGameMenu_UI = null;

    // Map
    private currentMap: Phaser.Tilemaps.Tilemap;
    private platforms: Phaser.Tilemaps.TilemapLayer;
    private movingPlatforms: Phaser.Physics.Arcade.StaticGroup;
    private checkpoints: Phaser.Physics.Arcade.StaticGroup;
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
    private collectedTokens: number = 0;
    private remainLife: number;
    private gameOver: boolean = false;
    private gameCompleted: boolean = false;

    public currentLevel: number;

    private readonly httpService:HttpServices;
    constructor()
    {
        super({key: CST.SCENES.GAME});
        this.httpService = new HttpServices();
    }

    // Init
    ////////////////////////////////////////////////////////////////////////

    public init(data?: SceneData): void
    {
        this.gameCompleted = false;
        this.currentLevel = data && data.level ? data.level : 1;
    }

    // Preload
    ////////////////////////////////////////////////////////////////////////

    public preload(): void
    {
        this.loadMap();
    }

    private loadMap(): void
    {
        this.load.setPath("./assets/maps");
        this.load.image("terrain", "./cyber_plateforms_atlas.png");

        const levelName = "level" + this.currentLevel.toString();
       // console.log(await this.httpService.getLevel(levelName));
       this.load.tilemapTiledJSON(levelName, "./levels" + "/" + levelName + ".json");
        //this.load.tilemapTiledJSON(levelName,this.httpService.getLevel(levelName));
    }

    // Create
    ////////////////////////////////////////////////////////////////////////

    public create(data?: SceneData): void
    {
        this.events.on("postupdate", this.postUpdate, this);

        this.spawnPositions = new Phaser.Structs.Map([]);
        this.createLevel();
        this.events.emit("levelStarted", data.level);
        AudioManager.playSound("New_Level");

        //AudioManager.playMusic(CST.LEVELS[this.currentLevel - 1].MUSIC);
    }

    private createKeyboardMap(): void
    {
        let keyESC = this.input.keyboard.addKey("ESC");
        keyESC.on("down", function(){
            this.showGameMenu(true);
            this.scene.setActive(false);
            this.sceneGame_UI.scene.setActive(false);
        }, this)
    }

    private createLevel(): void
    {
        this.createGameMode();
        this.createMap();
        this.createBackground();
        this.createPlatforms();
        this.createCheckpoints();
        this.createLadders();
        this.createPortals();
        this.createTokens();
        this.createPickupItems();
        this.createKeyboardMap();
        this.createPlayer();
        this.createEnemies();
        this.createInteractions();
        this.createCameras();
        this.createUI();
    }

    public startLevel(level: number): void
    {
        this.events.off("postupdate");
        this.scene.restart({level: level});
    }

    public restartLevel(): void
    {
        this.startLevel(this.currentLevel);
    }

    public startNextLevel(): void
    {
        if (this.currentLevel < CST.LEVELS.length)
            this.startLevel(this.currentLevel + 1);
        else
        {
            this.completeGame();
            this.showGameMenu(true);
            this.showGame(false);
        }
    }

    private createGameMode(): void
    {
        this.setRemainLife(3);
        this.setCollectedTokens(0);
    }

    private createMap(): void
    {
        this.currentMap = this.add.tilemap("level" + this.currentLevel.toString());
    }

    private createBackground(): void
    {
        this.backgrounds = this.physics.add.staticGroup().setDepth(-999);
        this.backgrounds.add(this.add.image(0, 0, "background").setScale(4,4).setScrollFactor(0));

        const terrain = this.currentMap.addTilesetImage("cyber_plateforms_atlas", "terrain");
        this.currentMap.createLayer("Background", [terrain], 0, 0);
    }

    private createPlatforms(): void
    {
        const terrain = this.currentMap.addTilesetImage("cyber_plateforms_atlas", "terrain");

        // Static platforms
        this.platforms = this.currentMap.createLayer("Platforms", [terrain], 0, 0);

        const platformsBounds = this.platforms.getBounds();
        this.physics.world.setBounds(0, 0, platformsBounds.width, platformsBounds.height);

        // Dynamic platforms
        this.movingPlatforms = this.physics.add.staticGroup();

        // @ts-ignore - Problem with Phaser’s types. classType supports classes 
        const movingPlatformObjects = this.currentMap.createFromObjects("MovingPlatforms", {name: "movingPlatform", classType: MovingPlatform});
        movingPlatformObjects.map((platform: MovingPlatform)=>{
            platform.init();
            this.movingPlatforms.add(platform);
        });
    }

    private createCheckpoints(): void 
    {
        this.checkpoints = this.physics.add.staticGroup();

        // @ts-ignore - Problem with Phaser’s types. classType supports classes 
        let checkpointObjects = this.currentMap.createFromObjects("Portals", {name: "checkpoint", classType: Phaser.Physics.Arcade.Image});
        checkpointObjects.map((checkPoint: Phaser.Physics.Arcade.Image)=>{
            checkPoint.setTexture("platform_atlas", "checkpointOff.png");
            this.checkpoints.add(checkPoint);
            checkPoint.setName(CYBR_Scene.generateUniqueName(checkPoint));
        });
    }

    private createLadders(): void
    {
        let ladders = this.physics.add.staticGroup();

        // @ts-ignore - Problem with Phaser’s types. classType supports classes 
        let ladderObjects = this.currentMap.createFromObjects("Ladders", {name: "ladder", classType: Ladder});
        ladderObjects.map((ladder: Ladder)=>{
            ladder.setTexture("platform_atlas", "ladder.png");
            ladders.add(ladder);
            ladder.setName(CYBR_Scene.generateUniqueName(ladder));
        });

        // @ts-ignore - Problem with Phaser’s types. classType supports classes 
        ladderObjects = this.currentMap.createFromObjects("Ladders", {name: "ladderBottom", classType: Ladder});
        ladderObjects.map((ladder: Ladder)=>{
            ladder.setTexture("platform_atlas", "ladderBottom.png");
            ladders.add(ladder);
            ladder.setName(CYBR_Scene.generateUniqueName(ladder));
        });

        // No physic for the top of the ladder
        ladderObjects = this.currentMap.createFromObjects("Ladders", {name: "ladderTop"});
        ladderObjects.map((ladder: Phaser.Physics.Arcade.Image)=>{
            ladder.setTexture("platform_atlas", "ladderTop.png");
            ladder.setName(CYBR_Scene.generateUniqueName(ladder));
        });

        this.ladderManager = new LadderManager(this, ladders);
    }

    private createPortals(): void
    {
        this.portals = this.physics.add.staticGroup();

        // @ts-ignore - Problem with Phaser’s types. classType supports classes 
        const portalObjects = this.currentMap.createFromObjects("Portals", {name: "Portal", classType: Portal});
        portalObjects.map((portal: Portal)=>{
            portal.init();
            portal.onActivated(this.completeLevel, this);
            this.portals.add(portal);
        });
    }

    private createTokens(): void
    {
        this.tokens = this.physics.add.staticGroup();

        const tokenData = [
            {name: "tokenCopper", classType: Token},
            {name: "tokenSilver", classType: Token},
            {name: "tokenGold", classType: Token},
            {name: "tokenCyber", classType: CyberToken}
        ];

        for (let token of tokenData)
        {
             // @ts-ignore - Problem with Phaser’s types. classType supports classes 
            const tokenObjects = this.currentMap.createFromObjects("Tokens", {name: token.name, classType: token.classType});
            tokenObjects.map((token: Token)=>{
                token.setTexture("platform_atlas", token.name + ".png");
                this.tokens.add(token);
            });
        }
    }

    private createPickupItems(): void
    {
        this.pickupItems = this.physics.add.staticGroup();

        // @ts-ignore - Problem with Phaser’s types. classType supports classes 
        const healObjects = this.currentMap.createFromObjects("Pickups", {name: "healthPackage", classType: HealPickup});
        healObjects.map((pickup: HealPickup)=>{
            pickup.setTexture("platform_atlas", "healthPackage.png");
            this.pickupItems.add(pickup);
        });

        // @ts-ignore - Problem with Phaser’s types. classType supports classes 
        const weaponBoostObjects = this.currentMap.createFromObjects("Pickups", {name: "weaponBoost", classType: WeaponBoostPickup});
        weaponBoostObjects.map((boost: WeaponBoostPickup)=>{
            boost.setTexture("platform_atlas", "weaponBoost_48.png");
            this.pickupItems.add(boost);
        });
    }

    private createPlayer(): void
    {
        // @ts-ignore - Problem with Phaser’s types. classType supports classes 
        const playerObjects = this.currentMap.createFromObjects("Player", {name: "player", classType: Player});

        // For this game, there should be exactly one player.
        this.player = playerObjects[0] as Player;
        this.player.on("healthChanged", this.onPlayerHealthChanged.bind(this));
        this.player.on("die", this.onPlayerDie.bind(this));
        this.player.init("player");
        this.player.setScale(this.player.scaleX, this.player.scaleY);

        this.player.setName(CYBR_Scene.generateUniqueName(this.player));
        this.spawnPositions.set(this.player.name, new Phaser.Math.Vector2(this.player.x, this.player.y));
    }

    private createEnemies(): void
    {
        this.enemies = this.physics.add.staticGroup();

        // @ts-ignore - Problem with Phaser’s types. classType supports classes 
        const enemyObjects = this.currentMap.createFromObjects("Enemies", {name: "patrolAI", classType: PatrolAI});

        enemyObjects.map((ai: PatrolAI)=>{ this.enemies.add(ai); });

        this.enemies.getChildren().forEach((ai: PatrolAI) => {
            ai.init("patrol");
            ai.setScale(ai.scaleX, ai.scaleY);

            ai.setName(CYBR_Scene.generateUniqueName(ai));
            this.spawnPositions.set(ai.name, new Phaser.Math.Vector2(ai.x, ai.y));
        }, this);
    }

    // Create all the overlaps and the colldiers - The order is important!
    private createInteractions(): void
    {
        this.ladderManager.init(this.player);

        /////// Player
        this.physics.add.overlap(this.player, this.ladderManager.ladders, this.overlapLadder, (player: Player, ladder: Ladder) => {
            return Math.abs(player.x - ladder.x) <= 16;
        }, this);

        this.platforms.setCollisionByProperty({collides:true});

        this.physics.add.collider(this.player, this.movingPlatforms, this.collideMovingPlatforms);

        // @ts-ignore
        this.physics.add.collider(this.player, this.platforms, null, (player: Player, platform: Phaser.Tile) => {
            return !player.isClimbing || (!this.ladderManager.areLaddersOnPlayerUnderY(platform.bottom - platform.width / 2));
        }, this);

        this.physics.add.overlap(this.player, this.portals, this.activatePortal, null, this);
        this.physics.add.overlap(this.player, this.tokens, this.collectToken, null, this);
        this.physics.add.overlap(this.player, this.pickupItems, this.applyEffectOnPlayer, null, this);
        this.physics.add.overlap(this.player, this.checkpoints, this.reachCheckpoint, null, this);

        if (this.player.currentWeapon)
            this.physics.add.collider(this.player.currentWeapon.bullets, this.platforms, this.onWeaponHitPlatforms.bind(this));

        /////// Enemies
        this.physics.add.collider(this.enemies, this.platforms);
        this.enemies.getChildren().forEach(function (ai: PatrolAI) {
            this.physics.add.collider(ai, this.movingPlatforms, this.collideMovingPlatforms);
            this.physics.add.overlap(this.player, ai, this.onPlayerOverlapEnnemy, this.playerCanOverlapEnnemy, this); 
            this.physics.add.overlap(this.player.currentWeapon.bullets, ai, this.onWeaponHitPawn, this.weaponCanHitPawn, this);

            if (ai.currentWeapon)
            {
                this.physics.add.collider(ai.currentWeapon.bullets, this.platforms, this.onWeaponHitPlatforms);
                this.physics.add.overlap(ai.currentWeapon.bullets, this.player, this.onWeaponHitPawn, this.weaponCanHitPawn, this);
            }
        }, this);
    }

    private createCameras(): void
    {
        const platformsBounds = this.platforms.getBounds();
        this.cameras.main.setBounds(0, 0, this.physics.world.bounds.width, this.physics.world.bounds.height);
        this.cameras.main.startFollow(this.player);
    }

    private restartTokens(): void
    {
        this.tokens.getChildren().forEach(function (token: Token) {
            token.enableBody(true, token.x, token.y, true, true);
        }, this);
    }

    private restartPickupItems(): void
    {
        this.pickupItems.getChildren().forEach(function (pickup: EffectPickup) {
            pickup.enableBody(true, pickup.x, pickup.y, true, true);
        }, this);
    }

    private restartPortals(): void
    {
        this.portals.getChildren().forEach(function (portal: Portal) {
            portal.reset();
        }, this);
    }

    private restartAIs(): void
    {
        this.enemies.getChildren().forEach(function (ai: PatrolAI) {
            this.respawnPawn(ai);
        }, this);
    }

    private createUI(): void
    {
        if (!this.sceneGame_UI)
            this.sceneGame_UI = this.scene.add(CST.SCENES.GAME_UI, SceneGame_UI, true, this) as SceneGame_UI;

        if (!this.sceneGameMenu_UI)
            this.sceneGameMenu_UI = this.scene.add(CST.SCENES.GAMEMENU_UI, SceneGameMenu_UI, true, this) as SceneGameMenu_UI;

        this.showGameMenu(false);
    }

    public showGameUI(value: boolean): void
    {
        if (this.sceneGame_UI)
        {
            this.sceneGame_UI.scene.setActive(value);
            this.sceneGame_UI.scene.setVisible(value);
        }
    }

    public showGame(value: boolean): void
    {
        this.scene.setActive(value);
        this.scene.setVisible(value);
        this.showGameUI(value);
    }

    public showGameMenu(value: boolean)
    {
        this.sceneGameMenu_UI.scene.setActive(value);
        this.sceneGameMenu_UI.setVisible(value, !this.isGameOver() && !this.isGameCompleted());
    }

    public showMainMenu(): void
    {
        this.showGame(false);
        this.showGameMenu(false);

        const sceneMainMenu_UI = this.scene.get(CST.SCENES.MAINMENU_UI) as SceneMainMenu_UI;
        sceneMainMenu_UI.scene.setActive(true);
        sceneMainMenu_UI.scene.setVisible(true);
        //AudioManager.playMusic(CST.MAIN_MENU.MUSIC);
    }

    // Update
    ////////////////////////////////////////////////////////////////////////

    public update(time: number, delta: number): void
    {
        super.update(time, delta);

        this.ladderManager.update();
        this.movingPlatforms.getChildren().forEach((movingPlatform: MovingPlatform) => { movingPlatform.update(); }, this);

        if (this.playerReachedDeadZone() && !this.player.dead())
            this.player.setHealth(0);

        this.player.update();
        this.enemies.getChildren().forEach((ai: PatrolAI) => { ai.update(); }, this);
    }

    private postUpdate(): void 
    {
        this.player.postUpdate();
        this.enemies.getChildren().forEach((ai: PatrolAI) => { ai.postUpdate(); }, this);
    }

    // Pawns
    ////////////////////////////////////////////////////////////////////////

    private weaponCanHitPawn(bullet: CYBR_Bullet, pawn: Pawn): boolean
    {
        return !pawn.dead() && !pawn.isRecovering && (Math.abs(bullet.x - pawn.x) < 20);
    }

    private onWeaponHitPawn(bullet: CYBR_Bullet, pawn: Pawn): void
    {
        pawn.hurt(bullet.damage, pawn.body.touching.right);
        bullet.kill();
    }

    private onWeaponHitPlatforms(bullet: CYBR_Bullet, platform: Phaser.Tilemaps.TilemapLayer): void
    {
        bullet.kill();
    }

    private playerReachedDeadZone(): boolean
    {
        return this.player.y > this.physics.world.bounds.height;
    }

    private playerCanOverlapEnnemy(player: Player, enemy: Pawn): boolean
    {
        return !player.dead() && !player.isRecovering && !enemy.dead() && (Math.abs(player.x - enemy.x) < 30);
    }

    private onPlayerOverlapEnnemy(player: Player, enemy: Pawn): void
    {
        this.player.hurt(enemy.getBodyDamage(), this.player.body.touching.right);
    }

    private onPlayerHealthChanged(health: number, maxHealth: number): void
    {
        this.events.emit("playerHealthChanged", health, maxHealth);
    }

    private onPlayerDie(): void
    {
        // TODO: should a gameMode handle all of this ?
        this.setRemainLife(this.getRemainLife() - 1);

        if (!this.isGameOver())
        {
            this.time.delayedCall(2000, () => {
                this.respawnPlayer();
                this.restartAIs();
                this.restartPortals();
            }, null, this);
        }
    }

    private collectToken(player: Player, token: Token): void
    {
        token.collected();
        this.setCollectedTokens(this.getCollectedTokens() + 1);
    }

    private applyEffectOnPlayer(player: Player, pickup: EffectPickup): void
    {
        pickup.disableBody(true, true);
        pickup.applyEffect(this.player);
        AudioManager.playSound("Item_Pickup");
    }

    private reachCheckpoint(player: Player, checkpoint: Phaser.Physics.Arcade.Image): void
    {
        checkpoint.setTexture("platform_atlas", "checkpointOn.png");
        this.spawnPositions.set(this.player.name, new Phaser.Math.Vector2(checkpoint.x, checkpoint.y));
        checkpoint.disableBody(true, false);
        AudioManager.playSound("Checkpoint");
    }

    private respawnPlayer(): void
    {
        this.respawnPawn(this.player);
    }

    private respawnPawn(pawn: Pawn): void
    {
        if (pawn.currentWeapon)
            pawn.currentWeapon.bullets.getChildren().forEach((bullet: CYBR_Bullet)=>{ bullet.kill(); });

        const pawnPosition = this.spawnPositions.get(pawn.name);
        pawn.reset(pawnPosition.x, pawnPosition.y);
    }

    private isGameOver(): boolean
    {
        return this.gameOver;
    }

    private setGameOver(gameOver: boolean): void
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

    private isGameCompleted(): boolean
    {
        return this.gameCompleted
    }

    private completeGame(): void
    {
        this.gameCompleted = true;
    }

    private activatePortal(player: Player, portal: Portal)
    {
        portal.activate(player);
    }

    private completeLevel(): void
    {
        if (!this.player.dead())
            this.events.emit("levelCompleted");
    }

    private overlapLadder(player: Player, ladder: Ladder): void
    {
        ladder.overlapPawnBegin(player);
    }

    private collideMovingPlatforms(pawn: Pawn, movingPlatform: MovingPlatform)
    {
        movingPlatform.addCollidedObject(pawn);
    }

    public getCollectedTokens(): number
    {
        return this.collectedTokens;
    }

    private setCollectedTokens(tokens: number): void
    {
        this.collectedTokens = tokens;
        this.events.emit("collectedTokenChanged", this.collectedTokens);
    }

    public getRemainLife(): number
    {
        return this.remainLife;
    }

    private setRemainLife(remainLife: number): void
    {
        this.remainLife = remainLife;
        this.events.emit("playerRemainLifeChanged", this.remainLife);
        this.setGameOver(remainLife < 0); // TODO game over tests should be part of a game mode
    }
}