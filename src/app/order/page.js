
import React from 'react'
const Order = () => {

  return (
  <section className="text-gray-600 body-font overflow-hidden">
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
          <h2 className="text-sm title-font text-gray-500 tracking-widest">Codewear </h2>
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Order Id : #11234</h1>
          <div className="flex mb-4">
            <a className="flex-grow font-bold text-2xl py-2  px-1">Item Description</a>
            <a className="flex-grow font-bold text-2xl py-2  px-1">Quantity</a>
            <a className="flex-grow font-bold text-2xl py-2  px-1">Item total</a>
          </div>
          
          <div className="flex border-t border-gray-200 py-2">
            <span className="text-gray-500">Wear the code</span>
            <span className="text-gray-500 text-center mx-10">1</span>
            <span className="ml-auto text-gray-900">Rs. 499</span>
          </div>
          
          <div className="flex border-t border-gray-200 py-2">
            <span className="text-gray-500">Wear the code</span>
            <span className="text-gray-500 text-center mx-10">1</span>
            <span className="ml-auto text-gray-900">Rs. 499</span>
          </div>
          
          <div className="flex border-t border-gray-200 py-2">
            <span className="text-gray-500">Wear the code</span>
            <span className="text-gray-500 text-center mx-10">1</span>
            <span className="ml-auto text-gray-900">Rs. 499</span>
          </div>
          <h1 className='font-bold my-10 text-black text-2xl'>SubTotal: Rs.1497</h1>
          
          <button className=" ml-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">Track Order</button>
          
        </div>
        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
      </div>
    </div>
  </section>

  )
}

export default Order
