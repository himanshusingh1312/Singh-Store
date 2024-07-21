'use client'
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from "next/navigation"

import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Signup = () => {
  const router = useRouter()
  const [name,setname]=useState("")
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const [error,seterror]=useState("")
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
      setShowPassword(!showPassword);
  };
  const addUser =async (e)=>{
      e.preventDefault();
      console.log(name,email,password)
      if(!name || !email || !password){
          toast.error("All Field Required")
      }
      try{
          const check = await fetch("api/check",{
              method:"POST",
              headers:{
                  "Content-Type":"application/json"
              },
              body:JSON.stringify({email})
          });
          const {user} = await check.json();
          if(user){
              toast.error("user already exist")
          }
          const res= await fetch("api/users",{
              method:"POST",
              headers:{
                  "Content-Type":"application/json"
              },
              body:JSON.stringify({name,email,password})
             

          });
          
              if(res.status==200){
                 toast.success("Successfully Signup")
                  router.push('/login')
                  setemail("")
                  setpassword("")
                  setname("")
              }
           
              
      }
      catch(error){
          console.log("error hai pura ",error)
      }
  }

  return ( 
  <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-pink-50 ">
     <ToastContainer />
  <div className="border mx-auto    shadow-pink-200 md:w-[55vh] w-full bg-gradient-to-r from-fuchsia-100 via-fuchsia-200 to-fuchsia-300   rounded-xl shadow-lg p-8">
<div className="sm:mx-auto sm:w-full sm:max-w-sm">
<img className="mx-auto h-44 w-56 border border-orange-500" src="/singh_store1.jpeg" alt="Your Company" />
<h2 className="mt-6 text-center lg:text-3xl text-2xl font-semibold leading-9 tracking-tight text-gray-900">Sign up</h2>
</div>
  <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" action="#" method="POST">
    <div className="relative">
      <input
        type="name"
        value={name}
        placeholder=" "
        onChange={(e) => setname(e.target.value)}
        required
        className="block w-full rounded-md py-1.5 text-gray-900 border border-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder-transparent focus:placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 peer"
      />
      <label
        htmlFor="name"
         className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
      >
        Name
      </label>
    </div>
     <div className="relative">
      <input
        type="email"
        value={email}
        placeholder=" "
        onChange={(e) => setemail(e.target.value)}
        required
        className="block w-full rounded-md py-1.5 text-gray-900 border border-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder-transparent focus:placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 peer"
      />
      <label
        htmlFor="email"
         className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
      >
        Email 
      </label>
    </div>  <div className="relative">
      <input
         type={showPassword ? 'text' : 'password'}
        value={password}
        placeholder=" "
        onChange={(e) => setpassword(e.target.value)}
        required
        className="block w-full rounded-md py-1.5 text-gray-900 border border-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder-transparent focus:placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 peer"
      />
      <label
        htmlFor="password"
         className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
      >
        Password
      </label>
      <div 
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                onClick={toggleShowPassword}
            >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
    </div>
      
      
      <h2 className='my-2'> Already Registeration ? <Link className='font-bold underline mx-2' href={'/login'}>login</Link></h2>
      <div>
        <button onClick={addUser} type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign Up</button>
      </div>
      
    </form>
  </div>
</div>
</div>
  )
}

export default Signup
