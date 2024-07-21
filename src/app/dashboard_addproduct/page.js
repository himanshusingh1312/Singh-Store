'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [desc, setDesc] = useState('');
  const [img, setImg] = useState('');
  const [category, setCategory] = useState('');
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [price, setPrice] = useState('');
  const [availableQty, setAvailableQty] = useState('');
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImg(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSelectChange = (event) => {
    setCategory(event.target.value);
  };

  const addUser = async (e) => {
    e.preventDefault();
    if (!title || !img || !desc || !color || !category || !availableQty || !price || !slug) {
      toast.error('All fields are required');
      return;
    }

    setLoading(true); // Set loading to true

    try {
      const token = localStorage.getItem('token');
      const res = await fetch('/api/getproduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ title, desc, img, size, color, category, availableQty, price, slug })
      });

      const rest = await res.json();

      if (rest.success) {
        setTitle('');
        setDesc('');
        setImg('');
        setSize('');
        setColor('');
        setCategory('');
        setAvailableQty('');
        setPrice('');
        setSlug('');
        toast.success('Added Successfully');
      } else {
        toast.error('Something went wrong');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred');
    } finally {
      setLoading(false); // Set loading to false
    }
  };

  return (
    <div>
      <div className="container m-auto">
        <ToastContainer />
        <h1 className="font-bold lg:text-3xl xs:text-2xl text-xl my-8 text-center">Add Product</h1>
        <div>
          <div className="mx-3 mb-2 font-semibold">
            <label htmlFor="title" className="leading-7 text-sm md:text-md text-gray-600">Title</label>
            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} name="title" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-0 lg:py-1 lg:px-3 px-2 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="mx-3 mb-2 font-semibold">
            <label htmlFor="slug" className="leading-7 text-sm md:text-md text-gray-600">Slug (unique)</label>
            <input type="text" onChange={(e) => setSlug(e.target.value)} value={slug} name="slug" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-0 lg:py-1 lg:px-3 px-2 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="mx-3 mb-2 font-semibold">
            <label htmlFor="desc" className="leading-7 text-sm md:text-md text-gray-600">Description</label>
            <input type="text" onChange={(e) => setDesc(e.target.value)} value={desc} name="desc" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-0 lg:py-1 lg:px-3 px-2 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="mx-3 mb-2 font-semibold">
            <label htmlFor="image" className="leading-7 text-sm md:text-md text-gray-600">Image</label>
            <input type="file" accept="image/*" onChange={handleImageUpload} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="m-3 mb-2 font-semibold">
            <div className="leading-7 text-lg p-1 text-black-600 text-black bg-white border border-gray-500">Category: {category}</div>
            <select value={category} onChange={handleSelectChange} className="border border-black">
              <option value="tshirts">tshirts</option>
              <option value="mugs">mugs</option>
              <option value="hoodies">hoodies</option>
              <option value="sticker">sticker</option>
            </select>
          </div>
          <div className="mx-3 mb-2 font-semibold">
            <label htmlFor="color" className="leading-7 text-sm md:text-md text-gray-600">Color</label>
            <input type="text" onChange={(e) => setColor(e.target.value)} value={color} name="color" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-0 lg:py-1 lg:px-3 px-2 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="mx-3 mb-2 font-semibold">
            <label htmlFor="size" className="leading-7 text-sm md:text-md text-gray-600">Size</label>
            <input type="text" onChange={(e) => setSize(e.target.value)} value={size} name="size" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-0 lg:py-1 lg:px-3 px-2 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="mx-3 mb-2 font-semibold">
            <label htmlFor="price" className="leading-7 text-sm md:text-md text-gray-600">Price</label>
            <input type="number" onChange={(e) => setPrice(e.target.value)} value={price} name="price" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-0 lg:py-1 lg:px-3 px-2 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="mx-3 mb-2 font-semibold">
            <label htmlFor="availableQty" className="leading-7 text-sm md:text-md text-gray-600">Availability</label>
            <input type="number" onChange={(e) => setAvailableQty(e.target.value)} value={availableQty} name="availableQty" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-0 lg:py-1 lg:px-3 px-2 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <button onClick={addUser} className="ml-3 text-white bg-pink-400 py-1 lg:py-2 lg:px-6 px-4 m-4 focus:outline-none hover:bg-pink-600 rounded">
            {loading ? 'Adding...' : 'Add'}
          </button>
          <div className="flex flex-row justify-center">
            <Link href={'/dashboard'}>
              <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded-xl md:text-lg text-md mx-3 my-2">Dashboard</button>
            </Link>
            <Link href={'/dashboard_show'}>
              <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded-xl md:text-lg text-md mx-3 my-2">Show Product</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
