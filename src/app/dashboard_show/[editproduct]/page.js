'use client'
import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Editproduct = (props) => {
  const router= useRouter()
  const [title,settitle]=useState('');
  const [slug,setslug]=useState('');
  const [desc,setdesc]=useState('');
  const [img,setimg]=useState('');
  const [category,setcategory]=useState('');
  const [size,setsize]=useState('');
  const [color,setcolor]=useState('');
  const [price,setprice]=useState('');
  const [ availableQty,setavailableQty]=useState('')
  const handleImageUpload = (e) => {
    const file = e.target.files[0]; 
    const reader = new FileReader(); 
    reader.onloadend = () => {
      setimg(reader.result); 
    };
    reader.readAsDataURL(file);
  };
  useEffect(()=>{
    getProductDetail()
   },[]);

   const getProductDetail = async()=>{
    let productid=props.params.editproduct;
    let productdata= await fetch(`/api/product/${productid}`)
    productdata = await productdata.json();
    if(productdata.success){
        let result= productdata.result;
        settitle(result.title);
        setcategory(result.category)
        setavailableQty(result.availableQty)
        setcolor(result.color)
        setimg(result.img)
        setdesc(result.desc);
        setsize(result.desc);
        setslug(result.slug);
        setprice(result.price);
    }
   }
   const updateProduct = async ()=>{
    let productid=props.params.editproduct;
    let data= await fetch(`/api/product/${productid}`,{
        method:"PUT",
        body:JSON.stringify({title,desc,img,size,color,category,availableQty,price,slug})
    });
    data = await data.json();
    if(data.result){
        toast.success("Product has been updated")
    }

   }
  
  return (
    <div>
       <div className='container m-auto'>
        <ToastContainer/>
            <h1 className='font-bold lg:text-3xl xs:text-2xl text-xl my-8 text-center'>Edit Product</h1>
            <div>
            <div className="mb-4 font-semibold mx-3">
                <label htmlFor="title" className="leading-7 text-sm text-gray-600">Title</label>
                <input type="text" onChange={(e)=>settitle(e.target.value)} value={title}  name="title" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="mb-4 font-semibold mx-3">
                <label htmlFor="slug" className="leading-7 text-sm text-gray-600">Slug (unique)</label>
                <input type="text" onChange={(e)=>setslug(e.target.value)} value={slug}   name="slug" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="mb-4 font-semibold mx-3">
                <label htmlFor="desc" className="leading-7 text-sm text-gray-600">Description</label>
                <input type="text" onChange={(e)=>setdesc(e.target.value)} value={desc}   name="desc" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>      
        <div className="mb-4 font-semibold mx-3">
            <label htmlFor="image" className="leading-7 text-sm text-gray-600">Image</label>
            <input type="file" accept="image/*" onChange={handleImageUpload} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>


            
            <div className="mb-4 font-semibold mx-3">
                <label htmlFor="category" className="leading-7 text-sm text-gray-600">Category</label>
                <input type="text"  onChange={(e)=>setcategory(e.target.value)} value={category} name="category" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            
            <div className="mb-4 font-semibold mx-3">
                <label htmlFor="color" className="leading-7 text-sm text-gray-600">Color</label>
                <input type="text"  onChange={(e)=>setcolor(e.target.value)} value={color} name="color" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            
            <div className="mb-4 font-semibold mx-3">
                <label htmlFor="size" className="leading-7 text-sm text-gray-600">Size</label>
                <input type="text"  onChange={(e)=>setsize(e.target.value)} value={size} name="pincode" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            
            <div className="mb-4 font-semibold mx-3">
                <label htmlFor="price" className="leading-7 text-sm text-gray-600">Price</label>
                <input type="number"  onChange={(e)=>setprice(e.target.value)} value={price} name="price" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            
            <div className="mb-4 font-semibold mx-3">
                <label htmlFor="availableQty" className="leading-7 text-sm text-gray-600">Availability
                </label>
                <input type="number"  onChange={(e)=>setavailableQty(e.target.value)} value={availableQty} name="availableQty" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
  
    <button onClick={updateProduct} className=" mx-3 text-white bg-pink-400 border-0 py-2 px-6  my-5 focus:outline-none hover:bg-pink-600 rounded ">Update</button>
   
    
    </div>
    </div>
           
    <div className="flex flex-row justify-center ">
     
     <Link href={'/dashboard'}> <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded-xl md:text-lg text-md mx-3 my-2">Dashboard</button></Link>
        <Link href={'/dashboard_show'}> <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded-xl md:text-lg text-md mx-3 my-2">Show Product</button></Link>
 
 
     </div>
    </div>
  )
}

export default Editproduct
