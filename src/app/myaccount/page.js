'use client'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
const Myaccount = () => {
  const router= useRouter()
  const [name,setname]=useState('');
  const [address,setaddress]=useState('');
  const [pincode,setpincode]=useState('');
  const [email,setemail]=useState('');
  const [phone,setphone]=useState('');
  const [password,setpassword]=useState('');
  const [cpassword,setcpassword]=useState('');
  const [npassword,setnpassword]=useState('');
  useEffect(()=>{
    getuser()
  },[])
  const handle = async (e)=>{
    if(e.target.name== 'name')setname(e.target.value)
    else   if(e.target.name== 'email')setemail(e.target.value)
    else   if(e.target.name== 'phone')setphone(e.target.value)
  
    else   if(e.target.name== 'pincode'){
      setpincode(e.target.value)
    }
    else   if(e.target.name== 'address')setaddress(e.target.value)
  }
  const getuser =async ()=>{
   let token=localStorage.getItem('token')
    try{
      
        const res= await fetch("api/getaccount",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({token})
        });
        const {user}= await res.json()
        console.log(user)
        setname(user.name);
        setemail(user.email);
        setaddress(user.address);
        setpincode(user.pincode);
        setphone(user.phone)
    }
    catch(error){
        console.log("error hai pura ",error)
    }
}
const updateuser =async ()=>{
  let token=localStorage.getItem('token')
   try{
     
       const res= await fetch("api/updateaccount",{
           method:"PUT",
           headers:{
               "Content-Type":"application/json"
           },
           body:JSON.stringify({token,name,address,pincode,phone})
       });
       let rest= await res.json();
       if(rest.success){
        toast.success("Updated Successfully")
       }
       else {
        toast.error("something error")
       }
   }
   catch(error){
       console.log("error hai pura ",error)
   }
}
const changepassword =async ()=>{
  let token=localStorage.getItem('token')
   try{
       if(cpassword==npassword){
       const rest= await fetch("api/updatepassword",{
           method:"POST",
           headers:{
               "Content-Type":"application/json"
           },
           body:JSON.stringify({token,password,cpassword})
       });
       let data =await rest.json();
       if(data.success){
        toast.success("Updated Successfully")
       }
       else {
        toast.error("Wrong Password")
       }
      }
      else{
        toast.error("Does not match with new password")
      }
   }
   catch(error){
       console.log("error hai pura ",error)
   }
}
  return (
    
    <div className="bg-pink-50 ">
      <ToastContainer/>
      <div className=" container m-auto ">
            <h1 className='lg:font-bold lg:text-3xl font-semibold my-3 text-2xl text-black text-center'>My Account</h1>
            <h2 className='lg:font-bold lg:text-2xl text-xl   text-black text-center m-5'>1. Update Delivery Details</h2>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mx-3'>
            <div className="md:mb-4 mx-8 ">
                <label htmlFor="name" className="text-md sm:text-lg text-black">Name</label>
                <input type="text" onChange={handle} value={name} id="name" name="name" className="w-full bg-white rounded border border-white-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black-700 py-0 px-1 md:py-1 md:px-2 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="md:mb-4 mx-8 ">
                <label htmlFor="email" className="leading-7 text-md sm:text-lg text-black">Email</label>
                <input type="email" onChange={handle} value={email} readOnly={true} id="email" name="email" className="w-full bg-white rounded border border-white-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black-700 py-0 px-1 md:py-1 md:px-2 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="md:mb-4 mx-8 ">
                <label htmlFor="address" className="leading-7 text-md sm:text-lg text-black">Address</label>
                <input type="addresss" onChange={handle} value={address}  id="address" name="address" className="w-full bg-white rounded border border-black focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black-700 py-0 px-1 md:py-1 md:px-2 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="md:mb-4 mx-8 ">
                <label htmlFor="phone" className="leading-7 text-md sm:text-lg text-black">Phone</label>
                <input type="phone" id="phone" name="phone" onChange={handle} value={phone}  className="w-full bg-white rounded border border-black focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black-700 py-0 px-1 md:py-1 md:px-2 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            
            <div className="md:mb-4 mx-8 ">
                <label htmlFor="pincode" className="leading-7 text-md sm:text-lg text-black">Pincode</label>
                <input type="text" id="pincode" onChange={handle} value={pincode} name="pincode" className="w-full bg-white rounded border border-white-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black-700 py-0 px-1 md:py-1 md:px-2 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
  
    </div>
    
    <button onClick={updateuser} className="  text-white bg-pink-500 border-0 md:py-2 md:px-5 py-0 px-3 mx-6 my-2 md:ml-auto  focus:outline-none hover:bg-pink-600 rounded">Update</button>
    <h1 className='lg:font-bold lg:text-2xl text-xl   text-black text-center m-5'>2. Update Password</h1>
    <div className='grid md:grid-cols-2 grid-cols-1 md:mx-3 mx-10  gap-4'>
    <div >
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block md:text-lg text-md  leading-6 text-black">Password</label>
       
        </div>
        
        <div className="">
          <input  type="password" placeholder="Enter your password " value={password}  onChange={(e)=>setpassword(e.target.value)}  required className="block w-full rounded-md border border-black py-1 text-black-900 shadow-sm ring-1 ring-inset ring-white-300 placeholder:text-black-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password"  className="block md:text-lg text-md  font-medium leading-6 text-black">New Password</label>
       
        </div>
        
        <div className="">
          <input  type="password" placeholder='Enter new password' value={cpassword}  onChange={(e)=>setcpassword(e.target.value)}  required className="block w-full rounded-md border border-black py-1 text-black-900 shadow-sm ring-1 ring-inset ring-white-300 placeholder:text-black-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block md:text-lg text-md   leading-6 text-black">Confirm Password</label>
       
        </div>
        
        <div className="">
          <input  type="password" placeholder="Enter confirm password" value={npassword}  onChange={(e)=>setnpassword(e.target.value)}  required className="block w-full rounded-md border border-black py-1 text-black-900 shadow-sm ring-1 ring-inset ring-white-300 placeholder:text-black-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
    </div>
    <button onClick={changepassword} className="  text-white bg-pink-500 border-0 md:py-2 md:px-5 py-0 px-3 mx-6 my-2 md:ml-auto  focus:outline-none hover:bg-pink-600 rounded">Update </button>
     
    </div>
    </div>

  )
}

export default Myaccount
