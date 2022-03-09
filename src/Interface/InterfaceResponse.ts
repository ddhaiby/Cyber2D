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
    level: string,
    score: string,
    cybr_coin_amount: string,
    cybr_coin_per_level: Object,
    best_time: string
}
export interface IResponse{
    status:number,
    messsage?:string,
    error?:string,
    data?:Array<Object>
}