export class Attribute
{
    private _baseValue: number;

    constructor(baseValue: number)
    {
        this._baseValue = baseValue;
    }

    setBaseValue(baseValue: number)
    {
        this._baseValue = baseValue;
    }

    getBaseValue()
    {
        return this._baseValue;
    }

    // TODO: Update this function with modifiers
    getCurrentValue()
    {
        return this._baseValue;
    }
}