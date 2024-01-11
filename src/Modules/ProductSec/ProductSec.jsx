import React, { useEffect, useState } from 'react'
import Products from '../../assets/Components/Products/Products';
import Categories from '../../assets/Components/Categories/Categories';

const ProductSec = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        const fetchProducts = async () => {
            const response = await fetch(`https://fakestoreapi.com/products`)
            const data = await response.json()
            setProducts(data)
        }
        fetchProducts()

    },[])

  return (
    <div>
    <div className="flex flex-col text-center w-full mt-5">
        <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900">ALL PRODUCTS</h1>
        </div>
        {
        products.length > 0 ?
        <Products products={products}/>
        :
        <div></div>
      }
    </div>
  )
}

export default ProductSec