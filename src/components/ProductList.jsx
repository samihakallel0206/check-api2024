import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
   axios
     .get("https://api.escuelajs.co/api/v1/products")
     .then((res) => setProducts(res.data))
     .catch((err) => console.log(err));
  }, [])

  return (
    <div>
      <h2 className='text-green-800'>Product List</h2>
      {products.map((product, key) => <ProductCard product={product} key={product.id} />)}
     
    </div>
  )
}

export default ProductList