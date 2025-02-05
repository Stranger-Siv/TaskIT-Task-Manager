import React from 'react'
import logo from '../assets/logo.jpg';


const Navbar = () => {
    return (
        <div className="flex justify-between items-center px-4 py-2 bg-gray-100 shadow-md">
            <div className="flex items-center gap-2">
                <img src={logo} alt="Task Logo" className="w-10 h-10 rounded-full object-cover" />
                <h2 className="text-lg font-bold text-gray-800">Task IT</h2>
            </div>
        </div>
    );
};



export default Navbar