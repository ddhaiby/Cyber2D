import { CYBR_Graphics } from "../UI/CYBR_Graphics";

export class CYBR_Scene extends Phaser.Scene
{
    constructor(config: string | Phaser.Types.Scenes.SettingsConfig)
    {
        super(config);
    }

    centerItem(item: Phaser.GameObjects.Image | Phaser.GameObjects.Text | CYBR_Graphics, offsetX?: number, offsetY?: number)
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
    
    centerVItem(item: Phaser.GameObjects.Image | CYBR_Graphics, offsetY?: number)
    {
        if (offsetY == undefined)
            offsetY = 0;

        let sceneHeight = this.scale.displaySize.height;
        item.y = (sceneHeight - item.height) / 2 + offsetY;

        return item;
    }

    centerHItem(item: Phaser.GameObjects.Image | CYBR_Graphics, offsetX?: number)
    {
        if (offsetX == undefined)
            offsetX = 0;

        let sceneWidth = this.scale.displaySize.width;    
        item.x = (sceneWidth - item.width) / 2 + offsetX;

        return item;
    }
}