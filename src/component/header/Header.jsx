import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaList } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { useSelector } from 'react-redux';
import { useCategory } from '../../context/createCont';



           




export const Header = () => {

         const quantity=useSelector((state)=>state.cart)
         const [state,setState]=useState(false)
         const {login}=useCategory()
 
    
  return (
   <>
       <div className=' sticky top-0 z-40 w-full bg-gradient-to-r from-violet-200 to-pink-200 h-14   text-purple-950 flex justify-between items-center px-5  md:px-20'>
             <div className='font-serif font-bold  '>
                     Shopping 
             </div>
              <div className='w-52 sm:flex justify-evenly items-center sm:w-96 hidden sm:block font-bold'>
                   <Link to="cart" className=' text-lg   hover:bg-gray-100 hover:text-orange-500 p-2 hover:rounded-md flex justify-center items-center'><IoMdCart/><span className='text-[15px] font-sans font font-semibold'>{quantity.cartItems.length}</span> </Link>
                   <Link to="/home" className=' text-md   hover:bg-gray-100 hover:text-orange-500 p-2 md:text-md hover:rounded-md'>Shop</Link>
                   <Link to="/" className=' text-md       hover:bg-gray-100 hover:text-orange-500 p-2 md:text-md hover:rounded-md'>Home</Link>
                   <Link to="#" className=' text-md       hover:bg-gray-100 hover:text-orange-500 p-2 md:text-md hover:rounded-md'>Service</Link>
                   <Link to="/about" className=' text-md  hover:bg-gray-100 hover:text-orange-500 p-2 md:text-md hover:rounded-md'>About</Link>
                   <Link to="#" className=' text-md       hover:bg-gray-100 hover:text-orange-500 p-2 md:text-md hover:rounded-md'>Contact</Link>      
             </div>
             
               <span className='flex justify-center items-center gap-3 min-[640px]:hidden'>
               <Link to="cart" className=' text-[18px] flex justify-center items-center text-purple-950'><IoMdCart/><span className='text-[15px] font-sans font font-semibold'>{quantity.cartItems.length}</span></Link>
               <button className=' sm:hidden' onClick={()=>setState(!state)}><FaList/></button>
               </span>

               {
                  login!=null?<>
                        <div className='flex justify-center items-center flex-col gap-1 max-[639px]:hidden '>
                          <span className=' w-[26px] h-[26px]  flex font-extrabold bg-gradient-to-r from-violet-200 to-pink-200 text-purple-950 justify-center items-center border-black  rounded-full'>N</span>
                            <span className='  text-[8px] font-bold'>Nitin Rajput</span>
                        </div>                  

                  </>:<>
                  <span className=' max-[639px]:hidden border border-black rounded-md text-xs  font-extrabold sm:px-[3px] sm:py-[2px] md:px-2 md:py-1' >Login</span>
                  </>
               }    
    
       </div>
       {
            state?<>
            <div className='w-full  sticky sm:hidden top-[54px] z-20 font-bold bg-gradient-to-r from-violet-200 to-pink-200 text-purple-950 py-3 px-3 flex flex-col items-start '>
                   <Link to="#" className=' text-md  w-full flex justify-start items-center pl-3 hover:bg-gray-100  hover:text-orange-500 p-1 md:text-md'>
                     {
                        login!=null?<>
                                <div className='flex justify-center items-center gap-1 border-b  border-black pb-1  '>
                                  <span className=' w-[30px] h-[30px] shadow-xl border border-black flex font-extrabold bg-gradient-to-r from-violet-200 to-pink-200 text-purple-950 justify-center items-center  rounded-full'>N</span>
                                  <span className='text-[12px]'>Nitin Rajput</span>
                                </div>
                        </>:<>
                        <span className='border border-purple-600 text-purple-700 py-[2px] text-center px-1  rounded-full'  >Login</span>
                        </>
                     }
                  </Link>


                   <Link to="/home" className=' text-md  w-full   pl-3 hover:bg-gray-100 hover:text-orange-500 p-1 md:text-md '>Cetegory</Link>
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
