/* eslint-disable react/prop-types */
 import { useContext } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { ThemeContext } from '../../../context/themeContext';

const chartSetting = {
    yAxis: [
        {
            // label: 'rainfall (mm)',
        },
    ],
    width: 500,
    height: 300,
    sx: {
        ["& .MuiChartAxis-left .MuiChartAxis-ticLabel"]: {
            fill: "#9F9F9F",
        },
        ["& .MuiChartAxis-buttom .MuiChartAxis-ticLabel"]: {
            fill: "#9F9F9F",
        },
    },
};

export default function BarsDataset(props) {
    const { desc } = props;

    const { theme } = useContext(ThemeContext);

    desc.series[1].color = theme.color;

    return (
        <BarChart
            dataset={desc.data}
            xAxis={[
                { scaleType: 'band', dataKey: desc.dataKey, categoryRatio: 0.5 },
            ]}
            series={desc.series}
            slotProps={{
                legend: {
                    direction: "row",
                    position:{ vertical: "top", horizontal:"right"},
                    },
            }}
            {...chartSetting}
        />
    );
}