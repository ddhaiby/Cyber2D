[cyber2d](../README.md) / [Modules](../modules.md) / [UI/BulletBar](../modules/UI_BulletBar.md) / BulletBar

# Class: BulletBar

[UI/BulletBar](../modules/UI_BulletBar.md).BulletBar

## Hierarchy

- [`CYBR_Bar`](UI_CYBR_Bar.CYBR_Bar.md)

  ↳ **`BulletBar`**

## Table of contents

### Constructors

- [constructor](UI_BulletBar.BulletBar.md#constructor)

### Properties

- [active](UI_BulletBar.BulletBar.md#active)
- [alpha](UI_BulletBar.BulletBar.md#alpha)
- [angle](UI_BulletBar.BulletBar.md#angle)
- [blendMode](UI_BulletBar.BulletBar.md#blendmode)
- [body](UI_BulletBar.BulletBar.md#body)
- [cameraFilter](UI_BulletBar.BulletBar.md#camerafilter)
- [color](UI_BulletBar.BulletBar.md#color)
- [commandBuffer](UI_BulletBar.BulletBar.md#commandbuffer)
- [data](UI_BulletBar.BulletBar.md#data)
- [defaultFillAlpha](UI_BulletBar.BulletBar.md#defaultfillalpha)
- [defaultFillColor](UI_BulletBar.BulletBar.md#defaultfillcolor)
- [defaultPipeline](UI_BulletBar.BulletBar.md#defaultpipeline)
- [defaultStrokeAlpha](UI_BulletBar.BulletBar.md#defaultstrokealpha)
- [defaultStrokeColor](UI_BulletBar.BulletBar.md#defaultstrokecolor)
- [defaultStrokeWidth](UI_BulletBar.BulletBar.md#defaultstrokewidth)
- [depth](UI_BulletBar.BulletBar.md#depth)
- [displayList](UI_BulletBar.BulletBar.md#displaylist)
- [displayOriginX](UI_BulletBar.BulletBar.md#displayoriginx)
- [displayOriginY](UI_BulletBar.BulletBar.md#displayoriginy)
- [hasPostPipeline](UI_BulletBar.BulletBar.md#haspostpipeline)
- [height](UI_BulletBar.BulletBar.md#height)
- [ignoreDestroy](UI_BulletBar.BulletBar.md#ignoredestroy)
- [input](UI_BulletBar.BulletBar.md#input)
- [mask](UI_BulletBar.BulletBar.md#mask)
- [name](UI_BulletBar.BulletBar.md#name)
- [parentContainer](UI_BulletBar.BulletBar.md#parentcontainer)
- [pipeline](UI_BulletBar.BulletBar.md#pipeline)
- [pipelineData](UI_BulletBar.BulletBar.md#pipelinedata)
- [postPipelines](UI_BulletBar.BulletBar.md#postpipelines)
- [renderFlags](UI_BulletBar.BulletBar.md#renderflags)
- [rotation](UI_BulletBar.BulletBar.md#rotation)
- [scale](UI_BulletBar.BulletBar.md#scale)
- [scaleX](UI_BulletBar.BulletBar.md#scalex)
- [scaleY](UI_BulletBar.BulletBar.md#scaley)
- [scene](UI_BulletBar.BulletBar.md#scene)
- [scrollFactorX](UI_BulletBar.BulletBar.md#scrollfactorx)
- [scrollFactorY](UI_BulletBar.BulletBar.md#scrollfactory)
- [state](UI_BulletBar.BulletBar.md#state)
- [tabIndex](UI_BulletBar.BulletBar.md#tabindex)
- [type](UI_BulletBar.BulletBar.md#type)
- [value](UI_BulletBar.BulletBar.md#value)
- [visible](UI_BulletBar.BulletBar.md#visible)
- [w](UI_BulletBar.BulletBar.md#w)
- [width](UI_BulletBar.BulletBar.md#width)
- [x](UI_BulletBar.BulletBar.md#x)
- [y](UI_BulletBar.BulletBar.md#y)
- [z](UI_BulletBar.BulletBar.md#z)
- [RENDER\_MASK](UI_BulletBar.BulletBar.md#render_mask)
- [TargetCamera](UI_BulletBar.BulletBar.md#targetcamera)

### Methods

- [addListener](UI_BulletBar.BulletBar.md#addlistener)
- [addToDisplayList](UI_BulletBar.BulletBar.md#addtodisplaylist)
- [addToUpdateList](UI_BulletBar.BulletBar.md#addtoupdatelist)
- [addedToScene](UI_BulletBar.BulletBar.md#addedtoscene)
- [arc](UI_BulletBar.BulletBar.md#arc)
- [beginPath](UI_BulletBar.BulletBar.md#beginpath)
- [clear](UI_BulletBar.BulletBar.md#clear)
- [clearAlpha](UI_BulletBar.BulletBar.md#clearalpha)
- [clearMask](UI_BulletBar.BulletBar.md#clearmask)
- [closePath](UI_BulletBar.BulletBar.md#closepath)
- [copyPosition](UI_BulletBar.BulletBar.md#copyposition)
- [createBitmapMask](UI_BulletBar.BulletBar.md#createbitmapmask)
- [createGeometryMask](UI_BulletBar.BulletBar.md#creategeometrymask)
- [destroy](UI_BulletBar.BulletBar.md#destroy)
- [disableInteractive](UI_BulletBar.BulletBar.md#disableinteractive)
- [emit](UI_BulletBar.BulletBar.md#emit)
- [eventNames](UI_BulletBar.BulletBar.md#eventnames)
- [fill](UI_BulletBar.BulletBar.md#fill)
- [fillCircle](UI_BulletBar.BulletBar.md#fillcircle)
- [fillCircleShape](UI_BulletBar.BulletBar.md#fillcircleshape)
- [fillEllipse](UI_BulletBar.BulletBar.md#fillellipse)
- [fillEllipseShape](UI_BulletBar.BulletBar.md#fillellipseshape)
- [fillGradientStyle](UI_BulletBar.BulletBar.md#fillgradientstyle)
- [fillPath](UI_BulletBar.BulletBar.md#fillpath)
- [fillPoint](UI_BulletBar.BulletBar.md#fillpoint)
- [fillPointShape](UI_BulletBar.BulletBar.md#fillpointshape)
- [fillPoints](UI_BulletBar.BulletBar.md#fillpoints)
- [fillRect](UI_BulletBar.BulletBar.md#fillrect)
- [fillRectShape](UI_BulletBar.BulletBar.md#fillrectshape)
- [fillRoundedRect](UI_BulletBar.BulletBar.md#fillroundedrect)
- [fillStyle](UI_BulletBar.BulletBar.md#fillstyle)
- [fillTriangle](UI_BulletBar.BulletBar.md#filltriangle)
- [fillTriangleShape](UI_BulletBar.BulletBar.md#filltriangleshape)
- [generateTexture](UI_BulletBar.BulletBar.md#generatetexture)
- [getData](UI_BulletBar.BulletBar.md#getdata)
- [getIndexList](UI_BulletBar.BulletBar.md#getindexlist)
- [getLocalPoint](UI_BulletBar.BulletBar.md#getlocalpoint)
- [getLocalTransformMatrix](UI_BulletBar.BulletBar.md#getlocaltransformmatrix)
- [getParentRotation](UI_BulletBar.BulletBar.md#getparentrotation)
- [getPipelineName](UI_BulletBar.BulletBar.md#getpipelinename)
- [getPostPipeline](UI_BulletBar.BulletBar.md#getpostpipeline)
- [getValue](UI_BulletBar.BulletBar.md#getvalue)
- [getWorldTransformMatrix](UI_BulletBar.BulletBar.md#getworldtransformmatrix)
- [incData](UI_BulletBar.BulletBar.md#incdata)
- [initPipeline](UI_BulletBar.BulletBar.md#initpipeline)
- [lineBetween](UI_BulletBar.BulletBar.md#linebetween)
- [lineGradientStyle](UI_BulletBar.BulletBar.md#linegradientstyle)
- [lineStyle](UI_BulletBar.BulletBar.md#linestyle)
- [lineTo](UI_BulletBar.BulletBar.md#lineto)
- [listenerCount](UI_BulletBar.BulletBar.md#listenercount)
- [listeners](UI_BulletBar.BulletBar.md#listeners)
- [moveTo](UI_BulletBar.BulletBar.md#moveto)
- [off](UI_BulletBar.BulletBar.md#off)
- [on](UI_BulletBar.BulletBar.md#on)
- [once](UI_BulletBar.BulletBar.md#once)
- [preDestroy](UI_BulletBar.BulletBar.md#predestroy)
- [redraw](UI_BulletBar.BulletBar.md#redraw)
- [removeAllListeners](UI_BulletBar.BulletBar.md#removealllisteners)
- [removeFromDisplayList](UI_BulletBar.BulletBar.md#removefromdisplaylist)
- [removeFromUpdateList](UI_BulletBar.BulletBar.md#removefromupdatelist)
- [removeInteractive](UI_BulletBar.BulletBar.md#removeinteractive)
- [removeListener](UI_BulletBar.BulletBar.md#removelistener)
- [removePostPipeline](UI_BulletBar.BulletBar.md#removepostpipeline)
- [removedFromScene](UI_BulletBar.BulletBar.md#removedfromscene)
- [resetPipeline](UI_BulletBar.BulletBar.md#resetpipeline)
- [resetPostPipeline](UI_BulletBar.BulletBar.md#resetpostpipeline)
- [restore](UI_BulletBar.BulletBar.md#restore)
- [rotateCanvas](UI_BulletBar.BulletBar.md#rotatecanvas)
- [save](UI_BulletBar.BulletBar.md#save)
- [scaleCanvas](UI_BulletBar.BulletBar.md#scalecanvas)
- [setActive](UI_BulletBar.BulletBar.md#setactive)
- [setAlpha](UI_BulletBar.BulletBar.md#setalpha)
- [setAngle](UI_BulletBar.BulletBar.md#setangle)
- [setBlendMode](UI_BulletBar.BulletBar.md#setblendmode)
- [setData](UI_BulletBar.BulletBar.md#setdata)
- [setDataEnabled](UI_BulletBar.BulletBar.md#setdataenabled)
- [setDefaultStyles](UI_BulletBar.BulletBar.md#setdefaultstyles)
- [setDepth](UI_BulletBar.BulletBar.md#setdepth)
- [setInteractive](UI_BulletBar.BulletBar.md#setinteractive)
- [setMask](UI_BulletBar.BulletBar.md#setmask)
- [setName](UI_BulletBar.BulletBar.md#setname)
- [setPipeline](UI_BulletBar.BulletBar.md#setpipeline)
- [setPipelineData](UI_BulletBar.BulletBar.md#setpipelinedata)
- [setPosition](UI_BulletBar.BulletBar.md#setposition)
- [setPostPipeline](UI_BulletBar.BulletBar.md#setpostpipeline)
- [setRandomPosition](UI_BulletBar.BulletBar.md#setrandomposition)
- [setRotation](UI_BulletBar.BulletBar.md#setrotation)
- [setScale](UI_BulletBar.BulletBar.md#setscale)
- [setScrollFactor](UI_BulletBar.BulletBar.md#setscrollfactor)
- [setState](UI_BulletBar.BulletBar.md#setstate)
- [setValue](UI_BulletBar.BulletBar.md#setvalue)
- [setVisible](UI_BulletBar.BulletBar.md#setvisible)
- [setW](UI_BulletBar.BulletBar.md#setw)
- [setX](UI_BulletBar.BulletBar.md#setx)
- [setY](UI_BulletBar.BulletBar.md#sety)
- [setZ](UI_BulletBar.BulletBar.md#setz)
- [shutdown](UI_BulletBar.BulletBar.md#shutdown)
- [slice](UI_BulletBar.BulletBar.md#slice)
- [stroke](UI_BulletBar.BulletBar.md#stroke)
- [strokeCircle](UI_BulletBar.BulletBar.md#strokecircle)
- [strokeCircleShape](UI_BulletBar.BulletBar.md#strokecircleshape)
- [strokeEllipse](UI_BulletBar.BulletBar.md#strokeellipse)
- [strokeEllipseShape](UI_BulletBar.BulletBar.md#strokeellipseshape)
- [strokeLineShape](UI_BulletBar.BulletBar.md#strokelineshape)
- [strokePath](UI_BulletBar.BulletBar.md#strokepath)
- [strokePoints](UI_BulletBar.BulletBar.md#strokepoints)
- [strokeRect](UI_BulletBar.BulletBar.md#strokerect)
- [strokeRectShape](UI_BulletBar.BulletBar.md#strokerectshape)
- [strokeRoundedRect](UI_BulletBar.BulletBar.md#strokeroundedrect)
- [strokeTriangle](UI_BulletBar.BulletBar.md#stroketriangle)
- [strokeTriangleShape](UI_BulletBar.BulletBar.md#stroketriangleshape)
- [toJSON](UI_BulletBar.BulletBar.md#tojson)
- [toggleData](UI_BulletBar.BulletBar.md#toggledata)
- [translateCanvas](UI_BulletBar.BulletBar.md#translatecanvas)
- [update](UI_BulletBar.BulletBar.md#update)
- [willRender](UI_BulletBar.BulletBar.md#willrender)

## Constructors

### constructor

• **new BulletBar**(`scene`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | `Scene` |
| `options?` | `Styles` & { `x?`: `number` ; `y?`: `number`  } & { `color?`: `number` ; `height?`: `number` ; `value?`: `number` ; `width?`: `number`  } |

#### Overrides

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[constructor](UI_CYBR_Bar.CYBR_Bar.md#constructor)

#### Defined in

[src/UI/BulletBar.ts:5](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/UI/BulletBar.ts#L5)

## Properties

### active

• **active**: `boolean`

The active state of this Game Object.
A Game Object with an active state of `true` is processed by the Scenes UpdateList, if added to it.
An active object is one which is having its logic and internal systems updated.

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[active](UI_CYBR_Bar.CYBR_Bar.md#active)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17050

___

### alpha

• **alpha**: `number`

The alpha value of the Game Object.

This is a global value, impacting the entire Game Object, not just a region of it.

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[alpha](UI_CYBR_Bar.CYBR_Bar.md#alpha)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19056

___

### angle

• **angle**: `number`

The angle of this Game Object as expressed in degrees.

Phaser uses a right-hand clockwise rotation system, where 0 is right, 90 is down, 180/-180 is left
and -90 is up.

If you prefer to work in radians, see the `rotation` property instead.

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[angle](UI_CYBR_Bar.CYBR_Bar.md#angle)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19362

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

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[blendMode](UI_CYBR_Bar.CYBR_Bar.md#blendmode)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19079

___

### body

• **body**: `Body` \| `StaticBody` \| `BodyType`

If this Game Object is enabled for Arcade or Matter Physics then this property will contain a reference to a Physics Body.

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[body](UI_CYBR_Bar.CYBR_Bar.md#body)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17088

___

### cameraFilter

• **cameraFilter**: `number`

A bitmask that controls if this Game Object is drawn by a Camera or not.
Not usually set directly, instead call `Camera.ignore`, however you can
set this property directly using the Camera.id property:

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[cameraFilter](UI_CYBR_Bar.CYBR_Bar.md#camerafilter)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17077

___

### color

• `Protected` **color**: `number`

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[color](UI_CYBR_Bar.CYBR_Bar.md#color)

#### Defined in

[src/UI/CYBR_Bar.ts:7](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/UI/CYBR_Bar.ts#L7)

___

### commandBuffer

• **commandBuffer**: `any`[]

The array of commands used to render the Graphics.

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[commandBuffer](UI_CYBR_Bar.CYBR_Bar.md#commandbuffer)

#### Defined in

node_modules/phaser/types/phaser.d.ts:18555

___

### data

• **data**: `DataManager`

A Data Manager.
It allows you to store, query and get key/value paired information specific to this Game Object.
`null` by default. Automatically created if you use `getData` or `setData` or `setDataEnabled`.

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[data](UI_CYBR_Bar.CYBR_Bar.md#data)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17063

___

### defaultFillAlpha

• **defaultFillAlpha**: `number`

The default fill alpha for shapes rendered by this Graphics object.

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[defaultFillAlpha](UI_CYBR_Bar.CYBR_Bar.md#defaultfillalpha)

#### Defined in

node_modules/phaser/types/phaser.d.ts:18565

___

### defaultFillColor

• **defaultFillColor**: `number`

The default fill color for shapes rendered by this Graphics object.

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[defaultFillColor](UI_CYBR_Bar.CYBR_Bar.md#defaultfillcolor)

#### Defined in

node_modules/phaser/types/phaser.d.ts:18560

___

### defaultPipeline

• **defaultPipeline**: `WebGLPipeline`

The initial WebGL pipeline of this Game Object.

If you call `resetPipeline` on this Game Object, the pipeline is reset to this default.

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[defaultPipeline](UI_CYBR_Bar.CYBR_Bar.md#defaultpipeline)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19196

___

### defaultStrokeAlpha

• **defaultStrokeAlpha**: `number`

The default stroke alpha for shapes rendered by this Graphics object.

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[defaultStrokeAlpha](UI_CYBR_Bar.CYBR_Bar.md#defaultstrokealpha)

#### Defined in

node_modules/phaser/types/phaser.d.ts:18580

___

### defaultStrokeColor

• **defaultStrokeColor**: `number`

The default stroke color for shapes rendered by this Graphics object.

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[defaultStrokeColor](UI_CYBR_Bar.CYBR_Bar.md#defaultstrokecolor)

#### Defined in

node_modules/phaser/types/phaser.d.ts:18575

___

### defaultStrokeWidth

• **defaultStrokeWidth**: `number`

The default stroke width for shapes rendered by this Graphics object.

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[defaultStrokeWidth](UI_CYBR_Bar.CYBR_Bar.md#defaultstrokewidth)

#### Defined in

node_modules/phaser/types/phaser.d.ts:18570

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

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[depth](UI_CYBR_Bar.CYBR_Bar.md#depth)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19116

___

### displayList

• **displayList**: `DisplayList` \| `Layer`

Holds a reference to the Display List that contains this Game Object.

This is set automatically when this Game Object is added to a Scene or Layer.

You should treat this property as being read-only.

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[displayList](UI_CYBR_Bar.CYBR_Bar.md#displaylist)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17014

___

### displayOriginX

• **displayOriginX**: `number`

The horizontal display origin of the Graphics.

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[displayOriginX](UI_CYBR_Bar.CYBR_Bar.md#displayoriginx)

#### Defined in

node_modules/phaser/types/phaser.d.ts:18545

___

### displayOriginY

• **displayOriginY**: `number`

The vertical display origin of the Graphics.

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[displayOriginY](UI_CYBR_Bar.CYBR_Bar.md#displayoriginy)

#### Defined in

node_modules/phaser/types/phaser.d.ts:18550

___

### hasPostPipeline

• **hasPostPipeline**: `boolean`

Does this Game Object have any Post Pipelines set?

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[hasPostPipeline](UI_CYBR_Bar.CYBR_Bar.md#haspostpipeline)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19206

___

### height

• **height**: `number`

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[height](UI_CYBR_Bar.CYBR_Bar.md#height)

#### Defined in

[src/Utils/CYBR_Graphics.ts:4](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Utils/CYBR_Graphics.ts#L4)

___

### ignoreDestroy

• **ignoreDestroy**: `boolean`

This Game Object will ignore all calls made to its destroy method if this flag is set to `true`.
This includes calls that may come from a Group, Container or the Scene itself.
While it allows you to persist a Game Object across Scenes, please understand you are entirely
responsible for managing references to and from this Game Object.

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[ignoreDestroy](UI_CYBR_Bar.CYBR_Bar.md#ignoredestroy)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17096

___

### input

• **input**: `InteractiveObject`

If this Game Object is enabled for input then this property will contain an InteractiveObject instance.
Not usually set directly. Instead call `GameObject.setInteractive()`.

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[input](UI_CYBR_Bar.CYBR_Bar.md#input)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17083

___

### mask

• **mask**: `BitmapMask` \| `GeometryMask`

The Mask this Game Object is using during render.

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[mask](UI_CYBR_Bar.CYBR_Bar.md#mask)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19135

___

### name

• **name**: `string`

The name of this Game Object.
Empty by default and never populated by Phaser, this is left for developers to use.

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[name](UI_CYBR_Bar.CYBR_Bar.md#name)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17043

___

### parentContainer

• **parentContainer**: `Container`

The parent Container of this Game Object, if it has one.

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[parentContainer](UI_CYBR_Bar.CYBR_Bar.md#parentcontainer)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17037

___

### pipeline

• **pipeline**: `WebGLPipeline`

The current WebGL pipeline of this Game Object.

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[pipeline](UI_CYBR_Bar.CYBR_Bar.md#pipeline)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19201

___

### pipelineData

• **pipelineData**: `object`

An object to store pipeline specific data in, to be read by the pipelines this Game Object uses.

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[pipelineData](UI_CYBR_Bar.CYBR_Bar.md#pipelinedata)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19221

___

### postPipelines

• **postPipelines**: `PostFXPipeline`[]

The WebGL Post FX Pipelines this Game Object uses for post-render effects.

The pipelines are processed in the order in which they appear in this array.

If you modify this array directly, be sure to set the
`hasPostPipeline` property accordingly.

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[postPipelines](UI_CYBR_Bar.CYBR_Bar.md#postpipelines)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19216

___

### renderFlags

• **renderFlags**: `number`

The flags that are compared against `RENDER_MASK` to determine if this Game Object will render or not.
The bits are 0001 | 0010 | 0100 | 1000 set by the components Visible, Alpha, Transform and Texture respectively.
If those components are not used by your custom class then you can use this bitmask as you wish.

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[renderFlags](UI_CYBR_Bar.CYBR_Bar.md#renderflags)

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

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[rotation](UI_CYBR_Bar.CYBR_Bar.md#rotation)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19372

___

### scale

• **scale**: `number`

This is a special setter that allows you to set both the horizontal and vertical scale of this Game Object
to the same value, at the same time. When reading this value the result returned is `(scaleX + scaleY) / 2`.

Use of this property implies you wish the horizontal and vertical scales to be equal to each other. If this
isn't the case, use the `scaleX` or `scaleY` properties instead.

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[scale](UI_CYBR_Bar.CYBR_Bar.md#scale)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19342

___

### scaleX

• **scaleX**: `number`

The horizontal scale of this Game Object.

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[scaleX](UI_CYBR_Bar.CYBR_Bar.md#scalex)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19347

___

### scaleY

• **scaleY**: `number`

The vertical scale of this Game Object.

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[scaleY](UI_CYBR_Bar.CYBR_Bar.md#scaley)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19352

___

### scene

• **scene**: `Scene`

A reference to the Scene to which this Game Object belongs.

Game Objects can only belong to one Scene.

You should consider this property as being read-only. You cannot move a
Game Object to another Scene by simply changing it.

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[scene](UI_CYBR_Bar.CYBR_Bar.md#scene)

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

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[scrollFactorX](UI_CYBR_Bar.CYBR_Bar.md#scrollfactorx)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19518

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

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[scrollFactorY](UI_CYBR_Bar.CYBR_Bar.md#scrollfactory)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19537

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

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[state](UI_CYBR_Bar.CYBR_Bar.md#state)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17032

___

### tabIndex

• **tabIndex**: `number`

The Tab Index of the Game Object.
Reserved for future use by plugins and the Input Manager.

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[tabIndex](UI_CYBR_Bar.CYBR_Bar.md#tabindex)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17056

___

### type

• **type**: `string`

A textual representation of this Game Object, i.e. `sprite`.
Used internally by Phaser but is available for your own custom classes to populate.

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[type](UI_CYBR_Bar.CYBR_Bar.md#type)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17020

___

### value

• `Protected` **value**: `number`

Range value from 0 to 1

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[value](UI_CYBR_Bar.CYBR_Bar.md#value)

#### Defined in

[src/UI/CYBR_Bar.ts:6](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/UI/CYBR_Bar.ts#L6)

___

### visible

• **visible**: `boolean`

The visible state of the Game Object.

An invisible Game Object will skip rendering, but will still process update logic.

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[visible](UI_CYBR_Bar.CYBR_Bar.md#visible)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19491

___

### w

• **w**: `number`

The w position of this Game Object.

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[w](UI_CYBR_Bar.CYBR_Bar.md#w)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19333

___

### width

• **width**: `number`

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[width](UI_CYBR_Bar.CYBR_Bar.md#width)

#### Defined in

[src/Utils/CYBR_Graphics.ts:3](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Utils/CYBR_Graphics.ts#L3)

___

### x

• **x**: `number`

The x position of this Game Object.

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[x](UI_CYBR_Bar.CYBR_Bar.md#x)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19315

___

### y

• **y**: `number`

The y position of this Game Object.

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[y](UI_CYBR_Bar.CYBR_Bar.md#y)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19320

___

### z

• **z**: `number`

The z position of this Game Object.

Note: The z position does not control the rendering order of 2D Game Objects. Use
Phaser.GameObjects.Components.Depth#depth instead.

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[z](UI_CYBR_Bar.CYBR_Bar.md#z)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19328

___

### RENDER\_MASK

▪ `Static` `Readonly` **RENDER\_MASK**: `number`

The bitmask that `GameObject.renderFlags` is compared against to determine if the Game Object will render or not.

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[RENDER_MASK](UI_CYBR_Bar.CYBR_Bar.md#render_mask)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17400

___

### TargetCamera

▪ `Static` **TargetCamera**: `Camera`

A Camera used specifically by the Graphics system for rendering to textures.

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[TargetCamera](UI_CYBR_Bar.CYBR_Bar.md#targetcamera)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19035

## Methods

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. Default this. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[addListener](UI_CYBR_Bar.CYBR_Bar.md#addlistener)

#### Defined in

node_modules/phaser/types/phaser.d.ts:9588

___

### addToDisplayList

▸ **addToDisplayList**(`displayList?`): [`BulletBar`](UI_BulletBar.BulletBar.md)

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

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[addToDisplayList](UI_CYBR_Bar.CYBR_Bar.md#addtodisplaylist)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17342

___

### addToUpdateList

▸ **addToUpdateList**(): [`BulletBar`](UI_BulletBar.BulletBar.md)

Adds this Game Object to the Update List belonging to the Scene.

When a Game Object is added to the Update List it will have its `preUpdate` method called
every game frame. This method is passed two parameters: `delta` and `time`.

If you wish to run your own logic within `preUpdate` then you should always call
`preUpdate.super(delta, time)` within it, or it may fail to process required operations,
such as Sprite animations.

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[addToUpdateList](UI_CYBR_Bar.CYBR_Bar.md#addtoupdatelist)

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

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[addedToScene](UI_CYBR_Bar.CYBR_Bar.md#addedtoscene)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17285

___

### arc

▸ **arc**(`x`, `y`, `radius`, `startAngle`, `endAngle`, `anticlockwise?`, `overshoot?`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Draw an arc.

This method can be used to create circles, or parts of circles.

Make sure you call `beginPath` before starting the arc unless you wish for the arc to automatically
close when filled or stroked.

Use the optional `overshoot` argument increase the number of iterations that take place when
the arc is rendered in WebGL. This is useful if you're drawing an arc with an especially thick line,
as it will allow the arc to fully join-up. Try small values at first, i.e. 0.01.

Call Phaser.GameObjects.Graphics#fillPath or Phaser.GameObjects.Graphics#strokePath after calling
this method to draw the arc.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The x coordinate of the center of the circle. |
| `y` | `number` | The y coordinate of the center of the circle. |
| `radius` | `number` | The radius of the circle. |
| `startAngle` | `number` | The starting angle, in radians. |
| `endAngle` | `number` | The ending angle, in radians. |
| `anticlockwise?` | `boolean` | Whether the drawing should be anticlockwise or clockwise. Default false. |
| `overshoot?` | `number` | This value allows you to increase the segment iterations in WebGL rendering. Useful if the arc has a thick stroke and needs to overshoot to join-up cleanly. Use small numbers such as 0.01 to start with and increase as needed. Default 0. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[arc](UI_CYBR_Bar.CYBR_Bar.md#arc)

#### Defined in

node_modules/phaser/types/phaser.d.ts:18929

___

### beginPath

▸ **beginPath**(): [`BulletBar`](UI_BulletBar.BulletBar.md)

Start a new shape path.

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[beginPath](UI_CYBR_Bar.CYBR_Bar.md#beginpath)

#### Defined in

node_modules/phaser/types/phaser.d.ts:18652

___

### clear

▸ **clear**(): [`BulletBar`](UI_BulletBar.BulletBar.md)

Clear the command buffer and reset the fill style and line style to their defaults.

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[clear](UI_CYBR_Bar.CYBR_Bar.md#clear)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19007

___

### clearAlpha

▸ **clearAlpha**(): [`BulletBar`](UI_BulletBar.BulletBar.md)

Clears all alpha values associated with this Game Object.

Immediately sets the alpha levels back to 1 (fully opaque).

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[clearAlpha](UI_CYBR_Bar.CYBR_Bar.md#clearalpha)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19042

___

### clearMask

▸ **clearMask**(`destroyMask?`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Clears the mask that this Game Object was using.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destroyMask?` | `boolean` | Destroy the mask before clearing it? Default false. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[clearMask](UI_CYBR_Bar.CYBR_Bar.md#clearmask)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19158

___

### closePath

▸ **closePath**(): [`BulletBar`](UI_BulletBar.BulletBar.md)

Close the current path.

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[closePath](UI_CYBR_Bar.CYBR_Bar.md#closepath)

#### Defined in

node_modules/phaser/types/phaser.d.ts:18657

___

### copyPosition

▸ **copyPosition**(`source`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Copies an object's coordinates to this Game Object's position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `Vector2Like` \| `Vector3Like` \| `Vector4Like` | An object with numeric 'x', 'y', 'z', or 'w' properties. Undefined values are not copied. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[copyPosition](UI_CYBR_Bar.CYBR_Bar.md#copyposition)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19387

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

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[createBitmapMask](UI_CYBR_Bar.CYBR_Bar.md#createbitmapmask)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19175

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

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[createGeometryMask](UI_CYBR_Bar.CYBR_Bar.md#creategeometrymask)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19189

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

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[destroy](UI_CYBR_Bar.CYBR_Bar.md#destroy)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17395

___

### disableInteractive

▸ **disableInteractive**(): [`BulletBar`](UI_BulletBar.BulletBar.md)

If this Game Object has previously been enabled for input, this will disable it.

An object that is disabled for input stops processing or being considered for
input events, but can be turned back on again at any time by simply calling
`setInteractive()` with no arguments provided.

If want to completely remove interaction from this Game Object then use `removeInteractive` instead.

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[disableInteractive](UI_CYBR_Bar.CYBR_Bar.md#disableinteractive)

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

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[emit](UI_CYBR_Bar.CYBR_Bar.md#emit)

#### Defined in

node_modules/phaser/types/phaser.d.ts:9572

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[eventNames](UI_CYBR_Bar.CYBR_Bar.md#eventnames)

#### Defined in

node_modules/phaser/types/phaser.d.ts:9553

___

### fill

▸ **fill**(): [`BulletBar`](UI_BulletBar.BulletBar.md)

Fill the current path.

This is an alias for `Graphics.fillPath` and does the same thing.
It was added to match the CanvasRenderingContext 2D API.

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[fill](UI_CYBR_Bar.CYBR_Bar.md#fill)

#### Defined in

node_modules/phaser/types/phaser.d.ts:18670

___

### fillCircle

▸ **fillCircle**(`x`, `y`, `radius`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Fill a circle with the given position and radius.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The x coordinate of the center of the circle. |
| `y` | `number` | The y coordinate of the center of the circle. |
| `radius` | `number` | The radius of the circle. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[fillCircle](UI_CYBR_Bar.CYBR_Bar.md#fillcircle)

#### Defined in

node_modules/phaser/types/phaser.d.ts:18703

___

### fillCircleShape

▸ **fillCircleShape**(`circle`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Fill the given circle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `circle` | `Circle` | The circle to fill. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[fillCircleShape](UI_CYBR_Bar.CYBR_Bar.md#fillcircleshape)

#### Defined in

node_modules/phaser/types/phaser.d.ts:18689

___

### fillEllipse

▸ **fillEllipse**(`x`, `y`, `width`, `height`, `smoothness?`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Fill an ellipse with the given position and size.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The x coordinate of the center of the ellipse. |
| `y` | `number` | The y coordinate of the center of the ellipse. |
| `width` | `number` | The width of the ellipse. |
| `height` | `number` | The height of the ellipse. |
| `smoothness?` | `number` | The number of points to draw the ellipse with. Default 32. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[fillEllipse](UI_CYBR_Bar.CYBR_Bar.md#fillellipse)

#### Defined in

node_modules/phaser/types/phaser.d.ts:18905

___

### fillEllipseShape

▸ **fillEllipseShape**(`ellipse`, `smoothness?`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Fill the given ellipse.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ellipse` | `Ellipse` | The ellipse to fill. |
| `smoothness?` | `number` | The number of points to draw the ellipse with. Default 32. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[fillEllipseShape](UI_CYBR_Bar.CYBR_Bar.md#fillellipseshape)

#### Defined in

node_modules/phaser/types/phaser.d.ts:18895

___

### fillGradientStyle

▸ **fillGradientStyle**(`topLeft`, `topRight`, `bottomLeft`, `bottomRight`, `alphaTopLeft?`, `alphaTopRight?`, `alphaBottomLeft?`, `alphaBottomRight?`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Sets a gradient fill style. This is a WebGL only feature.

The gradient color values represent the 4 corners of an untransformed rectangle.
The gradient is used to color all filled shapes and paths drawn after calling this method.
If you wish to turn a gradient off, call `fillStyle` and provide a new single fill color.

When filling a triangle only the first 3 color values provided are used for the 3 points of a triangle.

This feature is best used only on rectangles and triangles. All other shapes will give strange results.

Note that for objects such as arcs or ellipses, or anything which is made out of triangles, each triangle used
will be filled with a gradient on its own. There is no ability to gradient fill a shape or path as a single
entity at this time.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `topLeft` | `number` | The top left fill color. |
| `topRight` | `number` | The top right fill color. |
| `bottomLeft` | `number` | The bottom left fill color. |
| `bottomRight` | `number` | The bottom right fill color. Not used when filling triangles. |
| `alphaTopLeft?` | `number` | The top left alpha value. If you give only this value, it's used for all corners. Default 1. |
| `alphaTopRight?` | `number` | The top right alpha value. Default 1. |
| `alphaBottomLeft?` | `number` | The bottom left alpha value. Default 1. |
| `alphaBottomRight?` | `number` | The bottom right alpha value. Default 1. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[fillGradientStyle](UI_CYBR_Bar.CYBR_Bar.md#fillgradientstyle)

#### Defined in

node_modules/phaser/types/phaser.d.ts:18626

___

### fillPath

▸ **fillPath**(): [`BulletBar`](UI_BulletBar.BulletBar.md)

Fill the current path.

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[fillPath](UI_CYBR_Bar.CYBR_Bar.md#fillpath)

#### Defined in

node_modules/phaser/types/phaser.d.ts:18662

___

### fillPoint

▸ **fillPoint**(`x`, `y`, `size?`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Fill a point at the given position.

Draws a square at the given position, 1 pixel in size by default.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The x coordinate of the point. |
| `y` | `number` | The y coordinate of the point. |
| `size?` | `number` | The size of the square to draw. Default 1. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[fillPoint](UI_CYBR_Bar.CYBR_Bar.md#fillpoint)

#### Defined in

node_modules/phaser/types/phaser.d.ts:18780

___

### fillPointShape

▸ **fillPointShape**(`point`, `size?`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Fill the given point.

Draws a square at the given position, 1 pixel in size by default.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | `object` \| `Vector2` \| `Point` | The point to fill. |
| `size?` | `number` | The size of the square to draw. Default 1. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[fillPointShape](UI_CYBR_Bar.CYBR_Bar.md#fillpointshape)

#### Defined in

node_modules/phaser/types/phaser.d.ts:18770

___

### fillPoints

▸ **fillPoints**(`points`, `closeShape?`, `closePath?`, `endIndex?`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Fill the shape represented by the given array of points.

Pass `closeShape` to automatically close the shape by joining the last to the first point.

Pass `closePath` to automatically close the path before it is filled.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `points` | `any`[] \| `Point`[] | The points to fill. |
| `closeShape?` | `boolean` | When `true`, the shape is closed by joining the last point to the first point. Default false. |
| `closePath?` | `boolean` | When `true`, the path is closed before being stroked. Default false. |
| `endIndex?` | `number` | The index of `points` to stop at. Defaults to `points.length`. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[fillPoints](UI_CYBR_Bar.CYBR_Bar.md#fillpoints)

#### Defined in

node_modules/phaser/types/phaser.d.ts:18871

___

### fillRect

▸ **fillRect**(`x`, `y`, `width`, `height`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Fill a rectangle with the given position and size.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The x coordinate of the top-left of the rectangle. |
| `y` | `number` | The y coordinate of the top-left of the rectangle. |
| `width` | `number` | The width of the rectangle. |
| `height` | `number` | The height of the rectangle. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[fillRect](UI_CYBR_Bar.CYBR_Bar.md#fillrect)

#### Defined in

node_modules/phaser/types/phaser.d.ts:18732

___

### fillRectShape

▸ **fillRectShape**(`rect`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Fill the given rectangle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rect` | `Rectangle` | The rectangle to fill. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[fillRectShape](UI_CYBR_Bar.CYBR_Bar.md#fillrectshape)

#### Defined in

node_modules/phaser/types/phaser.d.ts:18717

___

### fillRoundedRect

▸ **fillRoundedRect**(`x`, `y`, `width`, `height`, `radius?`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Fill a rounded rectangle with the given position, size and radius.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The x coordinate of the top-left of the rectangle. |
| `y` | `number` | The y coordinate of the top-left of the rectangle. |
| `width` | `number` | The width of the rectangle. |
| `height` | `number` | The height of the rectangle. |
| `radius?` | `number` \| `RoundedRectRadius` | The corner radius; It can also be an object to specify different radii for corners. Default 20. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[fillRoundedRect](UI_CYBR_Bar.CYBR_Bar.md#fillroundedrect)

#### Defined in

node_modules/phaser/types/phaser.d.ts:18751

___

### fillStyle

▸ **fillStyle**(`color`, `alpha?`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Set the current fill style.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `number` | The fill color. |
| `alpha?` | `number` | The fill alpha. Default 1. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[fillStyle](UI_CYBR_Bar.CYBR_Bar.md#fillstyle)

#### Defined in

node_modules/phaser/types/phaser.d.ts:18601

___

### fillTriangle

▸ **fillTriangle**(`x0`, `y0`, `x1`, `y1`, `x2`, `y2`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Fill a triangle with the given points.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x0` | `number` | The x coordinate of the first point. |
| `y0` | `number` | The y coordinate of the first point. |
| `x1` | `number` | The x coordinate of the second point. |
| `y1` | `number` | The y coordinate of the second point. |
| `x2` | `number` | The x coordinate of the third point. |
| `y2` | `number` | The y coordinate of the third point. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[fillTriangle](UI_CYBR_Bar.CYBR_Bar.md#filltriangle)

#### Defined in

node_modules/phaser/types/phaser.d.ts:18803

___

### fillTriangleShape

▸ **fillTriangleShape**(`triangle`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Fill the given triangle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `triangle` | `Triangle` | The triangle to fill. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[fillTriangleShape](UI_CYBR_Bar.CYBR_Bar.md#filltriangleshape)

#### Defined in

node_modules/phaser/types/phaser.d.ts:18786

___

### generateTexture

▸ **generateTexture**(`key`, `width?`, `height?`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Generate a texture from this Graphics object.

If `key` is a string it'll generate a new texture using it and add it into the
Texture Manager (assuming no key conflict happens).

If `key` is a Canvas it will draw the texture to that canvas context. Note that it will NOT
automatically upload it to the GPU in WebGL mode.

Please understand that the texture is created via the Canvas API of the browser, therefore some
Graphics features, such as `fillGradientStyle`, will not appear on the resulting texture,
as they're unsupported by the Canvas API.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` \| `HTMLCanvasElement` | The key to store the texture with in the Texture Manager, or a Canvas to draw to. |
| `width?` | `number` | The width of the graphics to generate. |
| `height?` | `number` | The height of the graphics to generate. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[generateTexture](UI_CYBR_Bar.CYBR_Bar.md#generatetexture)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19025

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

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[getData](UI_CYBR_Bar.CYBR_Bar.md#getdata)

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

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[getIndexList](UI_CYBR_Bar.CYBR_Bar.md#getindexlist)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17323

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

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[getLocalPoint](UI_CYBR_Bar.CYBR_Bar.md#getlocalpoint)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19477

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

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[getLocalTransformMatrix](UI_CYBR_Bar.CYBR_Bar.md#getlocaltransformmatrix)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19454

___

### getParentRotation

▸ **getParentRotation**(): `number`

Gets the sum total rotation of all of this Game Objects parent Containers.

The returned value is in radians and will be zero if this Game Object has no parent container.

#### Returns

`number`

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[getParentRotation](UI_CYBR_Bar.CYBR_Bar.md#getparentrotation)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19484

___

### getPipelineName

▸ **getPipelineName**(): `string`

Gets the name of the WebGL Pipeline this Game Object is currently using.

#### Returns

`string`

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[getPipelineName](UI_CYBR_Bar.CYBR_Bar.md#getpipelinename)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19310

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

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[getPostPipeline](UI_CYBR_Bar.CYBR_Bar.md#getpostpipeline)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19283

___

### getValue

▸ **getValue**(): `number`

#### Returns

`number`

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[getValue](UI_CYBR_Bar.CYBR_Bar.md#getvalue)

#### Defined in

[src/UI/CYBR_Bar.ts:23](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/UI/CYBR_Bar.ts#L23)

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

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[getWorldTransformMatrix](UI_CYBR_Bar.CYBR_Bar.md#getworldtransformmatrix)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19461

___

### incData

▸ **incData**(`key`, `data?`): [`BulletBar`](UI_BulletBar.BulletBar.md)

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

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[incData](UI_CYBR_Bar.CYBR_Bar.md#incdata)

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

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[initPipeline](UI_CYBR_Bar.CYBR_Bar.md#initpipeline)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19229

___

### lineBetween

▸ **lineBetween**(`x1`, `y1`, `x2`, `y2`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Draw a line between the given points.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x1` | `number` | The x coordinate of the start point of the line. |
| `y1` | `number` | The y coordinate of the start point of the line. |
| `x2` | `number` | The x coordinate of the end point of the line. |
| `y2` | `number` | The y coordinate of the end point of the line. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[lineBetween](UI_CYBR_Bar.CYBR_Bar.md#linebetween)

#### Defined in

node_modules/phaser/types/phaser.d.ts:18829

___

### lineGradientStyle

▸ **lineGradientStyle**(`lineWidth`, `topLeft`, `topRight`, `bottomLeft`, `bottomRight`, `alpha?`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Sets a gradient line style. This is a WebGL only feature.

The gradient color values represent the 4 corners of an untransformed rectangle.
The gradient is used to color all stroked shapes and paths drawn after calling this method.
If you wish to turn a gradient off, call `lineStyle` and provide a new single line color.

This feature is best used only on single lines. All other shapes will give strange results.

Note that for objects such as arcs or ellipses, or anything which is made out of triangles, each triangle used
will be filled with a gradient on its own. There is no ability to gradient stroke a shape or path as a single
entity at this time.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lineWidth` | `number` | The stroke width. |
| `topLeft` | `number` | The tint being applied to the top-left of the Game Object. |
| `topRight` | `number` | The tint being applied to the top-right of the Game Object. |
| `bottomLeft` | `number` | The tint being applied to the bottom-left of the Game Object. |
| `bottomRight` | `number` | The tint being applied to the bottom-right of the Game Object. |
| `alpha?` | `number` | The fill alpha. Default 1. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[lineGradientStyle](UI_CYBR_Bar.CYBR_Bar.md#linegradientstyle)

#### Defined in

node_modules/phaser/types/phaser.d.ts:18647

___

### lineStyle

▸ **lineStyle**(`lineWidth`, `color`, `alpha?`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Set the current line style.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lineWidth` | `number` | The stroke width. |
| `color` | `number` | The stroke color. |
| `alpha?` | `number` | The stroke alpha. Default 1. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[lineStyle](UI_CYBR_Bar.CYBR_Bar.md#linestyle)

#### Defined in

node_modules/phaser/types/phaser.d.ts:18594

___

### lineTo

▸ **lineTo**(`x`, `y`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Draw a line from the current drawing position to the given position.

Moves the current drawing position to the given position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The x coordinate to draw the line to. |
| `y` | `number` | The y coordinate to draw the line to. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[lineTo](UI_CYBR_Bar.CYBR_Bar.md#lineto)

#### Defined in

node_modules/phaser/types/phaser.d.ts:18838

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

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[listenerCount](UI_CYBR_Bar.CYBR_Bar.md#listenercount)

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

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[listeners](UI_CYBR_Bar.CYBR_Bar.md#listeners)

#### Defined in

node_modules/phaser/types/phaser.d.ts:9559

___

### moveTo

▸ **moveTo**(`x`, `y`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Move the current drawing position to the given position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The x coordinate to move to. |
| `y` | `number` | The y coordinate to move to. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[moveTo](UI_CYBR_Bar.CYBR_Bar.md#moveto)

#### Defined in

node_modules/phaser/types/phaser.d.ts:18845

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[off](UI_CYBR_Bar.CYBR_Bar.md#off)

#### Defined in

node_modules/phaser/types/phaser.d.ts:9614

___

### on

▸ **on**(`event`, `fn`, `context?`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. Default this. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[on](UI_CYBR_Bar.CYBR_Bar.md#on)

#### Defined in

node_modules/phaser/types/phaser.d.ts:9580

___

### once

▸ **once**(`event`, `fn`, `context?`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. Default this. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[once](UI_CYBR_Bar.CYBR_Bar.md#once)

#### Defined in

node_modules/phaser/types/phaser.d.ts:9596

___

### preDestroy

▸ `Protected` **preDestroy**(): `void`

Internal destroy handler, called as part of the destroy process.

#### Returns

`void`

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[preDestroy](UI_CYBR_Bar.CYBR_Bar.md#predestroy)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19030

___

### redraw

▸ **redraw**(): `void`

#### Returns

`void`

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[redraw](UI_CYBR_Bar.CYBR_Bar.md#redraw)

#### Defined in

[src/UI/CYBR_Bar.ts:28](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/UI/CYBR_Bar.ts#L28)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[removeAllListeners](UI_CYBR_Bar.CYBR_Bar.md#removealllisteners)

#### Defined in

node_modules/phaser/types/phaser.d.ts:9620

___

### removeFromDisplayList

▸ **removeFromDisplayList**(): [`BulletBar`](UI_BulletBar.BulletBar.md)

Removes this Game Object from the Display List it is currently on.

A Game Object can only exist on one Display List at any given time, but may move freely removed
and added back at a later stage.

You can query which list it is on by looking at the `Phaser.GameObjects.GameObject#displayList` property.

If a Game Object isn't on any Display List, it will not be rendered. If you just wish to temporarly
disable it from rendering, consider using the `setVisible` method, instead.

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[removeFromDisplayList](UI_CYBR_Bar.CYBR_Bar.md#removefromdisplaylist)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17367

___

### removeFromUpdateList

▸ **removeFromUpdateList**(): [`BulletBar`](UI_BulletBar.BulletBar.md)

Removes this Game Object from the Scene's Update List.

When a Game Object is on the Update List, it will have its `preUpdate` method called
every game frame. Calling this method will remove it from the list, preventing this.

Removing a Game Object from the Update List will stop most internal functions working.
For example, removing a Sprite from the Update List will prevent it from being able to
run animations.

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[removeFromUpdateList](UI_CYBR_Bar.CYBR_Bar.md#removefromupdatelist)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17379

___

### removeInteractive

▸ **removeInteractive**(): [`BulletBar`](UI_BulletBar.BulletBar.md)

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

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[removeInteractive](UI_CYBR_Bar.CYBR_Bar.md#removeinteractive)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17275

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[removeListener](UI_CYBR_Bar.CYBR_Bar.md#removelistener)

#### Defined in

node_modules/phaser/types/phaser.d.ts:9605

___

### removePostPipeline

▸ **removePostPipeline**(`pipeline`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Removes a type of Post Pipeline instances from this Game Object, based on the given name, and destroys them.

If you wish to remove all Post Pipelines use the `resetPostPipeline` method instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pipeline` | `string` \| `PostFXPipeline` | The string-based name of the pipeline, or a pipeline class. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[removePostPipeline](UI_CYBR_Bar.CYBR_Bar.md#removepostpipeline)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19305

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

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[removedFromScene](UI_CYBR_Bar.CYBR_Bar.md#removedfromscene)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17295

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

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[resetPipeline](UI_CYBR_Bar.CYBR_Bar.md#resetpipeline)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19290

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

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[resetPostPipeline](UI_CYBR_Bar.CYBR_Bar.md#resetpostpipeline)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19297

___

### restore

▸ **restore**(): [`BulletBar`](UI_BulletBar.BulletBar.md)

Restores the most recently saved state of the Graphics by popping from the state stack.

Use Phaser.GameObjects.Graphics#save to save the current state, and call this afterwards to restore that state.

If there is no saved state, this command does nothing.

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[restore](UI_CYBR_Bar.CYBR_Bar.md#restore)

#### Defined in

node_modules/phaser/types/phaser.d.ts:18964

___

### rotateCanvas

▸ **rotateCanvas**(`radians`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Inserts a rotation command into this Graphics objects command buffer.

All objects drawn _after_ calling this method will be rotated
by the given amount.

This does not change the rotation of the Graphics object itself,
only of the objects drawn by it after calling this method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `radians` | `number` | The rotation angle, in radians. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[rotateCanvas](UI_CYBR_Bar.CYBR_Bar.md#rotatecanvas)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19002

___

### save

▸ **save**(): [`BulletBar`](UI_BulletBar.BulletBar.md)

Saves the state of the Graphics by pushing the current state onto a stack.

The most recently saved state can then be restored with Phaser.GameObjects.Graphics#restore.

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[save](UI_CYBR_Bar.CYBR_Bar.md#save)

#### Defined in

node_modules/phaser/types/phaser.d.ts:18955

___

### scaleCanvas

▸ **scaleCanvas**(`x`, `y`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Inserts a scale command into this Graphics objects command buffer.

All objects drawn _after_ calling this method will be scaled
by the given amount.

This does not change the scale of the Graphics object itself,
only of the objects drawn by it after calling this method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The horizontal scale to apply. |
| `y` | `number` | The vertical scale to apply. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[scaleCanvas](UI_CYBR_Bar.CYBR_Bar.md#scalecanvas)

#### Defined in

node_modules/phaser/types/phaser.d.ts:18990

___

### setActive

▸ **setActive**(`value`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Sets the `active` property of this Game Object and returns this Game Object for further chaining.
A Game Object with its `active` property set to `true` will be updated by the Scenes UpdateList.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | True if this Game Object should be set as active, false if not. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[setActive](UI_CYBR_Bar.CYBR_Bar.md#setactive)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17103

___

### setAlpha

▸ **setAlpha**(`value?`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Set the Alpha level of this Game Object. The alpha controls the opacity of the Game Object as it renders.
Alpha values are provided as a float between 0, fully transparent, and 1, fully opaque.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value?` | `number` | The alpha value applied across the whole Game Object. Default 1. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[setAlpha](UI_CYBR_Bar.CYBR_Bar.md#setalpha)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19049

___

### setAngle

▸ **setAngle**(`degrees?`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Sets the angle of this Game Object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `degrees?` | `number` | The rotation of this Game Object, in degrees. Default 0. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[setAngle](UI_CYBR_Bar.CYBR_Bar.md#setangle)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19414

___

### setBlendMode

▸ **setBlendMode**(`value`): [`BulletBar`](UI_BulletBar.BulletBar.md)

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

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[setBlendMode](UI_CYBR_Bar.CYBR_Bar.md#setblendmode)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19103

___

### setData

▸ **setData**(`key`, `data?`): [`BulletBar`](UI_BulletBar.BulletBar.md)

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

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[setData](UI_CYBR_Bar.CYBR_Bar.md#setdata)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17171

___

### setDataEnabled

▸ **setDataEnabled**(): [`BulletBar`](UI_BulletBar.BulletBar.md)

Adds a Data Manager component to this Game Object.

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[setDataEnabled](UI_CYBR_Bar.CYBR_Bar.md#setdataenabled)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17128

___

### setDefaultStyles

▸ **setDefaultStyles**(`options`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Set the default style settings for this Graphics object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Styles` | The styles to set as defaults. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[setDefaultStyles](UI_CYBR_Bar.CYBR_Bar.md#setdefaultstyles)

#### Defined in

node_modules/phaser/types/phaser.d.ts:18586

___

### setDepth

▸ **setDepth**(`value`): [`BulletBar`](UI_BulletBar.BulletBar.md)

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

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[setDepth](UI_CYBR_Bar.CYBR_Bar.md#setdepth)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19130

___

### setInteractive

▸ **setInteractive**(`hitArea?`, `callback?`, `dropZone?`): [`BulletBar`](UI_BulletBar.BulletBar.md)

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

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[setInteractive](UI_CYBR_Bar.CYBR_Bar.md#setinteractive)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17242

___

### setMask

▸ **setMask**(`mask`): [`BulletBar`](UI_BulletBar.BulletBar.md)

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

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[setMask](UI_CYBR_Bar.CYBR_Bar.md#setmask)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19152

___

### setName

▸ **setName**(`value`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Sets the `name` property of this Game Object and returns this Game Object for further chaining.
The `name` property is not populated by Phaser and is presented for your own use.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | The name to be given to this Game Object. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[setName](UI_CYBR_Bar.CYBR_Bar.md#setname)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17110

___

### setPipeline

▸ **setPipeline**(`pipeline`, `pipelineData?`, `copyData?`): [`BulletBar`](UI_BulletBar.BulletBar.md)

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

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[setPipeline](UI_CYBR_Bar.CYBR_Bar.md#setpipeline)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19241

___

### setPipelineData

▸ **setPipelineData**(`key`, `value?`): [`BulletBar`](UI_BulletBar.BulletBar.md)

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

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[setPipelineData](UI_CYBR_Bar.CYBR_Bar.md#setpipelinedata)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19277

___

### setPosition

▸ **setPosition**(`x?`, `y?`, `z?`, `w?`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Sets the position of this Game Object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x?` | `number` | The x position of this Game Object. Default 0. |
| `y?` | `number` | The y position of this Game Object. If not set it will use the `x` value. Default x. |
| `z?` | `number` | The z position of this Game Object. Default 0. |
| `w?` | `number` | The w position of this Game Object. Default 0. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[setPosition](UI_CYBR_Bar.CYBR_Bar.md#setposition)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19381

___

### setPostPipeline

▸ **setPostPipeline**(`pipelines`, `pipelineData?`, `copyData?`): [`BulletBar`](UI_BulletBar.BulletBar.md)

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

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[setPostPipeline](UI_CYBR_Bar.CYBR_Bar.md#setpostpipeline)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19264

___

### setRandomPosition

▸ **setRandomPosition**(`x?`, `y?`, `width?`, `height?`): [`BulletBar`](UI_BulletBar.BulletBar.md)

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

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[setRandomPosition](UI_CYBR_Bar.CYBR_Bar.md#setrandomposition)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19402

___

### setRotation

▸ **setRotation**(`radians?`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Sets the rotation of this Game Object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `radians?` | `number` | The rotation of this Game Object, in radians. Default 0. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[setRotation](UI_CYBR_Bar.CYBR_Bar.md#setrotation)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19408

___

### setScale

▸ **setScale**(`x`, `y?`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Sets the scale of this Game Object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The horizontal scale of this Game Object. |
| `y?` | `number` | The vertical scale of this Game Object. If not set it will use the `x` value. Default x. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[setScale](UI_CYBR_Bar.CYBR_Bar.md#setscale)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19421

___

### setScrollFactor

▸ **setScrollFactor**(`x`, `y?`): [`BulletBar`](UI_BulletBar.BulletBar.md)

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

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[setScrollFactor](UI_CYBR_Bar.CYBR_Bar.md#setscrollfactor)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19558

___

### setState

▸ **setState**(`value`): [`BulletBar`](UI_BulletBar.BulletBar.md)

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

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[setState](UI_CYBR_Bar.CYBR_Bar.md#setstate)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17123

___

### setValue

▸ **setValue**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[setValue](UI_CYBR_Bar.CYBR_Bar.md#setvalue)

#### Defined in

[src/UI/CYBR_Bar.ts:17](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/UI/CYBR_Bar.ts#L17)

___

### setVisible

▸ **setVisible**(`value`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Sets the visibility of this Game Object.

An invisible Game Object will skip rendering, but will still process update logic.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | The visible state of the Game Object. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[setVisible](UI_CYBR_Bar.CYBR_Bar.md#setvisible)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19499

___

### setW

▸ **setW**(`value?`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Sets the w position of this Game Object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value?` | `number` | The w position of this Game Object. Default 0. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[setW](UI_CYBR_Bar.CYBR_Bar.md#setw)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19448

___

### setX

▸ **setX**(`value?`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Sets the x position of this Game Object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value?` | `number` | The x position of this Game Object. Default 0. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[setX](UI_CYBR_Bar.CYBR_Bar.md#setx)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19427

___

### setY

▸ **setY**(`value?`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Sets the y position of this Game Object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value?` | `number` | The y position of this Game Object. Default 0. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[setY](UI_CYBR_Bar.CYBR_Bar.md#sety)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19433

___

### setZ

▸ **setZ**(`value?`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Sets the z position of this Game Object.

Note: The z position does not control the rendering order of 2D Game Objects. Use
Phaser.GameObjects.Components.Depth#setDepth instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value?` | `number` | The z position of this Game Object. Default 0. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[setZ](UI_CYBR_Bar.CYBR_Bar.md#setz)

#### Defined in

node_modules/phaser/types/phaser.d.ts:19442

___

### shutdown

▸ **shutdown**(): `void`

Removes all listeners.

#### Returns

`void`

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[shutdown](UI_CYBR_Bar.CYBR_Bar.md#shutdown)

#### Defined in

node_modules/phaser/types/phaser.d.ts:9543

___

### slice

▸ **slice**(`x`, `y`, `radius`, `startAngle`, `endAngle`, `anticlockwise?`, `overshoot?`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Creates a pie-chart slice shape centered at `x`, `y` with the given radius.
You must define the start and end angle of the slice.

Setting the `anticlockwise` argument to `true` creates a shape similar to Pacman.
Setting it to `false` creates a shape like a slice of pie.

This method will begin a new path and close the path at the end of it.
To display the actual slice you need to call either `strokePath` or `fillPath` after it.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The horizontal center of the slice. |
| `y` | `number` | The vertical center of the slice. |
| `radius` | `number` | The radius of the slice. |
| `startAngle` | `number` | The start angle of the slice, given in radians. |
| `endAngle` | `number` | The end angle of the slice, given in radians. |
| `anticlockwise?` | `boolean` | Whether the drawing should be anticlockwise or clockwise. Default false. |
| `overshoot?` | `number` | This value allows you to overshoot the endAngle by this amount. Useful if the arc has a thick stroke and needs to overshoot to join-up cleanly. Default 0. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[slice](UI_CYBR_Bar.CYBR_Bar.md#slice)

#### Defined in

node_modules/phaser/types/phaser.d.ts:18948

___

### stroke

▸ **stroke**(): [`BulletBar`](UI_BulletBar.BulletBar.md)

Stroke the current path.

This is an alias for `Graphics.strokePath` and does the same thing.
It was added to match the CanvasRenderingContext 2D API.

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[stroke](UI_CYBR_Bar.CYBR_Bar.md#stroke)

#### Defined in

node_modules/phaser/types/phaser.d.ts:18683

___

### strokeCircle

▸ **strokeCircle**(`x`, `y`, `radius`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Stroke a circle with the given position and radius.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The x coordinate of the center of the circle. |
| `y` | `number` | The y coordinate of the center of the circle. |
| `radius` | `number` | The radius of the circle. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[strokeCircle](UI_CYBR_Bar.CYBR_Bar.md#strokecircle)

#### Defined in

node_modules/phaser/types/phaser.d.ts:18711

___

### strokeCircleShape

▸ **strokeCircleShape**(`circle`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Stroke the given circle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `circle` | `Circle` | The circle to stroke. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[strokeCircleShape](UI_CYBR_Bar.CYBR_Bar.md#strokecircleshape)

#### Defined in

node_modules/phaser/types/phaser.d.ts:18695

___

### strokeEllipse

▸ **strokeEllipse**(`x`, `y`, `width`, `height`, `smoothness?`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Stroke an ellipse with the given position and size.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The x coordinate of the center of the ellipse. |
| `y` | `number` | The y coordinate of the center of the ellipse. |
| `width` | `number` | The width of the ellipse. |
| `height` | `number` | The height of the ellipse. |
| `smoothness?` | `number` | The number of points to draw the ellipse with. Default 32. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[strokeEllipse](UI_CYBR_Bar.CYBR_Bar.md#strokeellipse)

#### Defined in

node_modules/phaser/types/phaser.d.ts:18888

___

### strokeEllipseShape

▸ **strokeEllipseShape**(`ellipse`, `smoothness?`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Stroke the given ellipse.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ellipse` | `Ellipse` | The ellipse to stroke. |
| `smoothness?` | `number` | The number of points to draw the ellipse with. Default 32. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[strokeEllipseShape](UI_CYBR_Bar.CYBR_Bar.md#strokeellipseshape)

#### Defined in

node_modules/phaser/types/phaser.d.ts:18878

___

### strokeLineShape

▸ **strokeLineShape**(`line`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Draw the given line.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `line` | `Line` | The line to stroke. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[strokeLineShape](UI_CYBR_Bar.CYBR_Bar.md#strokelineshape)

#### Defined in

node_modules/phaser/types/phaser.d.ts:18820

___

### strokePath

▸ **strokePath**(): [`BulletBar`](UI_BulletBar.BulletBar.md)

Stroke the current path.

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[strokePath](UI_CYBR_Bar.CYBR_Bar.md#strokepath)

#### Defined in

node_modules/phaser/types/phaser.d.ts:18675

___

### strokePoints

▸ **strokePoints**(`points`, `closeShape?`, `closePath?`, `endIndex?`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Stroke the shape represented by the given array of points.

Pass `closeShape` to automatically close the shape by joining the last to the first point.

Pass `closePath` to automatically close the path before it is stroked.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `points` | `any`[] \| `Point`[] | The points to stroke. |
| `closeShape?` | `boolean` | When `true`, the shape is closed by joining the last point to the first point. Default false. |
| `closePath?` | `boolean` | When `true`, the path is closed before being stroked. Default false. |
| `endIndex?` | `number` | The index of `points` to stop drawing at. Defaults to `points.length`. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[strokePoints](UI_CYBR_Bar.CYBR_Bar.md#strokepoints)

#### Defined in

node_modules/phaser/types/phaser.d.ts:18858

___

### strokeRect

▸ **strokeRect**(`x`, `y`, `width`, `height`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Stroke a rectangle with the given position and size.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The x coordinate of the top-left of the rectangle. |
| `y` | `number` | The y coordinate of the top-left of the rectangle. |
| `width` | `number` | The width of the rectangle. |
| `height` | `number` | The height of the rectangle. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[strokeRect](UI_CYBR_Bar.CYBR_Bar.md#strokerect)

#### Defined in

node_modules/phaser/types/phaser.d.ts:18741

___

### strokeRectShape

▸ **strokeRectShape**(`rect`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Stroke the given rectangle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rect` | `Rectangle` | The rectangle to stroke. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[strokeRectShape](UI_CYBR_Bar.CYBR_Bar.md#strokerectshape)

#### Defined in

node_modules/phaser/types/phaser.d.ts:18723

___

### strokeRoundedRect

▸ **strokeRoundedRect**(`x`, `y`, `width`, `height`, `radius?`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Stroke a rounded rectangle with the given position, size and radius.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The x coordinate of the top-left of the rectangle. |
| `y` | `number` | The y coordinate of the top-left of the rectangle. |
| `width` | `number` | The width of the rectangle. |
| `height` | `number` | The height of the rectangle. |
| `radius?` | `number` \| `RoundedRectRadius` | The corner radius; It can also be an object to specify different radii for corners. Default 20. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[strokeRoundedRect](UI_CYBR_Bar.CYBR_Bar.md#strokeroundedrect)

#### Defined in

node_modules/phaser/types/phaser.d.ts:18761

___

### strokeTriangle

▸ **strokeTriangle**(`x0`, `y0`, `x1`, `y1`, `x2`, `y2`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Stroke a triangle with the given points.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x0` | `number` | The x coordinate of the first point. |
| `y0` | `number` | The y coordinate of the first point. |
| `x1` | `number` | The x coordinate of the second point. |
| `y1` | `number` | The y coordinate of the second point. |
| `x2` | `number` | The x coordinate of the third point. |
| `y2` | `number` | The y coordinate of the third point. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[strokeTriangle](UI_CYBR_Bar.CYBR_Bar.md#stroketriangle)

#### Defined in

node_modules/phaser/types/phaser.d.ts:18814

___

### strokeTriangleShape

▸ **strokeTriangleShape**(`triangle`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Stroke the given triangle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `triangle` | `Triangle` | The triangle to stroke. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[strokeTriangleShape](UI_CYBR_Bar.CYBR_Bar.md#stroketriangleshape)

#### Defined in

node_modules/phaser/types/phaser.d.ts:18792

___

### toJSON

▸ **toJSON**(): `JSONGameObject`

Returns a JSON representation of the Game Object.

#### Returns

`JSONGameObject`

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[toJSON](UI_CYBR_Bar.CYBR_Bar.md#tojson)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17306

___

### toggleData

▸ **toggleData**(`key`): [`BulletBar`](UI_BulletBar.BulletBar.md)

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

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[toggleData](UI_CYBR_Bar.CYBR_Bar.md#toggledata)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17198

___

### translateCanvas

▸ **translateCanvas**(`x`, `y`): [`BulletBar`](UI_BulletBar.BulletBar.md)

Inserts a translation command into this Graphics objects command buffer.

All objects drawn _after_ calling this method will be translated
by the given amount.

This does not change the position of the Graphics object itself,
only of the objects drawn by it after calling this method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The horizontal translation to apply. |
| `y` | `number` | The vertical translation to apply. |

#### Returns

[`BulletBar`](UI_BulletBar.BulletBar.md)

#### Inherited from

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[translateCanvas](UI_CYBR_Bar.CYBR_Bar.md#translatecanvas)

#### Defined in

node_modules/phaser/types/phaser.d.ts:18977

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

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[update](UI_CYBR_Bar.CYBR_Bar.md#update)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17301

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

[CYBR_Bar](UI_CYBR_Bar.CYBR_Bar.md).[willRender](UI_CYBR_Bar.CYBR_Bar.md#willrender)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17313
