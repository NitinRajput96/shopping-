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
import Catego from '../json_data/Catego.json'






export const Footer = () => {
           const {setCateg}=useCategory()
           const navigate=useNavigate()

             const sendCate=(cate)=>{
                setCateg(cate)
                navigate("/home")
             }

            
   

          
           
  return (
    <>
        <div className=' w-full h-auto   mt-2 bg-gradient-to-r from-violet-200 to-pink-200 text-purple-700 p-3 text-center '>
               <div><span className=' text-xs font-bold text-purple-950 '>Copyright 2024 developed by Nitin Rajput</span></div>
             

             
             <div className='flex justify-center items-center flex-col gap-4 mt-5 h-auto md:flex md:flex-row md:gap-1 lg:gap-3 '>
             
             <div className='text-white shadow-lg bg-white  w-full h-40  sm:w-96 md:w-72 lg:w-96 ' >
                     <h4 className='text-md font-bold text-purple-950 text-left pl-6 bg-fuchsia-100'>Category</h4>
                     <div className='w-full h-5/6 flex justify-evenly items-center'>
                        {
                          Catego['cate-al3'].map((item,i)=>

                            <img onClick={()=>{sendCate(item.name)}}     className=' w-16 h-16 rounded-full hover:border-2     hover:border-fuchsia-300'  src={item.img} alt="" />

                          )
                        }                       
                   </div>
                  </div>
                

                <div className='text-white shadow-lg  bg-white  w-full h-40  sm:w-96 md:w-72 lg:w-96 ' >
                     <h4 className='text-md bg-fuchsia-100 font-bold text-purple-950 text-left pl-6'>Links</h4>
                       <div className='  w-full pl-10 h-5/6 grid grid-rows-4 justify-items-start items-center'>
                         <Link to="/contact"  className=' 2/4 text-purple-950 text-md font-semibold text-center flex justify-start gap-2 pl-2 items-center  w-28    hover:text-purple-700 '><span className=' text-black font-bold text-lg '><IoMdContact/></span>Contact</Link>
                          <Link to="/"        className=' 2/4 text-purple-950 text-md font-semibold text-center flex justify-start gap-2 pl-2 items-center  w-28    hover:text-purple-700 '><span className=' text-black font-bold text-lg '><FaHome/></span>Home</Link>
                          <Link to="/home"     className=' 2/4 text-purple-950 text-md font-semibold text-center flex justify-start gap-2 pl-2 items-center  w-28    hover:text-purple-700 '><span className=' text-black font-bold text-lg '><FaShopify/></span>Shopping</Link>
                          <Link to="/about"   className=' 2/4 text-purple-950 text-md font-semibold text-center flex justify-start gap-2 pl-2 items-center  w-28    hover:text-purple-700 '><span className=' text-black font-bold text-lg '><MdOutlineRoundaboutRight/></span>About us</Link>

                       </div>
                  </div>


                  <div className='text-white shadow-lg bg-white  w-full h-40  sm:w-96 md:w-72 lg:w-96 ' >
                     <h4 className='text-md bg-fuchsia-100 font-bold text-purple-950 text-left pl-6 '>Follow us</h4>
                       <div className=' w-full pl-10 h-5/6 grid grid-rows-4 justify-items-start  items-center'>
                         <Link to=""  className=' text-purple-950 text-md font-semibold text-center flex justify-start gap-2 pl-2 items-center  w-24  hover:text-purple-700 '><span className=' rounded-full overflow-hiden w-4  h-4 flex justify-center items-center text-blue-800 font-bold text-lg bg-white'><FaLinkedin/></span>Linkedin</Link>
                          <Link to="" className=' text-purple-950 text-md font-semibold text-center flex justify-start gap-2 pl-2 items-center  w-24  hover:text-purple-700 '><span className=' rounded-full overflow-hiden w-4  h-4 flex justify-center items-center text-red-800 font-bold text-lg bg-white'><FaInstagramSquare/></span>Instagram</Link>
                          <Link to="" className=' text-purple-950 text-md font-semibold text-center flex justify-start gap-2 pl-2 items-center  w-24  hover:text-purple-700 '><span className=' rounded-full overflow-hiden w-4  h-4 flex justify-center items-center text-white font-bold text-lg bg-black'><FaGitSquare/></span>Github</Link>
                          <Link to="" className=' text-purple-950 text-md font-semibold text-center flex justify-start gap-2 pl-2 items-center  w-24  hover:text-purple-700 '><span className=' rounded-full overflow-hiden w-4  h-4 flex justify-center items-center text-blue-800 font-bold text-lg bg-white'><FaFacebook/></span>Facbook</Link>
                       </div>
                  </div>

              </div>
        </div>
    </>
   ) 
}
