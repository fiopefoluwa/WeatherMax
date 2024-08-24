import extractDayFromNum from '../utils/extractDay';

export interface PlotPoint {
    name: string;
    value: number;
}

export default function generatePlotData(data: number[]) {
    const plotPoints: PlotPoint[] = [];
    const currDay = new Date().getDay();

    // Build a dataset of days to value, starting from current day
    for (let i = 0; i < 7; i++) {
        plotPoints.push({
            name: extractDayFromNum((i + currDay - 1) % 7),
            value: data[i],
        });
    }

    return plotPoints;
}
