export class CYBR_Utils
{
    // This function is based on https://github.com/photonstorm/phaser/blob/v3.51.0/src/display/color/HexStringToColor.js
    // and https://stackoverflow.com/questions/17945972/converting-rgba-values-into-one-integer-in-javascript
    public static hexColorToNumber(stringColor: string): number
    {
        stringColor = stringColor.replace("0x", "#");

        if (stringColor.length == 5) // eg: "#1234" - alpha must be removed
        {
            stringColor = stringColor.substring(0, 4);
        }
        else if (stringColor.length == 9) // eg: "#112233" - alpha is missing
        {
            stringColor = stringColor.substring(0, 7);
        }

        stringColor = stringColor.replace(/^(?:#|0x)?([a-f\d])([a-f\d])([a-f\d])$/i, function (_, r, g, b)
        {
            return r + r + g + g + b + b;
        });
        
        const result = (/^(?:#|0x)?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i).exec(stringColor);
        const r = parseInt(result[1], 16);
        const g = parseInt(result[2], 16);
        const b = parseInt(result[3], 16);

        return (r << 16) + (g << 8) + b;
    }
}
