import React from 'react';
import { FaGenderless } from "react-icons/fa";

const DailyActivities = () => {
    return (
        <div className='flex flex-col' >
            <div className='flex items-center'>
                <h2 className='text-md font-semibold'>09.50</h2>
                <div className='flex flex-col items-center'>
                <FaGenderless className=' mx-5 text-2xl text-secondary mt-6'/>
                <div className='h-5 border-l-2 border-slate-300 inline' ></div>
                </div>
                <h2 className='text-sm text-gray-500' >Payment received from John Doe of $385.90</h2>
                

            </div>

            <div className='flex items-center'>
                <h2 className='text-md font-semibold'>09.46</h2>
                <div className='flex flex-col items-center'>
                <FaGenderless className=' mx-5 text-2xl text-primary mt-6'/>
                <div className='h-5 border-l-2 border-slate-300 inline' ></div>
                </div>
                <h2 className='text-sm text-gray-500' >Project Meeting</h2>
                

            </div>

            <div className='flex items-center'>
                <h2 className='text-md font-semibold'>09.47</h2>
                <div className='flex flex-col items-center'>
                <FaGenderless className=' mx-5 text-2xl text-amber-400 mt-6'/>
                <div className='h-5 border-l-2 border-slate-300 inline' ></div>
                </div>
                <h2 className='text-sm text-gray-500' >New sale recorded #ML-3467</h2>
                

            </div>

            <div className='flex items-center'>
                <h2 className='text-md font-semibold'>09.48</h2>
                <div className='flex flex-col items-center'>
                <FaGenderless className=' mx-5 text-2xl text-error mt-6'/>
                <div className='h-5 border-l-2 border-slate-300 inline' ></div>
                </div>
                <h2 className='text-sm text-gray-500' >Payment was made of $64.95 to Michael Anderson</h2>
                

            </div>

            <div className='flex items-center'>
                <h2 className='text-md font-semibold'>09.49</h2>
                <div className='flex flex-col items-center'>
                <FaGenderless className=' mx-5 text-2xl text-success mt-6'/>
                <div className='h-5 border-l-2 border-slate-300 inline' ></div>
                </div>
                <h2 className='text-sm text-gray-500' >New payment receipt created for Alphanso Golvo</h2>
                

            </div>
           

           

        </div>
    );
};

export default DailyActivities;