import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Products( {products=[]}){
  
  const [data, setData] = useState(products);
  const [filters,setFilters]=useState({price:[],cat:[]})
     
const filterProducts=()=>{
  var filteredProduct=products;
  console.log(filters);
  if(filters.cat.length>0 && filters.cat[0]!=='0')
  {
    filteredProduct=filteredProduct.filter((item) => {
      return item.category === filters.cat[0];})
  }
  if(filters.price.length>0 && filters.price[0]!=='0')
  {
    var pricerange = filters.price[0];
    if(pricerange === '100'){
      filteredProduct = filteredProduct.filter((item) =>{
         return item.price <= pricerange;
      })
    }
    else if(pricerange === '101'){
      filteredProduct = filteredProduct.filter((item) =>{
         return item.price > pricerange;
      })
    }
    else if(pricerange === '1000'){
      filteredProduct = filteredProduct.filter((item) =>{
         return item.price < pricerange;
      })
  }
  }
  setData(filteredProduct);
}
useEffect(()=>{
  filterProducts();
},[filters]);
  

return (
  <>
  <div className="buttons text-center py-5 flex flex-wrap">
  <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 sm:mb-0">
  <div className="container mx-auto px-4 h-full">
    <div className="flex items-center justify-center h-full w-full">
      <div className="relative mb-2 flex items-center after:w-[8px] after:h-[8px] after:border-black/70 after:border-b after:border-r after:transform after:rotate-45 after:absolute after:right-3">
        <select className="text-black/70 bg-white px-3 py-2 transition-all cursor-pointer hover:border-blue-600/30 border border-gray-200 rounded-lg outline-blue-600/50 appearance-none invalid:text-black/30 w-64"
        onChange={(e)=>{setFilters({...filters,price:[e.target.value]})}}>
          <option value="0">Filter By Price</option>
          <option value="100">upto $100</option>
          <option value="1000">upto $1000</option>
          <option value="101">$101-$1000</option>
        </select>
      </div>
    </div>
  </div>
  </div>
  <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 sm:mb-0">
    <div className="container mx-auto px-4 h-full">
      <div className="flex items-center justify-center h-full w-full">
        <div className="relative mb-2 flex items-center after:w-[8px] after:h-[8px] after:border-black/70 after:border-b after:border-r after:transform after:rotate-45 after:absolute after:right-3">
          <select className="text-black/70 bg-white px-3 py-2 transition-all cursor-pointer hover:border-blue-600/30 border border-gray-200 rounded-lg outline-blue-600/50 appearance-none invalid:text-black/30 w-64"
          onChange={(e)=>{setFilters({...filters,cat:[e.target.value]})}}>
            <option value="0">Filter By Category</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
          </select>
        </div>
      </div>
    </div>
  </div>
  </div>

        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
    {
      data.map((product) => {
        console.log(product, 'product')
        const { id, title, price, description, category, image } = product;
        return(
          <Link to={`/products/${id}`} className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer mb-4">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt={title} className="object-contain object-center w-full h-full block" src={image} />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">{category}</h3>
          <h2 className="text-gray-900  title-font text-lg  font-medium max-h-10">{title.split(' ').slice(0, 4).join(' ')}</h2>
          <div className=' mt-12 flex-col align-middle'>
          <p className="mb-2">${price}</p>
          <button className=" ml-auto text-white bg-black border-0 py-1 px-1 focus:outline-none hover:bg-slate-600 hover:text-white rounded" onClick={() => handleCart(product)}>Add to Cart</button>
          </div>
        </div>
      </Link>
        )
      })
    }
    </div>
  </div>
</section>
</>
  )
}

export default Products;