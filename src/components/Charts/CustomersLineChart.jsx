import React from 'react';
import { Line, LineChart, Tooltip } from 'recharts';

const CustomersLineChart = () => {
    const data = [
        {
          
        monthlySales: 1,
        },
        {
          
          monthlySales: 19,
        },
        {
          
          monthlySales: 3,
        },
        {
          
          monthlySales: 13,
        },
        {
          
          monthlySales: 2,
        },
        {
          
          monthlySales: 19,
        }
      ];
    return (
        <LineChart width={300} height={100} data={data}>
        <Line type="monotone" dataKey="monthlySales" stroke="#FFFFFF" strokeWidth={2} />
        <Tooltip />
      </LineChart>
    );
};

export default CustomersLineChart;