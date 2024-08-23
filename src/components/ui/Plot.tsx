import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';
import { PlotPoint } from '../../lib/generatePlotData';

interface PlotProps {
    data: PlotPoint[];
}

const tooltipStyle = {
    backgroundColor: '#090A10',
    border: '2px solid #161927',
    borderRadius: '4px',
    color: '#fff',
    // padding: '4px'
};

export default function Plot({ data }: PlotProps) {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={data}>
                <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#31A9ED"
                    strokeWidth={2}
                />
                <CartesianGrid
                    stroke="#949AB5"
                    strokeDasharray="5 5"
                    strokeWidth={2}
                    opacity={0.4}
                />
                <XAxis dataKey="name" stroke="#949AB5" />
                <Tooltip contentStyle={tooltipStyle} />
                <YAxis stroke="#949AB5" />
            </AreaChart>
        </ResponsiveContainer>
    );
}
