import React from 'react';
import { FaEllipsisH } from "react-icons/fa";
import { FaShoppingBag, FaRegStar } from 'react-icons/fa';
import { FiMessageSquare } from "react-icons/fi";
import AreaChartOne from './Charts/AreaChartOne';

const WeeklyStatus = () => {
    return (


        <div className="bg-white py-5 flex flex-col justify-between px-5 rounded-3xl">

            <div>
                <div className='flex justify-between items-center pb-4'>

                    <h2 className="text-left text-xl font-medium py-3 ">Daily Activities</h2>

                    <FaEllipsisH className='cursor-pointer' />

                </div>

                <div className='flex  flex-col gap-4'>



                    <div className='flex justify-between items-center'>
                        <div className='flex gap-2'>
                            <div className="avatar placeholder">
                                <div className="bg-secondary text-neutral-content rounded-full w-12">
                                    <FaShoppingBag className="text-white text-lg" />
                                </div>
                            </div>

                            <div>
                                <h2 className='text-md font-semibold' >Top Sales</h2>
                                <h2 className='text-sm text-gray-500' >Jhonaton Doe</h2>
                            </div>
                        </div>
                        <button className="btn btn-xs bg-gray-200 border-0 text-xs font-medium text-gray-500">+64%</button>
                    </div>

                    <div className='flex justify-between items-center'>
                        <div className='flex gap-2'>
                            <div className="avatar placeholder">
                                <div className="bg-primary text-neutral-content rounded-full w-12">
                                    <FaRegStar className="text-white text-xl" />
                                </div>
                            </div>

                            <div>
                                <h2 className='text-md font-semibold' >Best Seller</h2>
                                <h2 className='text-sm text-gray-500' >MaterialPro Admin</h2>
                            </div>
                        </div>
                        <button className="btn btn-xs bg-gray-200 border-0 text-xs font-medium text-gray-500">+64%</button>
                    </div>

                    <div className='flex justify-between items-center'>
                        <div className='flex gap-2'>
                            <div className="avatar placeholder">
                                <div className="bg-secondary text-neutral-content rounded-full w-12">
                                    <FiMessageSquare className="text-white text-xl" />
                                </div>
                            </div>

                            <div>
                                <h2 className='text-md font-semibold' >Most Commented</h2>
                                <h2 className='text-sm text-gray-500' >Ample Admin</h2>
                            </div>
                        </div>
                        <button className="btn btn-xs bg-gray-200 border-0 text-xs font-medium text-gray-500">+64%</button>
                    </div>






                </div>
            </div>


            <div className="flex justify-center overflow-hidden items-center">
                <AreaChartOne />
            </div>





        </div>
    );
};

export default WeeklyStatus;