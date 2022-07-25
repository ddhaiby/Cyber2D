[cyber2d](../README.md) / [Modules](../modules.md) / [Weapons/FireWeapons/CYBR\_FireWeapon](../modules/Weapons_FireWeapons_CYBR_FireWeapon.md) / CYBR\_FireWeapon

# Class: CYBR\_FireWeapon

[Weapons/FireWeapons/CYBR_FireWeapon](../modules/Weapons_FireWeapons_CYBR_FireWeapon.md).CYBR_FireWeapon

## Hierarchy

- [`CYBR_Weapon`](Weapons_CYBR_Weapon.CYBR_Weapon.md)

  ↳ **`CYBR_FireWeapon`**

  ↳↳ [`CyberPistol`](Weapons_FireWeapons_CyberPistol.CyberPistol.md)

  ↳↳ [`CyberShotgun`](Weapons_FireWeapons_CyberShotgun.CyberShotgun.md)

  ↳↳ [`GuardWeapon`](Weapons_FireWeapons_GuardWeapon.GuardWeapon.md)

## Table of contents

### Constructors

- [constructor](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#constructor)

### Properties

- [active](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#active)
- [alpha](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#alpha)
- [alphaBottomLeft](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#alphabottomleft)
- [alphaBottomRight](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#alphabottomright)
- [alphaTopLeft](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#alphatopleft)
- [alphaTopRight](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#alphatopright)
- [angle](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#angle)
- [anims](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#anims)
- [blendMode](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#blendmode)
- [body](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#body)
- [bulletPerFire](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#bulletperfire)
- [cameraFilter](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#camerafilter)
- [damage](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#damage)
- [data](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#data)
- [defaultPipeline](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#defaultpipeline)
- [depth](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#depth)
- [displayHeight](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#displayheight)
- [displayList](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#displaylist)
- [displayOriginX](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#displayoriginx)
- [displayOriginY](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#displayoriginy)
- [displayWidth](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#displaywidth)
- [emptyWeaponSound](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#emptyweaponsound)
- [fireSound](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#firesound)
- [flipX](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#flipx)
- [flipY](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#flipy)
- [frame](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#frame)
- [gripX](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#gripx)
- [gripY](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#gripy)
- [hasPostPipeline](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#haspostpipeline)
- [height](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#height)
- [ignoreDestroy](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#ignoredestroy)
- [input](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#input)
- [isCropped](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#iscropped)
- [isTinted](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#istinted)
- [lastTimeEmptyWeaponSoundPlayed](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#lasttimeemptyweaponsoundplayed)
- [mask](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#mask)
- [muzzleX](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#muzzlex)
- [muzzleY](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#muzzley)
- [name](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#name)
- [originX](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#originx)
- [originY](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#originy)
- [owner](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#owner)
- [parentContainer](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#parentcontainer)
- [pipeline](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#pipeline)
- [pipelineData](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#pipelinedata)
- [postPipelines](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#postpipelines)
- [reloadRate](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#reloadrate)
- [reloadSound](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#reloadsound)
- [renderFlags](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#renderflags)
- [rotation](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#rotation)
- [scale](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#scale)
- [scaleX](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#scalex)
- [scaleY](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#scaley)
- [scene](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#scene)
- [scrollFactorX](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#scrollfactorx)
- [scrollFactorY](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#scrollfactory)
- [state](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#state)
- [tabIndex](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#tabindex)
- [texture](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#texture)
- [timerReloadWeapon](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#timerreloadweapon)
- [tint](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#tint)
- [tintBottomLeft](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#tintbottomleft)
- [tintBottomRight](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#tintbottomright)
- [tintFill](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#tintfill)
- [tintTopLeft](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#tinttopleft)
- [tintTopRight](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#tinttopright)
- [type](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#type)
- [visible](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#visible)
- [w](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#w)
- [weapon](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#weapon)
- [width](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#width)
- [x](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#x)
- [y](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#y)
- [z](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#z)
- [RENDER\_MASK](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#render_mask)

### Accessors

- [bulletClass](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#bulletclass)
- [bulletGravity](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#bulletgravity)
- [bulletKillType](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#bulletkilltype)
- [bulletLifespan](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#bulletlifespan)
- [bulletSpeed](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#bulletspeed)
- [bullets](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#bullets)
- [fireAngle](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#fireangle)
- [fireLimit](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#firelimit)
- [fireRate](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#firerate)
- [shots](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#shots)

### Methods

- [addListener](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#addlistener)
- [addToDisplayList](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#addtodisplaylist)
- [addToUpdateList](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#addtoupdatelist)
- [addedToScene](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#addedtoscene)
- [chain](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#chain)
- [clearAlpha](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#clearalpha)
- [clearMask](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#clearmask)
- [clearTint](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#cleartint)
- [copyPosition](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#copyposition)
- [createBitmapMask](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#createbitmapmask)
- [createGeometryMask](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#creategeometrymask)
- [decrementShots](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#decrementshots)
- [destroy](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#destroy)
- [disableInteractive](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#disableinteractive)
- [emit](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#emit)
- [eventNames](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#eventnames)
- [fire](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#fire)
- [getBottomCenter](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#getbottomcenter)
- [getBottomLeft](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#getbottomleft)
- [getBottomRight](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#getbottomright)
- [getBounds](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#getbounds)
- [getCenter](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#getcenter)
- [getData](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#getdata)
- [getIndexList](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#getindexlist)
- [getLeftCenter](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#getleftcenter)
- [getLocalPoint](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#getlocalpoint)
- [getLocalTransformMatrix](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#getlocaltransformmatrix)
- [getParentRotation](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#getparentrotation)
- [getPipelineName](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#getpipelinename)
- [getPostPipeline](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#getpostpipeline)
- [getRightCenter](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#getrightcenter)
- [getTopCenter](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#gettopcenter)
- [getTopLeft](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#gettopleft)
- [getTopRight](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#gettopright)
- [getWorldTransformMatrix](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#getworldtransformmatrix)
- [incData](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#incdata)
- [initAnimations](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#initanimations)
- [initPipeline](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#initpipeline)
- [listenerCount](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#listenercount)
- [listeners](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#listeners)
- [off](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#off)
- [on](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#on)
- [once](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#once)
- [play](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#play)
- [playAfterDelay](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#playafterdelay)
- [playAfterRepeat](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#playafterrepeat)
- [playReverse](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#playreverse)
- [preUpdate](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#preupdate)
- [reload](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#reload)
- [removeAllListeners](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#removealllisteners)
- [removeFromDisplayList](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#removefromdisplaylist)
- [removeFromUpdateList](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#removefromupdatelist)
- [removeInteractive](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#removeinteractive)
- [removeListener](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#removelistener)
- [removePostPipeline](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#removepostpipeline)
- [removedFromScene](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#removedfromscene)
- [resetFlip](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#resetflip)
- [resetPipeline](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#resetpipeline)
- [resetPostPipeline](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#resetpostpipeline)
- [setActive](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#setactive)
- [setAlpha](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#setalpha)
- [setAngle](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#setangle)
- [setBlendMode](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#setblendmode)
- [setBulletPerFire](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#setbulletperfire)
- [setCrop](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#setcrop)
- [setData](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#setdata)
- [setDataEnabled](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#setdataenabled)
- [setDepth](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#setdepth)
- [setDisplayOrigin](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#setdisplayorigin)
- [setDisplaySize](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#setdisplaysize)
- [setFlip](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#setflip)
- [setFlipX](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#setflipx)
- [setFlipY](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#setflipy)
- [setFrame](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#setframe)
- [setGripPosition](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#setgripposition)
- [setInteractive](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#setinteractive)
- [setMask](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#setmask)
- [setMuzzlePosition](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#setmuzzleposition)
- [setName](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#setname)
- [setOrigin](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#setorigin)
- [setOriginFromFrame](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#setoriginfromframe)
- [setOwner](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#setowner)
- [setPipeline](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#setpipeline)
- [setPipelineData](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#setpipelinedata)
- [setPosition](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#setposition)
- [setPostPipeline](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#setpostpipeline)
- [setRandomPosition](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#setrandomposition)
- [setRotation](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#setrotation)
- [setScale](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#setscale)
- [setScrollFactor](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#setscrollfactor)
- [setShots](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#setshots)
- [setSize](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#setsize)
- [setSizeToFrame](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#setsizetoframe)
- [setState](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#setstate)
- [setTexture](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#settexture)
- [setTint](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#settint)
- [setTintFill](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#settintfill)
- [setVisible](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#setvisible)
- [setW](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#setw)
- [setX](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#setx)
- [setY](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#sety)
- [setZ](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#setz)
- [shutdown](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#shutdown)
- [stop](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#stop)
- [stopAfterDelay](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#stopafterdelay)
- [stopAfterRepeat](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#stopafterrepeat)
- [stopFiring](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#stopfiring)
- [stopOnFrame](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#stoponframe)
- [stopReloading](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#stopreloading)
- [toJSON](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#tojson)
- [toggleData](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#toggledata)
- [toggleFlipX](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#toggleflipx)
- [toggleFlipY](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#toggleflipy)
- [trackSprite](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#tracksprite)
- [tryReloading](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#tryreloading)
- [update](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#update)
- [updateDisplayOrigin](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#updatedisplayorigin)
- [willRender](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md#willrender)

## Constructors

### constructor

• **new CYBR_FireWeapon**(`scene`, `x`, `y`, `texture?`, `frame?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | `Scene` |
| `x` | `number` |
| `y` | `number` |
| `texture?` | `string` \| `Texture` |
| `frame?` | `string` \| `number` |

#### Overrides

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[constructor](Weapons_CYBR_Weapon.CYBR_Weapon.md#constructor)

#### Defined in

[src/Weapons/FireWeapons/CYBR_FireWeapon.ts:41](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Weapons/FireWeapons/CYBR_FireWeapon.ts#L41)

## Properties

### active

• **active**: `boolean`

The active state of this Game Object.
A Game Object with an active state of `true` is processed by the Scenes UpdateList, if added to it.
An active object is one which is having its logic and internal systems updated.

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[active](Weapons_CYBR_Weapon.CYBR_Weapon.md#active)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17050

___

### alpha

• **alpha**: `number`

The alpha value of the Game Object.

This is a global value, impacting the entire Game Object, not just a region of it.

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[alpha](Weapons_CYBR_Weapon.CYBR_Weapon.md#alpha)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39510

___

### alphaBottomLeft

• **alphaBottomLeft**: `number`

The alpha value starting from the bottom-left of the Game Object.
This value is interpolated from the corner to the center of the Game Object.

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[alphaBottomLeft](Weapons_CYBR_Weapon.CYBR_Weapon.md#alphabottomleft)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39528

___

### alphaBottomRight

• **alphaBottomRight**: `number`

The alpha value starting from the bottom-right of the Game Object.
This value is interpolated from the corner to the center of the Game Object.

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[alphaBottomRight](Weapons_CYBR_Weapon.CYBR_Weapon.md#alphabottomright)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39534

___

### alphaTopLeft

• **alphaTopLeft**: `number`

The alpha value starting from the top-left of the Game Object.
This value is interpolated from the corner to the center of the Game Object.

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[alphaTopLeft](Weapons_CYBR_Weapon.CYBR_Weapon.md#alphatopleft)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39516

___

### alphaTopRight

• **alphaTopRight**: `number`

The alpha value starting from the top-right of the Game Object.
This value is interpolated from the corner to the center of the Game Object.

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[alphaTopRight](Weapons_CYBR_Weapon.CYBR_Weapon.md#alphatopright)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39522

___

### angle

• **angle**: `number`

The angle of this Game Object as expressed in degrees.

Phaser uses a right-hand clockwise rotation system, where 0 is right, 90 is down, 180/-180 is left
and -90 is up.

If you prefer to work in radians, see the `rotation` property instead.

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[angle](Weapons_CYBR_Weapon.CYBR_Weapon.md#angle)

#### Defined in

node_modules/phaser/types/phaser.d.ts:40346

___

### anims

• **anims**: `AnimationState`

The Animation State component of this Sprite.

This component provides features to apply animations to this Sprite.
It is responsible for playing, loading, queuing animations for later playback,
mixing between animations and setting the current animation frame to this Sprite.

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[anims](Weapons_CYBR_Weapon.CYBR_Weapon.md#anims)

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

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[blendMode](Weapons_CYBR_Weapon.CYBR_Weapon.md#blendmode)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39557

___

### body

• **body**: `Body` \| `StaticBody` \| `BodyType`

If this Game Object is enabled for Arcade or Matter Physics then this property will contain a reference to a Physics Body.

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[body](Weapons_CYBR_Weapon.CYBR_Weapon.md#body)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17088

___

### bulletPerFire

• `Protected` **bulletPerFire**: `number` = `1`

#### Defined in

[src/Weapons/FireWeapons/CYBR_FireWeapon.ts:24](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Weapons/FireWeapons/CYBR_FireWeapon.ts#L24)

___

### cameraFilter

• **cameraFilter**: `number`

A bitmask that controls if this Game Object is drawn by a Camera or not.
Not usually set directly, instead call `Camera.ignore`, however you can
set this property directly using the Camera.id property:

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[cameraFilter](Weapons_CYBR_Weapon.CYBR_Weapon.md#camerafilter)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17077

___

### damage

• **damage**: `number` = `0`

The damage per attack

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[damage](Weapons_CYBR_Weapon.CYBR_Weapon.md#damage)

#### Defined in

[src/Weapons/CYBR_Weapon.ts:6](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Weapons/CYBR_Weapon.ts#L6)

___

### data

• **data**: `DataManager`

A Data Manager.
It allows you to store, query and get key/value paired information specific to this Game Object.
`null` by default. Automatically created if you use `getData` or `setData` or `setDataEnabled`.

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[data](Weapons_CYBR_Weapon.CYBR_Weapon.md#data)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17063

___

### defaultPipeline

• **defaultPipeline**: `WebGLPipeline`

The initial WebGL pipeline of this Game Object.

If you call `resetPipeline` on this Game Object, the pipeline is reset to this default.

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[defaultPipeline](Weapons_CYBR_Weapon.CYBR_Weapon.md#defaultpipeline)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39874

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

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[depth](Weapons_CYBR_Weapon.CYBR_Weapon.md#depth)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39594

___

### displayHeight

• **displayHeight**: `number`

The displayed height of this Game Object.

This value takes into account the scale factor.

Setting this value will adjust the Game Object's scale property.

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[displayHeight](Weapons_CYBR_Weapon.CYBR_Weapon.md#displayheight)

#### Defined in

node_modules/phaser/types/phaser.d.ts:40083

___

### displayList

• **displayList**: `DisplayList` \| `Layer`

Holds a reference to the Display List that contains this Game Object.

This is set automatically when this Game Object is added to a Scene or Layer.

You should treat this property as being read-only.

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[displayList](Weapons_CYBR_Weapon.CYBR_Weapon.md#displaylist)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17014

___

### displayOriginX

• **displayOriginX**: `number`

The horizontal display origin of this Game Object.
The origin is a normalized value between 0 and 1.
The displayOrigin is a pixel value, based on the size of the Game Object combined with the origin.

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[displayOriginX](Weapons_CYBR_Weapon.CYBR_Weapon.md#displayoriginx)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39832

___

### displayOriginY

• **displayOriginY**: `number`

The vertical display origin of this Game Object.
The origin is a normalized value between 0 and 1.
The displayOrigin is a pixel value, based on the size of the Game Object combined with the origin.

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[displayOriginY](Weapons_CYBR_Weapon.CYBR_Weapon.md#displayoriginy)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39839

___

### displayWidth

• **displayWidth**: `number`

The displayed width of this Game Object.

This value takes into account the scale factor.

Setting this value will adjust the Game Object's scale property.

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[displayWidth](Weapons_CYBR_Weapon.CYBR_Weapon.md#displaywidth)

#### Defined in

node_modules/phaser/types/phaser.d.ts:40074

___

### emptyWeaponSound

• `Protected` **emptyWeaponSound**: `string` = `""`

Sound when trying to fire with 0 bullet

#### Defined in

[src/Weapons/FireWeapons/CYBR_FireWeapon.ts:33](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Weapons/FireWeapons/CYBR_FireWeapon.ts#L33)

___

### fireSound

• `Protected` **fireSound**: `string` = `""`

Sound for the fire

#### Defined in

[src/Weapons/FireWeapons/CYBR_FireWeapon.ts:30](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Weapons/FireWeapons/CYBR_FireWeapon.ts#L30)

___

### flipX

• **flipX**: `boolean`

The horizontally flipped state of the Game Object.

A Game Object that is flipped horizontally will render inversed on the horizontal axis.
Flipping always takes place from the middle of the texture and does not impact the scale value.
If this Game Object has a physics body, it will not change the body. This is a rendering toggle only.

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[flipX](Weapons_CYBR_Weapon.CYBR_Weapon.md#flipx)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39617

___

### flipY

• **flipY**: `boolean`

The vertically flipped state of the Game Object.

A Game Object that is flipped vertically will render inversed on the vertical axis (i.e. upside down)
Flipping always takes place from the middle of the texture and does not impact the scale value.
If this Game Object has a physics body, it will not change the body. This is a rendering toggle only.

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[flipY](Weapons_CYBR_Weapon.CYBR_Weapon.md#flipy)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39626

___

### frame

• **frame**: `Frame`

The Texture Frame this Game Object is using to render with.

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[frame](Weapons_CYBR_Weapon.CYBR_Weapon.md#frame)

#### Defined in

node_modules/phaser/types/phaser.d.ts:40131

___

### gripX

• `Protected` **gripX**: `number` = `0`

X-position of the grip. It defines the origin of the weapon

#### Defined in

[src/Weapons/FireWeapons/CYBR_FireWeapon.ts:19](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Weapons/FireWeapons/CYBR_FireWeapon.ts#L19)

___

### gripY

• `Protected` **gripY**: `number` = `0`

Y-position of the grip. It defines the origin of the weapon

#### Defined in

[src/Weapons/FireWeapons/CYBR_FireWeapon.ts:22](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Weapons/FireWeapons/CYBR_FireWeapon.ts#L22)

___

### hasPostPipeline

• **hasPostPipeline**: `boolean`

Does this Game Object have any Post Pipelines set?

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[hasPostPipeline](Weapons_CYBR_Weapon.CYBR_Weapon.md#haspostpipeline)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39884

___

### height

• **height**: `number`

The native (un-scaled) height of this Game Object.

Changing this value will not change the size that the Game Object is rendered in-game.
For that you need to either set the scale of the Game Object (`setScale`) or use
the `displayHeight` property.

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[height](Weapons_CYBR_Weapon.CYBR_Weapon.md#height)

#### Defined in

node_modules/phaser/types/phaser.d.ts:40065

___

### ignoreDestroy

• **ignoreDestroy**: `boolean`

This Game Object will ignore all calls made to its destroy method if this flag is set to `true`.
This includes calls that may come from a Group, Container or the Scene itself.
While it allows you to persist a Game Object across Scenes, please understand you are entirely
responsible for managing references to and from this Game Object.

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[ignoreDestroy](Weapons_CYBR_Weapon.CYBR_Weapon.md#ignoredestroy)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17096

___

### input

• **input**: `InteractiveObject`

If this Game Object is enabled for input then this property will contain an InteractiveObject instance.
Not usually set directly. Instead call `GameObject.setInteractive()`.

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[input](Weapons_CYBR_Weapon.CYBR_Weapon.md#input)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17083

___

### isCropped

• **isCropped**: `boolean`

A boolean flag indicating if this Game Object is being cropped or not.
You can toggle this at any time after `setCrop` has been called, to turn cropping on or off.
Equally, calling `setCrop` with no arguments will reset the crop and disable it.

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[isCropped](Weapons_CYBR_Weapon.CYBR_Weapon.md#iscropped)

#### Defined in

node_modules/phaser/types/phaser.d.ts:40138

___

### isTinted

• `Readonly` **isTinted**: `boolean`

Does this Game Object have a tint applied?

It checks to see if the 4 tint properties are set to the value 0xffffff
and that the `tintFill` property is `false`. This indicates that a Game Object isn't tinted.

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[isTinted](Weapons_CYBR_Weapon.CYBR_Weapon.md#istinted)

#### Defined in

node_modules/phaser/types/phaser.d.ts:40294

___

### lastTimeEmptyWeaponSoundPlayed

• `Private` **lastTimeEmptyWeaponSoundPlayed**: `number` = `0`

Last time emptyWeaponSound has been played

#### Defined in

[src/Weapons/FireWeapons/CYBR_FireWeapon.ts:36](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Weapons/FireWeapons/CYBR_FireWeapon.ts#L36)

___

### mask

• **mask**: `BitmapMask` \| `GeometryMask`

The Mask this Game Object is using during render.

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[mask](Weapons_CYBR_Weapon.CYBR_Weapon.md#mask)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39755

___

### muzzleX

• `Protected` **muzzleX**: `number` = `0`

X-position from where the bullets will spawn

#### Defined in

[src/Weapons/FireWeapons/CYBR_FireWeapon.ts:13](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Weapons/FireWeapons/CYBR_FireWeapon.ts#L13)

___

### muzzleY

• `Protected` **muzzleY**: `number` = `0`

Y-position from where the bullets will spawn

#### Defined in

[src/Weapons/FireWeapons/CYBR_FireWeapon.ts:16](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Weapons/FireWeapons/CYBR_FireWeapon.ts#L16)

___

### name

• **name**: `string`

The name of this Game Object.
Empty by default and never populated by Phaser, this is left for developers to use.

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[name](Weapons_CYBR_Weapon.CYBR_Weapon.md#name)

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

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[originX](Weapons_CYBR_Weapon.CYBR_Weapon.md#originx)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39817

___

### originY

• **originY**: `number`

The vertical origin of this Game Object.
The origin maps the relationship between the size and position of the Game Object.
The default value is 0.5, meaning all Game Objects are positioned based on their center.
Setting the value to 0 means the position now relates to the top of the Game Object.

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[originY](Weapons_CYBR_Weapon.CYBR_Weapon.md#originy)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39825

___

### owner

• `Protected` **owner**: [`Pawn`](Pawns_Pawn.Pawn.md) = `null`

The pawn that owns this weapon

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[owner](Weapons_CYBR_Weapon.CYBR_Weapon.md#owner)

#### Defined in

[src/Weapons/CYBR_Weapon.ts:9](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Weapons/CYBR_Weapon.ts#L9)

___

### parentContainer

• **parentContainer**: `Container`

The parent Container of this Game Object, if it has one.

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[parentContainer](Weapons_CYBR_Weapon.CYBR_Weapon.md#parentcontainer)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17037

___

### pipeline

• **pipeline**: `WebGLPipeline`

The current WebGL pipeline of this Game Object.

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[pipeline](Weapons_CYBR_Weapon.CYBR_Weapon.md#pipeline)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39879

___

### pipelineData

• **pipelineData**: `object`

An object to store pipeline specific data in, to be read by the pipelines this Game Object uses.

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[pipelineData](Weapons_CYBR_Weapon.CYBR_Weapon.md#pipelinedata)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39899

___

### postPipelines

• **postPipelines**: `PostFXPipeline`[]

The WebGL Post FX Pipelines this Game Object uses for post-render effects.

The pipelines are processed in the order in which they appear in this array.

If you modify this array directly, be sure to set the
`hasPostPipeline` property accordingly.

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[postPipelines](Weapons_CYBR_Weapon.CYBR_Weapon.md#postpipelines)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39894

___

### reloadRate

• `Protected` **reloadRate**: `number` = `400`

#### Defined in

[src/Weapons/FireWeapons/CYBR_FireWeapon.ts:26](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Weapons/FireWeapons/CYBR_FireWeapon.ts#L26)

___

### reloadSound

• `Protected` **reloadSound**: `string` = `""`

Sound when a weapon is reloaded

#### Defined in

[src/Weapons/FireWeapons/CYBR_FireWeapon.ts:39](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Weapons/FireWeapons/CYBR_FireWeapon.ts#L39)

___

### renderFlags

• **renderFlags**: `number`

The flags that are compared against `RENDER_MASK` to determine if this Game Object will render or not.
The bits are 0001 | 0010 | 0100 | 1000 set by the components Visible, Alpha, Transform and Texture respectively.
If those components are not used by your custom class then you can use this bitmask as you wish.

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[renderFlags](Weapons_CYBR_Weapon.CYBR_Weapon.md#renderflags)

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

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[rotation](Weapons_CYBR_Weapon.CYBR_Weapon.md#rotation)

#### Defined in

node_modules/phaser/types/phaser.d.ts:40356

___

### scale

• **scale**: `number`

This is a special setter that allows you to set both the horizontal and vertical scale of this Game Object
to the same value, at the same time. When reading this value the result returned is `(scaleX + scaleY) / 2`.

Use of this property implies you wish the horizontal and vertical scales to be equal to each other. If this
isn't the case, use the `scaleX` or `scaleY` properties instead.

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[scale](Weapons_CYBR_Weapon.CYBR_Weapon.md#scale)

#### Defined in

node_modules/phaser/types/phaser.d.ts:40326

___

### scaleX

• **scaleX**: `number`

The horizontal scale of this Game Object.

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[scaleX](Weapons_CYBR_Weapon.CYBR_Weapon.md#scalex)

#### Defined in

node_modules/phaser/types/phaser.d.ts:40331

___

### scaleY

• **scaleY**: `number`

The vertical scale of this Game Object.

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[scaleY](Weapons_CYBR_Weapon.CYBR_Weapon.md#scaley)

#### Defined in

node_modules/phaser/types/phaser.d.ts:40336

___

### scene

• **scene**: `Scene`

A reference to the Scene to which this Game Object belongs.

Game Objects can only belong to one Scene.

You should consider this property as being read-only. You cannot move a
Game Object to another Scene by simply changing it.

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[scene](Weapons_CYBR_Weapon.CYBR_Weapon.md#scene)

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

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[scrollFactorX](Weapons_CYBR_Weapon.CYBR_Weapon.md#scrollfactorx)

#### Defined in

node_modules/phaser/types/phaser.d.ts:40007

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

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[scrollFactorY](Weapons_CYBR_Weapon.CYBR_Weapon.md#scrollfactory)

#### Defined in

node_modules/phaser/types/phaser.d.ts:40026

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

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[state](Weapons_CYBR_Weapon.CYBR_Weapon.md#state)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17032

___

### tabIndex

• **tabIndex**: `number`

The Tab Index of the Game Object.
Reserved for future use by plugins and the Input Manager.

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[tabIndex](Weapons_CYBR_Weapon.CYBR_Weapon.md#tabindex)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17056

___

### texture

• **texture**: `Texture` \| `CanvasTexture`

The Texture this Game Object is using to render with.

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[texture](Weapons_CYBR_Weapon.CYBR_Weapon.md#texture)

#### Defined in

node_modules/phaser/types/phaser.d.ts:40126

___

### timerReloadWeapon

• `Protected` **timerReloadWeapon**: `TimerEvent`

#### Defined in

[src/Weapons/FireWeapons/CYBR_FireWeapon.ts:9](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Weapons/FireWeapons/CYBR_FireWeapon.ts#L9)

___

### tint

• **tint**: `number`

The tint value being applied to the whole of the Game Object.
This property is a setter-only. Use the properties `tintTopLeft` etc to read the current tint value.

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[tint](Weapons_CYBR_Weapon.CYBR_Weapon.md#tint)

#### Defined in

node_modules/phaser/types/phaser.d.ts:40286

___

### tintBottomLeft

• **tintBottomLeft**: `number`

The tint value being applied to the bottom-left vertice of the Game Object.
This value is interpolated from the corner to the center of the Game Object.
The value should be set as a hex number, i.e. 0xff0000 for red, or 0xff00ff for purple.

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[tintBottomLeft](Weapons_CYBR_Weapon.CYBR_Weapon.md#tintbottomleft)

#### Defined in

node_modules/phaser/types/phaser.d.ts:40212

___

### tintBottomRight

• **tintBottomRight**: `number`

The tint value being applied to the bottom-right vertice of the Game Object.
This value is interpolated from the corner to the center of the Game Object.
The value should be set as a hex number, i.e. 0xff0000 for red, or 0xff00ff for purple.

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[tintBottomRight](Weapons_CYBR_Weapon.CYBR_Weapon.md#tintbottomright)

#### Defined in

node_modules/phaser/types/phaser.d.ts:40219

___

### tintFill

• **tintFill**: `boolean`

The tint fill mode.

`false` = An additive tint (the default), where vertices colors are blended with the texture.
`true` = A fill tint, where the vertices colors replace the texture, but respects texture alpha.

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[tintFill](Weapons_CYBR_Weapon.CYBR_Weapon.md#tintfill)

#### Defined in

node_modules/phaser/types/phaser.d.ts:40227

___

### tintTopLeft

• **tintTopLeft**: `number`

The tint value being applied to the top-left vertice of the Game Object.
This value is interpolated from the corner to the center of the Game Object.
The value should be set as a hex number, i.e. 0xff0000 for red, or 0xff00ff for purple.

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[tintTopLeft](Weapons_CYBR_Weapon.CYBR_Weapon.md#tinttopleft)

#### Defined in

node_modules/phaser/types/phaser.d.ts:40198

___

### tintTopRight

• **tintTopRight**: `number`

The tint value being applied to the top-right vertice of the Game Object.
This value is interpolated from the corner to the center of the Game Object.
The value should be set as a hex number, i.e. 0xff0000 for red, or 0xff00ff for purple.

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[tintTopRight](Weapons_CYBR_Weapon.CYBR_Weapon.md#tinttopright)

#### Defined in

node_modules/phaser/types/phaser.d.ts:40205

___

### type

• **type**: `string`

A textual representation of this Game Object, i.e. `sprite`.
Used internally by Phaser but is available for your own custom classes to populate.

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[type](Weapons_CYBR_Weapon.CYBR_Weapon.md#type)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17020

___

### visible

• **visible**: `boolean`

The visible state of the Game Object.

An invisible Game Object will skip rendering, but will still process update logic.

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[visible](Weapons_CYBR_Weapon.CYBR_Weapon.md#visible)

#### Defined in

node_modules/phaser/types/phaser.d.ts:40475

___

### w

• **w**: `number`

The w position of this Game Object.

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[w](Weapons_CYBR_Weapon.CYBR_Weapon.md#w)

#### Defined in

node_modules/phaser/types/phaser.d.ts:40317

___

### weapon

• `Protected` **weapon**: `Weapon`

#### Defined in

[src/Weapons/FireWeapons/CYBR_FireWeapon.ts:10](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Weapons/FireWeapons/CYBR_FireWeapon.ts#L10)

___

### width

• **width**: `number`

The native (un-scaled) width of this Game Object.

Changing this value will not change the size that the Game Object is rendered in-game.
For that you need to either set the scale of the Game Object (`setScale`) or use
the `displayWidth` property.

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[width](Weapons_CYBR_Weapon.CYBR_Weapon.md#width)

#### Defined in

node_modules/phaser/types/phaser.d.ts:40056

___

### x

• **x**: `number`

The x position of this Game Object.

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[x](Weapons_CYBR_Weapon.CYBR_Weapon.md#x)

#### Defined in

node_modules/phaser/types/phaser.d.ts:40299

___

### y

• **y**: `number`

The y position of this Game Object.

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[y](Weapons_CYBR_Weapon.CYBR_Weapon.md#y)

#### Defined in

node_modules/phaser/types/phaser.d.ts:40304

___

### z

• **z**: `number`

The z position of this Game Object.

Note: The z position does not control the rendering order of 2D Game Objects. Use
Phaser.GameObjects.Components.Depth#depth instead.

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[z](Weapons_CYBR_Weapon.CYBR_Weapon.md#z)

#### Defined in

node_modules/phaser/types/phaser.d.ts:40312

___

### RENDER\_MASK

▪ `Static` `Readonly` **RENDER\_MASK**: `number`

The bitmask that `GameObject.renderFlags` is compared against to determine if the Game Object will render or not.

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[RENDER_MASK](Weapons_CYBR_Weapon.CYBR_Weapon.md#render_mask)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17400

## Accessors

### bulletClass

• `set` **bulletClass**(`bulletClass`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bulletClass` | typeof `Bullet` |

#### Returns

`void`

#### Defined in

[src/Weapons/FireWeapons/CYBR_FireWeapon.ts:226](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Weapons/FireWeapons/CYBR_FireWeapon.ts#L226)

___

### bulletGravity

• `set` **bulletGravity**(`gravity`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gravity` | `Vector2` |

#### Returns

`void`

#### Defined in

[src/Weapons/FireWeapons/CYBR_FireWeapon.ts:221](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Weapons/FireWeapons/CYBR_FireWeapon.ts#L221)

___

### bulletKillType

• `set` **bulletKillType**(`bulletKillType`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bulletKillType` | `number` |

#### Returns

`void`

#### Defined in

[src/Weapons/FireWeapons/CYBR_FireWeapon.ts:256](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Weapons/FireWeapons/CYBR_FireWeapon.ts#L256)

___

### bulletLifespan

• `set` **bulletLifespan**(`bulletLifespan`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bulletLifespan` | `number` |

#### Returns

`void`

#### Defined in

[src/Weapons/FireWeapons/CYBR_FireWeapon.ts:246](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Weapons/FireWeapons/CYBR_FireWeapon.ts#L246)

___

### bulletSpeed

• `set` **bulletSpeed**(`bulletSpeed`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bulletSpeed` | `number` |

#### Returns

`void`

#### Defined in

[src/Weapons/FireWeapons/CYBR_FireWeapon.ts:251](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Weapons/FireWeapons/CYBR_FireWeapon.ts#L251)

___

### bullets

• `get` **bullets**(): `Group`

#### Returns

`Group`

#### Defined in

[src/Weapons/FireWeapons/CYBR_FireWeapon.ts:169](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Weapons/FireWeapons/CYBR_FireWeapon.ts#L169)

___

### fireAngle

• `set` **fireAngle**(`fireAngle`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fireAngle` | `number` |

#### Returns

`void`

#### Defined in

[src/Weapons/FireWeapons/CYBR_FireWeapon.ts:231](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Weapons/FireWeapons/CYBR_FireWeapon.ts#L231)

___

### fireLimit

• `get` **fireLimit**(): `number`

#### Returns

`number`

#### Defined in

[src/Weapons/FireWeapons/CYBR_FireWeapon.ts:261](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Weapons/FireWeapons/CYBR_FireWeapon.ts#L261)

• `set` **fireLimit**(`fireLimit`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fireLimit` | `number` |

#### Returns

`void`

#### Defined in

[src/Weapons/FireWeapons/CYBR_FireWeapon.ts:266](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Weapons/FireWeapons/CYBR_FireWeapon.ts#L266)

___

### fireRate

• `get` **fireRate**(): `number`

#### Returns

`number`

#### Defined in

[src/Weapons/FireWeapons/CYBR_FireWeapon.ts:236](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Weapons/FireWeapons/CYBR_FireWeapon.ts#L236)

• `set` **fireRate**(`fireRate`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fireRate` | `number` |

#### Returns

`void`

#### Defined in

[src/Weapons/FireWeapons/CYBR_FireWeapon.ts:241](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Weapons/FireWeapons/CYBR_FireWeapon.ts#L241)

___

### shots

• `get` **shots**(): `number`

#### Returns

`number`

#### Defined in

[src/Weapons/FireWeapons/CYBR_FireWeapon.ts:164](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Weapons/FireWeapons/CYBR_FireWeapon.ts#L164)

## Methods

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. Default this. |

#### Returns

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[addListener](Weapons_CYBR_Weapon.CYBR_Weapon.md#addlistener)

#### Defined in

node_modules/phaser/types/phaser.d.ts:9588

___

### addToDisplayList

▸ **addToDisplayList**(`displayList?`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

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

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[addToDisplayList](Weapons_CYBR_Weapon.CYBR_Weapon.md#addtodisplaylist)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17342

___

### addToUpdateList

▸ **addToUpdateList**(): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

Adds this Game Object to the Update List belonging to the Scene.

When a Game Object is added to the Update List it will have its `preUpdate` method called
every game frame. This method is passed two parameters: `delta` and `time`.

If you wish to run your own logic within `preUpdate` then you should always call
`preUpdate.super(delta, time)` within it, or it may fail to process required operations,
such as Sprite animations.

#### Returns

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[addToUpdateList](Weapons_CYBR_Weapon.CYBR_Weapon.md#addtoupdatelist)

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

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[addedToScene](Weapons_CYBR_Weapon.CYBR_Weapon.md#addedtoscene)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17285

___

### chain

▸ **chain**(`key`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

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

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[chain](Weapons_CYBR_Weapon.CYBR_Weapon.md#chain)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39429

___

### clearAlpha

▸ **clearAlpha**(): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

Clears all alpha values associated with this Game Object.

Immediately sets the alpha levels back to 1 (fully opaque).

#### Returns

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[clearAlpha](Weapons_CYBR_Weapon.CYBR_Weapon.md#clearalpha)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39490

___

### clearMask

▸ **clearMask**(`destroyMask?`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

Clears the mask that this Game Object was using.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destroyMask?` | `boolean` | Destroy the mask before clearing it? Default false. |

#### Returns

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[clearMask](Weapons_CYBR_Weapon.CYBR_Weapon.md#clearmask)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39778

___

### clearTint

▸ **clearTint**(): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

Clears all tint values associated with this Game Object.

Immediately sets the color values back to 0xffffff and the tint type to 'additive',
which results in no visible change to the texture.

#### Returns

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[clearTint](Weapons_CYBR_Weapon.CYBR_Weapon.md#cleartint)

#### Defined in

node_modules/phaser/types/phaser.d.ts:40235

___

### copyPosition

▸ **copyPosition**(`source`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

Copies an object's coordinates to this Game Object's position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `Vector2Like` \| `Vector3Like` \| `Vector4Like` | An object with numeric 'x', 'y', 'z', or 'w' properties. Undefined values are not copied. |

#### Returns

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[copyPosition](Weapons_CYBR_Weapon.CYBR_Weapon.md#copyposition)

#### Defined in

node_modules/phaser/types/phaser.d.ts:40371

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

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[createBitmapMask](Weapons_CYBR_Weapon.CYBR_Weapon.md#createbitmapmask)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39795

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

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[createGeometryMask](Weapons_CYBR_Weapon.CYBR_Weapon.md#creategeometrymask)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39809

___

### decrementShots

▸ `Private` **decrementShots**(): `void`

#### Returns

`void`

#### Defined in

[src/Weapons/FireWeapons/CYBR_FireWeapon.ts:152](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Weapons/FireWeapons/CYBR_FireWeapon.ts#L152)

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

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[destroy](Weapons_CYBR_Weapon.CYBR_Weapon.md#destroy)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17395

___

### disableInteractive

▸ **disableInteractive**(): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

If this Game Object has previously been enabled for input, this will disable it.

An object that is disabled for input stops processing or being considered for
input events, but can be turned back on again at any time by simply calling
`setInteractive()` with no arguments provided.

If want to completely remove interaction from this Game Object then use `removeInteractive` instead.

#### Returns

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[disableInteractive](Weapons_CYBR_Weapon.CYBR_Weapon.md#disableinteractive)

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

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[emit](Weapons_CYBR_Weapon.CYBR_Weapon.md#emit)

#### Defined in

node_modules/phaser/types/phaser.d.ts:9572

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[eventNames](Weapons_CYBR_Weapon.CYBR_Weapon.md#eventnames)

#### Defined in

node_modules/phaser/types/phaser.d.ts:9553

___

### fire

▸ **fire**(`from?`, `x?`, `y?`, `offsetX?`, `offsetY?`): `Bullet`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `from?` | `Sprite` \| `Vector2` \| `ObjectWithTransform` |
| `x?` | `number` |
| `y?` | `number` |
| `offsetX?` | `number` |
| `offsetY?` | `number` |

#### Returns

`Bullet`[]

#### Defined in

[src/Weapons/FireWeapons/CYBR_FireWeapon.ts:93](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Weapons/FireWeapons/CYBR_FireWeapon.ts#L93)

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

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[getBottomCenter](Weapons_CYBR_Weapon.CYBR_Weapon.md#getbottomcenter)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39735

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

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[getBottomLeft](Weapons_CYBR_Weapon.CYBR_Weapon.md#getbottomleft)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39727

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

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[getBottomRight](Weapons_CYBR_Weapon.CYBR_Weapon.md#getbottomright)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39743

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

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[getBounds](Weapons_CYBR_Weapon.CYBR_Weapon.md#getbounds)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39750

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

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[getCenter](Weapons_CYBR_Weapon.CYBR_Weapon.md#getcenter)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39679

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

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[getData](Weapons_CYBR_Weapon.CYBR_Weapon.md#getdata)

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

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[getIndexList](Weapons_CYBR_Weapon.CYBR_Weapon.md#getindexlist)

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

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[getLeftCenter](Weapons_CYBR_Weapon.CYBR_Weapon.md#getleftcenter)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39711

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

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[getLocalPoint](Weapons_CYBR_Weapon.CYBR_Weapon.md#getlocalpoint)

#### Defined in

node_modules/phaser/types/phaser.d.ts:40461

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

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[getLocalTransformMatrix](Weapons_CYBR_Weapon.CYBR_Weapon.md#getlocaltransformmatrix)

#### Defined in

node_modules/phaser/types/phaser.d.ts:40438

___

### getParentRotation

▸ **getParentRotation**(): `number`

Gets the sum total rotation of all of this Game Objects parent Containers.

The returned value is in radians and will be zero if this Game Object has no parent container.

#### Returns

`number`

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[getParentRotation](Weapons_CYBR_Weapon.CYBR_Weapon.md#getparentrotation)

#### Defined in

node_modules/phaser/types/phaser.d.ts:40468

___

### getPipelineName

▸ **getPipelineName**(): `string`

Gets the name of the WebGL Pipeline this Game Object is currently using.

#### Returns

`string`

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[getPipelineName](Weapons_CYBR_Weapon.CYBR_Weapon.md#getpipelinename)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39988

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

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[getPostPipeline](Weapons_CYBR_Weapon.CYBR_Weapon.md#getpostpipeline)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39961

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

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[getRightCenter](Weapons_CYBR_Weapon.CYBR_Weapon.md#getrightcenter)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39719

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

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[getTopCenter](Weapons_CYBR_Weapon.CYBR_Weapon.md#gettopcenter)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39695

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

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[getTopLeft](Weapons_CYBR_Weapon.CYBR_Weapon.md#gettopleft)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39687

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

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[getTopRight](Weapons_CYBR_Weapon.CYBR_Weapon.md#gettopright)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39703

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

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[getWorldTransformMatrix](Weapons_CYBR_Weapon.CYBR_Weapon.md#getworldtransformmatrix)

#### Defined in

node_modules/phaser/types/phaser.d.ts:40445

___

### incData

▸ **incData**(`key`, `data?`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

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

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[incData](Weapons_CYBR_Weapon.CYBR_Weapon.md#incdata)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17185

___

### initAnimations

▸ `Protected` **initAnimations**(`key`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`void`

#### Defined in

[src/Weapons/FireWeapons/CYBR_FireWeapon.ts:68](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Weapons/FireWeapons/CYBR_FireWeapon.ts#L68)

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

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[initPipeline](Weapons_CYBR_Weapon.CYBR_Weapon.md#initpipeline)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39907

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

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[listenerCount](Weapons_CYBR_Weapon.CYBR_Weapon.md#listenercount)

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

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[listeners](Weapons_CYBR_Weapon.CYBR_Weapon.md#listeners)

#### Defined in

node_modules/phaser/types/phaser.d.ts:9559

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[off](Weapons_CYBR_Weapon.CYBR_Weapon.md#off)

#### Defined in

node_modules/phaser/types/phaser.d.ts:9614

___

### on

▸ **on**(`event`, `fn`, `context?`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. Default this. |

#### Returns

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[on](Weapons_CYBR_Weapon.CYBR_Weapon.md#on)

#### Defined in

node_modules/phaser/types/phaser.d.ts:9580

___

### once

▸ **once**(`event`, `fn`, `context?`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. Default this. |

#### Returns

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[once](Weapons_CYBR_Weapon.CYBR_Weapon.md#once)

#### Defined in

node_modules/phaser/types/phaser.d.ts:9596

___

### play

▸ **play**(`key`, `ignoreIfPlaying?`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

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

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[play](Weapons_CYBR_Weapon.CYBR_Weapon.md#play)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39314

___

### playAfterDelay

▸ **playAfterDelay**(`key`, `delay`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

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

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[playAfterDelay](Weapons_CYBR_Weapon.CYBR_Weapon.md#playafterdelay)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39389

___

### playAfterRepeat

▸ **playAfterRepeat**(`key`, `repeatCount?`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

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

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[playAfterRepeat](Weapons_CYBR_Weapon.CYBR_Weapon.md#playafterrepeat)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39406

___

### playReverse

▸ **playReverse**(`key`, `ignoreIfPlaying?`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

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

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[playReverse](Weapons_CYBR_Weapon.CYBR_Weapon.md#playreverse)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39369

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

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[preUpdate](Weapons_CYBR_Weapon.CYBR_Weapon.md#preupdate)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39259

___

### reload

▸ `Private` **reload**(): `void`

#### Returns

`void`

#### Defined in

[src/Weapons/FireWeapons/CYBR_FireWeapon.ts:141](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Weapons/FireWeapons/CYBR_FireWeapon.ts#L141)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[removeAllListeners](Weapons_CYBR_Weapon.CYBR_Weapon.md#removealllisteners)

#### Defined in

node_modules/phaser/types/phaser.d.ts:9620

___

### removeFromDisplayList

▸ **removeFromDisplayList**(): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

Removes this Game Object from the Display List it is currently on.

A Game Object can only exist on one Display List at any given time, but may move freely removed
and added back at a later stage.

You can query which list it is on by looking at the `Phaser.GameObjects.GameObject#displayList` property.

If a Game Object isn't on any Display List, it will not be rendered. If you just wish to temporarly
disable it from rendering, consider using the `setVisible` method, instead.

#### Returns

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[removeFromDisplayList](Weapons_CYBR_Weapon.CYBR_Weapon.md#removefromdisplaylist)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17367

___

### removeFromUpdateList

▸ **removeFromUpdateList**(): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

Removes this Game Object from the Scene's Update List.

When a Game Object is on the Update List, it will have its `preUpdate` method called
every game frame. Calling this method will remove it from the list, preventing this.

Removing a Game Object from the Update List will stop most internal functions working.
For example, removing a Sprite from the Update List will prevent it from being able to
run animations.

#### Returns

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[removeFromUpdateList](Weapons_CYBR_Weapon.CYBR_Weapon.md#removefromupdatelist)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17379

___

### removeInteractive

▸ **removeInteractive**(): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

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

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[removeInteractive](Weapons_CYBR_Weapon.CYBR_Weapon.md#removeinteractive)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17275

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[removeListener](Weapons_CYBR_Weapon.CYBR_Weapon.md#removelistener)

#### Defined in

node_modules/phaser/types/phaser.d.ts:9605

___

### removePostPipeline

▸ **removePostPipeline**(`pipeline`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

Removes a type of Post Pipeline instances from this Game Object, based on the given name, and destroys them.

If you wish to remove all Post Pipelines use the `resetPostPipeline` method instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pipeline` | `string` \| `PostFXPipeline` | The string-based name of the pipeline, or a pipeline class. |

#### Returns

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[removePostPipeline](Weapons_CYBR_Weapon.CYBR_Weapon.md#removepostpipeline)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39983

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

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[removedFromScene](Weapons_CYBR_Weapon.CYBR_Weapon.md#removedfromscene)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17295

___

### resetFlip

▸ **resetFlip**(): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

Resets the horizontal and vertical flipped state of this Game Object back to their default un-flipped state.

#### Returns

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[resetFlip](Weapons_CYBR_Weapon.CYBR_Weapon.md#resetflip)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39672

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

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[resetPipeline](Weapons_CYBR_Weapon.CYBR_Weapon.md#resetpipeline)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39968

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

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[resetPostPipeline](Weapons_CYBR_Weapon.CYBR_Weapon.md#resetpostpipeline)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39975

___

### setActive

▸ **setActive**(`value`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

Sets the `active` property of this Game Object and returns this Game Object for further chaining.
A Game Object with its `active` property set to `true` will be updated by the Scenes UpdateList.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | True if this Game Object should be set as active, false if not. |

#### Returns

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[setActive](Weapons_CYBR_Weapon.CYBR_Weapon.md#setactive)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17103

___

### setAlpha

▸ **setAlpha**(`topLeft?`, `topRight?`, `bottomLeft?`, `bottomRight?`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

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

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[setAlpha](Weapons_CYBR_Weapon.CYBR_Weapon.md#setalpha)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39503

___

### setAngle

▸ **setAngle**(`degrees?`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

Sets the angle of this Game Object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `degrees?` | `number` | The rotation of this Game Object, in degrees. Default 0. |

#### Returns

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[setAngle](Weapons_CYBR_Weapon.CYBR_Weapon.md#setangle)

#### Defined in

node_modules/phaser/types/phaser.d.ts:40398

___

### setBlendMode

▸ **setBlendMode**(`value`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

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

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[setBlendMode](Weapons_CYBR_Weapon.CYBR_Weapon.md#setblendmode)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39581

___

### setBulletPerFire

▸ **setBulletPerFire**(`bulletPerFire`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bulletPerFire` | `number` |

#### Returns

`void`

#### Defined in

[src/Weapons/FireWeapons/CYBR_FireWeapon.ts:210](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Weapons/FireWeapons/CYBR_FireWeapon.ts#L210)

___

### setCrop

▸ **setCrop**(`x?`, `y?`, `width?`, `height?`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

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

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[setCrop](Weapons_CYBR_Weapon.CYBR_Weapon.md#setcrop)

#### Defined in

node_modules/phaser/types/phaser.d.ts:40167

___

### setData

▸ **setData**(`key`, `data?`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

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

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[setData](Weapons_CYBR_Weapon.CYBR_Weapon.md#setdata)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17171

___

### setDataEnabled

▸ **setDataEnabled**(): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

Adds a Data Manager component to this Game Object.

#### Returns

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[setDataEnabled](Weapons_CYBR_Weapon.CYBR_Weapon.md#setdataenabled)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17128

___

### setDepth

▸ **setDepth**(`value`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

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

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[setDepth](Weapons_CYBR_Weapon.CYBR_Weapon.md#setdepth)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39608

___

### setDisplayOrigin

▸ **setDisplayOrigin**(`x?`, `y?`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

Sets the display origin of this Game Object.
The difference between this and setting the origin is that you can use pixel values for setting the display origin.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x?` | `number` | The horizontal display origin value. Default 0. |
| `y?` | `number` | The vertical display origin value. If not defined it will be set to the value of `x`. Default x. |

#### Returns

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[setDisplayOrigin](Weapons_CYBR_Weapon.CYBR_Weapon.md#setdisplayorigin)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39861

___

### setDisplaySize

▸ **setDisplaySize**(`width`, `height`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

Sets the display size of this Game Object.

Calling this will adjust the scale.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `width` | `number` | The width of this Game Object. |
| `height` | `number` | The height of this Game Object. |

#### Returns

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[setDisplaySize](Weapons_CYBR_Weapon.CYBR_Weapon.md#setdisplaysize)

#### Defined in

node_modules/phaser/types/phaser.d.ts:40121

___

### setFlip

▸ **setFlip**(`x`, `y`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

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

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[setFlip](Weapons_CYBR_Weapon.CYBR_Weapon.md#setflip)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39667

___

### setFlipX

▸ **setFlipX**(`value`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

Sets the horizontal flipped state of this Game Object.

A Game Object that is flipped horizontally will render inversed on the horizontal axis.
Flipping always takes place from the middle of the texture and does not impact the scale value.
If this Game Object has a physics body, it will not change the body. This is a rendering toggle only.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | The flipped state. `false` for no flip, or `true` to be flipped. |

#### Returns

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Overrides

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[setFlipX](Weapons_CYBR_Weapon.CYBR_Weapon.md#setflipx)

#### Defined in

[src/Weapons/FireWeapons/CYBR_FireWeapon.ts:184](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Weapons/FireWeapons/CYBR_FireWeapon.ts#L184)

___

### setFlipY

▸ **setFlipY**(`value`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

Sets the vertical flipped state of this Game Object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | The flipped state. `false` for no flip, or `true` to be flipped. |

#### Returns

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[setFlipY](Weapons_CYBR_Weapon.CYBR_Weapon.md#setflipy)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39656

___

### setFrame

▸ **setFrame**(`frame`, `updateSize?`, `updateOrigin?`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

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

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[setFrame](Weapons_CYBR_Weapon.CYBR_Weapon.md#setframe)

#### Defined in

node_modules/phaser/types/phaser.d.ts:40191

___

### setGripPosition

▸ **setGripPosition**(`x`, `y?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y?` | `number` |

#### Returns

`void`

#### Defined in

[src/Weapons/FireWeapons/CYBR_FireWeapon.ts:190](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Weapons/FireWeapons/CYBR_FireWeapon.ts#L190)

___

### setInteractive

▸ **setInteractive**(`hitArea?`, `callback?`, `dropZone?`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

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

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[setInteractive](Weapons_CYBR_Weapon.CYBR_Weapon.md#setinteractive)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17242

___

### setMask

▸ **setMask**(`mask`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

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

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[setMask](Weapons_CYBR_Weapon.CYBR_Weapon.md#setmask)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39772

___

### setMuzzlePosition

▸ **setMuzzlePosition**(`x`, `y?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y?` | `number` |

#### Returns

`void`

#### Defined in

[src/Weapons/FireWeapons/CYBR_FireWeapon.ts:203](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Weapons/FireWeapons/CYBR_FireWeapon.ts#L203)

___

### setName

▸ **setName**(`value`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

Sets the `name` property of this Game Object and returns this Game Object for further chaining.
The `name` property is not populated by Phaser and is presented for your own use.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | The name to be given to this Game Object. |

#### Returns

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[setName](Weapons_CYBR_Weapon.CYBR_Weapon.md#setname)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17110

___

### setOrigin

▸ **setOrigin**(`x?`, `y?`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

Sets the origin of this Game Object.

The values are given in the range 0 to 1.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x?` | `number` | The horizontal origin value. Default 0.5. |
| `y?` | `number` | The vertical origin value. If not defined it will be set to the value of `x`. Default x. |

#### Returns

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[setOrigin](Weapons_CYBR_Weapon.CYBR_Weapon.md#setorigin)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39848

___

### setOriginFromFrame

▸ **setOriginFromFrame**(): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

Sets the origin of this Game Object based on the Pivot values in its Frame.

#### Returns

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[setOriginFromFrame](Weapons_CYBR_Weapon.CYBR_Weapon.md#setoriginfromframe)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39853

___

### setOwner

▸ **setOwner**(`owner`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | [`Pawn`](Pawns_Pawn.Pawn.md) |

#### Returns

`void`

#### Overrides

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[setOwner](Weapons_CYBR_Weapon.CYBR_Weapon.md#setowner)

#### Defined in

[src/Weapons/FireWeapons/CYBR_FireWeapon.ts:179](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Weapons/FireWeapons/CYBR_FireWeapon.ts#L179)

___

### setPipeline

▸ **setPipeline**(`pipeline`, `pipelineData?`, `copyData?`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

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

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[setPipeline](Weapons_CYBR_Weapon.CYBR_Weapon.md#setpipeline)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39919

___

### setPipelineData

▸ **setPipelineData**(`key`, `value?`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

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

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[setPipelineData](Weapons_CYBR_Weapon.CYBR_Weapon.md#setpipelinedata)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39955

___

### setPosition

▸ **setPosition**(`x?`, `y?`, `z?`, `w?`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

Sets the position of this Game Object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x?` | `number` | The x position of this Game Object. Default 0. |
| `y?` | `number` | The y position of this Game Object. If not set it will use the `x` value. Default x. |
| `z?` | `number` | The z position of this Game Object. Default 0. |
| `w?` | `number` | The w position of this Game Object. Default 0. |

#### Returns

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Overrides

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[setPosition](Weapons_CYBR_Weapon.CYBR_Weapon.md#setposition)

#### Defined in

[src/Weapons/FireWeapons/CYBR_FireWeapon.ts:197](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Weapons/FireWeapons/CYBR_FireWeapon.ts#L197)

___

### setPostPipeline

▸ **setPostPipeline**(`pipelines`, `pipelineData?`, `copyData?`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

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

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[setPostPipeline](Weapons_CYBR_Weapon.CYBR_Weapon.md#setpostpipeline)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39942

___

### setRandomPosition

▸ **setRandomPosition**(`x?`, `y?`, `width?`, `height?`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

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

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[setRandomPosition](Weapons_CYBR_Weapon.CYBR_Weapon.md#setrandomposition)

#### Defined in

node_modules/phaser/types/phaser.d.ts:40386

___

### setRotation

▸ **setRotation**(`radians?`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

Sets the rotation of this Game Object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `radians?` | `number` | The rotation of this Game Object, in radians. Default 0. |

#### Returns

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[setRotation](Weapons_CYBR_Weapon.CYBR_Weapon.md#setrotation)

#### Defined in

node_modules/phaser/types/phaser.d.ts:40392

___

### setScale

▸ **setScale**(`x`, `y?`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

Sets the scale of this Game Object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The horizontal scale of this Game Object. |
| `y?` | `number` | The vertical scale of this Game Object. If not set it will use the `x` value. Default x. |

#### Returns

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[setScale](Weapons_CYBR_Weapon.CYBR_Weapon.md#setscale)

#### Defined in

node_modules/phaser/types/phaser.d.ts:40405

___

### setScrollFactor

▸ **setScrollFactor**(`x`, `y?`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

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

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[setScrollFactor](Weapons_CYBR_Weapon.CYBR_Weapon.md#setscrollfactor)

#### Defined in

node_modules/phaser/types/phaser.d.ts:40047

___

### setShots

▸ **setShots**(`shots`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shots` | `number` |

#### Returns

`void`

#### Defined in

[src/Weapons/FireWeapons/CYBR_FireWeapon.ts:158](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Weapons/FireWeapons/CYBR_FireWeapon.ts#L158)

___

### setSize

▸ **setSize**(`width`, `height`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

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

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[setSize](Weapons_CYBR_Weapon.CYBR_Weapon.md#setsize)

#### Defined in

node_modules/phaser/types/phaser.d.ts:40112

___

### setSizeToFrame

▸ **setSizeToFrame**(`frame`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

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

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[setSizeToFrame](Weapons_CYBR_Weapon.CYBR_Weapon.md#setsizetoframe)

#### Defined in

node_modules/phaser/types/phaser.d.ts:40097

___

### setState

▸ **setState**(`value`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

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

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[setState](Weapons_CYBR_Weapon.CYBR_Weapon.md#setstate)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17123

___

### setTexture

▸ **setTexture**(`key`, `frame?`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

Sets the texture and frame this Game Object will use to render with.

Textures are referenced by their string-based keys, as stored in the Texture Manager.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key of the texture to be used, as stored in the Texture Manager. |
| `frame?` | `string` \| `number` | The name or index of the frame within the Texture. |

#### Returns

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[setTexture](Weapons_CYBR_Weapon.CYBR_Weapon.md#settexture)

#### Defined in

node_modules/phaser/types/phaser.d.ts:40176

___

### setTint

▸ **setTint**(`topLeft?`, `topRight?`, `bottomLeft?`, `bottomRight?`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

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

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[setTint](Weapons_CYBR_Weapon.CYBR_Weapon.md#settint)

#### Defined in

node_modules/phaser/types/phaser.d.ts:40257

___

### setTintFill

▸ **setTintFill**(`topLeft?`, `topRight?`, `bottomLeft?`, `bottomRight?`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

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

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[setTintFill](Weapons_CYBR_Weapon.CYBR_Weapon.md#settintfill)

#### Defined in

node_modules/phaser/types/phaser.d.ts:40280

___

### setVisible

▸ **setVisible**(`value`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

Sets the visibility of this Game Object.

An invisible Game Object will skip rendering, but will still process update logic.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | The visible state of the Game Object. |

#### Returns

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[setVisible](Weapons_CYBR_Weapon.CYBR_Weapon.md#setvisible)

#### Defined in

node_modules/phaser/types/phaser.d.ts:40483

___

### setW

▸ **setW**(`value?`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

Sets the w position of this Game Object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value?` | `number` | The w position of this Game Object. Default 0. |

#### Returns

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[setW](Weapons_CYBR_Weapon.CYBR_Weapon.md#setw)

#### Defined in

node_modules/phaser/types/phaser.d.ts:40432

___

### setX

▸ **setX**(`value?`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

Sets the x position of this Game Object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value?` | `number` | The x position of this Game Object. Default 0. |

#### Returns

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[setX](Weapons_CYBR_Weapon.CYBR_Weapon.md#setx)

#### Defined in

node_modules/phaser/types/phaser.d.ts:40411

___

### setY

▸ **setY**(`value?`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

Sets the y position of this Game Object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value?` | `number` | The y position of this Game Object. Default 0. |

#### Returns

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[setY](Weapons_CYBR_Weapon.CYBR_Weapon.md#sety)

#### Defined in

node_modules/phaser/types/phaser.d.ts:40417

___

### setZ

▸ **setZ**(`value?`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

Sets the z position of this Game Object.

Note: The z position does not control the rendering order of 2D Game Objects. Use
Phaser.GameObjects.Components.Depth#setDepth instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value?` | `number` | The z position of this Game Object. Default 0. |

#### Returns

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[setZ](Weapons_CYBR_Weapon.CYBR_Weapon.md#setz)

#### Defined in

node_modules/phaser/types/phaser.d.ts:40426

___

### shutdown

▸ **shutdown**(): `void`

Removes all listeners.

#### Returns

`void`

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[shutdown](Weapons_CYBR_Weapon.CYBR_Weapon.md#shutdown)

#### Defined in

node_modules/phaser/types/phaser.d.ts:9543

___

### stop

▸ **stop**(): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

Immediately stops the current animation from playing and dispatches the `ANIMATION_STOP` events.

If no animation is playing, no event will be dispatched.

If there is another animation queued (via the `chain` method) then it will start playing immediately.

#### Returns

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[stop](Weapons_CYBR_Weapon.CYBR_Weapon.md#stop)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39438

___

### stopAfterDelay

▸ **stopAfterDelay**(`delay`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

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

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[stopAfterDelay](Weapons_CYBR_Weapon.CYBR_Weapon.md#stopafterdelay)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39451

___

### stopAfterRepeat

▸ **stopAfterRepeat**(`repeatCount?`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

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

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[stopAfterRepeat](Weapons_CYBR_Weapon.CYBR_Weapon.md#stopafterrepeat)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39464

___

### stopFiring

▸ **stopFiring**(): `void`

#### Returns

`void`

#### Defined in

[src/Weapons/FireWeapons/CYBR_FireWeapon.ts:174](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Weapons/FireWeapons/CYBR_FireWeapon.ts#L174)

___

### stopOnFrame

▸ **stopOnFrame**(`frame`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

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

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[stopOnFrame](Weapons_CYBR_Weapon.CYBR_Weapon.md#stoponframe)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39478

___

### stopReloading

▸ **stopReloading**(): `void`

#### Returns

`void`

#### Defined in

[src/Weapons/FireWeapons/CYBR_FireWeapon.ts:121](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Weapons/FireWeapons/CYBR_FireWeapon.ts#L121)

___

### toJSON

▸ **toJSON**(): `JSONGameObject`

Build a JSON representation of this Sprite.

#### Returns

`JSONGameObject`

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[toJSON](Weapons_CYBR_Weapon.CYBR_Weapon.md#tojson)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39483

___

### toggleData

▸ **toggleData**(`key`): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

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

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[toggleData](Weapons_CYBR_Weapon.CYBR_Weapon.md#toggledata)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17198

___

### toggleFlipX

▸ **toggleFlipX**(): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

Toggles the horizontal flipped state of this Game Object.

A Game Object that is flipped horizontally will render inversed on the horizontal axis.
Flipping always takes place from the middle of the texture and does not impact the scale value.
If this Game Object has a physics body, it will not change the body. This is a rendering toggle only.

#### Returns

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[toggleFlipX](Weapons_CYBR_Weapon.CYBR_Weapon.md#toggleflipx)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39635

___

### toggleFlipY

▸ **toggleFlipY**(): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

Toggles the vertical flipped state of this Game Object.

#### Returns

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[toggleFlipY](Weapons_CYBR_Weapon.CYBR_Weapon.md#toggleflipy)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39640

___

### trackSprite

▸ **trackSprite**(`sprite`, `offsetX?`, `offsetY?`, `trackRotation?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sprite` | `Sprite` \| `ObjectWithTransform` |
| `offsetX?` | `number` |
| `offsetY?` | `number` |
| `trackRotation?` | `boolean` |

#### Returns

`void`

#### Defined in

[src/Weapons/FireWeapons/CYBR_FireWeapon.ts:215](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Weapons/FireWeapons/CYBR_FireWeapon.ts#L215)

___

### tryReloading

▸ **tryReloading**(): `void`

#### Returns

`void`

#### Defined in

[src/Weapons/FireWeapons/CYBR_FireWeapon.ts:126](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Weapons/FireWeapons/CYBR_FireWeapon.ts#L126)

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

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[update](Weapons_CYBR_Weapon.CYBR_Weapon.md#update)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17301

___

### updateDisplayOrigin

▸ **updateDisplayOrigin**(): [`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

Updates the Display Origin cached values internally stored on this Game Object.
You don't usually call this directly, but it is exposed for edge-cases where you may.

#### Returns

[`CYBR_FireWeapon`](Weapons_FireWeapons_CYBR_FireWeapon.CYBR_FireWeapon.md)

#### Inherited from

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[updateDisplayOrigin](Weapons_CYBR_Weapon.CYBR_Weapon.md#updatedisplayorigin)

#### Defined in

node_modules/phaser/types/phaser.d.ts:39867

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

[CYBR_Weapon](Weapons_CYBR_Weapon.CYBR_Weapon.md).[willRender](Weapons_CYBR_Weapon.CYBR_Weapon.md#willrender)

#### Defined in

node_modules/phaser/types/phaser.d.ts:17313
