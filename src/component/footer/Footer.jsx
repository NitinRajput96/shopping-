import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoMdContact } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { MdOutlineRoundaboutRight } from "react-icons/md";
import { FaShopify } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


export const Footer = () => {

          const navigate_=useNavigate()
         
  return (
    <>
        <div className=' w-full h-auto  bg-gradient-to-r from-fuchsia-600 to-pink-300 text-white p-3 text-center '>
               <div><span className=' text-xs font-bold text-black '>Copyright 2024 developed by Nitin Rajput</span></div>
             

             
             <div className='flex justify-center items-center flex-col gap-4 mt-5 h-auto md:flex md:flex-row md:gap-1 lg:gap-3 '>
             
             <div className='text-white shadow-2xl   w-full h-40  sm:w-96 md:w-72 lg:w-96 ' >
                     <h4 className='text-md font-bold text-black text-left pl-6 bg-gradient-to-r from-fuchsia-400 to-pink-100'>Category</h4>
                     <div className='w-full h-5/6 flex justify-evenly items-center'>
                           <img  className=' w-16 h-16 rounded-full hover:border-2 hover:border-red-900'  src="/image/male-fff.webp" alt="" />
                           <img  className=' w-16 h-16 rounded-full hover:border-2 hover:border-red-900'  src="/image/mobileModel.jpeg" alt="" />
                           <img  className=' w-16 h-16 rounded-full hover:border-2 hover:border-red-900'  src="/image/female-fff.avif" alt="" />
                   </div>
                  </div>


                <div className='text-white shadow-2xl  w-full h-40  sm:w-96 md:w-72 lg:w-96 ' >
                     <h4 className='text-md font-bold text-black text-left pl-6 bg-gradient-to-r from-fuchsia-400 to-pink-100'>Links</h4>
                       <div className='text-white  w-full h-5/6  sm:w-96  flex flex-col justify-center gap-1 items-center'>
                         <Link to="/contact"  className=' text-black text-md font-semibold text-center flex justify-start gap-5 items-center  w-36  hover:text-white '><span className=' text-black font-bold text-lg'><IoMdContact/></span>Contact</Link>
                          <Link to="/" className=' text-black text-md font-semibold text-center flex justify-start gap-5 items-center  w-36  hover:text-white '><span className=' text-black font-bold text-lg'><FaHome/></span>Home</Link>
                          <Link to="/home" className=' text-black text-md font-semibold text-center flex justify-start gap-5 items-center  w-36  hover:text-white '><span className=' text-black font-bold text-lg'><FaShopify/></span>Shoping</Link>
                          <Link to="/about" className=' text-black text-md font-semibold text-center flex justify-start gap-5 items-center  w-36  hover:text-white '><span className=' text-black font-bold text-lg'><MdOutlineRoundaboutRight/></span>About us</Link>

                       </div>
                  </div>


                  <div className='text-white shadow-2xl  w-full h-40  sm:w-96 md:w-72 lg:w-96 ' >
                     <h4 className='text-md font-bold text-black text-left pl-6 bg-gradient-to-r from-fuchsia-400 to-pink-100'>Follow us</h4>
                       <div className='text-white  w-full h-5/6  sm:w-96  flex flex-col justify-center gap-1 items-center'>
                         <Link to=""  className=' text-black text-md font-semibold text-center flex justify-start gap-5 items-center  w-36  hover:text-white '><span className=' rounded-full overflow-hiden w-4  h-4 flex justify-center items-center text-blue-800 font-bold text-lg bg-white'><FaLinkedin/></span>Linkedin</Link>
                          <Link to="" className=' text-black text-md font-semibold text-center flex justify-start gap-5 items-center  w-36  hover:text-white '><span className=' rounded-full overflow-hiden w-4  h-4 flex justify-center items-center text-red-800 font-bold text-lg bg-white'><FaInstagramSquare/></span>Instagram</Link>
                          <Link to="" className=' text-black text-md font-semibold text-center flex justify-start gap-5 items-center  w-36  hover:text-white '><span className=' rounded-full overflow-hiden w-4  h-4 flex justify-center items-center text-white font-bold text-lg bg-black'><FaGitSquare/></span>Git</Link>
                          <Link to="" className=' text-black text-md font-semibold text-center flex justify-start gap-5 items-center  w-36  hover:text-white '><span className=' rounded-full overflow-hiden w-4  h-4 flex justify-center items-center text-blue-800 font-bold text-lg bg-white'><FaFacebook/></span>Facbook</Link>
                       </div>
                  </div>

              </div>
        </div>
    </>
   ) 
}
