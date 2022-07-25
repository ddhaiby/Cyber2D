[cyber2d](../README.md) / [Exports](../modules.md) / HttpServices

# Class: HttpServices

## Table of contents

### Constructors

- [constructor](HttpServices.md#constructor)

### Properties

- [authToken](HttpServices.md#authtoken)
- [axiosService](HttpServices.md#axiosservice)
- [baseUrl](HttpServices.md#baseurl)

### Methods

- [login](HttpServices.md#login)
- [loginValidation](HttpServices.md#loginvalidation)
- [logout](HttpServices.md#logout)
- [setAuthToken](HttpServices.md#setauthtoken)
- [validateToken](HttpServices.md#validatetoken)

## Constructors

### constructor

• **new HttpServices**()

#### Defined in

[Http.Services.ts:10](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Core/Http.Services.ts#L10)

## Properties

### authToken

• `Private` **authToken**: `string` = `""`

#### Defined in

[Http.Services.ts:9](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Core/Http.Services.ts#L9)

___

### axiosService

• `Private` `Readonly` **axiosService**: `Axios`

#### Defined in

[Http.Services.ts:6](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Core/Http.Services.ts#L6)

___

### baseUrl

• `Private` **baseUrl**: `string` = `"https://api-cyber-server.pierrelucmillet.ovh"`

#### Defined in

[Http.Services.ts:7](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Core/Http.Services.ts#L7)

## Methods

### login

▸ **login**(): `Promise`<`AxiosResponse`<`IResponseLogin`, `any`\>\>

#### Returns

`Promise`<`AxiosResponse`<`IResponseLogin`, `any`\>\>

#### Defined in

[Http.Services.ts:27](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Core/Http.Services.ts#L27)

___

### loginValidation

▸ **loginValidation**(): `Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[Http.Services.ts:30](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Core/Http.Services.ts#L30)

___

### logout

▸ **logout**(`data`): `Promise`<`AxiosResponse`<`IResponse`, `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`Promise`<`AxiosResponse`<`IResponse`, `any`\>\>

#### Defined in

[Http.Services.ts:33](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Core/Http.Services.ts#L33)

___

### setAuthToken

▸ **setAuthToken**(`token`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

#### Returns

`void`

#### Defined in

[Http.Services.ts:18](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Core/Http.Services.ts#L18)

___

### validateToken

▸ **validateToken**(`token`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[Http.Services.ts:37](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Core/Http.Services.ts#L37)
