export class CYBR_Scene extends Phaser.Scene
{
    constructor(config)
    {
        super(config);
    }

    centerItem(item, offsetX, offsetY)
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
    
    centerVItem(item, offsetY)
    {
        if (offsetY == undefined)
            offsetY = 0;

        let sceneHeight = this.scale.displaySize.height;
        item.y = (sceneHeight - item.height) / 2 + offsetY;

        return item;
    }

    centerHItem(item, offsetX)
    {
        if (offsetX == undefined)
            offsetX = 0;

        let sceneWidth = this.scale.displaySize.width;    
        item.x = (sceneWidth - item.width) / 2 + offsetX;

        return item;
    }
}