'use client'
import React from 'react';
import Link from "next/link";
import DeleteProduct from "@/lib/deleteproduct";
import { FaEdit} from 'react-icons/fa';
import { useEffect,useState } from 'react';

export default  function Page() {
 
        const [loading,setloading]= useState(true)   
        const [order,setorders] =useState([])
        
          const fetchData = async () => {
            const token = localStorage.getItem('token');
            try {
              setloading(true)
              const response = await fetch('/api/product', {
                method: 'GET',
                headers: {
                  Authorization: `Bearer ${token}`
                }
              });
              const data = await response.json();
              setorders(data.result)
              setloading(false)
            } catch (error) {
              console.error(error);
            }
            
          };
          useEffect(()=>{
            fetchData()
          },[])
    return (
      <div>
           {loading && (<div className='h-[96vh] text-center '><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect fill="#FF156D" stroke="#FF156D" stroke-width="7" stroke-linejoin="round" width="30" height="30" x="85" y="85" rx="0" ry="0"><animate attributeName="rx" calcMode="spline" dur="2.5" values="15;15;5;15;15" keySplines=".5 0 .5 1;.8 0 1 .2;0 .8 .2 1;.5 0 .5 1" repeatCount="indefinite"></animate><animate attributeName="ry" calcMode="spline" dur="2.5" values="15;15;10;15;15" keySplines=".5 0 .5 1;.8 0 1 .2;0 .8 .2 1;.5 0 .5 1" repeatCount="indefinite"></animate><animate attributeName="height" calcMode="spline" dur="2.5" values="30;30;1;30;30" keySplines=".5 0 .5 1;.8 0 1 .2;0 .8 .2 1;.5 0 .5 1" repeatCount="indefinite"></animate><animate attributeName="y" calcMode="spline" dur="2.5" values="40;170;40;" keySplines=".6 0 1 .4;0 .8 .2 1" repeatCount="indefinite"></animate></rect></svg>
</div>
 ) }
           {!loading && (
            <div className="relative overflow-x-auto container mx-auto bg-gradient-to-r from-pink-50 to-pink-100 "><h1 className="font-bold lg:text-3xl xs:text-2xl text-xl my-8 text-center">Show Products</h1>
            <table className="w-full table-auto border  rtl:text-right">
                <thead>
                    <tr>
                        <th className="px-4 py-2 border">Title</th>
                        <th className="px-4 py-2 border">Slug</th>
                        <th className="px-4 py-2 border">Quantity</th>
                        <th className="px-4 py-2 border">Category</th>
                        <th className="px-4 py-2 border">Price</th>
                        <th className="px-4 py-2 border"></th>
                    </tr>
                </thead>
                <tbody>
                    {order.map((item) => (
                        <tr key={item._id} className="border">
                            <td className="border px-4 py-2">{item.title}</td>
                            <td className="border px-4 py-2">{item.slug}</td>
                            <td className="border px-4 py-2">{item.availableQty}</td>
                            <td className="border px-4 py-2">{item.category}</td>
                            <td className="border px-4 py-2">{item.price}</td>
                            <td className="border px-4 py-2 flex justify-center">
                                <Link href={`dashboard_show/${item._id}`}>
                                <FaEdit />
                                </Link>
                                <DeleteProduct id={item._id} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
    <div className="flex  mt-5 flex-row justify-center ">
     
     <Link href={'/dashboard'}> <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded-xl md:text-lg text-md mx-3 my-2">Dashboard</button></Link>
        <Link href={'/dashboard_addproduct'}> <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded-xl md:text-lg text-md mx-3 my-2">Add Product</button></Link>
 
 
     </div>
     </div>)}
     </div> 
    )
}
