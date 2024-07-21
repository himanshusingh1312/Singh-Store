'use client'
import { useState,useEffect } from 'react'
import React from 'react'
import Link from 'next/link'


import Skeleton,{ SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const Mugs= () => { 
  const [order,setorders] =useState([])
        
  const [loading, setloading] = useState(true) 
  const fetchData = async () => {
    
    try {
      setloading(true)
      const response = await fetch('/api/mugsapi');
      const data = await response.json();
      setorders(data.result)
      setloading(false )
      
    } catch (error) {
      console.error(error);
    }
    
  };
  useEffect(()=>{
    fetchData()
  },[])
//  console.log("All right")
  return (
       
    <div>
    <section className="text-gray-600 relative body-font  bg-pink-50 " >
    {loading && (
      <>
      <div className="grid xs:hidden  grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5  gap-4 m-8 lg:h-[72vh] sm:h-[56vh] h-2/3 place-items-center">
       
      <SkeletonTheme baseColor="#808080" highlightColor="#666">
         <div>
          
      <div> <Skeleton height={80} width={80} /></div>
      <div> <Skeleton height={4} width={80} /></div>
      
      <div> <Skeleton height={4} width={80} /></div>
          </div> 
          <div>
          
          <div> <Skeleton height={80} width={80} /></div>
          <div> <Skeleton height={4} width={80} /></div>
          
          <div> <Skeleton height={4} width={80} /></div>
              </div> 
              <div>
          
          <div> <Skeleton height={80} width={80} /></div>
          <div> <Skeleton height={4} width={80} /></div>
          
          <div> <Skeleton height={4} width={80} /></div>
              </div>  <div>
          
          <div> <Skeleton height={80} width={80} /></div>
          <div> <Skeleton height={4} width={80} /></div>
          
          <div> <Skeleton height={4} width={80} /></div>
              </div>  <div>
          
          <div> <Skeleton height={80} width={80} /></div>
          <div> <Skeleton height={4} width={80} /></div>
          
          <div> <Skeleton height={4} width={80} /></div>
              </div>  <div>
          
          <div> <Skeleton height={80} width={80} /></div>
          <div> <Skeleton height={4} width={80} /></div>
          
          <div> <Skeleton height={4} width={80} /></div>
              </div>  <div>
          
          <div> <Skeleton height={80} width={80} /></div>
          <div> <Skeleton height={4} width={80} /></div>
          
          <div> <Skeleton height={4} width={80} /></div>
              </div>  <div>
          
          <div> <Skeleton height={80} width={80} /></div>
          <div> <Skeleton height={4} width={80} /></div>
          
          <div> <Skeleton height={4} width={80} /></div>
              </div>  <div>
          
          <div> <Skeleton height={80} width={80} /></div>
          <div> <Skeleton height={4} width={80} /></div>
          
          <div> <Skeleton height={4} width={80} /></div>
              </div>  <div>
          
          <div> <Skeleton height={80} width={80} /></div>
          <div> <Skeleton height={4} width={80} /></div>
          
          <div> <Skeleton height={4} width={80} /></div>
              </div> 
      </SkeletonTheme>
      
      </div>
      
      <div className="xs:grid hidden  grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5  gap-4 m-8 lg:h-[72vh] sm:h-[56vh] h-2/3 place-items-center">
       
      <SkeletonTheme baseColor="#808080" highlightColor="#666">
         <div>
          
      <div> <Skeleton height={120} width={120} /></div>
      <div> <Skeleton height={6} width={120} /></div>
      
      <div> <Skeleton height={6} width={120} /></div>
          </div> 
          <div>
          
          <div> <Skeleton height={120} width={120} /></div>
          <div> <Skeleton height={6} width={120} /></div>
          
          <div> <Skeleton height={6} width={120} /></div>
              </div> <div>
          
          <div> <Skeleton height={120} width={120} /></div>
          <div> <Skeleton height={6} width={120} /></div>
          
          <div> <Skeleton height={6} width={120} /></div>
              </div> <div>
          
          <div> <Skeleton height={120} width={120} /></div>
          <div> <Skeleton height={6} width={120} /></div>
          
          <div> <Skeleton height={6} width={120} /></div>
              </div> <div>
          
          <div> <Skeleton height={120} width={120} /></div>
          <div> <Skeleton height={6} width={120} /></div>
          
          <div> <Skeleton height={6} width={120} /></div>
              </div> <div>
          
          <div> <Skeleton height={120} width={120} /></div>
          <div> <Skeleton height={6} width={120} /></div>
          
          <div> <Skeleton height={6} width={120} /></div>
              </div> <div>
          
          <div> <Skeleton height={120} width={120} /></div>
          <div> <Skeleton height={6} width={120} /></div>
          
          <div> <Skeleton height={6} width={120} /></div>
              </div> <div>
          
          <div> <Skeleton height={120} width={120} /></div>
          <div> <Skeleton height={6} width={120} /></div>
          
          <div> <Skeleton height={6} width={120} /></div>
              </div> <div>
          
          <div> <Skeleton height={120} width={120} /></div>
          <div> <Skeleton height={6} width={120} /></div>
          
          <div> <Skeleton height={6} width={120} /></div>
              </div> <div>
          
          <div> <Skeleton height={120} width={120} /></div>
          <div> <Skeleton height={6} width={120} /></div>
          
          <div> <Skeleton height={6} width={120} /></div>
              </div> 
      </SkeletonTheme>
      
      </div>
      </>
      )}
      {!loading && (
  <div className="container py-8 md:py-20 mx-auto">
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5  sm:gap-4 ls:gap-2 gap-3 justify-center  mx-3 ls:mx-0">
    {order.map((item) => (
      <Link key={item.slug} href={`/products/${item._id}`}>
        <div className="p-2 ls:p-4  w-full">
          <div className="relative overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-95">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-24 xs:h-32 sm:h-36 md:h-40 lg:h-56 "
              src={item.img}
            />
          </div>
          <div className="border-2 border-pink-400 bg-gradient-to-r from-pink-50 via-pink-100 to-pink-200 mt-1 ">
            <h3 className="text-gray-900 text-sm sm:text-md md:text-lg lg:text-xl  font-bold tracking-widest text-center title-font mb-1">
              {item.title}
            </h3>
            <h2 className="text-gray-900 title-font text-sm sm:text-md md:text-lg  text-center font-semibold">
              ₹ {item.price}
            </h2>
            {item.availableQty > 0 ? (
              <h2 className="text-green-700 text-center title-font text-xs sm:text-sm md:text-md lg:text-lg font-medium">
                In Stock
              </h2>
            ) : (
              <h2 className="text-red-700 text-center title-font text-xs sm:text-sm md:text-md lg:text-lg  font-medium">
                Out of Stock
              </h2>
            )}
          </div>
        </div>
      </Link>
    ))}
  </div>
</div>

)}
 </section>
 </div>
  )
}

export default Mugs