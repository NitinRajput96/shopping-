import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AiFillDelete } from "react-icons/ai";
import { addToCart, decreaseCardItem, removeSingleCart } from '../../context/store/slice/slice';
import toast, { Toaster } from 'react-hot-toast';


export const Cart = () => {

     const card=useSelector((state)=>state.cart)
     const dispatch=useDispatch()

    const decreaseItem=(item)=>{
              dispatch(decreaseCardItem(item))
              toast.success("Decrease item quantity")
    }
    const increament=(item)=>{
       dispatch(addToCart(item))
       toast.success("Increase item quantity")
    }

    const removeSingpro=(item)=>{
       dispatch(  removeSingleCart(item))
       toast.success(" Delete item form cart")
    }
     
      
     
  return (
    <>
    <Toaster/>
      <div className='w-full h-[90vh]  pt-1  '>
          <div className=' w-full  h-10 border-b text-md md:text-2xl font-bold flex justify-center items-center'>
                   Shopping card
          </div>
          <div className=' w-full h-4/6   flex flex-col justify-center items-center px-2 sm:px-20 '>
                 <div className=' w-full md:w-5/6 pl-7 h-8 text-left text-md md:text-lg font-semibold'>
                        Card items
                  </div>
                  <div className='w-full md:w-5/6 h-[380px] flex justify-center items-center rounded-md bg-gray-100 shadow-md flex-col z-20  overflow-y-auto  '>      
                    {
                      card.cartItems===0?<>
                          <h1 className=' text-lg font-bold'>Continue to shopping </h1>
                      </>:
                      card.cartItems.map((item,i)=>{
                        return(
                          <div className=' z-0 w-full h-16 md:w-5/6 shadow-lg m-1 flex justify-evenly items-center rounded-md bg-white md:flex md:justify-evenly'>
                             <img className=' w-16 border shadow-2xl rounded-full   h-full' src={item.img} alt="" />
                              <div className=' w-auto h-full flex justify-center items-center flex-col max-[400px]:hidden '>
                                  <th className=' text-xs'>Product name</th>
                                  <td>T-shirt</td>
                              </div>


                              <div className='w-auto h-full flex justify-center items-center flex-col'>
                                  <th className=' text-xs'>Quantity</th>
                                  <span className='w-20 h-auto border font-bold flex justify-evenly items-center  '>
                                      <span onClick={()=> decreaseItem(item)}>-</span>
                                      <span>{item.cartTotalQty}</span>
                                      <span onClick={()=>increament(item)}>+</span>
                                  </span>
                              </div>


                              <div className='w-auto h-full flex justify-center items-center flex-col'>
                                     <th className='text-xs'>Price</th>
                                     <td>{item.Price*item.cartTotalQty}</td>
                              </div>

                              <div className='w-auto h-full flex justify-center items-center'>
                                   <span className=' hover:text-red-600 cursor-pointer text-[20px]' onClick={()=>removeSingpro(item)}><AiFillDelete/></span>
                              </div>
                        </div> 
                        )
                      })
                    }
                 </div>          
          </div>
      </div>
    </>
  )
}
