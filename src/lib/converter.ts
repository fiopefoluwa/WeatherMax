export enum UNIT {
    'CELSIUS',
    'FAHRENHEIT',
}

class TempConverter {
    private unit: UNIT;

    private toFahrenheit(temp: number): number {
        return Number(((9 / 5) * temp + 32).toFixed(2));
    }

    // no need since the temps are already in celsius
    private toCelsius(temp: number): number {
        // return Number(((temp - 32) * (5 / 9)).toFixed(2));
        return temp;
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

    get tempUnit(): string {
        return this.unit == UNIT.CELSIUS ? 'C' : 'F';
    }
}

export default TempConverter;
