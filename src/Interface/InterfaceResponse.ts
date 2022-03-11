export interface IResponseRegister extends IResponse{
    _id:string,
    mail:string,
    password:string,
    token:string
}
export interface IResponseLogin extends IResponseRegister{

}
export interface IResponsePlayer extends IResponse{
    playerId: string,
    level: number,
    score: number,
    cybr_coin_amount:number,
    cybr_coin_per_level: number,
    best_time: string
}
export interface IResponse{
    status:number,
    message?:string,
    error?:string,
    data?:Array<Object>
}