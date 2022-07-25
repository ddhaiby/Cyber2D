[cyber2d](../README.md) / [Modules](../modules.md) / [Pawns/AIs/AISpawn](../modules/Pawns_AIs_AISpawn.md) / AISpawn

# Class: AISpawn

[Pawns/AIs/AISpawn](../modules/Pawns_AIs_AISpawn.md).AISpawn

## Hierarchy

- [`PawnSpawn`](Pawns_PawnSpawn.PawnSpawn.md)

  ↳ **`AISpawn`**

## Table of contents

### Constructors

- [constructor](Pawns_AIs_AISpawn.AISpawn.md#constructor)

### Properties

- [active](Pawns_AIs_AISpawn.AISpawn.md#active)
- [alpha](Pawns_AIs_AISpawn.AISpawn.md#alpha)
- [alphaBottomLeft](Pawns_AIs_AISpawn.AISpawn.md#alphabottomleft)
- [alphaBottomRight](Pawns_AIs_AISpawn.AISpawn.md#alphabottomright)
- [alphaTopLeft](Pawns_AIs_AISpawn.AISpawn.md#alphatopleft)
- [alphaTopRight](Pawns_AIs_AISpawn.AISpawn.md#alphatopright)
- [angle](Pawns_AIs_AISpawn.AISpawn.md#angle)
- [blendMode](Pawns_AIs_AISpawn.AISpawn.md#blendmode)
- [body](Pawns_AIs_AISpawn.AISpawn.md#body)
- [bodyDamage](Pawns_AIs_AISpawn.AISpawn.md#bodydamage)
- [bulletDamage](Pawns_AIs_AISpawn.AISpawn.md#bulletdamage)
- [bulletPerFire](Pawns_AIs_AISpawn.AISpawn.md#bulletperfire)
- [cameraFilter](Pawns_AIs_AISpawn.AISpawn.md#camerafilter)
- [data](Pawns_AIs_AISpawn.AISpawn.md#data)
- [defaultPipeline](Pawns_AIs_AISpawn.AISpawn.md#defaultpipeline)
- [depth](Pawns_AIs_AISpawn.AISpawn.md#depth)
- [displayHeight](Pawns_AIs_AISpawn.AISpawn.md#displayheight)
- [displayList](Pawns_AIs_AISpawn.AISpawn.md#displaylist)
- [displayOriginX](Pawns_AIs_AISpawn.AISpawn.md#displayoriginx)
- [displayOriginY](Pawns_AIs_AISpawn.AISpawn.md#displayoriginy)
- [displayWidth](Pawns_AIs_AISpawn.AISpawn.md#displaywidth)
- [fireWeapon](Pawns_AIs_AISpawn.AISpawn.md#fireweapon)
- [fireWeaponDelay](Pawns_AIs_AISpawn.AISpawn.md#fireweapondelay)
- [flipX](Pawns_AIs_AISpawn.AISpawn.md#flipx)
- [flipY](Pawns_AIs_AISpawn.AISpawn.md#flipy)
- [frame](Pawns_AIs_AISpawn.AISpawn.md#frame)
- [hasPostPipeline](Pawns_AIs_AISpawn.AISpawn.md#haspostpipeline)
- [height](Pawns_AIs_AISpawn.AISpawn.md#height)
- [ignoreDestroy](Pawns_AIs_AISpawn.AISpawn.md#ignoredestroy)
- [input](Pawns_AIs_AISpawn.AISpawn.md#input)
- [isCropped](Pawns_AIs_AISpawn.AISpawn.md#iscropped)
- [isTinted](Pawns_AIs_AISpawn.AISpawn.md#istinted)
- [mask](Pawns_AIs_AISpawn.AISpawn.md#mask)
- [maxHealth](Pawns_AIs_AISpawn.AISpawn.md#maxhealth)
- [name](Pawns_AIs_AISpawn.AISpawn.md#name)
- [originX](Pawns_AIs_AISpawn.AISpawn.md#originx)
- [originY](Pawns_AIs_AISpawn.AISpawn.md#originy)
- [parentContainer](Pawns_AIs_AISpawn.AISpawn.md#parentcontainer)
- [pathEndX](Pawns_AIs_AISpawn.AISpawn.md#pathendx)
- [pathStartX](Pawns_AIs_AISpawn.AISpawn.md#pathstartx)
- [patrol](Pawns_AIs_AISpawn.AISpawn.md#patrol)
- [pipeline](Pawns_AIs_AISpawn.AISpawn.md#pipeline)
- [pipelineData](Pawns_AIs_AISpawn.AISpawn.md#pipelinedata)
- [postPipelines](Pawns_AIs_AISpawn.AISpawn.md#postpipelines)
- [renderFlags](Pawns_AIs_AISpawn.AISpawn.md#renderflags)
- [rotation](Pawns_AIs_AISpawn.AISpawn.md#rotation)
- [scale](Pawns_AIs_AISpawn.AISpawn.md#scale)
- [scaleX](Pawns_AIs_AISpawn.AISpawn.md#scalex)
- [scaleY](Pawns_AIs_AISpawn.AISpawn.md#scaley)
- [scene](Pawns_AIs_AISpawn.AISpawn.md#scene)
- [scrollFactorX](Pawns_AIs_AISpawn.AISpawn.md#scrollfactorx)
- [scrollFactorY](Pawns_AIs_AISpawn.AISpawn.md#scrollfactory)
- [startFireWeponDelay](Pawns_AIs_AISpawn.AISpawn.md#startfirewepondelay)
- [startOnRight](Pawns_AIs_AISpawn.AISpawn.md#startonright)
- [state](Pawns_AIs_AISpawn.AISpawn.md#state)
- [tabIndex](Pawns_AIs_AISpawn.AISpawn.md#tabindex)
- [texture](Pawns_AIs_AISpawn.AISpawn.md#texture)
- [tint](Pawns_AIs_AISpawn.AISpawn.md#tint)
- [tintBottomLeft](Pawns_AIs_AISpawn.AISpawn.md#tintbottomleft)
- [tintBottomRight](Pawns_AIs_AISpawn.AISpawn.md#tintbottomright)
- [tintFill](Pawns_AIs_AISpawn.AISpawn.md#tintfill)
- [tintTopLeft](Pawns_AIs_AISpawn.AISpawn.md#tinttopleft)
- [tintTopRight](Pawns_AIs_AISpawn.AISpawn.md#tinttopright)
- [type](Pawns_AIs_AISpawn.AISpawn.md#type)
- [visible](Pawns_AIs_AISpawn.AISpawn.md#visible)
- [w](Pawns_AIs_AISpawn.AISpawn.md#w)
- [width](Pawns_AIs_AISpawn.AISpawn.md#width)
- [x](Pawns_AIs_AISpawn.AISpawn.md#x)
- [y](Pawns_AIs_AISpawn.AISpawn.md#y)
- [z](Pawns_AIs_AISpawn.AISpawn.md#z)
- [RENDER\_MASK](Pawns_AIs_AISpawn.AISpawn.md#render_mask)

### Methods

- [addListener](Pawns_AIs_AISpawn.AISpawn.md#addlistener)
- [addToDisplayList](Pawns_AIs_AISpawn.AISpawn.md#addtodisplaylist)
- [addToUpdateList](Pawns_AIs_AISpawn.AISpawn.md#addtoupdatelist)
- [addedToScene](Pawns_AIs_AISpawn.AISpawn.md#addedtoscene)
- [clearAlpha](Pawns_AIs_AISpawn.AISpawn.md#clearalpha)
- [clearMask](Pawns_AIs_AISpawn.AISpawn.md#clearmask)
- [clearTint](Pawns_AIs_AISpawn.AISpawn.md#cleartint)
- [copyPosition](Pawns_AIs_AISpawn.AISpawn.md#copyposition)
- [createBitmapMask](Pawns_AIs_AISpawn.AISpawn.md#createbitmapmask)
- [createGeometryMask](Pawns_AIs_AISpawn.AISpawn.md#creategeometrymask)
- [destroy](Pawns_AIs_AISpawn.AISpawn.md#destroy)
- [disableInteractive](Pawns_AIs_AISpawn.AISpawn.md#disableinteractive)
- [emit](Pawns_AIs_AISpawn.AISpawn.md#emit)
- [eventNames](Pawns_AIs_AISpawn.AISpawn.md#eventnames)
- [getBottomCenter](Pawns_AIs_AISpawn.AISpawn.md#getbottomcenter)
- [getBottomLeft](Pawns_AIs_AISpawn.AISpawn.md#getbottomleft)
- [getBottomRight](Pawns_AIs_AISpawn.AISpawn.md#getbottomright)
- [getBounds](Pawns_AIs_AISpawn.AISpawn.md#getbounds)
- [getCenter](Pawns_AIs_AISpawn.AISpawn.md#getcenter)
- [getData](Pawns_AIs_AISpawn.AISpawn.md#getdata)
- [getIndexList](Pawns_AIs_AISpawn.AISpawn.md#getindexlist)
- [getLeftCenter](Pawns_AIs_AISpawn.AISpawn.md#getleftcenter)
- [getLocalPoint](Pawns_AIs_AISpawn.AISpawn.md#getlocalpoint)
- [getLocalTransformMatrix](Pawns_AIs_AISpawn.AISpawn.md#getlocaltransformmatrix)
- [getParentRotation](Pawns_AIs_AISpawn.AISpawn.md#getparentrotation)
- [getPawnData](Pawns_AIs_AISpawn.AISpawn.md#getpawndata)
- [getPipelineName](Pawns_AIs_AISpawn.AISpawn.md#getpipelinename)
- [getPostPipeline](Pawns_AIs_AISpawn.AISpawn.md#getpostpipeline)
- [getRightCenter](Pawns_AIs_AISpawn.AISpawn.md#getrightcenter)
- [getTopCenter](Pawns_AIs_AISpawn.AISpawn.md#gettopcenter)
- [getTopLeft](Pawns_AIs_AISpawn.AISpawn.md#gettopleft)
- [getTopRight](Pawns_AIs_AISpawn.AISpawn.md#gettopright)
- [getWorldTransformMatrix](Pawns_AIs_AISpawn.AISpawn.md#getworldtransformmatrix)
- [incData](Pawns_AIs_AISpawn.AISpawn.md#incdata)
- [initPipeline](Pawns_AIs_AISpawn.AISpawn.md#initpipeline)
- [listenerCount](Pawns_AIs_AISpawn.AISpawn.md#listenercount)
- [listeners](Pawns_AIs_AISpawn.AISpawn.md#listeners)
- [off](Pawns_AIs_AISpawn.AISpawn.md#off)
- [on](Pawns_AIs_AISpawn.AISpawn.md#on)
- [once](Pawns_AIs_AISpawn.AISpawn.md#once)
- [removeAllListeners](Pawns_AIs_AISpawn.AISpawn.md#removealllisteners)
- [removeFromDisplayList](Pawns_AIs_AISpawn.AISpawn.md#removefromdisplaylist)
- [removeFromUpdateList](Pawns_AIs_AISpawn.AISpawn.md#removefromupdatelist)
- [removeInteractive](Pawns_AIs_AISpawn.AISpawn.md#removeinteractive)
- [removeListener](Pawns_AIs_AISpawn.AISpawn.md#removelistener)
- [removePostPipeline](Pawns_AIs_AISpawn.AISpawn.md#removepostpipeline)
- [removedFromScene](Pawns_AIs_AISpawn.AISpawn.md#removedfromscene)
- [resetFlip](Pawns_AIs_AISpawn.AISpawn.md#resetflip)
- [resetPipeline](Pawns_AIs_AISpawn.AISpawn.md#resetpipeline)
- [resetPostPipeline](Pawns_AIs_AISpawn.AISpawn.md#resetpostpipeline)
- [setActive](Pawns_AIs_AISpawn.AISpawn.md#setactive)
- [setAlpha](Pawns_AIs_AISpawn.AISpawn.md#setalpha)
- [setAngle](Pawns_AIs_AISpawn.AISpawn.md#setangle)
- [setBlendMode](Pawns_AIs_AISpawn.AISpawn.md#setblendmode)
- [setCrop](Pawns_AIs_AISpawn.AISpawn.md#setcrop)
- [setData](Pawns_AIs_AISpawn.AISpawn.md#setdata)
- [setDataEnabled](Pawns_AIs_AISpawn.AISpawn.md#setdataenabled)
- [setDepth](Pawns_AIs_AISpawn.AISpawn.md#setdepth)
- [setDisplayOrigin](Pawns_AIs_AISpawn.AISpawn.md#setdisplayorigin)
- [setDisplaySize](Pawns_AIs_AISpawn.AISpawn.md#setdisplaysize)
- [setFlip](Pawns_AIs_AISpawn.AISpawn.md#setflip)
- [setFlipX](Pawns_AIs_AISpawn.AISpawn.md#setflipx)
- [setFlipY](Pawns_AIs_AISpawn.AISpawn.md#setflipy)
- [setFrame](Pawns_AIs_AISpawn.AISpawn.md#setframe)
- [setInteractive](Pawns_AIs_AISpawn.AISpawn.md#setinteractive)
- [setMask](Pawns_AIs_AISpawn.AISpawn.md#setmask)
- [setName](Pawns_AIs_AISpawn.AISpawn.md#setname)
- [setOrigin](Pawns_AIs_AISpawn.AISpawn.md#setorigin)
- [setOriginFromFrame](Pawns_AIs_AISpawn.AISpawn.md#setoriginfromframe)
- [setPipeline](Pawns_AIs_AISpawn.AISpawn.md#setpipeline)
- [setPipelineData](Pawns_AIs_AISpawn.AISpawn.md#setpipelinedata)
- [setPosition](Pawns_AIs_AISpawn.AISpawn.md#setposition)
- [setPostPipeline](Pawns_AIs_AISpawn.AISpawn.md#setpostpipeline)
- [setRandomPosition](Pawns_AIs_AISpawn.AISpawn.md#setrandomposition)
- [setRotation](Pawns_AIs_AISpawn.AISpawn.md#setrotation)
- [setScale](Pawns_AIs_AISpawn.AISpawn.md#setscale)
- [setScrollFactor](Pawns_AIs_AISpawn.AISpawn.md#setscrollfactor)
- [setSize](Pawns_AIs_AISpawn.AISpawn.md#setsize)
- [setSizeToFrame](Pawns_AIs_AISpawn.AISpawn.md#setsizetoframe)
- [setState](Pawns_AIs_AISpawn.AISpawn.md#setstate)
- [setTexture](Pawns_AIs_AISpawn.AISpawn.md#settexture)
- [setTint](Pawns_AIs_AISpawn.AISpawn.md#settint)
- [setTintFill](Pawns_AIs_AISpawn.AISpawn.md#settintfill)
- [setVisible](Pawns_AIs_AISpawn.AISpawn.md#setvisible)
- [setW](Pawns_AIs_AISpawn.AISpawn.md#setw)
- [setX](Pawns_AIs_AISpawn.AISpawn.md#setx)
- [setY](Pawns_AIs_AISpawn.AISpawn.md#sety)
- [setZ](Pawns_AIs_AISpawn.AISpawn.md#setz)
- [shutdown](Pawns_AIs_AISpawn.AISpawn.md#shutdown)
- [toJSON](Pawns_AIs_AISpawn.AISpawn.md#tojson)
- [toggleData](Pawns_AIs_AISpawn.AISpawn.md#toggledata)
- [toggleFlipX](Pawns_AIs_AISpawn.AISpawn.md#toggleflipx)
- [toggleFlipY](Pawns_AIs_AISpawn.AISpawn.md#toggleflipy)
- [update](Pawns_AIs_AISpawn.AISpawn.md#update)
- [updateDisplayOrigin](Pawns_AIs_AISpawn.AISpawn.md#updatedisplayorigin)
- [willRender](Pawns_AIs_AISpawn.AISpawn.md#willrender)

## Constructors

### constructor

• **new AISpawn**(`scene`, `x`, `y`, `texture`, `frame?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | `Scene` |
| `x` | `number` |
| `y` | `number` |
| `texture` | `string` \| `Texture` |
| `frame?` | `string` \| `number` |

#### Overrides

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[constructor](Pawns_PawnSpawn.PawnSpawn.md#constructor)

#### Defined in

[src/Pawns/AIs/AISpawn.ts:39](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/AIs/AISpawn.ts#L39)

## Properties

### active

• **active**: `boolean`

The active state of this Game Object.
A Game Object with an active state of `true` is processed by the Scenes UpdateList, if added to it.
An active object is one which is having its logic and internal systems updated.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[active](Pawns_PawnSpawn.PawnSpawn.md#active)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17050

___

### alpha

• **alpha**: `number`

The alpha value of the Game Object.

This is a global value, impacting the entire Game Object, not just a region of it.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[alpha](Pawns_PawnSpawn.PawnSpawn.md#alpha)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20178

___

### alphaBottomLeft

• **alphaBottomLeft**: `number`

The alpha value starting from the bottom-left of the Game Object.
This value is interpolated from the corner to the center of the Game Object.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[alphaBottomLeft](Pawns_PawnSpawn.PawnSpawn.md#alphabottomleft)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20196

___

### alphaBottomRight

• **alphaBottomRight**: `number`

The alpha value starting from the bottom-right of the Game Object.
This value is interpolated from the corner to the center of the Game Object.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[alphaBottomRight](Pawns_PawnSpawn.PawnSpawn.md#alphabottomright)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20202

___

### alphaTopLeft

• **alphaTopLeft**: `number`

The alpha value starting from the top-left of the Game Object.
This value is interpolated from the corner to the center of the Game Object.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[alphaTopLeft](Pawns_PawnSpawn.PawnSpawn.md#alphatopleft)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20184

___

### alphaTopRight

• **alphaTopRight**: `number`

The alpha value starting from the top-right of the Game Object.
This value is interpolated from the corner to the center of the Game Object.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[alphaTopRight](Pawns_PawnSpawn.PawnSpawn.md#alphatopright)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20190

___

### angle

• **angle**: `number`

The angle of this Game Object as expressed in degrees.

Phaser uses a right-hand clockwise rotation system, where 0 is right, 90 is down, 180/-180 is left
and -90 is up.

If you prefer to work in radians, see the `rotation` property instead.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[angle](Pawns_PawnSpawn.PawnSpawn.md#angle)

#### Defined in

node_modules/phaser/types/phaser.d.ts:21014

___

### blendMode

• **blendMode**: `string` \| `BlendModes`

Sets the Blend Mode being used by this Game Object.

This can be a const, such as `Phaser.BlendModes.SCREEN`, or an integer, such as 4 (for Overlay)

Under WebGL only the following Blend Modes are available:

* ADD
* MULTIPLY
* SCREEN
* ERASE

Canvas has more available depending on browser support.

You can also create your own custom Blend Modes in WebGL.

Blend modes have different effects under Canvas and WebGL, and from browser to browser, depending
on support. Blend Modes also cause a WebGL batch flush should it encounter a new blend mode. For these
reasons try to be careful about the construction of your Scene and the frequency of which blend modes
are used.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[blendMode](Pawns_PawnSpawn.PawnSpawn.md#blendmode)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20225

___

### body

• **body**: `Body` \| `StaticBody` \| `BodyType`

If this Game Object is enabled for Arcade or Matter Physics then this property will contain a reference to a Physics Body.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[body](Pawns_PawnSpawn.PawnSpawn.md#body)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17088

___

### bodyDamage

• `Protected` **bodyDamage**: `number` = `0`

The damage when there is a body contact

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[bodyDamage](Pawns_PawnSpawn.PawnSpawn.md#bodydamage)

#### Defined in

[src/Pawns/PawnSpawn.ts:20](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/PawnSpawn.ts#L20)

___

### bulletDamage

• `Protected` **bulletDamage**: `number` = `1`

The damage of each bullet

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[bulletDamage](Pawns_PawnSpawn.PawnSpawn.md#bulletdamage)

#### Defined in

[src/Pawns/PawnSpawn.ts:26](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/PawnSpawn.ts#L26)

___

### bulletPerFire

• `Protected` **bulletPerFire**: `number` = `1`

The number of bullet shotper fire

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[bulletPerFire](Pawns_PawnSpawn.PawnSpawn.md#bulletperfire)

#### Defined in

[src/Pawns/PawnSpawn.ts:23](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/PawnSpawn.ts#L23)

___

### cameraFilter

• **cameraFilter**: `number`

A bitmask that controls if this Game Object is drawn by a Camera or not.
Not usually set directly, instead call `Camera.ignore`, however you can
set this property directly using the Camera.id property:

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[cameraFilter](Pawns_PawnSpawn.PawnSpawn.md#camerafilter)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17077

___

### data

• **data**: `DataManager`

A Data Manager.
It allows you to store, query and get key/value paired information specific to this Game Object.
`null` by default. Automatically created if you use `getData` or `setData` or `setDataEnabled`.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[data](Pawns_PawnSpawn.PawnSpawn.md#data)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17063

___

### defaultPipeline

• **defaultPipeline**: `WebGLPipeline`

The initial WebGL pipeline of this Game Object.

If you call `resetPipeline` on this Game Object, the pipeline is reset to this default.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[defaultPipeline](Pawns_PawnSpawn.PawnSpawn.md#defaultpipeline)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20542

___

### depth

• **depth**: `number`

The depth of this Game Object within the Scene.

The depth is also known as the 'z-index' in some environments, and allows you to change the rendering order
of Game Objects, without actually moving their position in the display list.

The default depth is zero. A Game Object with a higher depth
value will always render in front of one with a lower value.

Setting the depth will queue a depth sort event within the Scene.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[depth](Pawns_PawnSpawn.PawnSpawn.md#depth)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20262

___

### displayHeight

• **displayHeight**: `number`

The displayed height of this Game Object.

This value takes into account the scale factor.

Setting this value will adjust the Game Object's scale property.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[displayHeight](Pawns_PawnSpawn.PawnSpawn.md#displayheight)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20751

___

### displayList

• **displayList**: `DisplayList` \| `Layer`

Holds a reference to the Display List that contains this Game Object.

This is set automatically when this Game Object is added to a Scene or Layer.

You should treat this property as being read-only.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[displayList](Pawns_PawnSpawn.PawnSpawn.md#displaylist)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17014

___

### displayOriginX

• **displayOriginX**: `number`

The horizontal display origin of this Game Object.
The origin is a normalized value between 0 and 1.
The displayOrigin is a pixel value, based on the size of the Game Object combined with the origin.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[displayOriginX](Pawns_PawnSpawn.PawnSpawn.md#displayoriginx)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20500

___

### displayOriginY

• **displayOriginY**: `number`

The vertical display origin of this Game Object.
The origin is a normalized value between 0 and 1.
The displayOrigin is a pixel value, based on the size of the Game Object combined with the origin.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[displayOriginY](Pawns_PawnSpawn.PawnSpawn.md#displayoriginy)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20507

___

### displayWidth

• **displayWidth**: `number`

The displayed width of this Game Object.

This value takes into account the scale factor.

Setting this value will adjust the Game Object's scale property.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[displayWidth](Pawns_PawnSpawn.PawnSpawn.md#displaywidth)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20742

___

### fireWeapon

• `Private` **fireWeapon**: `boolean` = `false`

Whether the AI has a weapon

#### Defined in

[src/Pawns/AIs/AISpawn.ts:22](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/AIs/AISpawn.ts#L22)

___

### fireWeaponDelay

• `Private` **fireWeaponDelay**: `number` = `1000`

The delay between each fire

#### Defined in

[src/Pawns/AIs/AISpawn.ts:25](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/AIs/AISpawn.ts#L25)

___

### flipX

• **flipX**: `boolean`

The horizontally flipped state of the Game Object.

A Game Object that is flipped horizontally will render inversed on the horizontal axis.
Flipping always takes place from the middle of the texture and does not impact the scale value.
If this Game Object has a physics body, it will not change the body. This is a rendering toggle only.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[flipX](Pawns_PawnSpawn.PawnSpawn.md#flipx)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20285

___

### flipY

• **flipY**: `boolean`

The vertically flipped state of the Game Object.

A Game Object that is flipped vertically will render inversed on the vertical axis (i.e. upside down)
Flipping always takes place from the middle of the texture and does not impact the scale value.
If this Game Object has a physics body, it will not change the body. This is a rendering toggle only.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[flipY](Pawns_PawnSpawn.PawnSpawn.md#flipy)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20294

___

### frame

• **frame**: `Frame`

The Texture Frame this Game Object is using to render with.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[frame](Pawns_PawnSpawn.PawnSpawn.md#frame)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20799

___

### hasPostPipeline

• **hasPostPipeline**: `boolean`

Does this Game Object have any Post Pipelines set?

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[hasPostPipeline](Pawns_PawnSpawn.PawnSpawn.md#haspostpipeline)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20552

___

### height

• **height**: `number`

The native (un-scaled) height of this Game Object.

Changing this value will not change the size that the Game Object is rendered in-game.
For that you need to either set the scale of the Game Object (`setScale`) or use
the `displayHeight` property.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[height](Pawns_PawnSpawn.PawnSpawn.md#height)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20733

___

### ignoreDestroy

• **ignoreDestroy**: `boolean`

This Game Object will ignore all calls made to its destroy method if this flag is set to `true`.
This includes calls that may come from a Group, Container or the Scene itself.
While it allows you to persist a Game Object across Scenes, please understand you are entirely
responsible for managing references to and from this Game Object.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[ignoreDestroy](Pawns_PawnSpawn.PawnSpawn.md#ignoredestroy)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17096

___

### input

• **input**: `InteractiveObject`

If this Game Object is enabled for input then this property will contain an InteractiveObject instance.
Not usually set directly. Instead call `GameObject.setInteractive()`.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[input](Pawns_PawnSpawn.PawnSpawn.md#input)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17083

___

### isCropped

• **isCropped**: `boolean`

A boolean flag indicating if this Game Object is being cropped or not.
You can toggle this at any time after `setCrop` has been called, to turn cropping on or off.
Equally, calling `setCrop` with no arguments will reset the crop and disable it.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[isCropped](Pawns_PawnSpawn.PawnSpawn.md#iscropped)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20806

___

### isTinted

• `Readonly` **isTinted**: `boolean`

Does this Game Object have a tint applied?

It checks to see if the 4 tint properties are set to the value 0xffffff
and that the `tintFill` property is `false`. This indicates that a Game Object isn't tinted.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[isTinted](Pawns_PawnSpawn.PawnSpawn.md#istinted)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20962

___

### mask

• **mask**: `BitmapMask` \| `GeometryMask`

The Mask this Game Object is using during render.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[mask](Pawns_PawnSpawn.PawnSpawn.md#mask)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20423

___

### maxHealth

• `Protected` **maxHealth**: `number` = `10000`

Max hp

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[maxHealth](Pawns_PawnSpawn.PawnSpawn.md#maxhealth)

#### Defined in

[src/Pawns/PawnSpawn.ts:14](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/PawnSpawn.ts#L14)

___

### name

• **name**: `string`

The name of this Game Object.
Empty by default and never populated by Phaser, this is left for developers to use.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[name](Pawns_PawnSpawn.PawnSpawn.md#name)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17043

___

### originX

• **originX**: `number`

The horizontal origin of this Game Object.
The origin maps the relationship between the size and position of the Game Object.
The default value is 0.5, meaning all Game Objects are positioned based on their center.
Setting the value to 0 means the position now relates to the left of the Game Object.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[originX](Pawns_PawnSpawn.PawnSpawn.md#originx)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20485

___

### originY

• **originY**: `number`

The vertical origin of this Game Object.
The origin maps the relationship between the size and position of the Game Object.
The default value is 0.5, meaning all Game Objects are positioned based on their center.
Setting the value to 0 means the position now relates to the top of the Game Object.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[originY](Pawns_PawnSpawn.PawnSpawn.md#originy)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20493

___

### parentContainer

• **parentContainer**: `Container`

The parent Container of this Game Object, if it has one.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[parentContainer](Pawns_PawnSpawn.PawnSpawn.md#parentcontainer)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17037

___

### pathEndX

• `Private` **pathEndX**: `number` = `0`

The end position for the patrol. Must be greater than pathStartX

#### Defined in

[src/Pawns/AIs/AISpawn.ts:34](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/AIs/AISpawn.ts#L34)

___

### pathStartX

• `Private` **pathStartX**: `number` = `0`

The start position for the patrol. Must be lower than pathEndX

#### Defined in

[src/Pawns/AIs/AISpawn.ts:31](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/AIs/AISpawn.ts#L31)

___

### patrol

• **patrol**: `boolean` = `false`

Whether the AI can moves

#### Defined in

[src/Pawns/AIs/AISpawn.ts:28](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/AIs/AISpawn.ts#L28)

___

### pipeline

• **pipeline**: `WebGLPipeline`

The current WebGL pipeline of this Game Object.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[pipeline](Pawns_PawnSpawn.PawnSpawn.md#pipeline)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20547

___

### pipelineData

• **pipelineData**: `object`

An object to store pipeline specific data in, to be read by the pipelines this Game Object uses.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[pipelineData](Pawns_PawnSpawn.PawnSpawn.md#pipelinedata)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20567

___

### postPipelines

• **postPipelines**: `PostFXPipeline`[]

The WebGL Post FX Pipelines this Game Object uses for post-render effects.

The pipelines are processed in the order in which they appear in this array.

If you modify this array directly, be sure to set the
`hasPostPipeline` property accordingly.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[postPipelines](Pawns_PawnSpawn.PawnSpawn.md#postpipelines)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20562

___

### renderFlags

• **renderFlags**: `number`

The flags that are compared against `RENDER_MASK` to determine if this Game Object will render or not.
The bits are 0001 | 0010 | 0100 | 1000 set by the components Visible, Alpha, Transform and Texture respectively.
If those components are not used by your custom class then you can use this bitmask as you wish.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[renderFlags](Pawns_PawnSpawn.PawnSpawn.md#renderflags)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17070

___

### rotation

• **rotation**: `number`

The angle of this Game Object in radians.

Phaser uses a right-hand clockwise rotation system, where 0 is right, PI/2 is down, +-PI is left
and -PI/2 is up.

If you prefer to work in degrees, see the `angle` property instead.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[rotation](Pawns_PawnSpawn.PawnSpawn.md#rotation)

#### Defined in

node_modules/phaser/types/phaser.d.ts:21024

___

### scale

• **scale**: `number`

This is a special setter that allows you to set both the horizontal and vertical scale of this Game Object
to the same value, at the same time. When reading this value the result returned is `(scaleX + scaleY) / 2`.

Use of this property implies you wish the horizontal and vertical scales to be equal to each other. If this
isn't the case, use the `scaleX` or `scaleY` properties instead.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[scale](Pawns_PawnSpawn.PawnSpawn.md#scale)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20994

___

### scaleX

• **scaleX**: `number`

The horizontal scale of this Game Object.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[scaleX](Pawns_PawnSpawn.PawnSpawn.md#scalex)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20999

___

### scaleY

• **scaleY**: `number`

The vertical scale of this Game Object.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[scaleY](Pawns_PawnSpawn.PawnSpawn.md#scaley)

#### Defined in

node_modules/phaser/types/phaser.d.ts:21004

___

### scene

• **scene**: `Scene`

A reference to the Scene to which this Game Object belongs.

Game Objects can only belong to one Scene.

You should consider this property as being read-only. You cannot move a
Game Object to another Scene by simply changing it.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[scene](Pawns_PawnSpawn.PawnSpawn.md#scene)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17005

___

### scrollFactorX

• **scrollFactorX**: `number`

The horizontal scroll factor of this Game Object.

The scroll factor controls the influence of the movement of a Camera upon this Game Object.

When a camera scrolls it will change the location at which this Game Object is rendered on-screen.
It does not change the Game Objects actual position values.

A value of 1 means it will move exactly in sync with a camera.
A value of 0 means it will not move at all, even if the camera moves.
Other values control the degree to which the camera movement is mapped to this Game Object.

Please be aware that scroll factor values other than 1 are not taken in to consideration when
calculating physics collisions. Bodies always collide based on their world position, but changing
the scroll factor is a visual adjustment to where the textures are rendered, which can offset
them from physics bodies if not accounted for in your code.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[scrollFactorX](Pawns_PawnSpawn.PawnSpawn.md#scrollfactorx)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20675

___

### scrollFactorY

• **scrollFactorY**: `number`

The vertical scroll factor of this Game Object.

The scroll factor controls the influence of the movement of a Camera upon this Game Object.

When a camera scrolls it will change the location at which this Game Object is rendered on-screen.
It does not change the Game Objects actual position values.

A value of 1 means it will move exactly in sync with a camera.
A value of 0 means it will not move at all, even if the camera moves.
Other values control the degree to which the camera movement is mapped to this Game Object.

Please be aware that scroll factor values other than 1 are not taken in to consideration when
calculating physics collisions. Bodies always collide based on their world position, but changing
the scroll factor is a visual adjustment to where the textures are rendered, which can offset
them from physics bodies if not accounted for in your code.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[scrollFactorY](Pawns_PawnSpawn.PawnSpawn.md#scrollfactory)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20694

___

### startFireWeponDelay

• `Private` **startFireWeponDelay**: `number` = `0`

The delay before the first fire

#### Defined in

[src/Pawns/AIs/AISpawn.ts:37](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/AIs/AISpawn.ts#L37)

___

### startOnRight

• `Protected` **startOnRight**: `boolean` = `false`

Whether the pawn is looking on the right when spawned

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[startOnRight](Pawns_PawnSpawn.PawnSpawn.md#startonright)

#### Defined in

[src/Pawns/PawnSpawn.ts:17](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/PawnSpawn.ts#L17)

___

### state

• **state**: `string` \| `number`

The current state of this Game Object.

Phaser itself will never modify this value, although plugins may do so.

Use this property to track the state of a Game Object during its lifetime. For example, it could change from
a state of 'moving', to 'attacking', to 'dead'. The state value should be an integer (ideally mapped to a constant
in your game code), or a string. These are recommended to keep it light and simple, with fast comparisons.
If you need to store complex data about your Game Object, look at using the Data Component instead.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[state](Pawns_PawnSpawn.PawnSpawn.md#state)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17032

___

### tabIndex

• **tabIndex**: `number`

The Tab Index of the Game Object.
Reserved for future use by plugins and the Input Manager.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[tabIndex](Pawns_PawnSpawn.PawnSpawn.md#tabindex)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17056

___

### texture

• **texture**: `Texture` \| `CanvasTexture`

The Texture this Game Object is using to render with.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[texture](Pawns_PawnSpawn.PawnSpawn.md#texture)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20794

___

### tint

• **tint**: `number`

The tint value being applied to the whole of the Game Object.
This property is a setter-only. Use the properties `tintTopLeft` etc to read the current tint value.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[tint](Pawns_PawnSpawn.PawnSpawn.md#tint)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20954

___

### tintBottomLeft

• **tintBottomLeft**: `number`

The tint value being applied to the bottom-left vertice of the Game Object.
This value is interpolated from the corner to the center of the Game Object.
The value should be set as a hex number, i.e. 0xff0000 for red, or 0xff00ff for purple.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[tintBottomLeft](Pawns_PawnSpawn.PawnSpawn.md#tintbottomleft)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20880

___

### tintBottomRight

• **tintBottomRight**: `number`

The tint value being applied to the bottom-right vertice of the Game Object.
This value is interpolated from the corner to the center of the Game Object.
The value should be set as a hex number, i.e. 0xff0000 for red, or 0xff00ff for purple.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[tintBottomRight](Pawns_PawnSpawn.PawnSpawn.md#tintbottomright)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20887

___

### tintFill

• **tintFill**: `boolean`

The tint fill mode.

`false` = An additive tint (the default), where vertices colors are blended with the texture.
`true` = A fill tint, where the vertices colors replace the texture, but respects texture alpha.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[tintFill](Pawns_PawnSpawn.PawnSpawn.md#tintfill)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20895

___

### tintTopLeft

• **tintTopLeft**: `number`

The tint value being applied to the top-left vertice of the Game Object.
This value is interpolated from the corner to the center of the Game Object.
The value should be set as a hex number, i.e. 0xff0000 for red, or 0xff00ff for purple.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[tintTopLeft](Pawns_PawnSpawn.PawnSpawn.md#tinttopleft)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20866

___

### tintTopRight

• **tintTopRight**: `number`

The tint value being applied to the top-right vertice of the Game Object.
This value is interpolated from the corner to the center of the Game Object.
The value should be set as a hex number, i.e. 0xff0000 for red, or 0xff00ff for purple.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[tintTopRight](Pawns_PawnSpawn.PawnSpawn.md#tinttopright)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20873

___

### type

• **type**: `string`

A textual representation of this Game Object, i.e. `sprite`.
Used internally by Phaser but is available for your own custom classes to populate.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[type](Pawns_PawnSpawn.PawnSpawn.md#type)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17020

___

### visible

• **visible**: `boolean`

The visible state of the Game Object.

An invisible Game Object will skip rendering, but will still process update logic.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[visible](Pawns_PawnSpawn.PawnSpawn.md#visible)

#### Defined in

node_modules/phaser/types/phaser.d.ts:21143

___

### w

• **w**: `number`

The w position of this Game Object.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[w](Pawns_PawnSpawn.PawnSpawn.md#w)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20985

___

### width

• **width**: `number`

The native (un-scaled) width of this Game Object.

Changing this value will not change the size that the Game Object is rendered in-game.
For that you need to either set the scale of the Game Object (`setScale`) or use
the `displayWidth` property.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[width](Pawns_PawnSpawn.PawnSpawn.md#width)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20724

___

### x

• **x**: `number`

The x position of this Game Object.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[x](Pawns_PawnSpawn.PawnSpawn.md#x)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20967

___

### y

• **y**: `number`

The y position of this Game Object.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[y](Pawns_PawnSpawn.PawnSpawn.md#y)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20972

___

### z

• **z**: `number`

The z position of this Game Object.

Note: The z position does not control the rendering order of 2D Game Objects. Use
Phaser.GameObjects.Components.Depth#depth instead.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[z](Pawns_PawnSpawn.PawnSpawn.md#z)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20980

___

### RENDER\_MASK

▪ `Static` `Readonly` **RENDER\_MASK**: `number`

The bitmask that `GameObject.renderFlags` is compared against to determine if the Game Object will render or not.

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[RENDER_MASK](Pawns_PawnSpawn.PawnSpawn.md#render_mask)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17400

## Methods

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. Default this. |

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[addListener](Pawns_PawnSpawn.PawnSpawn.md#addlistener)

#### Defined in

node_modules/phaser/types/phaser.d.ts:9588

___

### addToDisplayList

▸ **addToDisplayList**(`displayList?`): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Adds this Game Object to the given Display List.

If no Display List is specified, it will default to the Display List owned by the Scene to which
this Game Object belongs.

A Game Object can only exist on one Display List at any given time, but may move freely between them.

If this Game Object is already on another Display List when this method is called, it will first
be removed from it, before being added to the new list.

You can query which list it is on by looking at the `Phaser.GameObjects.GameObject#displayList` property.

If a Game Object isn't on any display list, it will not be rendered. If you just wish to temporarly
disable it from rendering, consider using the `setVisible` method, instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `displayList?` | `DisplayList` \| `Layer` | The Display List to add to. Defaults to the Scene Display List. |

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[addToDisplayList](Pawns_PawnSpawn.PawnSpawn.md#addtodisplaylist)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17342

___

### addToUpdateList

▸ **addToUpdateList**(): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Adds this Game Object to the Update List belonging to the Scene.

When a Game Object is added to the Update List it will have its `preUpdate` method called
every game frame. This method is passed two parameters: `delta` and `time`.

If you wish to run your own logic within `preUpdate` then you should always call
`preUpdate.super(delta, time)` within it, or it may fail to process required operations,
such as Sprite animations.

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[addToUpdateList](Pawns_PawnSpawn.PawnSpawn.md#addtoupdatelist)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17354

___

### addedToScene

▸ **addedToScene**(): `void`

This callback is invoked when this Game Object is added to a Scene.

Can be overriden by custom Game Objects, but be aware of some Game Objects that
will use this, such as Sprites, to add themselves into the Update List.

You can also listen for the `ADDED_TO_SCENE` event from this Game Object.

#### Returns

`void`

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[addedToScene](Pawns_PawnSpawn.PawnSpawn.md#addedtoscene)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17285

___

### clearAlpha

▸ **clearAlpha**(): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Clears all alpha values associated with this Game Object.

Immediately sets the alpha levels back to 1 (fully opaque).

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[clearAlpha](Pawns_PawnSpawn.PawnSpawn.md#clearalpha)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20158

___

### clearMask

▸ **clearMask**(`destroyMask?`): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Clears the mask that this Game Object was using.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destroyMask?` | `boolean` | Destroy the mask before clearing it? Default false. |

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[clearMask](Pawns_PawnSpawn.PawnSpawn.md#clearmask)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20446

___

### clearTint

▸ **clearTint**(): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Clears all tint values associated with this Game Object.

Immediately sets the color values back to 0xffffff and the tint type to 'additive',
which results in no visible change to the texture.

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[clearTint](Pawns_PawnSpawn.PawnSpawn.md#cleartint)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20903

___

### copyPosition

▸ **copyPosition**(`source`): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Copies an object's coordinates to this Game Object's position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `Vector2Like` \| `Vector3Like` \| `Vector4Like` | An object with numeric 'x', 'y', 'z', or 'w' properties. Undefined values are not copied. |

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[copyPosition](Pawns_PawnSpawn.PawnSpawn.md#copyposition)

#### Defined in

node_modules/phaser/types/phaser.d.ts:21039

___

### createBitmapMask

▸ **createBitmapMask**(`renderable?`): `BitmapMask`

Creates and returns a Bitmap Mask. This mask can be used by any Game Object,
including this one.

Note: Bitmap Masks only work on WebGL. Geometry Masks work on both WebGL and Canvas.

To create the mask you need to pass in a reference to a renderable Game Object.
A renderable Game Object is one that uses a texture to render with, such as an
Image, Sprite, Render Texture or BitmapText.

If you do not provide a renderable object, and this Game Object has a texture,
it will use itself as the object. This means you can call this method to create
a Bitmap Mask from any renderable Game Object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderable?` | `GameObject` | A renderable Game Object that uses a texture, such as a Sprite. |

#### Returns

`BitmapMask`

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[createBitmapMask](Pawns_PawnSpawn.PawnSpawn.md#createbitmapmask)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20463

___

### createGeometryMask

▸ **createGeometryMask**(`graphics?`): `GeometryMask`

Creates and returns a Geometry Mask. This mask can be used by any Game Object,
including this one.

To create the mask you need to pass in a reference to a Graphics Game Object.

If you do not provide a graphics object, and this Game Object is an instance
of a Graphics object, then it will use itself to create the mask.

This means you can call this method to create a Geometry Mask from any Graphics Game Object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `graphics?` | `Graphics` | A Graphics Game Object. The geometry within it will be used as the mask. |

#### Returns

`GeometryMask`

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[createGeometryMask](Pawns_PawnSpawn.PawnSpawn.md#creategeometrymask)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20477

___

### destroy

▸ **destroy**(`fromScene?`): `void`

Destroys this Game Object removing it from the Display List and Update List and
severing all ties to parent resources.

Also removes itself from the Input Manager and Physics Manager if previously enabled.

Use this to remove a Game Object from your game if you don't ever plan to use it again.
As long as no reference to it exists within your own code it should become free for
garbage collection by the browser.

If you just want to temporarily disable an object then look at using the
Game Object Pool instead of destroying it, as destroyed objects cannot be resurrected.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fromScene?` | `boolean` | `True` if this Game Object is being destroyed by the Scene, `false` if not. Default false. |

#### Returns

`void`

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[destroy](Pawns_PawnSpawn.PawnSpawn.md#destroy)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17395

___

### disableInteractive

▸ **disableInteractive**(): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

If this Game Object has previously been enabled for input, this will disable it.

An object that is disabled for input stops processing or being considered for
input events, but can be turned back on again at any time by simply calling
`setInteractive()` with no arguments provided.

If want to completely remove interaction from this Game Object then use `removeInteractive` instead.

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[disableInteractive](Pawns_PawnSpawn.PawnSpawn.md#disableinteractive)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17253

___

### emit

▸ **emit**(`event`, ...`args`): `boolean`

Calls each of the listeners registered for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `...args` | `any`[] | Additional arguments that will be passed to the event handler. |

#### Returns

`boolean`

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[emit](Pawns_PawnSpawn.PawnSpawn.md#emit)

#### Defined in

node_modules/phaser/types/phaser.d.ts:9572

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[eventNames](Pawns_PawnSpawn.PawnSpawn.md#eventnames)

#### Defined in

node_modules/phaser/types/phaser.d.ts:9553

___

### getBottomCenter

▸ **getBottomCenter**<`O`\>(`output?`, `includeParent?`): `O`

Gets the bottom-center coordinate of this Game Object, regardless of origin.
The returned point is calculated in local space and does not factor in any parent containers

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends `Vector2`<`O`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `output?` | `O` | An object to store the values in. If not provided a new Vector2 will be created. |
| `includeParent?` | `boolean` | If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? Default false. |

#### Returns

`O`

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[getBottomCenter](Pawns_PawnSpawn.PawnSpawn.md#getbottomcenter)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20403

___

### getBottomLeft

▸ **getBottomLeft**<`O`\>(`output?`, `includeParent?`): `O`

Gets the bottom-left corner coordinate of this Game Object, regardless of origin.
The returned point is calculated in local space and does not factor in any parent containers

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends `Vector2`<`O`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `output?` | `O` | An object to store the values in. If not provided a new Vector2 will be created. |
| `includeParent?` | `boolean` | If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? Default false. |

#### Returns

`O`

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[getBottomLeft](Pawns_PawnSpawn.PawnSpawn.md#getbottomleft)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20395

___

### getBottomRight

▸ **getBottomRight**<`O`\>(`output?`, `includeParent?`): `O`

Gets the bottom-right corner coordinate of this Game Object, regardless of origin.
The returned point is calculated in local space and does not factor in any parent containers

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends `Vector2`<`O`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `output?` | `O` | An object to store the values in. If not provided a new Vector2 will be created. |
| `includeParent?` | `boolean` | If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? Default false. |

#### Returns

`O`

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[getBottomRight](Pawns_PawnSpawn.PawnSpawn.md#getbottomright)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20411

___

### getBounds

▸ **getBounds**<`O`\>(`output?`): `O`

Gets the bounds of this Game Object, regardless of origin.
The values are stored and returned in a Rectangle, or Rectangle-like, object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends `Rectangle`<`O`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `output?` | `O` | An object to store the values in. If not provided a new Rectangle will be created. |

#### Returns

`O`

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[getBounds](Pawns_PawnSpawn.PawnSpawn.md#getbounds)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20418

___

### getCenter

▸ **getCenter**<`O`\>(`output?`): `O`

Gets the center coordinate of this Game Object, regardless of origin.
The returned point is calculated in local space and does not factor in any parent containers

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends `Vector2`<`O`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `output?` | `O` | An object to store the values in. If not provided a new Vector2 will be created. |

#### Returns

`O`

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[getCenter](Pawns_PawnSpawn.PawnSpawn.md#getcenter)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20347

___

### getData

▸ **getData**(`key`): `any`

Retrieves the value for the given key in this Game Objects Data Manager, or undefined if it doesn't exist.

You can also access values via the `values` object. For example, if you had a key called `gold` you can do either:

```javascript
sprite.getData('gold');
```

Or access the value directly:

```javascript
sprite.data.values.gold;
```

You can also pass in an array of keys, in which case an array of values will be returned:

```javascript
sprite.getData([ 'gold', 'armor', 'health' ]);
```

This approach is useful for destructuring arrays in ES6.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` \| `string`[] | The key of the value to retrieve, or an array of keys. |

#### Returns

`any`

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[getData](Pawns_PawnSpawn.PawnSpawn.md#getdata)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17224

___

### getIndexList

▸ **getIndexList**(): `number`[]

Returns an array containing the display list index of either this Game Object, or if it has one,
its parent Container. It then iterates up through all of the parent containers until it hits the
root of the display list (which is index 0 in the returned array).

Used internally by the InputPlugin but also useful if you wish to find out the display depth of
this Game Object and all of its ancestors.

#### Returns

`number`[]

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[getIndexList](Pawns_PawnSpawn.PawnSpawn.md#getindexlist)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17323

___

### getLeftCenter

▸ **getLeftCenter**<`O`\>(`output?`, `includeParent?`): `O`

Gets the left-center coordinate of this Game Object, regardless of origin.
The returned point is calculated in local space and does not factor in any parent containers

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends `Vector2`<`O`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `output?` | `O` | An object to store the values in. If not provided a new Vector2 will be created. |
| `includeParent?` | `boolean` | If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? Default false. |

#### Returns

`O`

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[getLeftCenter](Pawns_PawnSpawn.PawnSpawn.md#getleftcenter)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20379

___

### getLocalPoint

▸ **getLocalPoint**(`x`, `y`, `point?`, `camera?`): `Vector2`

Takes the given `x` and `y` coordinates and converts them into local space for this
Game Object, taking into account parent and local transforms, and the Display Origin.

The returned Vector2 contains the translated point in its properties.

A Camera needs to be provided in order to handle modified scroll factors. If no
camera is specified, it will use the `main` camera from the Scene to which this
Game Object belongs.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The x position to translate. |
| `y` | `number` | The y position to translate. |
| `point?` | `Vector2` | A Vector2, or point-like object, to store the results in. |
| `camera?` | `Camera` | The Camera which is being tested against. If not given will use the Scene default camera. |

#### Returns

`Vector2`

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[getLocalPoint](Pawns_PawnSpawn.PawnSpawn.md#getlocalpoint)

#### Defined in

node_modules/phaser/types/phaser.d.ts:21129

___

### getLocalTransformMatrix

▸ **getLocalTransformMatrix**(`tempMatrix?`): `TransformMatrix`

Gets the local transform matrix for this Game Object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tempMatrix?` | `TransformMatrix` | The matrix to populate with the values from this Game Object. |

#### Returns

`TransformMatrix`

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[getLocalTransformMatrix](Pawns_PawnSpawn.PawnSpawn.md#getlocaltransformmatrix)

#### Defined in

node_modules/phaser/types/phaser.d.ts:21106

___

### getParentRotation

▸ **getParentRotation**(): `number`

Gets the sum total rotation of all of this Game Objects parent Containers.

The returned value is in radians and will be zero if this Game Object has no parent container.

#### Returns

`number`

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[getParentRotation](Pawns_PawnSpawn.PawnSpawn.md#getparentrotation)

#### Defined in

node_modules/phaser/types/phaser.d.ts:21136

___

### getPawnData

▸ **getPawnData**(): [`AIData`](../modules/Pawns_AIs_AISpawn.md#aidata)

#### Returns

[`AIData`](../modules/Pawns_AIs_AISpawn.md#aidata)

#### Overrides

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[getPawnData](Pawns_PawnSpawn.PawnSpawn.md#getpawndata)

#### Defined in

[src/Pawns/AIs/AISpawn.ts:44](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/AIs/AISpawn.ts#L44)

___

### getPipelineName

▸ **getPipelineName**(): `string`

Gets the name of the WebGL Pipeline this Game Object is currently using.

#### Returns

`string`

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[getPipelineName](Pawns_PawnSpawn.PawnSpawn.md#getpipelinename)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20656

___

### getPostPipeline

▸ **getPostPipeline**(`pipeline`): `PostFXPipeline` \| `PostFXPipeline`[]

Gets a Post Pipeline instance from this Game Object, based on the given name, and returns it.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pipeline` | `string` \| `Function` \| `PostFXPipeline` | The string-based name of the pipeline, or a pipeline class. |

#### Returns

`PostFXPipeline` \| `PostFXPipeline`[]

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[getPostPipeline](Pawns_PawnSpawn.PawnSpawn.md#getpostpipeline)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20629

___

### getRightCenter

▸ **getRightCenter**<`O`\>(`output?`, `includeParent?`): `O`

Gets the right-center coordinate of this Game Object, regardless of origin.
The returned point is calculated in local space and does not factor in any parent containers

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends `Vector2`<`O`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `output?` | `O` | An object to store the values in. If not provided a new Vector2 will be created. |
| `includeParent?` | `boolean` | If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? Default false. |

#### Returns

`O`

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[getRightCenter](Pawns_PawnSpawn.PawnSpawn.md#getrightcenter)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20387

___

### getTopCenter

▸ **getTopCenter**<`O`\>(`output?`, `includeParent?`): `O`

Gets the top-center coordinate of this Game Object, regardless of origin.
The returned point is calculated in local space and does not factor in any parent containers

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends `Vector2`<`O`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `output?` | `O` | An object to store the values in. If not provided a new Vector2 will be created. |
| `includeParent?` | `boolean` | If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? Default false. |

#### Returns

`O`

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[getTopCenter](Pawns_PawnSpawn.PawnSpawn.md#gettopcenter)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20363

___

### getTopLeft

▸ **getTopLeft**<`O`\>(`output?`, `includeParent?`): `O`

Gets the top-left corner coordinate of this Game Object, regardless of origin.
The returned point is calculated in local space and does not factor in any parent containers

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends `Vector2`<`O`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `output?` | `O` | An object to store the values in. If not provided a new Vector2 will be created. |
| `includeParent?` | `boolean` | If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? Default false. |

#### Returns

`O`

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[getTopLeft](Pawns_PawnSpawn.PawnSpawn.md#gettopleft)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20355

___

### getTopRight

▸ **getTopRight**<`O`\>(`output?`, `includeParent?`): `O`

Gets the top-right corner coordinate of this Game Object, regardless of origin.
The returned point is calculated in local space and does not factor in any parent containers

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends `Vector2`<`O`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `output?` | `O` | An object to store the values in. If not provided a new Vector2 will be created. |
| `includeParent?` | `boolean` | If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? Default false. |

#### Returns

`O`

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[getTopRight](Pawns_PawnSpawn.PawnSpawn.md#gettopright)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20371

___

### getWorldTransformMatrix

▸ **getWorldTransformMatrix**(`tempMatrix?`, `parentMatrix?`): `TransformMatrix`

Gets the world transform matrix for this Game Object, factoring in any parent Containers.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tempMatrix?` | `TransformMatrix` | The matrix to populate with the values from this Game Object. |
| `parentMatrix?` | `TransformMatrix` | A temporary matrix to hold parent values during the calculations. |

#### Returns

`TransformMatrix`

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[getWorldTransformMatrix](Pawns_PawnSpawn.PawnSpawn.md#getworldtransformmatrix)

#### Defined in

node_modules/phaser/types/phaser.d.ts:21113

___

### incData

▸ **incData**(`key`, `data?`): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Increase a value for the given key within this Game Objects Data Manager. If the key doesn't already exist in the Data Manager then it is increased from 0.

If the Game Object has not been enabled for data (via `setDataEnabled`) then it will be enabled
before setting the value.

If the key doesn't already exist in the Data Manager then it is created.

When the value is first set, a `setdata` event is emitted from this Game Object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` \| `object` | The key to increase the value for. |
| `data?` | `any` | The value to increase for the given key. |

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[incData](Pawns_PawnSpawn.PawnSpawn.md#incdata)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17185

___

### initPipeline

▸ **initPipeline**(`pipeline`): `boolean`

Sets the initial WebGL Pipeline of this Game Object.

This should only be called during the instantiation of the Game Object. After that, use `setPipeline`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pipeline` | `string` \| `WebGLPipeline` | Either the string-based name of the pipeline, or a pipeline instance to set. |

#### Returns

`boolean`

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[initPipeline](Pawns_PawnSpawn.PawnSpawn.md#initpipeline)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20575

___

### listenerCount

▸ **listenerCount**(`event`): `number`

Return the number of listeners listening to a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |

#### Returns

`number`

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[listenerCount](Pawns_PawnSpawn.PawnSpawn.md#listenercount)

#### Defined in

node_modules/phaser/types/phaser.d.ts:9565

___

### listeners

▸ **listeners**(`event`): `Function`[]

Return the listeners registered for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |

#### Returns

`Function`[]

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[listeners](Pawns_PawnSpawn.PawnSpawn.md#listeners)

#### Defined in

node_modules/phaser/types/phaser.d.ts:9559

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[off](Pawns_PawnSpawn.PawnSpawn.md#off)

#### Defined in

node_modules/phaser/types/phaser.d.ts:9614

___

### on

▸ **on**(`event`, `fn`, `context?`): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. Default this. |

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[on](Pawns_PawnSpawn.PawnSpawn.md#on)

#### Defined in

node_modules/phaser/types/phaser.d.ts:9580

___

### once

▸ **once**(`event`, `fn`, `context?`): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. Default this. |

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[once](Pawns_PawnSpawn.PawnSpawn.md#once)

#### Defined in

node_modules/phaser/types/phaser.d.ts:9596

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[removeAllListeners](Pawns_PawnSpawn.PawnSpawn.md#removealllisteners)

#### Defined in

node_modules/phaser/types/phaser.d.ts:9620

___

### removeFromDisplayList

▸ **removeFromDisplayList**(): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Removes this Game Object from the Display List it is currently on.

A Game Object can only exist on one Display List at any given time, but may move freely removed
and added back at a later stage.

You can query which list it is on by looking at the `Phaser.GameObjects.GameObject#displayList` property.

If a Game Object isn't on any Display List, it will not be rendered. If you just wish to temporarly
disable it from rendering, consider using the `setVisible` method, instead.

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[removeFromDisplayList](Pawns_PawnSpawn.PawnSpawn.md#removefromdisplaylist)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17367

___

### removeFromUpdateList

▸ **removeFromUpdateList**(): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Removes this Game Object from the Scene's Update List.

When a Game Object is on the Update List, it will have its `preUpdate` method called
every game frame. Calling this method will remove it from the list, preventing this.

Removing a Game Object from the Update List will stop most internal functions working.
For example, removing a Sprite from the Update List will prevent it from being able to
run animations.

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[removeFromUpdateList](Pawns_PawnSpawn.PawnSpawn.md#removefromupdatelist)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17379

___

### removeInteractive

▸ **removeInteractive**(): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

If this Game Object has previously been enabled for input, this will queue it
for removal, causing it to no longer be interactive. The removal happens on
the next game step, it is not immediate.

The Interactive Object that was assigned to this Game Object will be destroyed,
removed from the Input Manager and cleared from this Game Object.

If you wish to re-enable this Game Object at a later date you will need to
re-create its InteractiveObject by calling `setInteractive` again.

If you wish to only temporarily stop an object from receiving input then use
`disableInteractive` instead, as that toggles the interactive state, where-as
this erases it completely.

If you wish to resize a hit area, don't remove and then set it as being
interactive. Instead, access the hitarea object directly and resize the shape
being used. I.e.: `sprite.input.hitArea.setSize(width, height)` (assuming the
shape is a Rectangle, which it is by default.)

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[removeInteractive](Pawns_PawnSpawn.PawnSpawn.md#removeinteractive)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17275

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[removeListener](Pawns_PawnSpawn.PawnSpawn.md#removelistener)

#### Defined in

node_modules/phaser/types/phaser.d.ts:9605

___

### removePostPipeline

▸ **removePostPipeline**(`pipeline`): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Removes a type of Post Pipeline instances from this Game Object, based on the given name, and destroys them.

If you wish to remove all Post Pipelines use the `resetPostPipeline` method instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pipeline` | `string` \| `PostFXPipeline` | The string-based name of the pipeline, or a pipeline class. |

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[removePostPipeline](Pawns_PawnSpawn.PawnSpawn.md#removepostpipeline)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20651

___

### removedFromScene

▸ **removedFromScene**(): `void`

This callback is invoked when this Game Object is removed from a Scene.

Can be overriden by custom Game Objects, but be aware of some Game Objects that
will use this, such as Sprites, to removed themselves from the Update List.

You can also listen for the `REMOVED_FROM_SCENE` event from this Game Object.

#### Returns

`void`

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[removedFromScene](Pawns_PawnSpawn.PawnSpawn.md#removedfromscene)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17295

___

### resetFlip

▸ **resetFlip**(): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Resets the horizontal and vertical flipped state of this Game Object back to their default un-flipped state.

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[resetFlip](Pawns_PawnSpawn.PawnSpawn.md#resetflip)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20340

___

### resetPipeline

▸ **resetPipeline**(`resetPostPipelines?`, `resetData?`): `boolean`

Resets the WebGL Pipeline of this Game Object back to the default it was created with.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resetPostPipelines?` | `boolean` | Reset all of the post pipelines? Default false. |
| `resetData?` | `boolean` | Reset the `pipelineData` object to being an empty object? Default false. |

#### Returns

`boolean`

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[resetPipeline](Pawns_PawnSpawn.PawnSpawn.md#resetpipeline)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20636

___

### resetPostPipeline

▸ **resetPostPipeline**(`resetData?`): `void`

Resets the WebGL Post Pipelines of this Game Object. It does this by calling
the `destroy` method on each post pipeline and then clearing the local array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resetData?` | `boolean` | Reset the `pipelineData` object to being an empty object? Default false. |

#### Returns

`void`

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[resetPostPipeline](Pawns_PawnSpawn.PawnSpawn.md#resetpostpipeline)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20643

___

### setActive

▸ **setActive**(`value`): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Sets the `active` property of this Game Object and returns this Game Object for further chaining.
A Game Object with its `active` property set to `true` will be updated by the Scenes UpdateList.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | True if this Game Object should be set as active, false if not. |

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[setActive](Pawns_PawnSpawn.PawnSpawn.md#setactive)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17103

___

### setAlpha

▸ **setAlpha**(`topLeft?`, `topRight?`, `bottomLeft?`, `bottomRight?`): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Set the Alpha level of this Game Object. The alpha controls the opacity of the Game Object as it renders.
Alpha values are provided as a float between 0, fully transparent, and 1, fully opaque.

If your game is running under WebGL you can optionally specify four different alpha values, each of which
correspond to the four corners of the Game Object. Under Canvas only the `topLeft` value given is used.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `topLeft?` | `number` | The alpha value used for the top-left of the Game Object. If this is the only value given it's applied across the whole Game Object. Default 1. |
| `topRight?` | `number` | The alpha value used for the top-right of the Game Object. WebGL only. |
| `bottomLeft?` | `number` | The alpha value used for the bottom-left of the Game Object. WebGL only. |
| `bottomRight?` | `number` | The alpha value used for the bottom-right of the Game Object. WebGL only. |

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[setAlpha](Pawns_PawnSpawn.PawnSpawn.md#setalpha)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20171

___

### setAngle

▸ **setAngle**(`degrees?`): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Sets the angle of this Game Object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `degrees?` | `number` | The rotation of this Game Object, in degrees. Default 0. |

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[setAngle](Pawns_PawnSpawn.PawnSpawn.md#setangle)

#### Defined in

node_modules/phaser/types/phaser.d.ts:21066

___

### setBlendMode

▸ **setBlendMode**(`value`): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Sets the Blend Mode being used by this Game Object.

This can be a const, such as `Phaser.BlendModes.SCREEN`, or an integer, such as 4 (for Overlay)

Under WebGL only the following Blend Modes are available:

* ADD
* MULTIPLY
* SCREEN
* ERASE (only works when rendering to a framebuffer, like a Render Texture)

Canvas has more available depending on browser support.

You can also create your own custom Blend Modes in WebGL.

Blend modes have different effects under Canvas and WebGL, and from browser to browser, depending
on support. Blend Modes also cause a WebGL batch flush should it encounter a new blend mode. For these
reasons try to be careful about the construction of your Scene and the frequency in which blend modes
are used.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` \| `BlendModes` | The BlendMode value. Either a string or a CONST. |

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[setBlendMode](Pawns_PawnSpawn.PawnSpawn.md#setblendmode)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20249

___

### setCrop

▸ **setCrop**(`x?`, `y?`, `width?`, `height?`): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Applies a crop to a texture based Game Object, such as a Sprite or Image.

The crop is a rectangle that limits the area of the texture frame that is visible during rendering.

Cropping a Game Object does not change its size, dimensions, physics body or hit area, it just
changes what is shown when rendered.

The crop coordinates are relative to the texture frame, not the Game Object, meaning 0 x 0 is the top-left.

Therefore, if you had a Game Object that had an 800x600 sized texture, and you wanted to show only the left
half of it, you could call `setCrop(0, 0, 400, 600)`.

It is also scaled to match the Game Object scale automatically. Therefore a crop rect of 100x50 would crop
an area of 200x100 when applied to a Game Object that had a scale factor of 2.

You can either pass in numeric values directly, or you can provide a single Rectangle object as the first argument.

Call this method with no arguments at all to reset the crop, or toggle the property `isCropped` to `false`.

You should do this if the crop rectangle becomes the same size as the frame itself, as it will allow
the renderer to skip several internal calculations.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x?` | `number` \| `Rectangle` | The x coordinate to start the crop from. Or a Phaser.Geom.Rectangle object, in which case the rest of the arguments are ignored. |
| `y?` | `number` | The y coordinate to start the crop from. |
| `width?` | `number` | The width of the crop rectangle in pixels. |
| `height?` | `number` | The height of the crop rectangle in pixels. |

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[setCrop](Pawns_PawnSpawn.PawnSpawn.md#setcrop)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20835

___

### setData

▸ **setData**(`key`, `data?`): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Allows you to store a key value pair within this Game Objects Data Manager.

If the Game Object has not been enabled for data (via `setDataEnabled`) then it will be enabled
before setting the value.

If the key doesn't already exist in the Data Manager then it is created.

```javascript
sprite.setData('name', 'Red Gem Stone');
```

You can also pass in an object of key value pairs as the first argument:

```javascript
sprite.setData({ name: 'Red Gem Stone', level: 2, owner: 'Link', gold: 50 });
```

To get a value back again you can call `getData`:

```javascript
sprite.getData('gold');
```

Or you can access the value directly via the `values` property, where it works like any other variable:

```javascript
sprite.data.values.gold += 50;
```

When the value is first set, a `setdata` event is emitted from this Game Object.

If the key already exists, a `changedata` event is emitted instead, along an event named after the key.
For example, if you updated an existing key called `PlayerLives` then it would emit the event `changedata-PlayerLives`.
These events will be emitted regardless if you use this method to set the value, or the direct `values` setter.

Please note that the data keys are case-sensitive and must be valid JavaScript Object property strings.
This means the keys `gold` and `Gold` are treated as two unique values within the Data Manager.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` \| `object` | The key to set the value for. Or an object of key value pairs. If an object the `data` argument is ignored. |
| `data?` | `any` | The value to set for the given key. If an object is provided as the key this argument is ignored. |

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[setData](Pawns_PawnSpawn.PawnSpawn.md#setdata)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17171

___

### setDataEnabled

▸ **setDataEnabled**(): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Adds a Data Manager component to this Game Object.

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[setDataEnabled](Pawns_PawnSpawn.PawnSpawn.md#setdataenabled)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17128

___

### setDepth

▸ **setDepth**(`value`): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

The depth of this Game Object within the Scene.

The depth is also known as the 'z-index' in some environments, and allows you to change the rendering order
of Game Objects, without actually moving their position in the display list.

The default depth is zero. A Game Object with a higher depth
value will always render in front of one with a lower value.

Setting the depth will queue a depth sort event within the Scene.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | The depth of this Game Object. |

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[setDepth](Pawns_PawnSpawn.PawnSpawn.md#setdepth)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20276

___

### setDisplayOrigin

▸ **setDisplayOrigin**(`x?`, `y?`): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Sets the display origin of this Game Object.
The difference between this and setting the origin is that you can use pixel values for setting the display origin.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x?` | `number` | The horizontal display origin value. Default 0. |
| `y?` | `number` | The vertical display origin value. If not defined it will be set to the value of `x`. Default x. |

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[setDisplayOrigin](Pawns_PawnSpawn.PawnSpawn.md#setdisplayorigin)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20529

___

### setDisplaySize

▸ **setDisplaySize**(`width`, `height`): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Sets the display size of this Game Object.

Calling this will adjust the scale.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `width` | `number` | The width of this Game Object. |
| `height` | `number` | The height of this Game Object. |

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[setDisplaySize](Pawns_PawnSpawn.PawnSpawn.md#setdisplaysize)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20789

___

### setFlip

▸ **setFlip**(`x`, `y`): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Sets the horizontal and vertical flipped state of this Game Object.

A Game Object that is flipped will render inversed on the flipped axis.
Flipping always takes place from the middle of the texture and does not impact the scale value.
If this Game Object has a physics body, it will not change the body. This is a rendering toggle only.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `boolean` | The horizontal flipped state. `false` for no flip, or `true` to be flipped. |
| `y` | `boolean` | The horizontal flipped state. `false` for no flip, or `true` to be flipped. |

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[setFlip](Pawns_PawnSpawn.PawnSpawn.md#setflip)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20335

___

### setFlipX

▸ **setFlipX**(`value`): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Sets the horizontal flipped state of this Game Object.

A Game Object that is flipped horizontally will render inversed on the horizontal axis.
Flipping always takes place from the middle of the texture and does not impact the scale value.
If this Game Object has a physics body, it will not change the body. This is a rendering toggle only.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | The flipped state. `false` for no flip, or `true` to be flipped. |

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[setFlipX](Pawns_PawnSpawn.PawnSpawn.md#setflipx)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20318

___

### setFlipY

▸ **setFlipY**(`value`): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Sets the vertical flipped state of this Game Object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | The flipped state. `false` for no flip, or `true` to be flipped. |

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[setFlipY](Pawns_PawnSpawn.PawnSpawn.md#setflipy)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20324

___

### setFrame

▸ **setFrame**(`frame`, `updateSize?`, `updateOrigin?`): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Sets the frame this Game Object will use to render with.

The Frame has to belong to the current Texture being used.

It can be either a string or an index.

Calling `setFrame` will modify the `width` and `height` properties of your Game Object.
It will also change the `origin` if the Frame has a custom pivot point, as exported from packages like Texture Packer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `frame` | `string` \| `number` | The name or index of the frame within the Texture. |
| `updateSize?` | `boolean` | Should this call adjust the size of the Game Object? Default true. |
| `updateOrigin?` | `boolean` | Should this call adjust the origin of the Game Object? Default true. |

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[setFrame](Pawns_PawnSpawn.PawnSpawn.md#setframe)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20859

___

### setInteractive

▸ **setInteractive**(`hitArea?`, `callback?`, `dropZone?`): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Pass this Game Object to the Input Manager to enable it for Input.

Input works by using hit areas, these are nearly always geometric shapes, such as rectangles or circles, that act as the hit area
for the Game Object. However, you can provide your own hit area shape and callback, should you wish to handle some more advanced
input detection.

If no arguments are provided it will try and create a rectangle hit area based on the texture frame the Game Object is using. If
this isn't a texture-bound object, such as a Graphics or BitmapText object, this will fail, and you'll need to provide a specific
shape for it to use.

You can also provide an Input Configuration Object as the only argument to this method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hitArea?` | `any` | Either an input configuration object, or a geometric shape that defines the hit area for the Game Object. If not given it will try to create a Rectangle based on the texture frame. |
| `callback?` | `HitAreaCallback` | The callback that determines if the pointer is within the Hit Area shape or not. If you provide a shape you must also provide a callback. |
| `dropZone?` | `boolean` | Should this Game Object be treated as a drop zone target? Default false. |

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[setInteractive](Pawns_PawnSpawn.PawnSpawn.md#setinteractive)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17242

___

### setMask

▸ **setMask**(`mask`): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Sets the mask that this Game Object will use to render with.

The mask must have been previously created and can be either a GeometryMask or a BitmapMask.
Note: Bitmap Masks only work on WebGL. Geometry Masks work on both WebGL and Canvas.

If a mask is already set on this Game Object it will be immediately replaced.

Masks are positioned in global space and are not relative to the Game Object to which they
are applied. The reason for this is that multiple Game Objects can all share the same mask.

Masks have no impact on physics or input detection. They are purely a rendering component
that allows you to limit what is visible during the render pass.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mask` | `BitmapMask` \| `GeometryMask` | The mask this Game Object will use when rendering. |

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[setMask](Pawns_PawnSpawn.PawnSpawn.md#setmask)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20440

___

### setName

▸ **setName**(`value`): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Sets the `name` property of this Game Object and returns this Game Object for further chaining.
The `name` property is not populated by Phaser and is presented for your own use.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | The name to be given to this Game Object. |

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[setName](Pawns_PawnSpawn.PawnSpawn.md#setname)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17110

___

### setOrigin

▸ **setOrigin**(`x?`, `y?`): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Sets the origin of this Game Object.

The values are given in the range 0 to 1.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x?` | `number` | The horizontal origin value. Default 0.5. |
| `y?` | `number` | The vertical origin value. If not defined it will be set to the value of `x`. Default x. |

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[setOrigin](Pawns_PawnSpawn.PawnSpawn.md#setorigin)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20516

___

### setOriginFromFrame

▸ **setOriginFromFrame**(): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Sets the origin of this Game Object based on the Pivot values in its Frame.

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[setOriginFromFrame](Pawns_PawnSpawn.PawnSpawn.md#setoriginfromframe)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20521

___

### setPipeline

▸ **setPipeline**(`pipeline`, `pipelineData?`, `copyData?`): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Sets the main WebGL Pipeline of this Game Object.

Also sets the `pipelineData` property, if the parameter is given.

Both the pipeline and post pipelines share the same pipeline data object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pipeline` | `string` \| `WebGLPipeline` | Either the string-based name of the pipeline, or a pipeline instance to set. |
| `pipelineData?` | `object` | Optional pipeline data object that is _deep copied_ into the `pipelineData` property of this Game Object. |
| `copyData?` | `boolean` | Should the pipeline data object be _deep copied_ into the `pipelineData` property of this Game Object? If `false` it will be set by reference instead. Default true. |

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[setPipeline](Pawns_PawnSpawn.PawnSpawn.md#setpipeline)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20587

___

### setPipelineData

▸ **setPipelineData**(`key`, `value?`): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Adds an entry to the `pipelineData` object belonging to this Game Object.

If the 'key' already exists, its value is updated. If it doesn't exist, it is created.

If `value` is undefined, and `key` exists, `key` is removed from the data object.

Both the pipeline and post pipelines share the pipeline data object together.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key of the pipeline data to set, update, or delete. |
| `value?` | `any` | The value to be set with the key. If `undefined` then `key` will be deleted from the object. |

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[setPipelineData](Pawns_PawnSpawn.PawnSpawn.md#setpipelinedata)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20623

___

### setPosition

▸ **setPosition**(`x?`, `y?`, `z?`, `w?`): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Sets the position of this Game Object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x?` | `number` | The x position of this Game Object. Default 0. |
| `y?` | `number` | The y position of this Game Object. If not set it will use the `x` value. Default x. |
| `z?` | `number` | The z position of this Game Object. Default 0. |
| `w?` | `number` | The w position of this Game Object. Default 0. |

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[setPosition](Pawns_PawnSpawn.PawnSpawn.md#setposition)

#### Defined in

node_modules/phaser/types/phaser.d.ts:21033

___

### setPostPipeline

▸ **setPostPipeline**(`pipelines`, `pipelineData?`, `copyData?`): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Sets one, or more, Post Pipelines on this Game Object.

Post Pipelines are invoked after this Game Object has rendered to its target and
are commonly used for post-fx.

The post pipelines are appended to the `postPipelines` array belonging to this
Game Object. When the renderer processes this Game Object, it iterates through the post
pipelines in the order in which they appear in the array. If you are stacking together
multiple effects, be aware that the order is important.

If you call this method multiple times, the new pipelines will be appended to any existing
post pipelines already set. Use the `resetPostPipeline` method to clear them first, if required.

You can optionally also sets the `pipelineData` property, if the parameter is given.

Both the pipeline and post pipelines share the pipeline data object together.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pipelines` | `string` \| `Function` \| `string`[] \| `PostFXPipeline` \| `PostFXPipeline`[] \| `Function`[] | Either the string-based name of the pipeline, or a pipeline instance, or class, or an array of them. |
| `pipelineData?` | `object` | Optional pipeline data object that is _deep copied_ into the `pipelineData` property of this Game Object. |
| `copyData?` | `boolean` | Should the pipeline data object be _deep copied_ into the `pipelineData` property of this Game Object? If `false` it will be set by reference instead. Default true. |

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[setPostPipeline](Pawns_PawnSpawn.PawnSpawn.md#setpostpipeline)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20610

___

### setRandomPosition

▸ **setRandomPosition**(`x?`, `y?`, `width?`, `height?`): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Sets the position of this Game Object to be a random position within the confines of
the given area.

If no area is specified a random position between 0 x 0 and the game width x height is used instead.

The position does not factor in the size of this Game Object, meaning that only the origin is
guaranteed to be within the area.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x?` | `number` | The x position of the top-left of the random area. Default 0. |
| `y?` | `number` | The y position of the top-left of the random area. Default 0. |
| `width?` | `number` | The width of the random area. |
| `height?` | `number` | The height of the random area. |

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[setRandomPosition](Pawns_PawnSpawn.PawnSpawn.md#setrandomposition)

#### Defined in

node_modules/phaser/types/phaser.d.ts:21054

___

### setRotation

▸ **setRotation**(`radians?`): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Sets the rotation of this Game Object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `radians?` | `number` | The rotation of this Game Object, in radians. Default 0. |

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[setRotation](Pawns_PawnSpawn.PawnSpawn.md#setrotation)

#### Defined in

node_modules/phaser/types/phaser.d.ts:21060

___

### setScale

▸ **setScale**(`x`, `y?`): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Sets the scale of this Game Object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The horizontal scale of this Game Object. |
| `y?` | `number` | The vertical scale of this Game Object. If not set it will use the `x` value. Default x. |

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[setScale](Pawns_PawnSpawn.PawnSpawn.md#setscale)

#### Defined in

node_modules/phaser/types/phaser.d.ts:21073

___

### setScrollFactor

▸ **setScrollFactor**(`x`, `y?`): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Sets the scroll factor of this Game Object.

The scroll factor controls the influence of the movement of a Camera upon this Game Object.

When a camera scrolls it will change the location at which this Game Object is rendered on-screen.
It does not change the Game Objects actual position values.

A value of 1 means it will move exactly in sync with a camera.
A value of 0 means it will not move at all, even if the camera moves.
Other values control the degree to which the camera movement is mapped to this Game Object.

Please be aware that scroll factor values other than 1 are not taken in to consideration when
calculating physics collisions. Bodies always collide based on their world position, but changing
the scroll factor is a visual adjustment to where the textures are rendered, which can offset
them from physics bodies if not accounted for in your code.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The horizontal scroll factor of this Game Object. |
| `y?` | `number` | The vertical scroll factor of this Game Object. If not set it will use the `x` value. Default x. |

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[setScrollFactor](Pawns_PawnSpawn.PawnSpawn.md#setscrollfactor)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20715

___

### setSize

▸ **setSize**(`width`, `height`): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Sets the internal size of this Game Object, as used for frame or physics body creation.

This will not change the size that the Game Object is rendered in-game.
For that you need to either set the scale of the Game Object (`setScale`) or call the
`setDisplaySize` method, which is the same thing as changing the scale but allows you
to do so by giving pixel values.

If you have enabled this Game Object for input, changing the size will _not_ change the
size of the hit area. To do this you should adjust the `input.hitArea` object directly.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `width` | `number` | The width of this Game Object. |
| `height` | `number` | The height of this Game Object. |

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[setSize](Pawns_PawnSpawn.PawnSpawn.md#setsize)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20780

___

### setSizeToFrame

▸ **setSizeToFrame**(`frame`): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Sets the size of this Game Object to be that of the given Frame.

This will not change the size that the Game Object is rendered in-game.
For that you need to either set the scale of the Game Object (`setScale`) or call the
`setDisplaySize` method, which is the same thing as changing the scale but allows you
to do so by giving pixel values.

If you have enabled this Game Object for input, changing the size will _not_ change the
size of the hit area. To do this you should adjust the `input.hitArea` object directly.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `frame` | `Frame` | The frame to base the size of this Game Object on. |

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[setSizeToFrame](Pawns_PawnSpawn.PawnSpawn.md#setsizetoframe)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20765

___

### setState

▸ **setState**(`value`): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Sets the current state of this Game Object.

Phaser itself will never modify the State of a Game Object, although plugins may do so.

For example, a Game Object could change from a state of 'moving', to 'attacking', to 'dead'.
The state value should typically be an integer (ideally mapped to a constant
in your game code), but could also be a string. It is recommended to keep it light and simple.
If you need to store complex data about your Game Object, look at using the Data Component instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` \| `number` | The state of the Game Object. |

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[setState](Pawns_PawnSpawn.PawnSpawn.md#setstate)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17123

___

### setTexture

▸ **setTexture**(`key`, `frame?`): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Sets the texture and frame this Game Object will use to render with.

Textures are referenced by their string-based keys, as stored in the Texture Manager.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key of the texture to be used, as stored in the Texture Manager. |
| `frame?` | `string` \| `number` | The name or index of the frame within the Texture. |

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[setTexture](Pawns_PawnSpawn.PawnSpawn.md#settexture)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20844

___

### setTint

▸ **setTint**(`topLeft?`, `topRight?`, `bottomLeft?`, `bottomRight?`): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Sets an additive tint on this Game Object.

The tint works by taking the pixel color values from the Game Objects texture, and then
multiplying it by the color value of the tint. You can provide either one color value,
in which case the whole Game Object will be tinted in that color. Or you can provide a color
per corner. The colors are blended together across the extent of the Game Object.

To modify the tint color once set, either call this method again with new values or use the
`tint` property to set all colors at once. Or, use the properties `tintTopLeft`, `tintTopRight,
`tintBottomLeft` and `tintBottomRight` to set the corner color values independently.

To remove a tint call `clearTint`.

To swap this from being an additive tint to a fill based tint set the property `tintFill` to `true`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `topLeft?` | `number` | The tint being applied to the top-left of the Game Object. If no other values are given this value is applied evenly, tinting the whole Game Object. Default 0xffffff. |
| `topRight?` | `number` | The tint being applied to the top-right of the Game Object. |
| `bottomLeft?` | `number` | The tint being applied to the bottom-left of the Game Object. |
| `bottomRight?` | `number` | The tint being applied to the bottom-right of the Game Object. |

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[setTint](Pawns_PawnSpawn.PawnSpawn.md#settint)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20925

___

### setTintFill

▸ **setTintFill**(`topLeft?`, `topRight?`, `bottomLeft?`, `bottomRight?`): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Sets a fill-based tint on this Game Object.

Unlike an additive tint, a fill-tint literally replaces the pixel colors from the texture
with those in the tint. You can use this for effects such as making a player flash 'white'
if hit by something. You can provide either one color value, in which case the whole
Game Object will be rendered in that color. Or you can provide a color per corner. The colors
are blended together across the extent of the Game Object.

To modify the tint color once set, either call this method again with new values or use the
`tint` property to set all colors at once. Or, use the properties `tintTopLeft`, `tintTopRight,
`tintBottomLeft` and `tintBottomRight` to set the corner color values independently.

To remove a tint call `clearTint`.

To swap this from being a fill-tint to an additive tint set the property `tintFill` to `false`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `topLeft?` | `number` | The tint being applied to the top-left of the Game Object. If not other values are given this value is applied evenly, tinting the whole Game Object. Default 0xffffff. |
| `topRight?` | `number` | The tint being applied to the top-right of the Game Object. |
| `bottomLeft?` | `number` | The tint being applied to the bottom-left of the Game Object. |
| `bottomRight?` | `number` | The tint being applied to the bottom-right of the Game Object. |

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[setTintFill](Pawns_PawnSpawn.PawnSpawn.md#settintfill)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20948

___

### setVisible

▸ **setVisible**(`value`): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Sets the visibility of this Game Object.

An invisible Game Object will skip rendering, but will still process update logic.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | The visible state of the Game Object. |

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[setVisible](Pawns_PawnSpawn.PawnSpawn.md#setvisible)

#### Defined in

node_modules/phaser/types/phaser.d.ts:21151

___

### setW

▸ **setW**(`value?`): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Sets the w position of this Game Object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value?` | `number` | The w position of this Game Object. Default 0. |

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[setW](Pawns_PawnSpawn.PawnSpawn.md#setw)

#### Defined in

node_modules/phaser/types/phaser.d.ts:21100

___

### setX

▸ **setX**(`value?`): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Sets the x position of this Game Object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value?` | `number` | The x position of this Game Object. Default 0. |

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[setX](Pawns_PawnSpawn.PawnSpawn.md#setx)

#### Defined in

node_modules/phaser/types/phaser.d.ts:21079

___

### setY

▸ **setY**(`value?`): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Sets the y position of this Game Object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value?` | `number` | The y position of this Game Object. Default 0. |

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[setY](Pawns_PawnSpawn.PawnSpawn.md#sety)

#### Defined in

node_modules/phaser/types/phaser.d.ts:21085

___

### setZ

▸ **setZ**(`value?`): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Sets the z position of this Game Object.

Note: The z position does not control the rendering order of 2D Game Objects. Use
Phaser.GameObjects.Components.Depth#setDepth instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value?` | `number` | The z position of this Game Object. Default 0. |

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[setZ](Pawns_PawnSpawn.PawnSpawn.md#setz)

#### Defined in

node_modules/phaser/types/phaser.d.ts:21094

___

### shutdown

▸ **shutdown**(): `void`

Removes all listeners.

#### Returns

`void`

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[shutdown](Pawns_PawnSpawn.PawnSpawn.md#shutdown)

#### Defined in

node_modules/phaser/types/phaser.d.ts:9543

___

### toJSON

▸ **toJSON**(): `JSONGameObject`

Returns a JSON representation of the Game Object.

#### Returns

`JSONGameObject`

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[toJSON](Pawns_PawnSpawn.PawnSpawn.md#tojson)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17306

___

### toggleData

▸ **toggleData**(`key`): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Toggle a boolean value for the given key within this Game Objects Data Manager. If the key doesn't already exist in the Data Manager then it is toggled from false.

If the Game Object has not been enabled for data (via `setDataEnabled`) then it will be enabled
before setting the value.

If the key doesn't already exist in the Data Manager then it is created.

When the value is first set, a `setdata` event is emitted from this Game Object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` \| `object` | The key to toggle the value for. |

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[toggleData](Pawns_PawnSpawn.PawnSpawn.md#toggledata)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17198

___

### toggleFlipX

▸ **toggleFlipX**(): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Toggles the horizontal flipped state of this Game Object.

A Game Object that is flipped horizontally will render inversed on the horizontal axis.
Flipping always takes place from the middle of the texture and does not impact the scale value.
If this Game Object has a physics body, it will not change the body. This is a rendering toggle only.

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[toggleFlipX](Pawns_PawnSpawn.PawnSpawn.md#toggleflipx)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20303

___

### toggleFlipY

▸ **toggleFlipY**(): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Toggles the vertical flipped state of this Game Object.

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[toggleFlipY](Pawns_PawnSpawn.PawnSpawn.md#toggleflipy)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20308

___

### update

▸ **update**(...`args`): `void`

To be overridden by custom GameObjects. Allows base objects to be used in a Pool.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...args` | `any`[] | args |

#### Returns

`void`

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[update](Pawns_PawnSpawn.PawnSpawn.md#update)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17301

___

### updateDisplayOrigin

▸ **updateDisplayOrigin**(): [`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

Updates the Display Origin cached values internally stored on this Game Object.
You don't usually call this directly, but it is exposed for edge-cases where you may.

#### Returns

[`AISpawn`](Pawns_AIs_AISpawn.AISpawn.md)

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[updateDisplayOrigin](Pawns_PawnSpawn.PawnSpawn.md#updatedisplayorigin)

#### Defined in

node_modules/phaser/types/phaser.d.ts:20535

___

### willRender

▸ **willRender**(`camera`): `boolean`

Compares the renderMask with the renderFlags to see if this Game Object will render or not.
Also checks the Game Object against the given Cameras exclusion list.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `camera` | `Camera` | The Camera to check against this Game Object. |

#### Returns

`boolean`

#### Inherited from

[PawnSpawn](Pawns_PawnSpawn.PawnSpawn.md).[willRender](Pawns_PawnSpawn.PawnSpawn.md#willrender)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17313
