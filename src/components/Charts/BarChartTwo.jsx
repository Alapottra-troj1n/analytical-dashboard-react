import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const BarChartTwo = () => {
    const data = [
        {
          name: 'Jan',
          ampleAdmin: 255,
          pixelAdmin: 280,
        
        },
        {
          name: 'Feb',
          ampleAdmin: 390,
          pixelAdmin: 250,
        
        },
        {
          name: 'Mar',
          ampleAdmin: 300,
          pixelAdmin: 325,
         
        },
        {
          name: 'April',
          ampleAdmin: 350,
          pixelAdmin: 325,
      
        },
        {
          name: 'May',
          ampleAdmin: 390,
          pixelAdmin: 250,
     
        },
        {
          name: 'Jun',
          ampleAdmin: 180,
          pixelAdmin: 310,
        
        },
     
      ];

    return (
        <div>

<BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
        
          <XAxis tick={{ fontSize: 11, fill: '#B2BBD8' }} dataKey="name" />
          <YAxis tick={{ fontSize: 11, fill: '#B2BBD8' }} />
          <Tooltip />
      
          <Bar dataKey="ampleAdmin" barSize={12} radius={[15, 15, 0, 0]} fill="#FB9678" />
          <Bar dataKey="pixelAdmin" barSize={12} radius={[15, 15, 0, 0]} fill="#03C9D7" />
        </BarChart>
            
        </div>
    );
};

export default BarChartTwo;