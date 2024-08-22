
import React, { useCallback, useEffect, useState }  from 'react'
import Data from '../json_data/Data.json';
import { FaEye } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom';


export const View = () => {
        
     
         const {subcetegory}=useParams()
         const [useP,setUsep]=useState(subcetegory)
         const  [ceteData,setCeteData]=useState();
        

         const getCetegory=()=>{
             Data.ProductDetails.filter((item)=>{return (item.subcetegory===useP?setCeteData(item.cetegory):"")})
         }
        
         const nestdeData=(data)=>{
               setUsep(data);
         }

         

        
         

         useEffect(()=>{
          window.scroll(0,0)
           getCetegory()
         },[])
         

         
         

         
  return (
   <>
      <div className=' w-full h-screen bg-white flex justify-center flex-col items-center py-5'>
      {
        Data.ProductDetails.map((item,i)=>{
              return(item.subcetegory===useP?<>
                     
                      <div className=' w-5/6 sm:w-3/4 h-4/6  sm:flex sm:flex-row justify-evenly items-center shadow-2xl  bg-gradient-to-r from-fuchsia-400 to-pink-100' >
                           <div className=' sm:w-2/4 flex justify-center items-center p-2'>
                            <img className=' w-5/6 h-72 sm:w-full sm:h-96 ' src={item.img} alt="" />
                           </div>
                           <div className=' sm:w-2/4 sm:h-96 text-black flex justify-evenly items-center flex-col text-md mt-3 sm:m-0 '>
                           <h1 className=' w-5/6 text-lg font-semibold'>{item.Product}</h1>
                                  <div className=' w-full px-1 h-auto'>
                                  {
                                 item.Rating?<>
                                 <div className=" w-full flex justify-evenly items-center flex-row gap-3 " >
                                        <th className=' md:text-[16px]     text-black pl-2 font-semibold text-left w-44  text-[14px]  '>Review</th>
                                          <p className=' md:text-[16px]   text-black pr-2 text-xs font-semibold  w-36 flex justify-center items-center gap-2 pl- '  >{item.Rating} <span><FaEye/></span> </p>
                                 </div>
                                 </>:""
                                }
                                {
                                 item.Price?<>
                                 <div className=" w-full flex justify-evenly items-center flex-row gap-3 " >
                                        <th className=' md:text-[16px]     text-black pl-2 font-semibold text-left w-44  text-[14px]  '>Price</th>
                                          <p className=' md:text-[16px]   text-black pr-2 text-xs font-semibold  w-36 text-center'  ><span className=' bg-yellow-300 px-2'>{item.Price} Rs</span></p>
                                 </div>
                                 </>:""
                                }
                                {
                                 item['Band_material type']?<>
                                 <div className=" w-full flex justify-evenly items-center flex-row gap-3" >
                                        <th className=' md:text-[16px]     text-black pl-2 font-semibold text-left w-44  text-[14px]  ' >Band material type</th>
                                          <p className=' md:text-[16px]   text-black pr-2 text-xs font-semibold  w-36  text-center  '   >{item['Band_material type']}</p>
                                 </div>
                                 </>:""
                                }
                                {
                                 item['Case diameter']?<>
                                 <div className=" w-full flex justify-evenly items-center flex-row gap-3 " >
                                        <th className=' md:text-[16px]     text-black pl-2 font-semibold text-left w-44  text-[14px]  '>Case diameter</th>
                                          <p className=' md:text-[16px]   text-black pr-2 text-xs font-semibold  w-36  text-center  '  >{item['Case diameter']}</p>
                                 </div>
                                 </>:""
                                }
                                {
                                 item.color?<>
                                 <div className=" w-full flex justify-evenly items-center flex-row gap-3 " >
                                        <th className=' md:text-[16px]     text-black pl-2 font-semibold text-left w-44  text-[14px]  '>Color</th>
                                          <p className=' md:text-[16px]   text-black pr-2 text-xs font-semibold  w-36  text-center  '  >{item.color}</p>
                                 </div>
                                 </>:""
                                }
                                {
                                 item.Collarstyle?<>
                                 <div className=" w-full flex justify-evenly items-center flex-row gap-3 " >
                                        <th className=' md:text-[16px]     text-black pl-2 font-semibold text-left w-44  text-[14px]  '>Collarstyle</th>
                                          <p className=' md:text-[16px]   text-black pr-2 text-xs font-semibold  w-36  text-center  '  >{item.Collarstyle}</p>
                                 </div>
                                 </>:""
                                }
                                {
                                 item.Dial_Colour?<>
                                 <div className=" w-full flex justify-evenly items-center flex-row gap-3 " >
                                        <th className=' md:text-[16px]     text-black pl-2 font-semibold text-left w-44  text-[14px]  '>Dial Colour</th>
                                          <p className=' md:text-[16px]   text-black pr-2 text-xs font-semibold  w-36  text-center  '  >{item.Dial_Colour}</p>
                                 </div>
                                 </>:""
                                }
                                {
                                 item['Fit type']?<>
                                 <div className=" w-full flex justify-evenly items-center flex-row gap-3 " >
                                        <th className=' md:text-[16px]     text-black pl-2 font-semibold text-left w-44  text-[14px]  '>Fit type</th>
                                          <p className=' md:text-[16px]   text-black pr-2 text-xs font-semibold  w-36  text-center  '  >{item['Fit type']}</p>
                                 </div>
                                 </>:""
                                }
                                {
                                 item['Item weight']?<>
                                 <div className=" w-full flex justify-evenly items-center flex-row gap-3 " >
                                        <th className=' md:text-[16px]     text-black pl-2 font-semibold text-left w-44  text-[14px]  '>Item weight</th>
                                          <p className=' md:text-[16px]   text-black pr-2 text-xs font-semibold  w-36  text-center  '  >{item['Item weight']}</p>
                                 </div>
                                 </>:""
                                }
                                {
                                 item.Length?<>
                                 <div className=" w-full flex justify-evenly items-center flex-row gap-3 " >
                                        <th className=' md:text-[16px]     text-black pl-2 font-semibold text-left w-44  text-[14px]  '>Length</th>
                                          <p className=' md:text-[16px]   text-black pr-2 text-xs font-semibold  w-36  text-center  '  >{item.Length}</p>
                                 </div>
                                 </>:""
                                }

                                {
                                 item['Occasion-Type ']?<>
                                 <div className=" w-full flex justify-evenly items-center flex-row gap-3 " >
                                        <th className=' md:text-[16px]     text-black pl-2 font-semibold text-left w-44  text-[14px]  '>Occasion</th>
                                          <p className=' md:text-[16px]   text-black pr-2 text-xs font-semibold  w-36  text-center  '  >{item['Occasion-Type ']}</p>
                                 </div>
                                 </>:""
                                }
                                {
                                 item.Pattern?<>
                                 <div className=" w-full flex justify-evenly items-center flex-row gap-3 " >
                                        <th className=' md:text-[16px]     text-black pl-2 font-semibold text-left w-44  text-[14px]  '>Pattren</th>
                                          <p className=' md:text-[16px]   text-black pr-2 text-xs font-semibold  w-36  text-center  '  >{item.Pattern}</p>
                                 </div>
                                 </>:""
                                }
                                {
                                 item.Sleeve_type?<>
                                 <div className=" w-full flex justify-evenly items-center flex-row gap-3 " >
                                        <th className=' md:text-[16px]     text-black pl-2 font-semibold text-left w-44  text-[14px]  '>Sleeve type</th>
                                          <p className=' md:text-[16px]   text-black pr-2 text-xs font-semibold  w-36  text-center  '  >{item.Sleeve_type}</p>
                                 </div>
                                 </>:""
                                }
                                {
                                 item.Warranty?<>
                                 <div className=" w-full flex justify-evenly items-center flex-row gap-3 " >
                                        <th className=' md:text-[16px]     text-black pl-2 font-semibold text-left w-44  text-[14px]  '>Warranty</th>
                                          <p className=' md:text-[16px]   text-black pr-2 text-xs font-semibold  w-36  text-center  '  >{item.Warranty}</p>
                                 </div>
                                 </>:""
                                }
                                {
                                 item.cetegory?<>
                                 <div className=" w-full flex justify-evenly items-center flex-row gap-3 " >
                                        <th className=' md:text-[16px]     text-black pl-2 font-semibold text-left w-44  text-[14px]  '>cetegory</th>
                                          <p className=' md:text-[16px]   text-black pr-2 text-xs font-semibold  w-36  text-center  '  >{item.cetegory}</p>
                                 </div>
                                 </>:""
                                }
                                  </div>
                               
                                  <div className=' w-full h-20 flex justify-evenly items-center  sm:flex sm:justify-between sm:px-8'>
                                    <button className=' text-white text-[11px] font-semibold bg-fuchsia-700 sm:p-1 md:p-2 p-2 w-20  sm:w-20 rounded-md '>Add to cart</button>
                                     <Link to="/home" className=' text-white text-center text-[11px] font-semibold bg-fuchsia-700 p-2 sm:p-1 md:p-2  w-20 sm:w-20 rounded-md '>Shoping</Link>
                                 </div>
                                
                           </div>
                            
                       </div>
                     
              </>:(""))
        })
          
      }

       {
        ceteData?<>
        <div className=' w-5/6 sm:w-3/4 h-40  shadow-2xl bg-gradient-to-r from-fuchsia-400 to-pink-100 flex justify-evenly items-center flex-row  flex-wrap pt-1 mt-1 '>
        <h4 className=' font-bold'>Products  Suggestions</h4>
        <div className=' w-full flex justify-evenly items-center flex-row  '>
        {
                     Data.ProductDetails.map((item)=>{
                        return (
                               item.cetegory===ceteData?<>
                                         <div className='flex justify-evenly items-center flex-col rounded-full w-26 h-26 p-2 sm:w-28 sm:h-28 '>
                                              <img onClick={()=>{nestdeData(item.subcetegory)}} className=' w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full hover:border-red-900  hover:border-2 ' src={item.img} alt="" />
                                              <span className=' text-xs font-semibold'>{item.Product.substring(0,10)}</span>
                                         </div>
                                         
                               
                               </>:""
                        )
                     })
                   }
        </div>

                  
        </div> 

        </>:""
       }

      
      
      
      </div>

   </>
  )
}
