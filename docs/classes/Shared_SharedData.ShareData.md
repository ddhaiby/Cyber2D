[cyber2d](../README.md) / [Modules](../modules.md) / [Shared/SharedData](../modules/Shared_SharedData.md) / ShareData

# Class: ShareData

[Shared/SharedData](../modules/Shared_SharedData.md).ShareData

## Table of contents

### Constructors

- [constructor](Shared_SharedData.ShareData.md#constructor)

### Properties

- [httpService](Shared_SharedData.ShareData.md#httpservice)
- [jwtToken](Shared_SharedData.ShareData.md#jwttoken)
- [storageService](Shared_SharedData.ShareData.md#storageservice)
- [userData](Shared_SharedData.ShareData.md#userdata)

### Methods

- [getToken](Shared_SharedData.ShareData.md#gettoken)
- [getUserData](Shared_SharedData.ShareData.md#getuserdata)
- [isLoggedIn](Shared_SharedData.ShareData.md#isloggedin)
- [loadData](Shared_SharedData.ShareData.md#loaddata)
- [setToken](Shared_SharedData.ShareData.md#settoken)
- [setUser](Shared_SharedData.ShareData.md#setuser)

## Constructors

### constructor

• **new ShareData**()

#### Defined in

[src/Shared/SharedData.ts:21](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Shared/SharedData.ts#L21)

## Properties

### httpService

• `Private` `Readonly` **httpService**: [`HttpServices`](Core_Http_Services.HttpServices.md)

#### Defined in

[src/Shared/SharedData.ts:19](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Shared/SharedData.ts#L19)

___

### jwtToken

• `Private` `Optional` **jwtToken**: `string`

#### Defined in

[src/Shared/SharedData.ts:18](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Shared/SharedData.ts#L18)

___

### storageService

• `Private` `Readonly` **storageService**: [`StorageService`](Shared_StorageService.StorageService.md)

#### Defined in

[src/Shared/SharedData.ts:20](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Shared/SharedData.ts#L20)

___

### userData

• **userData**: `UserDataField` = `DEFAULT_USER_DATA`

#### Defined in

[src/Shared/SharedData.ts:17](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Shared/SharedData.ts#L17)

## Methods

### getToken

▸ **getToken**(): `string`

#### Returns

`string`

#### Defined in

[src/Shared/SharedData.ts:53](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Shared/SharedData.ts#L53)

___

### getUserData

▸ **getUserData**(): `UserDataField`

#### Returns

`UserDataField`

#### Defined in

[src/Shared/SharedData.ts:58](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Shared/SharedData.ts#L58)

___

### isLoggedIn

▸ **isLoggedIn**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/Shared/SharedData.ts:65](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Shared/SharedData.ts#L65)

___

### loadData

▸ **loadData**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/Shared/SharedData.ts:29](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Shared/SharedData.ts#L29)

___

### setToken

▸ **setToken**(`token`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/Shared/SharedData.ts:47](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Shared/SharedData.ts#L47)

___

### setUser

▸ **setUser**(`userData`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userData` | `UserDataField` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/Shared/SharedData.ts:41](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Shared/SharedData.ts#L41)
