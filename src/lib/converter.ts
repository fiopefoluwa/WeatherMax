type ConverterModes = 'celsius' | 'fahrenheit';

class TempConverter {
    mode: ConverterModes;

    private toFahrenheit(temp: number): number {
        return (9 / 5) * temp + 32;
    }

    private toCelsius(temp: number): number {
        return (temp - 32) * (5 / 9);
    }

    constructor(mode: ConverterModes) {
        this.mode = mode;
    }

    convert(temp: number): number {
        if (this.mode == 'celsius') {
            return this.toCelsius(temp);
        }
        return this.toFahrenheit(temp);
    }
}

export default TempConverter;
