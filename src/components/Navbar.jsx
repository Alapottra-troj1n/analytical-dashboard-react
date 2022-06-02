import React from 'react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start  ">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                    </div>
                    <button className="btn btn-ghost"><FaSearch className="cursor-pointer text-xl text-gray-400" ></FaSearch></button>

                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost"><FaShoppingCart className="cursor-pointer text-xl text-gray-400" ></FaShoppingCart></button>
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>
                    <div className='flex items-center'>
                        <div class="avatar online flex ml-10 mr-2 items-center">
                            <div class="w-8 rounded-full">
                                <img src="https://api.lorem.space/image/face?hash=28212" />
                            </div>
                            
                        </div>
                        <h2 className='mx-3 text-gray-500' >Hi, <span className='font-semibold' >Julia</span> </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;