import React from 'react'
import { Link } from 'react-router-dom'

const navigations=[
  {
    name:'Home',
    path :'/'
  },
  {
    name:'Products',
    path :'/category'
  },{
    name:'About',
    path :'/about'
  },
  {
    name:'Contact',
    path :'/contact'
  }
]
const Header = () => {
  return (
    <div>
     <header className="text-gray-600 body-font shadow-lg cursor-pointer ">
  <div className="container mx-auto flex flex-wrap p-5  flex-col md:flex-row items-center ">
    <Link to={'/'} className=" hover:underline flex title-font font-medium cursor-pointer items-center text-gray-900 mb-4 md:mb-0">
      
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2500px-Amazon_icon.svg.png" className='h-10 max-w-xs' alt="" />
      <span className="ml-3 text-xl">Amazon</span>
    </Link>
    <nav className="md:ml-auto md:mr-auto  flex flex-wrap items-center text-base justify-center">
    {
      navigations.map((navigations)=>{
        return (
          <Link to={navigations.path} className=" hover:underline mr-5 hover:text-grey-900">{navigations.name}</Link>
        )
      })
    }
      
    </nav>
    <Link to={"/signUp"} className="inline-flex items-center text-white bg-indigo-600 border-0 py-2 px-4 mr-6
   focus:outline-none hover:bg-indigo-500 rounded text-base mt-4 md:mt-0">Sign Up
    </Link>

    <Link to={"/cart"} className="inline-flex items-center text-white bg-indigo-600 border-0 py-2 px-4
   focus:outline-none hover:bg-indigo-500 rounded text-base mt-4 md:mt-0">Go to Cart
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </Link>
   
  </div>
</header> 
    </div>
  )
}

export default Header
