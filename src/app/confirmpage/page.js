'use client'
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
const Forgetpassword = () => {
  const router=useRouter()
  const [password,setpassword]=useState('')
  const [cpassword,setcpassword]=useState('')
  const [email,setemail]=useState('')
  const confirm=async (e)=>{
    try{
      e.preventDefault();
      if(password==cpassword){
        const res= await fetch("/api/confirmpassword",{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({email,password})
        });
        const rest = await res.json();
        
        if(rest.success){
          router.push('/login')
        }
        else{
          console.log('error')
        }
      }
      else {
        console.log("does not match with newpassword")
      }
      
      }
    catch(error){
        console.log("error hai pura ",error)
    }
}
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img className="mx-auto h-10 w-auto" src="/bg_code.jpg" alt="Your Company" />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Forget Password</h2>
    </div>
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" action="#" method="POST">
      
    
    

        <div>
        <div className="mb-4 font-bold">
                <label htmlFor="email" className="leading-7 text-lg text-gray-600">Email</label>
                <input type="email" onChange={(e)=>setemail(e.target.value)} value={email}  id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>

        <div>
              </div>

    <div>
    
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-lg font-medium leading-6 text-gray-900">Password</label>
    </div>
    
       
        <div className="mt-2">
          <input  type="password" value={password}  onChange={(e)=>setpassword(e.target.value)}  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-lg font-medium leading-6 text-gray-900">New Password</label>
       
        </div>
        
        <div className="mt-2">
          <input  type="password" value={cpassword}  onChange={(e)=>setcpassword(e.target.value)}  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
      
    </div>
    <button onClick={confirm} className=" ml-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">Update </button>
     
      </form>
    </div>
  </div>
  
  )
}

export default Forgetpassword