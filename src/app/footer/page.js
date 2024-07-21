import React from 'react'

const Footer = () => {
  return (
    <div>
<footer className="text-gray-600 body-font bg-pink-200">
  <div className="container px-5 py-16 md:py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      
    <img src="/bg_code2.jpg" alt="" className='h-[16vh]' />
      </a>
      
      <span className="my-3  text-black text-bold text-2xl ">Singh Store</span>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none ">
          <li>
            <a href={"/tshirts"} className="text-gray-600 hover:text-gray-800 ">Tshirts</a>
          </li>
          <li>
            <a href={"/hoodies"} className="text-gray-600 hover:text-gray-800 ">Hoodies</a>
          </li>
          <li>
            <a href={"/mugs"} className="text-gray-600 hover:text-gray-800 ">Mugs</a>
          </li>
          <li>
            <a href={"/stickers"} className="text-gray-600 hover:text-gray-800 ">Stickers</a>
          </li>
        </nav>
      </div>
      
      
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none ">
         
          
          <li>
            <a href='/about' className="text-gray-600 hover:text-gray-800">About</a>
          </li>
          <li>
            <a href='/login' className="text-gray-600 hover:text-gray-800">Login</a>
          </li>
          <li>
            <a href='/signup' className="text-gray-600 hover:text-gray-800">Registeration</a>
          </li>
        </nav>
      </div>
      
      <div className="lg:w-1/4 md:w-1/2 w-full px-4 mt-4">
     
     
      <div className=' items-center justify-center  xs:gap-2 md:gap-3 gap-1   flex'>
          
          <a className="text-black" href='https://www.facebook.com/singh.repair'>
    <div className="flex items-center justify-center sm:w-8 sm:h-8 h-6 w-6 border-2 hover:border-4 border-black rounded-full ">
      <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="sm:w-5 sm:h-5 w-4 h-4 black"  viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    </div>
  </a>
  
          
  <a className="ml-3 text-black">
    <div className="flex items-center justify-center  sm:w-8 sm:h-8 h-6 w-6 border-2  hover:border-4 border-black rounded-full">
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="sm:w-5 sm:h-5 w-4 h-4 text-black" viewBox="0 0 24 24">
        <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
      </svg>
    </div>
  </a>
  
  <a className="ml-3 text-black">
    <div className="flex items-center justify-center  sm:w-8 sm:h-8 h-6 w-6 border-2  hover:border-4 border-black rounded-full">
      <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} className="sm:w-5 sm:h-5 w-4 h-4 text-black" viewBox="0 0 24 24">
        <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx={4} cy={4} r={2} stroke="none" />
      </svg>
    </div>
  </a>
  
          </div>
      </div>
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left ">All Right Reserved to 
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1 " target="_blank">@Singh_Store</a>
      </p>
      
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer
