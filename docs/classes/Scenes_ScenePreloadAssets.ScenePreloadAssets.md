[cyber2d](../README.md) / [Modules](../modules.md) / [Scenes/ScenePreloadAssets](../modules/Scenes_ScenePreloadAssets.md) / ScenePreloadAssets

# Class: ScenePreloadAssets

[Scenes/ScenePreloadAssets](../modules/Scenes_ScenePreloadAssets.md).ScenePreloadAssets

## Hierarchy

- [`CYBR_Scene`](Scenes_CYBR_Scene.CYBR_Scene.md)

  ↳ **`ScenePreloadAssets`**

## Table of contents

### Constructors

- [constructor](Scenes_ScenePreloadAssets.ScenePreloadAssets.md#constructor)

### Properties

- [add](Scenes_ScenePreloadAssets.ScenePreloadAssets.md#add)
- [anims](Scenes_ScenePreloadAssets.ScenePreloadAssets.md#anims)
- [cache](Scenes_ScenePreloadAssets.ScenePreloadAssets.md#cache)
- [cameras](Scenes_ScenePreloadAssets.ScenePreloadAssets.md#cameras)
- [children](Scenes_ScenePreloadAssets.ScenePreloadAssets.md#children)
- [data](Scenes_ScenePreloadAssets.ScenePreloadAssets.md#data)
- [events](Scenes_ScenePreloadAssets.ScenePreloadAssets.md#events)
- [facebook](Scenes_ScenePreloadAssets.ScenePreloadAssets.md#facebook)
- [game](Scenes_ScenePreloadAssets.ScenePreloadAssets.md#game)
- [input](Scenes_ScenePreloadAssets.ScenePreloadAssets.md#input)
- [lights](Scenes_ScenePreloadAssets.ScenePreloadAssets.md#lights)
- [load](Scenes_ScenePreloadAssets.ScenePreloadAssets.md#load)
- [make](Scenes_ScenePreloadAssets.ScenePreloadAssets.md#make)
- [matter](Scenes_ScenePreloadAssets.ScenePreloadAssets.md#matter)
- [physics](Scenes_ScenePreloadAssets.ScenePreloadAssets.md#physics)
- [plugins](Scenes_ScenePreloadAssets.ScenePreloadAssets.md#plugins)
- [registry](Scenes_ScenePreloadAssets.ScenePreloadAssets.md#registry)
- [renderer](Scenes_ScenePreloadAssets.ScenePreloadAssets.md#renderer)
- [scale](Scenes_ScenePreloadAssets.ScenePreloadAssets.md#scale)
- [scene](Scenes_ScenePreloadAssets.ScenePreloadAssets.md#scene)
- [sound](Scenes_ScenePreloadAssets.ScenePreloadAssets.md#sound)
- [splashScreen](Scenes_ScenePreloadAssets.ScenePreloadAssets.md#splashscreen)
- [sys](Scenes_ScenePreloadAssets.ScenePreloadAssets.md#sys)
- [textures](Scenes_ScenePreloadAssets.ScenePreloadAssets.md#textures)
- [time](Scenes_ScenePreloadAssets.ScenePreloadAssets.md#time)
- [tweens](Scenes_ScenePreloadAssets.ScenePreloadAssets.md#tweens)

### Methods

- [centerHItem](Scenes_ScenePreloadAssets.ScenePreloadAssets.md#centerhitem)
- [centerItem](Scenes_ScenePreloadAssets.ScenePreloadAssets.md#centeritem)
- [centerVItem](Scenes_ScenePreloadAssets.ScenePreloadAssets.md#centervitem)
- [create](Scenes_ScenePreloadAssets.ScenePreloadAssets.md#create)
- [createAudioManager](Scenes_ScenePreloadAssets.ScenePreloadAssets.md#createaudiomanager)
- [createMainMenu](Scenes_ScenePreloadAssets.ScenePreloadAssets.md#createmainmenu)
- [createPlatformAtlas](Scenes_ScenePreloadAssets.ScenePreloadAssets.md#createplatformatlas)
- [createWeaponAtlas](Scenes_ScenePreloadAssets.ScenePreloadAssets.md#createweaponatlas)
- [init](Scenes_ScenePreloadAssets.ScenePreloadAssets.md#init)
- [loadAudioSprite](Scenes_ScenePreloadAssets.ScenePreloadAssets.md#loadaudiosprite)
- [loadPawns](Scenes_ScenePreloadAssets.ScenePreloadAssets.md#loadpawns)
- [loadPlatforms](Scenes_ScenePreloadAssets.ScenePreloadAssets.md#loadplatforms)
- [loadVideos](Scenes_ScenePreloadAssets.ScenePreloadAssets.md#loadvideos)
- [loadWeapons](Scenes_ScenePreloadAssets.ScenePreloadAssets.md#loadweapons)
- [preload](Scenes_ScenePreloadAssets.ScenePreloadAssets.md#preload)
- [update](Scenes_ScenePreloadAssets.ScenePreloadAssets.md#update)
- [formatTime](Scenes_ScenePreloadAssets.ScenePreloadAssets.md#formattime)
- [generateUniqueName](Scenes_ScenePreloadAssets.ScenePreloadAssets.md#generateuniquename)

## Constructors

### constructor

• **new ScenePreloadAssets**()

#### Overrides

[CYBR_Scene](Scenes_CYBR_Scene.CYBR_Scene.md).[constructor](Scenes_CYBR_Scene.CYBR_Scene.md#constructor)

#### Defined in

[src/Scenes/ScenePreloadAssets.ts:11](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/ScenePreloadAssets.ts#L11)

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

### children

• **children**: `DisplayList`

The Game Object Display List belonging to this Scene.

This property will only be available if defined in the Scene Injection Map.

#### Inherited from

[CYBR_Scene](Scenes_CYBR_Scene.CYBR_Scene.md).[children](Scenes_CYBR_Scene.CYBR_Scene.md#children)

#### Defined in

node_modules/phaser/types/phaser.d.ts:86292

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

### input

• **input**: `InputPlugin`

The Scene Input Manager Plugin.

This property will only be available if defined in the Scene Injection Map and the plugin is installed.

#### Inherited from

[CYBR_Scene](Scenes_CYBR_Scene.CYBR_Scene.md).[input](Scenes_CYBR_Scene.CYBR_Scene.md#input)

#### Defined in

node_modules/phaser/types/phaser.d.ts:86315

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

### physics

• **physics**: `ArcadePhysics`

The Scene Arcade Physics Plugin.

This property will only be available if defined in the Scene Injection Map, the plugin is installed and configured.

#### Inherited from

[CYBR_Scene](Scenes_CYBR_Scene.CYBR_Scene.md).[physics](Scenes_CYBR_Scene.CYBR_Scene.md#physics)

#### Defined in

node_modules/phaser/types/phaser.d.ts:86343

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

### registry

• **registry**: `DataManager`

A reference to the global Data Manager.

This property will only be available if defined in the Scene Injection Map.

#### Inherited from

[CYBR_Scene](Scenes_CYBR_Scene.CYBR_Scene.md).[registry](Scenes_CYBR_Scene.CYBR_Scene.md#registry)

#### Defined in

node_modules/phaser/types/phaser.d.ts:86236

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

### sound

• **sound**: `NoAudioSoundManager` \| `HTML5AudioSoundManager` \| `WebAudioSoundManager`

A reference to the Sound Manager.

This property will only be available if defined in the Scene Injection Map and the plugin is installed.

#### Inherited from

[CYBR_Scene](Scenes_CYBR_Scene.CYBR_Scene.md).[sound](Scenes_CYBR_Scene.CYBR_Scene.md#sound)

#### Defined in

node_modules/phaser/types/phaser.d.ts:86243

___

### splashScreen

• `Private` **splashScreen**: [`SplashScreen`](UI_SplashScreen.SplashScreen.md)

#### Defined in

[src/Scenes/ScenePreloadAssets.ts:9](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/ScenePreloadAssets.ts#L9)

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

### tweens

• **tweens**: `TweenManager`

The Scene Tween Manager Plugin.

This property will only be available if defined in the Scene Injection Map and the plugin is installed.

#### Inherited from

[CYBR_Scene](Scenes_CYBR_Scene.CYBR_Scene.md).[tweens](Scenes_CYBR_Scene.CYBR_Scene.md#tweens)

#### Defined in

node_modules/phaser/types/phaser.d.ts:86336

## Methods

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

### create

▸ **create**(): `void`

#### Returns

`void`

#### Defined in

[src/Scenes/ScenePreloadAssets.ts:80](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/ScenePreloadAssets.ts#L80)

___

### createAudioManager

▸ `Private` **createAudioManager**(): `void`

#### Returns

`void`

#### Defined in

[src/Scenes/ScenePreloadAssets.ts:115](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/ScenePreloadAssets.ts#L115)

___

### createMainMenu

▸ `Private` **createMainMenu**(): `void`

#### Returns

`void`

#### Defined in

[src/Scenes/ScenePreloadAssets.ts:101](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/ScenePreloadAssets.ts#L101)

___

### createPlatformAtlas

▸ `Private` **createPlatformAtlas**(): `void`

#### Returns

`void`

#### Defined in

[src/Scenes/ScenePreloadAssets.ts:88](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/ScenePreloadAssets.ts#L88)

___

### createWeaponAtlas

▸ `Private` **createWeaponAtlas**(): `void`

#### Returns

`void`

#### Defined in

[src/Scenes/ScenePreloadAssets.ts:95](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/ScenePreloadAssets.ts#L95)

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Defined in

[src/Scenes/ScenePreloadAssets.ts:19](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/ScenePreloadAssets.ts#L19)

___

### loadAudioSprite

▸ `Private` **loadAudioSprite**(): `void`

Load audios from an audio sprite. Below is an example to generate an audio sprite from audios (make sure to run in admin). 
audiosprite -e "mp3,ogg" -o ./audiosprite *.mp3 -f howler
Check https://www.npmjs.com/package/audiosprite

#### Returns

`void`

#### Defined in

[src/Scenes/ScenePreloadAssets.ts:44](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/ScenePreloadAssets.ts#L44)

___

### loadPawns

▸ `Private` **loadPawns**(): `void`

#### Returns

`void`

#### Defined in

[src/Scenes/ScenePreloadAssets.ts:56](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/ScenePreloadAssets.ts#L56)

___

### loadPlatforms

▸ `Private` **loadPlatforms**(): `void`

#### Returns

`void`

#### Defined in

[src/Scenes/ScenePreloadAssets.ts:70](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/ScenePreloadAssets.ts#L70)

___

### loadVideos

▸ `Private` **loadVideos**(): `void`

#### Returns

`void`

#### Defined in

[src/Scenes/ScenePreloadAssets.ts:50](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/ScenePreloadAssets.ts#L50)

___

### loadWeapons

▸ `Private` **loadWeapons**(): `void`

#### Returns

`void`

#### Defined in

[src/Scenes/ScenePreloadAssets.ts:63](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/ScenePreloadAssets.ts#L63)

___

### preload

▸ **preload**(): `void`

#### Returns

`void`

#### Defined in

[src/Scenes/ScenePreloadAssets.ts:26](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/ScenePreloadAssets.ts#L26)

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

#### Inherited from

[CYBR_Scene](Scenes_CYBR_Scene.CYBR_Scene.md).[update](Scenes_CYBR_Scene.CYBR_Scene.md#update)

#### Defined in

node_modules/phaser/types/phaser.d.ts:86386

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
