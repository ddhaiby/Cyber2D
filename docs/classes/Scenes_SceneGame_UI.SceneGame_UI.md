[cyber2d](../README.md) / [Modules](../modules.md) / [Scenes/SceneGame\_UI](../modules/Scenes_SceneGame_UI.md) / SceneGame\_UI

# Class: SceneGame\_UI

[Scenes/SceneGame_UI](../modules/Scenes_SceneGame_UI.md).SceneGame_UI

## Hierarchy

- [`CYBR_Scene`](Scenes_CYBR_Scene.CYBR_Scene.md)

  ↳ **`SceneGame_UI`**

## Table of contents

### Constructors

- [constructor](Scenes_SceneGame_UI.SceneGame_UI.md#constructor)

### Properties

- [add](Scenes_SceneGame_UI.SceneGame_UI.md#add)
- [anims](Scenes_SceneGame_UI.SceneGame_UI.md#anims)
- [bulletBar](Scenes_SceneGame_UI.SceneGame_UI.md#bulletbar)
- [cache](Scenes_SceneGame_UI.SceneGame_UI.md#cache)
- [cameras](Scenes_SceneGame_UI.SceneGame_UI.md#cameras)
- [children](Scenes_SceneGame_UI.SceneGame_UI.md#children)
- [chronoText](Scenes_SceneGame_UI.SceneGame_UI.md#chronotext)
- [data](Scenes_SceneGame_UI.SceneGame_UI.md#data)
- [elapsedTime](Scenes_SceneGame_UI.SceneGame_UI.md#elapsedtime)
- [events](Scenes_SceneGame_UI.SceneGame_UI.md#events)
- [facebook](Scenes_SceneGame_UI.SceneGame_UI.md#facebook)
- [game](Scenes_SceneGame_UI.SceneGame_UI.md#game)
- [healthBar](Scenes_SceneGame_UI.SceneGame_UI.md#healthbar)
- [input](Scenes_SceneGame_UI.SceneGame_UI.md#input)
- [levelStarting](Scenes_SceneGame_UI.SceneGame_UI.md#levelstarting)
- [levelTransition](Scenes_SceneGame_UI.SceneGame_UI.md#leveltransition)
- [lifeItem](Scenes_SceneGame_UI.SceneGame_UI.md#lifeitem)
- [lights](Scenes_SceneGame_UI.SceneGame_UI.md#lights)
- [load](Scenes_SceneGame_UI.SceneGame_UI.md#load)
- [make](Scenes_SceneGame_UI.SceneGame_UI.md#make)
- [matter](Scenes_SceneGame_UI.SceneGame_UI.md#matter)
- [physics](Scenes_SceneGame_UI.SceneGame_UI.md#physics)
- [plugins](Scenes_SceneGame_UI.SceneGame_UI.md#plugins)
- [registry](Scenes_SceneGame_UI.SceneGame_UI.md#registry)
- [renderer](Scenes_SceneGame_UI.SceneGame_UI.md#renderer)
- [scale](Scenes_SceneGame_UI.SceneGame_UI.md#scale)
- [scene](Scenes_SceneGame_UI.SceneGame_UI.md#scene)
- [sceneGame](Scenes_SceneGame_UI.SceneGame_UI.md#scenegame)
- [sound](Scenes_SceneGame_UI.SceneGame_UI.md#sound)
- [sys](Scenes_SceneGame_UI.SceneGame_UI.md#sys)
- [textures](Scenes_SceneGame_UI.SceneGame_UI.md#textures)
- [time](Scenes_SceneGame_UI.SceneGame_UI.md#time)
- [tokenScoreItem](Scenes_SceneGame_UI.SceneGame_UI.md#tokenscoreitem)
- [tweens](Scenes_SceneGame_UI.SceneGame_UI.md#tweens)

### Methods

- [centerHItem](Scenes_SceneGame_UI.SceneGame_UI.md#centerhitem)
- [centerItem](Scenes_SceneGame_UI.SceneGame_UI.md#centeritem)
- [centerVItem](Scenes_SceneGame_UI.SceneGame_UI.md#centervitem)
- [create](Scenes_SceneGame_UI.SceneGame_UI.md#create)
- [createBulletBar](Scenes_SceneGame_UI.SceneGame_UI.md#createbulletbar)
- [createChrono](Scenes_SceneGame_UI.SceneGame_UI.md#createchrono)
- [createGameOverScreen](Scenes_SceneGame_UI.SceneGame_UI.md#creategameoverscreen)
- [createHealthBar](Scenes_SceneGame_UI.SceneGame_UI.md#createhealthbar)
- [createLifeItem](Scenes_SceneGame_UI.SceneGame_UI.md#createlifeitem)
- [createTokenScoreItem](Scenes_SceneGame_UI.SceneGame_UI.md#createtokenscoreitem)
- [init](Scenes_SceneGame_UI.SceneGame_UI.md#init)
- [startLevelCompletedTransition](Scenes_SceneGame_UI.SceneGame_UI.md#startlevelcompletedtransition)
- [startLevelStartedTransition](Scenes_SceneGame_UI.SceneGame_UI.md#startlevelstartedtransition)
- [update](Scenes_SceneGame_UI.SceneGame_UI.md#update)
- [formatTime](Scenes_SceneGame_UI.SceneGame_UI.md#formattime)
- [generateUniqueName](Scenes_SceneGame_UI.SceneGame_UI.md#generateuniquename)

## Constructors

### constructor

• **new SceneGame_UI**()

#### Overrides

[CYBR_Scene](Scenes_CYBR_Scene.CYBR_Scene.md).[constructor](Scenes_CYBR_Scene.CYBR_Scene.md#constructor)

#### Defined in

[src/Scenes/SceneGame_UI.ts:27](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame_UI.ts#L27)

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

### bulletBar

• `Private` **bulletBar**: [`BulletBar`](UI_BulletBar.BulletBar.md)

#### Defined in

[src/Scenes/SceneGame_UI.ts:18](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame_UI.ts#L18)

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

### chronoText

• `Private` **chronoText**: `Text`

#### Defined in

[src/Scenes/SceneGame_UI.ts:19](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame_UI.ts#L19)

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

### elapsedTime

• `Private` **elapsedTime**: `number` = `0`

#### Defined in

[src/Scenes/SceneGame_UI.ts:13](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame_UI.ts#L13)

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

### healthBar

• `Private` **healthBar**: [`HealthBar`](UI_HealthBar.HealthBar.md)

#### Defined in

[src/Scenes/SceneGame_UI.ts:17](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame_UI.ts#L17)

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

### levelStarting

• `Private` **levelStarting**: `boolean` = `false`

#### Defined in

[src/Scenes/SceneGame_UI.ts:25](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame_UI.ts#L25)

___

### levelTransition

• `Private` **levelTransition**: [`LevelTransition`](UI_LevelTransition.LevelTransition.md)

#### Defined in

[src/Scenes/SceneGame_UI.ts:24](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame_UI.ts#L24)

___

### lifeItem

• `Private` **lifeItem**: `Map`<`string`, `GameObject`\>

#### Defined in

[src/Scenes/SceneGame_UI.ts:21](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame_UI.ts#L21)

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

### sceneGame

• `Private` **sceneGame**: [`SceneGame`](Scenes_SceneGame.SceneGame.md)

#### Defined in

[src/Scenes/SceneGame_UI.ts:12](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame_UI.ts#L12)

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

### tokenScoreItem

• `Private` **tokenScoreItem**: `Map`<`string`, `GameObject`\>

#### Defined in

[src/Scenes/SceneGame_UI.ts:20](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame_UI.ts#L20)

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

[src/Scenes/SceneGame_UI.ts:41](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame_UI.ts#L41)

___

### createBulletBar

▸ `Private` **createBulletBar**(): `void`

#### Returns

`void`

#### Defined in

[src/Scenes/SceneGame_UI.ts:66](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame_UI.ts#L66)

___

### createChrono

▸ `Private` **createChrono**(): `Text`

#### Returns

`Text`

#### Defined in

[src/Scenes/SceneGame_UI.ts:145](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame_UI.ts#L145)

___

### createGameOverScreen

▸ `Private` **createGameOverScreen**(): `void`

#### Returns

`void`

#### Defined in

[src/Scenes/SceneGame_UI.ts:135](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame_UI.ts#L135)

___

### createHealthBar

▸ `Private` **createHealthBar**(): `void`

#### Returns

`void`

#### Defined in

[src/Scenes/SceneGame_UI.ts:58](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame_UI.ts#L58)

___

### createLifeItem

▸ `Private` **createLifeItem**(): `Map`<`string`, `GameObject`\>

#### Returns

`Map`<`string`, `GameObject`\>

#### Defined in

[src/Scenes/SceneGame_UI.ts:110](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame_UI.ts#L110)

___

### createTokenScoreItem

▸ `Private` **createTokenScoreItem**(): `Map`<`string`, `GameObject`\>

#### Returns

`Map`<`string`, `GameObject`\>

#### Defined in

[src/Scenes/SceneGame_UI.ts:85](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame_UI.ts#L85)

___

### init

▸ **init**(`sceneGame`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sceneGame` | [`SceneGame`](Scenes_SceneGame.SceneGame.md) |

#### Returns

`void`

#### Defined in

[src/Scenes/SceneGame_UI.ts:34](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame_UI.ts#L34)

___

### startLevelCompletedTransition

▸ `Private` **startLevelCompletedTransition**(): `void`

#### Returns

`void`

#### Defined in

[src/Scenes/SceneGame_UI.ts:150](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame_UI.ts#L150)

___

### startLevelStartedTransition

▸ `Private` **startLevelStartedTransition**(): `void`

#### Returns

`void`

#### Defined in

[src/Scenes/SceneGame_UI.ts:175](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame_UI.ts#L175)

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

[src/Scenes/SceneGame_UI.ts:189](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneGame_UI.ts#L189)

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
