'use client'

import React, { useEffect, useState } from 'react'

import { BsFillCartXFill } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";
import 'react-toastify/dist/ReactToastify.css';

import Skeleton,{ SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const Orders = () => {
const [order,setorders] =useState([])
const [loading,setloading]=useState(true)
  const fetchData = async () => {
    setloading(true)
    const token = localStorage.getItem('token');
    try {
      const response = await fetch('/api/myorder', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const data = await response.json();
      setorders(data.orders)
     // console.log(order)
    } catch (error) {
      console.error(error);
    }
    setloading(false)
  };
  useEffect(()=>{
    fetchData()
  },[])
  
  
  
  return (
    <>
      

      <div className='bg-gradient-to-r from-fuchsia-100 via-fuchsia-200 to-fuchsia-300 min-h-screen'>
         
         <div className='flex justify-center items-center '><div><IoCartOutline style={{fontSize:'3rem'}} /></div><div></div>
          <h1 className='md:text-3xl sm:text-2xl text-xl text-center font-semibold my-3'>My Booking</h1></div>
          { loading && (
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 m-8 place-items-center">
          <SkeletonTheme baseColor="#808080" highlightColor="#666">
             <div> <Skeleton height={110} width={230} /></div>
             <div> <Skeleton height={110} width={230} /></div>
        
             <div> <Skeleton height={110} width={230} /></div>
          
             <div> <Skeleton height={110} width={230} /></div>
             <div> <Skeleton height={110} width={230} /></div>
             <div> <Skeleton height={110} width={230} /></div>
             
             </SkeletonTheme>
             </div>
          ) }
          {!loading && (
            <div>
         {order.length === 0 ? (
           <div className="flex justify-center items-center h-screen">
           <p className="text-xl font-bold"><BsFillCartXFill style={{fontSize:'8rem'}}/></p>
         </div>
         ) :(
          <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-4 m-8">
        
          {order.map((item) => (
            <div key={item._id} className="bg-gray-200 shadow-lg md:p-4 p-2 border border-purple-500 rounded-lg transition-transform transform hover:-translate-y-1">
              <h2 className="md:text-xl text-lg font-semibold">{item.name}</h2>
              <p>Order ID: {item.orderid} </p>
              <p>Status: {item.status} </p>
              <p>Email: {item.email} </p>
              <p>Amount:{item.amount}</p>
            </div>
          ))}
        
            </div>
        </div>
      )}
      </div>
      )}
       </div>
      
    </>

  )
}

export default Orders
