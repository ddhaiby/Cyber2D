[cyber2d](../README.md) / [Modules](../modules.md) / [Platforms/MovingPlatform](../modules/Platforms_MovingPlatform.md) / MovingPlatform

# Class: MovingPlatform

[Platforms/MovingPlatform](../modules/Platforms_MovingPlatform.md).MovingPlatform

## Hierarchy

- `PathFollower`

  ↳ **`MovingPlatform`**

## Table of contents

### Constructors

- [constructor](Platforms_MovingPlatform.MovingPlatform.md#constructor)

### Properties

- [activateOnStart](Platforms_MovingPlatform.MovingPlatform.md#activateonstart)
- [activated](Platforms_MovingPlatform.MovingPlatform.md#activated)
- [active](Platforms_MovingPlatform.MovingPlatform.md#active)
- [alpha](Platforms_MovingPlatform.MovingPlatform.md#alpha)
- [alphaBottomLeft](Platforms_MovingPlatform.MovingPlatform.md#alphabottomleft)
- [alphaBottomRight](Platforms_MovingPlatform.MovingPlatform.md#alphabottomright)
- [alphaTopLeft](Platforms_MovingPlatform.MovingPlatform.md#alphatopleft)
- [alphaTopRight](Platforms_MovingPlatform.MovingPlatform.md#alphatopright)
- [angle](Platforms_MovingPlatform.MovingPlatform.md#angle)
- [anims](Platforms_MovingPlatform.MovingPlatform.md#anims)
- [blendMode](Platforms_MovingPlatform.MovingPlatform.md#blendmode)
- [body](Platforms_MovingPlatform.MovingPlatform.md#body)
- [cameraFilter](Platforms_MovingPlatform.MovingPlatform.md#camerafilter)
- [collidedObjects](Platforms_MovingPlatform.MovingPlatform.md#collidedobjects)
- [data](Platforms_MovingPlatform.MovingPlatform.md#data)
- [defaultPipeline](Platforms_MovingPlatform.MovingPlatform.md#defaultpipeline)
- [depth](Platforms_MovingPlatform.MovingPlatform.md#depth)
- [displayHeight](Platforms_MovingPlatform.MovingPlatform.md#displayheight)
- [displayList](Platforms_MovingPlatform.MovingPlatform.md#displaylist)
- [displayOriginX](Platforms_MovingPlatform.MovingPlatform.md#displayoriginx)
- [displayOriginY](Platforms_MovingPlatform.MovingPlatform.md#displayoriginy)
- [displayWidth](Platforms_MovingPlatform.MovingPlatform.md#displaywidth)
- [flipX](Platforms_MovingPlatform.MovingPlatform.md#flipx)
- [flipY](Platforms_MovingPlatform.MovingPlatform.md#flipy)
- [frame](Platforms_MovingPlatform.MovingPlatform.md#frame)
- [hasPostPipeline](Platforms_MovingPlatform.MovingPlatform.md#haspostpipeline)
- [height](Platforms_MovingPlatform.MovingPlatform.md#height)
- [ignoreDestroy](Platforms_MovingPlatform.MovingPlatform.md#ignoredestroy)
- [input](Platforms_MovingPlatform.MovingPlatform.md#input)
- [isCropped](Platforms_MovingPlatform.MovingPlatform.md#iscropped)
- [isTinted](Platforms_MovingPlatform.MovingPlatform.md#istinted)
- [mask](Platforms_MovingPlatform.MovingPlatform.md#mask)
- [name](Platforms_MovingPlatform.MovingPlatform.md#name)
- [oneWay](Platforms_MovingPlatform.MovingPlatform.md#oneway)
- [originX](Platforms_MovingPlatform.MovingPlatform.md#originx)
- [originY](Platforms_MovingPlatform.MovingPlatform.md#originy)
- [parentContainer](Platforms_MovingPlatform.MovingPlatform.md#parentcontainer)
- [path](Platforms_MovingPlatform.MovingPlatform.md#path)
- [pathConfig](Platforms_MovingPlatform.MovingPlatform.md#pathconfig)
- [pathDelta](Platforms_MovingPlatform.MovingPlatform.md#pathdelta)
- [pathEndX](Platforms_MovingPlatform.MovingPlatform.md#pathendx)
- [pathEndY](Platforms_MovingPlatform.MovingPlatform.md#pathendy)
- [pathOffset](Platforms_MovingPlatform.MovingPlatform.md#pathoffset)
- [pathRotationOffset](Platforms_MovingPlatform.MovingPlatform.md#pathrotationoffset)
- [pathStartX](Platforms_MovingPlatform.MovingPlatform.md#pathstartx)
- [pathStartY](Platforms_MovingPlatform.MovingPlatform.md#pathstarty)
- [pathTween](Platforms_MovingPlatform.MovingPlatform.md#pathtween)
- [pathVector](Platforms_MovingPlatform.MovingPlatform.md#pathvector)
- [pipeline](Platforms_MovingPlatform.MovingPlatform.md#pipeline)
- [pipelineData](Platforms_MovingPlatform.MovingPlatform.md#pipelinedata)
- [postPipelines](Platforms_MovingPlatform.MovingPlatform.md#postpipelines)
- [renderFlags](Platforms_MovingPlatform.MovingPlatform.md#renderflags)
- [rotateToPath](Platforms_MovingPlatform.MovingPlatform.md#rotatetopath)
- [rotation](Platforms_MovingPlatform.MovingPlatform.md#rotation)
- [scale](Platforms_MovingPlatform.MovingPlatform.md#scale)
- [scaleX](Platforms_MovingPlatform.MovingPlatform.md#scalex)
- [scaleY](Platforms_MovingPlatform.MovingPlatform.md#scaley)
- [scene](Platforms_MovingPlatform.MovingPlatform.md#scene)
- [scrollFactorX](Platforms_MovingPlatform.MovingPlatform.md#scrollfactorx)
- [scrollFactorY](Platforms_MovingPlatform.MovingPlatform.md#scrollfactory)
- [slowOnEdges](Platforms_MovingPlatform.MovingPlatform.md#slowonedges)
- [state](Platforms_MovingPlatform.MovingPlatform.md#state)
- [tabIndex](Platforms_MovingPlatform.MovingPlatform.md#tabindex)
- [texture](Platforms_MovingPlatform.MovingPlatform.md#texture)
- [time](Platforms_MovingPlatform.MovingPlatform.md#time)
- [tint](Platforms_MovingPlatform.MovingPlatform.md#tint)
- [tintBottomLeft](Platforms_MovingPlatform.MovingPlatform.md#tintbottomleft)
- [tintBottomRight](Platforms_MovingPlatform.MovingPlatform.md#tintbottomright)
- [tintFill](Platforms_MovingPlatform.MovingPlatform.md#tintfill)
- [tintTopLeft](Platforms_MovingPlatform.MovingPlatform.md#tinttopleft)
- [tintTopRight](Platforms_MovingPlatform.MovingPlatform.md#tinttopright)
- [type](Platforms_MovingPlatform.MovingPlatform.md#type)
- [visible](Platforms_MovingPlatform.MovingPlatform.md#visible)
- [w](Platforms_MovingPlatform.MovingPlatform.md#w)
- [width](Platforms_MovingPlatform.MovingPlatform.md#width)
- [x](Platforms_MovingPlatform.MovingPlatform.md#x)
- [y](Platforms_MovingPlatform.MovingPlatform.md#y)
- [z](Platforms_MovingPlatform.MovingPlatform.md#z)
- [RENDER\_MASK](Platforms_MovingPlatform.MovingPlatform.md#render_mask)

### Methods

- [activate](Platforms_MovingPlatform.MovingPlatform.md#activate)
- [addCollidedObject](Platforms_MovingPlatform.MovingPlatform.md#addcollidedobject)
- [addListener](Platforms_MovingPlatform.MovingPlatform.md#addlistener)
- [addToDisplayList](Platforms_MovingPlatform.MovingPlatform.md#addtodisplaylist)
- [addToUpdateList](Platforms_MovingPlatform.MovingPlatform.md#addtoupdatelist)
- [addedToScene](Platforms_MovingPlatform.MovingPlatform.md#addedtoscene)
- [chain](Platforms_MovingPlatform.MovingPlatform.md#chain)
- [clearAlpha](Platforms_MovingPlatform.MovingPlatform.md#clearalpha)
- [clearMask](Platforms_MovingPlatform.MovingPlatform.md#clearmask)
- [clearTint](Platforms_MovingPlatform.MovingPlatform.md#cleartint)
- [copyPosition](Platforms_MovingPlatform.MovingPlatform.md#copyposition)
- [createBitmapMask](Platforms_MovingPlatform.MovingPlatform.md#createbitmapmask)
- [createGeometryMask](Platforms_MovingPlatform.MovingPlatform.md#creategeometrymask)
- [destroy](Platforms_MovingPlatform.MovingPlatform.md#destroy)
- [disableInteractive](Platforms_MovingPlatform.MovingPlatform.md#disableinteractive)
- [emit](Platforms_MovingPlatform.MovingPlatform.md#emit)
- [eventNames](Platforms_MovingPlatform.MovingPlatform.md#eventnames)
- [getBottomCenter](Platforms_MovingPlatform.MovingPlatform.md#getbottomcenter)
- [getBottomLeft](Platforms_MovingPlatform.MovingPlatform.md#getbottomleft)
- [getBottomRight](Platforms_MovingPlatform.MovingPlatform.md#getbottomright)
- [getBounds](Platforms_MovingPlatform.MovingPlatform.md#getbounds)
- [getCenter](Platforms_MovingPlatform.MovingPlatform.md#getcenter)
- [getData](Platforms_MovingPlatform.MovingPlatform.md#getdata)
- [getIndexList](Platforms_MovingPlatform.MovingPlatform.md#getindexlist)
- [getLeftCenter](Platforms_MovingPlatform.MovingPlatform.md#getleftcenter)
- [getLocalPoint](Platforms_MovingPlatform.MovingPlatform.md#getlocalpoint)
- [getLocalTransformMatrix](Platforms_MovingPlatform.MovingPlatform.md#getlocaltransformmatrix)
- [getParentRotation](Platforms_MovingPlatform.MovingPlatform.md#getparentrotation)
- [getPipelineName](Platforms_MovingPlatform.MovingPlatform.md#getpipelinename)
- [getPostPipeline](Platforms_MovingPlatform.MovingPlatform.md#getpostpipeline)
- [getRightCenter](Platforms_MovingPlatform.MovingPlatform.md#getrightcenter)
- [getTopCenter](Platforms_MovingPlatform.MovingPlatform.md#gettopcenter)
- [getTopLeft](Platforms_MovingPlatform.MovingPlatform.md#gettopleft)
- [getTopRight](Platforms_MovingPlatform.MovingPlatform.md#gettopright)
- [getWorldTransformMatrix](Platforms_MovingPlatform.MovingPlatform.md#getworldtransformmatrix)
- [incData](Platforms_MovingPlatform.MovingPlatform.md#incdata)
- [init](Platforms_MovingPlatform.MovingPlatform.md#init)
- [initPipeline](Platforms_MovingPlatform.MovingPlatform.md#initpipeline)
- [isFollowing](Platforms_MovingPlatform.MovingPlatform.md#isfollowing)
- [listenerCount](Platforms_MovingPlatform.MovingPlatform.md#listenercount)
- [listeners](Platforms_MovingPlatform.MovingPlatform.md#listeners)
- [off](Platforms_MovingPlatform.MovingPlatform.md#off)
- [on](Platforms_MovingPlatform.MovingPlatform.md#on)
- [once](Platforms_MovingPlatform.MovingPlatform.md#once)
- [pathUpdate](Platforms_MovingPlatform.MovingPlatform.md#pathupdate)
- [pauseFollow](Platforms_MovingPlatform.MovingPlatform.md#pausefollow)
- [play](Platforms_MovingPlatform.MovingPlatform.md#play)
- [playAfterDelay](Platforms_MovingPlatform.MovingPlatform.md#playafterdelay)
- [playAfterRepeat](Platforms_MovingPlatform.MovingPlatform.md#playafterrepeat)
- [playReverse](Platforms_MovingPlatform.MovingPlatform.md#playreverse)
- [preUpdate](Platforms_MovingPlatform.MovingPlatform.md#preupdate)
- [removeAllListeners](Platforms_MovingPlatform.MovingPlatform.md#removealllisteners)
- [removeFromDisplayList](Platforms_MovingPlatform.MovingPlatform.md#removefromdisplaylist)
- [removeFromUpdateList](Platforms_MovingPlatform.MovingPlatform.md#removefromupdatelist)
- [removeInteractive](Platforms_MovingPlatform.MovingPlatform.md#removeinteractive)
- [removeListener](Platforms_MovingPlatform.MovingPlatform.md#removelistener)
- [removePostPipeline](Platforms_MovingPlatform.MovingPlatform.md#removepostpipeline)
- [removedFromScene](Platforms_MovingPlatform.MovingPlatform.md#removedfromscene)
- [reset](Platforms_MovingPlatform.MovingPlatform.md#reset)
- [resetFlip](Platforms_MovingPlatform.MovingPlatform.md#resetflip)
- [resetPipeline](Platforms_MovingPlatform.MovingPlatform.md#resetpipeline)
- [resetPostPipeline](Platforms_MovingPlatform.MovingPlatform.md#resetpostpipeline)
- [resumeFollow](Platforms_MovingPlatform.MovingPlatform.md#resumefollow)
- [setActive](Platforms_MovingPlatform.MovingPlatform.md#setactive)
- [setAlpha](Platforms_MovingPlatform.MovingPlatform.md#setalpha)
- [setAngle](Platforms_MovingPlatform.MovingPlatform.md#setangle)
- [setBlendMode](Platforms_MovingPlatform.MovingPlatform.md#setblendmode)
- [setCrop](Platforms_MovingPlatform.MovingPlatform.md#setcrop)
- [setData](Platforms_MovingPlatform.MovingPlatform.md#setdata)
- [setDataEnabled](Platforms_MovingPlatform.MovingPlatform.md#setdataenabled)
- [setDepth](Platforms_MovingPlatform.MovingPlatform.md#setdepth)
- [setDisplayOrigin](Platforms_MovingPlatform.MovingPlatform.md#setdisplayorigin)
- [setDisplaySize](Platforms_MovingPlatform.MovingPlatform.md#setdisplaysize)
- [setFlip](Platforms_MovingPlatform.MovingPlatform.md#setflip)
- [setFlipX](Platforms_MovingPlatform.MovingPlatform.md#setflipx)
- [setFlipY](Platforms_MovingPlatform.MovingPlatform.md#setflipy)
- [setFrame](Platforms_MovingPlatform.MovingPlatform.md#setframe)
- [setInteractive](Platforms_MovingPlatform.MovingPlatform.md#setinteractive)
- [setMask](Platforms_MovingPlatform.MovingPlatform.md#setmask)
- [setName](Platforms_MovingPlatform.MovingPlatform.md#setname)
- [setOrigin](Platforms_MovingPlatform.MovingPlatform.md#setorigin)
- [setOriginFromFrame](Platforms_MovingPlatform.MovingPlatform.md#setoriginfromframe)
- [setPath](Platforms_MovingPlatform.MovingPlatform.md#setpath)
- [setPipeline](Platforms_MovingPlatform.MovingPlatform.md#setpipeline)
- [setPipelineData](Platforms_MovingPlatform.MovingPlatform.md#setpipelinedata)
- [setPosition](Platforms_MovingPlatform.MovingPlatform.md#setposition)
- [setPostPipeline](Platforms_MovingPlatform.MovingPlatform.md#setpostpipeline)
- [setRandomPosition](Platforms_MovingPlatform.MovingPlatform.md#setrandomposition)
- [setRotateToPath](Platforms_MovingPlatform.MovingPlatform.md#setrotatetopath)
- [setRotation](Platforms_MovingPlatform.MovingPlatform.md#setrotation)
- [setScale](Platforms_MovingPlatform.MovingPlatform.md#setscale)
- [setScrollFactor](Platforms_MovingPlatform.MovingPlatform.md#setscrollfactor)
- [setSize](Platforms_MovingPlatform.MovingPlatform.md#setsize)
- [setSizeToFrame](Platforms_MovingPlatform.MovingPlatform.md#setsizetoframe)
- [setState](Platforms_MovingPlatform.MovingPlatform.md#setstate)
- [setTexture](Platforms_MovingPlatform.MovingPlatform.md#settexture)
- [setTint](Platforms_MovingPlatform.MovingPlatform.md#settint)
- [setTintFill](Platforms_MovingPlatform.MovingPlatform.md#settintfill)
- [setVisible](Platforms_MovingPlatform.MovingPlatform.md#setvisible)
- [setW](Platforms_MovingPlatform.MovingPlatform.md#setw)
- [setX](Platforms_MovingPlatform.MovingPlatform.md#setx)
- [setY](Platforms_MovingPlatform.MovingPlatform.md#sety)
- [setZ](Platforms_MovingPlatform.MovingPlatform.md#setz)
- [shutdown](Platforms_MovingPlatform.MovingPlatform.md#shutdown)
- [startFollow](Platforms_MovingPlatform.MovingPlatform.md#startfollow)
- [startFollowPath](Platforms_MovingPlatform.MovingPlatform.md#startfollowpath)
- [stop](Platforms_MovingPlatform.MovingPlatform.md#stop)
- [stopAfterDelay](Platforms_MovingPlatform.MovingPlatform.md#stopafterdelay)
- [stopAfterRepeat](Platforms_MovingPlatform.MovingPlatform.md#stopafterrepeat)
- [stopFollow](Platforms_MovingPlatform.MovingPlatform.md#stopfollow)
- [stopOnFrame](Platforms_MovingPlatform.MovingPlatform.md#stoponframe)
- [toJSON](Platforms_MovingPlatform.MovingPlatform.md#tojson)
- [toggleData](Platforms_MovingPlatform.MovingPlatform.md#toggledata)
- [toggleFlipX](Platforms_MovingPlatform.MovingPlatform.md#toggleflipx)
- [toggleFlipY](Platforms_MovingPlatform.MovingPlatform.md#toggleflipy)
- [update](Platforms_MovingPlatform.MovingPlatform.md#update)
- [updateDisplayOrigin](Platforms_MovingPlatform.MovingPlatform.md#updatedisplayorigin)
- [willRender](Platforms_MovingPlatform.MovingPlatform.md#willrender)

## Constructors

### constructor

• **new MovingPlatform**(`scene`, `x`, `y`, `texture`, `frame?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | `Scene` |
| `x` | `number` |
| `y` | `number` |
| `texture` | `string` \| `Texture` |
| `frame?` | `string` \| `number` |

#### Overrides

Phaser.GameObjects.PathFollower.constructor

#### Defined in

[src/Platforms/MovingPlatform.ts:29](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Platforms/MovingPlatform.ts#L29)

## Properties

### activateOnStart

• `Private` **activateOnStart**: `boolean` = `true`

Whether this platform is activated in its constructor

#### Defined in

[src/Platforms/MovingPlatform.ts:15](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Platforms/MovingPlatform.ts#L15)

___

### activated

• `Private` **activated**: `boolean` = `false`

Whether the platform is activated

#### Defined in

[src/Platforms/MovingPlatform.ts:24](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Platforms/MovingPlatform.ts#L24)

___

### active

• **active**: `boolean`

The active state of this Game Object.
A Game Object with an active state of `true` is processed by the Scenes UpdateList, if added to it.
An active object is one which is having its logic and internal systems updated.

#### Inherited from

Phaser.GameObjects.PathFollower.active

#### Defined in

node_modules/phaser/types/phaser.d.ts:17050

___

### alpha

• **alpha**: `number`

The alpha value of the Game Object.

This is a global value, impacting the entire Game Object, not just a region of it.

#### Inherited from

Phaser.GameObjects.PathFollower.alpha

#### Defined in

node_modules/phaser/types/phaser.d.ts:25293

___

### alphaBottomLeft

• **alphaBottomLeft**: `number`

The alpha value starting from the bottom-left of the Game Object.
This value is interpolated from the corner to the center of the Game Object.

#### Inherited from

Phaser.GameObjects.PathFollower.alphaBottomLeft

#### Defined in

node_modules/phaser/types/phaser.d.ts:25311

___

### alphaBottomRight

• **alphaBottomRight**: `number`

The alpha value starting from the bottom-right of the Game Object.
This value is interpolated from the corner to the center of the Game Object.

#### Inherited from

Phaser.GameObjects.PathFollower.alphaBottomRight

#### Defined in

node_modules/phaser/types/phaser.d.ts:25317

___

### alphaTopLeft

• **alphaTopLeft**: `number`

The alpha value starting from the top-left of the Game Object.
This value is interpolated from the corner to the center of the Game Object.

#### Inherited from

Phaser.GameObjects.PathFollower.alphaTopLeft

#### Defined in

node_modules/phaser/types/phaser.d.ts:25299

___

### alphaTopRight

• **alphaTopRight**: `number`

The alpha value starting from the top-right of the Game Object.
This value is interpolated from the corner to the center of the Game Object.

#### Inherited from

Phaser.GameObjects.PathFollower.alphaTopRight

#### Defined in

node_modules/phaser/types/phaser.d.ts:25305

___

### angle

• **angle**: `number`

The angle of this Game Object as expressed in degrees.

Phaser uses a right-hand clockwise rotation system, where 0 is right, 90 is down, 180/-180 is left
and -90 is up.

If you prefer to work in radians, see the `rotation` property instead.

#### Inherited from

Phaser.GameObjects.PathFollower.angle

#### Defined in

node_modules/phaser/types/phaser.d.ts:26129

___

### anims

• **anims**: `AnimationState`

The Animation State component of this Sprite.

This component provides features to apply animations to this Sprite.
It is responsible for playing, loading, queuing animations for later playback,
mixing between animations and setting the current animation frame to this Sprite.

#### Inherited from

Phaser.GameObjects.PathFollower.anims

#### Defined in

node_modules/phaser/types/phaser.d.ts:39252

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

Phaser.GameObjects.PathFollower.blendMode

#### Defined in

node_modules/phaser/types/phaser.d.ts:25340

___

### body

• **body**: `Body` \| `StaticBody` \| `BodyType`

If this Game Object is enabled for Arcade or Matter Physics then this property will contain a reference to a Physics Body.

#### Inherited from

Phaser.GameObjects.PathFollower.body

#### Defined in

node_modules/phaser/types/phaser.d.ts:17088

___

### cameraFilter

• **cameraFilter**: `number`

A bitmask that controls if this Game Object is drawn by a Camera or not.
Not usually set directly, instead call `Camera.ignore`, however you can
set this property directly using the Camera.id property:

#### Inherited from

Phaser.GameObjects.PathFollower.cameraFilter

#### Defined in

node_modules/phaser/types/phaser.d.ts:17077

___

### collidedObjects

• **collidedObjects**: `Map`<`string`, [`Pawn`](Pawns_Pawn.Pawn.md)\>

The list of pawns on this platform

#### Defined in

[src/Platforms/MovingPlatform.ts:27](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Platforms/MovingPlatform.ts#L27)

___

### data

• **data**: `DataManager`

A Data Manager.
It allows you to store, query and get key/value paired information specific to this Game Object.
`null` by default. Automatically created if you use `getData` or `setData` or `setDataEnabled`.

#### Inherited from

Phaser.GameObjects.PathFollower.data

#### Defined in

node_modules/phaser/types/phaser.d.ts:17063

___

### defaultPipeline

• **defaultPipeline**: `WebGLPipeline`

The initial WebGL pipeline of this Game Object.

If you call `resetPipeline` on this Game Object, the pipeline is reset to this default.

#### Inherited from

Phaser.GameObjects.PathFollower.defaultPipeline

#### Defined in

node_modules/phaser/types/phaser.d.ts:25657

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

Phaser.GameObjects.PathFollower.depth

#### Defined in

node_modules/phaser/types/phaser.d.ts:25377

___

### displayHeight

• **displayHeight**: `number`

The displayed height of this Game Object.

This value takes into account the scale factor.

Setting this value will adjust the Game Object's scale property.

#### Inherited from

Phaser.GameObjects.PathFollower.displayHeight

#### Defined in

node_modules/phaser/types/phaser.d.ts:25866

___

### displayList

• **displayList**: `DisplayList` \| `Layer`

Holds a reference to the Display List that contains this Game Object.

This is set automatically when this Game Object is added to a Scene or Layer.

You should treat this property as being read-only.

#### Inherited from

Phaser.GameObjects.PathFollower.displayList

#### Defined in

node_modules/phaser/types/phaser.d.ts:17014

___

### displayOriginX

• **displayOriginX**: `number`

The horizontal display origin of this Game Object.
The origin is a normalized value between 0 and 1.
The displayOrigin is a pixel value, based on the size of the Game Object combined with the origin.

#### Inherited from

Phaser.GameObjects.PathFollower.displayOriginX

#### Defined in

node_modules/phaser/types/phaser.d.ts:25615

___

### displayOriginY

• **displayOriginY**: `number`

The vertical display origin of this Game Object.
The origin is a normalized value between 0 and 1.
The displayOrigin is a pixel value, based on the size of the Game Object combined with the origin.

#### Inherited from

Phaser.GameObjects.PathFollower.displayOriginY

#### Defined in

node_modules/phaser/types/phaser.d.ts:25622

___

### displayWidth

• **displayWidth**: `number`

The displayed width of this Game Object.

This value takes into account the scale factor.

Setting this value will adjust the Game Object's scale property.

#### Inherited from

Phaser.GameObjects.PathFollower.displayWidth

#### Defined in

node_modules/phaser/types/phaser.d.ts:25857

___

### flipX

• **flipX**: `boolean`

The horizontally flipped state of the Game Object.

A Game Object that is flipped horizontally will render inversed on the horizontal axis.
Flipping always takes place from the middle of the texture and does not impact the scale value.
If this Game Object has a physics body, it will not change the body. This is a rendering toggle only.

#### Inherited from

Phaser.GameObjects.PathFollower.flipX

#### Defined in

node_modules/phaser/types/phaser.d.ts:25400

___

### flipY

• **flipY**: `boolean`

The vertically flipped state of the Game Object.

A Game Object that is flipped vertically will render inversed on the vertical axis (i.e. upside down)
Flipping always takes place from the middle of the texture and does not impact the scale value.
If this Game Object has a physics body, it will not change the body. This is a rendering toggle only.

#### Inherited from

Phaser.GameObjects.PathFollower.flipY

#### Defined in

node_modules/phaser/types/phaser.d.ts:25409

___

### frame

• **frame**: `Frame`

The Texture Frame this Game Object is using to render with.

#### Inherited from

Phaser.GameObjects.PathFollower.frame

#### Defined in

node_modules/phaser/types/phaser.d.ts:25914

___

### hasPostPipeline

• **hasPostPipeline**: `boolean`

Does this Game Object have any Post Pipelines set?

#### Inherited from

Phaser.GameObjects.PathFollower.hasPostPipeline

#### Defined in

node_modules/phaser/types/phaser.d.ts:25667

___

### height

• **height**: `number`

The native (un-scaled) height of this Game Object.

Changing this value will not change the size that the Game Object is rendered in-game.
For that you need to either set the scale of the Game Object (`setScale`) or use
the `displayHeight` property.

#### Inherited from

Phaser.GameObjects.PathFollower.height

#### Defined in

node_modules/phaser/types/phaser.d.ts:25848

___

### ignoreDestroy

• **ignoreDestroy**: `boolean`

This Game Object will ignore all calls made to its destroy method if this flag is set to `true`.
This includes calls that may come from a Group, Container or the Scene itself.
While it allows you to persist a Game Object across Scenes, please understand you are entirely
responsible for managing references to and from this Game Object.

#### Inherited from

Phaser.GameObjects.PathFollower.ignoreDestroy

#### Defined in

node_modules/phaser/types/phaser.d.ts:17096

___

### input

• **input**: `InteractiveObject`

If this Game Object is enabled for input then this property will contain an InteractiveObject instance.
Not usually set directly. Instead call `GameObject.setInteractive()`.

#### Inherited from

Phaser.GameObjects.PathFollower.input

#### Defined in

node_modules/phaser/types/phaser.d.ts:17083

___

### isCropped

• **isCropped**: `boolean`

A boolean flag indicating if this Game Object is being cropped or not.
You can toggle this at any time after `setCrop` has been called, to turn cropping on or off.
Equally, calling `setCrop` with no arguments will reset the crop and disable it.

#### Inherited from

Phaser.GameObjects.PathFollower.isCropped

#### Defined in

node_modules/phaser/types/phaser.d.ts:25921

___

### isTinted

• `Readonly` **isTinted**: `boolean`

Does this Game Object have a tint applied?

It checks to see if the 4 tint properties are set to the value 0xffffff
and that the `tintFill` property is `false`. This indicates that a Game Object isn't tinted.

#### Inherited from

Phaser.GameObjects.PathFollower.isTinted

#### Defined in

node_modules/phaser/types/phaser.d.ts:26077

___

### mask

• **mask**: `BitmapMask` \| `GeometryMask`

The Mask this Game Object is using during render.

#### Inherited from

Phaser.GameObjects.PathFollower.mask

#### Defined in

node_modules/phaser/types/phaser.d.ts:25538

___

### name

• **name**: `string`

The name of this Game Object.
Empty by default and never populated by Phaser, this is left for developers to use.

#### Inherited from

Phaser.GameObjects.PathFollower.name

#### Defined in

node_modules/phaser/types/phaser.d.ts:17043

___

### oneWay

• `Private` **oneWay**: `boolean` = `false`

If true, this platform will stop moving once it reaches its goal. If false, this platform acts like a yoyo

#### Defined in

[src/Platforms/MovingPlatform.ts:21](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Platforms/MovingPlatform.ts#L21)

___

### originX

• **originX**: `number`

The horizontal origin of this Game Object.
The origin maps the relationship between the size and position of the Game Object.
The default value is 0.5, meaning all Game Objects are positioned based on their center.
Setting the value to 0 means the position now relates to the left of the Game Object.

#### Inherited from

Phaser.GameObjects.PathFollower.originX

#### Defined in

node_modules/phaser/types/phaser.d.ts:25600

___

### originY

• **originY**: `number`

The vertical origin of this Game Object.
The origin maps the relationship between the size and position of the Game Object.
The default value is 0.5, meaning all Game Objects are positioned based on their center.
Setting the value to 0 means the position now relates to the top of the Game Object.

#### Inherited from

Phaser.GameObjects.PathFollower.originY

#### Defined in

node_modules/phaser/types/phaser.d.ts:25608

___

### parentContainer

• **parentContainer**: `Container`

The parent Container of this Game Object, if it has one.

#### Inherited from

Phaser.GameObjects.PathFollower.parentContainer

#### Defined in

node_modules/phaser/types/phaser.d.ts:17037

___

### path

• **path**: `Path`

The Path this PathFollower is following. It can only follow one Path at a time.

#### Inherited from

Phaser.GameObjects.PathFollower.path

#### Defined in

node_modules/phaser/types/phaser.d.ts:26271

___

### pathConfig

• **pathConfig**: `PathConfig`

Settings for the PathFollower.

#### Inherited from

Phaser.GameObjects.PathFollower.pathConfig

#### Defined in

node_modules/phaser/types/phaser.d.ts:25257

___

### pathDelta

• **pathDelta**: `Vector2`

The distance the follower has traveled from the previous point to the current one, at the last update.

#### Inherited from

Phaser.GameObjects.PathFollower.pathDelta

#### Defined in

node_modules/phaser/types/phaser.d.ts:25247

___

### pathEndX

• `Private` **pathEndX**: `number` = `null`

#### Defined in

[src/Platforms/MovingPlatform.ts:8](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Platforms/MovingPlatform.ts#L8)

___

### pathEndY

• `Private` **pathEndY**: `number` = `null`

#### Defined in

[src/Platforms/MovingPlatform.ts:9](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Platforms/MovingPlatform.ts#L9)

___

### pathOffset

• **pathOffset**: `Vector2`

An additional vector to add to the PathFollowers position, allowing you to offset it from the
Path coordinates.

#### Inherited from

Phaser.GameObjects.PathFollower.pathOffset

#### Defined in

node_modules/phaser/types/phaser.d.ts:25237

___

### pathRotationOffset

• **pathRotationOffset**: `number`

If the PathFollower is rotating to match the Path (@see Phaser.GameObjects.PathFollower#rotateToPath)
this value is added to the rotation value. This allows you to rotate objects to a path but control
the angle of the rotation as well.

#### Inherited from

Phaser.GameObjects.PathFollower.pathRotationOffset

#### Defined in

node_modules/phaser/types/phaser.d.ts:25231

___

### pathStartX

• `Private` **pathStartX**: `number` = `null`

#### Defined in

[src/Platforms/MovingPlatform.ts:6](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Platforms/MovingPlatform.ts#L6)

___

### pathStartY

• `Private` **pathStartY**: `number` = `null`

#### Defined in

[src/Platforms/MovingPlatform.ts:7](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Platforms/MovingPlatform.ts#L7)

___

### pathTween

• **pathTween**: `Tween`

The Tween used for following the Path.

#### Inherited from

Phaser.GameObjects.PathFollower.pathTween

#### Defined in

node_modules/phaser/types/phaser.d.ts:25252

___

### pathVector

• **pathVector**: `Vector2`

A Vector2 that stores the current point of the path the follower is on.

#### Inherited from

Phaser.GameObjects.PathFollower.pathVector

#### Defined in

node_modules/phaser/types/phaser.d.ts:25242

___

### pipeline

• **pipeline**: `WebGLPipeline`

The current WebGL pipeline of this Game Object.

#### Inherited from

Phaser.GameObjects.PathFollower.pipeline

#### Defined in

node_modules/phaser/types/phaser.d.ts:25662

___

### pipelineData

• **pipelineData**: `object`

An object to store pipeline specific data in, to be read by the pipelines this Game Object uses.

#### Inherited from

Phaser.GameObjects.PathFollower.pipelineData

#### Defined in

node_modules/phaser/types/phaser.d.ts:25682

___

### postPipelines

• **postPipelines**: `PostFXPipeline`[]

The WebGL Post FX Pipelines this Game Object uses for post-render effects.

The pipelines are processed in the order in which they appear in this array.

If you modify this array directly, be sure to set the
`hasPostPipeline` property accordingly.

#### Inherited from

Phaser.GameObjects.PathFollower.postPipelines

#### Defined in

node_modules/phaser/types/phaser.d.ts:25677

___

### renderFlags

• **renderFlags**: `number`

The flags that are compared against `RENDER_MASK` to determine if this Game Object will render or not.
The bits are 0001 | 0010 | 0100 | 1000 set by the components Visible, Alpha, Transform and Texture respectively.
If those components are not used by your custom class then you can use this bitmask as you wish.

#### Inherited from

Phaser.GameObjects.PathFollower.renderFlags

#### Defined in

node_modules/phaser/types/phaser.d.ts:17070

___

### rotateToPath

• **rotateToPath**: `boolean`

Should the PathFollower automatically rotate to point in the direction of the Path?

#### Inherited from

Phaser.GameObjects.PathFollower.rotateToPath

#### Defined in

node_modules/phaser/types/phaser.d.ts:26276

___

### rotation

• **rotation**: `number`

The angle of this Game Object in radians.

Phaser uses a right-hand clockwise rotation system, where 0 is right, PI/2 is down, +-PI is left
and -PI/2 is up.

If you prefer to work in degrees, see the `angle` property instead.

#### Inherited from

Phaser.GameObjects.PathFollower.rotation

#### Defined in

node_modules/phaser/types/phaser.d.ts:26139

___

### scale

• **scale**: `number`

This is a special setter that allows you to set both the horizontal and vertical scale of this Game Object
to the same value, at the same time. When reading this value the result returned is `(scaleX + scaleY) / 2`.

Use of this property implies you wish the horizontal and vertical scales to be equal to each other. If this
isn't the case, use the `scaleX` or `scaleY` properties instead.

#### Inherited from

Phaser.GameObjects.PathFollower.scale

#### Defined in

node_modules/phaser/types/phaser.d.ts:26109

___

### scaleX

• **scaleX**: `number`

The horizontal scale of this Game Object.

#### Inherited from

Phaser.GameObjects.PathFollower.scaleX

#### Defined in

node_modules/phaser/types/phaser.d.ts:26114

___

### scaleY

• **scaleY**: `number`

The vertical scale of this Game Object.

#### Inherited from

Phaser.GameObjects.PathFollower.scaleY

#### Defined in

node_modules/phaser/types/phaser.d.ts:26119

___

### scene

• **scene**: `Scene`

A reference to the Scene to which this Game Object belongs.

Game Objects can only belong to one Scene.

You should consider this property as being read-only. You cannot move a
Game Object to another Scene by simply changing it.

#### Inherited from

Phaser.GameObjects.PathFollower.scene

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

Phaser.GameObjects.PathFollower.scrollFactorX

#### Defined in

node_modules/phaser/types/phaser.d.ts:25790

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

Phaser.GameObjects.PathFollower.scrollFactorY

#### Defined in

node_modules/phaser/types/phaser.d.ts:25809

___

### slowOnEdges

• `Private` **slowOnEdges**: `boolean` = `true`

Whether the platform slow once it's close the end of it's path

#### Defined in

[src/Platforms/MovingPlatform.ts:18](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Platforms/MovingPlatform.ts#L18)

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

Phaser.GameObjects.PathFollower.state

#### Defined in

node_modules/phaser/types/phaser.d.ts:17032

___

### tabIndex

• **tabIndex**: `number`

The Tab Index of the Game Object.
Reserved for future use by plugins and the Input Manager.

#### Inherited from

Phaser.GameObjects.PathFollower.tabIndex

#### Defined in

node_modules/phaser/types/phaser.d.ts:17056

___

### texture

• **texture**: `Texture` \| `CanvasTexture`

The Texture this Game Object is using to render with.

#### Inherited from

Phaser.GameObjects.PathFollower.texture

#### Defined in

node_modules/phaser/types/phaser.d.ts:25909

___

### time

• `Private` **time**: `number` = `10`

The duration to go from the pathStart to its pathEnd

#### Defined in

[src/Platforms/MovingPlatform.ts:12](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Platforms/MovingPlatform.ts#L12)

___

### tint

• **tint**: `number`

The tint value being applied to the whole of the Game Object.
This property is a setter-only. Use the properties `tintTopLeft` etc to read the current tint value.

#### Inherited from

Phaser.GameObjects.PathFollower.tint

#### Defined in

node_modules/phaser/types/phaser.d.ts:26069

___

### tintBottomLeft

• **tintBottomLeft**: `number`

The tint value being applied to the bottom-left vertice of the Game Object.
This value is interpolated from the corner to the center of the Game Object.
The value should be set as a hex number, i.e. 0xff0000 for red, or 0xff00ff for purple.

#### Inherited from

Phaser.GameObjects.PathFollower.tintBottomLeft

#### Defined in

node_modules/phaser/types/phaser.d.ts:25995

___

### tintBottomRight

• **tintBottomRight**: `number`

The tint value being applied to the bottom-right vertice of the Game Object.
This value is interpolated from the corner to the center of the Game Object.
The value should be set as a hex number, i.e. 0xff0000 for red, or 0xff00ff for purple.

#### Inherited from

Phaser.GameObjects.PathFollower.tintBottomRight

#### Defined in

node_modules/phaser/types/phaser.d.ts:26002

___

### tintFill

• **tintFill**: `boolean`

The tint fill mode.

`false` = An additive tint (the default), where vertices colors are blended with the texture.
`true` = A fill tint, where the vertices colors replace the texture, but respects texture alpha.

#### Inherited from

Phaser.GameObjects.PathFollower.tintFill

#### Defined in

node_modules/phaser/types/phaser.d.ts:26010

___

### tintTopLeft

• **tintTopLeft**: `number`

The tint value being applied to the top-left vertice of the Game Object.
This value is interpolated from the corner to the center of the Game Object.
The value should be set as a hex number, i.e. 0xff0000 for red, or 0xff00ff for purple.

#### Inherited from

Phaser.GameObjects.PathFollower.tintTopLeft

#### Defined in

node_modules/phaser/types/phaser.d.ts:25981

___

### tintTopRight

• **tintTopRight**: `number`

The tint value being applied to the top-right vertice of the Game Object.
This value is interpolated from the corner to the center of the Game Object.
The value should be set as a hex number, i.e. 0xff0000 for red, or 0xff00ff for purple.

#### Inherited from

Phaser.GameObjects.PathFollower.tintTopRight

#### Defined in

node_modules/phaser/types/phaser.d.ts:25988

___

### type

• **type**: `string`

A textual representation of this Game Object, i.e. `sprite`.
Used internally by Phaser but is available for your own custom classes to populate.

#### Inherited from

Phaser.GameObjects.PathFollower.type

#### Defined in

node_modules/phaser/types/phaser.d.ts:17020

___

### visible

• **visible**: `boolean`

The visible state of the Game Object.

An invisible Game Object will skip rendering, but will still process update logic.

#### Inherited from

Phaser.GameObjects.PathFollower.visible

#### Defined in

node_modules/phaser/types/phaser.d.ts:26258

___

### w

• **w**: `number`

The w position of this Game Object.

#### Inherited from

Phaser.GameObjects.PathFollower.w

#### Defined in

node_modules/phaser/types/phaser.d.ts:26100

___

### width

• **width**: `number`

The native (un-scaled) width of this Game Object.

Changing this value will not change the size that the Game Object is rendered in-game.
For that you need to either set the scale of the Game Object (`setScale`) or use
the `displayWidth` property.

#### Inherited from

Phaser.GameObjects.PathFollower.width

#### Defined in

node_modules/phaser/types/phaser.d.ts:25839

___

### x

• **x**: `number`

The x position of this Game Object.

#### Inherited from

Phaser.GameObjects.PathFollower.x

#### Defined in

node_modules/phaser/types/phaser.d.ts:26082

___

### y

• **y**: `number`

The y position of this Game Object.

#### Inherited from

Phaser.GameObjects.PathFollower.y

#### Defined in

node_modules/phaser/types/phaser.d.ts:26087

___

### z

• **z**: `number`

The z position of this Game Object.

Note: The z position does not control the rendering order of 2D Game Objects. Use
Phaser.GameObjects.Components.Depth#depth instead.

#### Inherited from

Phaser.GameObjects.PathFollower.z

#### Defined in

node_modules/phaser/types/phaser.d.ts:26095

___

### RENDER\_MASK

▪ `Static` `Readonly` **RENDER\_MASK**: `number`

The bitmask that `GameObject.renderFlags` is compared against to determine if the Game Object will render or not.

#### Inherited from

Phaser.GameObjects.PathFollower.RENDER\_MASK

#### Defined in

node_modules/phaser/types/phaser.d.ts:17400

## Methods

### activate

▸ **activate**(): `void`

#### Returns

`void`

#### Defined in

[src/Platforms/MovingPlatform.ts:62](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Platforms/MovingPlatform.ts#L62)

___

### addCollidedObject

▸ **addCollidedObject**(`pawn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pawn` | [`Pawn`](Pawns_Pawn.Pawn.md) |

#### Returns

`void`

#### Defined in

[src/Platforms/MovingPlatform.ts:84](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Platforms/MovingPlatform.ts#L84)

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. Default this. |

#### Returns

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.addListener

#### Defined in

node_modules/phaser/types/phaser.d.ts:9588

___

### addToDisplayList

▸ **addToDisplayList**(`displayList?`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

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

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.addToDisplayList

#### Defined in

node_modules/phaser/types/phaser.d.ts:17342

___

### addToUpdateList

▸ **addToUpdateList**(): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

Adds this Game Object to the Update List belonging to the Scene.

When a Game Object is added to the Update List it will have its `preUpdate` method called
every game frame. This method is passed two parameters: `delta` and `time`.

If you wish to run your own logic within `preUpdate` then you should always call
`preUpdate.super(delta, time)` within it, or it may fail to process required operations,
such as Sprite animations.

#### Returns

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.addToUpdateList

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

Phaser.GameObjects.PathFollower.addedToScene

#### Defined in

node_modules/phaser/types/phaser.d.ts:17285

___

### chain

▸ **chain**(`key`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

Sets an animation, or an array of animations, to be played immediately after the current one completes or stops.

The current animation must enter a 'completed' state for this to happen, i.e. finish all of its repeats, delays, etc,
or have the `stop` method called directly on it.

An animation set to repeat forever will never enter a completed state.

You can chain a new animation at any point, including before the current one starts playing, during it,
or when it ends (via its `animationcomplete` event).

Chained animations are specific to a Game Object, meaning different Game Objects can have different chained
animations without impacting the animation they're playing.

Call this method with no arguments to reset all currently chained animations.

When playing an animation on a Sprite it will first check to see if it can find a matching key
locally within the Sprite. If it can, it will play the local animation. If not, it will then
search the global Animation Manager and look for it there.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` \| `string`[] \| `Animation` \| `PlayAnimationConfig` \| `Animation`[] \| `PlayAnimationConfig`[] | The string-based key of the animation to play, or an Animation instance, or a `PlayAnimationConfig` object, or an array of them. |

#### Returns

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.chain

#### Defined in

node_modules/phaser/types/phaser.d.ts:39429

___

### clearAlpha

▸ **clearAlpha**(): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

Clears all alpha values associated with this Game Object.

Immediately sets the alpha levels back to 1 (fully opaque).

#### Returns

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.clearAlpha

#### Defined in

node_modules/phaser/types/phaser.d.ts:25273

___

### clearMask

▸ **clearMask**(`destroyMask?`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

Clears the mask that this Game Object was using.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destroyMask?` | `boolean` | Destroy the mask before clearing it? Default false. |

#### Returns

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.clearMask

#### Defined in

node_modules/phaser/types/phaser.d.ts:25561

___

### clearTint

▸ **clearTint**(): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

Clears all tint values associated with this Game Object.

Immediately sets the color values back to 0xffffff and the tint type to 'additive',
which results in no visible change to the texture.

#### Returns

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.clearTint

#### Defined in

node_modules/phaser/types/phaser.d.ts:26018

___

### copyPosition

▸ **copyPosition**(`source`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

Copies an object's coordinates to this Game Object's position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `Vector2Like` \| `Vector3Like` \| `Vector4Like` | An object with numeric 'x', 'y', 'z', or 'w' properties. Undefined values are not copied. |

#### Returns

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.copyPosition

#### Defined in

node_modules/phaser/types/phaser.d.ts:26154

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

Phaser.GameObjects.PathFollower.createBitmapMask

#### Defined in

node_modules/phaser/types/phaser.d.ts:25578

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

Phaser.GameObjects.PathFollower.createGeometryMask

#### Defined in

node_modules/phaser/types/phaser.d.ts:25592

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

Phaser.GameObjects.PathFollower.destroy

#### Defined in

node_modules/phaser/types/phaser.d.ts:17395

___

### disableInteractive

▸ **disableInteractive**(): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

If this Game Object has previously been enabled for input, this will disable it.

An object that is disabled for input stops processing or being considered for
input events, but can be turned back on again at any time by simply calling
`setInteractive()` with no arguments provided.

If want to completely remove interaction from this Game Object then use `removeInteractive` instead.

#### Returns

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.disableInteractive

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

Phaser.GameObjects.PathFollower.emit

#### Defined in

node_modules/phaser/types/phaser.d.ts:9572

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

Phaser.GameObjects.PathFollower.eventNames

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

Phaser.GameObjects.PathFollower.getBottomCenter

#### Defined in

node_modules/phaser/types/phaser.d.ts:25518

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

Phaser.GameObjects.PathFollower.getBottomLeft

#### Defined in

node_modules/phaser/types/phaser.d.ts:25510

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

Phaser.GameObjects.PathFollower.getBottomRight

#### Defined in

node_modules/phaser/types/phaser.d.ts:25526

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

Phaser.GameObjects.PathFollower.getBounds

#### Defined in

node_modules/phaser/types/phaser.d.ts:25533

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

Phaser.GameObjects.PathFollower.getCenter

#### Defined in

node_modules/phaser/types/phaser.d.ts:25462

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

Phaser.GameObjects.PathFollower.getData

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

Phaser.GameObjects.PathFollower.getIndexList

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

Phaser.GameObjects.PathFollower.getLeftCenter

#### Defined in

node_modules/phaser/types/phaser.d.ts:25494

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

Phaser.GameObjects.PathFollower.getLocalPoint

#### Defined in

node_modules/phaser/types/phaser.d.ts:26244

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

Phaser.GameObjects.PathFollower.getLocalTransformMatrix

#### Defined in

node_modules/phaser/types/phaser.d.ts:26221

___

### getParentRotation

▸ **getParentRotation**(): `number`

Gets the sum total rotation of all of this Game Objects parent Containers.

The returned value is in radians and will be zero if this Game Object has no parent container.

#### Returns

`number`

#### Inherited from

Phaser.GameObjects.PathFollower.getParentRotation

#### Defined in

node_modules/phaser/types/phaser.d.ts:26251

___

### getPipelineName

▸ **getPipelineName**(): `string`

Gets the name of the WebGL Pipeline this Game Object is currently using.

#### Returns

`string`

#### Inherited from

Phaser.GameObjects.PathFollower.getPipelineName

#### Defined in

node_modules/phaser/types/phaser.d.ts:25771

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

Phaser.GameObjects.PathFollower.getPostPipeline

#### Defined in

node_modules/phaser/types/phaser.d.ts:25744

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

Phaser.GameObjects.PathFollower.getRightCenter

#### Defined in

node_modules/phaser/types/phaser.d.ts:25502

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

Phaser.GameObjects.PathFollower.getTopCenter

#### Defined in

node_modules/phaser/types/phaser.d.ts:25478

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

Phaser.GameObjects.PathFollower.getTopLeft

#### Defined in

node_modules/phaser/types/phaser.d.ts:25470

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

Phaser.GameObjects.PathFollower.getTopRight

#### Defined in

node_modules/phaser/types/phaser.d.ts:25486

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

Phaser.GameObjects.PathFollower.getWorldTransformMatrix

#### Defined in

node_modules/phaser/types/phaser.d.ts:26228

___

### incData

▸ **incData**(`key`, `data?`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

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

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.incData

#### Defined in

node_modules/phaser/types/phaser.d.ts:17185

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Defined in

[src/Platforms/MovingPlatform.ts:37](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Platforms/MovingPlatform.ts#L37)

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

Phaser.GameObjects.PathFollower.initPipeline

#### Defined in

node_modules/phaser/types/phaser.d.ts:25690

___

### isFollowing

▸ **isFollowing**(): `boolean`

Is this PathFollower actively following a Path or not?

To be considered as `isFollowing` it must be currently moving on a Path, and not paused.

#### Returns

`boolean`

#### Inherited from

Phaser.GameObjects.PathFollower.isFollowing

#### Defined in

node_modules/phaser/types/phaser.d.ts:26299

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

Phaser.GameObjects.PathFollower.listenerCount

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

Phaser.GameObjects.PathFollower.listeners

#### Defined in

node_modules/phaser/types/phaser.d.ts:9559

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.off

#### Defined in

node_modules/phaser/types/phaser.d.ts:9614

___

### on

▸ **on**(`event`, `fn`, `context?`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. Default this. |

#### Returns

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.on

#### Defined in

node_modules/phaser/types/phaser.d.ts:9580

___

### once

▸ **once**(`event`, `fn`, `context?`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. Default this. |

#### Returns

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.once

#### Defined in

node_modules/phaser/types/phaser.d.ts:9596

___

### pathUpdate

▸ **pathUpdate**(): `void`

Internal update handler that advances this PathFollower along the path.

Called automatically by the Scene step, should not typically be called directly.

#### Returns

`void`

#### Inherited from

Phaser.GameObjects.PathFollower.pathUpdate

#### Defined in

node_modules/phaser/types/phaser.d.ts:26333

___

### pauseFollow

▸ **pauseFollow**(): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

Pauses this PathFollower. It will still continue to render, but it will remain motionless at the
point on the Path at which you paused it.

#### Returns

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.pauseFollow

#### Defined in

node_modules/phaser/types/phaser.d.ts:26312

___

### play

▸ **play**(`key`, `ignoreIfPlaying?`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

Start playing the given animation on this Sprite.

Animations in Phaser can either belong to the global Animation Manager, or specifically to this Sprite.

The benefit of a global animation is that multiple Sprites can all play the same animation, without
having to duplicate the data. You can just create it once and then play it on any Sprite.

The following code shows how to create a global repeating animation. The animation will be created
from all of the frames within the sprite sheet that was loaded with the key 'muybridge':

```javascript
var config = {
    key: 'run',
    frames: 'muybridge',
    frameRate: 15,
    repeat: -1
};

//  This code should be run from within a Scene:
this.anims.create(config);
```

However, if you wish to create an animation that is unique to this Sprite, and this Sprite alone,
you can call the `Animation.create` method instead. It accepts the exact same parameters as when
creating a global animation, however the resulting data is kept locally in this Sprite.

With the animation created, either globally or locally, you can now play it on this Sprite:

```javascript
this.add.sprite(x, y).play('run');
```

Alternatively, if you wish to run it at a different frame rate, for example, you can pass a config
object instead:

```javascript
this.add.sprite(x, y).play({ key: 'run', frameRate: 24 });
```

When playing an animation on a Sprite it will first check to see if it can find a matching key
locally within the Sprite. If it can, it will play the local animation. If not, it will then
search the global Animation Manager and look for it there.

If you need a Sprite to be able to play both local and global animations, make sure they don't
have conflicting keys.

See the documentation for the `PlayAnimationConfig` config object for more details about this.

Also, see the documentation in the Animation Manager for further details on creating animations.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` \| `Animation` \| `PlayAnimationConfig` | The string-based key of the animation to play, or an Animation instance, or a `PlayAnimationConfig` object. |
| `ignoreIfPlaying?` | `boolean` | If an animation is already playing then ignore this call. Default false. |

#### Returns

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.play

#### Defined in

node_modules/phaser/types/phaser.d.ts:39314

___

### playAfterDelay

▸ **playAfterDelay**(`key`, `delay`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

Waits for the specified delay, in milliseconds, then starts playback of the given animation.

If the animation _also_ has a delay value set in its config, it will be **added** to the delay given here.

If an animation is already running and a new animation is given to this method, it will wait for
the given delay before starting the new animation.

If no animation is currently running, the given one begins after the delay.

When playing an animation on a Sprite it will first check to see if it can find a matching key
locally within the Sprite. If it can, it will play the local animation. If not, it will then
search the global Animation Manager and look for it there.

Prior to Phaser 3.50 this method was called 'delayedPlay'.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` \| `Animation` \| `PlayAnimationConfig` | The string-based key of the animation to play, or an Animation instance, or a `PlayAnimationConfig` object. |
| `delay` | `number` | The delay, in milliseconds, to wait before starting the animation playing. |

#### Returns

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.playAfterDelay

#### Defined in

node_modules/phaser/types/phaser.d.ts:39389

___

### playAfterRepeat

▸ **playAfterRepeat**(`key`, `repeatCount?`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

Waits for the current animation to complete the `repeatCount` number of repeat cycles, then starts playback
of the given animation.

You can use this to ensure there are no harsh jumps between two sets of animations, i.e. going from an
idle animation to a walking animation, by making them blend smoothly into each other.

If no animation is currently running, the given one will start immediately.

When playing an animation on a Sprite it will first check to see if it can find a matching key
locally within the Sprite. If it can, it will play the local animation. If not, it will then
search the global Animation Manager and look for it there.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` \| `Animation` \| `PlayAnimationConfig` | The string-based key of the animation to play, or an Animation instance, or a `PlayAnimationConfig` object. |
| `repeatCount?` | `number` | How many times should the animation repeat before the next one starts? Default 1. |

#### Returns

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.playAfterRepeat

#### Defined in

node_modules/phaser/types/phaser.d.ts:39406

___

### playReverse

▸ **playReverse**(`key`, `ignoreIfPlaying?`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

Start playing the given animation on this Sprite, in reverse.

Animations in Phaser can either belong to the global Animation Manager, or specifically to this Sprite.

The benefit of a global animation is that multiple Sprites can all play the same animation, without
having to duplicate the data. You can just create it once and then play it on any Sprite.

The following code shows how to create a global repeating animation. The animation will be created
from all of the frames within the sprite sheet that was loaded with the key 'muybridge':

```javascript
var config = {
    key: 'run',
    frames: 'muybridge',
    frameRate: 15,
    repeat: -1
};

//  This code should be run from within a Scene:
this.anims.create(config);
```

However, if you wish to create an animation that is unique to this Sprite, and this Sprite alone,
you can call the `Animation.create` method instead. It accepts the exact same parameters as when
creating a global animation, however the resulting data is kept locally in this Sprite.

With the animation created, either globally or locally, you can now play it on this Sprite:

```javascript
this.add.sprite(x, y).playReverse('run');
```

Alternatively, if you wish to run it at a different frame rate, for example, you can pass a config
object instead:

```javascript
this.add.sprite(x, y).playReverse({ key: 'run', frameRate: 24 });
```

When playing an animation on a Sprite it will first check to see if it can find a matching key
locally within the Sprite. If it can, it will play the local animation. If not, it will then
search the global Animation Manager and look for it there.

If you need a Sprite to be able to play both local and global animations, make sure they don't
have conflicting keys.

See the documentation for the `PlayAnimationConfig` config object for more details about this.

Also, see the documentation in the Animation Manager for further details on creating animations.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` \| `Animation` \| `PlayAnimationConfig` | The string-based key of the animation to play, or an Animation instance, or a `PlayAnimationConfig` object. |
| `ignoreIfPlaying?` | `boolean` | If an animation is already playing then ignore this call. Default false. |

#### Returns

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.playReverse

#### Defined in

node_modules/phaser/types/phaser.d.ts:39369

___

### preUpdate

▸ `Protected` **preUpdate**(`time`, `delta`): `void`

Internal update handler that advances this PathFollower along the path.

Called automatically by the Scene step, should not typically be called directly.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time` | `number` | The current timestamp as generated by the Request Animation Frame or SetTimeout. |
| `delta` | `number` | The delta time, in ms, elapsed since the last frame. |

#### Returns

`void`

#### Inherited from

Phaser.GameObjects.PathFollower.preUpdate

#### Defined in

node_modules/phaser/types/phaser.d.ts:25266

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.removeAllListeners

#### Defined in

node_modules/phaser/types/phaser.d.ts:9620

___

### removeFromDisplayList

▸ **removeFromDisplayList**(): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

Removes this Game Object from the Display List it is currently on.

A Game Object can only exist on one Display List at any given time, but may move freely removed
and added back at a later stage.

You can query which list it is on by looking at the `Phaser.GameObjects.GameObject#displayList` property.

If a Game Object isn't on any Display List, it will not be rendered. If you just wish to temporarly
disable it from rendering, consider using the `setVisible` method, instead.

#### Returns

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.removeFromDisplayList

#### Defined in

node_modules/phaser/types/phaser.d.ts:17367

___

### removeFromUpdateList

▸ **removeFromUpdateList**(): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

Removes this Game Object from the Scene's Update List.

When a Game Object is on the Update List, it will have its `preUpdate` method called
every game frame. Calling this method will remove it from the list, preventing this.

Removing a Game Object from the Update List will stop most internal functions working.
For example, removing a Sprite from the Update List will prevent it from being able to
run animations.

#### Returns

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.removeFromUpdateList

#### Defined in

node_modules/phaser/types/phaser.d.ts:17379

___

### removeInteractive

▸ **removeInteractive**(): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

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

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.removeInteractive

#### Defined in

node_modules/phaser/types/phaser.d.ts:17275

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.removeListener

#### Defined in

node_modules/phaser/types/phaser.d.ts:9605

___

### removePostPipeline

▸ **removePostPipeline**(`pipeline`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

Removes a type of Post Pipeline instances from this Game Object, based on the given name, and destroys them.

If you wish to remove all Post Pipelines use the `resetPostPipeline` method instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pipeline` | `string` \| `PostFXPipeline` | The string-based name of the pipeline, or a pipeline class. |

#### Returns

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.removePostPipeline

#### Defined in

node_modules/phaser/types/phaser.d.ts:25766

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

Phaser.GameObjects.PathFollower.removedFromScene

#### Defined in

node_modules/phaser/types/phaser.d.ts:17295

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/Platforms/MovingPlatform.ts:72](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Platforms/MovingPlatform.ts#L72)

___

### resetFlip

▸ **resetFlip**(): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

Resets the horizontal and vertical flipped state of this Game Object back to their default un-flipped state.

#### Returns

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.resetFlip

#### Defined in

node_modules/phaser/types/phaser.d.ts:25455

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

Phaser.GameObjects.PathFollower.resetPipeline

#### Defined in

node_modules/phaser/types/phaser.d.ts:25751

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

Phaser.GameObjects.PathFollower.resetPostPipeline

#### Defined in

node_modules/phaser/types/phaser.d.ts:25758

___

### resumeFollow

▸ **resumeFollow**(): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

Resumes a previously paused PathFollower.

If the PathFollower was not paused this has no effect.

#### Returns

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.resumeFollow

#### Defined in

node_modules/phaser/types/phaser.d.ts:26319

___

### setActive

▸ **setActive**(`value`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

Sets the `active` property of this Game Object and returns this Game Object for further chaining.
A Game Object with its `active` property set to `true` will be updated by the Scenes UpdateList.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | True if this Game Object should be set as active, false if not. |

#### Returns

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.setActive

#### Defined in

node_modules/phaser/types/phaser.d.ts:17103

___

### setAlpha

▸ **setAlpha**(`topLeft?`, `topRight?`, `bottomLeft?`, `bottomRight?`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

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

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.setAlpha

#### Defined in

node_modules/phaser/types/phaser.d.ts:25286

___

### setAngle

▸ **setAngle**(`degrees?`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

Sets the angle of this Game Object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `degrees?` | `number` | The rotation of this Game Object, in degrees. Default 0. |

#### Returns

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.setAngle

#### Defined in

node_modules/phaser/types/phaser.d.ts:26181

___

### setBlendMode

▸ **setBlendMode**(`value`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

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

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.setBlendMode

#### Defined in

node_modules/phaser/types/phaser.d.ts:25364

___

### setCrop

▸ **setCrop**(`x?`, `y?`, `width?`, `height?`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

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

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.setCrop

#### Defined in

node_modules/phaser/types/phaser.d.ts:25950

___

### setData

▸ **setData**(`key`, `data?`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

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

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.setData

#### Defined in

node_modules/phaser/types/phaser.d.ts:17171

___

### setDataEnabled

▸ **setDataEnabled**(): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

Adds a Data Manager component to this Game Object.

#### Returns

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.setDataEnabled

#### Defined in

node_modules/phaser/types/phaser.d.ts:17128

___

### setDepth

▸ **setDepth**(`value`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

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

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.setDepth

#### Defined in

node_modules/phaser/types/phaser.d.ts:25391

___

### setDisplayOrigin

▸ **setDisplayOrigin**(`x?`, `y?`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

Sets the display origin of this Game Object.
The difference between this and setting the origin is that you can use pixel values for setting the display origin.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x?` | `number` | The horizontal display origin value. Default 0. |
| `y?` | `number` | The vertical display origin value. If not defined it will be set to the value of `x`. Default x. |

#### Returns

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.setDisplayOrigin

#### Defined in

node_modules/phaser/types/phaser.d.ts:25644

___

### setDisplaySize

▸ **setDisplaySize**(`width`, `height`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

Sets the display size of this Game Object.

Calling this will adjust the scale.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `width` | `number` | The width of this Game Object. |
| `height` | `number` | The height of this Game Object. |

#### Returns

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.setDisplaySize

#### Defined in

node_modules/phaser/types/phaser.d.ts:25904

___

### setFlip

▸ **setFlip**(`x`, `y`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

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

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.setFlip

#### Defined in

node_modules/phaser/types/phaser.d.ts:25450

___

### setFlipX

▸ **setFlipX**(`value`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

Sets the horizontal flipped state of this Game Object.

A Game Object that is flipped horizontally will render inversed on the horizontal axis.
Flipping always takes place from the middle of the texture and does not impact the scale value.
If this Game Object has a physics body, it will not change the body. This is a rendering toggle only.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | The flipped state. `false` for no flip, or `true` to be flipped. |

#### Returns

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.setFlipX

#### Defined in

node_modules/phaser/types/phaser.d.ts:25433

___

### setFlipY

▸ **setFlipY**(`value`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

Sets the vertical flipped state of this Game Object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | The flipped state. `false` for no flip, or `true` to be flipped. |

#### Returns

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.setFlipY

#### Defined in

node_modules/phaser/types/phaser.d.ts:25439

___

### setFrame

▸ **setFrame**(`frame`, `updateSize?`, `updateOrigin?`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

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

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.setFrame

#### Defined in

node_modules/phaser/types/phaser.d.ts:25974

___

### setInteractive

▸ **setInteractive**(`hitArea?`, `callback?`, `dropZone?`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

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

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.setInteractive

#### Defined in

node_modules/phaser/types/phaser.d.ts:17242

___

### setMask

▸ **setMask**(`mask`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

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

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.setMask

#### Defined in

node_modules/phaser/types/phaser.d.ts:25555

___

### setName

▸ **setName**(`value`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

Sets the `name` property of this Game Object and returns this Game Object for further chaining.
The `name` property is not populated by Phaser and is presented for your own use.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | The name to be given to this Game Object. |

#### Returns

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.setName

#### Defined in

node_modules/phaser/types/phaser.d.ts:17110

___

### setOrigin

▸ **setOrigin**(`x?`, `y?`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

Sets the origin of this Game Object.

The values are given in the range 0 to 1.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x?` | `number` | The horizontal origin value. Default 0.5. |
| `y?` | `number` | The vertical origin value. If not defined it will be set to the value of `x`. Default x. |

#### Returns

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.setOrigin

#### Defined in

node_modules/phaser/types/phaser.d.ts:25631

___

### setOriginFromFrame

▸ **setOriginFromFrame**(): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

Sets the origin of this Game Object based on the Pivot values in its Frame.

#### Returns

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.setOriginFromFrame

#### Defined in

node_modules/phaser/types/phaser.d.ts:25636

___

### setPath

▸ **setPath**(`path`, `config?`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

Set the Path that this PathFollower should follow.

Optionally accepts Phaser.Types.GameObjects.PathFollower.PathConfig settings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `Path` | The Path this PathFollower is following. It can only follow one Path at a time. |
| `config?` | `number` \| `PathConfig` \| `NumberTweenBuilderConfig` | Settings for the PathFollower. |

#### Returns

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.setPath

#### Defined in

node_modules/phaser/types/phaser.d.ts:26285

___

### setPipeline

▸ **setPipeline**(`pipeline`, `pipelineData?`, `copyData?`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

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

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.setPipeline

#### Defined in

node_modules/phaser/types/phaser.d.ts:25702

___

### setPipelineData

▸ **setPipelineData**(`key`, `value?`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

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

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.setPipelineData

#### Defined in

node_modules/phaser/types/phaser.d.ts:25738

___

### setPosition

▸ **setPosition**(`x?`, `y?`, `z?`, `w?`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

Sets the position of this Game Object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x?` | `number` | The x position of this Game Object. Default 0. |
| `y?` | `number` | The y position of this Game Object. If not set it will use the `x` value. Default x. |
| `z?` | `number` | The z position of this Game Object. Default 0. |
| `w?` | `number` | The w position of this Game Object. Default 0. |

#### Returns

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.setPosition

#### Defined in

node_modules/phaser/types/phaser.d.ts:26148

___

### setPostPipeline

▸ **setPostPipeline**(`pipelines`, `pipelineData?`, `copyData?`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

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

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.setPostPipeline

#### Defined in

node_modules/phaser/types/phaser.d.ts:25725

___

### setRandomPosition

▸ **setRandomPosition**(`x?`, `y?`, `width?`, `height?`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

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

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.setRandomPosition

#### Defined in

node_modules/phaser/types/phaser.d.ts:26169

___

### setRotateToPath

▸ **setRotateToPath**(`value`, `offset?`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

Set whether the PathFollower should automatically rotate to point in the direction of the Path.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | Whether the PathFollower should automatically rotate to point in the direction of the Path. |
| `offset?` | `number` | Rotation offset in degrees. Default 0. |

#### Returns

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.setRotateToPath

#### Defined in

node_modules/phaser/types/phaser.d.ts:26292

___

### setRotation

▸ **setRotation**(`radians?`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

Sets the rotation of this Game Object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `radians?` | `number` | The rotation of this Game Object, in radians. Default 0. |

#### Returns

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.setRotation

#### Defined in

node_modules/phaser/types/phaser.d.ts:26175

___

### setScale

▸ **setScale**(`x`, `y?`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

Sets the scale of this Game Object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The horizontal scale of this Game Object. |
| `y?` | `number` | The vertical scale of this Game Object. If not set it will use the `x` value. Default x. |

#### Returns

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.setScale

#### Defined in

node_modules/phaser/types/phaser.d.ts:26188

___

### setScrollFactor

▸ **setScrollFactor**(`x`, `y?`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

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

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.setScrollFactor

#### Defined in

node_modules/phaser/types/phaser.d.ts:25830

___

### setSize

▸ **setSize**(`width`, `height`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

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

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.setSize

#### Defined in

node_modules/phaser/types/phaser.d.ts:25895

___

### setSizeToFrame

▸ **setSizeToFrame**(`frame`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

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

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.setSizeToFrame

#### Defined in

node_modules/phaser/types/phaser.d.ts:25880

___

### setState

▸ **setState**(`value`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

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

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.setState

#### Defined in

node_modules/phaser/types/phaser.d.ts:17123

___

### setTexture

▸ **setTexture**(`key`, `frame?`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

Sets the texture and frame this Game Object will use to render with.

Textures are referenced by their string-based keys, as stored in the Texture Manager.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key of the texture to be used, as stored in the Texture Manager. |
| `frame?` | `string` \| `number` | The name or index of the frame within the Texture. |

#### Returns

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.setTexture

#### Defined in

node_modules/phaser/types/phaser.d.ts:25959

___

### setTint

▸ **setTint**(`topLeft?`, `topRight?`, `bottomLeft?`, `bottomRight?`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

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

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.setTint

#### Defined in

node_modules/phaser/types/phaser.d.ts:26040

___

### setTintFill

▸ **setTintFill**(`topLeft?`, `topRight?`, `bottomLeft?`, `bottomRight?`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

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

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.setTintFill

#### Defined in

node_modules/phaser/types/phaser.d.ts:26063

___

### setVisible

▸ **setVisible**(`value`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

Sets the visibility of this Game Object.

An invisible Game Object will skip rendering, but will still process update logic.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | The visible state of the Game Object. |

#### Returns

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.setVisible

#### Defined in

node_modules/phaser/types/phaser.d.ts:26266

___

### setW

▸ **setW**(`value?`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

Sets the w position of this Game Object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value?` | `number` | The w position of this Game Object. Default 0. |

#### Returns

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.setW

#### Defined in

node_modules/phaser/types/phaser.d.ts:26215

___

### setX

▸ **setX**(`value?`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

Sets the x position of this Game Object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value?` | `number` | The x position of this Game Object. Default 0. |

#### Returns

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.setX

#### Defined in

node_modules/phaser/types/phaser.d.ts:26194

___

### setY

▸ **setY**(`value?`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

Sets the y position of this Game Object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value?` | `number` | The y position of this Game Object. Default 0. |

#### Returns

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.setY

#### Defined in

node_modules/phaser/types/phaser.d.ts:26200

___

### setZ

▸ **setZ**(`value?`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

Sets the z position of this Game Object.

Note: The z position does not control the rendering order of 2D Game Objects. Use
Phaser.GameObjects.Components.Depth#setDepth instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value?` | `number` | The z position of this Game Object. Default 0. |

#### Returns

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.setZ

#### Defined in

node_modules/phaser/types/phaser.d.ts:26209

___

### shutdown

▸ **shutdown**(): `void`

Removes all listeners.

#### Returns

`void`

#### Inherited from

Phaser.GameObjects.PathFollower.shutdown

#### Defined in

node_modules/phaser/types/phaser.d.ts:9543

___

### startFollow

▸ **startFollow**(`config?`, `startAt?`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

Starts this PathFollower following its given Path.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config?` | `number` \| `PathConfig` \| `NumberTweenBuilderConfig` | The duration of the follow, or a PathFollower config object. Default {}. |
| `startAt?` | `number` | Optional start position of the follow, between 0 and 1. Default 0. |

#### Returns

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.startFollow

#### Defined in

node_modules/phaser/types/phaser.d.ts:26306

___

### startFollowPath

▸ `Private` **startFollowPath**(`pathStartX`, `pathStartY`, `pathEndX`, `pathEndY`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pathStartX` | `number` |
| `pathStartY` | `number` |
| `pathEndX` | `number` |
| `pathEndY` | `number` |

#### Returns

`void`

#### Defined in

[src/Platforms/MovingPlatform.ts:106](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Platforms/MovingPlatform.ts#L106)

___

### stop

▸ **stop**(): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

Immediately stops the current animation from playing and dispatches the `ANIMATION_STOP` events.

If no animation is playing, no event will be dispatched.

If there is another animation queued (via the `chain` method) then it will start playing immediately.

#### Returns

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.stop

#### Defined in

node_modules/phaser/types/phaser.d.ts:39438

___

### stopAfterDelay

▸ **stopAfterDelay**(`delay`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

Stops the current animation from playing after the specified time delay, given in milliseconds.

It then dispatches the `ANIMATION_STOP` event.

If no animation is running, no events will be dispatched.

If there is another animation in the queue (set via the `chain` method) then it will start playing,
when the current one stops.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `delay` | `number` | The number of milliseconds to wait before stopping this animation. |

#### Returns

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.stopAfterDelay

#### Defined in

node_modules/phaser/types/phaser.d.ts:39451

___

### stopAfterRepeat

▸ **stopAfterRepeat**(`repeatCount?`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

Stops the current animation from playing after the given number of repeats.

It then dispatches the `ANIMATION_STOP` event.

If no animation is running, no events will be dispatched.

If there is another animation in the queue (set via the `chain` method) then it will start playing,
when the current one stops.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `repeatCount?` | `number` | How many times should the animation repeat before stopping? Default 1. |

#### Returns

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.stopAfterRepeat

#### Defined in

node_modules/phaser/types/phaser.d.ts:39464

___

### stopFollow

▸ **stopFollow**(): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

Stops this PathFollower from following the path any longer.

This will invoke any 'stop' conditions that may exist on the Path, or for the follower.

#### Returns

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.stopFollow

#### Defined in

node_modules/phaser/types/phaser.d.ts:26326

___

### stopOnFrame

▸ **stopOnFrame**(`frame`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

Stops the current animation from playing when it next sets the given frame.
If this frame doesn't exist within the animation it will not stop it from playing.

It then dispatches the `ANIMATION_STOP` event.

If no animation is running, no events will be dispatched.

If there is another animation in the queue (set via the `chain` method) then it will start playing,
when the current one stops.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `frame` | `AnimationFrame` | The frame to check before stopping this animation. |

#### Returns

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.stopOnFrame

#### Defined in

node_modules/phaser/types/phaser.d.ts:39478

___

### toJSON

▸ **toJSON**(): `JSONGameObject`

Build a JSON representation of this Sprite.

#### Returns

`JSONGameObject`

#### Inherited from

Phaser.GameObjects.PathFollower.toJSON

#### Defined in

node_modules/phaser/types/phaser.d.ts:39483

___

### toggleData

▸ **toggleData**(`key`): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

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

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.toggleData

#### Defined in

node_modules/phaser/types/phaser.d.ts:17198

___

### toggleFlipX

▸ **toggleFlipX**(): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

Toggles the horizontal flipped state of this Game Object.

A Game Object that is flipped horizontally will render inversed on the horizontal axis.
Flipping always takes place from the middle of the texture and does not impact the scale value.
If this Game Object has a physics body, it will not change the body. This is a rendering toggle only.

#### Returns

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.toggleFlipX

#### Defined in

node_modules/phaser/types/phaser.d.ts:25418

___

### toggleFlipY

▸ **toggleFlipY**(): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

Toggles the vertical flipped state of this Game Object.

#### Returns

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.toggleFlipY

#### Defined in

node_modules/phaser/types/phaser.d.ts:25423

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Overrides

Phaser.GameObjects.PathFollower.update

#### Defined in

[src/Platforms/MovingPlatform.ts:89](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Platforms/MovingPlatform.ts#L89)

___

### updateDisplayOrigin

▸ **updateDisplayOrigin**(): [`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

Updates the Display Origin cached values internally stored on this Game Object.
You don't usually call this directly, but it is exposed for edge-cases where you may.

#### Returns

[`MovingPlatform`](Platforms_MovingPlatform.MovingPlatform.md)

#### Inherited from

Phaser.GameObjects.PathFollower.updateDisplayOrigin

#### Defined in

node_modules/phaser/types/phaser.d.ts:25650

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

Phaser.GameObjects.PathFollower.willRender

#### Defined in

node_modules/phaser/types/phaser.d.ts:17313
