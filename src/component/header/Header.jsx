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
       <div className=' sticky w-full bg-gradient-to-r from-fuchsia-600 to-pink-300 h-12  text-black flex justify-between items-center px-5  md:px-20'>
             <div className='font-serif font-bold  '>
                     Shopping 
             </div>
             <div className='w-52 sm:flex justify-evenly items-center sm:w-96 hidden sm:block font-bold'>
                   <Link to="cart" className=' text-2xl      hover:bg-fuchsia-400 hover:text-black p-2 hover:rounded-md flex justify-center items-center'><IoMdCart/><span className='text-[18px] font-sans font font-semibold'>{quantity.cartItems.length}</span> </Link>
                   <Link to="/home" className=' text-md   hover:bg-fuchsia-400 hover:text-black p-2 md:text-md hover:rounded-md'>Shop</Link>
                   <Link to="/" className=' text-md  hover:bg-fuchsia-400 hover:text-black p-2 md:text-md hover:rounded-md'>Home</Link>
                   <Link to="#" className=' text-md       hover:bg-fuchsia-400 hover:text-black p-2 md:text-md hover:rounded-md'>Service</Link>
                   <Link to="/about" className=' text-md  hover:bg-fuchsia-400 hover:text-black p-2 md:text-md hover:rounded-md'>About</Link>
                   <Link to="#" className=' text-md       hover:bg-fuchsia-400 hover:text-black p-2 md:text-md hover:rounded-md'>Contact</Link>
                  
             </div>
             <button className=' sm:hidden' onClick={()=>setState(!state)}><FaList/></button>
    
    
       </div>
       {
            state?<>
            <div className='w-full font-bold bg-gradient-to-r from-fuchsia-600 to-pink-300 py-3 px-3 flex flex-col items-start '>
                   <Link to="cart" className=' text-md  w-full flex gap-1 items-center hover:bg-pink-500 hover:text-white p-1'><span>Cart</span><IoMdCart/><span className='text-[18px] font-sans font font-semibold'>{quantity.cartItems.length}</span></Link>
                   <Link to="home" className=' text-md  w-full hover:bg-pink-500 hover:text-white p-1 md:text-md '>Shop</Link>
                   <Link to="/"  className=' text-md  w-full hover:bg-pink-500 hover:text-white p-1 md:text-md '>Home</Link>
                   <Link to="/about" className=' text-md  w-full hover:bg-pink-500 hover:text-white p-1 md:text-md '>About</Link>
                   <Link to="#" className=' text-md  w-full hover:bg-pink-500 hover:text-white p-1 md:text-md'>Contact</Link>
                   <Link to="#" className=' text-md  w-full hover:bg-pink-500 hover:text-white p-1 md:text-md'>Service</Link>
                  
             </div>
            </>:""
       }
   </>
  )
}
