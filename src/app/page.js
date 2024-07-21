'use client'
import Image from "next/image";
import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect,useState } from "react";
export default function Home() {
  const [showTitleDesc, setShowTitleDesc] = useState(false);
  const imgslider=[
    {
      src:"/bg_code.jpg",
      title:"Fashion"
    },
    {
      src:"/bg_code1.jpg",
      title:"Lastest"
    },
    {
      src:"/bg1_code.jpg",
      title:"Awesome"
    },
    {
      src:"/hoodie1.jpg",
      title:"Hoodies"
    },
    {
      src:"/hoodie2.jpg",
      title:"Best"
    },
    {
      src:"/hoodie3.jpg",
      title:"Nice"
    },
    {
      src:"/mug1.jpg",
      title:"mugs"
    }
  ]
  const images=[
    {
      id:1,
      src:"/bg_code3.jpg",
      title:"Welcome ",
      desc:" To the Singh Store , Thanks "
    },
    
    {
      id:3,
      src:"/bg1_code.jpg",
      title:"Service",
      desc:"Available 24*7 for your help "
    },
    {
      id:4,
      src:"/bg-code5.jpg",
      title:"Cheapest",
      desc:" Cheapest prices and best quality "
    },
    {
      id:6,
      src:"/bg-code7.jpg",
      title:"Return ",
      desc:"10 days return and exchange policy "
    }
  ]
  const [activeimg,setactiveimg]=useState(0);
  useEffect(()=>{
      const timer=setTimeout(()=>{
          clicknext();
      },4000);
      return ()=>{
          clearTimeout(timer)
      }
  },[activeimg])
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowTitleDesc(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [activeimg]);

  
  const clicknext=()=>{
      activeimg === images.length-1?setactiveimg(0):setactiveimg(activeimg+1)
      setShowTitleDesc(false); 
  }
  const clickprev=()=>{
      activeimg ===0?setactiveimg(images.length-1):setactiveimg(activeimg-1)
      setShowTitleDesc(false); 
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768, // Adjust settings for screens smaller than 768px
        settings: {
          slidesToShow: 2, // Show 1 slide on smaller screens
        },
      },
    ],
  };
  
  return (
   <>
   <div>
           <div className="  mx-auto   rounded-2xl">
              <div className="transition-transform ease-in-out duration-500 ">
{
  images.map((pic,idx)=>(
     <div key={idx} className={idx===activeimg?`block    transition-all duration-500 ease-in-out`:'hidden'} > 
     <img
        src={pic.src}
        alt=""
        className="w-full  h-96 md:h-screen  object-cover bg-cover bg-center "
     />
     </div>
  ))
}

              </div>
           </div>
          
          
    </div>
    <section >
            <div className="w-4/5  m-auto ">
              <div className="mt-24 md:mt-0 mb-20">
                        <Slider  {...settings} >
                        {
  imgslider.map((pic,idx)=>(
    <div key={idx} className="transition duration-300 ease-in-out transform hover:scale-95">
    <div className="md:h-96 h-36 flex justify-center items-center md:rounded-full rounded-sm">
    <img src={pic.src} alt="no image found" className="md:h-64 md:w-64 h-36 w-48 md:rounded-full rounded-lg " />
    </div >
    <div className="flex justify-center items-center md:-mt-10 mt-8">   
       <p className="md:text-bold md:text-2xl text-semibold text-xl shadow-sm">{pic.title}</p>
    </div>

    </div>
                      ))  }
                          </Slider>
              </div>
            </div>
    </section>
    
</>

   
    
  );
}
