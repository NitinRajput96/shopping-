import React, {   useEffect,useState } from 'react'
import Data from '../json_data/Data.json';
import Catego from '../json_data/Catego.json';
import { useNavigate} from 'react-router-dom';
import { useCategory } from '../../context/createCont';
import { addToCart } from '../../context/store/slice/slice';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { FaCartArrowDown } from "react-icons/fa";







export const Home = () => {
    
            const navigate_=useNavigate()
            const [cetegory,setCetegroy]=useState(Catego)
            const [state,setState]=useState(Data)
            const {categ,setCateg}=useCategory()
            const [product,setProduct]=useState()
            const dispatch = useDispatch();

          
            const sendComponent=(subcetegory)=>{
                 setCateg(subcetegory)
              navigate_("/view")   
            }
              
            const addtocart = (prod)=>{
              dispatch(addToCart(prod))
              toast.success("Add to cart successfuly")
            }

            const getCateg=()=>{
               Data.ProductDetails.filter((item)=>{item.Department===categ?setProduct(categ):""})
            }
            const getCateElet=()=>{
              Data.ProductDetails.filter((item)=>{item.cetegory===categ?setProduct(categ):""})
           }
          
            
            useEffect(()=>{
              window.scroll(0,0)
               getCateg()
               getCateElet()
            },[categ])
           
            
  return (
    <>
  
      <Toaster/>
          <div className=' w-full h-auto bg-white  '> 

          <div className='w-full     md:grid grid-cols-1  justify-items-center items-center '>
          <div className='w-full lg:my-2   lg:w-5/6 border-4 h-20 md:h-14 max[640px]:mt-2 max-[500px]:py-5 border-fuchsia-200 max-[500px]:border-none   rounded-md  flex justify-center gap-2 items-center max-[500px]:flex-col '>
                    <div className=' w-full lg:w-2/6  h-12 md:pl-2  bg-white flex  justify-start max-[500px]:justify-center  items-center '>
                            <input type="search" placeholder='Search Items' className='  w-11/12 sm:w-5/6  h-8 border border-fuchsia-300 p-1 text-center text:sm rounded-sm  shadow-md outline-none' onChange={(e)=>{setProduct(e.target.value)}} />
                   </div>



               <div className='  w-full max-[640px]:w-full sm:w-11/12 lg:w-4/6   flex justify-evenly items-center    max-[500px]:flex-warp  '>

               <div className='w-[75px]'>
                      {
                        cetegory['cate-allProduct'].map((item,i)=> 
                                <>
                                  <button className='bg-gradient-to-r from-violet-100 to-pink-100 hover:text-orange-600    text-purple-950 w-full   sm:text-md h-8 font-semibold  max-[500px]:text-[12px] cursor-pointer  ' value={item.allproduct} onClick={(e)=>setProduct(e.target.value)} key={Math.random()} >All </button>
                               </>
                               )
                     } 
                </div>
               
                 <div  className='w-[75px] '>  
                      <select  onChange={(e)=>{setProduct(e.target.value)}} className=' h-8  outline-none bg-gradient-to-r from-violet-100 to-pink-100 hover:text-orange-600  text-purple-950  w-full font-semibold  max-[500px]:text-[12px]  sm:text-md cursor-pointer text-center uppercase text-[12]'  >
                      <option className='bg-black text-white font-bold' >Male</option>
                        {
                          cetegory['cate-male'].map((item,i)=>
                                <>
                               <option value={item.electric}  className=' text-left text-sm  uppercase text-purple-950' key={Math.random()}>{item.male}</option>
                               </>
                              )
                        }
                     </select>
                </div>


                  <div  className='w-[75px]'>  
                      <select  onChange={(e)=>{setProduct(e.target.value)}} className=' h-8 bg-gradient-to-r from-violet-100 to-pink-100  outline-none hover:text-orange-600   text-purple-950 w-full  max-[500px]:text-[12px] sm:text-md font-semibold   cursor-pointer text-center uppercase text-[12] ' >
                      <option className='bg-black text-white font-bold' >Female</option>
                        {
                          cetegory['cate-female'].map((item,i)=>
                                <>
                               <option value={item.electric} className='text-left text-sm  uppercase text-purple-950 ' key={Math.random()}>{item.female}</option>
                               </>
                              )
                        }
                     </select>
                  </div> 


                  <div  className='w-[75px]'>  
                      <select  onChange={(e)=>setProduct(e.target.value)} className=' h-8  outline-none bg-gradient-to-r from-violet-100 to-pink-100 hover:text-orange-600  text-purple-950 w-full  max-[500px]:text-[12px] sm:text-md font-semibold  cursor-pointer text-center uppercase text-[12]'  >
                      <option className='bg-black text-white font-bold' >Electric</option>
                        {
                          cetegory['cate-electric'].map((item,i)=>
                                <>
                               <option value={item.electric} className='  text-left text-sm uppercase text-purple-950' key={Math.random()}>{item.electric}</option>
                               </>
                              )
                        }
                     </select>
                  </div>

                  <div  className='w-[75px]'>  
                       
                      <select  onChange={(e)=>setProduct(e.target.value)} className='  h-8 outline-none bg-gradient-to-r from-violet-100 to-pink-100 hover:text-orange-600   text-purple-950 w-full     max-[500px]:text-[12px] sm:text-md font-semibold   cursor-pointer text-center uppercase text-[12]'  >
                        <option className='bg-black text-white font-bold' >Mobile</option>
                        {
                          cetegory['cate-mobile'].map((item,i)=>
                                <>
                               <option value={item.electric} className=' text-left text-sm uppercase text-purple-950' key={Math.random()}>{item.mobile}</option>
                               </>
                              )
                        }
                     </select>
                  </div>


               </div>

               </div>
            </div>
         

          <div className='w-full h-auto  '>
             <div className=' w-full h-auto flex  justify-center items-center  '>  
                  {
                 
                    <div className='w-full h-auto md:w-11/12 lg:w-5/6   grid max-[300px]:grid-cols-1 max-[639px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 p-4 gap-4 justify-items-center '>
                        {
                          product?<>
                            {
                               state.ProductDetails.map((item,i)=>{
                              return(item.Department===product?
                                <div className=' max-[300px]:w-[200px] max-[400px]:w-[165px] max-[500px]:w-[180px] max-[640px]:w-[210px] max-[639px]:h-[220px] sm:w-[290px] md:w-[225px] lg:w-[270px] xl:w-[340px] 2xl:w-[320px] sm:h-[400px] bg-white  shadow-lg pb-3' key={item.id} >
                                       <div className='w-full h-5/6  ' onClick={()=>{sendComponent(item.subcetegory)}}>
                                           <img className=' w-full h-full p-4' src={item.img} alt="" />
                                       </div>
                                       <div className=' w-full h-1/6  grid grid-rows-2'>
                                             <div className='h-8 w-full grid grid-cols-2 '>
                                                    <div className=' flex justify-center items-center gap-1'>
                                                       <table>
                                                       <th className='text-sm font-semibold text-purple-950'>Price</th>
                                                       <td className=' text-sm font-semibold text-purple-950'>{item.Price}</td>
                                                       </table>
                                                    </div>

                                                    <div className='  w-auto flex justify-center items-center h-full uppercase   lg:text-2xl  font-semibold text-center'>
                                                        <span className='text-purple-950 sm:hidden  hover:text-pink-400 ' onClick={()=>{addtocart(item)}} ><FaCartArrowDown/></span>
                                                        <button onClick={()=>{addtocart(item)}} className=' max-[639px]:hidden w-3/6 h-4/6 border text-[10px] font-semibold rounded-xl text-purple-950 border-fuchsia-300 hover:bg-gradient-to-r from-violet-200 to-pink-200 flex justify-center items-center' >Add to cart</button>
                                                    </div>
                                             </div>

                                       


                                          
                                       </div>
                               </div>
                               :""
                               
                              )
                              })
                            }
                            {
                               state.ProductDetails.map((item,i)=>{
                              return( item.cetegory===product?
                                <div className=' max-[300px]:w-[200px] max-[400px]:w-[165px] max-[500px]:w-[180px] max-[640px]:w-[210px] max-[639px]:h-[220px] sm:w-[290px] md:w-[225px] lg:w-[270px] xl:w-[340px] 2xl:w-[320px] sm:h-[400px] bg-white   pb-3' key={item.id}  >
                                       <div className='w-full h-5/6 shadow-md  bg-gray-50   ' onClick={()=>{sendComponent(item.subcetegory)}}>
                                           <img className=' w-full h-full p-4' src={item.img} alt="" />
                                       </div>
                                       <div className=' w-full h-1/6  grid grid-rows-2'>
                                             <div className='h-8 w-full grid grid-cols-2 '>
                                                    <div className=' flex justify-center items-center gap-1'>
                                                       <table>
                                                       <th className='text-sm font-semibold text-purple-950'>Price</th>
                                                       <td className=' text-sm font-semibold text-purple-950'>{item.Price}</td>
                                                       </table>
                                                    </div>

                                                    <div className='  w-auto flex justify-center items-center h-full uppercase   lg:text-2xl  font-semibold text-center'>
                                                        <span className='text-purple-950 sm:hidden  hover:text-pink-400 ' onClick={()=>{addtocart(item)}} ><FaCartArrowDown/></span>
                                                        <button onClick={()=>{addtocart(item)}} className=' max-[639px]:hidden w-3/6 h-4/6 border text-[10px] font-semibold rounded-xl text-purple-950 border-fuchsia-300 hover:bg-gradient-to-r from-violet-200 to-pink-200 flex justify-center items-center' >Add to cart</button>
                                                    </div>
                                             </div>



                                          
                                       </div>
                               </div>
                              :""
                               
                              )})
                            }
                            {
                               state.ProductDetails.map((item,i)=>{
                              return( item.allproduct1===product?
                                <div className=' max-[300px]:w-[200px] max-[400px]:w-[165px] max-[500px]:w-[180px] max-[640px]:w-[210px] max-[639px]:h-[220px] sm:w-[290px] md:w-[225px] lg:w-[270px] xl:w-[340px] 2xl:w-[320px] sm:h-[400px]  bg-white   pb-3' key={item.id} >
                                       <div className='w-full h-5/6 shadow-md  bg-gray-50   ' onClick={()=>{sendComponent(item.subcetegory)}}>
                                           <img className=' w-full h-full p-4' src={item.img} alt="" />
                                       </div>
                                       <div className=' w-full h-1/6  grid grid-rows-2'>
                                             <div className='h-8 w-full grid grid-cols-2 '>
                                                    <div className=' flex justify-center items-center gap-1'>
                                                       <table>
                                                       <th className='text-sm font-semibold text-purple-950'>Price</th>
                                                       <td className=' text-sm font-semibold text-purple-950'>{item.Price}</td>
                                                       </table>
                                                    </div>

                                                    <div className='  w-auto flex justify-center items-center h-full uppercase   lg:text-2xl  font-semibold text-center'>
                                                        <span className='text-purple-950 sm:hidden  hover:text-pink-400 ' onClick={()=>{addtocart(item)}} ><FaCartArrowDown/></span>
                                                        <button onClick={()=>{addtocart(item)}} className=' max-[639px]:hidden w-3/6 h-4/6 border text-[10px] font-semibold rounded-xl text-purple-950 border-fuchsia-300 hover:bg-gradient-to-r from-violet-200 to-pink-200 flex justify-center items-center' >Add to cart</button>
                                                    </div>
                                             </div>

                                            


                                          
                                       </div>
                               </div>
                              :""
                               
                              )})
                            }
                          </>:
                           state && state.ProductDetails.map((item,i)=>{
                              return(
                                
                                <div className=' max-[300px]:w-[200px] max-[400px]:w-[165px] max-[500px]:w-[180px] max-[640px]:w-[210px] max-[639px]:h-[220px] sm:w-[290px] md:w-[225px] lg:w-[270px] xl:w-[340px] 2xl:w-[320px] sm:h-[400px] bg-white   pb-3' key={item.id} >
                                       <div className='w-full h-5/6  shadow-md  bg-gray-50 ' onClick={()=>{sendComponent(item.subcetegory)}}>
                                           <img className=' w-full h-full p-4 ' src={item.img} alt="" />
                                       </div>
                                       <div className=' w-full h-1/6  grid grid-rows-2'>
                                             <div className='h-10 w-full grid grid-cols-2  '>
                                                    <div className=' flex justify-center items-center gap-1'>
                                                       <table>
                                                       <th className='text-sm font-semibold text-purple-950'>Price</th>
                                                       <td className=' text-sm font-semibold text-purple-950'>{item.Price}</td>
                                                       </table>
                                                    </div>

                                                    <div className='  w-auto flex justify-center items-center h-full uppercase   lg:text-2xl  font-semibold text-center'>
                                                        <span className='text-purple-950 sm:hidden  hover:text-pink-400 ' onClick={()=>{addtocart(item)}} ><FaCartArrowDown/></span>
                                                        <button onClick={()=>{addtocart(item)}} className=' max-[639px]:hidden w-3/6 h-4/6 border text-[10px] font-semibold rounded-xl text-purple-950 border-fuchsia-300 hover:bg-gradient-to-r from-violet-200 to-pink-200 flex justify-center items-center' >Add to cart</button>
                                                    </div>
                                             </div>



                                          
                                       </div>
                               </div>
                                
                              )})
                          
                        
                        }
                      </div>
              }
         </div>
       </div>
          
          </div>
    </>
  )
}
