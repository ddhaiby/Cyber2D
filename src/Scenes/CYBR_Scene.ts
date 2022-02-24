import { CYBR_Graphics } from "../UI/CYBR_Graphics";

export declare type SceneData = {
    level?: integer;
}

export class CYBR_Scene extends Phaser.Scene
{
    private static _idCount = 0;

    constructor(config: string | Phaser.Types.Scenes.SettingsConfig)
    {
        super(config);
    }

    public generateUniqueName(gameObject: Phaser.GameObjects.GameObject)
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

        let sceneWidth = this.scale.displaySize.width;
        let sceneHeight = this.scale.displaySize.height;

        item.x = (sceneWidth - item.width) / 2 + offsetX; 
        item.y = (sceneHeight - item.height) / 2 + offsetY;

        return item;
    }
    
    public centerVItem(item: Phaser.GameObjects.Image | CYBR_Graphics, offsetY?: number)
    {
        if (offsetY == undefined)
            offsetY = 0;

        let sceneHeight = this.scale.displaySize.height;
        item.y = (sceneHeight - item.height) / 2 + offsetY;

        return item;
    }

    public centerHItem(item: Phaser.GameObjects.Image | CYBR_Graphics, offsetX?: number)
    {
        if (offsetX == undefined)
            offsetX = 0;

        let sceneWidth = this.scale.displaySize.width;    
        item.x = (sceneWidth - item.width) / 2 + offsetX;

        return item;
    }
}