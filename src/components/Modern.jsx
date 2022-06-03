import React from 'react';
import girl from '../assets/welcome-bg2-2x-svg.e15f0c3a.svg'
import { FaShoppingBag, FaDollarSign } from 'react-icons/fa';
import LineChartOne from './Charts/LineChartOne';
import BarChartOne from './Charts/BarChartOne';


const Modern = () => {
  


    return (
        <div className="container mx-auto">
            <div>
                <div className="grid grid-cols-[40%,25%,35%] px-28 mt-16 items-center gap-5">
                    <div className="w-full flex justify-between bg-white overflow-hidden h-52 rounded-lg drop-shadow-sm" >
                        <div className="p-8">
                            <h2 className="font-medium my-2 text-lg" >Congratulation Julia</h2>
                            <h2 className='text-2xl font-semibold py-2' >$39,358 <span className="text-sm">↗︎ +9%</span>  </h2>
                            <button className="btn btn-primary text-white font-light">Download</button>
                        </div>
                        <img src={girl} alt="" className="scale-150 mt-7" />
                    </div>
                    <div className="w-full flex justify-between bg-white overflow-hidden h-52 rounded-lg p-8 drop-shadow-sm" >
                        <div className="">
                            <h2 className="font-medium my-2 text-lg" >Purchases</h2>
                            <h2 className="font-semibold mt-5 my-2 text-3xl" >2,367</h2>
                            <h2 className="font-normal my-2 text-sm text-gray-400" >Monthly Sales</h2>
                        </div>
                        <div>
                            <button class='btn btn-secondary rounded-full' ><FaShoppingBag className="text-white text-lg" /></button>
                        </div>
                    </div>
                    <div className="w-full flex justify-between bg-white overflow-hidden h-52 rounded-lg p-8 drop-shadow-sm" >
                        <div className="">
                            <h2 className="font-medium my-2 text-lg" >Total Earnings</h2>
                            <h2 className="font-semibold mt-5 my-2 text-3xl" >$93,438.78</h2>
                            <h2 className="font-normal my-2 text-sm text-gray-400" >Monthly Revenue</h2>
                        </div>
                        <div>
                            <button class='btn btn-primary rounded-full' ><FaDollarSign className="text-white text-lg" /></button>
                        </div>
                    </div>

                </div>

                <div className="grid grid-cols-[65%,35%] px-28 items-center gap-5 mt-10">

                    <div className=" bg-white py-5 flex  flex-col justify-center px-5 rounded-lg">
                        <div className='flex justify-between'>
                            <h2 className="text-left text-xl font-medium mt-3 mb-10">Revenue Updates</h2>
                            <select class="select max-w-xs select-bordered">
                                <option disabled selected>March 2022</option>
                                <option>April 2022</option>
                                <option>May 2022</option>
                              
                            </select>
                        </div>
                        <div className="flex items-center justify-center">
                        <LineChartOne/>
                        </div>

                    </div>
                    <div className="flex flex-col gap-5 h-full">
                        <div className="bg-secondary py-5 flex flex-col px-5 rounded-lg flex-1" >
                            <h2 className="pt-5 ml-4 text-white font-medium text-lg">Monthy Earnings</h2>
                            <div className="flex  items-center justify-center" >
                            <BarChartOne/>
                       
                            </div>
                            <h2 className="pt-5 ml-4 text-white font-medium text-2xl">$39,358 <span className="text-sm">↗︎ +9% this week</span> </h2>
                           
                        </div>
                        <div className="bg-primary py-5 flex flex-col px-5 rounded-lg flex-1" >
                            <h2 className="pt-5 ml-4 text-white font-medium text-lg">Customers</h2>
                            <div className="flex  items-center justify-center" >
                            <BarChartOne/>
                       
                            </div>
                            <h2 className="pt-5 ml-4 text-white font-medium text-2xl">750 <span className="text-sm">↗︎ +9% this week</span> </h2>
                           
                        </div>
                      

                    </div>




                </div>

            </div>
        </div>
    );
};

export default Modern;