import React from 'react';
import girl from '../assets/welcome-bg2-2x-svg.e15f0c3a.svg'
import { FaShoppingBag, FaDollarSign } from 'react-icons/fa';
import LineChartOne from './Charts/LineChartOne';
import BarChartOne from './Charts/BarChartOne';
import CustomersLineChart from './Charts/CustomersLineChart';
import PieChartOne from './Charts/PieChartOne';
import Table from './Table';
import { FaEllipsisH } from "react-icons/fa";
import DailyActivities from './DailyActivities';
import BarChartTwo from './Charts/BarChartTwo';
import BlogCard from './BlogCard';


const Modern = () => {



    return (
        <div className=" pb-10 ">
            <div>
                 {/* First Section */}
                <div className="grid grid-cols-[40%,25%,35%] px-28 mt-16  items-center gap-5">
                    <div className="w-full flex justify-between bg-white overflow-hidden h-52 rounded-3xl drop-shadow-sm" >
                        <div className="p-8">
                            <h2 className="font-medium my-2 text-lg" >Congratulation Julia</h2>
                            <h2 className='text-2xl font-semibold py-2' >$39,358 <span className="text-sm">↗︎ +9%</span>  </h2>
                            <button className="btn btn-primary text-white font-light">Download</button>
                        </div>
                        <img src={girl} alt="" className="scale-150 mt-7" />
                    </div>
                    <div className="w-full flex justify-between bg-white overflow-hidden h-52 rounded-3xl p-8 drop-shadow-sm" >
                        <div className="">
                            <h2 className="font-medium my-2 text-lg" >Purchases</h2>
                            <h2 className="font-semibold mt-5 my-2 text-3xl" >2,367</h2>
                            <h2 className="font-normal my-2 text-sm text-gray-400" >Monthly Sales</h2>
                        </div>
                        <div>
                            <button class='btn btn-secondary rounded-full' ><FaShoppingBag className="text-white text-lg" /></button>
                        </div>
                    </div>
                    <div className="w-full flex justify-between bg-white overflow-hidden h-52 rounded-3xl p-8 drop-shadow-sm" >
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

                 {/* Second Section */}

                <div className="grid grid-cols-[65%,35%] px-28 items-center gap-5 mt-10">

                    <div className=" bg-white py-5 flex flex-1 h-full flex-col justify-center px-5 rounded-3xl">
                        <div className='flex justify-between'>
                            <h2 className="text-left text-xl font-medium mt-3 mb-10">Revenue Updates</h2>
                            <select class="select max-w-xs select-bordered">
                                <option disabled selected>March 2022</option>
                                <option>April 2022</option>
                                <option>May 2022</option>

                            </select>
                        </div>
                        <div className="flex items-center justify-center">
                            <LineChartOne />
                        </div>

                    </div>
                    <div className="flex flex-col gap-5 h-full">
                        <div className="bg-secondary py-5 flex flex-col px-5 rounded-3xl flex-1" >
                            <h2 className="pt-5 ml-4 text-white font-medium text-lg">Monthy Earnings</h2>
                            <div className="flex  items-center justify-center" >
                                <BarChartOne />

                            </div>
                            <h2 className="pt-5 ml-4 text-white font-medium text-2xl">$39,358 <span className="text-sm">↗︎ +9% this week</span> </h2>

                        </div>
                        <div className="bg-primary py-5 flex flex-col px-5 rounded-3xl flex-1" >
                            <h2 className="pt-5 ml-4 text-white font-medium text-lg">Customers</h2>
                            <div className="flex  items-center justify-center" >
                                <CustomersLineChart />

                            </div>
                            <h2 className="pt-5 ml-4 text-white font-medium text-2xl">750 <span className="text-sm">↗︎ +9% this week</span> </h2>

                        </div>


                    </div>




                </div>

                {/* Third Section */}

                <div className="grid grid-cols-[35%,65%] px-28 items-center gap-5 mt-10">

                    <div className=" bg-white py-5 flex flex-col justify-between px-5 rounded-3xl">
                        <div className='flex justify-between'>
                            <h2 className="text-left text-xl font-medium mt-3 mb-10">Total Sales</h2>
                            <select class="select max-w-xs select-bordered">
                                <option disabled selected>March 2022</option>
                                <option>April 2022</option>
                                <option>May 2022</option>

                            </select>
                        </div>
                        
                        <div className="divider"></div>
                          <div className="flex justify-between" >
                          <h2 className="text-left text-lg font-medium mt-3 mb-10">Sales Yearly</h2>
                          <h2 className="text-left text-2xl font-semibold mt-3 mb-10">8,364,398</h2>

                          </div>

                          <div className='flex items-center flex-col justify-center' >
                              <PieChartOne/>
                            <div className="flex justify-between gap-5">
                            <div className='flex items-center'>
                              <div className="badge badge-primary badge-xs mx-2"></div>
                              <h2 className='text-sm'>2020</h2>
                              </div>
                              <div className='flex items-center'>
                              <div className="badge badge-secondary badge-xs mx-2"></div>
                              <h2 className='text-sm'>2021</h2>
                              </div>
                            </div>
                          </div>
                    </div>



                    <div className=" bg-white py-5 flex flex-col  h-full w-full justify-between px-5 rounded-3xl">

                    <div className='flex justify-between'>
                            <h2 className="text-left text-xl font-medium mt-3">Product Performance</h2>
                            <select class="select max-w-xs select-bordered">
                                <option disabled selected>March 2022</option>
                                <option>April 2022</option>
                                <option>May 2022</option>

                            </select>
                    </div>

                 

                    <div>
                        <Table/>
                    </div>


                    </div>

                </div>

                {/* Fourth Section */}

                <div className=" grid grid-cols-2 px-28 pt-5 gap-5 mt-10">

                    <div className='bg-white py-5 flex flex-col justify-between px-5 rounded-3xl'>

                    <div className='flex justify-between'>
                            <h2 className="text-left text-xl font-medium py-3   mb-10">Daily Activities</h2>
                           
                           <FaEllipsisH className='cursor-pointer' />
                          
                    </div>

                        <DailyActivities/>


                    </div>
                    <div className='bg-white py-5 flex flex-col justify-between px-5 rounded-3xl'>

                    <div className='flex justify-between'>
                            <h2 className="text-left text-xl font-medium ">Sales Overview</h2>
                           
                           <div className='flex gap-3'>

                           <div className='flex items-center' >
                           <div class="badge badge-xs badge-secondary mx-3"></div>
                           <h2 className='text-sm' >Pixel Admin</h2>
                           </div>

                           <div className='flex items-center ' >
                           <div class="badge badge-xs badge-primary mx-3"></div>
                           <h2 className='text-sm' >Ample Admin</h2>
                           </div>

                           </div>
                          
                    </div>

                    <div className='flex  items-center justify-center'>
                        <BarChartTwo/>
                        
                    </div>



                    </div>


                </div>

                  {/* Fifth Section */}


                  <div className='grid grid-cols-3 px-28 pt-5 gap-5 mt-10'>    

                          <BlogCard/>
                          <BlogCard/>
                          <BlogCard/>

                   


                  </div>






            </div>
        </div>
    );
};

export default Modern;