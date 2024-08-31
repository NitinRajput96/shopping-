import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, clearCartItems, decreaseCardItem, removeSingleCart } from '../../context/store/slice/slice';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';




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
     
    // const clearCart=(item)=>{
    //   dispatch(clearCartItems(item))
    //   toast.success("Delete all Items")

    // }
      
     
  return (
    <>
    <Toaster/>
         <div className='w-full h-auto  '>
              <div className='w-full h-auto flex justify-center items-center flex-col   '>
                  <div className='w-full text-center text-lg font-bold '>Shopping cart</div>
                  <div className=' w-11/12 font-bold text-sm pl-4 '>Your Items</div>
                  <div className='w-11/12  py-2 h-auto grid grid-rows-1  justify-items-center  md:grid-cols-3 gap-10'>

                   {
                     card.cartItems.length>0?<>
                     {
                      <div className=' p-3 w-full shadow-xl  h-auto py-3 md:col-span-2  bg-white grid grid-cols-3 gap-5  sm:grid-cols-5  lg:grid-cols-9   '>
                        {
                          card.cartItems.map((item,i)=>

                          <div className=' w-full h-[100px] shadow-sm  flex justify-start items-center flex-col  bg-gray-50 py-1 px-1  '>
                            
                                <img className=' w-full h-4/6   ' src={item.img} alt="" />
                            
                             <span className=' mt-[2px] w-full h-1/6 flex justify-center items-center  text-[10px] font-semibold '>{item.Price*item.cartTotalQty}Rs</span>
                             <span className='  w-full h-1/6 flex justify-evenly items-center  '>
                                 <button onClick={()=>{decreaseItem(item)}} className=' w-full h-full text-md    flex justify-center items-center'>-</button>
                                 <span   className='w-full h-full text-[10px]  font-semibold   flex justify-center items-center'>{item.cartTotalQty}</span>
                                 <button onClick={()=>{increament(item)}} className='w-full h-full text-md    flex justify-center items-center'>+</button>
                             </span>
                          </div>
                        )
                        }
                        <div className=' bg-gray-100 w-full h-10 col-span-full flex justify-end items-center'>
                           <button className=' mr-3 w-20 full border border-pink-200 ' >Clear cart</button>
                          </div>
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
                    <div className=' w-full   flex justify-center items-center flex-col shadow-md bg-gray-50  p-3 sm:h-full '>
                           <p className=' w-11/12 border-b-2 pb-2 text-center font-bold'>Final payment</p>
                           
                                <table className='w-full m-auto mt-4 flex justify-center items-center flex-col gap-1'>
                                       <div className=' w-full   grid grid-cols-2 justify-items-center '> 
                                         <th className=' text-gray-500 text-sm font-semibold'>
                                             Original price
                                         </th>
                                         <td>
                                            1200000 Rs
                                         </td>
                                       </div>

                                       <div className=' w-full  grid grid-cols-2 justify-items-center '> 
                                         <th className=' text-gray-500 text-sm font-semibold'>
                                             Shippingn fee
                                         </th>
                                         <td className=' text-green-600 font-semibold'>
                                             free
                                         </td>
                                       </div>
                                       <div className=' w-11/12 border-b-2'></div>

                                       <div className=' w-full  grid grid-cols-2 justify-items-center '> 
                                         <th className=' text-black text-sm font-semibold'>
                                             Total Payment
                                         </th>
                                         <td className=' text-green-600 font-semibold'>
                                             free
                                         </td>
                                       </div>
                                       <div className='w-full grid grid-cols-1 justify-items-center items-center'>
                                            <button className=' w-11/12 h-7 bg-blue-500 rounded-md text-sm text-white font-semibold '>Proceed to Checkout</button>
                                            <span className=' text-gray-600'>or</span>
                                           <span className=' text-[14px] font-semibold underline'>Continue Shopping</span>
                                         
                                       </div>

                                      
                                </table>
                           
                   </div>:""
                   }
                      
                   </div>
                


              </div>
             
         </div>
    </>
  )
}
