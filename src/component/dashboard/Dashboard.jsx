import React, { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link,  useNavigate } from 'react-router-dom';
import Catego from '../json_data/Catego.json'
import { useCategory } from '../../context/createCont';
import Data from '../json_data/Data.json';





export const Dashboard = () => {
          const {categ,setCateg}=useCategory();
          const navigate=useNavigate()

          const sendProd=(item)=>{
               setCateg(item)
               navigate("/home")
            }
           
           
            
           
     
  return (
   <>
      <section className=' lg:h-[85vh] h-[40vh] '>
              <Swiper 
                  spaceBetween={30}
                    centeredSlides={true}
                    slidesPerView={1}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    // navigation={true}
                    modules={[Autoplay, Pagination,]}
                    className="mySwiper h-full"
              >
              <SwiperSlide>
                         <div className=' w-full h-full flex flex-row justify-center sm:gap-5 items-center bg-gradient-to-r from-violet-200 to-pink-200 p-3'>
                            
                              <div className='w-2/4 h-full flex justify-center items-center flex-col'> 
                                     <p className='  text-2xl lg:text-[50px] lg:pb-5 bg-gradient-to-r from-gray-900 to-lime-400 bg-clip-text text-transparent font-bold'>India's Brand</p>
                                     <p className=' text-2xl text-bold bg-gradient-to-r from-gray-900 to-lime-400 bg-clip-text text-transparent'>Fashion shopping </p>
                                     <span className=' w-24 h-6 border-2 rounded-lg px-2 text-xs flex justify-center items-center  border-fuchsia-400 text-purple-950 gap-2 mt-5'><Link to="/home">Shopping</Link> <FaLongArrowAltRight/> </span>
                              </div>

                              <div className='w-2/4 h-full flex justify-center items-center'>
                                   <img src="/image/without-g-removebg-preview.png" className=' w-5/6 h-5/6' alt="" />
                              </div>
                         </div>
              </SwiperSlide>
              <SwiperSlide>
                         <div className=' w-full h-full flex flex-row justify-center sm:gap-2 items-center bg-gradient-to-r from-fuchsia-200 to-cyan-700 p-3'>
                            
                              <div className='w-2/4 h-full flex justify-center items-center flex-col'> 
                                     <p className=' text-2xl lg:text-[50px] lg:pb-5 bg-gradient-to-r from-fuchsia-500 to-rose-500 bg-clip-text text-transparent font-bold'>India's Brand</p>
                                     <p className=' text-lg text-semibold text-black'>Fashion shopping </p>
                                     <span className=' w-24 h-6 border-2 rounded-lg px-2 text-xs flex justify-center items-center   border-fuchsia-500 gap-2 mt-5 text-black'><Link to="/home">Shopping</Link> <FaLongArrowAltRight/> </span>
                              </div>

                              <div className='w-2/4 h-full flex justify-center items-center'>
                                   <img src="/image/without-removebg-preview.png" className=' w-full h-full' alt="" />
                              </div>
                         </div>
              </SwiperSlide>

              <SwiperSlide>
                         <div className=' w-full h-full flex flex-row justify-center sm:gap-2 items-center bg-gradient-to-r from-slate-500 to-slate-800 p-3'>
                            
                              <div className='w-2/4 h-full flex justify-center items-center flex-col'> 
                                     <p className=' text-2xl lg:text-[50px] lg:mb-4 text-black font-bold'>India's Brand</p>
                                     <p className=' text-lg text-semibold text-black'>Fashion shopping </p>
                                     <span className=' w-24 h-6 border-2 rounded-lg px-2 text-xs flex justify-center items-center   border-fuchsia-500 gap-2 mt-5 text-black'><Link to="/home">Shopping</Link> <FaLongArrowAltRight/> </span>
                              </div>

                              <div className='w-2/4 h-full flex justify-center items-center'>
                                   <img src="/image/shop-removebg-preview.png" className=' w-full h-full' alt="" />
                              </div>
                         </div>
              </SwiperSlide>
              </Swiper>
      </section>

      <div className='w-full h-full p-2 md:p-6 bg-gray-200  '>
           <div className='w-full h-80 md:h-full  bg-white  flex justify-center flex-col items-center flex-wrap py-5'>
             <h1 className= ' text-[30px] lg:text-[40px] font-bold'>Browse by categories</h1>
              <div className=' w-full md:w-4/6 h-auto flex justify-evenly items-center py-4  md:py-10'>
             {
               Catego['cate-al3'].map((item,i)=>
                    <div className=' w-20 h-20  md:w-36 md:h-36  rounded-full text-center' key={item.name}>
                     <img  onClick={()=>{sendProd(item.name)}} className=' w-full h-full  md:w-36 md:h-36 shadow-2xl  rounded-full cursor-pointer  hover:scale-105 hover:border hover:border-pink-900 '  src={item.img} alt="" />
 
                      <span className=' uppercase mt-2 font-bold'>{item.name}</span>
                    </div>)
             }</div>
          </div>



           <div className='w-full h-auto bg-white  flex justify-evenly  flex-col items-center py-5  mt-10'>
              <h1 className= ' text-[35px] lg:text-[40px] font-bold'>Futures Products</h1>
               <div className='w-full h-full p-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center '>
               {
                       Data?<>
                        {
                         Data.ProductDetails.map((item,i)=>{
                              return item.featuresProduct==="fature"?<>
                                 <Link to="/view">
                                 <div onClick={()=>{setCateg(item.subcetegory)}} className=' sm:w-[270px] md:w-[290px] lg:w-[330px] h-[29 80px] text-center' key={i}>
                                        <img className='w-full h-full' src={item.img} alt="img" />
                                        <span className=' uppercase font-bold text-lg'>{item.cetegory}</span>
                                   </div>
                                 </Link>
                              </>:""
                         })
                        }
                       </>:""
                    }           
               </div>  
           </div>
      </div>
     
   </>
  )
}
