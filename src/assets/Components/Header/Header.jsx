import React from 'react'
import { Link } from 'react-router-dom'




function Header() {
  return (
  <header class="text-zinc-950 body-font border-b border-gray-200 bg-slate-400">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center font-extrabold tracking-tight">
      <Link to={'/'} className="ml-3 text-xl">QUICK BUY</Link>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link to={'/'} className="mr-5 hover:text-gray-900 font-bold tracking-wide">Home</Link>
      <Link to={'/products'} className="mr-5 hover:text-gray-900 font-bold tracking-wide">Products</Link>
      <Link to={'/about'} className="mr-5 hover:text-gray-900 font-bold tracking-wide">About Us</Link>
      
    </nav>
    <Link to={'/cart'} className="inline-flex items-center font-bold tracking-wide bg-neutral-100 border-0 py-1 px-3 focus:outline-none hover:bg-orange-300 rounded text-base mt-4 md:mt-0">Cart
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </Link>
  </div>
</header>
    
  )
}

export default Header