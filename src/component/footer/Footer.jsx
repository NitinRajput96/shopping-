import React, {  useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoMdContact } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { MdOutlineRoundaboutRight } from "react-icons/md";
import { FaShopify } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useCategory } from '../../context/createCont';






export const Footer = () => {
           const {categ,setCateg}=useCategory()
           const navigate=useNavigate()

             const sendCate=(cate)=>{
                setCateg(cate)
                navigate("/home")
             }
   

          
           
  return (
    <>
        <div className=' w-full h-auto   mt-2 bg-fuchsia-200 text-purple-700 p-3 text-center '>
               <div><span className=' text-xs font-bold text-purple-950 '>Copyright 2024 developed by Nitin Rajput</span></div>
             

             
             <div className='flex justify-center items-center flex-col gap-4 mt-5 h-auto md:flex md:flex-row md:gap-1 lg:gap-3 '>
             
             <div className='text-white shadow-lg bg-white  w-full h-40  sm:w-96 md:w-72 lg:w-96 ' >
                     <h4 className='text-md font-bold text-purple-950 text-left pl-6 bg-fuchsia-100'>Category</h4>
                     <div className='w-full h-5/6 flex justify-evenly items-center'>
                        <img onClick={()=>{sendCate("male")}} className=' w-16 h-16 rounded-full hover:border-2     hover:border-fuchsia-300'  src="/image/male-fff.webp" alt="" />
                        <img onClick={()=>{sendCate("electric")}} className=' w-16 h-16 rounded-full hover:border-2 hover:border-fuchsia-300'  src="/image/mobileModel.jpeg" alt="" />
                        <img onClick={()=>{sendCate("female")}} className=' w-16 h-16 rounded-full hover:border-2   hover:border-fuchsia-300 bg-white'   src="/image/without-g-removebg-preview.png" alt="" />
                   </div>
                  </div>
                

                <div className='text-white shadow-lg  bg-white  w-full h-40  sm:w-96 md:w-72 lg:w-96 ' >
                     <h4 className='text-md bg-fuchsia-100 font-bold text-purple-950 text-left pl-6'>Links</h4>
                       <div className='  w-full h-5/6 max-[400px]:flex max-[400px]:justify-center max-[400px]:items-start max-[400px]:flex-col max-[400px]:px-5 sm:w-96  sm:flex md:flex-col sm:justify-center gap-1 sm:items-center'>
                         <Link to="/contact"  className=' text-black text-md font-semibold text-center flex justify-start gap-2 pl-2 items-center  w-28    hover:text-purple-700 '><span className=' text-black font-bold text-lg '><IoMdContact/></span>Contact</Link>
                          <Link to="/"        className=' text-black text-md font-semibold text-center flex justify-start gap-2 pl-2 items-center  w-28    hover:text-purple-700 '><span className=' text-black font-bold text-lg '><FaHome/></span>Home</Link>
                          <Link to="home"     className=' text-black text-md font-semibold text-center flex justify-start gap-2 pl-2 items-center  w-28    hover:text-purple-700 '><span className=' text-black font-bold text-lg '><FaShopify/></span>Shoping</Link>
                          <Link to="/about"   className=' text-black text-md font-semibold text-center flex justify-start gap-2 pl-2 items-center  w-28    hover:text-purple-700 '><span className=' text-black font-bold text-lg '><MdOutlineRoundaboutRight/></span>About us</Link>

                       </div>
                  </div>


                  <div className='text-white shadow-lg bg-white  w-full h-40  sm:w-96 md:w-72 lg:w-96 ' >
                     <h4 className='text-md bg-fuchsia-100 font-bold text-purple-950 text-left pl-6 '>Follow us</h4>
                       <div className='text-white  max-[400px]:flex max-[400px]:justify-center max-[400px]:items-start max-[400px]:flex-col max-[400px]:px-5 w-full h-5/6  sm:w-full   flex flex-col justify-center gap-1 items-center'>
                         <Link to=""  className=' text-black text-md font-semibold text-center flex justify-start gap-5 items-center  w-24  hover:text-purple-700 '><span className=' rounded-full overflow-hiden w-4  h-4 flex justify-center items-center text-blue-800 font-bold text-lg bg-white'><FaLinkedin/></span>Linkedin</Link>
                          <Link to="" className=' text-black text-md font-semibold text-center flex justify-start gap-5 items-center  w-24  hover:text-purple-700 '><span className=' rounded-full overflow-hiden w-4  h-4 flex justify-center items-center text-red-800 font-bold text-lg bg-white'><FaInstagramSquare/></span>Instagram</Link>
                          <Link to="" className=' text-black text-md font-semibold text-center flex justify-start gap-5 items-center  w-24  hover:text-purple-700 '><span className=' rounded-full overflow-hiden w-4  h-4 flex justify-center items-center text-white font-bold text-lg bg-black'><FaGitSquare/></span>Github</Link>
                          <Link to="" className=' text-black text-md font-semibold text-center flex justify-start gap-5 items-center  w-24  hover:text-purple-700 '><span className=' rounded-full overflow-hiden w-4  h-4 flex justify-center items-center text-blue-800 font-bold text-lg bg-white'><FaFacebook/></span>Facbook</Link>
                       </div>
                  </div>

              </div>
        </div>
    </>
   ) 
}
