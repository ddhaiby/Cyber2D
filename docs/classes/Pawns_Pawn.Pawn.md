[cyber2d](../README.md) / [Modules](../modules.md) / [Pawns/Pawn](../modules/Pawns_Pawn.md) / Pawn

# Class: Pawn

[Pawns/Pawn](../modules/Pawns_Pawn.md).Pawn

## Hierarchy

- `Sprite`

  ↳ **`Pawn`**

  ↳↳ [`Player`](Pawns_Player.Player.md)

  ↳↳ [`BasicAI`](Pawns_AIs_BasicAI.BasicAI.md)

## Table of contents

### Constructors

- [constructor](Pawns_Pawn.Pawn.md#constructor)

### Properties

- [active](Pawns_Pawn.Pawn.md#active)
- [alpha](Pawns_Pawn.Pawn.md#alpha)
- [alphaBottomLeft](Pawns_Pawn.Pawn.md#alphabottomleft)
- [alphaBottomRight](Pawns_Pawn.Pawn.md#alphabottomright)
- [alphaTopLeft](Pawns_Pawn.Pawn.md#alphatopleft)
- [alphaTopRight](Pawns_Pawn.Pawn.md#alphatopright)
- [angle](Pawns_Pawn.Pawn.md#angle)
- [anims](Pawns_Pawn.Pawn.md#anims)
- [attributes](Pawns_Pawn.Pawn.md#attributes)
- [blendMode](Pawns_Pawn.Pawn.md#blendmode)
- [body](Pawns_Pawn.Pawn.md#body)
- [bodyDamage](Pawns_Pawn.Pawn.md#bodydamage)
- [bulletDamage](Pawns_Pawn.Pawn.md#bulletdamage)
- [bulletPerFire](Pawns_Pawn.Pawn.md#bulletperfire)
- [cameraFilter](Pawns_Pawn.Pawn.md#camerafilter)
- [currentWeapon](Pawns_Pawn.Pawn.md#currentweapon)
- [data](Pawns_Pawn.Pawn.md#data)
- [deathSound](Pawns_Pawn.Pawn.md#deathsound)
- [debugBodyColor](Pawns_Pawn.Pawn.md#debugbodycolor)
- [debugShowBody](Pawns_Pawn.Pawn.md#debugshowbody)
- [debugShowVelocity](Pawns_Pawn.Pawn.md#debugshowvelocity)
- [defaultPipeline](Pawns_Pawn.Pawn.md#defaultpipeline)
- [depth](Pawns_Pawn.Pawn.md#depth)
- [displayHeight](Pawns_Pawn.Pawn.md#displayheight)
- [displayList](Pawns_Pawn.Pawn.md#displaylist)
- [displayOriginX](Pawns_Pawn.Pawn.md#displayoriginx)
- [displayOriginY](Pawns_Pawn.Pawn.md#displayoriginy)
- [displayWidth](Pawns_Pawn.Pawn.md#displaywidth)
- [flipX](Pawns_Pawn.Pawn.md#flipx)
- [flipY](Pawns_Pawn.Pawn.md#flipy)
- [frame](Pawns_Pawn.Pawn.md#frame)
- [hasPostPipeline](Pawns_Pawn.Pawn.md#haspostpipeline)
- [height](Pawns_Pawn.Pawn.md#height)
- [hurtSound](Pawns_Pawn.Pawn.md#hurtsound)
- [ignoreDestroy](Pawns_Pawn.Pawn.md#ignoredestroy)
- [input](Pawns_Pawn.Pawn.md#input)
- [isClimbing](Pawns_Pawn.Pawn.md#isclimbing)
- [isCropped](Pawns_Pawn.Pawn.md#iscropped)
- [isFiring](Pawns_Pawn.Pawn.md#isfiring)
- [isJumping](Pawns_Pawn.Pawn.md#isjumping)
- [isLookingDown](Pawns_Pawn.Pawn.md#islookingdown)
- [isLookingLeft](Pawns_Pawn.Pawn.md#islookingleft)
- [isLookingRight](Pawns_Pawn.Pawn.md#islookingright)
- [isLookingUp](Pawns_Pawn.Pawn.md#islookingup)
- [isRecovering](Pawns_Pawn.Pawn.md#isrecovering)
- [isTakingDmg](Pawns_Pawn.Pawn.md#istakingdmg)
- [isTinted](Pawns_Pawn.Pawn.md#istinted)
- [isWalking](Pawns_Pawn.Pawn.md#iswalking)
- [mask](Pawns_Pawn.Pawn.md#mask)
- [maxHealth](Pawns_Pawn.Pawn.md#maxhealth)
- [name](Pawns_Pawn.Pawn.md#name)
- [originX](Pawns_Pawn.Pawn.md#originx)
- [originY](Pawns_Pawn.Pawn.md#originy)
- [parentContainer](Pawns_Pawn.Pawn.md#parentcontainer)
- [pipeline](Pawns_Pawn.Pawn.md#pipeline)
- [pipelineData](Pawns_Pawn.Pawn.md#pipelinedata)
- [postPipelines](Pawns_Pawn.Pawn.md#postpipelines)
- [renderFlags](Pawns_Pawn.Pawn.md#renderflags)
- [rotation](Pawns_Pawn.Pawn.md#rotation)
- [scale](Pawns_Pawn.Pawn.md#scale)
- [scaleX](Pawns_Pawn.Pawn.md#scalex)
- [scaleY](Pawns_Pawn.Pawn.md#scaley)
- [scene](Pawns_Pawn.Pawn.md#scene)
- [scrollFactorX](Pawns_Pawn.Pawn.md#scrollfactorx)
- [scrollFactorY](Pawns_Pawn.Pawn.md#scrollfactory)
- [startOnRight](Pawns_Pawn.Pawn.md#startonright)
- [state](Pawns_Pawn.Pawn.md#state)
- [tabIndex](Pawns_Pawn.Pawn.md#tabindex)
- [texture](Pawns_Pawn.Pawn.md#texture)
- [tint](Pawns_Pawn.Pawn.md#tint)
- [tintBottomLeft](Pawns_Pawn.Pawn.md#tintbottomleft)
- [tintBottomRight](Pawns_Pawn.Pawn.md#tintbottomright)
- [tintFill](Pawns_Pawn.Pawn.md#tintfill)
- [tintTopLeft](Pawns_Pawn.Pawn.md#tinttopleft)
- [tintTopRight](Pawns_Pawn.Pawn.md#tinttopright)
- [type](Pawns_Pawn.Pawn.md#type)
- [visible](Pawns_Pawn.Pawn.md#visible)
- [w](Pawns_Pawn.Pawn.md#w)
- [wasOnFloor](Pawns_Pawn.Pawn.md#wasonfloor)
- [width](Pawns_Pawn.Pawn.md#width)
- [x](Pawns_Pawn.Pawn.md#x)
- [y](Pawns_Pawn.Pawn.md#y)
- [z](Pawns_Pawn.Pawn.md#z)
- [RENDER\_MASK](Pawns_Pawn.Pawn.md#render_mask)

### Methods

- [addListener](Pawns_Pawn.Pawn.md#addlistener)
- [addToDisplayList](Pawns_Pawn.Pawn.md#addtodisplaylist)
- [addToUpdateList](Pawns_Pawn.Pawn.md#addtoupdatelist)
- [addedToScene](Pawns_Pawn.Pawn.md#addedtoscene)
- [canJump](Pawns_Pawn.Pawn.md#canjump)
- [canWalk](Pawns_Pawn.Pawn.md#canwalk)
- [chain](Pawns_Pawn.Pawn.md#chain)
- [clearAlpha](Pawns_Pawn.Pawn.md#clearalpha)
- [clearMask](Pawns_Pawn.Pawn.md#clearmask)
- [clearTint](Pawns_Pawn.Pawn.md#cleartint)
- [climb](Pawns_Pawn.Pawn.md#climb)
- [copyPosition](Pawns_Pawn.Pawn.md#copyposition)
- [createBitmapMask](Pawns_Pawn.Pawn.md#createbitmapmask)
- [createGeometryMask](Pawns_Pawn.Pawn.md#creategeometrymask)
- [dead](Pawns_Pawn.Pawn.md#dead)
- [destroy](Pawns_Pawn.Pawn.md#destroy)
- [die](Pawns_Pawn.Pawn.md#die)
- [disableBody](Pawns_Pawn.Pawn.md#disablebody)
- [disableInteractive](Pawns_Pawn.Pawn.md#disableinteractive)
- [emit](Pawns_Pawn.Pawn.md#emit)
- [enableBody](Pawns_Pawn.Pawn.md#enablebody)
- [equipWeapon](Pawns_Pawn.Pawn.md#equipweapon)
- [eventNames](Pawns_Pawn.Pawn.md#eventnames)
- [fire](Pawns_Pawn.Pawn.md#fire)
- [getAttribute](Pawns_Pawn.Pawn.md#getattribute)
- [getBodyDamage](Pawns_Pawn.Pawn.md#getbodydamage)
- [getBottomCenter](Pawns_Pawn.Pawn.md#getbottomcenter)
- [getBottomLeft](Pawns_Pawn.Pawn.md#getbottomleft)
- [getBottomRight](Pawns_Pawn.Pawn.md#getbottomright)
- [getBounds](Pawns_Pawn.Pawn.md#getbounds)
- [getCenter](Pawns_Pawn.Pawn.md#getcenter)
- [getClimbSpeed](Pawns_Pawn.Pawn.md#getclimbspeed)
- [getData](Pawns_Pawn.Pawn.md#getdata)
- [getHealth](Pawns_Pawn.Pawn.md#gethealth)
- [getIndexList](Pawns_Pawn.Pawn.md#getindexlist)
- [getLeftCenter](Pawns_Pawn.Pawn.md#getleftcenter)
- [getLocalPoint](Pawns_Pawn.Pawn.md#getlocalpoint)
- [getLocalTransformMatrix](Pawns_Pawn.Pawn.md#getlocaltransformmatrix)
- [getMaxHealth](Pawns_Pawn.Pawn.md#getmaxhealth)
- [getParentRotation](Pawns_Pawn.Pawn.md#getparentrotation)
- [getPipelineName](Pawns_Pawn.Pawn.md#getpipelinename)
- [getPostPipeline](Pawns_Pawn.Pawn.md#getpostpipeline)
- [getRightCenter](Pawns_Pawn.Pawn.md#getrightcenter)
- [getTopCenter](Pawns_Pawn.Pawn.md#gettopcenter)
- [getTopLeft](Pawns_Pawn.Pawn.md#gettopleft)
- [getTopRight](Pawns_Pawn.Pawn.md#gettopright)
- [getWalkSpeed](Pawns_Pawn.Pawn.md#getwalkspeed)
- [getWorldTransformMatrix](Pawns_Pawn.Pawn.md#getworldtransformmatrix)
- [heal](Pawns_Pawn.Pawn.md#heal)
- [hurt](Pawns_Pawn.Pawn.md#hurt)
- [incData](Pawns_Pawn.Pawn.md#incdata)
- [init](Pawns_Pawn.Pawn.md#init)
- [initAnimations](Pawns_Pawn.Pawn.md#initanimations)
- [initAttributes](Pawns_Pawn.Pawn.md#initattributes)
- [initPipeline](Pawns_Pawn.Pawn.md#initpipeline)
- [initStates](Pawns_Pawn.Pawn.md#initstates)
- [isOnFloor](Pawns_Pawn.Pawn.md#isonfloor)
- [jump](Pawns_Pawn.Pawn.md#jump)
- [listenerCount](Pawns_Pawn.Pawn.md#listenercount)
- [listeners](Pawns_Pawn.Pawn.md#listeners)
- [lookDown](Pawns_Pawn.Pawn.md#lookdown)
- [lookOnLeft](Pawns_Pawn.Pawn.md#lookonleft)
- [lookOnRight](Pawns_Pawn.Pawn.md#lookonright)
- [lookStraight](Pawns_Pawn.Pawn.md#lookstraight)
- [lookUp](Pawns_Pawn.Pawn.md#lookup)
- [off](Pawns_Pawn.Pawn.md#off)
- [on](Pawns_Pawn.Pawn.md#on)
- [once](Pawns_Pawn.Pawn.md#once)
- [play](Pawns_Pawn.Pawn.md#play)
- [playAfterDelay](Pawns_Pawn.Pawn.md#playafterdelay)
- [playAfterRepeat](Pawns_Pawn.Pawn.md#playafterrepeat)
- [playReverse](Pawns_Pawn.Pawn.md#playreverse)
- [postUpdate](Pawns_Pawn.Pawn.md#postupdate)
- [preUpdate](Pawns_Pawn.Pawn.md#preupdate)
- [refreshBody](Pawns_Pawn.Pawn.md#refreshbody)
- [removeAllListeners](Pawns_Pawn.Pawn.md#removealllisteners)
- [removeFromDisplayList](Pawns_Pawn.Pawn.md#removefromdisplaylist)
- [removeFromUpdateList](Pawns_Pawn.Pawn.md#removefromupdatelist)
- [removeInteractive](Pawns_Pawn.Pawn.md#removeinteractive)
- [removeListener](Pawns_Pawn.Pawn.md#removelistener)
- [removePostPipeline](Pawns_Pawn.Pawn.md#removepostpipeline)
- [removedFromScene](Pawns_Pawn.Pawn.md#removedfromscene)
- [reset](Pawns_Pawn.Pawn.md#reset)
- [resetFlip](Pawns_Pawn.Pawn.md#resetflip)
- [resetPipeline](Pawns_Pawn.Pawn.md#resetpipeline)
- [resetPostPipeline](Pawns_Pawn.Pawn.md#resetpostpipeline)
- [setAcceleration](Pawns_Pawn.Pawn.md#setacceleration)
- [setAccelerationX](Pawns_Pawn.Pawn.md#setaccelerationx)
- [setAccelerationY](Pawns_Pawn.Pawn.md#setaccelerationy)
- [setActive](Pawns_Pawn.Pawn.md#setactive)
- [setAlpha](Pawns_Pawn.Pawn.md#setalpha)
- [setAngle](Pawns_Pawn.Pawn.md#setangle)
- [setAngularAcceleration](Pawns_Pawn.Pawn.md#setangularacceleration)
- [setAngularDrag](Pawns_Pawn.Pawn.md#setangulardrag)
- [setAngularVelocity](Pawns_Pawn.Pawn.md#setangularvelocity)
- [setBlendMode](Pawns_Pawn.Pawn.md#setblendmode)
- [setBodySize](Pawns_Pawn.Pawn.md#setbodysize)
- [setBounce](Pawns_Pawn.Pawn.md#setbounce)
- [setBounceX](Pawns_Pawn.Pawn.md#setbouncex)
- [setBounceY](Pawns_Pawn.Pawn.md#setbouncey)
- [setCircle](Pawns_Pawn.Pawn.md#setcircle)
- [setCollideWorldBounds](Pawns_Pawn.Pawn.md#setcollideworldbounds)
- [setCrop](Pawns_Pawn.Pawn.md#setcrop)
- [setDamping](Pawns_Pawn.Pawn.md#setdamping)
- [setData](Pawns_Pawn.Pawn.md#setdata)
- [setDataEnabled](Pawns_Pawn.Pawn.md#setdataenabled)
- [setDebug](Pawns_Pawn.Pawn.md#setdebug)
- [setDebugBodyColor](Pawns_Pawn.Pawn.md#setdebugbodycolor)
- [setDepth](Pawns_Pawn.Pawn.md#setdepth)
- [setDisplayOrigin](Pawns_Pawn.Pawn.md#setdisplayorigin)
- [setDisplaySize](Pawns_Pawn.Pawn.md#setdisplaysize)
- [setDrag](Pawns_Pawn.Pawn.md#setdrag)
- [setDragX](Pawns_Pawn.Pawn.md#setdragx)
- [setDragY](Pawns_Pawn.Pawn.md#setdragy)
- [setFlip](Pawns_Pawn.Pawn.md#setflip)
- [setFlipX](Pawns_Pawn.Pawn.md#setflipx)
- [setFlipY](Pawns_Pawn.Pawn.md#setflipy)
- [setFrame](Pawns_Pawn.Pawn.md#setframe)
- [setFriction](Pawns_Pawn.Pawn.md#setfriction)
- [setFrictionX](Pawns_Pawn.Pawn.md#setfrictionx)
- [setFrictionY](Pawns_Pawn.Pawn.md#setfrictiony)
- [setGravity](Pawns_Pawn.Pawn.md#setgravity)
- [setGravityX](Pawns_Pawn.Pawn.md#setgravityx)
- [setGravityY](Pawns_Pawn.Pawn.md#setgravityy)
- [setHealth](Pawns_Pawn.Pawn.md#sethealth)
- [setImmovable](Pawns_Pawn.Pawn.md#setimmovable)
- [setInteractive](Pawns_Pawn.Pawn.md#setinteractive)
- [setMask](Pawns_Pawn.Pawn.md#setmask)
- [setMass](Pawns_Pawn.Pawn.md#setmass)
- [setMaxVelocity](Pawns_Pawn.Pawn.md#setmaxvelocity)
- [setName](Pawns_Pawn.Pawn.md#setname)
- [setOffset](Pawns_Pawn.Pawn.md#setoffset)
- [setOrigin](Pawns_Pawn.Pawn.md#setorigin)
- [setOriginFromFrame](Pawns_Pawn.Pawn.md#setoriginfromframe)
- [setPipeline](Pawns_Pawn.Pawn.md#setpipeline)
- [setPipelineData](Pawns_Pawn.Pawn.md#setpipelinedata)
- [setPosition](Pawns_Pawn.Pawn.md#setposition)
- [setPostPipeline](Pawns_Pawn.Pawn.md#setpostpipeline)
- [setPushable](Pawns_Pawn.Pawn.md#setpushable)
- [setRandomPosition](Pawns_Pawn.Pawn.md#setrandomposition)
- [setRotation](Pawns_Pawn.Pawn.md#setrotation)
- [setScale](Pawns_Pawn.Pawn.md#setscale)
- [setScrollFactor](Pawns_Pawn.Pawn.md#setscrollfactor)
- [setSize](Pawns_Pawn.Pawn.md#setsize)
- [setSizeToFrame](Pawns_Pawn.Pawn.md#setsizetoframe)
- [setState](Pawns_Pawn.Pawn.md#setstate)
- [setTexture](Pawns_Pawn.Pawn.md#settexture)
- [setTint](Pawns_Pawn.Pawn.md#settint)
- [setTintFill](Pawns_Pawn.Pawn.md#settintfill)
- [setVelocity](Pawns_Pawn.Pawn.md#setvelocity)
- [setVelocityX](Pawns_Pawn.Pawn.md#setvelocityx)
- [setVelocityY](Pawns_Pawn.Pawn.md#setvelocityy)
- [setVisible](Pawns_Pawn.Pawn.md#setvisible)
- [setW](Pawns_Pawn.Pawn.md#setw)
- [setX](Pawns_Pawn.Pawn.md#setx)
- [setY](Pawns_Pawn.Pawn.md#sety)
- [setZ](Pawns_Pawn.Pawn.md#setz)
- [shutdown](Pawns_Pawn.Pawn.md#shutdown)
- [startClimbing](Pawns_Pawn.Pawn.md#startclimbing)
- [startWalking](Pawns_Pawn.Pawn.md#startwalking)
- [stop](Pawns_Pawn.Pawn.md#stop)
- [stopAfterDelay](Pawns_Pawn.Pawn.md#stopafterdelay)
- [stopAfterRepeat](Pawns_Pawn.Pawn.md#stopafterrepeat)
- [stopClimbing](Pawns_Pawn.Pawn.md#stopclimbing)
- [stopFiring](Pawns_Pawn.Pawn.md#stopfiring)
- [stopOnFrame](Pawns_Pawn.Pawn.md#stoponframe)
- [stopWalking](Pawns_Pawn.Pawn.md#stopwalking)
- [toJSON](Pawns_Pawn.Pawn.md#tojson)
- [toggleData](Pawns_Pawn.Pawn.md#toggledata)
- [toggleFlipX](Pawns_Pawn.Pawn.md#toggleflipx)
- [toggleFlipY](Pawns_Pawn.Pawn.md#toggleflipy)
- [update](Pawns_Pawn.Pawn.md#update)
- [updateAnimations](Pawns_Pawn.Pawn.md#updateanimations)
- [updateDisplayOrigin](Pawns_Pawn.Pawn.md#updatedisplayorigin)
- [walk](Pawns_Pawn.Pawn.md#walk)
- [willRender](Pawns_Pawn.Pawn.md#willrender)

## Constructors

### constructor

• **new Pawn**(`scene`, `x?`, `y?`, `texture?`, `frame?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | `Scene` |
| `x?` | `number` |
| `y?` | `number` |
| `texture?` | `string` \| `Texture` |
| `frame?` | `string` \| `number` |

#### Overrides

Phaser.Physics.Arcade.Sprite.constructor

#### Defined in

[src/Pawns/Pawn.ts:45](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L45)

## Properties

### active

• **active**: `boolean`

The active state of this Game Object.
A Game Object with an active state of `true` is processed by the Scenes UpdateList, if added to it.
An active object is one which is having its logic and internal systems updated.

#### Inherited from

Phaser.Physics.Arcade.Sprite.active

#### Defined in

node_modules/phaser/types/phaser.d.ts:17050

___

### alpha

• **alpha**: `number`

The alpha value of the Game Object.

This is a global value, impacting the entire Game Object, not just a region of it.

#### Inherited from

Phaser.Physics.Arcade.Sprite.alpha

#### Defined in

node_modules/phaser/types/phaser.d.ts:68926

___

### alphaBottomLeft

• **alphaBottomLeft**: `number`

The alpha value starting from the bottom-left of the Game Object.
This value is interpolated from the corner to the center of the Game Object.

#### Inherited from

Phaser.Physics.Arcade.Sprite.alphaBottomLeft

#### Defined in

node_modules/phaser/types/phaser.d.ts:68944

___

### alphaBottomRight

• **alphaBottomRight**: `number`

The alpha value starting from the bottom-right of the Game Object.
This value is interpolated from the corner to the center of the Game Object.

#### Inherited from

Phaser.Physics.Arcade.Sprite.alphaBottomRight

#### Defined in

node_modules/phaser/types/phaser.d.ts:68950

___

### alphaTopLeft

• **alphaTopLeft**: `number`

The alpha value starting from the top-left of the Game Object.
This value is interpolated from the corner to the center of the Game Object.

#### Inherited from

Phaser.Physics.Arcade.Sprite.alphaTopLeft

#### Defined in

node_modules/phaser/types/phaser.d.ts:68932

___

### alphaTopRight

• **alphaTopRight**: `number`

The alpha value starting from the top-right of the Game Object.
This value is interpolated from the corner to the center of the Game Object.

#### Inherited from

Phaser.Physics.Arcade.Sprite.alphaTopRight

#### Defined in

node_modules/phaser/types/phaser.d.ts:68938

___

### angle

• **angle**: `number`

The angle of this Game Object as expressed in degrees.

Phaser uses a right-hand clockwise rotation system, where 0 is right, 90 is down, 180/-180 is left
and -90 is up.

If you prefer to work in radians, see the `rotation` property instead.

#### Inherited from

Phaser.Physics.Arcade.Sprite.angle

#### Defined in

node_modules/phaser/types/phaser.d.ts:69762

___

### anims

• **anims**: `AnimationState`

The Animation State component of this Sprite.

This component provides features to apply animations to this Sprite.
It is responsible for playing, loading, queuing animations for later playback,
mixing between animations and setting the current animation frame to this Sprite.

#### Inherited from

Phaser.Physics.Arcade.Sprite.anims

#### Defined in

node_modules/phaser/types/phaser.d.ts:39252

___

### attributes

• `Protected` **attributes**: `Map`<`string`, `number`\>

#### Defined in

[src/Pawns/Pawn.ts:27](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L27)

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

Phaser.Physics.Arcade.Sprite.blendMode

#### Defined in

node_modules/phaser/types/phaser.d.ts:68973

___

### body

• **body**: `Body` \| `StaticBody`

This Game Object's Physics Body.

#### Inherited from

Phaser.Physics.Arcade.Sprite.body

#### Defined in

node_modules/phaser/types/phaser.d.ts:68899

___

### bodyDamage

• `Private` **bodyDamage**: `number` = `5`

The damage when there is a body contact

#### Defined in

[src/Pawns/Pawn.ts:33](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L33)

___

### bulletDamage

• `Protected` **bulletDamage**: `number` = `1`

The damage of each bullet

#### Defined in

[src/Pawns/Pawn.ts:39](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L39)

___

### bulletPerFire

• `Protected` **bulletPerFire**: `number` = `1`

The number of bullet shotper fire

#### Defined in

[src/Pawns/Pawn.ts:36](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L36)

___

### cameraFilter

• **cameraFilter**: `number`

A bitmask that controls if this Game Object is drawn by a Camera or not.
Not usually set directly, instead call `Camera.ignore`, however you can
set this property directly using the Camera.id property:

#### Inherited from

Phaser.Physics.Arcade.Sprite.cameraFilter

#### Defined in

node_modules/phaser/types/phaser.d.ts:17077

___

### currentWeapon

• **currentWeapon**: [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Defined in

[src/Pawns/Pawn.ts:11](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L11)

___

### data

• **data**: `DataManager`

A Data Manager.
It allows you to store, query and get key/value paired information specific to this Game Object.
`null` by default. Automatically created if you use `getData` or `setData` or `setDataEnabled`.

#### Inherited from

Phaser.Physics.Arcade.Sprite.data

#### Defined in

node_modules/phaser/types/phaser.d.ts:17063

___

### deathSound

• `Protected` **deathSound**: `string` = `""`

#### Defined in

[src/Pawns/Pawn.ts:43](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L43)

___

### debugBodyColor

• **debugBodyColor**: `number`

The color of the body outline when it renders to the debug display.

#### Inherited from

Phaser.Physics.Arcade.Sprite.debugBodyColor

#### Defined in

node_modules/phaser/types/phaser.d.ts:70008

___

### debugShowBody

• **debugShowBody**: `boolean`

Set to `true` to have this body render its outline to the debug display.

#### Inherited from

Phaser.Physics.Arcade.Sprite.debugShowBody

#### Defined in

node_modules/phaser/types/phaser.d.ts:69998

___

### debugShowVelocity

• **debugShowVelocity**: `boolean`

Set to `true` to have this body render a velocity marker to the debug display.

#### Inherited from

Phaser.Physics.Arcade.Sprite.debugShowVelocity

#### Defined in

node_modules/phaser/types/phaser.d.ts:70003

___

### defaultPipeline

• **defaultPipeline**: `WebGLPipeline`

The initial WebGL pipeline of this Game Object.

If you call `resetPipeline` on this Game Object, the pipeline is reset to this default.

#### Inherited from

Phaser.Physics.Arcade.Sprite.defaultPipeline

#### Defined in

node_modules/phaser/types/phaser.d.ts:69290

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

Phaser.Physics.Arcade.Sprite.depth

#### Defined in

node_modules/phaser/types/phaser.d.ts:69010

___

### displayHeight

• **displayHeight**: `number`

The displayed height of this Game Object.

This value takes into account the scale factor.

Setting this value will adjust the Game Object's scale property.

#### Inherited from

Phaser.Physics.Arcade.Sprite.displayHeight

#### Defined in

node_modules/phaser/types/phaser.d.ts:69499

___

### displayList

• **displayList**: `DisplayList` \| `Layer`

Holds a reference to the Display List that contains this Game Object.

This is set automatically when this Game Object is added to a Scene or Layer.

You should treat this property as being read-only.

#### Inherited from

Phaser.Physics.Arcade.Sprite.displayList

#### Defined in

node_modules/phaser/types/phaser.d.ts:17014

___

### displayOriginX

• **displayOriginX**: `number`

The horizontal display origin of this Game Object.
The origin is a normalized value between 0 and 1.
The displayOrigin is a pixel value, based on the size of the Game Object combined with the origin.

#### Inherited from

Phaser.Physics.Arcade.Sprite.displayOriginX

#### Defined in

node_modules/phaser/types/phaser.d.ts:69248

___

### displayOriginY

• **displayOriginY**: `number`

The vertical display origin of this Game Object.
The origin is a normalized value between 0 and 1.
The displayOrigin is a pixel value, based on the size of the Game Object combined with the origin.

#### Inherited from

Phaser.Physics.Arcade.Sprite.displayOriginY

#### Defined in

node_modules/phaser/types/phaser.d.ts:69255

___

### displayWidth

• **displayWidth**: `number`

The displayed width of this Game Object.

This value takes into account the scale factor.

Setting this value will adjust the Game Object's scale property.

#### Inherited from

Phaser.Physics.Arcade.Sprite.displayWidth

#### Defined in

node_modules/phaser/types/phaser.d.ts:69490

___

### flipX

• **flipX**: `boolean`

The horizontally flipped state of the Game Object.

A Game Object that is flipped horizontally will render inversed on the horizontal axis.
Flipping always takes place from the middle of the texture and does not impact the scale value.
If this Game Object has a physics body, it will not change the body. This is a rendering toggle only.

#### Inherited from

Phaser.Physics.Arcade.Sprite.flipX

#### Defined in

node_modules/phaser/types/phaser.d.ts:69033

___

### flipY

• **flipY**: `boolean`

The vertically flipped state of the Game Object.

A Game Object that is flipped vertically will render inversed on the vertical axis (i.e. upside down)
Flipping always takes place from the middle of the texture and does not impact the scale value.
If this Game Object has a physics body, it will not change the body. This is a rendering toggle only.

#### Inherited from

Phaser.Physics.Arcade.Sprite.flipY

#### Defined in

node_modules/phaser/types/phaser.d.ts:69042

___

### frame

• **frame**: `Frame`

The Texture Frame this Game Object is using to render with.

#### Inherited from

Phaser.Physics.Arcade.Sprite.frame

#### Defined in

node_modules/phaser/types/phaser.d.ts:69547

___

### hasPostPipeline

• **hasPostPipeline**: `boolean`

Does this Game Object have any Post Pipelines set?

#### Inherited from

Phaser.Physics.Arcade.Sprite.hasPostPipeline

#### Defined in

node_modules/phaser/types/phaser.d.ts:69300

___

### height

• **height**: `number`

The native (un-scaled) height of this Game Object.

Changing this value will not change the size that the Game Object is rendered in-game.
For that you need to either set the scale of the Game Object (`setScale`) or use
the `displayHeight` property.

#### Inherited from

Phaser.Physics.Arcade.Sprite.height

#### Defined in

node_modules/phaser/types/phaser.d.ts:69481

___

### hurtSound

• `Protected` **hurtSound**: `string` = `""`

#### Defined in

[src/Pawns/Pawn.ts:42](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L42)

___

### ignoreDestroy

• **ignoreDestroy**: `boolean`

This Game Object will ignore all calls made to its destroy method if this flag is set to `true`.
This includes calls that may come from a Group, Container or the Scene itself.
While it allows you to persist a Game Object across Scenes, please understand you are entirely
responsible for managing references to and from this Game Object.

#### Inherited from

Phaser.Physics.Arcade.Sprite.ignoreDestroy

#### Defined in

node_modules/phaser/types/phaser.d.ts:17096

___

### input

• **input**: `InteractiveObject`

If this Game Object is enabled for input then this property will contain an InteractiveObject instance.
Not usually set directly. Instead call `GameObject.setInteractive()`.

#### Inherited from

Phaser.Physics.Arcade.Sprite.input

#### Defined in

node_modules/phaser/types/phaser.d.ts:17083

___

### isClimbing

• **isClimbing**: `boolean` = `false`

#### Defined in

[src/Pawns/Pawn.ts:22](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L22)

___

### isCropped

• **isCropped**: `boolean`

A boolean flag indicating if this Game Object is being cropped or not.
You can toggle this at any time after `setCrop` has been called, to turn cropping on or off.
Equally, calling `setCrop` with no arguments will reset the crop and disable it.

#### Inherited from

Phaser.Physics.Arcade.Sprite.isCropped

#### Defined in

node_modules/phaser/types/phaser.d.ts:69554

___

### isFiring

• **isFiring**: `boolean` = `false`

#### Defined in

[src/Pawns/Pawn.ts:21](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L21)

___

### isJumping

• **isJumping**: `boolean` = `false`

#### Defined in

[src/Pawns/Pawn.ts:19](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L19)

___

### isLookingDown

• **isLookingDown**: `boolean` = `false`

#### Defined in

[src/Pawns/Pawn.ts:15](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L15)

___

### isLookingLeft

• **isLookingLeft**: `boolean` = `false`

#### Defined in

[src/Pawns/Pawn.ts:17](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L17)

___

### isLookingRight

• **isLookingRight**: `boolean` = `false`

#### Defined in

[src/Pawns/Pawn.ts:16](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L16)

___

### isLookingUp

• **isLookingUp**: `boolean` = `false`

#### Defined in

[src/Pawns/Pawn.ts:14](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L14)

___

### isRecovering

• **isRecovering**: `boolean` = `false`

#### Defined in

[src/Pawns/Pawn.ts:23](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L23)

___

### isTakingDmg

• **isTakingDmg**: `boolean` = `false`

#### Defined in

[src/Pawns/Pawn.ts:24](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L24)

___

### isTinted

• `Readonly` **isTinted**: `boolean`

Does this Game Object have a tint applied?

It checks to see if the 4 tint properties are set to the value 0xffffff
and that the `tintFill` property is `false`. This indicates that a Game Object isn't tinted.

#### Inherited from

Phaser.Physics.Arcade.Sprite.isTinted

#### Defined in

node_modules/phaser/types/phaser.d.ts:69710

___

### isWalking

• **isWalking**: `boolean` = `false`

#### Defined in

[src/Pawns/Pawn.ts:18](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L18)

___

### mask

• **mask**: `BitmapMask` \| `GeometryMask`

The Mask this Game Object is using during render.

#### Inherited from

Phaser.Physics.Arcade.Sprite.mask

#### Defined in

node_modules/phaser/types/phaser.d.ts:69171

___

### maxHealth

• `Protected` **maxHealth**: `number` = `10`

Max hp

#### Defined in

[src/Pawns/Pawn.ts:30](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L30)

___

### name

• **name**: `string`

The name of this Game Object.
Empty by default and never populated by Phaser, this is left for developers to use.

#### Inherited from

Phaser.Physics.Arcade.Sprite.name

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

Phaser.Physics.Arcade.Sprite.originX

#### Defined in

node_modules/phaser/types/phaser.d.ts:69233

___

### originY

• **originY**: `number`

The vertical origin of this Game Object.
The origin maps the relationship between the size and position of the Game Object.
The default value is 0.5, meaning all Game Objects are positioned based on their center.
Setting the value to 0 means the position now relates to the top of the Game Object.

#### Inherited from

Phaser.Physics.Arcade.Sprite.originY

#### Defined in

node_modules/phaser/types/phaser.d.ts:69241

___

### parentContainer

• **parentContainer**: `Container`

The parent Container of this Game Object, if it has one.

#### Inherited from

Phaser.Physics.Arcade.Sprite.parentContainer

#### Defined in

node_modules/phaser/types/phaser.d.ts:17037

___

### pipeline

• **pipeline**: `WebGLPipeline`

The current WebGL pipeline of this Game Object.

#### Inherited from

Phaser.Physics.Arcade.Sprite.pipeline

#### Defined in

node_modules/phaser/types/phaser.d.ts:69295

___

### pipelineData

• **pipelineData**: `object`

An object to store pipeline specific data in, to be read by the pipelines this Game Object uses.

#### Inherited from

Phaser.Physics.Arcade.Sprite.pipelineData

#### Defined in

node_modules/phaser/types/phaser.d.ts:69315

___

### postPipelines

• **postPipelines**: `PostFXPipeline`[]

The WebGL Post FX Pipelines this Game Object uses for post-render effects.

The pipelines are processed in the order in which they appear in this array.

If you modify this array directly, be sure to set the
`hasPostPipeline` property accordingly.

#### Inherited from

Phaser.Physics.Arcade.Sprite.postPipelines

#### Defined in

node_modules/phaser/types/phaser.d.ts:69310

___

### renderFlags

• **renderFlags**: `number`

The flags that are compared against `RENDER_MASK` to determine if this Game Object will render or not.
The bits are 0001 | 0010 | 0100 | 1000 set by the components Visible, Alpha, Transform and Texture respectively.
If those components are not used by your custom class then you can use this bitmask as you wish.

#### Inherited from

Phaser.Physics.Arcade.Sprite.renderFlags

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

Phaser.Physics.Arcade.Sprite.rotation

#### Defined in

node_modules/phaser/types/phaser.d.ts:69772

___

### scale

• **scale**: `number`

This is a special setter that allows you to set both the horizontal and vertical scale of this Game Object
to the same value, at the same time. When reading this value the result returned is `(scaleX + scaleY) / 2`.

Use of this property implies you wish the horizontal and vertical scales to be equal to each other. If this
isn't the case, use the `scaleX` or `scaleY` properties instead.

#### Inherited from

Phaser.Physics.Arcade.Sprite.scale

#### Defined in

node_modules/phaser/types/phaser.d.ts:69742

___

### scaleX

• **scaleX**: `number`

The horizontal scale of this Game Object.

#### Inherited from

Phaser.Physics.Arcade.Sprite.scaleX

#### Defined in

node_modules/phaser/types/phaser.d.ts:69747

___

### scaleY

• **scaleY**: `number`

The vertical scale of this Game Object.

#### Inherited from

Phaser.Physics.Arcade.Sprite.scaleY

#### Defined in

node_modules/phaser/types/phaser.d.ts:69752

___

### scene

• **scene**: `Scene`

A reference to the Scene to which this Game Object belongs.

Game Objects can only belong to one Scene.

You should consider this property as being read-only. You cannot move a
Game Object to another Scene by simply changing it.

#### Inherited from

Phaser.Physics.Arcade.Sprite.scene

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

Phaser.Physics.Arcade.Sprite.scrollFactorX

#### Defined in

node_modules/phaser/types/phaser.d.ts:69423

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

Phaser.Physics.Arcade.Sprite.scrollFactorY

#### Defined in

node_modules/phaser/types/phaser.d.ts:69442

___

### startOnRight

• `Protected` **startOnRight**: `boolean` = `false`

#### Defined in

[src/Pawns/Pawn.ts:8](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L8)

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

Phaser.Physics.Arcade.Sprite.state

#### Defined in

node_modules/phaser/types/phaser.d.ts:17032

___

### tabIndex

• **tabIndex**: `number`

The Tab Index of the Game Object.
Reserved for future use by plugins and the Input Manager.

#### Inherited from

Phaser.Physics.Arcade.Sprite.tabIndex

#### Defined in

node_modules/phaser/types/phaser.d.ts:17056

___

### texture

• **texture**: `Texture` \| `CanvasTexture`

The Texture this Game Object is using to render with.

#### Inherited from

Phaser.Physics.Arcade.Sprite.texture

#### Defined in

node_modules/phaser/types/phaser.d.ts:69542

___

### tint

• **tint**: `number`

The tint value being applied to the whole of the Game Object.
This property is a setter-only. Use the properties `tintTopLeft` etc to read the current tint value.

#### Inherited from

Phaser.Physics.Arcade.Sprite.tint

#### Defined in

node_modules/phaser/types/phaser.d.ts:69702

___

### tintBottomLeft

• **tintBottomLeft**: `number`

The tint value being applied to the bottom-left vertice of the Game Object.
This value is interpolated from the corner to the center of the Game Object.
The value should be set as a hex number, i.e. 0xff0000 for red, or 0xff00ff for purple.

#### Inherited from

Phaser.Physics.Arcade.Sprite.tintBottomLeft

#### Defined in

node_modules/phaser/types/phaser.d.ts:69628

___

### tintBottomRight

• **tintBottomRight**: `number`

The tint value being applied to the bottom-right vertice of the Game Object.
This value is interpolated from the corner to the center of the Game Object.
The value should be set as a hex number, i.e. 0xff0000 for red, or 0xff00ff for purple.

#### Inherited from

Phaser.Physics.Arcade.Sprite.tintBottomRight

#### Defined in

node_modules/phaser/types/phaser.d.ts:69635

___

### tintFill

• **tintFill**: `boolean`

The tint fill mode.

`false` = An additive tint (the default), where vertices colors are blended with the texture.
`true` = A fill tint, where the vertices colors replace the texture, but respects texture alpha.

#### Inherited from

Phaser.Physics.Arcade.Sprite.tintFill

#### Defined in

node_modules/phaser/types/phaser.d.ts:69643

___

### tintTopLeft

• **tintTopLeft**: `number`

The tint value being applied to the top-left vertice of the Game Object.
This value is interpolated from the corner to the center of the Game Object.
The value should be set as a hex number, i.e. 0xff0000 for red, or 0xff00ff for purple.

#### Inherited from

Phaser.Physics.Arcade.Sprite.tintTopLeft

#### Defined in

node_modules/phaser/types/phaser.d.ts:69614

___

### tintTopRight

• **tintTopRight**: `number`

The tint value being applied to the top-right vertice of the Game Object.
This value is interpolated from the corner to the center of the Game Object.
The value should be set as a hex number, i.e. 0xff0000 for red, or 0xff00ff for purple.

#### Inherited from

Phaser.Physics.Arcade.Sprite.tintTopRight

#### Defined in

node_modules/phaser/types/phaser.d.ts:69621

___

### type

• **type**: `string`

A textual representation of this Game Object, i.e. `sprite`.
Used internally by Phaser but is available for your own custom classes to populate.

#### Inherited from

Phaser.Physics.Arcade.Sprite.type

#### Defined in

node_modules/phaser/types/phaser.d.ts:17020

___

### visible

• **visible**: `boolean`

The visible state of the Game Object.

An invisible Game Object will skip rendering, but will still process update logic.

#### Inherited from

Phaser.Physics.Arcade.Sprite.visible

#### Defined in

node_modules/phaser/types/phaser.d.ts:69891

___

### w

• **w**: `number`

The w position of this Game Object.

#### Inherited from

Phaser.Physics.Arcade.Sprite.w

#### Defined in

node_modules/phaser/types/phaser.d.ts:69733

___

### wasOnFloor

• `Protected` **wasOnFloor**: `boolean` = `true`

#### Defined in

[src/Pawns/Pawn.ts:20](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L20)

___

### width

• **width**: `number`

The native (un-scaled) width of this Game Object.

Changing this value will not change the size that the Game Object is rendered in-game.
For that you need to either set the scale of the Game Object (`setScale`) or use
the `displayWidth` property.

#### Inherited from

Phaser.Physics.Arcade.Sprite.width

#### Defined in

node_modules/phaser/types/phaser.d.ts:69472

___

### x

• **x**: `number`

The x position of this Game Object.

#### Inherited from

Phaser.Physics.Arcade.Sprite.x

#### Defined in

node_modules/phaser/types/phaser.d.ts:69715

___

### y

• **y**: `number`

The y position of this Game Object.

#### Inherited from

Phaser.Physics.Arcade.Sprite.y

#### Defined in

node_modules/phaser/types/phaser.d.ts:69720

___

### z

• **z**: `number`

The z position of this Game Object.

Note: The z position does not control the rendering order of 2D Game Objects. Use
Phaser.GameObjects.Components.Depth#depth instead.

#### Inherited from

Phaser.Physics.Arcade.Sprite.z

#### Defined in

node_modules/phaser/types/phaser.d.ts:69728

___

### RENDER\_MASK

▪ `Static` `Readonly` **RENDER\_MASK**: `number`

The bitmask that `GameObject.renderFlags` is compared against to determine if the Game Object will render or not.

#### Inherited from

Phaser.Physics.Arcade.Sprite.RENDER\_MASK

#### Defined in

node_modules/phaser/types/phaser.d.ts:17400

## Methods

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`Pawn`](Pawns_Pawn.Pawn.md)

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. Default this. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.addListener

#### Defined in

node_modules/phaser/types/phaser.d.ts:9588

___

### addToDisplayList

▸ **addToDisplayList**(`displayList?`): [`Pawn`](Pawns_Pawn.Pawn.md)

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

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.addToDisplayList

#### Defined in

node_modules/phaser/types/phaser.d.ts:17342

___

### addToUpdateList

▸ **addToUpdateList**(): [`Pawn`](Pawns_Pawn.Pawn.md)

Adds this Game Object to the Update List belonging to the Scene.

When a Game Object is added to the Update List it will have its `preUpdate` method called
every game frame. This method is passed two parameters: `delta` and `time`.

If you wish to run your own logic within `preUpdate` then you should always call
`preUpdate.super(delta, time)` within it, or it may fail to process required operations,
such as Sprite animations.

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.addToUpdateList

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

Phaser.Physics.Arcade.Sprite.addedToScene

#### Defined in

node_modules/phaser/types/phaser.d.ts:17285

___

### canJump

▸ **canJump**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/Pawns/Pawn.ts:233](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L233)

___

### canWalk

▸ **canWalk**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/Pawns/Pawn.ts:141](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L141)

___

### chain

▸ **chain**(`key`): [`Pawn`](Pawns_Pawn.Pawn.md)

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

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.chain

#### Defined in

node_modules/phaser/types/phaser.d.ts:39429

___

### clearAlpha

▸ **clearAlpha**(): [`Pawn`](Pawns_Pawn.Pawn.md)

Clears all alpha values associated with this Game Object.

Immediately sets the alpha levels back to 1 (fully opaque).

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.clearAlpha

#### Defined in

node_modules/phaser/types/phaser.d.ts:68906

___

### clearMask

▸ **clearMask**(`destroyMask?`): [`Pawn`](Pawns_Pawn.Pawn.md)

Clears the mask that this Game Object was using.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destroyMask?` | `boolean` | Destroy the mask before clearing it? Default false. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.clearMask

#### Defined in

node_modules/phaser/types/phaser.d.ts:69194

___

### clearTint

▸ **clearTint**(): [`Pawn`](Pawns_Pawn.Pawn.md)

Clears all tint values associated with this Game Object.

Immediately sets the color values back to 0xffffff and the tint type to 'additive',
which results in no visible change to the texture.

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.clearTint

#### Defined in

node_modules/phaser/types/phaser.d.ts:69651

___

### climb

▸ **climb**(`speedX`, `speedY`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `speedX` | `number` |
| `speedY` | `number` |

#### Returns

`void`

#### Defined in

[src/Pawns/Pawn.ts:174](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L174)

___

### copyPosition

▸ **copyPosition**(`source`): [`Pawn`](Pawns_Pawn.Pawn.md)

Copies an object's coordinates to this Game Object's position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `Vector2Like` \| `Vector3Like` \| `Vector4Like` | An object with numeric 'x', 'y', 'z', or 'w' properties. Undefined values are not copied. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.copyPosition

#### Defined in

node_modules/phaser/types/phaser.d.ts:69787

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

Phaser.Physics.Arcade.Sprite.createBitmapMask

#### Defined in

node_modules/phaser/types/phaser.d.ts:69211

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

Phaser.Physics.Arcade.Sprite.createGeometryMask

#### Defined in

node_modules/phaser/types/phaser.d.ts:69225

___

### dead

▸ **dead**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/Pawns/Pawn.ts:339](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L339)

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

Phaser.Physics.Arcade.Sprite.destroy

#### Defined in

node_modules/phaser/types/phaser.d.ts:17395

___

### die

▸ **die**(): `void`

#### Returns

`void`

#### Defined in

[src/Pawns/Pawn.ts:329](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L329)

___

### disableBody

▸ **disableBody**(`disableGameObject?`, `hideGameObject?`): [`Pawn`](Pawns_Pawn.Pawn.md)

Stops and disables this Game Object's Body.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `disableGameObject?` | `boolean` | Also deactivate this Game Object. Default false. |
| `hideGameObject?` | `boolean` | Also hide this Game Object. Default false. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.disableBody

#### Defined in

node_modules/phaser/types/phaser.d.ts:70091

___

### disableInteractive

▸ **disableInteractive**(): [`Pawn`](Pawns_Pawn.Pawn.md)

If this Game Object has previously been enabled for input, this will disable it.

An object that is disabled for input stops processing or being considered for
input events, but can be turned back on again at any time by simply calling
`setInteractive()` with no arguments provided.

If want to completely remove interaction from this Game Object then use `removeInteractive` instead.

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.disableInteractive

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

Phaser.Physics.Arcade.Sprite.emit

#### Defined in

node_modules/phaser/types/phaser.d.ts:9572

___

### enableBody

▸ **enableBody**(`reset`, `x`, `y`, `enableGameObject`, `showGameObject`): [`Pawn`](Pawns_Pawn.Pawn.md)

Enables this Game Object's Body.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reset` | `boolean` | Also reset the Body and place it at (x, y). |
| `x` | `number` | The horizontal position to place the Game Object and Body. |
| `y` | `number` | The horizontal position to place the Game Object and Body. |
| `enableGameObject` | `boolean` | Also activate this Game Object. |
| `showGameObject` | `boolean` | Also show this Game Object. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.enableBody

#### Defined in

node_modules/phaser/types/phaser.d.ts:70084

___

### equipWeapon

▸ **equipWeapon**(`weapon`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `weapon` | [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md) |

#### Returns

`void`

#### Defined in

[src/Pawns/Pawn.ts:344](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L344)

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

Phaser.Physics.Arcade.Sprite.eventNames

#### Defined in

node_modules/phaser/types/phaser.d.ts:9553

___

### fire

▸ **fire**(`fireAngle?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fireAngle?` | `number` |

#### Returns

`void`

#### Defined in

[src/Pawns/Pawn.ts:350](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L350)

___

### getAttribute

▸ **getAttribute**(`name`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`number`

#### Defined in

[src/Pawns/Pawn.ts:298](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L298)

___

### getBodyDamage

▸ **getBodyDamage**(): `number`

#### Returns

`number`

#### Defined in

[src/Pawns/Pawn.ts:323](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L323)

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

Phaser.Physics.Arcade.Sprite.getBottomCenter

#### Defined in

node_modules/phaser/types/phaser.d.ts:69151

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

Phaser.Physics.Arcade.Sprite.getBottomLeft

#### Defined in

node_modules/phaser/types/phaser.d.ts:69143

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

Phaser.Physics.Arcade.Sprite.getBottomRight

#### Defined in

node_modules/phaser/types/phaser.d.ts:69159

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

Phaser.Physics.Arcade.Sprite.getBounds

#### Defined in

node_modules/phaser/types/phaser.d.ts:69166

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

Phaser.Physics.Arcade.Sprite.getCenter

#### Defined in

node_modules/phaser/types/phaser.d.ts:69095

___

### getClimbSpeed

▸ **getClimbSpeed**(): `number`

#### Returns

`number`

#### Defined in

[src/Pawns/Pawn.ts:318](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L318)

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

Phaser.Physics.Arcade.Sprite.getData

#### Defined in

node_modules/phaser/types/phaser.d.ts:17224

___

### getHealth

▸ **getHealth**(): `number`

#### Returns

`number`

#### Defined in

[src/Pawns/Pawn.ts:303](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L303)

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

Phaser.Physics.Arcade.Sprite.getIndexList

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

Phaser.Physics.Arcade.Sprite.getLeftCenter

#### Defined in

node_modules/phaser/types/phaser.d.ts:69127

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

Phaser.Physics.Arcade.Sprite.getLocalPoint

#### Defined in

node_modules/phaser/types/phaser.d.ts:69877

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

Phaser.Physics.Arcade.Sprite.getLocalTransformMatrix

#### Defined in

node_modules/phaser/types/phaser.d.ts:69854

___

### getMaxHealth

▸ **getMaxHealth**(): `number`

#### Returns

`number`

#### Defined in

[src/Pawns/Pawn.ts:308](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L308)

___

### getParentRotation

▸ **getParentRotation**(): `number`

Gets the sum total rotation of all of this Game Objects parent Containers.

The returned value is in radians and will be zero if this Game Object has no parent container.

#### Returns

`number`

#### Inherited from

Phaser.Physics.Arcade.Sprite.getParentRotation

#### Defined in

node_modules/phaser/types/phaser.d.ts:69884

___

### getPipelineName

▸ **getPipelineName**(): `string`

Gets the name of the WebGL Pipeline this Game Object is currently using.

#### Returns

`string`

#### Inherited from

Phaser.Physics.Arcade.Sprite.getPipelineName

#### Defined in

node_modules/phaser/types/phaser.d.ts:69404

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

Phaser.Physics.Arcade.Sprite.getPostPipeline

#### Defined in

node_modules/phaser/types/phaser.d.ts:69377

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

Phaser.Physics.Arcade.Sprite.getRightCenter

#### Defined in

node_modules/phaser/types/phaser.d.ts:69135

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

Phaser.Physics.Arcade.Sprite.getTopCenter

#### Defined in

node_modules/phaser/types/phaser.d.ts:69111

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

Phaser.Physics.Arcade.Sprite.getTopLeft

#### Defined in

node_modules/phaser/types/phaser.d.ts:69103

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

Phaser.Physics.Arcade.Sprite.getTopRight

#### Defined in

node_modules/phaser/types/phaser.d.ts:69119

___

### getWalkSpeed

▸ **getWalkSpeed**(): `number`

#### Returns

`number`

#### Defined in

[src/Pawns/Pawn.ts:313](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L313)

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

Phaser.Physics.Arcade.Sprite.getWorldTransformMatrix

#### Defined in

node_modules/phaser/types/phaser.d.ts:69861

___

### heal

▸ **heal**(`health`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `health` | `number` |

#### Returns

`void`

#### Defined in

[src/Pawns/Pawn.ts:281](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L281)

___

### hurt

▸ **hurt**(`health`, `isProjected?`, `hurtFromRight?`, `velocityProjection?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `health` | `number` | `undefined` |
| `isProjected` | `boolean` | `false` |
| `hurtFromRight` | `boolean` | `false` |
| `velocityProjection` | `number` | `250` |

#### Returns

`void`

#### Defined in

[src/Pawns/Pawn.ts:250](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L250)

___

### incData

▸ **incData**(`key`, `data?`): [`Pawn`](Pawns_Pawn.Pawn.md)

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

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.incData

#### Defined in

node_modules/phaser/types/phaser.d.ts:17185

___

### init

▸ **init**(`pawnData?`, `textureKey?`): [`Pawn`](Pawns_Pawn.Pawn.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pawnData?` | [`PawnData`](../modules/Pawns_PawnSpawn.md#pawndata) |
| `textureKey?` | `string` |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Defined in

[src/Pawns/Pawn.ts:67](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L67)

___

### initAnimations

▸ `Protected` **initAnimations**(`textureKey`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `textureKey` | `string` |

#### Returns

`void`

#### Defined in

[src/Pawns/Pawn.ts:99](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L99)

___

### initAttributes

▸ `Protected` **initAttributes**(): `void`

#### Returns

`void`

#### Defined in

[src/Pawns/Pawn.ts:104](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L104)

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

Phaser.Physics.Arcade.Sprite.initPipeline

#### Defined in

node_modules/phaser/types/phaser.d.ts:69323

___

### initStates

▸ `Private` **initStates**(): `void`

#### Returns

`void`

#### Defined in

[src/Pawns/Pawn.ts:88](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L88)

___

### isOnFloor

▸ **isOnFloor**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/Pawns/Pawn.ts:228](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L228)

___

### jump

▸ **jump**(): `void`

#### Returns

`void`

#### Defined in

[src/Pawns/Pawn.ts:238](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L238)

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

Phaser.Physics.Arcade.Sprite.listenerCount

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

Phaser.Physics.Arcade.Sprite.listeners

#### Defined in

node_modules/phaser/types/phaser.d.ts:9559

___

### lookDown

▸ `Protected` **lookDown**(): `void`

#### Returns

`void`

#### Defined in

[src/Pawns/Pawn.ts:204](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L204)

___

### lookOnLeft

▸ `Protected` **lookOnLeft**(): `void`

#### Returns

`void`

#### Defined in

[src/Pawns/Pawn.ts:216](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L216)

___

### lookOnRight

▸ `Protected` **lookOnRight**(): `void`

#### Returns

`void`

#### Defined in

[src/Pawns/Pawn.ts:210](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L210)

___

### lookStraight

▸ `Protected` **lookStraight**(): `void`

#### Returns

`void`

#### Defined in

[src/Pawns/Pawn.ts:222](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L222)

___

### lookUp

▸ `Protected` **lookUp**(): `void`

#### Returns

`void`

#### Defined in

[src/Pawns/Pawn.ts:198](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L198)

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`Pawn`](Pawns_Pawn.Pawn.md)

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.off

#### Defined in

node_modules/phaser/types/phaser.d.ts:9614

___

### on

▸ **on**(`event`, `fn`, `context?`): [`Pawn`](Pawns_Pawn.Pawn.md)

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. Default this. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.on

#### Defined in

node_modules/phaser/types/phaser.d.ts:9580

___

### once

▸ **once**(`event`, `fn`, `context?`): [`Pawn`](Pawns_Pawn.Pawn.md)

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. Default this. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.once

#### Defined in

node_modules/phaser/types/phaser.d.ts:9596

___

### play

▸ **play**(`key`, `ignoreIfPlaying?`): [`Pawn`](Pawns_Pawn.Pawn.md)

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

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.play

#### Defined in

node_modules/phaser/types/phaser.d.ts:39314

___

### playAfterDelay

▸ **playAfterDelay**(`key`, `delay`): [`Pawn`](Pawns_Pawn.Pawn.md)

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

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.playAfterDelay

#### Defined in

node_modules/phaser/types/phaser.d.ts:39389

___

### playAfterRepeat

▸ **playAfterRepeat**(`key`, `repeatCount?`): [`Pawn`](Pawns_Pawn.Pawn.md)

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

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.playAfterRepeat

#### Defined in

node_modules/phaser/types/phaser.d.ts:39406

___

### playReverse

▸ **playReverse**(`key`, `ignoreIfPlaying?`): [`Pawn`](Pawns_Pawn.Pawn.md)

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

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.playReverse

#### Defined in

node_modules/phaser/types/phaser.d.ts:39369

___

### postUpdate

▸ **postUpdate**(): `void`

#### Returns

`void`

#### Defined in

[src/Pawns/Pawn.ts:137](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L137)

___

### preUpdate

▸ `Protected` **preUpdate**(`time`, `delta`): `void`

Update this Sprite's animations.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time` | `number` | The current timestamp. |
| `delta` | `number` | The delta time, in ms, elapsed since the last frame. |

#### Returns

`void`

#### Inherited from

Phaser.Physics.Arcade.Sprite.preUpdate

#### Defined in

node_modules/phaser/types/phaser.d.ts:39259

___

### refreshBody

▸ **refreshBody**(): [`Pawn`](Pawns_Pawn.Pawn.md)

Syncs the Body's position and size with its parent Game Object.
You don't need to call this for Dynamic Bodies, as it happens automatically.
But for Static bodies it's a useful way of modifying the position of a Static Body
in the Physics World, based on its Game Object.

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.refreshBody

#### Defined in

node_modules/phaser/types/phaser.d.ts:70099

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`Pawn`](Pawns_Pawn.Pawn.md)

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.removeAllListeners

#### Defined in

node_modules/phaser/types/phaser.d.ts:9620

___

### removeFromDisplayList

▸ **removeFromDisplayList**(): [`Pawn`](Pawns_Pawn.Pawn.md)

Removes this Game Object from the Display List it is currently on.

A Game Object can only exist on one Display List at any given time, but may move freely removed
and added back at a later stage.

You can query which list it is on by looking at the `Phaser.GameObjects.GameObject#displayList` property.

If a Game Object isn't on any Display List, it will not be rendered. If you just wish to temporarly
disable it from rendering, consider using the `setVisible` method, instead.

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.removeFromDisplayList

#### Defined in

node_modules/phaser/types/phaser.d.ts:17367

___

### removeFromUpdateList

▸ **removeFromUpdateList**(): [`Pawn`](Pawns_Pawn.Pawn.md)

Removes this Game Object from the Scene's Update List.

When a Game Object is on the Update List, it will have its `preUpdate` method called
every game frame. Calling this method will remove it from the list, preventing this.

Removing a Game Object from the Update List will stop most internal functions working.
For example, removing a Sprite from the Update List will prevent it from being able to
run animations.

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.removeFromUpdateList

#### Defined in

node_modules/phaser/types/phaser.d.ts:17379

___

### removeInteractive

▸ **removeInteractive**(): [`Pawn`](Pawns_Pawn.Pawn.md)

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

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.removeInteractive

#### Defined in

node_modules/phaser/types/phaser.d.ts:17275

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`Pawn`](Pawns_Pawn.Pawn.md)

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.removeListener

#### Defined in

node_modules/phaser/types/phaser.d.ts:9605

___

### removePostPipeline

▸ **removePostPipeline**(`pipeline`): [`Pawn`](Pawns_Pawn.Pawn.md)

Removes a type of Post Pipeline instances from this Game Object, based on the given name, and destroys them.

If you wish to remove all Post Pipelines use the `resetPostPipeline` method instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pipeline` | `string` \| `PostFXPipeline` | The string-based name of the pipeline, or a pipeline class. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.removePostPipeline

#### Defined in

node_modules/phaser/types/phaser.d.ts:69399

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

Phaser.Physics.Arcade.Sprite.removedFromScene

#### Defined in

node_modules/phaser/types/phaser.d.ts:17295

___

### reset

▸ **reset**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Defined in

[src/Pawns/Pawn.ts:113](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L113)

___

### resetFlip

▸ **resetFlip**(): [`Pawn`](Pawns_Pawn.Pawn.md)

Resets the horizontal and vertical flipped state of this Game Object back to their default un-flipped state.

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.resetFlip

#### Defined in

node_modules/phaser/types/phaser.d.ts:69088

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

Phaser.Physics.Arcade.Sprite.resetPipeline

#### Defined in

node_modules/phaser/types/phaser.d.ts:69384

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

Phaser.Physics.Arcade.Sprite.resetPostPipeline

#### Defined in

node_modules/phaser/types/phaser.d.ts:69391

___

### setAcceleration

▸ **setAcceleration**(`x`, `y?`): [`Pawn`](Pawns_Pawn.Pawn.md)

Sets the body's horizontal and vertical acceleration. If the vertical acceleration value is not provided, the vertical acceleration is set to the same value as the horizontal acceleration.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The horizontal acceleration |
| `y?` | `number` | The vertical acceleration Default x. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setAcceleration

#### Defined in

node_modules/phaser/types/phaser.d.ts:69906

___

### setAccelerationX

▸ **setAccelerationX**(`value`): [`Pawn`](Pawns_Pawn.Pawn.md)

Sets the body's horizontal acceleration.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | The horizontal acceleration |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setAccelerationX

#### Defined in

node_modules/phaser/types/phaser.d.ts:69912

___

### setAccelerationY

▸ **setAccelerationY**(`value`): [`Pawn`](Pawns_Pawn.Pawn.md)

Sets the body's vertical acceleration.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | The vertical acceleration |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setAccelerationY

#### Defined in

node_modules/phaser/types/phaser.d.ts:69918

___

### setActive

▸ **setActive**(`value`): [`Pawn`](Pawns_Pawn.Pawn.md)

Sets the `active` property of this Game Object and returns this Game Object for further chaining.
A Game Object with its `active` property set to `true` will be updated by the Scenes UpdateList.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | True if this Game Object should be set as active, false if not. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setActive

#### Defined in

node_modules/phaser/types/phaser.d.ts:17103

___

### setAlpha

▸ **setAlpha**(`topLeft?`, `topRight?`, `bottomLeft?`, `bottomRight?`): [`Pawn`](Pawns_Pawn.Pawn.md)

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

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setAlpha

#### Defined in

node_modules/phaser/types/phaser.d.ts:68919

___

### setAngle

▸ **setAngle**(`degrees?`): [`Pawn`](Pawns_Pawn.Pawn.md)

Sets the angle of this Game Object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `degrees?` | `number` | The rotation of this Game Object, in degrees. Default 0. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setAngle

#### Defined in

node_modules/phaser/types/phaser.d.ts:69814

___

### setAngularAcceleration

▸ **setAngularAcceleration**(`value`): [`Pawn`](Pawns_Pawn.Pawn.md)

Sets the angular acceleration of the body.

In Arcade Physics, bodies cannot rotate. They are always axis-aligned.
However, they can have angular motion, which is passed on to the Game Object bound to the body,
causing them to visually rotate, even though the body remains axis-aligned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | The amount of angular acceleration. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setAngularAcceleration

#### Defined in

node_modules/phaser/types/phaser.d.ts:69938

___

### setAngularDrag

▸ **setAngularDrag**(`value`): [`Pawn`](Pawns_Pawn.Pawn.md)

Sets the angular drag of the body. Drag is applied to the current velocity, providing a form of deceleration.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | The amount of drag. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setAngularDrag

#### Defined in

node_modules/phaser/types/phaser.d.ts:69944

___

### setAngularVelocity

▸ **setAngularVelocity**(`value`): [`Pawn`](Pawns_Pawn.Pawn.md)

Sets the angular velocity of the body.

In Arcade Physics, bodies cannot rotate. They are always axis-aligned.
However, they can have angular motion, which is passed on to the Game Object bound to the body,
causing them to visually rotate, even though the body remains axis-aligned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | The amount of angular velocity. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setAngularVelocity

#### Defined in

node_modules/phaser/types/phaser.d.ts:69928

___

### setBlendMode

▸ **setBlendMode**(`value`): [`Pawn`](Pawns_Pawn.Pawn.md)

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

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setBlendMode

#### Defined in

node_modules/phaser/types/phaser.d.ts:68997

___

### setBodySize

▸ **setBodySize**(`width`, `height`, `center?`): [`Pawn`](Pawns_Pawn.Pawn.md)

Sets the size of this physics body. Setting the size does not adjust the dimensions of the parent Game Object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `width` | `number` | The new width of the physics body, in pixels. |
| `height` | `number` | The new height of the physics body, in pixels. |
| `center?` | `boolean` | Should the body be re-positioned so its center aligns with the parent Game Object? Default true. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setBodySize

#### Defined in

node_modules/phaser/types/phaser.d.ts:70186

___

### setBounce

▸ **setBounce**(`x`, `y?`): [`Pawn`](Pawns_Pawn.Pawn.md)

Sets the bounce values of this body.

Bounce is the amount of restitution, or elasticity, the body has when it collides with another object.
A value of 1 means that it will retain its full velocity after the rebound. A value of 0 means it will not rebound at all.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The amount of horizontal bounce to apply on collision. A float, typically between 0 and 1. |
| `y?` | `number` | The amount of vertical bounce to apply on collision. A float, typically between 0 and 1. Default x. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setBounce

#### Defined in

node_modules/phaser/types/phaser.d.ts:69954

___

### setBounceX

▸ **setBounceX**(`value`): [`Pawn`](Pawns_Pawn.Pawn.md)

Sets the horizontal bounce value for this body.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | The amount of horizontal bounce to apply on collision. A float, typically between 0 and 1. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setBounceX

#### Defined in

node_modules/phaser/types/phaser.d.ts:69960

___

### setBounceY

▸ **setBounceY**(`value`): [`Pawn`](Pawns_Pawn.Pawn.md)

Sets the vertical bounce value for this body.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | The amount of vertical bounce to apply on collision. A float, typically between 0 and 1. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setBounceY

#### Defined in

node_modules/phaser/types/phaser.d.ts:69966

___

### setCircle

▸ **setCircle**(`radius`, `offsetX?`, `offsetY?`): [`Pawn`](Pawns_Pawn.Pawn.md)

Sets this physics body to use a circle for collision instead of a rectangle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `radius` | `number` | The radius of the physics body, in pixels. |
| `offsetX?` | `number` | The amount to offset the body from the parent Game Object along the x-axis. |
| `offsetY?` | `number` | The amount to offset the body from the parent Game Object along the y-axis. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setCircle

#### Defined in

node_modules/phaser/types/phaser.d.ts:70194

___

### setCollideWorldBounds

▸ **setCollideWorldBounds**(`value?`, `bounceX?`, `bounceY?`): [`Pawn`](Pawns_Pawn.Pawn.md)

Sets whether this Body collides with the world boundary.

Optionally also sets the World Bounce values. If the `Body.worldBounce` is null, it's set to a new Phaser.Math.Vector2 first.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value?` | `boolean` | `true` if this body should collide with the world bounds, otherwise `false`. Default true. |
| `bounceX?` | `number` | If given this will be replace the `worldBounce.x` value. |
| `bounceY?` | `number` | If given this will be replace the `worldBounce.y` value. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setCollideWorldBounds

#### Defined in

node_modules/phaser/types/phaser.d.ts:69976

___

### setCrop

▸ **setCrop**(`x?`, `y?`, `width?`, `height?`): [`Pawn`](Pawns_Pawn.Pawn.md)

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

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setCrop

#### Defined in

node_modules/phaser/types/phaser.d.ts:69583

___

### setDamping

▸ **setDamping**(`value`): [`Pawn`](Pawns_Pawn.Pawn.md)

If this Body is using `drag` for deceleration this function controls how the drag is applied.
If set to `true` drag will use a damping effect rather than a linear approach. If you are
creating a game where the Body moves freely at any angle (i.e. like the way the ship moves in
the game Asteroids) then you will get a far smoother and more visually correct deceleration
by using damping, avoiding the axis-drift that is prone with linear deceleration.

If you enable this property then you should use far smaller `drag` values than with linear, as
they are used as a multiplier on the velocity. Values such as 0.95 will give a nice slow
deceleration, where-as smaller values, such as 0.5 will stop an object almost immediately.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | `true` to use damping for deceleration, or `false` to use linear deceleration. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setDamping

#### Defined in

node_modules/phaser/types/phaser.d.ts:70074

___

### setData

▸ **setData**(`key`, `data?`): [`Pawn`](Pawns_Pawn.Pawn.md)

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

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setData

#### Defined in

node_modules/phaser/types/phaser.d.ts:17171

___

### setDataEnabled

▸ **setDataEnabled**(): [`Pawn`](Pawns_Pawn.Pawn.md)

Adds a Data Manager component to this Game Object.

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setDataEnabled

#### Defined in

node_modules/phaser/types/phaser.d.ts:17128

___

### setDebug

▸ **setDebug**(`showBody`, `showVelocity`, `bodyColor`): [`Pawn`](Pawns_Pawn.Pawn.md)

Sets the debug values of this body.

Bodies will only draw their debug if debug has been enabled for Arcade Physics as a whole.
Note that there is a performance cost in drawing debug displays. It should never be used in production.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `showBody` | `boolean` | Set to `true` to have this body render its outline to the debug display. |
| `showVelocity` | `boolean` | Set to `true` to have this body render a velocity marker to the debug display. |
| `bodyColor` | `number` | The color of the body outline when rendered to the debug display. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setDebug

#### Defined in

node_modules/phaser/types/phaser.d.ts:69987

___

### setDebugBodyColor

▸ **setDebugBodyColor**(`value`): [`Pawn`](Pawns_Pawn.Pawn.md)

Sets the color of the body outline when it renders to the debug display.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | The color of the body outline when rendered to the debug display. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setDebugBodyColor

#### Defined in

node_modules/phaser/types/phaser.d.ts:69993

___

### setDepth

▸ **setDepth**(`value`): [`Pawn`](Pawns_Pawn.Pawn.md)

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

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setDepth

#### Defined in

node_modules/phaser/types/phaser.d.ts:69024

___

### setDisplayOrigin

▸ **setDisplayOrigin**(`x?`, `y?`): [`Pawn`](Pawns_Pawn.Pawn.md)

Sets the display origin of this Game Object.
The difference between this and setting the origin is that you can use pixel values for setting the display origin.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x?` | `number` | The horizontal display origin value. Default 0. |
| `y?` | `number` | The vertical display origin value. If not defined it will be set to the value of `x`. Default x. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setDisplayOrigin

#### Defined in

node_modules/phaser/types/phaser.d.ts:69277

___

### setDisplaySize

▸ **setDisplaySize**(`width`, `height`): [`Pawn`](Pawns_Pawn.Pawn.md)

Sets the display size of this Game Object.

Calling this will adjust the scale.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `width` | `number` | The width of this Game Object. |
| `height` | `number` | The height of this Game Object. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setDisplaySize

#### Defined in

node_modules/phaser/types/phaser.d.ts:69537

___

### setDrag

▸ **setDrag**(`x`, `y?`): [`Pawn`](Pawns_Pawn.Pawn.md)

Sets the body's horizontal and vertical drag. If the vertical drag value is not provided, the vertical drag is set to the same value as the horizontal drag.

Drag can be considered as a form of deceleration that will return the velocity of a body back to zero over time.
It is the absolute loss of velocity due to movement, in pixels per second squared.
The x and y components are applied separately.

When `useDamping` is true, this is 1 minus the damping factor.
A value of 1 means the Body loses no velocity.
A value of 0.95 means the Body loses 5% of its velocity per step.
A value of 0.5 means the Body loses 50% of its velocity per step.

Drag is applied only when `acceleration` is zero.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The amount of horizontal drag to apply. |
| `y?` | `number` | The amount of vertical drag to apply. Default x. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setDrag

#### Defined in

node_modules/phaser/types/phaser.d.ts:70026

___

### setDragX

▸ **setDragX**(`value`): [`Pawn`](Pawns_Pawn.Pawn.md)

Sets the body's horizontal drag.

Drag can be considered as a form of deceleration that will return the velocity of a body back to zero over time.
It is the absolute loss of velocity due to movement, in pixels per second squared.
The x and y components are applied separately.

When `useDamping` is true, this is 1 minus the damping factor.
A value of 1 means the Body loses no velocity.
A value of 0.95 means the Body loses 5% of its velocity per step.
A value of 0.5 means the Body loses 50% of its velocity per step.

Drag is applied only when `acceleration` is zero.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | The amount of horizontal drag to apply. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setDragX

#### Defined in

node_modules/phaser/types/phaser.d.ts:70043

___

### setDragY

▸ **setDragY**(`value`): [`Pawn`](Pawns_Pawn.Pawn.md)

Sets the body's vertical drag.

Drag can be considered as a form of deceleration that will return the velocity of a body back to zero over time.
It is the absolute loss of velocity due to movement, in pixels per second squared.
The x and y components are applied separately.

When `useDamping` is true, this is 1 minus the damping factor.
A value of 1 means the Body loses no velocity.
A value of 0.95 means the Body loses 5% of its velocity per step.
A value of 0.5 means the Body loses 50% of its velocity per step.

Drag is applied only when `acceleration` is zero.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | The amount of vertical drag to apply. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setDragY

#### Defined in

node_modules/phaser/types/phaser.d.ts:70060

___

### setFlip

▸ **setFlip**(`x`, `y`): [`Pawn`](Pawns_Pawn.Pawn.md)

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

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setFlip

#### Defined in

node_modules/phaser/types/phaser.d.ts:69083

___

### setFlipX

▸ **setFlipX**(`value`): [`Pawn`](Pawns_Pawn.Pawn.md)

Sets the horizontal flipped state of this Game Object.

A Game Object that is flipped horizontally will render inversed on the horizontal axis.
Flipping always takes place from the middle of the texture and does not impact the scale value.
If this Game Object has a physics body, it will not change the body. This is a rendering toggle only.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | The flipped state. `false` for no flip, or `true` to be flipped. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setFlipX

#### Defined in

node_modules/phaser/types/phaser.d.ts:69066

___

### setFlipY

▸ **setFlipY**(`value`): [`Pawn`](Pawns_Pawn.Pawn.md)

Sets the vertical flipped state of this Game Object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | The flipped state. `false` for no flip, or `true` to be flipped. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setFlipY

#### Defined in

node_modules/phaser/types/phaser.d.ts:69072

___

### setFrame

▸ **setFrame**(`frame`, `updateSize?`, `updateOrigin?`): [`Pawn`](Pawns_Pawn.Pawn.md)

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

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setFrame

#### Defined in

node_modules/phaser/types/phaser.d.ts:69607

___

### setFriction

▸ **setFriction**(`x`, `y?`): [`Pawn`](Pawns_Pawn.Pawn.md)

Sets the friction of this game object's physics body.
In Arcade Physics, friction is a special case of motion transfer from an "immovable" body to a riding body.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The amount of horizontal friction to apply, [0, 1]. |
| `y?` | `number` | The amount of vertical friction to apply, [0, 1]. Default x. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setFriction

#### Defined in

node_modules/phaser/types/phaser.d.ts:70107

___

### setFrictionX

▸ **setFrictionX**(`x`): [`Pawn`](Pawns_Pawn.Pawn.md)

Sets the horizontal friction of this game object's physics body.
This can move a riding body horizontally when it collides with this one on the vertical axis.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The amount of friction to apply, [0, 1]. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setFrictionX

#### Defined in

node_modules/phaser/types/phaser.d.ts:70114

___

### setFrictionY

▸ **setFrictionY**(`y`): [`Pawn`](Pawns_Pawn.Pawn.md)

Sets the vertical friction of this game object's physics body.
This can move a riding body vertically when it collides with this one on the horizontal axis.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `y` | `number` | The amount of friction to apply, [0, 1]. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setFrictionY

#### Defined in

node_modules/phaser/types/phaser.d.ts:70121

___

### setGravity

▸ **setGravity**(`x`, `y?`): [`Pawn`](Pawns_Pawn.Pawn.md)

Set the X and Y values of the gravitational pull to act upon this Arcade Physics Game Object. Values can be positive or negative. Larger values result in a stronger effect.

If only one value is provided, this value will be used for both the X and Y axis.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The gravitational force to be applied to the X-axis. |
| `y?` | `number` | The gravitational force to be applied to the Y-axis. If this is not specified, the X value will be used. Default x. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setGravity

#### Defined in

node_modules/phaser/types/phaser.d.ts:70130

___

### setGravityX

▸ **setGravityX**(`x`): [`Pawn`](Pawns_Pawn.Pawn.md)

Set the gravitational force to be applied to the X axis. Value can be positive or negative. Larger values result in a stronger effect.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The gravitational force to be applied to the X-axis. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setGravityX

#### Defined in

node_modules/phaser/types/phaser.d.ts:70136

___

### setGravityY

▸ **setGravityY**(`y`): [`Pawn`](Pawns_Pawn.Pawn.md)

Set the gravitational force to be applied to the Y axis. Value can be positive or negative. Larger values result in a stronger effect.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `y` | `number` | The gravitational force to be applied to the Y-axis. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setGravityY

#### Defined in

node_modules/phaser/types/phaser.d.ts:70142

___

### setHealth

▸ **setHealth**(`health`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `health` | `number` |

#### Returns

`void`

#### Defined in

[src/Pawns/Pawn.ts:286](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L286)

___

### setImmovable

▸ **setImmovable**(`value?`): [`Pawn`](Pawns_Pawn.Pawn.md)

Sets if this Body can be separated during collisions with other bodies.

When a body is immovable it means it won't move at all, not even to separate it from collision
overlap. If you just wish to prevent a body from being knocked around by other bodies, see
the `setPushable` method instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value?` | `boolean` | Sets if this body will be separated during collisions with other bodies. Default true. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setImmovable

#### Defined in

node_modules/phaser/types/phaser.d.ts:70152

___

### setInteractive

▸ **setInteractive**(`hitArea?`, `callback?`, `dropZone?`): [`Pawn`](Pawns_Pawn.Pawn.md)

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

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setInteractive

#### Defined in

node_modules/phaser/types/phaser.d.ts:17242

___

### setMask

▸ **setMask**(`mask`): [`Pawn`](Pawns_Pawn.Pawn.md)

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

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setMask

#### Defined in

node_modules/phaser/types/phaser.d.ts:69188

___

### setMass

▸ **setMass**(`value`): [`Pawn`](Pawns_Pawn.Pawn.md)

Sets the mass of the physics body

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | New value for the mass of the body. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setMass

#### Defined in

node_modules/phaser/types/phaser.d.ts:70158

___

### setMaxVelocity

▸ **setMaxVelocity**(`x`, `y?`): [`Pawn`](Pawns_Pawn.Pawn.md)

Sets the maximum velocity of the body.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The new maximum horizontal velocity. |
| `y?` | `number` | The new maximum vertical velocity. Default x. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setMaxVelocity

#### Defined in

node_modules/phaser/types/phaser.d.ts:70224

___

### setName

▸ **setName**(`value`): [`Pawn`](Pawns_Pawn.Pawn.md)

Sets the `name` property of this Game Object and returns this Game Object for further chaining.
The `name` property is not populated by Phaser and is presented for your own use.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | The name to be given to this Game Object. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setName

#### Defined in

node_modules/phaser/types/phaser.d.ts:17110

___

### setOffset

▸ **setOffset**(`x`, `y?`): [`Pawn`](Pawns_Pawn.Pawn.md)

Sets the body offset. This allows you to adjust the difference between the center of the body
and the x and y coordinates of the parent Game Object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The amount to offset the body from the parent Game Object along the x-axis. |
| `y?` | `number` | The amount to offset the body from the parent Game Object along the y-axis. Defaults to the value given for the x-axis. Default x. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setOffset

#### Defined in

node_modules/phaser/types/phaser.d.ts:70178

___

### setOrigin

▸ **setOrigin**(`x?`, `y?`): [`Pawn`](Pawns_Pawn.Pawn.md)

Sets the origin of this Game Object.

The values are given in the range 0 to 1.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x?` | `number` | The horizontal origin value. Default 0.5. |
| `y?` | `number` | The vertical origin value. If not defined it will be set to the value of `x`. Default x. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setOrigin

#### Defined in

node_modules/phaser/types/phaser.d.ts:69264

___

### setOriginFromFrame

▸ **setOriginFromFrame**(): [`Pawn`](Pawns_Pawn.Pawn.md)

Sets the origin of this Game Object based on the Pivot values in its Frame.

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setOriginFromFrame

#### Defined in

node_modules/phaser/types/phaser.d.ts:69269

___

### setPipeline

▸ **setPipeline**(`pipeline`, `pipelineData?`, `copyData?`): [`Pawn`](Pawns_Pawn.Pawn.md)

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

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setPipeline

#### Defined in

node_modules/phaser/types/phaser.d.ts:69335

___

### setPipelineData

▸ **setPipelineData**(`key`, `value?`): [`Pawn`](Pawns_Pawn.Pawn.md)

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

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setPipelineData

#### Defined in

node_modules/phaser/types/phaser.d.ts:69371

___

### setPosition

▸ **setPosition**(`x?`, `y?`, `z?`, `w?`): [`Pawn`](Pawns_Pawn.Pawn.md)

Sets the position of this Game Object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x?` | `number` | The x position of this Game Object. Default 0. |
| `y?` | `number` | The y position of this Game Object. If not set it will use the `x` value. Default x. |
| `z?` | `number` | The z position of this Game Object. Default 0. |
| `w?` | `number` | The w position of this Game Object. Default 0. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setPosition

#### Defined in

node_modules/phaser/types/phaser.d.ts:69781

___

### setPostPipeline

▸ **setPostPipeline**(`pipelines`, `pipelineData?`, `copyData?`): [`Pawn`](Pawns_Pawn.Pawn.md)

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

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setPostPipeline

#### Defined in

node_modules/phaser/types/phaser.d.ts:69358

___

### setPushable

▸ **setPushable**(`value?`): [`Pawn`](Pawns_Pawn.Pawn.md)

Sets if this Body can be pushed by another Body.

A body that cannot be pushed will reflect back all of the velocity it is given to the
colliding body. If that body is also not pushable, then the separation will be split
between them evenly.

If you want your body to never move or seperate at all, see the `setImmovable` method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value?` | `boolean` | Sets if this body can be pushed by collisions with another Body. Default true. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setPushable

#### Defined in

node_modules/phaser/types/phaser.d.ts:70170

___

### setRandomPosition

▸ **setRandomPosition**(`x?`, `y?`, `width?`, `height?`): [`Pawn`](Pawns_Pawn.Pawn.md)

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

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setRandomPosition

#### Defined in

node_modules/phaser/types/phaser.d.ts:69802

___

### setRotation

▸ **setRotation**(`radians?`): [`Pawn`](Pawns_Pawn.Pawn.md)

Sets the rotation of this Game Object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `radians?` | `number` | The rotation of this Game Object, in radians. Default 0. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setRotation

#### Defined in

node_modules/phaser/types/phaser.d.ts:69808

___

### setScale

▸ **setScale**(`x`, `y?`): [`Pawn`](Pawns_Pawn.Pawn.md)

Sets the scale of this Game Object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The horizontal scale of this Game Object. |
| `y?` | `number` | The vertical scale of this Game Object. If not set it will use the `x` value. Default x. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setScale

#### Defined in

node_modules/phaser/types/phaser.d.ts:69821

___

### setScrollFactor

▸ **setScrollFactor**(`x`, `y?`): [`Pawn`](Pawns_Pawn.Pawn.md)

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

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setScrollFactor

#### Defined in

node_modules/phaser/types/phaser.d.ts:69463

___

### setSize

▸ **setSize**(`width`, `height`): [`Pawn`](Pawns_Pawn.Pawn.md)

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

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setSize

#### Defined in

node_modules/phaser/types/phaser.d.ts:69528

___

### setSizeToFrame

▸ **setSizeToFrame**(`frame`): [`Pawn`](Pawns_Pawn.Pawn.md)

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

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setSizeToFrame

#### Defined in

node_modules/phaser/types/phaser.d.ts:69513

___

### setState

▸ **setState**(`value`): [`Pawn`](Pawns_Pawn.Pawn.md)

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

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setState

#### Defined in

node_modules/phaser/types/phaser.d.ts:17123

___

### setTexture

▸ **setTexture**(`key`, `frame?`): [`Pawn`](Pawns_Pawn.Pawn.md)

Sets the texture and frame this Game Object will use to render with.

Textures are referenced by their string-based keys, as stored in the Texture Manager.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key of the texture to be used, as stored in the Texture Manager. |
| `frame?` | `string` \| `number` | The name or index of the frame within the Texture. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setTexture

#### Defined in

node_modules/phaser/types/phaser.d.ts:69592

___

### setTint

▸ **setTint**(`topLeft?`, `topRight?`, `bottomLeft?`, `bottomRight?`): [`Pawn`](Pawns_Pawn.Pawn.md)

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

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setTint

#### Defined in

node_modules/phaser/types/phaser.d.ts:69673

___

### setTintFill

▸ **setTintFill**(`topLeft?`, `topRight?`, `bottomLeft?`, `bottomRight?`): [`Pawn`](Pawns_Pawn.Pawn.md)

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

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setTintFill

#### Defined in

node_modules/phaser/types/phaser.d.ts:69696

___

### setVelocity

▸ **setVelocity**(`x`, `y?`): [`Pawn`](Pawns_Pawn.Pawn.md)

Sets the velocity of the Body.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The horizontal velocity of the body. Positive values move the body to the right, while negative values move it to the left. |
| `y?` | `number` | The vertical velocity of the body. Positive values move the body down, while negative values move it up. Default x. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setVelocity

#### Defined in

node_modules/phaser/types/phaser.d.ts:70201

___

### setVelocityX

▸ **setVelocityX**(`x`): [`Pawn`](Pawns_Pawn.Pawn.md)

Sets the horizontal component of the body's velocity.

Positive values move the body to the right, while negative values move it to the left.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The new horizontal velocity. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setVelocityX

#### Defined in

node_modules/phaser/types/phaser.d.ts:70209

___

### setVelocityY

▸ **setVelocityY**(`y`): [`Pawn`](Pawns_Pawn.Pawn.md)

Sets the vertical component of the body's velocity.

Positive values move the body down, while negative values move it up.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `y` | `number` | The new vertical velocity of the body. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setVelocityY

#### Defined in

node_modules/phaser/types/phaser.d.ts:70217

___

### setVisible

▸ **setVisible**(`value`): [`Pawn`](Pawns_Pawn.Pawn.md)

Sets the visibility of this Game Object.

An invisible Game Object will skip rendering, but will still process update logic.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | The visible state of the Game Object. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setVisible

#### Defined in

node_modules/phaser/types/phaser.d.ts:69899

___

### setW

▸ **setW**(`value?`): [`Pawn`](Pawns_Pawn.Pawn.md)

Sets the w position of this Game Object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value?` | `number` | The w position of this Game Object. Default 0. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setW

#### Defined in

node_modules/phaser/types/phaser.d.ts:69848

___

### setX

▸ **setX**(`value?`): [`Pawn`](Pawns_Pawn.Pawn.md)

Sets the x position of this Game Object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value?` | `number` | The x position of this Game Object. Default 0. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setX

#### Defined in

node_modules/phaser/types/phaser.d.ts:69827

___

### setY

▸ **setY**(`value?`): [`Pawn`](Pawns_Pawn.Pawn.md)

Sets the y position of this Game Object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value?` | `number` | The y position of this Game Object. Default 0. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setY

#### Defined in

node_modules/phaser/types/phaser.d.ts:69833

___

### setZ

▸ **setZ**(`value?`): [`Pawn`](Pawns_Pawn.Pawn.md)

Sets the z position of this Game Object.

Note: The z position does not control the rendering order of 2D Game Objects. Use
Phaser.GameObjects.Components.Depth#setDepth instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value?` | `number` | The z position of this Game Object. Default 0. |

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.setZ

#### Defined in

node_modules/phaser/types/phaser.d.ts:69842

___

### shutdown

▸ **shutdown**(): `void`

Removes all listeners.

#### Returns

`void`

#### Inherited from

Phaser.Physics.Arcade.Sprite.shutdown

#### Defined in

node_modules/phaser/types/phaser.d.ts:9543

___

### startClimbing

▸ `Private` **startClimbing**(): `void`

#### Returns

`void`

#### Defined in

[src/Pawns/Pawn.ts:182](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L182)

___

### startWalking

▸ `Private` **startWalking**(): `void`

#### Returns

`void`

#### Defined in

[src/Pawns/Pawn.ts:159](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L159)

___

### stop

▸ **stop**(): [`Pawn`](Pawns_Pawn.Pawn.md)

Immediately stops the current animation from playing and dispatches the `ANIMATION_STOP` events.

If no animation is playing, no event will be dispatched.

If there is another animation queued (via the `chain` method) then it will start playing immediately.

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.stop

#### Defined in

node_modules/phaser/types/phaser.d.ts:39438

___

### stopAfterDelay

▸ **stopAfterDelay**(`delay`): [`Pawn`](Pawns_Pawn.Pawn.md)

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

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.stopAfterDelay

#### Defined in

node_modules/phaser/types/phaser.d.ts:39451

___

### stopAfterRepeat

▸ **stopAfterRepeat**(`repeatCount?`): [`Pawn`](Pawns_Pawn.Pawn.md)

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

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.stopAfterRepeat

#### Defined in

node_modules/phaser/types/phaser.d.ts:39464

___

### stopClimbing

▸ **stopClimbing**(): `void`

#### Returns

`void`

#### Defined in

[src/Pawns/Pawn.ts:188](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L188)

___

### stopFiring

▸ **stopFiring**(): `void`

#### Returns

`void`

#### Defined in

[src/Pawns/Pawn.ts:363](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L363)

___

### stopOnFrame

▸ **stopOnFrame**(`frame`): [`Pawn`](Pawns_Pawn.Pawn.md)

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

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.stopOnFrame

#### Defined in

node_modules/phaser/types/phaser.d.ts:39478

___

### stopWalking

▸ **stopWalking**(): `void`

#### Returns

`void`

#### Defined in

[src/Pawns/Pawn.ts:164](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L164)

___

### toJSON

▸ **toJSON**(): `JSONGameObject`

Build a JSON representation of this Sprite.

#### Returns

`JSONGameObject`

#### Inherited from

Phaser.Physics.Arcade.Sprite.toJSON

#### Defined in

node_modules/phaser/types/phaser.d.ts:39483

___

### toggleData

▸ **toggleData**(`key`): [`Pawn`](Pawns_Pawn.Pawn.md)

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

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.toggleData

#### Defined in

node_modules/phaser/types/phaser.d.ts:17198

___

### toggleFlipX

▸ **toggleFlipX**(): [`Pawn`](Pawns_Pawn.Pawn.md)

Toggles the horizontal flipped state of this Game Object.

A Game Object that is flipped horizontally will render inversed on the horizontal axis.
Flipping always takes place from the middle of the texture and does not impact the scale value.
If this Game Object has a physics body, it will not change the body. This is a rendering toggle only.

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.toggleFlipX

#### Defined in

node_modules/phaser/types/phaser.d.ts:69051

___

### toggleFlipY

▸ **toggleFlipY**(): [`Pawn`](Pawns_Pawn.Pawn.md)

Toggles the vertical flipped state of this Game Object.

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.toggleFlipY

#### Defined in

node_modules/phaser/types/phaser.d.ts:69056

___

### update

▸ **update**(...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`void`

#### Overrides

Phaser.Physics.Arcade.Sprite.update

#### Defined in

[src/Pawns/Pawn.ts:126](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L126)

___

### updateAnimations

▸ `Protected` **updateAnimations**(): `void`

Update the anims of this Pawn

#### Returns

`void`

#### Defined in

[src/Pawns/Pawn.ts:133](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L133)

___

### updateDisplayOrigin

▸ **updateDisplayOrigin**(): [`Pawn`](Pawns_Pawn.Pawn.md)

Updates the Display Origin cached values internally stored on this Game Object.
You don't usually call this directly, but it is exposed for edge-cases where you may.

#### Returns

[`Pawn`](Pawns_Pawn.Pawn.md)

#### Inherited from

Phaser.Physics.Arcade.Sprite.updateDisplayOrigin

#### Defined in

node_modules/phaser/types/phaser.d.ts:69283

___

### walk

▸ **walk**(): `void`

#### Returns

`void`

#### Defined in

[src/Pawns/Pawn.ts:146](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Pawns/Pawn.ts#L146)

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

Phaser.Physics.Arcade.Sprite.willRender

#### Defined in

node_modules/phaser/types/phaser.d.ts:17313
