import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
        <section class="bg-gray-200">
    <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav class="flex flex-wrap justify-center -mx-5 -my-2">
            <div class="px-5 py-2">
                <Link to={'/'}class="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Home
                </Link>
            </div>
            <div class="px-5 py-2">
                <Link to={'/products'} class="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Products
                </Link>
            </div>
            <div class="px-5 py-2">
                <Link to={'/about'} class="text-base leading-6 text-gray-500 hover:text-gray-900">
                    About
                </Link>
                </div>
           </nav>
        <p class="mt-8 text-base leading-6 text-center text-gray-400">
            © 2023 TechGo, Inc. All rights reserved.
        </p>
    </div>
</section>

    </>
  )
}

export default Footer