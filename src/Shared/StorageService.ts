import {Storage} from '@capacitor/storage';
export class StorageService {

    constructor() {
    }

    async setUserData(userData) {
        await Storage.set({
            key: 'userData',
            value: JSON.stringify(userData),
        });
    }

    async getUserData(){
        const {value} = await Storage.get({key: 'userData'});
        return JSON.parse(value);
    }

    async setToken(token: string) {
        await Storage.set({
            key: 'token',
            value: token,
        });
    }

    async getToken(): Promise<string> {
        const {value} = await Storage.get({key: 'token'});
        return value as string;
    }

}