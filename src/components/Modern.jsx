import React from 'react';
import girl from '../assets/welcome-bg2-2x-svg.e15f0c3a.svg'
import { FaShoppingBag,FaDollarSign } from 'react-icons/fa';

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

            </div>
        </div>
    );
};

export default Modern;