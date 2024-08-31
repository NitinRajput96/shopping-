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
              <div className='w-full h-screen '>
                  <div className='w-full text-center text-lg font-bold '>Shopping cart</div>
                  <div className=' font-bold text-sm pl-4'>Your Items</div>
                  <div className='w-full flex justify-center items-center flex-col gap-3'>
                   {
                     card.cartItems.length>0?<>
                     {
                      <div className=' px-2 max-[640px]:w-full sm:w-3/6  border h-auto py-3  bg-white grid grid-cols-3 justify-items-center gap-3  items-center '>
                        {
                          card.cartItems.map((item,i)=>

                          <div className='w-11/12 border h-28 flex justify-center gap-1 flex-col bg-white  p-4   items-center'>
                             <img className=' w-full h-16' src={item.img} alt="" />
                             <span className='text-xs font-bold'>{item.Price*item.cartTotalQty}Rs</span>
                             <div className='w-full h-6 m-0 grid grid-cols-3 justify-items-center items-center  '>
                                 <button onClick={()=>{decreaseItem(item)}} className='text-lg w-3/6 h-4/6 font-bold  shadow-2xl flex justify-center items-center'>-</button>
                                 <span   className='text-sm w-3/6 h-4/6 font-bold  shadow-2xl flex justify-center items-center'>{item.cartTotalQty}</span>
                                 <button onClick={()=>{increament(item)}} className='text-lg w-3/6 h-4/6 font-bold  shadow-2xl flex justify-center items-center'>+</button>
                             </div>
                          </div>
                        )
                        }
                      </div>
                     }
                     </>:
                     <div className=' w-11/12  h-52 flex justify-center items-center flex-col gap-2 mt-28 border-2  '>
                               <p className=''> There is no items please shopping</p>
                               <Link className=' shadow-md px-2 border rounded-sm border-fuchsia-400' to="/home">Shopping</Link>
                     </div>
                   }
                   <div className='w-11/12 border h-52  '></div>
                   </div>
                


              </div>
             
         </div>
    </>
  )
}
