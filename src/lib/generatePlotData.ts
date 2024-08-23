import extractDayFromNum from '../utils/extractDay';

export interface PlotPoint {
    name: string;
    value: number;
}

export default function generatePlotData(data: number[]) {
    const plotPoints: PlotPoint[] = [];

    // Build a dataset of days to value
    for (let i = 0; i < 7; i++) {
        plotPoints.push({
            name: extractDayFromNum(i),
            value: data[i],
        });
    }

    return plotPoints;
}
