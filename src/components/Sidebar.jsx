import React from 'react';
import logo from '../assets/image.svg'
import { FaInbox,FaChartPie,FaShoppingBag,FaSms,FaRegStickyNote,FaBox,FaCalendarAlt,FaUsers,FaShoppingCart,FaExclamationCircle,FaUserAlt } from 'react-icons/fa';
import './Sidebar.css'
import { Link } from "react-router-dom";


const Sidebar = () => {
    return (
        <div className="flex flex-col shadow-lg border h-screen overflow-y-auto overflow-x-hidden">
            <div className="py-4 px-8">
            <Link className="btn btn-ghost cursor-pointer" to='/'> 
            <img src={logo} alt="" />
            </Link>
              
               
            </div>

            <div className="mt-5 transition-all px-8">
                <h2 className="text-gray-400 text-md " >DASHBOARDS</h2>
                    
                <div className="flex items-center hover:bg-secondary rounded-md cursor-pointer __sidebar_link  w-60 p-4">
                    <FaInbox className="text-xl text-gray-600 __sidebar_icon" />
                    <h2 className="mx-5 text-md text-gray-600" >Modern</h2>
                </div>
                <div className="flex items-center hover:bg-secondary rounded-md cursor-pointer __sidebar_link  w-60 p-4">
                    <FaChartPie className="text-xl text-gray-600 __sidebar_icon" />
                    <h2 className="mx-5 text-md text-gray-600" >Analytical</h2>
                </div>
                <div className="flex items-center hover:bg-secondary rounded-md cursor-pointer __sidebar_link  w-60 p-4">
                    <FaShoppingBag className="text-xl text-gray-600 __sidebar_icon" />
                    <h2 className="mx-5 text-md text-gray-600" >eCommerce</h2>
                </div>

                <h2 className="text-gray-400 text-md mt-8" >APPS</h2>

                <div className="flex items-center hover:bg-secondary rounded-md cursor-pointer __sidebar_link  w-60 p-4 ">
                    <FaSms className="text-xl text-gray-600 __sidebar_icon" />
                    <h2 className="mx-5 text-md text-gray-600" >Chat</h2>
                </div>
                <div className="flex items-center hover:bg-secondary rounded-md cursor-pointer __sidebar_link  w-60 p-4 ">
                    <FaRegStickyNote className="text-xl text-gray-600 __sidebar_icon" />
                    <h2 className="mx-5 text-md text-gray-600" >Notes</h2>
                </div>
                <div className="flex items-center hover:bg-secondary rounded-md cursor-pointer __sidebar_link  w-60 p-4 ">
                    <FaBox className="text-xl text-gray-600 __sidebar_icon" />
                    <h2 className="mx-5 text-md text-gray-600" >Mail</h2>
                </div>
                <div className="flex items-center hover:bg-secondary rounded-md cursor-pointer __sidebar_link  w-60 p-4 ">
                    <FaCalendarAlt className="text-xl text-gray-600 __sidebar_icon" />
                    <h2 className="mx-5 text-md text-gray-600" >Calender</h2>
                </div>
                <div className="flex items-center hover:bg-secondary rounded-md cursor-pointer __sidebar_link  w-60 p-4 ">
                    <FaUsers className="text-xl text-gray-600 __sidebar_icon" />
                    <h2 className="mx-5 text-md text-gray-600" >Customer</h2>
                </div>

                <h2 className="text-gray-400 text-md mt-8" >PAGES</h2>

                <div className="flex items-center hover:bg-secondary rounded-md cursor-pointer __sidebar_link  w-60 p-4 ">
                    <FaShoppingCart className="text-xl text-gray-600 __sidebar_icon" />
                    <h2 className="mx-5 text-md text-gray-600" >Shop</h2>
                </div>
                <div className="flex items-center hover:bg-secondary rounded-md cursor-pointer __sidebar_link  w-60 p-4 ">
                    <FaExclamationCircle className="text-xl text-gray-600 __sidebar_icon" />
                    <h2 className="mx-5 text-md text-gray-600" >Alert</h2>
                </div>
                <div className="flex items-center hover:bg-secondary rounded-md cursor-pointer __sidebar_link  w-60 p-4 ">
                    <FaUserAlt className="text-xl text-gray-600 __sidebar_icon" />
                    <h2 className="mx-5 text-md text-gray-600" >User</h2>
                </div>


            </div>
        </div>
    );
};

export default Sidebar;