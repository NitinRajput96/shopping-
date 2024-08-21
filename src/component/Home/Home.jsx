import React, { useCallback, useEffect,useRef,useState } from 'react'
import Data from '../json_data/Data.json';
import Catego from '../json_data/Catego.json';
import { useNavigate, useParams } from 'react-router-dom';


export const Home = () => {
    
            const {item}=useParams()
            const reference=useRef()
            const [cetegory,setCetegroy]=useState(Catego)
            const [state,setState]=useState(Data)
            const [product,setProduct]=useState()
            const navigate_=useNavigate()
            
           

            const sendComponent=(subcetegory)=>{
                  navigate_(`/view/${subcetegory}`)    
            }
              
      
            useEffect(()=>{ 
               window.scroll(0,0)
             
            },[sendComponent])

            
  return (
    <>
          <div className=' w-full h-auto   '>

        
          <div className='w-full lg:h-full h-auto bg-gradient-to-r from-fuchsia-400 to-pink-200 shadow-2xl flex flex-col justify-evenly items-center sm:flex sm:flex-row sm:justify-evenly sm:items-center '>
                <div className=' w-full full  sm:w-2/6 h-12  flex justify-center items-center'>
                         <input type="search" placeholder='Search Items' className=' w-5/6 sm:w-3/4 h-6 p-1 text-center text:sm rounded-md border-black shadow-md outline-none' onChange={(e)=>{setProduct(e.target.value)}} />
               </div>



               <div className=' w-full flex justify-center items-center flex-wrap flex-row p-4 gap-1  '>

               <div>
                      {
                        cetegory['cate-allProduct'].map((item,i)=> 
                                <>
                                  <button className='bg-fuchsia-800 w-8  font-semibold text-[14px] cursor-pointer text-white' value={item.allproduct} onClick={(e)=>setProduct(e.target.value)} >All </button>
                               </>
                               )
                     } 
                </div>
               
                 <div>  
                      <select name="" id="" onChange={(e)=>{setProduct(e.target.value)}} className='  outline-none bg-fuchsia-800 w-full font-semibold text-sm md:px-5  text-white cursor-pointer text-center uppercase text-[12]'  >
                        {
                          cetegory['cate-male'].map((item,i)=>
                                <>
                               <option value={item.electric}  className=' text-left text-sm uppercase text-white '>{item.male}</option>
                               </>
                              )
                        }
                     </select>
                </div>


                  <div>  
                      <select name="" id="" onChange={(e)=>{setProduct(e.target.value)}} className='   outline-none bg-fuchsia-800 w-full text-sm font-semibold md:px-5  text-white cursor-pointer text-center uppercase text-[12] ' >
                    

                        {
                          cetegory['cate-female'].map((item,i)=>
                                <>
                               <option value={item.electric} className='text-left text-sm uppercase text-white '>{item.female}</option>
                               </>
                              )
                        }
                     </select>
                  </div> 


                  <div>  
                      <select name="" id="" onChange={(e)=>setProduct(e.target.value)} className='  outline-none bg-fuchsia-800 w-full text-sm font-semibold md:px-5  text-white cursor-pointer text-center uppercase text-[12]'  >
                    
                        {
                          cetegory['cate-electric'].map((item,i)=>
                                <>
                               <option value={item.electric} className=' text-left text-sm uppercase text-white'>{item.electric}</option>
                               </>
                              )
                        }
                     </select>
                  </div>
               </div>

          </div>



          <div className='w-full h-auto bg-white'>
             <div className=' w-full h-fit flex items-center  flex-wrap justify-evenly flex-col sm:flex-row sm:p-2 border-black '>    

              {
               product?
                 <>
                  {
                        state.ProductDetails.filter((item)=>{
                          return item.cetegory===product?item:""})
                      .map((item,i)=>{
                      return(
                        <>
                        <div className=' w-5/6 h-2/6   sm:w-4/6 md:w-2/5 sm:flex sm:flex-row  shadow-xl rounded-2xl border-grey-500 bg-gradient-to-r from-fuchsia-400 to-pink-100 m-2 flex items-center justify-evenly flex-col hover:scale-105 '  key={item.id}>
                            <div className=' w-full  '>
                                <img className=' rounded-2xl w-full p-1 h-56 ' src={item.img} alt="" />
                            </div>

                          <div className='w-full h-48  flex justify-evenly items-center flex-col text-center px-1 md:flex md:justify-evenly md:items-center md:text-[11px]'>
                            <div className='w-[200px] font-bold text-[12px] sm:w-full sm:text-[13px] h-16 flex justify-center items-center'>{item.Product}</div>
                            <div className='w-full mt-2 h-26 sm:h-36 sm:mt-5 '>
                                
                                {
                                  item['Band_material type']?<>
                                  <div className=' flex justify-center items-center'>
                                        <th className='text-[12px]  max-lg:text-xs w-2/4 '>Band material typer</th>
                                        <p className='text-[11px]  max-lg:text-xs w-2/4'>{item['Band_material type']}</p>   
                                    </div>
                                  </>:""
                                }           
                                                  
                                {
                                  item.Price?<>
                                  <div className=' flex justify-center items-center'>
                                        <th className='text-[12px]   max-lg:text-xs w-2/4'>Price</th>
                                        <p className='text-[12px]  font-semibold max-lg:text-xs w-2/4'><span className='bg-bg-fuchsia-700 px-3'>{item.Price+"$"}</span></p>
                                    </div>
                                  </>:""
                                }
                                {
                                  item.Department?<>
                                  <div className=' flex justify-center items-center'>
                                        <th className='text-[12px]   max-lg:text-xs w-2/4'>Department</th>
                                        <p className='text-[12px]  max-lg:text-xs w-2/4'>{item.Department}</p>
                                    </div>
                                  </>:""
                                }
                          </div>
                            
                          <div className='flex justify-between items-center w-full px-2'>
                            <button className=' text-white text-[11px] font-semibold bg-fuchsia-700 rounded-md p-1 w-12 ' onClick={()=>{sendComponent(item.subcetegory)}} >View</button>
                            <button className=' text-white text-[11px] font-semibold bg-fuchsia-700 p-1 w-28 sm:w-20 rounded-md '>Add to cart</button>
                            </div>
                          
                          </div>
                    </div>
                        </>
                      )
                    })
                 }

                  {
                    state.ProductDetails.filter((item)=>{
                      return item.allproduct1===product?item:""
                    }).map((item,i)=>{
                      return(
                        <>
                        <div className=' w-5/6 h-2/5   sm:w-4/6 md:w-2/5 sm:flex sm:flex-row  shadow-xl rounded-2xl border-grey-500 bg-gradient-to-r from-fuchsia-400 to-pink-100 m-2 flex items-center justify-evenly flex-col hover:scale-105  '  key={item.id}>
                            <div className=' w-full  '>
                                <img className=' rounded-2xl w-full p-1 h-56 ' src={item.img} alt="" />
                            </div>

                          <div className='w-full h-48  flex justify-evenly items-center flex-col text-center px-1 md:flex md:justify-evenly md:items-center md:text-[11px]'>
                            <div className='w-[200px] font-bold text-[12px] sm:w-full sm:text-[13px] h-16 flex justify-center items-center'>{item.Product}</div>
                            <div className='w-full mt-2 h-26 sm:h-36 sm:mt-5 '>
                                
                                {
                                  item['Band_material type']?<>
                                  <div className=' flex justify-center items-center'>
                                        <th className='text-[12px]  max-lg:text-xs w-2/4 '>Band material typer</th>
                                        <p className='text-[11px]  max-lg:text-xs w-2/4'>{item['Band_material type']}</p>   
                                    </div>
                                  </>:""
                                }           
                                                  
                                {
                                  item.Price?<>
                                  <div className=' flex justify-center items-center'>
                                        <th className='text-[12px]   max-lg:text-xs w-2/4'>Price</th>
                                        <p className='text-[12px]  font-semibold max-lg:text-xs w-2/4'><span className='bg-white px-3'>{item.Price+"$"}</span></p>
                                    </div>
                                  </>:""
                                }
                                {
                                  item.Department?<>
                                  <div className=' flex justify-center items-center'>
                                        <th className='text-[12px]   max-lg:text-xs w-2/4'>Department</th>
                                        <p className='text-[12px]  max-lg:text-xs w-2/4'>{item.Department}</p>
                                    </div>
                                  </>:""
                                }
                          </div>
                            
                          <div className='flex justify-between items-center w-full px-2'>
                               <button  className=' text-white text-[11px] font-semibold bg-fuchsia-700 to-pink-700 rounded-md p-1 w-12 hover:bg-black hover:text-white ' onClick={()=>{sendComponent(item.subcetegory)}} >View</button>
                                <button className=' text-white text-[11px] font-semibold bg-fuchsia-700 to-pink-700 p-1 w-28 sm:w-20 rounded-md '>Add to cart</button>
                            </div>
                          </div>
                    </div>
                        </>
                      )
                    })
                  }



                  {
                    state.ProductDetails.filter((item)=>{
                      return item.Department===product?item:""
                    }).map((item,i)=>{
                      return(
                        <>
                        <div className=' w-5/6 h-2/5   sm:w-4/6 md:w-2/5 sm:flex sm:flex-row  shadow-xl rounded-2xl border-grey-500 bg-gradient-to-r from-fuchsia-400 to-pink-100 m-2 flex items-center justify-evenly flex-col hover:scale-105 '  key={item.id}>
                            <div className=' w-full  '>
                                <img className=' rounded-2xl w-full p-1 h-56 ' src={item.img} alt="" />
                            </div>

                          <div className='w-full h-48  flex justify-evenly items-center flex-col text-center px-1 md:flex md:justify-evenly md:items-center md:text-[11px]'>
                            <div className='w-[200px] font-bold text-[12px] sm:w-full sm:text-[13px] h-16 flex justify-center items-center'>{item.Product}</div>
                            <div className='w-full mt-2 h-26 sm:h-36 sm:mt-5 '>
                                
                                {
                                  item['Band_material type']?<>
                                  <div className=' flex justify-center items-center'>
                                        <th className='text-[12px]  max-lg:text-xs w-2/4 '>Band material typer</th>
                                        <p className='text-[11px]  max-lg:text-xs w-2/4'>{item['Band_material type']}</p>   
                                    </div>
                                  </>:""
                                }           
                                                  
                                {
                                  item.Price?<>
                                  <div className=' flex justify-center items-center'>
                                        <th className='text-[12px]   max-lg:text-xs w-2/4'>Price</th>
                                        <p className='text-[12px]  font-semibold max-lg:text-xs w-2/4'><span className='bg-white px-3'>{item.Price+"$"}</span></p>
                                    </div>
                                  </>:""
                                }
                                {
                                  item.Department?<>
                                  <div className=' flex justify-center items-center'>
                                        <th className='text-[12px]   max-lg:text-xs w-2/4'>Department</th>
                                        <p className='text-[12px]  max-lg:text-xs w-2/4'>{item.Department}</p>
                                    </div>
                                  </>:""
                                }
                          </div>
                            
                          <div className='flex justify-between items-center w-full px-2'>
                            <button className=' text-white text-[11px] font-semibold bg-fuchsia-700 rounded-md p-1 w-12 ' onClick={()=>{sendComponent(item.subcetegory)}} >View</button>
                            <button className=' text-white text-[11px] font-semibold bg-fuchsia-700  p-1 w-28 sm:w-20 rounded-md '>Add to cart</button>
                            </div>
                          
                          </div>
                    </div>
                        </>
                      )
                    })
                  }
                    
                  </>
                :<div className='w-full h-auto bg-white'>
                <div className=' w-full  h-fit flex items-center  flex-wrap justify-evenly flex-col sm:flex-row sm:p-2 border-black '>
                {
                  state && state.ProductDetails.map((item,i)=>{
                      return(
                        <>
                        <div className=' w-5/6 h-2/5   sm:w-4/6 md:w-2/5  sm:flex sm:justify-evenly  sm:flex-row shadow-2xl rounded-2xl border-grey-500 bg-gradient-to-r from-fuchsia-400 to-pink-100 m-3 flex items-center justify-evenly flex-col hover:scale-105 hover:ease-linear hover:'  key={item.id}  >
                            <div className=' w-full  '>
                                <img className=' rounded-2xl w-full p-1 h-56 ' src={item.img} alt="" />
                            </div>

                          <div className='w-full h-48  flex justify-evenly items-center flex-col text-center px-1 md:flex md:justify-evenly md:items-center md:text-[11px] '>
                            <div className='w-[200px] font-bold text-[12px] sm:w-full sm:text-[13px] h-16 flex justify-center items-center'>{item.Product}</div>
                            <div className='w-full mt-2 h-26 sm:h-36 sm:mt-5 '>
                                
                                {
                                  item['Band_material type']?<>
                                  <div className=' flex justify-center items-center'>
                                        <th className='text-[12px]  max-lg:text-xs w-2/4 '>Band material typer</th>
                                        <p className='text-[11px]  max-lg:text-xs w-2/4'>{item['Band_material type']}</p>   
                                    </div>
                                  </>:""
                                }           
                                                  
                                {
                                  item.Price?<>
                                  <div className=' flex justify-center items-center'>
                                        <th className='text-[12px]   max-lg:text-xs w-2/4'>Price</th>
                                        <p className='text-[12px]  font-semibold max-lg:text-xs w-2/4'><span className='bg-white px-3'>{item.Price+"$"}</span></p>
                                    </div>
                                  </>:""
                                }
                                {
                                  item.Department?<>
                                  <div className=' flex justify-center items-center'>
                                        <th className='text-[12px]   max-lg:text-xs w-2/4'>Department</th>
                                        <p className='text-[12px]  max-lg:text-xs w-2/4'>{item.Department}</p>
                                    </div>
                                  </>:""
                                }
                          </div>
                            
                          <div className='flex justify-between items-center w-full px-2'>
                            <button className=' text-white text-[11px] font-semibold bg-fuchsia-600  rounded-md p-1 w-12 ' onClick={()=>{sendComponent(item.subcetegory)}} >View</button>
                            <button className=' text-white text-[11px] font-semibold bg-fuchsia-600 p-1 w-28 sm:w-20 rounded-md '>Add to cart</button>
                            </div>
                          
                          </div>
                    </div>
                        </>
                      )
                  })
                }
                </div>
              </div>
              }
         </div>
       </div>
          
          
          
          
          </div>
    </>
  )
}
