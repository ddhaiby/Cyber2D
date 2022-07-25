[cyber2d](../README.md) / [Modules](../modules.md) / [CYBR\_Game](../modules/CYBR_Game.md) / CYBR\_Game

# Class: CYBR\_Game

[CYBR_Game](../modules/CYBR_Game.md).CYBR_Game

## Hierarchy

- `Game`

  ↳ **`CYBR_Game`**

## Table of contents

### Constructors

- [constructor](CYBR_Game.CYBR_Game.md#constructor)

### Properties

- [anims](CYBR_Game.CYBR_Game.md#anims)
- [cache](CYBR_Game.CYBR_Game.md#cache)
- [canvas](CYBR_Game.CYBR_Game.md#canvas)
- [config](CYBR_Game.CYBR_Game.md#config)
- [context](CYBR_Game.CYBR_Game.md#context)
- [device](CYBR_Game.CYBR_Game.md#device)
- [domContainer](CYBR_Game.CYBR_Game.md#domcontainer)
- [events](CYBR_Game.CYBR_Game.md#events)
- [facebook](CYBR_Game.CYBR_Game.md#facebook)
- [hasFocus](CYBR_Game.CYBR_Game.md#hasfocus)
- [input](CYBR_Game.CYBR_Game.md#input)
- [isBooted](CYBR_Game.CYBR_Game.md#isbooted)
- [isRunning](CYBR_Game.CYBR_Game.md#isrunning)
- [loop](CYBR_Game.CYBR_Game.md#loop)
- [plugins](CYBR_Game.CYBR_Game.md#plugins)
- [registry](CYBR_Game.CYBR_Game.md#registry)
- [renderer](CYBR_Game.CYBR_Game.md#renderer)
- [scale](CYBR_Game.CYBR_Game.md#scale)
- [scene](CYBR_Game.CYBR_Game.md#scene)
- [sound](CYBR_Game.CYBR_Game.md#sound)
- [textures](CYBR_Game.CYBR_Game.md#textures)
- [connected](CYBR_Game.CYBR_Game.md#connected)

### Accessors

- [isConnected](CYBR_Game.CYBR_Game.md#isconnected)

### Methods

- [boot](CYBR_Game.CYBR_Game.md#boot)
- [destroy](CYBR_Game.CYBR_Game.md#destroy)
- [getFrame](CYBR_Game.CYBR_Game.md#getframe)
- [getTime](CYBR_Game.CYBR_Game.md#gettime)
- [headlessStep](CYBR_Game.CYBR_Game.md#headlessstep)
- [onBlur](CYBR_Game.CYBR_Game.md#onblur)
- [onFocus](CYBR_Game.CYBR_Game.md#onfocus)
- [onHidden](CYBR_Game.CYBR_Game.md#onhidden)
- [onVisible](CYBR_Game.CYBR_Game.md#onvisible)
- [start](CYBR_Game.CYBR_Game.md#start)
- [step](CYBR_Game.CYBR_Game.md#step)

## Constructors

### constructor

• **new CYBR_Game**(`gameConfig`, `isConnected`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gameConfig` | `GameConfig` |
| `isConnected` | `Boolean` |

#### Overrides

Phaser.Game.constructor

#### Defined in

[src/CYBR_Game.ts:7](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/CYBR_Game.ts#L7)

## Properties

### anims

• **anims**: `AnimationManager`

An instance of the Animation Manager.

The Animation Manager is a global system responsible for managing all animations used within your game.

#### Inherited from

Phaser.Game.anims

#### Defined in

node_modules/phaser/types/phaser.d.ts:5222

___

### cache

• **cache**: `CacheManager`

An instance of the Cache Manager.

The Cache Manager is a global system responsible for caching, accessing and releasing external game assets.

#### Inherited from

Phaser.Game.cache

#### Defined in

node_modules/phaser/types/phaser.d.ts:5236

___

### canvas

• **canvas**: `HTMLCanvasElement`

A reference to the HTML Canvas Element that Phaser uses to render the game.
This is created automatically by Phaser unless you provide a `canvas` property
in your Game Config.

#### Inherited from

Phaser.Game.canvas

#### Defined in

node_modules/phaser/types/phaser.d.ts:5191

___

### config

• `Readonly` **config**: `Config`

The parsed Game Configuration object.

The values stored within this object are read-only and should not be changed at run-time.

#### Inherited from

Phaser.Game.config

#### Defined in

node_modules/phaser/types/phaser.d.ts:5169

___

### context

• **context**: `CanvasRenderingContext2D` \| `WebGLRenderingContext`

A reference to the Rendering Context belonging to the Canvas Element this game is rendering to.
If the game is running under Canvas it will be a 2d Canvas Rendering Context.
If the game is running under WebGL it will be a WebGL Rendering Context.
This context is created automatically by Phaser unless you provide a `context` property
in your Game Config.

#### Inherited from

Phaser.Game.context

#### Defined in

node_modules/phaser/types/phaser.d.ts:5200

___

### device

• **device**: `DeviceConf`

A reference to the Device inspector.

Contains information about the device running this game, such as OS, browser vendor and feature support.
Used by various systems to determine capabilities and code paths.

#### Inherited from

Phaser.Game.device

#### Defined in

node_modules/phaser/types/phaser.d.ts:5263

___

### domContainer

• **domContainer**: `HTMLDivElement`

A reference to an HTML Div Element used as the DOM Element Container.

Only set if `createDOMContainer` is `true` in the game config (by default it is `false`) and
if you provide a parent element to insert the Phaser Game inside.

See the DOM Element Game Object for more details.

#### Inherited from

Phaser.Game.domContainer

#### Defined in

node_modules/phaser/types/phaser.d.ts:5184

___

### events

• **events**: `EventEmitter`

An Event Emitter which is used to broadcast game-level events from the global systems.

#### Inherited from

Phaser.Game.events

#### Defined in

node_modules/phaser/types/phaser.d.ts:5215

___

### facebook

• **facebook**: `FacebookInstantGamesPlugin`

An instance of the Facebook Instant Games Plugin.

This will only be available if the plugin has been built into Phaser,
or you're using the special Facebook Instant Games custom build.

#### Inherited from

Phaser.Game.facebook

#### Defined in

node_modules/phaser/types/phaser.d.ts:5303

___

### hasFocus

• `Readonly` **hasFocus**: `boolean`

Does the window the game is running in currently have focus or not?
This is modified by the VisibilityHandler.

#### Inherited from

Phaser.Game.hasFocus

#### Defined in

node_modules/phaser/types/phaser.d.ts:5309

___

### input

• **input**: `InputManager`

An instance of the Input Manager.

The Input Manager is a global system responsible for the capture of browser-level input events.

#### Inherited from

Phaser.Game.input

#### Defined in

node_modules/phaser/types/phaser.d.ts:5248

___

### isBooted

• `Readonly` **isBooted**: `boolean`

A flag indicating when this Game instance has finished its boot process.

#### Inherited from

Phaser.Game.isBooted

#### Defined in

node_modules/phaser/types/phaser.d.ts:5205

___

### isRunning

• `Readonly` **isRunning**: `boolean`

A flag indicating if this Game is currently running its game step or not.

#### Inherited from

Phaser.Game.isRunning

#### Defined in

node_modules/phaser/types/phaser.d.ts:5210

___

### loop

• **loop**: `TimeStep`

An instance of the Time Step.

The Time Step is a global system responsible for setting-up and responding to the browser frame events, processing
them and calculating delta values. It then automatically calls the game step.

#### Inherited from

Phaser.Game.loop

#### Defined in

node_modules/phaser/types/phaser.d.ts:5287

___

### plugins

• **plugins**: `PluginManager`

An instance of the Plugin Manager.

The Plugin Manager is a global system that allows plugins to register themselves with it, and can then install
those plugins into Scenes as required.

#### Inherited from

Phaser.Game.plugins

#### Defined in

node_modules/phaser/types/phaser.d.ts:5295

___

### registry

• **registry**: `DataManager`

An instance of the Data Manager

#### Inherited from

Phaser.Game.registry

#### Defined in

node_modules/phaser/types/phaser.d.ts:5241

___

### renderer

• **renderer**: `CanvasRenderer` \| `WebGLRenderer`

A reference to either the Canvas or WebGL Renderer that this Game is using.

#### Inherited from

Phaser.Game.renderer

#### Defined in

node_modules/phaser/types/phaser.d.ts:5174

___

### scale

• **scale**: `ScaleManager`

An instance of the Scale Manager.

The Scale Manager is a global system responsible for handling scaling of the game canvas.

#### Inherited from

Phaser.Game.scale

#### Defined in

node_modules/phaser/types/phaser.d.ts:5270

___

### scene

• **scene**: `SceneManager`

An instance of the Scene Manager.

The Scene Manager is a global system responsible for creating, modifying and updating the Scenes in your game.

#### Inherited from

Phaser.Game.scene

#### Defined in

node_modules/phaser/types/phaser.d.ts:5255

___

### sound

• **sound**: `NoAudioSoundManager` \| `HTML5AudioSoundManager` \| `WebAudioSoundManager`

An instance of the base Sound Manager.

The Sound Manager is a global system responsible for the playback and updating of all audio in your game.

You can disable the inclusion of the Sound Manager in your build by toggling the webpack `FEATURE_SOUND` flag.

#### Inherited from

Phaser.Game.sound

#### Defined in

node_modules/phaser/types/phaser.d.ts:5279

___

### textures

• **textures**: `TextureManager`

An instance of the Texture Manager.

The Texture Manager is a global system responsible for managing all textures being used by your game.

#### Inherited from

Phaser.Game.textures

#### Defined in

node_modules/phaser/types/phaser.d.ts:5229

___

### connected

▪ `Static` `Private` **connected**: `Boolean`

#### Defined in

[src/CYBR_Game.ts:6](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/CYBR_Game.ts#L6)

## Accessors

### isConnected

• `Static` `get` **isConnected**(): `Boolean`

#### Returns

`Boolean`

#### Defined in

[src/CYBR_Game.ts:22](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/CYBR_Game.ts#L22)

## Methods

### boot

▸ `Protected` **boot**(): `void`

This method is called automatically when the DOM is ready. It is responsible for creating the renderer,
displaying the Debug Header, adding the game canvas to the DOM and emitting the 'boot' event.
It listens for a 'ready' event from the base systems and once received it will call `Game.start`.

#### Returns

`void`

#### Inherited from

Phaser.Game.boot

#### Defined in

node_modules/phaser/types/phaser.d.ts:5316

___

### destroy

▸ **destroy**(`removeCanvas`, `noReturn?`): `void`

Flags this Game instance as needing to be destroyed on the _next frame_, making this an asynchronous operation.

It will wait until the current frame has completed and then call `runDestroy` internally.

If you need to react to the games eventual destruction, listen for the `DESTROY` event.

If you **do not** need to run Phaser again on the same web page you can set the `noReturn` argument to `true` and it will free-up
memory being held by the core Phaser plugins. If you do need to create another game instance on the same page, leave this as `false`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `removeCanvas` | `boolean` | Set to `true` if you would like the parent canvas element removed from the DOM, or `false` to leave it in place. |
| `noReturn?` | `boolean` | If `true` all the core Phaser plugins are destroyed. You cannot create another instance of Phaser on the same web page if you do this. Default false. |

#### Returns

`void`

#### Inherited from

Phaser.Game.destroy

#### Defined in

node_modules/phaser/types/phaser.d.ts:5399

___

### getFrame

▸ **getFrame**(): `number`

Returns the current game frame.

When the game starts running, the frame is incremented every time Request Animation Frame, or Set Timeout, fires.

#### Returns

`number`

#### Inherited from

Phaser.Game.getFrame

#### Defined in

node_modules/phaser/types/phaser.d.ts:5380

___

### getTime

▸ **getTime**(): `number`

Returns the time that the current game step started at, as based on `performance.now`.

#### Returns

`number`

#### Inherited from

Phaser.Game.getTime

#### Defined in

node_modules/phaser/types/phaser.d.ts:5385

___

### headlessStep

▸ **headlessStep**(`time`, `delta`): `void`

A special version of the Game Step for the HEADLESS renderer only.

The main Game Step. Called automatically by the Time Step, once per browser frame (typically as a result of
Request Animation Frame, or Set Timeout on very old browsers.)

The step will update the global managers first, then proceed to update each Scene in turn, via the Scene Manager.

This process emits `prerender` and `postrender` events, even though nothing actually displays.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time` | `number` | The current time. Either a High Resolution Timer value if it comes from Request Animation Frame, or Date.now if using SetTimeout. |
| `delta` | `number` | The delta time in ms since the last frame. This is a smoothed and capped value based on the FPS rate. |

#### Returns

`void`

#### Inherited from

Phaser.Game.headlessStep

#### Defined in

node_modules/phaser/types/phaser.d.ts:5349

___

### onBlur

▸ **onBlur**(): `void`

#### Returns

`void`

#### Overrides

Phaser.Game.onBlur

#### Defined in

[src/CYBR_Game.ts:11](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/CYBR_Game.ts#L11)

___

### onFocus

▸ **onFocus**(): `void`

#### Returns

`void`

#### Overrides

Phaser.Game.onFocus

#### Defined in

[src/CYBR_Game.ts:17](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/CYBR_Game.ts#L17)

___

### onHidden

▸ `Protected` **onHidden**(): `void`

Called automatically by the Visibility Handler.
This will pause the main loop and then emit a pause event.

#### Returns

`void`

#### Inherited from

Phaser.Game.onHidden

#### Defined in

node_modules/phaser/types/phaser.d.ts:5355

___

### onVisible

▸ `Protected` **onVisible**(): `void`

Called automatically by the Visibility Handler.
This will resume the main loop and then emit a resume event.

#### Returns

`void`

#### Inherited from

Phaser.Game.onVisible

#### Defined in

node_modules/phaser/types/phaser.d.ts:5361

___

### start

▸ `Protected` **start**(): `void`

Called automatically by Game.boot once all of the global systems have finished setting themselves up.
By this point the Game is now ready to start the main loop running.
It will also enable the Visibility Handler.

#### Returns

`void`

#### Inherited from

Phaser.Game.start

#### Defined in

node_modules/phaser/types/phaser.d.ts:5323

___

### step

▸ **step**(`time`, `delta`): `void`

The main Game Step. Called automatically by the Time Step, once per browser frame (typically as a result of
Request Animation Frame, or Set Timeout on very old browsers.)

The step will update the global managers first, then proceed to update each Scene in turn, via the Scene Manager.

It will then render each Scene in turn, via the Renderer. This process emits `prerender` and `postrender` events.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time` | `number` | The current time. Either a High Resolution Timer value if it comes from Request Animation Frame, or Date.now if using SetTimeout. |
| `delta` | `number` | The delta time in ms since the last frame. This is a smoothed and capped value based on the FPS rate. |

#### Returns

`void`

#### Inherited from

Phaser.Game.step

#### Defined in

node_modules/phaser/types/phaser.d.ts:5335
