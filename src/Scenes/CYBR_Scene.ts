import { CYBR_Graphics } from "../Utils/CYBR_Graphics";

export declare type SceneData = {
    level?: number;
}

export class CYBR_Scene extends Phaser.Scene
{
    private static _idCount:number = 0;

    constructor(config: string | Phaser.Types.Scenes.SettingsConfig)
    {
        super(config);
    }

    public generateUniqueName(gameObject: Phaser.GameObjects.GameObject) : string
    {
        ++CYBR_Scene._idCount;
        return (typeof gameObject) + CYBR_Scene._idCount.toString(); // typeof always return "object". Consider using the string directly, or fix it.
    }

    public centerItem(item: Phaser.GameObjects.Image | Phaser.GameObjects.Text | CYBR_Graphics, offsetX?: number, offsetY?: number)
    {
        if (offsetX == undefined)
            offsetX = 0;

        if (offsetY == undefined)
            offsetY = 0;

        let sceneWidth:number = this.scale.displaySize.width;
        let sceneHeight:number = this.scale.displaySize.height;

        item.setX((sceneWidth - item.width) / 2 + offsetX); 
        item.setY((sceneHeight - item.height) / 2 + offsetY);

        return item;
    }
    
    public centerVItem(item: Phaser.GameObjects.Image | CYBR_Graphics, offsetY?: number) : Phaser.GameObjects.Image | CYBR_Graphics
    {
        if (offsetY == undefined)
            offsetY = 0;

        let sceneHeight = this.scale.displaySize.height;
        item.setY((sceneHeight - item.height) / 2 + offsetY);

        return item;
    }

    public centerHItem(item: Phaser.GameObjects.Image | CYBR_Graphics, offsetX?: number) : Phaser.GameObjects.Image | CYBR_Graphics
    {
        if (offsetX == undefined)
            offsetX = 0;

        let sceneWidth = this.scale.displaySize.width;    
        item.setX((sceneWidth - item.width) / 2 + offsetX);

        return item;
    }

    static formatTime(milliseconds: number) : string
    {
        // Minutes
        const minutes = Math.floor(milliseconds / 60000);
        const minutesString = (minutes >= 10) ? minutes.toString() : "0" + minutes.toString();
        milliseconds = milliseconds - minutes * 60000;

        // Seconds
        const seconds = Math.floor(milliseconds / 1000);
        const secondsString = (seconds >= 10) ? seconds.toString() : "0" + seconds.toString();
        milliseconds = milliseconds - seconds * 1000;

        // Milliseconds
        milliseconds = Math.floor(milliseconds / 10);
        let millisecondsString = milliseconds.toString();
        millisecondsString = (milliseconds < 10) ? "0" + millisecondsString : millisecondsString;
    
        return minutesString + ":" + secondsString + ":" + millisecondsString;
    }

}