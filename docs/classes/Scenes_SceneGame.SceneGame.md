[cyber2d](../README.md) / [Modules](../modules.md) / [Scenes/SceneGame](../modules/Scenes_SceneGame.md) / SceneGame

# Class: SceneGame

[Scenes/SceneGame](../modules/Scenes_SceneGame.md).SceneGame

## Hierarchy

- [`CYBR_Scene`](Scenes_CYBR_Scene.CYBR_Scene.md)

  ↳ **`SceneGame`**

## Table of contents

### Constructors

- [constructor](Scenes_SceneGame.SceneGame.md#constructor)

### Properties

- [add](Scenes_SceneGame.SceneGame.md#add)
- [anims](Scenes_SceneGame.SceneGame.md#anims)
- [backgrounds](Scenes_SceneGame.SceneGame.md#backgrounds)
- [cache](Scenes_SceneGame.SceneGame.md#cache)
- [cameras](Scenes_SceneGame.SceneGame.md#cameras)
- [checkpoints](Scenes_SceneGame.SceneGame.md#checkpoints)
- [children](Scenes_SceneGame.SceneGame.md#children)
- [collectedTokens](Scenes_SceneGame.SceneGame.md#collectedtokens)
- [currentLevel](Scenes_SceneGame.SceneGame.md#currentlevel)
- [currentMap](Scenes_SceneGame.SceneGame.md#currentmap)
- [data](Scenes_SceneGame.SceneGame.md#data)
- [enemies](Scenes_SceneGame.SceneGame.md#enemies)
- [events](Scenes_SceneGame.SceneGame.md#events)
- [facebook](Scenes_SceneGame.SceneGame.md#facebook)
- [game](Scenes_SceneGame.SceneGame.md#game)
- [gameCompleted](Scenes_SceneGame.SceneGame.md#gamecompleted)
- [gameOver](Scenes_SceneGame.SceneGame.md#gameover)
- [input](Scenes_SceneGame.SceneGame.md#input)
- [ladderManager](Scenes_SceneGame.SceneGame.md#laddermanager)
- [lights](Scenes_SceneGame.SceneGame.md#lights)
- [load](Scenes_SceneGame.SceneGame.md#load)
- [make](Scenes_SceneGame.SceneGame.md#make)
- [matter](Scenes_SceneGame.SceneGame.md#matter)
- [mines](Scenes_SceneGame.SceneGame.md#mines)
- [movingPlatforms](Scenes_SceneGame.SceneGame.md#movingplatforms)
- [physics](Scenes_SceneGame.SceneGame.md#physics)
- [pickupItems](Scenes_SceneGame.SceneGame.md#pickupitems)
- [platforms](Scenes_SceneGame.SceneGame.md#platforms)
- [player](Scenes_SceneGame.SceneGame.md#player)
- [plugins](Scenes_SceneGame.SceneGame.md#plugins)
- [portals](Scenes_SceneGame.SceneGame.md#portals)
- [registry](Scenes_SceneGame.SceneGame.md#registry)
- [remainLife](Scenes_SceneGame.SceneGame.md#remainlife)
- [renderer](Scenes_SceneGame.SceneGame.md#renderer)
- [scale](Scenes_SceneGame.SceneGame.md#scale)
- [scene](Scenes_SceneGame.SceneGame.md#scene)
- [sceneGameMenu\_UI](Scenes_SceneGame.SceneGame.md#scenegamemenu_ui)
- [sceneGame\_UI](Scenes_SceneGame.SceneGame.md#scenegame_ui)
- [sound](Scenes_SceneGame.SceneGame.md#sound)
- [spawnPositions](Scenes_SceneGame.SceneGame.md#spawnpositions)
- [spikes](Scenes_SceneGame.SceneGame.md#spikes)
- [sys](Scenes_SceneGame.SceneGame.md#sys)
- [textures](Scenes_SceneGame.SceneGame.md#textures)
- [time](Scenes_SceneGame.SceneGame.md#time)
- [tokens](Scenes_SceneGame.SceneGame.md#tokens)
- [tweens](Scenes_SceneGame.SceneGame.md#tweens)

### Methods

- [activatePortal](Scenes_SceneGame.SceneGame.md#activateportal)
- [applyEffectOnPlayer](Scenes_SceneGame.SceneGame.md#applyeffectonplayer)
- [canPunchPawn](Scenes_SceneGame.SceneGame.md#canpunchpawn)
- [centerHItem](Scenes_SceneGame.SceneGame.md#centerhitem)
- [centerItem](Scenes_SceneGame.SceneGame.md#centeritem)
- [centerVItem](Scenes_SceneGame.SceneGame.md#centervitem)
- [collectToken](Scenes_SceneGame.SceneGame.md#collecttoken)
- [completeGame](Scenes_SceneGame.SceneGame.md#completegame)
- [completeLevel](Scenes_SceneGame.SceneGame.md#completelevel)
- [create](Scenes_SceneGame.SceneGame.md#create)
- [createBackground](Scenes_SceneGame.SceneGame.md#createbackground)
- [createCameras](Scenes_SceneGame.SceneGame.md#createcameras)
- [createCheckpoints](Scenes_SceneGame.SceneGame.md#createcheckpoints)
- [createEnemies](Scenes_SceneGame.SceneGame.md#createenemies)
- [createGameMode](Scenes_SceneGame.SceneGame.md#creategamemode)
- [createInteractions](Scenes_SceneGame.SceneGame.md#createinteractions)
- [createKeyboardMap](Scenes_SceneGame.SceneGame.md#createkeyboardmap)
- [createLadders](Scenes_SceneGame.SceneGame.md#createladders)
- [createLevel](Scenes_SceneGame.SceneGame.md#createlevel)
- [createMap](Scenes_SceneGame.SceneGame.md#createmap)
- [createPickupItems](Scenes_SceneGame.SceneGame.md#createpickupitems)
- [createPlatforms](Scenes_SceneGame.SceneGame.md#createplatforms)
- [createPlayer](Scenes_SceneGame.SceneGame.md#createplayer)
- [createPortals](Scenes_SceneGame.SceneGame.md#createportals)
- [createTokens](Scenes_SceneGame.SceneGame.md#createtokens)
- [createTraps](Scenes_SceneGame.SceneGame.md#createtraps)
- [createUI](Scenes_SceneGame.SceneGame.md#createui)
- [getCollectedTokens](Scenes_SceneGame.SceneGame.md#getcollectedtokens)
- [getRemainLife](Scenes_SceneGame.SceneGame.md#getremainlife)
- [init](Scenes_SceneGame.SceneGame.md#init)
- [isGameCompleted](Scenes_SceneGame.SceneGame.md#isgamecompleted)
- [isGameOver](Scenes_SceneGame.SceneGame.md#isgameover)
- [loadMap](Scenes_SceneGame.SceneGame.md#loadmap)
- [onPlayerDie](Scenes_SceneGame.SceneGame.md#onplayerdie)
- [onPlayerHealthChanged](Scenes_SceneGame.SceneGame.md#onplayerhealthchanged)
- [onPlayerOverlapEnnemy](Scenes_SceneGame.SceneGame.md#onplayeroverlapennemy)
- [onPlayerOverlapMine](Scenes_SceneGame.SceneGame.md#onplayeroverlapmine)
- [onPlayerOverlapSpike](Scenes_SceneGame.SceneGame.md#onplayeroverlapspike)
- [onPunchPawn](Scenes_SceneGame.SceneGame.md#onpunchpawn)
- [onWeaponHitPawn](Scenes_SceneGame.SceneGame.md#onweaponhitpawn)
- [onWeaponHitPlatforms](Scenes_SceneGame.SceneGame.md#onweaponhitplatforms)
- [overlapLadder](Scenes_SceneGame.SceneGame.md#overlapladder)
- [playerCanOverlapEnnemy](Scenes_SceneGame.SceneGame.md#playercanoverlapennemy)
- [playerCanOverlapMine](Scenes_SceneGame.SceneGame.md#playercanoverlapmine)
- [playerCanOverlapSpike](Scenes_SceneGame.SceneGame.md#playercanoverlapspike)
- [playerCollideMovingPlatforms](Scenes_SceneGame.SceneGame.md#playercollidemovingplatforms)
- [playerReachedDeadZone](Scenes_SceneGame.SceneGame.md#playerreacheddeadzone)
- [postUpdate](Scenes_SceneGame.SceneGame.md#postupdate)
- [preload](Scenes_SceneGame.SceneGame.md#preload)
- [reachCheckpoint](Scenes_SceneGame.SceneGame.md#reachcheckpoint)
- [respawnPawn](Scenes_SceneGame.SceneGame.md#respawnpawn)
- [respawnPlayer](Scenes_SceneGame.SceneGame.md#respawnplayer)
- [restartAIs](Scenes_SceneGame.SceneGame.md#restartais)
- [restartLevel](Scenes_SceneGame.SceneGame.md#restartlevel)
- [restartMovingPlatforms](Scenes_SceneGame.SceneGame.md#restartmovingplatforms)
- [restartPickupItems](Scenes_SceneGame.SceneGame.md#restartpickupitems)
- [restartPortals](Scenes_SceneGame.SceneGame.md#restartportals)
- [restartTokens](Scenes_SceneGame.SceneGame.md#restarttokens)
- [restartTraps](Scenes_SceneGame.SceneGame.md#restarttraps)
- [setCollectedTokens](Scenes_SceneGame.SceneGame.md#setcollectedtokens)
- [setGameOver](Scenes_SceneGame.SceneGame.md#setgameover)
- [setRemainLife](Scenes_SceneGame.SceneGame.md#setremainlife)
- [showGame](Scenes_SceneGame.SceneGame.md#showgame)
- [showGameMenu](Scenes_SceneGame.SceneGame.md#showgamemenu)
- [showGameUI](Scenes_SceneGame.SceneGame.md#showgameui)
- [showMainMenu](Scenes_SceneGame.SceneGame.md#showmainmenu)
- [startLevel](Scenes_SceneGame.SceneGame.md#startlevel)
- [startNextLevel](Scenes_SceneGame.SceneGame.md#startnextlevel)
- [update](Scenes_SceneGame.SceneGame.md#update)
- [weaponCanHitPawn](Scenes_SceneGame.SceneGame.md#weaponcanhitpawn)
- [formatTime](Scenes_SceneGame.SceneGame.md#formattime)
- [generateUniqueName](Scenes_SceneGame.SceneGame.md#generateuniquename)

## Constructors

### constructor

• **new SceneGame**()

#### Overrides

[CYBR_Scene](Scenes_CYBR_Scene.CYBR_Scene.md).[constructor](Scenes_CYBR_Scene.CYBR_Scene.md#constructor)

#### Defined in

[src/Scenes/SceneGame.ts:62](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L62)

## Properties

### add

• **add**: `GameObjectFactory`

The Scene Game Object Factory.

This property will only be available if defined in the Scene Injection Map.

#### Inherited from

[CYBR_Scene](Scenes_CYBR_Scene.CYBR_Scene.md).[add](Scenes_CYBR_Scene.CYBR_Scene.md#add)

#### Defined in

node_modules/phaser/types/phaser.d.ts:86271

___

### anims

• **anims**: `AnimationManager`

A reference to the global Animation Manager.

This property will only be available if defined in the Scene Injection Map.

#### Inherited from

[CYBR_Scene](Scenes_CYBR_Scene.CYBR_Scene.md).[anims](Scenes_CYBR_Scene.CYBR_Scene.md#anims)

#### Defined in

node_modules/phaser/types/phaser.d.ts:86222

___

### backgrounds

• `Private` **backgrounds**: `StaticGroup`

#### Defined in

[src/Scenes/SceneGame.ts:49](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L49)

___

### cache

• **cache**: `CacheManager`

A reference to the global Cache.

This property will only be available if defined in the Scene Injection Map.

#### Inherited from

[CYBR_Scene](Scenes_CYBR_Scene.CYBR_Scene.md).[cache](Scenes_CYBR_Scene.CYBR_Scene.md#cache)

#### Defined in

node_modules/phaser/types/phaser.d.ts:86229

___

### cameras

• **cameras**: `CameraManager`

The Scene Camera Manager.

This property will only be available if defined in the Scene Injection Map.

#### Inherited from

[CYBR_Scene](Scenes_CYBR_Scene.CYBR_Scene.md).[cameras](Scenes_CYBR_Scene.CYBR_Scene.md#cameras)

#### Defined in

node_modules/phaser/types/phaser.d.ts:86264

___

### checkpoints

• `Private` **checkpoints**: `StaticGroup`

#### Defined in

[src/Scenes/SceneGame.ts:45](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L45)

___

### children

• **children**: `DisplayList`

The Game Object Display List belonging to this Scene.

This property will only be available if defined in the Scene Injection Map.

#### Inherited from

[CYBR_Scene](Scenes_CYBR_Scene.CYBR_Scene.md).[children](Scenes_CYBR_Scene.CYBR_Scene.md#children)

#### Defined in

node_modules/phaser/types/phaser.d.ts:86292

___

### collectedTokens

• `Private` **collectedTokens**: `number` = `0`

#### Defined in

[src/Scenes/SceneGame.ts:57](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L57)

___

### currentLevel

• **currentLevel**: `number`

#### Defined in

[src/Scenes/SceneGame.ts:37](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L37)

___

### currentMap

• `Private` **currentMap**: `Tilemap`

#### Defined in

[src/Scenes/SceneGame.ts:42](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L42)

___

### data

• **data**: `DataManager`

A Scene specific Data Manager Plugin.

See the `registry` property for the global Data Manager.

This property will only be available if defined in the Scene Injection Map and the plugin is installed.

#### Inherited from

[CYBR_Scene](Scenes_CYBR_Scene.CYBR_Scene.md).[data](Scenes_CYBR_Scene.CYBR_Scene.md#data)

#### Defined in

node_modules/phaser/types/phaser.d.ts:86308

___

### enemies

• `Private` **enemies**: `Group`

#### Defined in

[src/Scenes/SceneGame.ts:54](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L54)

___

### events

• **events**: `EventEmitter`

A Scene specific Event Emitter.

This property will only be available if defined in the Scene Injection Map.

#### Inherited from

[CYBR_Scene](Scenes_CYBR_Scene.CYBR_Scene.md).[events](Scenes_CYBR_Scene.CYBR_Scene.md#events)

#### Defined in

node_modules/phaser/types/phaser.d.ts:86257

___

### facebook

• **facebook**: `FacebookInstantGamesPlugin`

The Facebook Instant Games Plugin.

This property will only be available if defined in the Scene Injection Map, the plugin is installed and configured.

#### Inherited from

[CYBR_Scene](Scenes_CYBR_Scene.CYBR_Scene.md).[facebook](Scenes_CYBR_Scene.CYBR_Scene.md#facebook)

#### Defined in

node_modules/phaser/types/phaser.d.ts:86357

___

### game

• **game**: `Game`

A reference to the Phaser.Game instance.

This property will only be available if defined in the Scene Injection Map.

#### Inherited from

[CYBR_Scene](Scenes_CYBR_Scene.CYBR_Scene.md).[game](Scenes_CYBR_Scene.CYBR_Scene.md#game)

#### Defined in

node_modules/phaser/types/phaser.d.ts:86215

___

### gameCompleted

• `Private` **gameCompleted**: `boolean` = `false`

#### Defined in

[src/Scenes/SceneGame.ts:60](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L60)

___

### gameOver

• `Private` **gameOver**: `boolean` = `false`

#### Defined in

[src/Scenes/SceneGame.ts:59](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L59)

___

### input

• **input**: `InputPlugin`

The Scene Input Manager Plugin.

This property will only be available if defined in the Scene Injection Map and the plugin is installed.

#### Inherited from

[CYBR_Scene](Scenes_CYBR_Scene.CYBR_Scene.md).[input](Scenes_CYBR_Scene.CYBR_Scene.md#input)

#### Defined in

node_modules/phaser/types/phaser.d.ts:86315

___

### ladderManager

• `Private` **ladderManager**: [`LadderManager`](Managers_LadderManager.LadderManager.md)

#### Defined in

[src/Scenes/SceneGame.ts:53](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L53)

___

### lights

• **lights**: `LightsManager`

The Scene Lights Manager Plugin.

This property will only be available if defined in the Scene Injection Map and the plugin is installed.

#### Inherited from

[CYBR_Scene](Scenes_CYBR_Scene.CYBR_Scene.md).[lights](Scenes_CYBR_Scene.CYBR_Scene.md#lights)

#### Defined in

node_modules/phaser/types/phaser.d.ts:86299

___

### load

• **load**: `LoaderPlugin`

The Scene Loader Plugin.

This property will only be available if defined in the Scene Injection Map and the plugin is installed.

#### Inherited from

[CYBR_Scene](Scenes_CYBR_Scene.CYBR_Scene.md).[load](Scenes_CYBR_Scene.CYBR_Scene.md#load)

#### Defined in

node_modules/phaser/types/phaser.d.ts:86322

___

### make

• **make**: `GameObjectCreator`

The Scene Game Object Creator.

This property will only be available if defined in the Scene Injection Map.

#### Inherited from

[CYBR_Scene](Scenes_CYBR_Scene.CYBR_Scene.md).[make](Scenes_CYBR_Scene.CYBR_Scene.md#make)

#### Defined in

node_modules/phaser/types/phaser.d.ts:86278

___

### matter

• **matter**: `MatterPhysics`

The Scene Matter Physics Plugin.

This property will only be available if defined in the Scene Injection Map, the plugin is installed and configured.

#### Inherited from

[CYBR_Scene](Scenes_CYBR_Scene.CYBR_Scene.md).[matter](Scenes_CYBR_Scene.CYBR_Scene.md#matter)

#### Defined in

node_modules/phaser/types/phaser.d.ts:86350

___

### mines

• `Private` **mines**: `StaticGroup`

#### Defined in

[src/Scenes/SceneGame.ts:48](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L48)

___

### movingPlatforms

• `Private` **movingPlatforms**: `Group`

#### Defined in

[src/Scenes/SceneGame.ts:44](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L44)

___

### physics

• **physics**: `ArcadePhysics`

The Scene Arcade Physics Plugin.

This property will only be available if defined in the Scene Injection Map, the plugin is installed and configured.

#### Inherited from

[CYBR_Scene](Scenes_CYBR_Scene.CYBR_Scene.md).[physics](Scenes_CYBR_Scene.CYBR_Scene.md#physics)

#### Defined in

node_modules/phaser/types/phaser.d.ts:86343

___

### pickupItems

• `Private` **pickupItems**: `StaticGroup`

#### Defined in

[src/Scenes/SceneGame.ts:51](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L51)

___

### platforms

• `Private` **platforms**: `TilemapLayer`

#### Defined in

[src/Scenes/SceneGame.ts:43](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L43)

___

### player

• **player**: [`Player`](Pawns_Player.Player.md)

#### Defined in

[src/Scenes/SceneGame.ts:36](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L36)

___

### plugins

• **plugins**: `PluginManager`

A reference to the global Plugin Manager.

The Plugin Manager is a global system that allows plugins to register themselves with it, and can then install
those plugins into Scenes as required.

#### Inherited from

[CYBR_Scene](Scenes_CYBR_Scene.CYBR_Scene.md).[plugins](Scenes_CYBR_Scene.CYBR_Scene.md#plugins)

#### Defined in

node_modules/phaser/types/phaser.d.ts:86372

___

### portals

• `Private` **portals**: `StaticGroup`

#### Defined in

[src/Scenes/SceneGame.ts:46](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L46)

___

### registry

• **registry**: `DataManager`

A reference to the global Data Manager.

This property will only be available if defined in the Scene Injection Map.

#### Inherited from

[CYBR_Scene](Scenes_CYBR_Scene.CYBR_Scene.md).[registry](Scenes_CYBR_Scene.CYBR_Scene.md#registry)

#### Defined in

node_modules/phaser/types/phaser.d.ts:86236

___

### remainLife

• `Private` **remainLife**: `number`

#### Defined in

[src/Scenes/SceneGame.ts:58](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L58)

___

### renderer

• **renderer**: `CanvasRenderer` \| `WebGLRenderer`

A reference to the renderer instance Phaser is using, either Canvas Renderer or WebGL Renderer.

#### Inherited from

[CYBR_Scene](Scenes_CYBR_Scene.CYBR_Scene.md).[renderer](Scenes_CYBR_Scene.CYBR_Scene.md#renderer)

#### Defined in

node_modules/phaser/types/phaser.d.ts:86377

___

### scale

• **scale**: `ScaleManager`

A reference to the global Scale Manager.

This property will only be available if defined in the Scene Injection Map.

#### Inherited from

[CYBR_Scene](Scenes_CYBR_Scene.CYBR_Scene.md).[scale](Scenes_CYBR_Scene.CYBR_Scene.md#scale)

#### Defined in

node_modules/phaser/types/phaser.d.ts:86364

___

### scene

• **scene**: `ScenePlugin`

A reference to the Scene Manager Plugin.

This property will only be available if defined in the Scene Injection Map.

#### Inherited from

[CYBR_Scene](Scenes_CYBR_Scene.CYBR_Scene.md).[scene](Scenes_CYBR_Scene.CYBR_Scene.md#scene)

#### Defined in

node_modules/phaser/types/phaser.d.ts:86285

___

### sceneGameMenu\_UI

• `Private` **sceneGameMenu\_UI**: [`SceneGameMenu_UI`](Scenes_SceneGameMenu_UI.SceneGameMenu_UI.md) = `null`

#### Defined in

[src/Scenes/SceneGame.ts:40](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L40)

___

### sceneGame\_UI

• `Private` **sceneGame\_UI**: [`SceneGame_UI`](Scenes_SceneGame_UI.SceneGame_UI.md) = `null`

#### Defined in

[src/Scenes/SceneGame.ts:39](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L39)

___

### sound

• **sound**: `NoAudioSoundManager` \| `HTML5AudioSoundManager` \| `WebAudioSoundManager`

A reference to the Sound Manager.

This property will only be available if defined in the Scene Injection Map and the plugin is installed.

#### Inherited from

[CYBR_Scene](Scenes_CYBR_Scene.CYBR_Scene.md).[sound](Scenes_CYBR_Scene.CYBR_Scene.md#sound)

#### Defined in

node_modules/phaser/types/phaser.d.ts:86243

___

### spawnPositions

• `Private` **spawnPositions**: `Map`<`string`, `Vector2`\>

#### Defined in

[src/Scenes/SceneGame.ts:56](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L56)

___

### spikes

• `Private` **spikes**: `StaticGroup`

#### Defined in

[src/Scenes/SceneGame.ts:47](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L47)

___

### sys

• **sys**: `Systems`

The Scene Systems. You must never overwrite this property, or all hell will break lose.

#### Inherited from

[CYBR_Scene](Scenes_CYBR_Scene.CYBR_Scene.md).[sys](Scenes_CYBR_Scene.CYBR_Scene.md#sys)

#### Defined in

node_modules/phaser/types/phaser.d.ts:86208

___

### textures

• **textures**: `TextureManager`

A reference to the Texture Manager.

This property will only be available if defined in the Scene Injection Map.

#### Inherited from

[CYBR_Scene](Scenes_CYBR_Scene.CYBR_Scene.md).[textures](Scenes_CYBR_Scene.CYBR_Scene.md#textures)

#### Defined in

node_modules/phaser/types/phaser.d.ts:86250

___

### time

• **time**: `Clock`

The Scene Time and Clock Plugin.

This property will only be available if defined in the Scene Injection Map and the plugin is installed.

#### Inherited from

[CYBR_Scene](Scenes_CYBR_Scene.CYBR_Scene.md).[time](Scenes_CYBR_Scene.CYBR_Scene.md#time)

#### Defined in

node_modules/phaser/types/phaser.d.ts:86329

___

### tokens

• `Private` **tokens**: `StaticGroup`

#### Defined in

[src/Scenes/SceneGame.ts:50](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L50)

___

### tweens

• **tweens**: `TweenManager`

The Scene Tween Manager Plugin.

This property will only be available if defined in the Scene Injection Map and the plugin is installed.

#### Inherited from

[CYBR_Scene](Scenes_CYBR_Scene.CYBR_Scene.md).[tweens](Scenes_CYBR_Scene.CYBR_Scene.md#tweens)

#### Defined in

node_modules/phaser/types/phaser.d.ts:86336

## Methods

### activatePortal

▸ `Private` **activatePortal**(`player`, `portal`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `player` | [`Player`](Pawns_Player.Player.md) |
| `portal` | [`Portal`](Platforms_Portal.Portal.md) |

#### Returns

`void`

#### Defined in

[src/Scenes/SceneGame.ts:662](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L662)

___

### applyEffectOnPlayer

▸ `Private` **applyEffectOnPlayer**(`player`, `pickup`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `player` | [`Player`](Pawns_Player.Player.md) |
| `pickup` | [`EffectPickup`](Pickups_EffectPickup.EffectPickup.md) |

#### Returns

`void`

#### Defined in

[src/Scenes/SceneGame.ts:610](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L610)

___

### canPunchPawn

▸ `Private` **canPunchPawn**(`bullet`, `pawn`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bullet` | [`CYBR_Bullet`](Weapons_FireWeapons_CYBR_Bullet.CYBR_Bullet.md) |
| `pawn` | [`Pawn`](Pawns_Pawn.Pawn.md) |

#### Returns

`boolean`

#### Defined in

[src/Scenes/SceneGame.ts:551](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L551)

___

### centerHItem

▸ **centerHItem**(`item`, `offsetX?`): `CenterableObject`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `item` | `CenterableObject` | `undefined` |
| `offsetX` | `number` | `0` |

#### Returns

`CenterableObject`

#### Inherited from

[CYBR_Scene](Scenes_CYBR_Scene.CYBR_Scene.md).[centerHItem](Scenes_CYBR_Scene.CYBR_Scene.md#centerhitem)

#### Defined in

[src/Scenes/CYBR_Scene.ts:46](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/CYBR_Scene.ts#L46)

___

### centerItem

▸ **centerItem**(`item`, `offsetX?`, `offsetY?`): `CenterableObject`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `item` | `CenterableObject` | `undefined` |
| `offsetX` | `number` | `0` |
| `offsetY` | `number` | `0` |

#### Returns

`CenterableObject`

#### Inherited from

[CYBR_Scene](Scenes_CYBR_Scene.CYBR_Scene.md).[centerItem](Scenes_CYBR_Scene.CYBR_Scene.md#centeritem)

#### Defined in

[src/Scenes/CYBR_Scene.ts:27](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/CYBR_Scene.ts#L27)

___

### centerVItem

▸ **centerVItem**(`item`, `offsetY?`): `CenterableObject`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `item` | `CenterableObject` | `undefined` |
| `offsetY` | `number` | `0` |

#### Returns

`CenterableObject`

#### Inherited from

[CYBR_Scene](Scenes_CYBR_Scene.CYBR_Scene.md).[centerVItem](Scenes_CYBR_Scene.CYBR_Scene.md#centervitem)

#### Defined in

[src/Scenes/CYBR_Scene.ts:38](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/CYBR_Scene.ts#L38)

___

### collectToken

▸ `Private` **collectToken**(`player`, `token`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `player` | [`Player`](Pawns_Player.Player.md) |
| `token` | [`Token`](Pickups_Token.Token.md) |

#### Returns

`void`

#### Defined in

[src/Scenes/SceneGame.ts:605](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L605)

___

### completeGame

▸ `Private` **completeGame**(): `void`

#### Returns

`void`

#### Defined in

[src/Scenes/SceneGame.ts:658](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L658)

___

### completeLevel

▸ `Private` **completeLevel**(): `void`

#### Returns

`void`

#### Defined in

[src/Scenes/SceneGame.ts:666](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L666)

___

### create

▸ **create**(`data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`SceneData`](../modules/Scenes_CYBR_Scene.md#scenedata) |

#### Returns

`void`

#### Defined in

[src/Scenes/SceneGame.ts:95](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L95)

___

### createBackground

▸ `Private` **createBackground**(): [`SceneGame`](Scenes_SceneGame.SceneGame.md)

#### Returns

[`SceneGame`](Scenes_SceneGame.SceneGame.md)

#### Defined in

[src/Scenes/SceneGame.ts:155](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L155)

___

### createCameras

▸ `Private` **createCameras**(): [`SceneGame`](Scenes_SceneGame.SceneGame.md)

#### Returns

[`SceneGame`](Scenes_SceneGame.SceneGame.md)

#### Defined in

[src/Scenes/SceneGame.ts:423](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L423)

___

### createCheckpoints

▸ `Private` **createCheckpoints**(): [`SceneGame`](Scenes_SceneGame.SceneGame.md)

#### Returns

[`SceneGame`](Scenes_SceneGame.SceneGame.md)

#### Defined in

[src/Scenes/SceneGame.ts:185](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L185)

___

### createEnemies

▸ `Private` **createEnemies**(): [`SceneGame`](Scenes_SceneGame.SceneGame.md)

#### Returns

[`SceneGame`](Scenes_SceneGame.SceneGame.md)

#### Defined in

[src/Scenes/SceneGame.ts:345](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L345)

___

### createGameMode

▸ `Private` **createGameMode**(): [`SceneGame`](Scenes_SceneGame.SceneGame.md)

#### Returns

[`SceneGame`](Scenes_SceneGame.SceneGame.md)

#### Defined in

[src/Scenes/SceneGame.ts:144](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L144)

___

### createInteractions

▸ `Private` **createInteractions**(): [`SceneGame`](Scenes_SceneGame.SceneGame.md)

#### Returns

[`SceneGame`](Scenes_SceneGame.SceneGame.md)

#### Defined in

[src/Scenes/SceneGame.ts:375](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L375)

___

### createKeyboardMap

▸ `Private` **createKeyboardMap**(): [`SceneGame`](Scenes_SceneGame.SceneGame.md)

#### Returns

[`SceneGame`](Scenes_SceneGame.SceneGame.md)

#### Defined in

[src/Scenes/SceneGame.ts:318](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L318)

___

### createLadders

▸ `Private` **createLadders**(): [`SceneGame`](Scenes_SceneGame.SceneGame.md)

#### Returns

[`SceneGame`](Scenes_SceneGame.SceneGame.md)

#### Defined in

[src/Scenes/SceneGame.ts:198](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L198)

___

### createLevel

▸ `Private` **createLevel**(): `void`

#### Returns

`void`

#### Defined in

[src/Scenes/SceneGame.ts:106](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L106)

___

### createMap

▸ `Private` **createMap**(): [`SceneGame`](Scenes_SceneGame.SceneGame.md)

#### Returns

[`SceneGame`](Scenes_SceneGame.SceneGame.md)

#### Defined in

[src/Scenes/SceneGame.ts:150](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L150)

___

### createPickupItems

▸ `Private` **createPickupItems**(): [`SceneGame`](Scenes_SceneGame.SceneGame.md)

#### Returns

[`SceneGame`](Scenes_SceneGame.SceneGame.md)

#### Defined in

[src/Scenes/SceneGame.ts:299](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L299)

___

### createPlatforms

▸ `Private` **createPlatforms**(): [`SceneGame`](Scenes_SceneGame.SceneGame.md)

#### Returns

[`SceneGame`](Scenes_SceneGame.SceneGame.md)

#### Defined in

[src/Scenes/SceneGame.ts:164](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L164)

___

### createPlayer

▸ `Private` **createPlayer**(): [`SceneGame`](Scenes_SceneGame.SceneGame.md)

#### Returns

[`SceneGame`](Scenes_SceneGame.SceneGame.md)

#### Defined in

[src/Scenes/SceneGame.ts:328](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L328)

___

### createPortals

▸ `Private` **createPortals**(): [`SceneGame`](Scenes_SceneGame.SceneGame.md)

#### Returns

[`SceneGame`](Scenes_SceneGame.SceneGame.md)

#### Defined in

[src/Scenes/SceneGame.ts:236](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L236)

___

### createTokens

▸ `Private` **createTokens**(): [`SceneGame`](Scenes_SceneGame.SceneGame.md)

#### Returns

[`SceneGame`](Scenes_SceneGame.SceneGame.md)

#### Defined in

[src/Scenes/SceneGame.ts:278](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L278)

___

### createTraps

▸ `Private` **createTraps**(): [`SceneGame`](Scenes_SceneGame.SceneGame.md)

#### Returns

[`SceneGame`](Scenes_SceneGame.SceneGame.md)

#### Defined in

[src/Scenes/SceneGame.ts:249](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L249)

___

### createUI

▸ `Private` **createUI**(): `void`

#### Returns

`void`

#### Defined in

[src/Scenes/SceneGame.ts:429](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L429)

___

### getCollectedTokens

▸ **getCollectedTokens**(): `number`

#### Returns

`number`

#### Defined in

[src/Scenes/SceneGame.ts:680](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L680)

___

### getRemainLife

▸ **getRemainLife**(): `number`

#### Returns

`number`

#### Defined in

[src/Scenes/SceneGame.ts:684](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L684)

___

### init

▸ **init**(`data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`SceneData`](../modules/Scenes_CYBR_Scene.md#scenedata) |

#### Returns

`void`

#### Defined in

[src/Scenes/SceneGame.ts:69](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L69)

___

### isGameCompleted

▸ `Private` **isGameCompleted**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/Scenes/SceneGame.ts:654](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L654)

___

### isGameOver

▸ `Private` **isGameOver**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/Scenes/SceneGame.ts:637](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L637)

___

### loadMap

▸ `Private` **loadMap**(): `void`

#### Returns

`void`

#### Defined in

[src/Scenes/SceneGame.ts:81](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L81)

___

### onPlayerDie

▸ `Private` **onPlayerDie**(): `void`

#### Returns

`void`

#### Defined in

[src/Scenes/SceneGame.ts:591](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L591)

___

### onPlayerHealthChanged

▸ `Private` **onPlayerHealthChanged**(`health`, `maxHealth`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `health` | `number` |
| `maxHealth` | `number` |

#### Returns

`void`

#### Defined in

[src/Scenes/SceneGame.ts:587](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L587)

___

### onPlayerOverlapEnnemy

▸ `Private` **onPlayerOverlapEnnemy**(`player`, `enemy`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `player` | [`Player`](Pawns_Player.Player.md) |
| `enemy` | [`Pawn`](Pawns_Pawn.Pawn.md) |

#### Returns

`void`

#### Defined in

[src/Scenes/SceneGame.ts:563](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L563)

___

### onPlayerOverlapMine

▸ `Private` **onPlayerOverlapMine**(`player`, `mine`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `player` | [`Player`](Pawns_Player.Player.md) |
| `mine` | [`Mine`](Platforms_Mine.Mine.md) |

#### Returns

`void`

#### Defined in

[src/Scenes/SceneGame.ts:579](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L579)

___

### onPlayerOverlapSpike

▸ `Private` **onPlayerOverlapSpike**(`player`, `spike`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `player` | [`Player`](Pawns_Player.Player.md) |
| `spike` | [`Spike`](Platforms_Spike.Spike.md) |

#### Returns

`void`

#### Defined in

[src/Scenes/SceneGame.ts:575](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L575)

___

### onPunchPawn

▸ `Private` **onPunchPawn**(`punch`, `pawn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `punch` | [`CyberPunch`](Weapons_CyberPunch.CyberPunch.md) |
| `pawn` | [`Pawn`](Pawns_Pawn.Pawn.md) |

#### Returns

`void`

#### Defined in

[src/Scenes/SceneGame.ts:546](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L546)

___

### onWeaponHitPawn

▸ `Private` **onWeaponHitPawn**(`bullet`, `pawn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bullet` | [`CYBR_Bullet`](Weapons_FireWeapons_CYBR_Bullet.CYBR_Bullet.md) |
| `pawn` | [`Pawn`](Pawns_Pawn.Pawn.md) |

#### Returns

`void`

#### Defined in

[src/Scenes/SceneGame.ts:537](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L537)

___

### onWeaponHitPlatforms

▸ `Private` **onWeaponHitPlatforms**(`bullet`, `platform`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bullet` | [`CYBR_Bullet`](Weapons_FireWeapons_CYBR_Bullet.CYBR_Bullet.md) |
| `platform` | `TilemapLayer` |

#### Returns

`void`

#### Defined in

[src/Scenes/SceneGame.ts:542](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L542)

___

### overlapLadder

▸ `Private` **overlapLadder**(`player`, `ladder`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `player` | [`Player`](Pawns_Player.Player.md) |
| `ladder` | [`Ladder`](Platforms_Ladder.Ladder.md) |

#### Returns

`void`

#### Defined in

[src/Scenes/SceneGame.ts:671](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L671)

___

### playerCanOverlapEnnemy

▸ `Private` **playerCanOverlapEnnemy**(`player`, `enemy`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `player` | [`Player`](Pawns_Player.Player.md) |
| `enemy` | [`Pawn`](Pawns_Pawn.Pawn.md) |

#### Returns

`boolean`

#### Defined in

[src/Scenes/SceneGame.ts:559](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L559)

___

### playerCanOverlapMine

▸ `Private` **playerCanOverlapMine**(`player`, `mine`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `player` | [`Player`](Pawns_Player.Player.md) |
| `mine` | [`Mine`](Platforms_Mine.Mine.md) |

#### Returns

`boolean`

#### Defined in

[src/Scenes/SceneGame.ts:571](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L571)

___

### playerCanOverlapSpike

▸ `Private` **playerCanOverlapSpike**(`player`, `spike`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `player` | [`Player`](Pawns_Player.Player.md) |
| `spike` | [`Spike`](Platforms_Spike.Spike.md) |

#### Returns

`boolean`

#### Defined in

[src/Scenes/SceneGame.ts:567](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L567)

___

### playerCollideMovingPlatforms

▸ `Private` **playerCollideMovingPlatforms**(`player`, `movingPlatform`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `player` | [`Player`](Pawns_Player.Player.md) |
| `movingPlatform` | [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md) |

#### Returns

`void`

#### Defined in

[src/Scenes/SceneGame.ts:675](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L675)

___

### playerReachedDeadZone

▸ `Private` **playerReachedDeadZone**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/Scenes/SceneGame.ts:555](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L555)

___

### postUpdate

▸ `Private` **postUpdate**(): `void`

#### Returns

`void`

#### Defined in

[src/Scenes/SceneGame.ts:523](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L523)

___

### preload

▸ **preload**(): `void`

#### Returns

`void`

#### Defined in

[src/Scenes/SceneGame.ts:77](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L77)

___

### reachCheckpoint

▸ `Private` **reachCheckpoint**(`player`, `checkpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `player` | [`Player`](Pawns_Player.Player.md) |
| `checkpoint` | `Image` |

#### Returns

`void`

#### Defined in

[src/Scenes/SceneGame.ts:616](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L616)

___

### respawnPawn

▸ `Private` **respawnPawn**(`pawn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pawn` | [`Pawn`](Pawns_Pawn.Pawn.md) |

#### Returns

`void`

#### Defined in

[src/Scenes/SceneGame.ts:627](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L627)

___

### respawnPlayer

▸ `Private` **respawnPlayer**(): `void`

#### Returns

`void`

#### Defined in

[src/Scenes/SceneGame.ts:623](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L623)

___

### restartAIs

▸ `Private` **restartAIs**(): `void`

#### Returns

`void`

#### Defined in

[src/Scenes/SceneGame.ts:485](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L485)

___

### restartLevel

▸ **restartLevel**(): `void`

#### Returns

`void`

#### Defined in

[src/Scenes/SceneGame.ts:130](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L130)

___

### restartMovingPlatforms

▸ `Private` **restartMovingPlatforms**(): `void`

#### Returns

`void`

#### Defined in

[src/Scenes/SceneGame.ts:491](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L491)

___

### restartPickupItems

▸ `Private` **restartPickupItems**(): `void`

#### Returns

`void`

#### Defined in

[src/Scenes/SceneGame.ts:473](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L473)

___

### restartPortals

▸ `Private` **restartPortals**(): `void`

#### Returns

`void`

#### Defined in

[src/Scenes/SceneGame.ts:479](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L479)

___

### restartTokens

▸ `Private` **restartTokens**(): `void`

#### Returns

`void`

#### Defined in

[src/Scenes/SceneGame.ts:467](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L467)

___

### restartTraps

▸ `Private` **restartTraps**(): `void`

#### Returns

`void`

#### Defined in

[src/Scenes/SceneGame.ts:497](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L497)

___

### setCollectedTokens

▸ `Private` **setCollectedTokens**(`tokens`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokens` | `number` |

#### Returns

`void`

#### Defined in

[src/Scenes/SceneGame.ts:688](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L688)

___

### setGameOver

▸ `Private` **setGameOver**(`gameOver`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gameOver` | `boolean` |

#### Returns

`void`

#### Defined in

[src/Scenes/SceneGame.ts:641](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L641)

___

### setRemainLife

▸ `Private` **setRemainLife**(`remainLife`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `remainLife` | `number` |

#### Returns

`void`

#### Defined in

[src/Scenes/SceneGame.ts:693](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L693)

___

### showGame

▸ **showGame**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/Scenes/SceneGame.ts:446](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L446)

___

### showGameMenu

▸ **showGameMenu**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/Scenes/SceneGame.ts:452](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L452)

___

### showGameUI

▸ **showGameUI**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/Scenes/SceneGame.ts:439](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L439)

___

### showMainMenu

▸ **showMainMenu**(): `void`

#### Returns

`void`

#### Defined in

[src/Scenes/SceneGame.ts:457](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L457)

___

### startLevel

▸ **startLevel**(`level`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | `number` |

#### Returns

`void`

#### Defined in

[src/Scenes/SceneGame.ts:125](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L125)

___

### startNextLevel

▸ **startNextLevel**(): `void`

#### Returns

`void`

#### Defined in

[src/Scenes/SceneGame.ts:134](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L134)

___

### update

▸ **update**(`time`, `delta`): `void`

This method should be overridden by your own Scenes.

This method is called once per game step while the scene is running.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time` | `number` | The current time. Either a High Resolution Timer value if it comes from Request Animation Frame, or Date.now if using SetTimeout. |
| `delta` | `number` | The delta time in ms since the last frame. This is a smoothed and capped value based on the FPS rate. |

#### Returns

`void`

#### Overrides

[CYBR_Scene](Scenes_CYBR_Scene.CYBR_Scene.md).[update](Scenes_CYBR_Scene.CYBR_Scene.md#update)

#### Defined in

[src/Scenes/SceneGame.ts:506](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L506)

___

### weaponCanHitPawn

▸ `Private` **weaponCanHitPawn**(`bullet`, `pawn`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bullet` | [`CYBR_Bullet`](Weapons_FireWeapons_CYBR_Bullet.CYBR_Bullet.md) |
| `pawn` | [`Pawn`](Pawns_Pawn.Pawn.md) |

#### Returns

`boolean`

#### Defined in

[src/Scenes/SceneGame.ts:533](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame.ts#L533)

___

### formatTime

▸ `Static` **formatTime**(`milliseconds`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `milliseconds` | `number` |

#### Returns

`string`

#### Inherited from

[CYBR_Scene](Scenes_CYBR_Scene.CYBR_Scene.md).[formatTime](Scenes_CYBR_Scene.CYBR_Scene.md#formattime)

#### Defined in

[src/Scenes/CYBR_Scene.ts:54](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/CYBR_Scene.ts#L54)

___

### generateUniqueName

▸ `Static` **generateUniqueName**(`gameObject`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gameObject` | `GameObject` |

#### Returns

`string`

#### Inherited from

[CYBR_Scene](Scenes_CYBR_Scene.CYBR_Scene.md).[generateUniqueName](Scenes_CYBR_Scene.CYBR_Scene.md#generateuniquename)

#### Defined in

[src/Scenes/CYBR_Scene.ts:21](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/CYBR_Scene.ts#L21)
