'use client'
import { useStatStyles } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useState } from 'react'
const Description= () => {
    const [activeimg,setactiveimg]=useState(0);
    
    const images=[
        {
          id:1,
          src:"/bg_code.jpg",
          title:"Black coffee  ",
          desc:" hello welcome to my landing page thanks for your visit i am very grateful to your response "
        },
        {
          id:2,
          src:"/bg_code.jpg",
          title:"White  coffee ",
          desc:" hello welcome to my landing page thanks for your visit i am very grateful to your response "
        },
        {
          id:3,
          src:"/bg_code.jpg",
          title:"Blue coffee  ",
          desc:" hello welcome to my landing page thanks for your visit i am very grateful to your response "
        }
      ]
    useEffect(()=>{
        const timer=setTimeout(()=>{
            clicknext();
        },5000);
        return ()=>{
            clearTimeout(timer)
        }
    },[activeimg])
    
    const clicknext=()=>{
        activeimg === images.length-1?setactiveimg(0):setactiveimg(activeimg+1)
    }
    const clickprev=()=>{
        activeimg ===0?setactiveimg(images.length-1):setactiveimg(activeimg-1)
    }
    
  return (
    <>
    <div className='grid place-items-start w-full bg-white relative rounded-tr-3xl rounded-br-3xl'>
        <div className='upparcase text-sm absolute right-4 top-2 underline-offset-4 underline'>
            coffee cafe 
        </div>
      {
        images.map((item,idx)=>(
            <div key={item.idx}> 
            <div className={idx===activeimg?`block w-full h-[80vh] object-cover transition-all duration-500 ease-in-out`:'hidden'} key={idx}>
                 <div className='py-16 text-5xl font-extrabold'>{item.title}</div>
                 <div className='loading-related tracking-wide h-10 italic item-gray-600 text-base font-medium'>{item.desc}</div>
            </div>
            <div>
                <button onClick={clickprev} className='bg-pink-500 text-2xl' >Left</button>
                <button onClick={clicknext}  className='bg-pink-500 tex-2xl'>Right</button>
            </div>
            </div>
            ))
      }
    </div>
    </>
  )
}

export default Description
