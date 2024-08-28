import React, {  useCallback, useContext, useEffect,useState } from 'react'
import Data from '../json_data/Data.json';
import Catego from '../json_data/Catego.json';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useCategory } from '../../context/createCont';
import { addToCart } from '../../context/store/slice/slice';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';






export const Home = () => {
    
            const navigate_=useNavigate()
            const [cetegory,setCetegroy]=useState(Catego)
            const [state,setState]=useState(Data)
            const {categ}=useCategory()
            const [product,setProduct]=useState()
            const dispatch = useDispatch();

            
            


          


            const sendComponent=(subcetegory)=>{
                  navigate_(`/view/${subcetegory}`)    
            }
              
            const addtocart = (prod)=>{
              dispatch(addToCart(prod))
              toast.success("Add to cart successfuly")
            }


      

            useEffect(()=>{ 
               window.scroll(0,0)
             categ!=null?setProduct(categ):setProduct(product)
            },[categ])

            
  return (
    <>
      <Toaster/>
          <div className=' w-full h-full  '> 

        
          <div className='w-full lg:h-full h-auto  shadow-2xl flex flex-col justify-evenly items-center sm:flex sm:flex-row sm:justify-evenly sm:items-center '>
                <div className=' w-full full  sm:w-2/6 h-12  flex justify-center items-center'>
                         <input type="search" placeholder='Search Items' className=' w-5/6 sm:w-3/4 h-8 border border-fuchsia-300 p-1 text-center text:sm rounded-md border-black shadow-md outline-none' onChange={(e)=>{setProduct(e.target.value)}} />
               </div>



               <div className=' w-full flex justify-center items-center flex-wrap flex-row p-4 gap-1  '>

               <div>
                      {
                        cetegory['cate-allProduct'].map((item,i)=> 
                                <>
                                  <button className='bg-fuchsia-200 text-purple-950 w-10  h-8 font-semibold text-[14px] cursor-pointer ' value={item.allproduct} onClick={(e)=>setProduct(e.target.value)} >All </button>
                               </>
                               )
                     } 
                </div>
               
                 <div>  
                      <select  onChange={(e)=>{setProduct(e.target.value)}} className=' h-8  outline-none bg-fuchsia-200 text-purple-950  w-full font-semibold text-sm md:px-5  cursor-pointer text-center uppercase text-[12]'  >
                        {
                          cetegory['cate-male'].map((item,i)=>
                                <>
                               <option value={item.electric}  className=' text-left text-sm uppercase text-purple-950'>{item.male}</option>
                               </>
                              )
                        }
                     </select>
                </div>


                  <div>  
                      <select  onChange={(e)=>{setProduct(e.target.value)}} className=' h-8   outline-none bg-fuchsia-200 text-purple-950  w-full text-sm font-semibold md:px-5   cursor-pointer text-center uppercase text-[12] ' >
                        {
                          cetegory['cate-female'].map((item,i)=>
                                <>
                               <option value={item.electric} className='text-left text-sm uppercase text-purple-950 '>{item.female}</option>
                               </>
                              )
                        }
                     </select>
                  </div> 


                  <div>  
                      <select  onChange={(e)=>setProduct(e.target.value)} className=' h-8  outline-none bg-fuchsia-200 text-purple-950  w-full text-sm font-semibold md:px-5   cursor-pointer text-center uppercase text-[12]'  >
                    
                        {
                          cetegory['cate-electric'].map((item,i)=>
                                <>
                               <option value={item.electric} className=' text-left text-sm uppercase text-purple-950'>{item.electric}</option>
                               </>
                              )
                        }
                     </select>
                  </div>

                  <div>  
                      <select  onChange={(e)=>setProduct(e.target.value)} className='  h-8 outline-none bg-fuchsia-200 text-purple-950  w-full text-sm font-semibold md:px-5  cursor-pointer text-center uppercase text-[12]'  >
                    
                        {
                          cetegory['cate-mobile'].map((item,i)=>
                                <>
                               <option value={item.electric} className=' text-left text-sm uppercase text-purple-950'>{item.mobile}</option>
                               </>
                              )
                        }
                     </select>
                  </div>


               </div>

          </div>

          <div className='w-full h-auto bg-white'>
             <div className=' w-full h-auto flex  justify-center items-center  '>  
                  {
                 
                    <div className='w-full h-auto md:w-5/6 lg:w-5/6 bg-fuchsia-200 grid max-[300px]:grid-cols-1 max-[639px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:grid-cols-3 xl:grid-cols-3 p-4 gap-4 justify-items-center '>
                        {
                          state && state.ProductDetails.map((item,i)=>{
                              return(
                                <>
                                <div className=' max-[300px]:w-[200px] max-[400px]:w-[165px] max-[500px]:w-[180px] max-[640px]:w-[210px] max-[639px]:h-[220px] sm:w-[290px] md:w-[240px] lg:w-[300px] xl:w-[320px] sm:h-[400px] bg-white  shadow-lg pb-3' >
                                       <div className='w-full h-5/6  ' onClick={()=>{sendComponent(item.subcetegory)}}>
                                           <img className=' w-full h-full' src={item.img} alt="" />
                                       </div>
                                       <div className=' w-full h-1/6  grid grid-rows-2'>
                                             <div className='h-8 w-full grid grid-cols-2 '>
                                                    <div className=' flex justify-center items-center gap-1'>
                                                        <th className='text-sm font-semibold text-purple-950'>Price</th>
                                                        <td className=' text-sm font-semibold text-purple-950'>{item.Price}</td>
                                                    </div>

                                                    <div className=' w-auto flex justify-center items-center h-full uppercase  text-xs font-semibold text-center'>
                                                        <span className='text-purple-950'>{item.cetegory}</span>
                                                    </div>
                                             </div>

                                             <div className=' grid  grid-cols-2 max-[640px]:hidden'>
                                                  <div className='w-full flex justify-center items-center '><button className='border  sm:py-[2px] sm:px-2  text-[12px] font-semibold rounded-xl text-purple-950 border-fuchsia-400'>view</button></div>
                                                  <div className='w-full flex justify-center items-center '><button className='border  sm:py-[2px] sm:px-2  text-[12px] font-semibold rounded-xl text-purple-950 border-fuchsia-400'>Add to cart</button></div>

                                             </div>


                                          
                                       </div>
                               </div>
                                </>
                              )
                          })
                        }
                      </div>
              }
         </div>
       </div>
          
          </div>
    </>
  )
}
