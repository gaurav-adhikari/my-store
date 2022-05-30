import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function ProductComponent() {

  const products = useSelector((state) => state.allProducts.products);
  console.log("products are: ", products);


  const renderList = products.map((product) => {
    return (
      <span className='border-2 border-gray-200 w-1/6 md:2/3 rounded-lg p-4 shadow-lg cursor-pointer hover:shadow-2xl m-5  transition-shadow ease-in-out'>
        <Link to={`/product/${product.id}`}>
          <div className='flex flex-col'>
            <div className='justify-center items-center flex'>
              <img src={product.image} className='xl:h-64,w-48 md:h-48 md:w-32 sm:h-24' />
            </div>
            <hr className='mt-3' />
            <span className='font-semibold mt-3'>{product.title}</span>
            <span className='font-semibold mt-1'>$ {product.price}</span>
            <span className='font-thin text-sm text-gray-700'>{product.category}</span>
          </div>
        </Link>
      </span>
    )
  });

  return (
    <div className='flex flex-wrap flex-auto justify-center mt-3'>
      {renderList}
    </div>
  )
}

export default ProductComponent