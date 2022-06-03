import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
    

const LineChartOne = () => {

    const lineChartData = [
        {
            name: '16/8',
            earning: 0,
            expense: 0,

        },
        {
            name: '17/8',
            earning: 5,
            expense: 3,

        },
        {
            name: '18/8',
            earning: 6,
            expense: 1,

        },
        {
            name: '19/8',
            earning: 8,
            expense: 2,

        },
        {
            name: '20/8',
            earning: 27,
            expense: 8,

        },
        {
            name: '21/8',
            earning: 9,
            expense: 1,

        },
        {
            name: '22/9',
            earning: 24,
            expense: 1,

        },
    ];
    return (
        <LineChart
        width={700}
        height={330}
        data={lineChartData}
        margin={{
            top: 10,
            right: 30,
            left: 20,
            bottom: 5,
        }}
    >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#B2BBD8' }} />
        <YAxis tick={{ fontSize: 11, fill: '#B2BBD8' }} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="earning" stroke="#FB9678" strokeWidth={3} activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="expense" stroke="#03C9D7" strokeWidth={3} />
    </LineChart>
    );
};

export default LineChartOne;