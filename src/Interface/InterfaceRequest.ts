import Clock = Phaser.Time.Clock;

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
    level: number,
    score: number,
    cybr_coin_amount: number,
    cybr_coin_per_level:number,
    best_time: number,
}