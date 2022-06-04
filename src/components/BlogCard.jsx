import React from 'react';
import { FaRegClock } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";

const BlogCard = () => {
    return (
                <div className="bg-white pb-7 flex flex-col">

                    <div>
                            <img src="https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/blog-bg2-2x.f6e9447d.jpg" alt="" className="rounded-t-3xl" />
                    </div>
                    <div className="px-8">

                    <div className="mt-3 mb-6 flex items-center gap-3"> <FaRegClock className="text-lg text-gray-400" />  <h2 className="text-sm text-gray-400" >22 March, 2021</h2></div>
                    <h2 className='text-lg font-semibold' >Super awesome, React 18 <br /> is coming soon!</h2>
                    <div className="flex gap-3 my-3">
                    <button className="btn btn-xs bg-secondary border-0 text-xs font-medium text-white">Medium</button>
                    <button className="btn btn-xs bg-primary border-0 text-xs font-medium text-white">Low</button>
                    </div>
                    <div className="divider"></div> 

                    <div className='flex justify-between items-center'>
                        <div className='flex gap-3'>
                            <img src="https://i.ibb.co/y5szpzZ/download.jpg" className='w-12 rounded-full' alt="" />
                            <img src="https://i.ibb.co/B3tfbP8/download.jpg" className='w-12 rounded-full' alt="" />
                            <img src="https://i.ibb.co/1fKf22Q/download.jpg" className='w-12 rounded-full' alt="" />
                        </div>
                        <FiMessageSquare className="cursor-pointer text-2xl text-gray-500" ></FiMessageSquare>

                    </div>


                    </div>
                    
                </div>
    );
};

export default BlogCard;