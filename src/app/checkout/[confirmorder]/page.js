'use client'
import { get } from 'mongoose';
import React, { useState } from 'react'
import { useEffect } from 'react';
const ConfirmOrder = (props) => {
    const [email,setemail]=useState('');
    const [orderid,setorderid]=useState('');
    const [address,setaddress]=useState('');
    const [amount,setamount]=useState('');
    const [cartItems,setcartItems]=useState([])
    useEffect(()=>{
        getProductDetail()
       },[]);
    
       const getProductDetail = async()=>{
        let orderid=props.params.confirmorder;
        let productdata= await fetch(`http://localhost:3000/api/order/${orderid}`)
        productdata = await productdata.json();
       // console.log(productdata.result.cart.price)
        if(productdata.success){
            let result= productdata.result;
            
            setaddress(result.address);
            setamount(result.amount);
            setorderid(result.orderid);
            setemail(result.email)
            setcartItems(Object.values(result.cart));
            
        }
        else {
            console.log("error")
        }
    }
  return (
  <section className="text-gray-600 body-font overflow-hidden">
    <div className='flex justify-center align-center'>
<img src='/success_logo.jpg' alt="Your Image" height={400} width={300} />
</div>
    <div className="container px-5 py-10 mx-auto">
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
          <h2 className="text-3xl ">Orderid:     <input  value={orderid} onChange={(e)=>setorderid(e.target.value)} disabled /></h2>
      
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Email :     <input  value={email} onChange={(e)=>setemail(e.target.value)} disabled /></h1>
          <div className=" mb-4">
            <a className="flex-grow font-bold text-2xl py-2  px-1">Address:     <input  value={address} onChange={(e)=>setaddress(e.target.value)} disabled /></a>
    
  <div>
           
        </div>
          </div> 
        </div>     
            <div className="container px-5   mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cartItems.map((item, index) => (
                        <div key={index} className="border border-white-700 rounded p-4 bg-transparent">
                            <h1 className="text-lg font-bold">Name: {item.name}</h1>
                            <p className="text-lg font-bold">Size: {item.size}</p>
                            <p className="text-lg font-bold">Total Quantity: {item.qty}</p>
                            <p className="text-lg font-bold">Price: {item.price}</p>
                        </div>
                    ))}
                </div>
            </div>
            <h1 className='font-bold my-5 text-black text-2xl '>SubTotal:     <input value={amount} onChange={(e)=>setamount(e.target.value)} disabled /></h1>
         
      </div>
    </div>

  </section>

  )
}

export default ConfirmOrder
