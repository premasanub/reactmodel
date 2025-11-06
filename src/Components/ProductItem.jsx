import React from 'react';

const ProductItem = ({ele}) => {
    return (
        <div className="container p-4 rounded shadow hover:shadow-lg transition duration-300">
            <img src={ele.image} alt={ele.title} className="w-full h-48 object-contain mb-4" />
            <h2 className="text-lg font-semibold mb-2">{ele.title}</h2>
            <p className="text-gray-700 mb-2">${ele.price}</p>
            <p className="text-gray-600 mb-4">{ele.description}</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add to Cart</button>
        </div>
    );
};

export default ProductItem;