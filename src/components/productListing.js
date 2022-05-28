import React from 'react'
import { useSelector } from 'react-redux'
import ProductComponent from './productComponent';

function ProductListing() {
  const products = useSelector((state) => state);
  console.log(products);

  return (
    <ProductComponent />
  )
}

export default ProductListing