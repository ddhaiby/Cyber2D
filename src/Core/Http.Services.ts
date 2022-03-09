import {Axios, AxiosResponse} from 'axios'
import {IRequestLogin, IRequestPlayer, IRequestRegister} from "../Interface/InterfaceRequest";
import {IResponse, IResponseLogin, IResponsePlayer, IResponseRegister} from "../Interface/InterfaceResponse";

export class HttpServices {
    private readonly axiosService: Axios;
    private baseUrl: string = "http://localhost:3000";

    constructor() {
        this.axiosService = new Axios({
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    register(data: IRequestRegister): Promise<AxiosResponse<IResponseRegister>> {
        console.log(data);
        return this.axiosService.post<IResponseRegister>(this.baseUrl + "/auth/register", JSON.stringify(data),{method:"POST"});
    }

    login(data: IRequestLogin): Promise<AxiosResponse<IResponseLogin>> {
        return this.axiosService.post<IResponseLogin>(this.baseUrl + "/auth/login", data);
    }

    logout():Promise<AxiosResponse<IResponse>> {
        return this.axiosService.delete(this.baseUrl + "/auth/logout");
    }

    createPlayerData(data: IRequestPlayer): Promise<AxiosResponse<IResponsePlayer>> {
        return this.axiosService.put<IResponsePlayer>(this.baseUrl + "/player/add", data);
    }

    getPlayerData(token: string): Promise<AxiosResponse<IResponsePlayer>> {
        return this.axiosService.get<IResponsePlayer>(this.baseUrl + '/player/get/' + token);
    }

    patchPlayerData(data: IRequestPlayer): Promise<AxiosResponse<IResponsePlayer>> {
        return this.axiosService.patch<IResponsePlayer>(this.baseUrl + '/player/patch', data);
    }

    deletePlayerData(data: string): Promise<AxiosResponse<IResponse>> {
        return this.axiosService.delete(this.baseUrl + '/player/delete', {data: data});
    }

}