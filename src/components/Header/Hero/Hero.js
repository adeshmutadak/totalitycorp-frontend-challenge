import React from 'react'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font mt-20 bg-slate-100">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Grab the Offers 
        <br className="hidden lg:inline-block"/>Before Sold Out
      </h1>
      <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div className="flex justify-center">
        <Link to={"/offers"} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-black hover:text-red-700  rounded text-lg">Today's Deals </Link>
        <Link to={"/category"} className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none rounded text-lg hover:bg-black hover:text-yellow-200">Category</Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="https://assets-global.website-files.com/5d7b77b063a9066d83e1209c/61e9cf9ae23c496ebcef1727_1200x630-snagshout1-1024x538.jpeg"/>
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero
