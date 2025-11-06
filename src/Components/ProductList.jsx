import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({products}) => {
    return (
        <div className='container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {products.map((ele)=>(
               <ProductItem key={ele.id} ele={ele}/>
            ))}
        </div>
    );
};

export default ProductList;