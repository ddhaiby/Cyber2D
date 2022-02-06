export class Attribute
{
    constructor(name, baseValue)
    {
        this.name = name;
        this._baseValue = baseValue;
    }

    setBaseValue(baseValue)
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