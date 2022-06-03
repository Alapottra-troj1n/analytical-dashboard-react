import React from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts';

const BarChartOne = () => {
    const data = [
        {
          
        monthly: 2400,
        },
        {
          
          monthly: 2210,
        },
        {
          
          monthly: 2290,
        },
        {
          
          monthly: 2000,
        },
        {
          
          monthly: 2181,
        },
        {
          
          monthly: 2500,
        },
        {
          
          monthly: 3100,
        },
        {
            
            monthly: 1100,
          },
          {
            
            monthly: 2100,
          },
          {
            
            monthly: 2100,
          },
          {
            
            monthly: 1200,
          },
          {
            
            monthly: 2200,
          },
          {
            
            monthly: 1100,
          },
      ];

    return (
     
            <BarChart width={230} height={74} data={data}>
                <Bar dataKey="monthly" barSize={7} fill="#aaebf0" />
                <Tooltip />
            </BarChart>
 
 
    );
};

export default BarChartOne;