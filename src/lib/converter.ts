export enum UNIT {
    'CELSIUS',
    'FAHRENHEIT',
}

class TempConverter {
    unit: UNIT;

    private toFahrenheit(temp: number): number {
        return (9 / 5) * temp + 32;
    }

    private toCelsius(temp: number): number {
        return (temp - 32) * (5 / 9);
    }

    constructor(unit: UNIT) {
        this.unit = unit;
    }

    convert(temp: number): number {
        if (this.unit == UNIT.CELSIUS) {
            return this.toCelsius(temp);
        }
        return this.toFahrenheit(temp);
    }
}

export default TempConverter;
