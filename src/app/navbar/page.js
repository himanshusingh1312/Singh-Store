'use client'
import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { useEffect } from 'react';
import Image from 'next/image';
import { IoMdLogOut } from "react-icons/io";
import { FaUsersRectangle } from "react-icons/fa6";
import { RiAdminFill } from "react-icons/ri";
import { FaMinusCircle, FaBriefcase, FaPlusCircle, FaCartArrowDown } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { MdBorderColor } from "react-icons/md";

import { IoLogInOutline } from "react-icons/io5";
import { useRouter } from 'next/navigation';
import { RiAccountCircleLine } from "react-icons/ri";
import { space } from 'postcss/lib/list';
const Navbar = () => {
  const router = useRouter();
  const [dropdown, setDropdown] = useState(false);
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  const ref = useRef();
  const [isSmOrLarger, setIsSmOrLarger] = useState(false); 
  const [user,setuser]=useState({value:null})
  const [cart, setcart] = useState({});
  const [total, subtotal] = useState(0);
  
  

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
    const token =localStorage.getItem('token')
    if(token){
      setuser({value:token})
      
    }
  }, [router.query])
  const logout =()=>{
    localStorage.removeItem('token')
    setuser({value:null})
    clearCart()
    router.push('/')
  }
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
    subtotal(subt)
  }


  const clearCart = () => {
    setcart({})
    savecart({})
  }
  
  
  useEffect(() => {
    const handleResize = () => {
      setIsSmOrLarger(window.innerWidth >= 600);
    };

    
    setIsSmOrLarger(window.innerWidth >= 600);

    
    window.addEventListener('resize', handleResize);

    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const search = () => {
    if (query === 'tshirts' || query === 'tshirt' || query === 'shirt' || query === 'Tshirt') {
      router.push('/tshirts');
      setError('');
    } else if (query === 'hoodies' || query === 'Hoodie' || query === 'hoodie') {
      router.push('/hoodies');
      setError('');
    } else if (query === 'mugs' || query === 'mug' || query === 'Mug') {
      router.push('/mugs');
      setError('');
    } else if (query === 'sticker' || query === 'stickers' ||  query === 'Sticker') {
      router.push('/stickers');
      setError('');
    } else {
    
      setError(" No found ");
      setQuery('');
      setTimeout(() => {
        setError('');
      }, 1500);
    }
  }

  return (
    <div className='flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-lg top-0 bg-gradient-to-r  border-b  from-pink-100 to-pink-200 '>
      <div className='logo md:mx-1 mx-auto   border-2  rounded-2xl'>
        <Link href={"/"}>
          <Image src='/singh_store2.jpeg' width={45} height={16} alt='Singh Store' />
        </Link>
      </div>
      <div className='nav'>
        <div className='flex items-center space-x-6  font-semibold xs:text-lg ls:text-md text-sm  '>
          <span className='transition duration-300 ease-in-out transform hover:scale-110 hover:underline  md:m-2 mt-3'><Link href={'/tshirts'}>Tshirts</Link></span>
          <span className='transition duration-300 ease-in-out transform hover:scale-110 hover:underline md:m-2 mt-3'> <Link href={'/mugs'}>Mugs</Link></span>
          <span className='transition duration-300 ease-in-out transform hover:scale-110 hover:underline md:m-2 mt-3'> <Link href={'/hoodies'}>Hoodies</Link></span>
          <span className='transition duration-300 ease-in-out transform hover:scale-110 hover:underline md:m-2 mt-3'> <Link href={'/stickers'}>Stickers</Link></span>
        </div>
      </div>
      <div className='flex cart absolute right-5 top-4'>
      
        
        <span
          onMouseOver={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          {dropdown && (
            <div
              onMouseOver={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
              className='absolute right-8 bg-gradient-to-r from-pink-100 via-pink-200 to-pink-300 top-6 py-4 rounded-md px-5 w-32 z-20 border border-pink-500'
            >
              <ul>
               <Link href={'/myaccount'}><li className='py-1 hover:text-pink-500 text-sm ' >
                <div className='flex'>
                  <div>
                  <RiAccountCircleLine style={{fontSize:'1rem'}} />
                  </div>
                  <div>
                   Account
                  </div>
                  </div></li></Link>
                <Link href={'/orders'}><li className='py-1 hover:text-pink-500 text-sm'>
                <div className='flex'>
                  <div>
                  <MdBorderColor />
                  </div>
                  <div>
                   Orders
                  </div>
                  </div>
                      </li></Link>
                      <Link href={'/admin'}><li className='py-1 hover:text-pink-500 text-sm'>
                <div className='flex'>
                  <div>
                  <FaUsersRectangle />
                  </div>
                  <div>
                   Admin
                  </div>
                  </div>
                      </li></Link>
                <li onClick={logout} className='py-1 hover:text-pink-500 text-sm'>
                <div className='flex'>
                  <div>
                  <IoMdLogOut />
                  </div>
                  <div>
                   Logout
                  </div>
                  </div></li>
              </ul>
            </div>
          )}
          {user.value && <RiAdminFill  style={{fontSize:'1.5rem'}}/>}
        </span>
        {!user.value && <Link href={'/login'}><button className=''>    {isSmOrLarger ? <span className='text-white rounded bg-pink-500 border-0 focus:outline-none hover:bg-pink-600 px-1 md:px-2 md:text-md text-sm  ring ring-pink-400 ring-offset-1 xs:ring-offset-2'>login</span> : <span className="login-icon"><IoLogInOutline  className='' style={{fontSize:'1.5rem'}}/></span>}</button></Link>}
        <FaCartArrowDown onClick={toggleCart} className='mx-3 text-4xl md:text-2xl  cursor-pointer' style={{ fontSize: '1.4rem' }} />
      </div>
      
      <div className={`fixed z-20 top-0 right-0 bg-white sm:p-10 p-8 transform transition-transform max-h-96 bg-opacity-50 backdrop-blur-md w-64 sm:w-auto ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <h2 className='font-bold text-xl'>Shopping Cart</h2>
        <span onClick={toggleCart} className='absolute top-5 right-2 cursor-pointer text-2xl'><MdCancel /></span>
        <ol className='list-decimal font-semibold'>
          {Object.keys(cart).length === 0 && <div className='font-semibold'>Your cart is Empty</div>}
          {Object.keys(cart).map((k) => (
            <li key={k}>
              <div className='item flex my-5'>
                <div className='w-2/3 font-semibold'>{cart[k].name}</div>
                <div className='flex font-semibold item-center justify-center w-1/3 text-lg'>
                  <FaPlusCircle
                    onClick={() => addtoCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}
                  />
                  <span className='mx-2 text-sm'>{cart[k].qty}</span>
                  <FaMinusCircle
                    onClick={() => removetoCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}
                    className='cursor-pointer text-pink-500'
                  />
                </div>
              </div>
            </li>
          ))}
        </ol>
        <span className='font-bold'>Subtotal: {total}</span>
        <div className='flex'>
          <Link href={'/checkout'}>
            <button className='flex mr-2 text-white bg-pink-500 border-0 focus:outline-none hover:bg-pink-600 text-sm'>
              <FaBriefcase className='m-1' />
              Checkout
            </button>
          </Link>
          <button onClick={clearCart} className='flex mr-2 text-white bg-pink-500 border-0 focus:outline-none hover:bg-pink-600 text-sm'>Clear cart</button>
        </div>
      </div>
      <div> <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') search(); }}
          placeholder="  Search..."
          className="w-auto  md:w-auto mx-12 p-0.5 xs:p-1 md:p-2 px-1 text-sm  mt-3 md:mt-2 border text-pink border-pink-300 shadow-[0_0_2px_#ffc0cb,inset_0_0_2px_#ffc0cb,0_0_5px_#ffc0cb,0_0_15px_#ffc0cb,0_0_30px_#ffc0cb] rounded-xl"
        />
        <div className='absolute bg-pink-500 text-center z-20 text-white m-1 mx-12 rounded-lg ' >{error}</div>
        </div>
    </div>
  );
}

export default Navbar;
