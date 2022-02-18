export class Attribute
{
    private _baseValue: number;

    constructor(baseValue: number)
    {
        this._baseValue = baseValue;
    }

    public setBaseValue(baseValue: number)
    {
        this._baseValue = baseValue;
    }

    public getBaseValue()
    {
        return this._baseValue;
    }

    // TODO: Update this function with modifiers
    public getCurrentValue()
    {
        return this._baseValue;
    }
}