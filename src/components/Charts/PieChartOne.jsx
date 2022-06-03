import React from 'react';
import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';

const PieChartOne = () => {
    const data01 = [
        { name: '2020', value: 400, fill:'#FB9678' },
        { name: '2021', value: 300, fill: '#03C9D7' },
        { name: '2022', value: 300, fill: '#ECF0F3' },
      
      ];

    return (
        <PieChart width={700} height={300}>
        <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={120} fill="#03C9D7" />
     
        <Tooltip/>
        </PieChart>
    );
};

export default PieChartOne;