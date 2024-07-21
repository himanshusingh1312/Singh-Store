'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Stickerslug = (props) => {
  const router= useRouter()
  const [result, setResult] = useState({});
  const [cart,setcart]= useState({});
  const [total,subtotal]=useState(0);
  //state
  const [title,setTitle]=useState("");
  const [desc,setDesc]= useState("");
  const [size,setSize]= useState("")
  const [color,setColor]=useState("")
  const [category,setCategory]=useState("")
  const [price,setPrice]=useState("")
  const [availableQty, setAvailableQty] = useState(0);
  const [loading, setLoading] = useState(true);
 useEffect(()=>{
  getProductDetail()
 },[]);
 
  useEffect(()=>{
    try{
     if(localStorage.getItem("cart")){
      setcart(JSON.parse(localStorage.getItem("cart")))
      savecart(JSON.parse(localStorage.getItem("cart")))
     }
    }
    catch(error){
      console.log(error);
      localStorage.clear()
    }
  },[])
  const savecart = (mycart)=>{
    localStorage.setItem("cart",JSON.stringify(mycart));
    let subt =0;
    let keys =Object.keys(mycart)
    for(let i=0;i<keys.length;i++){
            subt += mycart[keys[i]].price * mycart[keys[i]].qty
    }
    subtotal(subt)
  }
  const addtoCart =(itemcode,qty,price,name,size,variant)=>{
          toast.success("Successfully ,Added to Cart")
          let newcart = cart;
          if(itemcode in cart){
            newcart[itemcode].qty = cart[itemcode].qty + qty
          }
          else{
            newcart[itemcode] = {qty:1,price,name,size,variant}
          }
          setcart(newcart);
          savecart(newcart)
  }
  const buynow = (itemcode,qty,price,name,size,variant)=>{
          let newcart= {};
          newcart[itemcode]={qty:1,price,name,size,variant}
          setcart(newcart)
          savecart(newcart)
          router.push('/checkout')
          
  }
  const removetoCart =(itemcode,qty,price,name,size,variant)=>{
    let newcart = cart;
    if(itemcode in cart){
      newcart[itemcode].qty = cart[itemcode].qty - qty
    }
    if(newcart[itemcode]["qty"]<=0){
      delete newcart[itemcode]
    }
    setcart(newcart);
    savecart(newcart)
}
  const clearCart =()=>{
    setcart({})
    savecart({})
  }
  //console.log(params)
  let productid=props.params.slug;
  const getProductDetail = async()=>{
    setLoading(true);
    let productdata= await fetch(`http://localhost:3000/api/stickerapi/${productid}`)
    productdata = await productdata.json();
    if(productdata.success){   
           setResult(productdata.result); // Set the result state with fetched data
    setTitle(productdata.result.title);
    setDesc(productdata.result.desc)
    setSize(productdata.result.size);
    setColor(productdata.result.color)
    setCategory(productdata.result.category)
    setPrice(productdata.result.price)
    setAvailableQty(productdata.result.availableQty); 
  }
  setLoading(false)
   }
  const [pin,setPin]  =useState()
  const [service,setService] =useState();
  const checkavailability = async ()=>{
    
    toast.error("This pincode is not servicable")
  }
   const onchangepin =(e)=>{
    setPin(e.target.value)
   }
  return (
<div>
    <section className="text-gray-600 body-font overflow-hidden bg-[url('/store10.jpg')] border border-black brightness-90" >
    <ToastContainer />
    {loading && (
          <div className="flex justify-center items-center h-screen">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-pink-400 h-20 w-20"></div>
          </div>
        )}
        {!loading && (
      <div className="container px-5 py-16 mx-auto   ">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center transition duration-300 ease-in-out transform hover:scale-95 rounded border-pink-600 shadow-[0_0_2px_#ffc0cb,inset_0_0_2px_#ffc0cb,0_0_5px_#ffc0cb,0_0_15px_#ffc0cb,0_0_30px_#ffc0cb]"
            src={result.img} 
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 md:bg-opacity-30 md:backdrop-blur-md">
            <h2 className="text-white text-3xl title-font font-medium mb-1 tracking-wide">Title :{title}</h2>
            <h1 className="text-white text-3xl title-font font-medium mb-1 tracking-wide">{desc}</h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="text-xl ml-3 ">4 Reviews</span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                <a className="text-white">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a className="text-white">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a className="text-white">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                  </svg>
                </a>
              </span>
            </div>
            <p className="leading-relaxed text-white font-bold text-2xl">Size : {size}</p>
          
            <p className="title-font font-medium text-white text-2xl ">Price :{price}</p>
            <div className="flex mt-5">
           
              <button onClick={()=>{buynow(productid,1,price,title,size,color)}} className={` text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-700 rounded-xl ${availableQty > 0 ? '' : 'opacity-50 cursor-not-allowed'}`} disabled={availableQty <= 0}>Buy Now</button>
              
              <button onClick={()=>{addtoCart(productid,1,price,title,size,color)}} className=" text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded-xl mx-2">Add to Cart</button>
            </div>
            <div className=' flex  space-x-3 text-sm mt-5'>
                 <input onChange={onchangepin} className='px-2 border-2 border-gray-400 rounded-md ' type="text" placeholder="Enter the pin" />
                 <button onClick={checkavailability} className='text-white bg-pink-500 border-0 py-2 px-6 rounded-xl focus:outline-none hover:bg-pink-800'>Check</button>
            </div>
           {(!service && typeof service!== 'undefined') && <div className='text-white text-lg mt-3'>
                 Sorry, we do not deliver this pincode yet
            </div>
  }
           { (service && typeof service!== 'undefined') && <div className='text-white text-lg mt-3'>
                 Yay! , This pincode is serviceable
            </div>
}     
{availableQty > 0 ? <h1 className="text-green-300 title-font text-2xl font-medium mt-4">In stock</h1> : <h1 className="text-red-300 title-font text-2xl font-medium mt-4">Out of stock</h1>}        
          </div>
        </div>
      </div>
      )}
    </section>
  </div>




     
    )
}

export default Stickerslug
