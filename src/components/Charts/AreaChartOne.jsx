import React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const AreaChartOne = () => {
    const data = [
        {
          weeklyStatus: 40,
   
        },
        {
  
          weeklyStatus: 60,
      
        },
        {
 
          weeklyStatus: 50,
       
        },
        {

          weeklyStatus: 65,
       
        },
        
      ];


    return (
        <ResponsiveContainer width="100%" height={150}>
        <AreaChart
       

        data={data}
      >
    
       
  
        <Tooltip />
        <Area type="monotone" dataKey="weeklyStatus" stroke="#03C9D7" fill="#e8fbfc" />
      </AreaChart>
      </ResponsiveContainer>
    );
};

export default AreaChartOne;