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
       <div className=' sticky top-0 z-40 w-full bg-gradient-to-r from-violet-200 to-pink-200 h-14   text-purple-950 flex justify-between items-center px-5  md:px-20'>
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
               <span className='flex justify-center items-center gap-3'>
               <Link to="cart" className=' text-[18px] flex justify-center items-center text-purple-950'><IoMdCart/><span className='text-[15px] font-sans font font-semibold'>{quantity.cartItems.length}</span></Link>
               <button className=' sm:hidden' onClick={()=>setState(!state)}><FaList/></button>
               </span>
    
    
       </div>
       {
            state?<>
            <div className='w-full  sticky  top-[54px] z-20 font-bold bg-gradient-to-r from-violet-200 to-pink-200 text-purple-950 py-3 px-3 flex flex-col items-start '>
                   <Link to="/home" className=' text-md  w-full   pl-3 hover:bg-gray-100 hover:text-orange-500 p-1 md:text-md '>Shop</Link>
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
