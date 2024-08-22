import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const Dashboard = () => {
  return (
   <>
      <section className=' lg:h-[85vh] h-[40vh]'>
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
                         <div className=' w-full h-full flex flex-row justify-center sm:gap-2 items-center bg-gradient-to-r from-violet-200 to-pink-200 p-3'>
                            
                              <div className='w-2/4 h-full flex justify-center items-center flex-col'> 
                                     <p className=' text-2xl lg:text-[50px] lg:py-2 bg-gradient-to-r from-gray-900 to-lime-400 bg-clip-text text-transparent font-bold'>India's Brand</p>
                                     <p className=' text-lg text-semibold text-black'>Fashion shopping </p>
                                     <span className=' w-20 h-6 border rounded-lg px-1 text-xs flex justify-center items-center bg-gradient-to-r from-fuchsia-300 to-pink-100  border-fuchsia-700 gap-2 mt-5 text-black'><Link to="/home">Shopping</Link> <FaLongArrowAltRight/> </span>
                              </div>

                              <div className='w-2/4 h-full flex justify-center items-center'>
                                   <img src="/image/without-g-removebg-preview.png" className=' w-5/6 h-5/6' alt="" />
                              </div>
                         </div>
              </SwiperSlide>
              <SwiperSlide>
                         <div className=' w-full h-full flex flex-row justify-center sm:gap-2 items-center bg-gradient-to-r from-fuchsia-500 to-cyan-500 p-3'>
                            
                              <div className='w-2/4 h-full flex justify-center items-center flex-col'> 
                                     <p className=' text-2xl text-black font-bold'>India's Brand</p>
                                     <p className=' text-lg text-semibold text-black'>Fashion shopping </p>
                                     <span className=' w-20 h-6 border rounded-lg px-1 text-xs flex justify-center items-center bg-gradient-to-r from-fuchsia-300 to-pink-100  border-fuchsia-700 gap-2 mt-5 text-black'><Link to="/home">Shopping</Link> <FaLongArrowAltRight/> </span>
                              </div>

                              <div className='w-2/4 h-full flex justify-center items-center'>
                                   <img src="/image/without-removebg-preview.png" className=' w-full h-full' alt="" />
                              </div>
                         </div>
              </SwiperSlide>

              <SwiperSlide>
                         <div className=' w-full h-full flex flex-row justify-center sm:gap-2 items-center bg-gradient-to-r from-slate-500 to-slate-800 p-3'>
                            
                              <div className='w-2/4 h-full flex justify-center items-center flex-col'> 
                                     <p className=' text-2xl text-black font-bold'>India's Brand</p>
                                     <p className=' text-lg text-semibold text-black'>Fashion shopping </p>
                                     <span className=' w-20 h-6 border rounded-lg px-1 text-xs flex justify-center items-center bg-gradient-to-r from-fuchsia-300 to-pink-100  border-fuchsia-700 gap-2 mt-5 text-black'><Link to="/home">Shopping</Link> <FaLongArrowAltRight/> </span>
                              </div>

                              <div className='w-2/4 h-full flex justify-center items-center'>
                                   <img src="/image/shop-removebg-preview.png" className=' w-full h-full' alt="" />
                              </div>
                         </div>
              </SwiperSlide>
              </Swiper>
      </section>
   </>
  )
}
