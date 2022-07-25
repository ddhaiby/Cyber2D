[cyber2d](../README.md) / [Modules](../modules.md) / [Core/Http.Services](../modules/Core_Http_Services.md) / HttpServices

# Class: HttpServices

[Core/Http.Services](../modules/Core_Http_Services.md).HttpServices

## Table of contents

### Constructors

- [constructor](Core_Http_Services.HttpServices.md#constructor)

### Properties

- [authToken](Core_Http_Services.HttpServices.md#authtoken)
- [axiosService](Core_Http_Services.HttpServices.md#axiosservice)
- [baseUrl](Core_Http_Services.HttpServices.md#baseurl)

### Methods

- [login](Core_Http_Services.HttpServices.md#login)
- [loginValidation](Core_Http_Services.HttpServices.md#loginvalidation)
- [logout](Core_Http_Services.HttpServices.md#logout)
- [setAuthToken](Core_Http_Services.HttpServices.md#setauthtoken)
- [validateToken](Core_Http_Services.HttpServices.md#validatetoken)

## Constructors

### constructor

• **new HttpServices**()

#### Defined in

[src/Core/Http.Services.ts:10](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Core/Http.Services.ts#L10)

## Properties

### authToken

• `Private` **authToken**: `string` = `""`

#### Defined in

[src/Core/Http.Services.ts:9](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Core/Http.Services.ts#L9)

___

### axiosService

• `Private` `Readonly` **axiosService**: `Axios`

#### Defined in

[src/Core/Http.Services.ts:6](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Core/Http.Services.ts#L6)

___

### baseUrl

• `Private` **baseUrl**: `string` = `"https://api-cyber-server.pierrelucmillet.ovh"`

#### Defined in

[src/Core/Http.Services.ts:7](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Core/Http.Services.ts#L7)

## Methods

### login

▸ **login**(): `Promise`<`AxiosResponse`<[`IResponseLogin`](../interfaces/Interface_InterfaceResponse.IResponseLogin.md), `any`\>\>

#### Returns

`Promise`<`AxiosResponse`<[`IResponseLogin`](../interfaces/Interface_InterfaceResponse.IResponseLogin.md), `any`\>\>

#### Defined in

[src/Core/Http.Services.ts:27](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Core/Http.Services.ts#L27)

___

### loginValidation

▸ **loginValidation**(): `Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[src/Core/Http.Services.ts:30](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Core/Http.Services.ts#L30)

___

### logout

▸ **logout**(`data`): `Promise`<`AxiosResponse`<[`IResponse`](../interfaces/Interface_InterfaceResponse.IResponse.md), `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`IResponse`](../interfaces/Interface_InterfaceResponse.IResponse.md), `any`\>\>

#### Defined in

[src/Core/Http.Services.ts:33](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Core/Http.Services.ts#L33)

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

[src/Core/Http.Services.ts:18](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Core/Http.Services.ts#L18)

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

[src/Core/Http.Services.ts:37](https://github.com/Pldu78/Cyber2D-1/blob/f2bef66/src/Core/Http.Services.ts#L37)
