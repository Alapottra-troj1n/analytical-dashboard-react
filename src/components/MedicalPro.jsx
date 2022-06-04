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
            <div className="flex my-10 justify-between border-b-2  ">

                    <div className=" pb-2">
                        <h2 className='text-sm text-gray-500' >Due Date</h2>
                        <h2 className='text-sm ' >Oct 23, 2021</h2>
                    </div>

                    <div className="border-r-2"></div>

                    <div className="  " >
                        <h2 className='text-sm text-gray-500' >Due Date</h2>
                        <h2 className='text-sm ' >Oct 23, 2021</h2>
                    </div>

                    <div className="border-r-2"></div>

                    <div className=" ">
                        <h2 className='text-sm text-gray-500' >Due Date</h2>
                        <h2 className='text-sm ' >Oct 23, 2021</h2>
                    </div>

            </div>

            <div className='flex flex-col gap-2'>

            </div>
           

        </div>
    );
};

export default MedicalPro;