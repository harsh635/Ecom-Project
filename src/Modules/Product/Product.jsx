import React, { useState, useEffect  } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({})
  console.log(id, 'id', product)

  useEffect(() => {
    const fetchProduct = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        const data = await response.json()
        console.log(data)
        setProduct(data)
    }
    fetchProduct()
},[])

const handleCart = (product) => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const isProductExist = cart.find(item => item.id === product.id)
  if(isProductExist){
    const updateCart = cart.map(item => {
      if(item.id === product.id){
        return{
          ...item,
          quantity: item.quantity + 1
        }
      }
      return item
    })
    localStorage.setItem('cart', JSON.stringify(updateCart))
  }
  else{
    localStorage.setItem('cart', JSON.stringify([...cart, {...product, quantity: 1}]))
  }
  toast.success("Added To Cart !");
 
   

}

if(!Object.keys(product).length > 0) return <div>Loading...</div>

  return (
    <>
     <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
        <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt={product?.title} className="lg:w-1/2 w-full lg:h-auto h-64 max-h-[400px] object-contain object-center rounded" src={product?.image} />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">{product?.category}</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product?.title}</h1>
        <div className="flex mb-4">
          <span className="flex items-center">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-gray-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span className="text-gray-600 ml-3">4 Reviews</span>
          </span>
         
        </div>
        <p className="leading-relaxed">{product?.description}</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          <div className="flex">
            <span className="mr-3">Color</span>
            <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
            <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
            <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
          </div>
          </div>
        <div className="flex justify-between items-center">
          <span className="title-font font-medium text-2xl text-gray-900">${product?.price}</span>
          <div className=' flex'>
          <button onClick={()=>handleCart(product)} className="flex ml-auto text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-slate-600 hover:text-black rounded">Add to Cart</button> 
          
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Product