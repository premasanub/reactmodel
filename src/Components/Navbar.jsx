import React from 'react';
import { PiShoppingCart } from "react-icons/pi";
const Navbar = ({cartCount}) => {
    return (
        <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
            <div className="text-2xl font-bold">MyStore</div>
            <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200">
                <PiShoppingCart size={24} />
                {cartCount}
            </button>
        </nav>
    );
};

export default Navbar;