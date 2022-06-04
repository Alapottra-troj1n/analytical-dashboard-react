import React from 'react';
import { FaEllipsisH } from "react-icons/fa";

const MedicalPro = () => {
    return (
        <div className="bg-white py-5 flex flex-col px-5 rounded-3xl" >
            <div>
                <div className='flex justify-between items-center pb-4'>

                    <h2 className="text-left text-xl font-medium py-3 ">MedicalPro Branding</h2>

                    <FaEllipsisH className='cursor-pointer' />

                </div>
                <button className="btn btn-xs bg-cyan-100 border-0 text-xs font-medium text-secondary">16 APR, 2021</button>
            </div>
            <div className="flex my-10 justify-between border-b  ">

                <div className=" pb-2">
                    <h2 className='text-sm text-gray-500' >Due Date</h2>
                    <h2 className='text-sm ' >Oct 23, 2021</h2>
                </div>

                <div className="border-r"></div>

                <div className="  " >
                    <h2 className='text-sm text-gray-500' >Due Date</h2>
                    <h2 className='text-sm ' >Oct 23, 2021</h2>
                </div>

                <div className="border-r"></div>

                <div className=" ">
                    <h2 className='text-sm text-gray-500' >Due Date</h2>
                    <h2 className='text-sm ' >Oct 23, 2021</h2>
                </div>

            </div>

            <div className='flex flex-col gap-2 border-b pb-7'>
                <h2 className='text-lg font-semibold'>Teams</h2>
                <div className='flex gap-3'>
                    <button className="btn btn-xs btn-secondary text-xs font-normal text-white">Bootstrap</button>
                    <button className="btn btn-xs btn-primary text-xs font-normal text-white">Angular</button>
                </div>


            </div>

            <div className='flex flex-col gap-2 border-b py-7 '>
                <h2 className='text-lg font-semibold'>Leaders</h2>
                <div className='flex gap-3'>
                    <img src="https://i.ibb.co/y5szpzZ/download.jpg" className='w-8 rounded-full' alt="" />
                    <img src="https://i.ibb.co/B3tfbP8/download.jpg" className='w-8 rounded-full' alt="" />
                    <img src="https://i.ibb.co/1fKf22Q/download.jpg" className='w-8 rounded-full' alt="" />
                    <img src="https://i.ibb.co/qBXPtvg/download-1.jpg" className='w-8 rounded-full' alt="" />
                </div>


            </div>

            
            <div className='flex justify-between gap-2 py-7  items-center'>
                <button className="btn btn-secondary text-white btn-md text-sm">ADD</button>
                <h2 className='text-sm text-gray-500' >36 Recent Transactions</h2>

              


            </div>


        </div>
    );
};

export default MedicalPro;