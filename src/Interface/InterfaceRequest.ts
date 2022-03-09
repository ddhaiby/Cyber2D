export interface IRequestRegister{
    mail:string,
    password:string,
    name:string,
}
export interface IRequestLogin{
    mail:string,
    password:string,
}
export interface IRequestPlayer{
    playerId: string,
    level: string,
    score: string,
    cybr_coin_amount: string,
    cybr_coin_per_level: Object,
    best_time: string
}