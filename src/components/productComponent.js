import React from 'react'
import { useSelector } from 'react-redux';

function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);
  // const { id, title } = products[0];
  // console.log("id is " + id + " title is " + title);

  return (
    <div>ProductComponent</div>
  )
}

export default ProductComponent