import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaList } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { useSelector } from 'react-redux';


           




export const Header = () => {

         const quantity=useSelector((state)=>state.cart)
    const [state,setState]=useState(false)
 
    
  return (
   <>
       <div className=' sticky w-full bg-fuchsia-200 h-14   text-purple-950 flex justify-between items-center px-5  md:px-20'>
             <div className='font-serif font-bold  '>
                     Shopping 
             </div>
             <div className='w-52 sm:flex justify-evenly items-center sm:w-96 hidden sm:block font-bold'>
                   <Link to="cart" className=' text-2xl   hover:bg-gray-100 hover:text-orange-500 p-2 hover:rounded-md flex justify-center items-center'><IoMdCart/><span className='text-[18px] font-sans font font-semibold'>{quantity.cartItems.length}</span> </Link>
                   <Link to="/home" className=' text-md   hover:bg-gray-100 hover:text-orange-500 p-2 md:text-md hover:rounded-md'>Shop</Link>
                   <Link to="/" className=' text-md       hover:bg-gray-100 hover:text-orange-500 p-2 md:text-md hover:rounded-md'>Home</Link>
                   <Link to="#" className=' text-md       hover:bg-gray-100 hover:text-orange-500 p-2 md:text-md hover:rounded-md'>Service</Link>
                   <Link to="/about" className=' text-md  hover:bg-gray-100 hover:text-orange-500 p-2 md:text-md hover:rounded-md'>About</Link>
                   <Link to="#" className=' text-md       hover:bg-gray-100 hover:text-orange-500 p-2 md:text-md hover:rounded-md'>Contact</Link>
                  
             </div>
             <button className=' sm:hidden' onClick={()=>setState(!state)}><FaList/></button>
    
    
       </div>
       {
            state?<>
            <div className='w-full font-bold bg-fuchsia-200 text-purple-950 py-3 px-3 flex flex-col items-start '>
                   <Link to="cart" className=' text-md  w-full   pl-3 flex gap-1 items-center hover:bg-gray-100 hover:text-orange-500 p-1'><span>Cart</span><IoMdCart/><span className='text-[18px] font-sans font font-semibold'>{quantity.cartItems.length}</span></Link>
                   <Link to="home" className=' text-md  w-full   pl-3 hover:bg-gray-100 hover:text-orange-500 p-1 md:text-md '>Shop</Link>
                   <Link to="/"  className=' text-md  w-full     pl-3 hover:bg-gray-100 hover:text-orange-500 p-1 md:text-md '>Home</Link>
                   <Link to="/about" className=' text-md  w-full pl-3 hover:bg-gray-100 hover:text-orange-500 p-1 md:text-md '>About</Link>
                   <Link to="#" className=' text-md  w-full      pl-3 hover:bg-gray-100 hover:text-orange-500 p-1 md:text-md'>Contact</Link>
                   <Link to="#" className=' text-md  w-full      pl-3 hover:bg-gray-100 hover:text-orange-500 p-1 md:text-md'>Service</Link>
                  
             </div>
            </>:""
       }
   </>
  )
}
