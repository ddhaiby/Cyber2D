
import {HttpServices} from '../Core/Http.Services';
import {StorageService} from './StorageService';
import {IResponseLogin} from "../Interface/InterfaceResponse";




type UserDataField = Partial<IResponseLogin> & { loggedIn?: boolean };

const DEFAULT_USER_DATA = {
    loggedIn: false,
};


export class ShareData {
    public userData: UserDataField = DEFAULT_USER_DATA;
    private jwtToken?: string;
    private readonly httpService: HttpServices;
    private readonly storageService: StorageService;
    constructor(

    ) {
    this.storageService= new StorageService();
    this.httpService = new HttpServices();
    }

    async loadData() {
        this.userData = await this.storageService.getUserData();
        if (!this.userData) {
            this.userData = DEFAULT_USER_DATA;
        }
        this.jwtToken = await this.storageService.getToken();
        if (this.jwtToken) {
            console.log('setting jwtToken', this.jwtToken);
            this.httpService.setAuthToken(this.jwtToken);
        }
    }

    setUser(userData: UserDataField) {
        this.userData = userData;
        this.userData.loggedIn = true;
        return this.storageService.setUserData(userData);
    }

    setToken(token: string) {
        this.jwtToken = token;
        this.httpService.setAuthToken(token);
        return this.storageService.setToken(token);
    }

    getToken(): string | undefined {
        return this.jwtToken;
    }


    getUserData(): UserDataField {
        if (!this.userData) {
            throw new Error('Undefined UserData');
        }
        return this.userData;
    }

    isLoggedIn(): boolean {
        // eslint-disable-next-line no-underscore-dangle
        return this.jwtToken && this.userData?.loggedIn && typeof this.userData?._id === 'string';
    }
}
