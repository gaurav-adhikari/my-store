import React, { useEffect, useState } from 'react'
import LoadingComponent from './loadingComponent';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { selectedProduct } from '../redux/actions/productActions';


function ProductDetail() {

  const [isLoading, setisLoading] = useState(true);
  const dispatch = useDispatch();
  const { productId } = useParams();
  const selectedProductData = useSelector((state) => state.selectedProduct.data);

  console.log(selectedProductData);

  const fetchProduct = async (id) => {
    const response = await axios.
      get(`https://fakestoreapi.com/products/${id}`).
      catch((err) => console.log(err))
    dispatch(selectedProduct(response.data));

    setisLoading(false);
  }

  useEffect(() => {
    fetchProduct(productId);
  }, []);

  const displayProduct = () => {
    return (
      <div className='flex flex-row p-10'>
        <div className='p-10 flex-row '>
          <img src={selectedProductData.image} className='h-2/4 w-auto m-auto hover:h-4/5 transition-all ease-in-out'></img>
        </div>
        <div className='flex flex-col p-5'>
          <span className='font-black text-4xl'>{selectedProductData.title}</span>
          <span className='mt-8 text-3xl py-2 text-red-500'>$ {selectedProductData.price}</span>
          <div className='bg-cyan-100 p-4 mt-3 w-1/5 rounded-xl text-center'><span className=''>{selectedProductData.category[0].toUpperCase() + selectedProductData.category.slice(1)}</span></div>
          <span className='mt-5'>{selectedProductData.description}</span>
          <div className='mt-8 flex justify-center'><button type="button" class="w-1/3 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-6 py-3">Add to Cart</button></div>
        </div>
      </div>
    )
  };

  console.log(selectedProductData);
  return (
    <>
      {isLoading ?
        <span><LoadingComponent /></span>
        : displayProduct()}
    </>
  )
}

export default ProductDetail