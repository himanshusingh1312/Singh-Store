'use client'
import React from 'react'
import Link from 'next/link'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import { useRouter } from "next/navigation"
const Admin = () => {
  
  const router = useRouter()

  
  const [email,setemail]=useState('')
  const [error,seterror]=useState("")
  const addUser =async (e)=>{
      e.preventDefault();
      
      if(!email){
          toast.error("Email Required")
      }
      try{
             
          const token = localStorage.getItem('token');
          if(token){
          const res= await fetch("api/admin",{
              method:"POST",
              headers: {
                Authorization: `Bearer ${token}`
              },
              body:JSON.stringify({email})
          });
          const {status} = await res.json();
          console.log({status})
          if(status==200){
            
            seterror("Login Successful")
            toast.success("Login Successfully")
            window.location.href='/dashboard'
            setemail("")

          }
          else {
            seterror("Invalid credential")
            toast.error("Invalid Credentials")
        
            setemail("")
          }
        }
      }
      catch(error){
          console.log("error hai pura ",error)
      }
  }
  return (
    
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-pink-50  ">
      <ToastContainer />
      <div className="border mx-auto border-pink-400 shadow-lg shadow-pink-200 md:w-[55vh] w-full  bg-gradient-to-r from-fuchsia-100 via-fuchsia-200 to-fuchsia-300 rounded-xl  p-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <img className="mx-auto h-20 w-20 border border-orange-500" src="/singh_store1.jpeg" alt="Your Company" />
    <h2 className="mt-10 text-center sm:text-3xl text-2xl font-semibold leading-9  tracking-tight text-gray-900">Admin Login</h2>
  </div>
  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6 " action="#" method="POST">
    <div className="relative">
      <input
        type="email"
        value={email}
        placeholder=" "
        onChange={(e) => setemail(e.target.value)}
        required
        className="block w-full rounded-md py-1.5  text-gray-900 border border-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder-transparent focus:placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 peer"
      />
      <label
        htmlFor="email"
         className="absolute text-sm  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
      >
        Email 
      </label>
    </div>
      
      
      <div>
        <button onClick={addUser} type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-2xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login</button>
      </div>
    </form>
  </div>
</div>

  </div>
  
  )
}

export default Admin

