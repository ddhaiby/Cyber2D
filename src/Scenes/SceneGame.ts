import {CST} from "../CST";

import {CYBR_Scene, SceneData} from "./CYBR_Scene";
import {SceneGame_UI} from "./SceneGame_UI";
import {SceneGameMenu_UI} from "./SceneGameMenu_UI";
import {SceneMainMenu_UI} from "./SceneMainMenu_UI";

import {Pawn} from "../Pawns/Pawn";
import {PawnSpawn} from "../Pawns/PawnSpawn";
import {AISpawn} from "../Pawns/AIs/AISpawn";
import {Player} from "../Pawns/Player";
import {RifleAI} from "../Pawns/AIs/RifleAI";
import {PistolAI} from "../Pawns/AIs/PistolAI";
import {MeleeAI} from "../Pawns/AIs/MeleeAI";
import {DroneAI} from "../Pawns/AIs/DroneAI";

import {CYBR_Bullet} from "../Weapons/FireWeapons/CYBR_Bullet";
import {CYBR_MeleeWeapon} from "../Weapons/MeleeWeapons/CYBR_MeleeWeapon";

import {Token} from "../Pickups/Token";
import {CyberToken} from "../Pickups/CyberToken";
import {EffectPickup} from "../Pickups/EffectPickup"
import {HealPickup} from "../Pickups/HealPickup"
import {WeaponBoostPickup} from "../Pickups/WeaponBoostPickup"
import {PotionGreen} from "../Pickups/PotionGreen"
import {PotionOrange} from "../Pickups/PotionOrange"
import {PotionRed} from "../Pickups/PotionRed"

import {Ladder} from "../Platforms/Ladder";
import {Portal} from "../Platforms/Portal";
import {MovingPlatform} from "../Platforms/MovingPlatform";
import {Spike} from "../Platforms/Spike";
import {SpringPad} from "../Platforms/SpringPad";
import {Mine} from "../Platforms/Mine";

import {LadderManager} from "../Managers/LadderManager";
import {CYBR_AudioManager} from "../Managers/CYBR_AudioManager";

export class SceneGame extends CYBR_Scene
{
    // Pawns
    public player: Player = null;

    // Level data
    private _currentLevel: number;
    private _isTutorial: boolean;

    // Scene
    private sceneGame_UI: SceneGame_UI = null;
    private sceneGameMenu_UI: SceneGameMenu_UI = null;

    // Map
    private currentMap: Phaser.Tilemaps.Tilemap;
    private platforms: Phaser.Tilemaps.TilemapLayer;
    private movingPlatforms: Phaser.Physics.Arcade.Group;
    private checkpoints: Phaser.Physics.Arcade.StaticGroup;
    private portals: Phaser.Physics.Arcade.StaticGroup;
    private springPads: Phaser.Physics.Arcade.Group;
    private spikes: Phaser.Physics.Arcade.StaticGroup;
    private mines: Phaser.Physics.Arcade.StaticGroup;
    private backgrounds: Phaser.Physics.Arcade.StaticGroup;
    private tokens: Phaser.Physics.Arcade.StaticGroup;
    private pickupItems: Phaser.Physics.Arcade.StaticGroup;

    // Managers
    private ladderManager: LadderManager;
    private enemies: Phaser.Physics.Arcade.Group;

    // GameMode
    private spawnPositions: Phaser.Structs.Map<string, Phaser.Math.Vector2>;
    private collectedTokens: number = 0;
    private remainLife: number;
    private gameOver: boolean = false;
    private gameCompleted: boolean = false;

    constructor()
    {
        super({key: CST.SCENES.GAME});
    }

    // Init
    ////////////////////////////////////////////////////////////////////////

    public init(data?: SceneData): void
    {
        this.gameCompleted = false;
        this._isTutorial = data ? !!data.isTutorial : false;
        this._currentLevel = data && data.level ? data.level : 1;
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
        this.load.image("cyber_plateforms_atlas", "./cyber_plateforms_atlas.png");

        if (this._isTutorial)
        {
            this.load.tilemapTiledJSON("levelTutorial", "./levels/levelTutorial.json")
        }
        else
        {
            const levelName = "level" + this._currentLevel.toString();
            this.load.tilemapTiledJSON(levelName, "./levels" + "/" + levelName + ".json");
            //this.load.tilemapTiledJSON(levelName, "./levels/levelDev.json");
        }
    }

    // Create
    ////////////////////////////////////////////////////////////////////////

    public create(data?: SceneData): void
    {
        this.spawnPositions = new Phaser.Structs.Map([]);
        this.createLevel();
        this.events.on("postupdate", this.postUpdate, this);
        this.events.emit("levelStarted", data.level);
        CYBR_AudioManager.instance.playSound("New_Level");
    }

    private createLevel(): void
    {
        this.createGameMode()
            .createMap()
            .createBackground()
            .createPlatforms()
            .createCheckpoints()
            .createLadders()
            .createPortals()
            .createSpringPad()
            .createTraps()
            .createTokens()
            .createPickupItems()
            .createKeyboardMap()
            .createPlayer()
            .createEnemies()
            .createInteractions()
            .createCameras()
            .createUI();
    }

    public startLevel(level: number, isTutorial: boolean = false): void
    {
        this.player.destroy();
        this.player = null;
        this.input.keyboard.removeAllKeys();
        this.events.off("postupdate");
        this.scene.restart({level: level, isTutorial: isTutorial});
    }

    public restartLevel(): void
    {
        this.startLevel(this._currentLevel, this._isTutorial);
    }

    public startNextLevel(): void
    {
        if (this._isTutorial)
        {
            this.showMainMenu();
        }
        else
        {
            if (this._currentLevel < CST.LEVELS.length)
            {
                this.startLevel(this._currentLevel + 1);
            }
            else
            {
                this.completeGame();
                this.showGameMenu(true);
                this.showGame(false);
            }
        }
    }

    private createGameMode(): this
    {
        this.setRemainLife(this._isTutorial ? 999 : 3);
        this.setCollectedTokens(0);
        return this;
    }

    private createMap(): this
    {
        if (this.currentMap)
        {
            this.currentMap.destroy();
            this.currentMap = null;
        }

        const mapName = this._isTutorial ? "levelTutorial" : "level" + this._currentLevel.toString();
        this.currentMap = this.add.tilemap(mapName);
        return this;
    }

    private createBackground(): this
    {
        this.backgrounds = this.physics.add.staticGroup().setDepth(-999);
        this.backgrounds.add(this.add.image(0, 0, "background").setScale(4, 4).setScrollFactor(0));

        const terrain = this.currentMap.addTilesetImage("cyber_plateforms_atlas", "cyber_plateforms_atlas");
        this.currentMap.createLayer("Background", [terrain], 0, 0);

        if (this._isTutorial)
        {
            const keyImages = ["keyFire", "keyMovement", "keyJump"];

            for (const key of keyImages)
            {
                // @ts-ignore - Problem with Phaser’s types. classType supports classes
                let tutorialObjects = this.currentMap.createFromObjects("Tutorial", { name: key, classType: Phaser.GameObjects.Image });
                tutorialObjects.map((image: Phaser.GameObjects.Image) => { 
                    image.setTexture(key).setScale(image.scaleX, image.scaleY);
                    image.displayWidth = 32 * image.scaleX;
                    image.displayHeight = 32 * image.scaleY;
                });
            }
        }
        return this;
    }

    private createPlatforms(): this
    {
        const terrain = this.currentMap.addTilesetImage("cyber_plateforms_atlas", "cyber_plateforms_atlas");

        // Tile platforms
        this.platforms = this.currentMap.createLayer("Platforms", [terrain], 0, 0);

        const platformsBounds = this.platforms.getBounds();
        this.physics.world.setBounds(0, 0, platformsBounds.width, platformsBounds.height);

        // Moving platforms
        this.movingPlatforms = this.physics.add.group();

        // @ts-ignore - Problem with Phaser’s types. classType supports classes
        const movingPlatformObjects = this.currentMap.createFromObjects("MovingPlatforms", { name: "movingPlatform", classType: MovingPlatform });
        movingPlatformObjects.map((platform: MovingPlatform) => {
            this.movingPlatforms.add(platform);
            platform.init();
        });
        return this;
    }

    private createCheckpoints(): this
    {
        this.checkpoints = this.physics.add.staticGroup();

        // @ts-ignore - Problem with Phaser’s types. classType supports classes
        let checkpointObjects = this.currentMap.createFromObjects("Portals", { name: "checkpoint", classType: Phaser.Physics.Arcade.Image });
        checkpointObjects.map((checkPoint: Phaser.Physics.Arcade.Image) => {
            checkPoint.setTexture("platform_atlas", "checkpointOff.png");
            this.checkpoints.add(checkPoint);
            checkPoint.setName(CYBR_Scene.generateUniqueName(checkPoint));
        });
        return this;
    }

    private createLadders(): this
    {
        let ladders = this.physics.add.group();

        // @ts-ignore - Problem with Phaser’s types. classType supports classes
        let ladderObjects = this.currentMap.createFromObjects("Ladders", {name: "ladder", classType: Ladder});
        ladderObjects.map((ladder: Ladder) => {
            ladder.setTexture("platform_atlas", "ladder.png");
            ladders.add(ladder);
            ladder.setName(CYBR_Scene.generateUniqueName(ladder));

            this.add.existing(ladder);
            this.physics.add.existing(ladder);
            ladder.setGravity(0, -this.physics.world.gravity.y);
        });

        // @ts-ignore - Problem with Phaser’s types. classType supports classes
        ladderObjects = this.currentMap.createFromObjects("Ladders", {name: "ladderBottom", classType: Ladder});
        ladderObjects.map((ladder: Ladder) => {
            ladder.setTexture("platform_atlas", "ladderBottom.png");
            ladders.add(ladder);
            ladder.setName(CYBR_Scene.generateUniqueName(ladder));

            this.add.existing(ladder);
            this.physics.add.existing(ladder);
            ladder.setGravity(0, -this.physics.world.gravity.y);
        });

        // No physic for the top of the ladder
        ladderObjects = this.currentMap.createFromObjects("Ladders", {name: "ladderTop"});
        ladderObjects.map((ladder: Phaser.Physics.Arcade.Image) => {
            ladder.setTexture("platform_atlas", "ladderTop.png");
            ladder.setName(CYBR_Scene.generateUniqueName(ladder));
        });

        this.ladderManager = new LadderManager(this, ladders);
        return this;
    }

    private createPortals(): this
    {
        this.portals = this.physics.add.staticGroup();

        // @ts-ignore - Problem with Phaser’s types. classType supports classes
        const portalObjects = this.currentMap.createFromObjects("Portals", {name: "Portal", classType: Portal});
        portalObjects.map((portal: Portal) => {
            portal.onActivated(this.completeLevel, this);
            this.portals.add(portal);
            portal.init();
        });
        return this;
    }

    private createSpringPad(): this
    {
        this.springPads = this.physics.add.group();

        // @ts-ignore - Problem with Phaser’s types. classType supports classes
        let springPadObjects = this.currentMap.createFromObjects("SpringPads", {name: "SpringPadVertical", classType: SpringPad});
        springPadObjects.map((springPad: SpringPad) => {
            this.springPads.add(springPad);
            springPad.init(true);
        });

        // @ts-ignore - Problem with Phaser’s types. classType supports classes
        springPadObjects = this.currentMap.createFromObjects("SpringPads", {name: "SpringPadHorizontal", classType: SpringPad});
        springPadObjects.map((springPad: SpringPad) => {
            this.springPads.add(springPad);
            springPad.init(false);
        });
        return this;
    }

    private createTraps(): this
    {
        this.spikes = this.physics.add.staticGroup();
        this.mines = this.physics.add.staticGroup();

        // @ts-ignore - Problem with Phaser’s types. classType supports classes
        let spikeObjects = this.currentMap.createFromObjects("Traps", {name: "spikeLong", classType: Spike});
        // @ts-ignore - Problem with Phaser’s types. classType supports classes
        spikeObjects = spikeObjects.concat(this.currentMap.createFromObjects("Traps", { name: "spikeShort", classType: Spike }));

        spikeObjects.map((spike: Spike) => {
            this.spikes.add(spike);
            spike.init();
        });

        // @ts-ignore - Problem with Phaser’s types. classType supports classes
        let mineObjects = this.currentMap.createFromObjects("Traps", {name: "mine", classType: Mine});

        mineObjects.map((mine: Mine) => {
            this.mines.add(mine);
            mine.init();
        });
        return this;
    }

    private createTokens(): this
    {
        this.tokens = this.physics.add.staticGroup();

        const tokenDataList = [
            {name: "tokenCopper", collectedSound: "", classType: Token},
            {name: "tokenSilver", collectedSound: "", classType: Token},
            {name: "tokenGold", collectedSound: "coinGoldCollected", classType: Token},
            {name: "tokenCyber", collectedSound: "coinCyberCollected", classType: CyberToken}
        ];

        for (let tokenData of tokenDataList)
        {
            // @ts-ignore - Problem with Phaser’s types. classType supports classes
            const tokenObjects = this.currentMap.createFromObjects("Tokens", { name: tokenData.name, classType: tokenData.classType });
            tokenObjects.map((token: Token) => {
                token.setTexture("platform_atlas", token.name + ".png");
                token.collectedSound = tokenData.collectedSound;
                this.tokens.add(token);
            });
        }
        return this;
    }

    private createPickupItems(): this
    {
        this.pickupItems = this.physics.add.staticGroup();

        // @ts-ignore - Problem with Phaser’s types. classType supports classes
        let pickupObjects = this.currentMap.createFromObjects("Pickups", { name: "healthPackage", classType: HealPickup });
        pickupObjects.map((pickup: HealPickup) => {
            pickup.setTexture("platform_atlas", "healthPackage.png");
            this.pickupItems.add(pickup);
        });

        // @ts-ignore - Problem with Phaser’s types. classType supports classes
        pickupObjects = this.currentMap.createFromObjects("Pickups", { name: "weaponBoost", classType: WeaponBoostPickup });
        pickupObjects.map((pickup: WeaponBoostPickup) => {
            pickup.setTexture("platform_atlas", "weaponBoost.png");
            this.pickupItems.add(pickup);
        });

        // @ts-ignore - Problem with Phaser’s types. classType supports classes
        pickupObjects = this.currentMap.createFromObjects("Pickups", { name: "potionGreen", classType: PotionGreen });
        pickupObjects.map((pickup: PotionGreen) => {
            pickup.setTexture("platform_atlas", "potionGreen.png");
            this.pickupItems.add(pickup);
            pickup.body.setSize(20, 24).setOffset((pickup.width - pickup.body.width) * 0.5, (pickup.height - pickup.body.height));
        });

        // @ts-ignore - Problem with Phaser’s types. classType supports classes
        pickupObjects = this.currentMap.createFromObjects("Pickups", { name: "potionOrange", classType: PotionOrange });
        pickupObjects.map((pickup: PotionOrange) => {
            pickup.setTexture("platform_atlas", "potionOrange.png");
            this.pickupItems.add(pickup);
            pickup.body.setSize(20, 24).setOffset((pickup.width - pickup.body.width) * 0.5, (pickup.height - pickup.body.height));
        });

        // @ts-ignore - Problem with Phaser’s types. classType supports classes
        pickupObjects = this.currentMap.createFromObjects("Pickups", { name: "potionRed", classType: PotionRed });
        pickupObjects.map((pickup: PotionRed) => {
            pickup.setTexture("platform_atlas", "potionRed.png");
            this.pickupItems.add(pickup);
            pickup.body.setSize(20, 24).setOffset((pickup.width - pickup.body.width) * 0.5, (pickup.height - pickup.body.height));
        });
        return this;
    }

    private createKeyboardMap(): this
    {
        let keyESC = this.input.keyboard.addKey("ESC");
        keyESC.on("down", function () {
            this.showGameMenu(true);
            this.scene.setActive(false);
            this.sceneGame_UI.scene.setActive(false);
        }, this)
        return this;
    }

    private createPlayer(): this
    {
        // @ts-ignore - Problem with Phaser’s types. classType supports classes
        const playerSpawns = this.currentMap.createFromObjects("Player", {name: "player", classType: PawnSpawn});
        const playerSpawn = playerSpawns[0] as PawnSpawn;

        this.player = new Player(this);
        this.player.on("healthChanged", this.onPlayerHealthChanged.bind(this));
        this.player.on("die", this.onPlayerDie.bind(this));
        this.player.init(playerSpawn.getPawnData());

        this.player.setName(CYBR_Scene.generateUniqueName(this.player));
        this.spawnPositions.set(this.player.name, new Phaser.Math.Vector2(this.player.x, this.player.y));

        playerSpawn.destroy();
        return this;
    }

    private createEnemies(): this
    {
        this.enemies = this.physics.add.group();

        const aIClasses = {
            "PistolAI": PistolAI,
            "RifleAI": RifleAI,
            "MeleeAI": MeleeAI,
            "DroneAI": DroneAI
        };

        for (let className in aIClasses)
        {
            //@ts-ignore - Problem with Phaser’s types. classType supports classes
            const aiSpawns = this.currentMap.createFromObjects("Enemies", {name: className, classType: AISpawn});

            aiSpawns.map((aiSpawn: AISpawn) => {
                const ai = new aIClasses[className](this);

                this.enemies.add(ai);
                ai.init(aiSpawn.getPawnData());
                ai.target = this.player;

                ai.setName(CYBR_Scene.generateUniqueName(ai));
                this.spawnPositions.set(ai.name, new Phaser.Math.Vector2(ai.x, ai.y));

                aiSpawn.destroy();
            });
        }
        return this;
    }

    // Create all the overlaps and the colldiers - The order is important!
    private createInteractions(): this
    {
        this.ladderManager.init(this.player);

        /////// Player
        this.physics.add.overlap(this.player, this.ladderManager.ladders, this.overlapLadder, (player: Player, ladder: Ladder) => {
            return Math.abs(player.x - ladder.x) <= 16;
        }, this);

        this.platforms.setCollisionByProperty({collides: true});

        // @ts-ignore
        this.physics.add.collider(this.player, this.movingPlatforms, this.playerCollideMovingPlatforms, null, this);

        // @ts-ignore
        this.physics.add.collider(this.player, this.platforms, null, (player: Player, platform: Phaser.Tile) => {
            return !player.isClimbing || (!this.ladderManager.areLaddersOnPlayerUnderY(platform.bottom - platform.width / 2));
        }, this);

        this.physics.add.overlap(this.player, this.portals, this.activatePortal, this.canActivatePortal, this);
        this.physics.add.overlap(this.player, this.tokens, this.collectToken, null, this);
        this.physics.add.overlap(this.player, this.pickupItems, this.applyEffectOnPlayer, null, this);
        this.physics.add.overlap(this.player, this.checkpoints, this.reachCheckpoint, null, this);
        this.physics.add.overlap(this.player, this.spikes, this.onPlayerOverlapSpike, this.playerCanOverlapSpike, this);
        this.physics.add.overlap(this.player, this.mines, this.onPlayerOverlapMine, this.playerCanOverlapMine, this);
        this.physics.add.collider(this.player, this.springPads, this.onPlayerCollideSpringPad, this.playerCanCollideSpringPad, this);

        if (this.player.currentWeapon)
        {
            // @ts-ignore
            this.physics.add.collider(this.player.currentWeapon.bullets, this.platforms, this.onWeaponHitPlatforms, null, this);

            // @ts-ignore
            this.physics.add.collider(this.player.currentWeapon.bullets, this.springPads, this.onWeaponHitPlatforms, null, this);
        }

        /////// Enemies
        this.physics.add.collider(this.enemies, this.platforms);
        this.enemies.getChildren().forEach(function (ai: RifleAI) {
            this.physics.add.collider(ai, this.movingPlatforms, this.pawnCollideMovingPlatforms);
            this.physics.add.overlap(this.player, ai, this.onPlayerOverlapEnnemy, this.playerCanOverlapEnnemy, this);

            if (this.player.meleeWeapon)
            {
                this.physics.add.overlap(this.player.meleeWeapon, ai, this.onHitPawn, this.canHitPawn, this);
            }

            if (this.player.currentWeapon)
            {
                this.physics.add.overlap(this.player.currentWeapon.bullets, ai, this.onWeaponHitPawn, this.weaponCanHitPawn, this);
            }

            if (ai.currentWeapon)
            {
                this.physics.add.collider(ai.currentWeapon.bullets, this.platforms, this.onWeaponHitPlatforms);
                this.physics.add.overlap(ai.currentWeapon.bullets, this.player, this.onWeaponHitPlayer, this.weaponCanHitPawn, this);
            }

            if (ai.meleeWeapon)
            {
                this.physics.add.overlap(ai.meleeWeapon, this.player, this.onHitPlayer, this.canHitPawn, this);
            }
        }, this);
        return this;
    }

    private createCameras(): this
    {
        this.cameras.main.setBounds(0, 0, this.physics.world.bounds.width, this.physics.world.bounds.height);
        this.cameras.main.zoomTo(CST.GAME.ZOOM, 0.0);
        this.cameras.main.startFollow(this.portals.getChildren()[0]);

        if (this.isTutorial)
        {
            this.cameras.main.startFollow(this.player);
        }
        else
        {
            this.time.delayedCall(1700, () => {
                this.cameras.main.stopFollow();
                let cameraCenter = this.cameras.main.midPoint;

                this.tweens.add({
                    targets: cameraCenter,
                    x: this.player.x,
                    y: this.player.y,
                    duration: 600,
                    repeat: false,
                    onUpdateScope: this,
                    onUpdate: () => { this.cameras.main.centerOn(cameraCenter.x, cameraCenter.y); },
                    onCompleteParams: this,
                    onComplete: () => { this.cameras.main.startFollow(this.player); }
                });
            }, null, this);
        }

        return this;
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
        if (this.sceneGame_UI) {
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
        const sceneMainMenu_UI = this.scene.get(CST.SCENES.MAINMENU_UI) as SceneMainMenu_UI;
        sceneMainMenu_UI.scene.setActive(true);
        sceneMainMenu_UI.scene.setVisible(true);

        this.scene.remove(CST.SCENES.GAMEMENU_UI);
        this.scene.remove(CST.SCENES.GAME_UI);
        this.scene.remove(CST.SCENES.GAME);
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
        this.portals.getChildren().forEach(function (portal: Portal)
        {
            portal.reset();
        }, this);
    }

    private restartAIs(): void {
        this.enemies.getChildren().forEach(function (ai: RifleAI) {
            this.respawnPawn(ai);
        }, this);
    }

    private restartMovingPlatforms(): void
    {
        this.movingPlatforms.getChildren().forEach(function (platform: MovingPlatform) {
            platform.reset();
        }, this);
    }

    private restartTraps(): void 
    {
        this.mines.getChildren().forEach(function (mine: Mine) {
            mine.reset();
        }, this);
    }

    // Update
    ////////////////////////////////////////////////////////////////////////

    public update(time: number, delta: number): void
    {
        super.update(time, delta);

        CYBR_AudioManager.instance.update();

        this.ladderManager.update();
        this.movingPlatforms.getChildren().forEach((movingPlatform: MovingPlatform) => {
            movingPlatform.update();
        }, this);

        if (this.playerReachedDeadZone() && !this.player.isDead())
            this.player.setHealth(0);

        this.player.update();
        this.enemies.getChildren().forEach((ai: RifleAI) => {
            ai.update();
        }, this);
    }

    private postUpdate(): void
    {
        this.player.postUpdate();
        this.enemies.getChildren().forEach((ai: RifleAI) => {
            ai.postUpdate();
        }, this);
    }

    // Level
    ////////////////////////////////////////////////////////////////////////

    public get isTutorial(): boolean
    {
        return this._isTutorial;
    }

    public get currentLevel(): number
    {
        return this._currentLevel;
    }

    public get playerX(): number
    {
        return this.player.x;
    }

    public get playerY(): number
    {
        return this.player.y;
    }

    // Cameras
    ////////////////////////////////////////////////////////////////////////

    private shakeCameraHurtPlayer(): void
    {
        this.cameras.main.shake(200, 0.002, false);
    }

    // Pawns
    ////////////////////////////////////////////////////////////////////////

    private weaponCanHitPawn(bullet: CYBR_Bullet, pawn: Pawn): boolean
    {
        return !pawn.isDead() && !pawn.isRecovering && (Math.abs(bullet.x - pawn.x) < 20);
    }

    private onWeaponHitPawn(bullet: CYBR_Bullet, pawn: Pawn): void
    {
        pawn.hurt(bullet.damage, pawn == this.player, pawn.body.touching.right);
        bullet.kill();
    }

    private onWeaponHitPlayer(bullet: CYBR_Bullet, player: Player): void
    {
        if (!player.isInvincible)
        {
            this.onWeaponHitPawn(bullet, player);
            this.shakeCameraHurtPlayer();
        }
    }

    private onWeaponHitPlatforms(bullet: CYBR_Bullet, platform: Phaser.Tilemaps.TilemapLayer | Phaser.GameObjects.Image): void
    {
        bullet.kill();
    }

    private onHitPawn(meleeWeapon: CYBR_MeleeWeapon, pawn: Pawn): void
    {
        pawn.hurt(meleeWeapon.damage, true, meleeWeapon.x > pawn.x, 100);
        meleeWeapon.emit("hit");
    }

    private onHitPlayer(meleeWeapon: CYBR_MeleeWeapon, player: Player): void
    {
        if (!player.isInvincible)
        {
            this.onHitPawn(meleeWeapon, player);
            this.shakeCameraHurtPlayer();
        }
    }

    private canHitPawn(bullet: CYBR_Bullet, pawn: Pawn): boolean
    {
        return !pawn.isDead() && !pawn.isRecovering;
    }

    private playerReachedDeadZone(): boolean
    {
        return this.player.y > this.physics.world.bounds.height;
    }

    private playerCanOverlapEnnemy(player: Player, enemy: Pawn): boolean
    {
        return !player.isDead() && !player.isRecovering && !enemy.isDead() && (Math.abs(player.x - enemy.x) < 30);
    }

    private onPlayerOverlapEnnemy(player: Player, enemy: Pawn): void
    {
        if (!player.isInvincible)
        {
            player.hurt(enemy.getBodyDamage(), true, player.body.touching.right);
            this.shakeCameraHurtPlayer();
        }
    }

    private playerCanOverlapSpike(player: Player, spike: Spike): boolean
    {
        return !player.isDead() && !player.isRecovering;
    }

    private playerCanOverlapMine(player: Player, mine: Mine): boolean
    {
        return !player.isDead() && (!mine.activated || mine.exploding);
    }

    private onPlayerOverlapSpike(player: Player, spike: Spike): void
    {
        if (!player.isInvincible)
        {
            this.player.hurt(spike.getDamage(), true, player.body.touching.right);
            this.shakeCameraHurtPlayer();
        }
    }

    private onPlayerOverlapMine(player: Player, mine: Mine): void
    {
        if (mine.exploding)
        {
            if (!player.isDead() && !player.isRecovering && !player.isInvincible)
            {
                this.player.hurt(mine.getDamage(), true, this.player.body.touching.right);
                this.shakeCameraHurtPlayer();
            }
        }
        else
        {
            mine.activate();
        }
    }

    private playerCanCollideSpringPad(player: Player, springPad: SpringPad): boolean
    {
        return !springPad.activating;
    }

    private onPlayerCollideSpringPad(player: Player, springPad: SpringPad): void
    {
        let shouldActivate = false;

        if (springPad.isVertical)
        {
            shouldActivate = player.y + player.height * 0.5 <= springPad.y - springPad.height;
        }
        else
        {
            shouldActivate = true;
        }

        if (shouldActivate)
        {
            springPad.activate(player);
        }
    }

    private onPlayerHealthChanged(health: number, maxHealth: number): void
    {
        this.events.emit("playerHealthChanged", health, maxHealth);
    }

    private onPlayerDie(): void
    {
        this.setRemainLife(this.getRemainLife() - 1);

        if (!this.isGameOver()) {
            this.time.delayedCall(2000, () => {
                this.respawnPlayer();
                this.restartAIs();
                this.restartPortals();
                this.restartMovingPlatforms();
                this.restartTraps();
            }, null, this);
        }
    }

    private collectToken(player: Player, token: Token): void
    {
        token.collected();
        this.setCollectedTokens(this.getCollectedTokens() + token.value);
    }

    private applyEffectOnPlayer(player: Player, pickup: EffectPickup): void
    {
        pickup.disableBody(true, true);
        pickup.applyEffect(this.player);
        CYBR_AudioManager.instance.playSound("Item_Pickup");
    }

    private reachCheckpoint(player: Player, checkpoint: Phaser.Physics.Arcade.Image): void
    {
        checkpoint.setTexture("platform_atlas", "checkpointOn.png");
        this.spawnPositions.set(this.player.name, new Phaser.Math.Vector2(checkpoint.x, checkpoint.y));
        checkpoint.disableBody(true, false);
        CYBR_AudioManager.instance.playSound("checkpointReached");
    }

    private respawnPlayer(): void {
        this.respawnPawn(this.player);
    }

    private respawnPawn(pawn: Pawn): void
    {
        if (pawn.currentWeapon)
            pawn.currentWeapon.bullets.getChildren().forEach((bullet: CYBR_Bullet) => {
                bullet.kill();
            });

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

        if (this.gameOver) {
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

    private activatePortal(player: Player, portal: Portal): void
    {
        player.x = portal.x;
        player.isInteracting = true;
        player.disableBody(true, false);
        portal.activate(player);
    }

    private canActivatePortal(player: Player, portal: Portal): boolean
    {
        return Math.abs(player.x - portal.x) <= 6;
    }

    private completeLevel(): void
    {
        if (!this.player.isDead())
            this.events.emit("levelCompleted");
    }

    private overlapLadder(player: Player, ladder: Ladder): void
    {
        ladder.overlapPawnBegin(player);
    }

    private playerCollideMovingPlatforms(player: Player, movingPlatform: MovingPlatform)
    {
        movingPlatform.activate();
        movingPlatform.addCollidedObject(player);
    }

    public getCollectedTokens(): number
    {
        return this.collectedTokens;
    }

    public getRemainLife(): number
    {
        return this.remainLife;
    }

    private setCollectedTokens(tokens: number): void
    {
        this.collectedTokens = tokens;
        this.events.emit("collectedTokenChanged", this.collectedTokens);
    }

    private setRemainLife(remainLife: number): void
    {
        this.remainLife = remainLife;
        this.events.emit("playerRemainLifeChanged", this.remainLife);
        this.setGameOver(remainLife < 0);
    }
}