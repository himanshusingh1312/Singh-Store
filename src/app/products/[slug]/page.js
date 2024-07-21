'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Post = (props) => {
  const router = useRouter();
  const [result, setResult] = useState({});
  const [cart, setCart] = useState({});
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [availableQty, setAvailableQty] = useState(0);
  const [user, setUser] = useState({ value: null });
  const [pin, setPin] = useState('');
  const [service, setService] = useState();

  useEffect(() => {
    getProductDetail();
  }, []); // Only run once on mount

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUser({ value: token });
    }
  }, []); // Only run once on mount

  useEffect(() => {
    try {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        const parsedCart = JSON.parse(storedCart);
        setCart(parsedCart);
        saveCart(parsedCart);
      }
    } catch (error) {
      console.log(error);
      localStorage.clear();
    }
  }, []); // Only run once on mount

  const saveCart = (myCart) => {
    localStorage.setItem('cart', JSON.stringify(myCart));
    let subt = 0;
    let keys = Object.keys(myCart);
    for (let i = 0; i < keys.length; i++) {
      subt += myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    setTotal(subt);
  };

  const addToCart = (itemCode, qty, price, name, size, variant) => {
    toast.success('Successfully Added to Cart');
    const newCart = { ...cart };
    if (itemCode in newCart) {
      newCart[itemCode].qty += qty;
    } else {
      newCart[itemCode] = { qty: 1, price, name, size, variant };
    }
    setCart(newCart);
    saveCart(newCart);
  };

  const buyNow = (itemCode, qty, price, name, size, variant) => {
    const newCart = {};
    newCart[itemCode] = { qty: 1, price, name, size, variant };
    setCart(newCart);
    saveCart(newCart);
    router.push('/checkout');
  };

  

  let productId = props.params.slug;
  const getProductDetail = async () => {
    setLoading(true);
    let productData = await fetch(`/api/getproduct/${productId}`,{
      method:"GET",
      headers:{
          "Content-Type":"application/json"
      },
    });
    productData = await productData.json();
    if (productData.success) {
      setResult(productData.result); // Set the result state with fetched data
      setTitle(productData.result.title);
      setDesc(productData.result.desc);
      setSize(productData.result.size);
      setColor(productData.result.color);
      setCategory(productData.result.category);
      setPrice(productData.result.price);
      setAvailableQty(productData.result.availableQty);
    }
    setLoading(false);
  };

  const checkAvailability = async () => {
   
    toast.error("This pincode is not servicable")
  };

  const onChangePin = (e) => {
    setPin(e.target.value);
  };

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden bg-pink-50">
        <ToastContainer />
        {loading && (
          <div className="flex xs:flex-row flex-col justify-center gap-4 items-center h-[96vh]">
            <SkeletonTheme baseColor="#808080" highlightColor="#666">
              <div className='hidden lg:flex'>
                <Skeleton height={280} width={220} />
              </div>
              <div className='md:hidden flex'>
                
              <Skeleton height={180} width={180} />
              </div>
              <div className="lg:flex hidden flex-col gap-2">
                <Skeleton height={30} width={120} />
                <Skeleton height={30} width={120} />
                <Skeleton height={30} width={120} />
                <Skeleton height={30} width={120} />
                <Skeleton height={30} width={120} />
                <Skeleton height={30} width={120} />
              </div>
              <div className="flex xs:hidden flex-col gap-2">
                <Skeleton height={10} width={120} />
                <Skeleton height={10} width={120} />
                <Skeleton height={10} width={120} />
                <Skeleton height={10} width={120} />
                
              </div>
            </SkeletonTheme>
          </div>
        )}
        {!loading && (
          <div className="container px-5 py-16 mx-auto">
            <div className="xs:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-auto sm:h-64 ls:h-56 h-44 mx-3 sm:mx-0 object-cover object-center  rounded border-pink-600 shadow-[0_0_2px_#ffc0cb,inset_0_0_2px_#ffc0cb,0_0_5px_#ffc0cb,0_0_15px_#ffc0cb,0_0_30px_#ffc0cb]"
                src={result.img}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 md:bg-opacity-30 md:backdrop-blur-md">
                <h2 className="text-pink-500 xs:text-3xl ls:text-2xl text-xl title-font font-medium mb-1 tracking-wide">
                  Title: {title}
                </h2>
                <h1 className="text-pink-500 xs:text-3xl ls:text-2xl text-xl title-font font-medium mb-1 tracking-wide">
                  {desc}
                </h1>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span className="text-md ml-3 text-pink-500">4 Reviews</span>
                  </span>
                </div>
                <p className="leading-relaxed font-medium xs:text-2xl text-xl text-pink-500">Size: {size}</p>
                <p className="title-font font-medium xs:text-2xl text-xl text-pink-500">Price: {price}</p>
                <div className="flex mt-5">
                  <button
                    onClick={() => buyNow(productId, 1, price, title, size, color)}
                    className={`text-white bg-pink-500 border-0 ls:py-2 ls:px-6 py-1 px-4 ls:text-md text-sm focus:outline-none hover:bg-pink-700 rounded-xl ${
                      availableQty > 0 ? '' : 'opacity-50 cursor-not-allowed'
                    }`}
                    disabled={availableQty <= 0}
                  >
                    Buy Now
                  </button>
                  <button
                    onClick={() => addToCart(productId, 1, price, title, size, color)}
                    className="text-white bg-indigo-500 border-0 ls:text-md text-sm py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded-xl mx-2"
                  >
                    Add to Cart
                  </button>
                </div>
                <div className="flex space-x-3 text-sm mt-5">
                  <input
                    onChange={onChangePin}
                    className="px-2 border-2 border-gray-400 rounded-md w-36 xs:w-max py-0 xs:py-1"
                    type="text"
                    placeholder="Enter the pin"
                  />
                  <button
                    onClick={checkAvailability}
                    className="text-white mt-2 xs:mt-0 xs:text-xl text-md bg-pink-500 border-0 py-2 px-6 rounded-xl focus:outline-none hover:bg-pink-800"
                  >
                    Check
                  </button>
                </div>
                {availableQty > 0 ? (
                  <h1 className="text-green-500 title-font ls:text-2xl text-xl font-medium mt-4 underline">In stock</h1>
                ) : (
                  <h1 className="text-red-500 underline title-font ls:text-2xl text-xl font-medium mt-4">Out of stock</h1>
                )}
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Post;
