[cyber2d](../README.md) / [Exports](../modules.md) / AudioManager

# Class: AudioManager

## Table of contents

### Constructors

- [constructor](AudioManager.md#constructor)

### Properties

- [howl](AudioManager.md#howl)
- [loopIDs](AudioManager.md#loopids)
- [loopKeys](AudioManager.md#loopkeys)

### Methods

- [init](AudioManager.md#init)
- [mute](AudioManager.md#mute)
- [playSound](AudioManager.md#playsound)
- [unmute](AudioManager.md#unmute)

## Constructors

### constructor

• **new AudioManager**()

## Properties

### howl

▪ `Static` `Private` **howl**: `Howl` = `null`

#### Defined in

[AudioManager.ts:4](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Managers/AudioManager.ts#L4)

___

### loopIDs

▪ `Static` `Private` **loopIDs**: `number`[]

#### Defined in

[AudioManager.ts:5](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Managers/AudioManager.ts#L5)

___

### loopKeys

▪ `Static` `Private` **loopKeys**: `string`[]

#### Defined in

[AudioManager.ts:6](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Managers/AudioManager.ts#L6)

## Methods

### init

▸ `Static` **init**(`audiosprite`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `audiosprite` | `any` |

#### Returns

`void`

#### Defined in

[AudioManager.ts:8](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Managers/AudioManager.ts#L8)

___

### mute

▸ `Static` **mute**(): `void`

#### Returns

`void`

#### Defined in

[AudioManager.ts:14](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Managers/AudioManager.ts#L14)

___

### playSound

▸ `Static` **playSound**(`key`, `loop?`, `volume?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | `string` | `undefined` |
| `loop` | `boolean` | `false` |
| `volume` | `number` | `1` |

#### Returns

`number`

#### Defined in

[AudioManager.ts:26](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Managers/AudioManager.ts#L26)

___

### unmute

▸ `Static` **unmute**(): `void`

#### Returns

`void`

#### Defined in

[AudioManager.ts:20](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Managers/AudioManager.ts#L20)
