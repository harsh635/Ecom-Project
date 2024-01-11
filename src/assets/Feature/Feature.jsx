import React from 'react'
import { Link } from 'react-router-dom';

const Feature = ({cards = [1]}) => {
  return (
        <section className="text-gray-600 body-font ">
  <div className="container px-5 py-[50px] mx-auto">
    <div className="flex flex-wrap -m-4">
    <div className="flex flex-col text-center w-full mb-10">
      <h2 className=" text-black tracking-wide font-extrabold text-xl title-font mb">SHOP BY CATEGORIES</h2>
    </div>
    {
      cards?.map((card) => {
        return(
          <Link to={`/categories/${card}`} className="p-3 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 cursor-pointer">
  <div  className="flex rounded-lg bg-slate-300 pt-3 pb-3 pr-2 pl-2 flex-col border-t border-gray-200 h-full items-center">

          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-black text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h2 className="text-gray-900 text-normal title-font font-medium uppercase">{card || 'Example'}</h2>
          </div>
          <div className="flex-grow">
          </div>
        </div>
      </Link>
        )
      })
    }
    </div>
</div>
</section>
  )
}

export default Feature;