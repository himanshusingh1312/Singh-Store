'use client'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
const Forgetpassword = () => {
  const router= useRouter()
  const [email,setemail]=useState('');
  
  const confirm =async (e)=>{
    
    try{
      e.preventDefault();
        const res= await fetch("/api/forgetpassword",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({email})
        });
        const rest = await res.json();
        
        if(rest.success){
          
          router.push('/confirmpage')
        }
        else{
          console.log('wrong email')
        }
      
      }
    catch(error){
        console.log("error hai pura ",error)
    }
}
  return ( 
  <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-[url('/store2.jpg')]  ">
  
  <div className="border mx-auto border-black md:w-[55vh] w-full bg-opacity-50 backdrop-filter backdrop-blur-lg  rounded-xl shadow-lg p-8">
<div className="sm:mx-auto sm:w-full sm:max-w-sm">
<img className="mx-auto h-20 w-20 border border-orange-500" src="/singh_store1.jpeg" alt="Your Company" />
<h2 className="mt-10 text-center text-3xl font-bold leading-9 italic tracking-tight text-gray-900">Forget password</h2>
</div>
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" action="#" method="POST">
      
    
      <div className="mb-4 font-bold">
                <label htmlFor="email" className="leading-7 text-lg text-semibold text-black-600">Email</label>
                <input type="email" placeholder='Enter your email' onChange={(e)=>setemail(e.target.value)} value={email}  id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>

        <div>
          <button onClick={confirm} type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
        </div>

    
      </form>
    </div>
  </div>
  </div>
  
  )
}

export default Forgetpassword
