[cyber2d](../README.md) / [Modules](../modules.md) / [Scenes/SceneMainMenu\_UI](../modules/Scenes_SceneMainMenu_UI.md) / SceneMainMenu\_UI

# Class: SceneMainMenu\_UI

[Scenes/SceneMainMenu_UI](../modules/Scenes_SceneMainMenu_UI.md).SceneMainMenu_UI

## Hierarchy

- [`CYBR_Scene`](Scenes_CYBR_Scene.CYBR_Scene.md)

  ↳ **`SceneMainMenu_UI`**

## Table of contents

### Constructors

- [constructor](Scenes_SceneMainMenu_UI.SceneMainMenu_UI.md#constructor)

### Properties

- [add](Scenes_SceneMainMenu_UI.SceneMainMenu_UI.md#add)
- [anims](Scenes_SceneMainMenu_UI.SceneMainMenu_UI.md#anims)
- [cache](Scenes_SceneMainMenu_UI.SceneMainMenu_UI.md#cache)
- [cameras](Scenes_SceneMainMenu_UI.SceneMainMenu_UI.md#cameras)
- [children](Scenes_SceneMainMenu_UI.SceneMainMenu_UI.md#children)
- [data](Scenes_SceneMainMenu_UI.SceneMainMenu_UI.md#data)
- [events](Scenes_SceneMainMenu_UI.SceneMainMenu_UI.md#events)
- [facebook](Scenes_SceneMainMenu_UI.SceneMainMenu_UI.md#facebook)
- [game](Scenes_SceneMainMenu_UI.SceneMainMenu_UI.md#game)
- [input](Scenes_SceneMainMenu_UI.SceneMainMenu_UI.md#input)
- [lights](Scenes_SceneMainMenu_UI.SceneMainMenu_UI.md#lights)
- [load](Scenes_SceneMainMenu_UI.SceneMainMenu_UI.md#load)
- [mainMenuContainer](Scenes_SceneMainMenu_UI.SceneMainMenu_UI.md#mainmenucontainer)
- [make](Scenes_SceneMainMenu_UI.SceneMainMenu_UI.md#make)
- [matter](Scenes_SceneMainMenu_UI.SceneMainMenu_UI.md#matter)
- [physics](Scenes_SceneMainMenu_UI.SceneMainMenu_UI.md#physics)
- [plugins](Scenes_SceneMainMenu_UI.SceneMainMenu_UI.md#plugins)
- [registerContainer](Scenes_SceneMainMenu_UI.SceneMainMenu_UI.md#registercontainer)
- [registry](Scenes_SceneMainMenu_UI.SceneMainMenu_UI.md#registry)
- [renderer](Scenes_SceneMainMenu_UI.SceneMainMenu_UI.md#renderer)
- [scale](Scenes_SceneMainMenu_UI.SceneMainMenu_UI.md#scale)
- [scene](Scenes_SceneMainMenu_UI.SceneMainMenu_UI.md#scene)
- [sceneGame](Scenes_SceneMainMenu_UI.SceneMainMenu_UI.md#scenegame)
- [settingsContainer](Scenes_SceneMainMenu_UI.SceneMainMenu_UI.md#settingscontainer)
- [sound](Scenes_SceneMainMenu_UI.SceneMainMenu_UI.md#sound)
- [sys](Scenes_SceneMainMenu_UI.SceneMainMenu_UI.md#sys)
- [textures](Scenes_SceneMainMenu_UI.SceneMainMenu_UI.md#textures)
- [time](Scenes_SceneMainMenu_UI.SceneMainMenu_UI.md#time)
- [tweens](Scenes_SceneMainMenu_UI.SceneMainMenu_UI.md#tweens)

### Methods

- [centerHItem](Scenes_SceneMainMenu_UI.SceneMainMenu_UI.md#centerhitem)
- [centerItem](Scenes_SceneMainMenu_UI.SceneMainMenu_UI.md#centeritem)
- [centerVItem](Scenes_SceneMainMenu_UI.SceneMainMenu_UI.md#centervitem)
- [create](Scenes_SceneMainMenu_UI.SceneMainMenu_UI.md#create)
- [init](Scenes_SceneMainMenu_UI.SceneMainMenu_UI.md#init)
- [onConnect](Scenes_SceneMainMenu_UI.SceneMainMenu_UI.md#onconnect)
- [onPlay](Scenes_SceneMainMenu_UI.SceneMainMenu_UI.md#onplay)
- [onPlayerCancelledConnection](Scenes_SceneMainMenu_UI.SceneMainMenu_UI.md#onplayercancelledconnection)
- [onPlayerCancelledSettings](Scenes_SceneMainMenu_UI.SceneMainMenu_UI.md#onplayercancelledsettings)
- [onPlayerConnected](Scenes_SceneMainMenu_UI.SceneMainMenu_UI.md#onplayerconnected)
- [onSaveChanges](Scenes_SceneMainMenu_UI.SceneMainMenu_UI.md#onsavechanges)
- [onSettings](Scenes_SceneMainMenu_UI.SceneMainMenu_UI.md#onsettings)
- [update](Scenes_SceneMainMenu_UI.SceneMainMenu_UI.md#update)
- [formatTime](Scenes_SceneMainMenu_UI.SceneMainMenu_UI.md#formattime)
- [generateUniqueName](Scenes_SceneMainMenu_UI.SceneMainMenu_UI.md#generateuniquename)

## Constructors

### constructor

• **new SceneMainMenu_UI**()

#### Overrides

[CYBR_Scene](Scenes_CYBR_Scene.CYBR_Scene.md).[constructor](Scenes_CYBR_Scene.CYBR_Scene.md#constructor)

#### Defined in

[src/Scenes/SceneMainMenu_UI.ts:17](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneMainMenu_UI.ts#L17)

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

### mainMenuContainer

• `Private` **mainMenuContainer**: [`MainMenuContainer`](UI_MainMenu_MainMenuContainer.MainMenuContainer.md)

#### Defined in

[src/Scenes/SceneMainMenu_UI.ts:15](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneMainMenu_UI.ts#L15)

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

### registerContainer

• `Private` **registerContainer**: [`RegisterContainer`](UI_MainMenu_RegisterContainer.RegisterContainer.md)

#### Defined in

[src/Scenes/SceneMainMenu_UI.ts:14](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneMainMenu_UI.ts#L14)

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

[src/Scenes/SceneMainMenu_UI.ts:13](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneMainMenu_UI.ts#L13)

___

### settingsContainer

• `Private` **settingsContainer**: [`SettingsContainer`](UI_MainMenu_SettingsContainer.SettingsContainer.md)

#### Defined in

[src/Scenes/SceneMainMenu_UI.ts:16](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneMainMenu_UI.ts#L16)

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

[src/Scenes/SceneMainMenu_UI.ts:32](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneMainMenu_UI.ts#L32)

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Defined in

[src/Scenes/SceneMainMenu_UI.ts:25](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneMainMenu_UI.ts#L25)

___

### onConnect

▸ `Private` **onConnect**(): `void`

#### Returns

`void`

#### Defined in

[src/Scenes/SceneMainMenu_UI.ts:88](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneMainMenu_UI.ts#L88)

___

### onPlay

▸ `Private` **onPlay**(): `void`

#### Returns

`void`

#### Defined in

[src/Scenes/SceneMainMenu_UI.ts:73](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneMainMenu_UI.ts#L73)

___

### onPlayerCancelledConnection

▸ `Private` **onPlayerCancelledConnection**(): `void`

#### Returns

`void`

#### Defined in

[src/Scenes/SceneMainMenu_UI.ts:100](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneMainMenu_UI.ts#L100)

___

### onPlayerCancelledSettings

▸ `Private` **onPlayerCancelledSettings**(): `void`

#### Returns

`void`

#### Defined in

[src/Scenes/SceneMainMenu_UI.ts:111](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneMainMenu_UI.ts#L111)

___

### onPlayerConnected

▸ `Private` **onPlayerConnected**(): `void`

#### Returns

`void`

#### Defined in

[src/Scenes/SceneMainMenu_UI.ts:94](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneMainMenu_UI.ts#L94)

___

### onSaveChanges

▸ `Private` **onSaveChanges**(): `void`

#### Returns

`void`

#### Defined in

[src/Scenes/SceneMainMenu_UI.ts:105](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneMainMenu_UI.ts#L105)

___

### onSettings

▸ `Private` **onSettings**(): `void`

#### Returns

`void`

#### Defined in

[src/Scenes/SceneMainMenu_UI.ts:81](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneMainMenu_UI.ts#L81)

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

[src/Scenes/SceneMainMenu_UI.ts:68](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Scenes/SceneMainMenu_UI.ts#L68)

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
