import {Axios, AxiosResponse} from 'axios'
import {IRequestLogin, IRequestPlayer, IRequestRegister} from "../Interface/InterfaceRequest";
import {IResponse, IResponseLogin, IResponsePlayer, IResponseRegister} from "../Interface/InterfaceResponse";

export class HttpServices {
    private readonly axiosService: Axios;
        private baseUrl: string = "https://api-cyber-server.pierrelucmillet.ovh";//
  //private baseUrl: string = "http://localhost:8072";
    private authToken:string="";
    constructor() {
        this.axiosService = new Axios({
            headers: {
                'Content-Type': 'application/json',
                'Access-Allow-Control-Origin':this.baseUrl
            }
        })
    }
    public setAuthToken(token: string): void {
        this.authToken = token;
    }
    /*register(data: IRequestRegister): Promise<AxiosResponse<IResponseRegister>> {
        console.log(data);
        return this.axiosService.post<IResponseRegister>(this.baseUrl + "/auth/register", JSON.stringify(data),{method:"POST",headers:{'Access-Allow-Control-Origin':'*'
            }});
    }*/

    login():Promise<AxiosResponse<IResponseLogin>> {
        return this.axiosService.post<IResponseLogin>(this.baseUrl + "/api/login/");
    }
    loginValidation():Promise <AxiosResponse>{
       return this.axiosService.post(this.baseUrl+'/api/auth/');
    }
    logout(token:string):Promise<AxiosResponse<IResponse>> {
        return this.axiosService.post(this.baseUrl + "/api/logout/",{token:token});
    }

    /*createPlayerData(data: IRequestPlayer): Promise<AxiosResponse<IResponsePlayer>> {
        return this.axiosService.put<IResponsePlayer>(this.baseUrl + "/player/add",JSON.stringify(data));
    }

    getPlayerData(token: string): Promise<AxiosResponse<IResponsePlayer>> {
        return this.axiosService.get<IResponsePlayer>(this.baseUrl + '/player/get/' + token);
    }

    patchPlayerData(data: IRequestPlayer): Promise<AxiosResponse<IResponsePlayer>> {
        return this.axiosService.patch<IResponsePlayer>(this.baseUrl + '/player/patch', JSON.stringify(data));
    }

    deletePlayerData(data: string): Promise<AxiosResponse<IResponse>> {
        return this.axiosService.delete(this.baseUrl + '/player/delete', {data: data});
    }
    getLevel(level:string){
        return this.baseUrl+"/levels/"+level+".json";
    }*/
}