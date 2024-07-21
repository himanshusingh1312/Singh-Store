import React from 'react'
import Link from 'next/link'
const Dashboard = () => {
  return (
<div>
  <section className="text-gray-600 body-font mx-auto">
  <div className="container mx-auto flex px-5 md:py-24 py-14 md:flex-row flex-col items-center ">
 
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-2xl mb-4 font-medium text-gray-900 mx-3">Welcome to Dashboard
        <br className="hidden lg:inline-block my-4 mx-3" />SinghStore
      </h1>
      <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div className="flex flex-col md:flex-row justify-center ">
     
    <Link href={'/dashboard_addproduct'}> <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-xl text-lg mx-1 sm:my-2 my-1">Add Product</button></Link>
       <Link href={'/dashboard_show'}> <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-xl text-lg mx-1 sm:my-2 my-1">Show Product</button></Link>


    </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="https://agencyanalytics.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fdfcvkz6j859j%2F2r8wSI1BTI0LE4SeHLvGIw%2Ffbec002e856cc7efd169e395c7a3440e%2Fecommerce-dashboard.png&w=3840&q=75" />
    </div>
  </div>
</section>

</div>
  )
}

export default Dashboard
