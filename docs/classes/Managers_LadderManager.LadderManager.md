[cyber2d](../README.md) / [Modules](../modules.md) / [Managers/LadderManager](../modules/Managers_LadderManager.md) / LadderManager

# Class: LadderManager

[Managers/LadderManager](../modules/Managers_LadderManager.md).LadderManager

## Table of contents

### Constructors

- [constructor](Managers_LadderManager.LadderManager.md#constructor)

### Properties

- [ladders](Managers_LadderManager.LadderManager.md#ladders)
- [laddersOnPlayer](Managers_LadderManager.LadderManager.md#laddersonplayer)
- [player](Managers_LadderManager.LadderManager.md#player)
- [scene](Managers_LadderManager.LadderManager.md#scene)

### Methods

- [areLaddersOnPlayerUnderY](Managers_LadderManager.LadderManager.md#areladdersonplayerundery)
- [init](Managers_LadderManager.LadderManager.md#init)
- [update](Managers_LadderManager.LadderManager.md#update)

## Constructors

### constructor

• **new LadderManager**(`scene`, `ladders`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | `Scene` |
| `ladders` | `Group` |

#### Defined in

[src/Managers/LadderManager.ts:12](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Managers/LadderManager.ts#L12)

## Properties

### ladders

• **ladders**: `Group`

#### Defined in

[src/Managers/LadderManager.ts:9](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Managers/LadderManager.ts#L9)

___

### laddersOnPlayer

• **laddersOnPlayer**: `Map`<`string`, [`Ladder`](Platforms_Ladder.Ladder.md)\>

#### Defined in

[src/Managers/LadderManager.ts:10](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Managers/LadderManager.ts#L10)

___

### player

• `Private` **player**: [`Player`](Pawns_Player.Player.md)

#### Defined in

[src/Managers/LadderManager.ts:7](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Managers/LadderManager.ts#L7)

___

### scene

• `Private` **scene**: `Scene`

#### Defined in

[src/Managers/LadderManager.ts:6](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Managers/LadderManager.ts#L6)

## Methods

### areLaddersOnPlayerUnderY

▸ **areLaddersOnPlayerUnderY**(`y`): `boolean`

Return true if at least one ladder is under the given y position.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` |

#### Returns

`boolean`

#### Defined in

[src/Managers/LadderManager.ts:30](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Managers/LadderManager.ts#L30)

___

### init

▸ **init**(`player`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `player` | [`Player`](Pawns_Player.Player.md) |

#### Returns

`void`

#### Defined in

[src/Managers/LadderManager.ts:19](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Managers/LadderManager.ts#L19)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Defined in

[src/Managers/LadderManager.ts:41](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Managers/LadderManager.ts#L41)
