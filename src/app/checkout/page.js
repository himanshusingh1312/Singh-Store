'use client'
import React from 'react'
import Link from 'next/link'
import { FaMinusCircle } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa"
import { MdCancel } from "react-icons/md"
import { FaPlusCircle } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Page = () => {
  const router= useRouter()
    const [cart, setcart] = useState({});
  const [total, subtotal] = useState(0);
  
  const [disable,setdisable]=useState(true)
  const [name,setname]=useState(' ');
  const [address,setaddress]=useState('');
  const [pincode,setpincode]=useState('');
  const [email,setemail]=useState('');
  const [state,setstate]=useState('');
  const [city,setcity]=useState('');
  const [phone,setphone]=useState('');
  
  
  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        setcart(JSON.parse(localStorage.getItem("cart")))
        savecart(JSON.parse(localStorage.getItem("cart")))
      }
    }
    catch (error) {
      console.log(error);
      localStorage.clear()
    }
    
  }, [])
  const addtoCart = (itemcode, qty, price, name, size, variant) => {
    let newcart = cart;
    if (itemcode in cart) {
      newcart[itemcode].qty = cart[itemcode].qty + qty
    }
    else {
      newcart[itemcode] = { qty: 1, price, name, size, variant }
    }
    setcart(newcart);
    savecart(newcart)
  }
  const removetoCart = (itemcode, qty, price, name, size, variant) => {
    let newcart = cart;
    if (itemcode in cart) {
      newcart[itemcode].qty = cart[itemcode].qty - qty
    }
    if (newcart[itemcode]["qty"] <= 0) {
      delete newcart[itemcode]
    }
    setcart(newcart);
    savecart(newcart)
  }
  const savecart = (mycart) => {
    localStorage.setItem("cart", JSON.stringify(mycart));
    let subt = 0;
    let keys = Object.keys(mycart)
    for (let i = 0; i < keys.length; i++) {
      subt += mycart[keys[i]].price * mycart[keys[i]].qty
    }
   // console.log(subt)
    subtotal(subt)
  }


  const clearCart = () => {
    setcart({})
    savecart({})
  }
  const handle = async (e)=>{
    if(e.target.name== 'name')setname(e.target.value)
    else   if(e.target.name== 'email')setemail(e.target.value)
    else   if(e.target.name== 'phone')setphone(e.target.value)
    else   if(e.target.name== 'city')setcity(e.target.value)
    else   if(e.target.name== 'state')setstate(e.target.value)
      else   if(e.target.name== 'pincode')setpincode(e.target.value)
   
    else   if(e.target.name== 'address')setaddress(e.target.value)
  
    
  }
  let orderid;
  const addUser =async ()=>{

    let amount= total;
     orderid=Math.floor(Math.random() * Date.now());
    let status="ok"
    try{
      
        const res= await fetch("api/order",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({email,address,orderid,cart,amount,status,phone,pincode,city,state})
        });
        const {stat}= await res.json();
        if(stat==200){
          router.push(`checkout/${orderid}`)
          clearCart()
        }         
    }
    
    catch(error){
        console.log("error hai pura ",error)
    }
}

  //payment
  const handlePay = async () => {
      
     if(total==0)toast.error("No, Item in your Cart")
     else  if(!name || !email || !address  || !state || !city || !pincode)toast.error("All fields are required")
      else{
    try {
      const response = await fetch('/api/stripe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
         total,name,email,address,pincode,state,city,cart
        }),
      });
      const data = await response.json();
      if(data.success){
      window.location.href= data.url;
      clearCart()
      }
    } catch (error) {
      console.error('Error processing payment:', error);
    }
  }
  };

    return (
      <div className=" bg-pink-50  ">
        <ToastContainer />
        <div className="container m-auto ">
            <h1 className='font-bold sm:text-3xl xs:text-2xl text-xl py-3 text-center text-black '>Checkout</h1>
            <h2 className='font-semibold sm:text-2xl xs:text-xl text-md mx-3 text-black'> 1.Delivery Details</h2>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-6 mt-5'>
            <div className="md:mb-4 mx-8 ">
                <label htmlFor="name" className=" sm:text-lg text-md text-black-600 text-black ">Name</label>
                <input type="text" placeholder=" Enter your name"  onChange={handle} value={name} id="name" name="name" className="w-full px-2 bg-white rounded border border-black focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-0  md:py-1 md:px-2   leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            

            <div className="md:mb-4 mx-8">
                <label htmlFor="email" className="leading-7 sm:text-lg text-md text-black-600 text-black">Email</label>
                <input type="email" placeholder=' Enter your email' onChange={handle} value={email}  id="email" name="email" className="w-full bg-white rounded border border-black focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-0 px-2 md:py-1 md:px-2 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="md:mb-4 mx-8">
                <label htmlFor="address" className="leading-7 sm:text-lg text-md text-black-600 text-black">Address</label>
                <input type="addresss" placeholder=' Enter your address' onChange={handle} value={address}  id="address" name="address" className="w-full bg-white rounded border border-black focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  py-0 px-2 md:py-1 md:px-2  leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="md:mb-4 mx-8">
                <label htmlFor="phone" className="leading-7 sm:text-lg text-md text-black-600 text-black">Phone</label>
                <input type="phone" placeholder=' Enter your phone' id="phone" name="phone" onChange={handle} value={phone}  className="w-full bg-white rounded border border-black focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  py-0 px-2 md:py-1 md:px-2  leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            
            <div className="md:mb-4 mx-8">
                <label htmlFor="pincode" className="leading-7 sm:text-lg text-md text-black-600 text-black">Pincode</label>
                <input type="text" id="pincode"  placeholder=" Enter your pincode" onChange={handle} value={pincode} name="pincode" className="w-full bg-white rounded border border-black focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  py-0 px-2 md:py-1 md:px-2  leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="md:mb-4 mx-8">
                <label htmlFor="city" className="leading-7 sm:text-lg text-md text-black-600 text-black">City</label>
                <input type="text" id="city" name="city"  placeholder=" Enter your City"  onChange={handle} value={city}  className="w-full bg-white rounded border border-black focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  py-0 px-2 md:py-1 md:px-2  leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="md:mb-4 mx-8">
                <label htmlFor="state" className="leading-7 sm:text-lg text-md text-black-600 text-black">State</label>
                <input type="text" id="state" name="state"  placeholder=" Enter your State"  onChange={handle} value={state}  className="w-full bg-white rounded border border-black focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  py-0 px-2 md:py-1 md:px-2  leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            </div>



            <h2 className='font-semibold sm:text-2xl xs:text-xl text-md mx-3  mt-8  text-black'>2. Review Cart Items</h2>

            <div  className=' bg-pink-100 p-10 border-2 border-pink-700 '  >
    
        <ol className='list-decimal font-semibold'>
          {Object.keys(cart).length == 0 && <div className='font-semibold '>Your cart is Empty</div>}
          {Object.keys(cart).map((k) => {
            return <li key={k}>
              <div className='item flex my-5'>
                <div className='w-2/3 font-semibold'>{cart[k].name}</div>
                <div className='flex font-semibold item-center justify-center  text-lg'><FaPlusCircle onClick={()=>{addtoCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}}  /><span className='mx-2 text-sm'>{cart[k].qty}</span><FaMinusCircle onClick={()=>{removetoCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}} className='cursor-pointer text-pink-500' />
                </div >
              </div>
            </li>
          })}

        </ol>
       <span className='font-bold'>Subtotal:{total}</span>
      </div>
      <button  onClick={handlePay}  className='md:text-2xl ls:text-xl text-md  hover:bg-pink-400 bg-pink-500 border-0 font-bold md:p-3 p-2 rounded-xl m-3'>Pay  ₹{total}</button>
        </div>
        </div>
    )
}

export default Page
