'use client'
import { useState,useEffect } from 'react'
import React from 'react'
import Link from 'next/link'
export default function Page() {
    const [order,setorders] =useState([])
        
  const fetchData = async () => {
    
    try {
      const response = await fetch('/api/dashboard');
      const data = await response.json();
      setorders(data.result)
      
    } catch (error) {
      console.error(error);
    }
    
  };
  useEffect(()=>{
    fetchData()
  },[])

    return (
        <div className="relative overflow-x-auto container mx-auto">
            <h1 className="text-3xl font-bold my-8 text-center m-3">Show Products</h1>
            <table className="w-full table-auto rtl:text-right">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Order ID</th>
                        <th className="px-4 py-2">Email</th>
                        <th className="px-4 py-2">Total Price</th>
                        <th className="px-4 py-2">Pincode</th>
                        <th className="px-4 py-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {order.map((item) => (
                        <tr key={item.orderid}>
                            <td className="border px-4 py-2">{item.orderid}</td>
                            <td className="border px-4 py-2">{item.email}</td>
                            <td className="border px-4 py-2">{item.amount}</td>
                            <td className="border px-4 py-2">{item.pincode}</td>
                            <td className="border px-4 py-2">{item.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
