[cyber2d](../README.md) / [Modules](../modules.md) / [Scenes/CYBR\_Scene](../modules/Scenes_CYBR_Scene.md) / CYBR\_Scene

# Class: CYBR\_Scene

[Scenes/CYBR_Scene](../modules/Scenes_CYBR_Scene.md).CYBR_Scene

## Hierarchy

- `Scene`

  ↳ **`CYBR_Scene`**

  ↳↳ [`SceneGame`](Scenes_SceneGame.SceneGame.md)

  ↳↳ [`SceneGameMenu_UI`](Scenes_SceneGameMenu_UI.SceneGameMenu_UI.md)

  ↳↳ [`SceneGame_UI`](Scenes_SceneGame_UI.SceneGame_UI.md)

  ↳↳ [`SceneMainMenu_UI`](Scenes_SceneMainMenu_UI.SceneMainMenu_UI.md)

  ↳↳ [`ScenePreloadAssets`](Scenes_ScenePreloadAssets.ScenePreloadAssets.md)

## Table of contents

### Constructors

- [constructor](Scenes_CYBR_Scene.CYBR_Scene.md#constructor)

### Properties

- [add](Scenes_CYBR_Scene.CYBR_Scene.md#add)
- [anims](Scenes_CYBR_Scene.CYBR_Scene.md#anims)
- [cache](Scenes_CYBR_Scene.CYBR_Scene.md#cache)
- [cameras](Scenes_CYBR_Scene.CYBR_Scene.md#cameras)
- [children](Scenes_CYBR_Scene.CYBR_Scene.md#children)
- [data](Scenes_CYBR_Scene.CYBR_Scene.md#data)
- [events](Scenes_CYBR_Scene.CYBR_Scene.md#events)
- [facebook](Scenes_CYBR_Scene.CYBR_Scene.md#facebook)
- [game](Scenes_CYBR_Scene.CYBR_Scene.md#game)
- [input](Scenes_CYBR_Scene.CYBR_Scene.md#input)
- [lights](Scenes_CYBR_Scene.CYBR_Scene.md#lights)
- [load](Scenes_CYBR_Scene.CYBR_Scene.md#load)
- [make](Scenes_CYBR_Scene.CYBR_Scene.md#make)
- [matter](Scenes_CYBR_Scene.CYBR_Scene.md#matter)
- [physics](Scenes_CYBR_Scene.CYBR_Scene.md#physics)
- [plugins](Scenes_CYBR_Scene.CYBR_Scene.md#plugins)
- [registry](Scenes_CYBR_Scene.CYBR_Scene.md#registry)
- [renderer](Scenes_CYBR_Scene.CYBR_Scene.md#renderer)
- [scale](Scenes_CYBR_Scene.CYBR_Scene.md#scale)
- [scene](Scenes_CYBR_Scene.CYBR_Scene.md#scene)
- [sound](Scenes_CYBR_Scene.CYBR_Scene.md#sound)
- [sys](Scenes_CYBR_Scene.CYBR_Scene.md#sys)
- [textures](Scenes_CYBR_Scene.CYBR_Scene.md#textures)
- [time](Scenes_CYBR_Scene.CYBR_Scene.md#time)
- [tweens](Scenes_CYBR_Scene.CYBR_Scene.md#tweens)
- [\_idCount](Scenes_CYBR_Scene.CYBR_Scene.md#_idcount)

### Methods

- [centerHItem](Scenes_CYBR_Scene.CYBR_Scene.md#centerhitem)
- [centerItem](Scenes_CYBR_Scene.CYBR_Scene.md#centeritem)
- [centerVItem](Scenes_CYBR_Scene.CYBR_Scene.md#centervitem)
- [update](Scenes_CYBR_Scene.CYBR_Scene.md#update)
- [formatTime](Scenes_CYBR_Scene.CYBR_Scene.md#formattime)
- [generateUniqueName](Scenes_CYBR_Scene.CYBR_Scene.md#generateuniquename)

## Constructors

### constructor

• **new CYBR_Scene**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `string` \| `SettingsConfig` |

#### Overrides

Phaser.Scene.constructor

#### Defined in

[src/Scenes/CYBR_Scene.ts:16](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/CYBR_Scene.ts#L16)

## Properties

### add

• **add**: `GameObjectFactory`

The Scene Game Object Factory.

This property will only be available if defined in the Scene Injection Map.

#### Inherited from

Phaser.Scene.add

#### Defined in

node_modules/phaser/types/phaser.d.ts:86271

___

### anims

• **anims**: `AnimationManager`

A reference to the global Animation Manager.

This property will only be available if defined in the Scene Injection Map.

#### Inherited from

Phaser.Scene.anims

#### Defined in

node_modules/phaser/types/phaser.d.ts:86222

___

### cache

• **cache**: `CacheManager`

A reference to the global Cache.

This property will only be available if defined in the Scene Injection Map.

#### Inherited from

Phaser.Scene.cache

#### Defined in

node_modules/phaser/types/phaser.d.ts:86229

___

### cameras

• **cameras**: `CameraManager`

The Scene Camera Manager.

This property will only be available if defined in the Scene Injection Map.

#### Inherited from

Phaser.Scene.cameras

#### Defined in

node_modules/phaser/types/phaser.d.ts:86264

___

### children

• **children**: `DisplayList`

The Game Object Display List belonging to this Scene.

This property will only be available if defined in the Scene Injection Map.

#### Inherited from

Phaser.Scene.children

#### Defined in

node_modules/phaser/types/phaser.d.ts:86292

___

### data

• **data**: `DataManager`

A Scene specific Data Manager Plugin.

See the `registry` property for the global Data Manager.

This property will only be available if defined in the Scene Injection Map and the plugin is installed.

#### Inherited from

Phaser.Scene.data

#### Defined in

node_modules/phaser/types/phaser.d.ts:86308

___

### events

• **events**: `EventEmitter`

A Scene specific Event Emitter.

This property will only be available if defined in the Scene Injection Map.

#### Inherited from

Phaser.Scene.events

#### Defined in

node_modules/phaser/types/phaser.d.ts:86257

___

### facebook

• **facebook**: `FacebookInstantGamesPlugin`

The Facebook Instant Games Plugin.

This property will only be available if defined in the Scene Injection Map, the plugin is installed and configured.

#### Inherited from

Phaser.Scene.facebook

#### Defined in

node_modules/phaser/types/phaser.d.ts:86357

___

### game

• **game**: `Game`

A reference to the Phaser.Game instance.

This property will only be available if defined in the Scene Injection Map.

#### Inherited from

Phaser.Scene.game

#### Defined in

node_modules/phaser/types/phaser.d.ts:86215

___

### input

• **input**: `InputPlugin`

The Scene Input Manager Plugin.

This property will only be available if defined in the Scene Injection Map and the plugin is installed.

#### Inherited from

Phaser.Scene.input

#### Defined in

node_modules/phaser/types/phaser.d.ts:86315

___

### lights

• **lights**: `LightsManager`

The Scene Lights Manager Plugin.

This property will only be available if defined in the Scene Injection Map and the plugin is installed.

#### Inherited from

Phaser.Scene.lights

#### Defined in

node_modules/phaser/types/phaser.d.ts:86299

___

### load

• **load**: `LoaderPlugin`

The Scene Loader Plugin.

This property will only be available if defined in the Scene Injection Map and the plugin is installed.

#### Inherited from

Phaser.Scene.load

#### Defined in

node_modules/phaser/types/phaser.d.ts:86322

___

### make

• **make**: `GameObjectCreator`

The Scene Game Object Creator.

This property will only be available if defined in the Scene Injection Map.

#### Inherited from

Phaser.Scene.make

#### Defined in

node_modules/phaser/types/phaser.d.ts:86278

___

### matter

• **matter**: `MatterPhysics`

The Scene Matter Physics Plugin.

This property will only be available if defined in the Scene Injection Map, the plugin is installed and configured.

#### Inherited from

Phaser.Scene.matter

#### Defined in

node_modules/phaser/types/phaser.d.ts:86350

___

### physics

• **physics**: `ArcadePhysics`

The Scene Arcade Physics Plugin.

This property will only be available if defined in the Scene Injection Map, the plugin is installed and configured.

#### Inherited from

Phaser.Scene.physics

#### Defined in

node_modules/phaser/types/phaser.d.ts:86343

___

### plugins

• **plugins**: `PluginManager`

A reference to the global Plugin Manager.

The Plugin Manager is a global system that allows plugins to register themselves with it, and can then install
those plugins into Scenes as required.

#### Inherited from

Phaser.Scene.plugins

#### Defined in

node_modules/phaser/types/phaser.d.ts:86372

___

### registry

• **registry**: `DataManager`

A reference to the global Data Manager.

This property will only be available if defined in the Scene Injection Map.

#### Inherited from

Phaser.Scene.registry

#### Defined in

node_modules/phaser/types/phaser.d.ts:86236

___

### renderer

• **renderer**: `CanvasRenderer` \| `WebGLRenderer`

A reference to the renderer instance Phaser is using, either Canvas Renderer or WebGL Renderer.

#### Inherited from

Phaser.Scene.renderer

#### Defined in

node_modules/phaser/types/phaser.d.ts:86377

___

### scale

• **scale**: `ScaleManager`

A reference to the global Scale Manager.

This property will only be available if defined in the Scene Injection Map.

#### Inherited from

Phaser.Scene.scale

#### Defined in

node_modules/phaser/types/phaser.d.ts:86364

___

### scene

• **scene**: `ScenePlugin`

A reference to the Scene Manager Plugin.

This property will only be available if defined in the Scene Injection Map.

#### Inherited from

Phaser.Scene.scene

#### Defined in

node_modules/phaser/types/phaser.d.ts:86285

___

### sound

• **sound**: `NoAudioSoundManager` \| `HTML5AudioSoundManager` \| `WebAudioSoundManager`

A reference to the Sound Manager.

This property will only be available if defined in the Scene Injection Map and the plugin is installed.

#### Inherited from

Phaser.Scene.sound

#### Defined in

node_modules/phaser/types/phaser.d.ts:86243

___

### sys

• **sys**: `Systems`

The Scene Systems. You must never overwrite this property, or all hell will break lose.

#### Inherited from

Phaser.Scene.sys

#### Defined in

node_modules/phaser/types/phaser.d.ts:86208

___

### textures

• **textures**: `TextureManager`

A reference to the Texture Manager.

This property will only be available if defined in the Scene Injection Map.

#### Inherited from

Phaser.Scene.textures

#### Defined in

node_modules/phaser/types/phaser.d.ts:86250

___

### time

• **time**: `Clock`

The Scene Time and Clock Plugin.

This property will only be available if defined in the Scene Injection Map and the plugin is installed.

#### Inherited from

Phaser.Scene.time

#### Defined in

node_modules/phaser/types/phaser.d.ts:86329

___

### tweens

• **tweens**: `TweenManager`

The Scene Tween Manager Plugin.

This property will only be available if defined in the Scene Injection Map and the plugin is installed.

#### Inherited from

Phaser.Scene.tweens

#### Defined in

node_modules/phaser/types/phaser.d.ts:86336

___

### \_idCount

▪ `Static` `Private` **\_idCount**: `number` = `0`

#### Defined in

[src/Scenes/CYBR_Scene.ts:14](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/CYBR_Scene.ts#L14)

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

#### Defined in

[src/Scenes/CYBR_Scene.ts:38](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/CYBR_Scene.ts#L38)

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

Phaser.Scene.update

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

#### Defined in

[src/Scenes/CYBR_Scene.ts:21](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/CYBR_Scene.ts#L21)
