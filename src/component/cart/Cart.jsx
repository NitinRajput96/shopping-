import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AiFillDelete } from "react-icons/ai";
import { addToCart, decreaseCardItem, removeSingleCart } from '../../context/store/slice/slice';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { FaShopify } from "react-icons/fa6";
import { RxDividerVertical } from 'react-icons/rx';
import Data from '../json_data/Data.json'


export const Cart = () => {

     const card=useSelector((state)=>state.cart)
     const dispatch=useDispatch()
     const [page,setPage]=useState(1)

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
         <div className='w-full h-auto  '>
              <div className='w-full h-auto flex justify-center items-center flex-col  '>
                  <div className='w-full text-center text-lg font-bold '>Shopping cart</div>
                  <div className=' w-11/12 font-bold text-sm pl-4 '>Your Items</div>
                  <div className='w-11/12  py-2 h-auto sm:h-[70vh]     grid grid-rows-1  justify-items-center  sm:grid-cols-3 gap-3'>

                   {
                     card.cartItems.length>0?<>
                     {
                      <div className=' p-3 w-full shadow-xl  h-auto py-3 sm:col-span-2  bg-white grid grid-cols-3 gap-5  sm:grid-cols-5  lg:grid-cols-9   '>
                        {
                          card.cartItems.map((item,i)=>

                          <div className=' w-full h-[100px] shadow-sm  flex justify-start items-center flex-col  bg-gray-50 py-1 px-1  '>
                            
                                <img className=' w-full h-4/6   ' src={item.img} alt="" />
                            
                             <span className=' mt-[2px] w-full h-1/6 flex justify-center items-center  text-[10px] font-semibold '>{item.Price*item.cartTotalQty}Rs</span>
                             <span className='  w-full h-1/6 flex justify-evenly items-center  '>
                                 <button onClick={()=>{decreaseItem(item)}} className=' w-full h-full text-lg  font-bold  shadow-2xl flex justify-center items-center'>-</button>
                                 <span   className='w-full h-full text-sm  font-semibold   flex justify-center items-center'>{item.cartTotalQty}</span>
                                 <button onClick={()=>{increament(item)}} className='w-full h-full text-lg font-bold  shadow-2xl flex justify-center items-center'>+</button>
                             </span>
                          </div>
                        )
                        }
                      </div>
                     }
                     </>:
                     <div className='  max-[639px]:w-11/12   sm:h-3/6  h-52 flex justify-center items-center flex-col gap-2 mt-28 border-2  '>
                               <p className=''> There is no items please shopping</p>
                               <Link className=' shadow-md px-2 border rounded-sm border-fuchsia-400' to="/home">Shopping</Link>
                     </div>
                   }

                   {
                    card.cartItems.length>0?
                    <div className=' w-full  shadow-xl p-3 h-52 '>
                           <p className=' text-center font-bold'>Final payment</p>
                   </div>:""
                   }
                      
                   </div>
                


              </div>
             
         </div>
    </>
  )
}
