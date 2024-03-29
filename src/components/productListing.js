import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setProducts } from '../redux/actions/productActions';
import LoadingComponent from './loadingComponent';
import ProductComponent from './productComponent';

function ProductListing() {

  const [isLoading, setisLoading] = useState(true);

  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios.
      get("https://fakestoreapi.com/products").
      catch((err) => console.log(err))

    dispatch(setProducts(response.data));
    setisLoading(false);
  }

  useEffect(() => {
    fetchProducts();

  }, [])

  return (
    <div>
      {isLoading ?
        <span><LoadingComponent /></span>
        : <ProductComponent />}
    </div>
  )
}

export default ProductListing