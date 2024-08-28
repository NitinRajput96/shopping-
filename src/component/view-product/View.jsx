
import React, { useCallback, useEffect, useState }  from 'react'
import Data from '../json_data/Data.json';
import { FaEye } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../context/store/slice/slice';
import toast, { Toaster } from 'react-hot-toast';






export const View = () => {
        
     
         const {subcetegory}=useParams()
         const [useP,setUsep]=useState(subcetegory)
         const  [ceteData,setCeteData]=useState();
         const dispatch=useDispatch();
        
        

         const getCetegory=()=>{
             Data.ProductDetails.filter((item)=>{return (item.subcetegory===useP?setCeteData(item.cetegory):"")})
         }
        
         const nestdeData=(data)=>{
               setUsep(data);
         }

      
              
         const addtocart = (prod)=>{
          dispatch(addToCart(prod))
          toast.success("Add to cart Successfuly")
        }

        
         

         useEffect(()=>{
          window.scroll(0,0)
           getCetegory()
         },[])
         

         
         

         
  return (
   <>
   <Toaster/>
      <div className=' w-full h-auto sm:h-full bg-gray-100 flex justify-center flex-col items-center px-3 py-2'>
      {
        Data.ProductDetails.map((item,i)=>{
              return(item.subcetegory===useP?<>
                     
                      <div className=' w-full md:h-[450px] sm:w-5/6 lg:w-4/6 py-3  bg-white  sm:h-full  sm:flex sm:flex-row justify-evenly items-center shadow-xl ' key={item.id} >
                           <div className=' sm:w-2/4 h-5/6 flex justify-center items-center p-2'>
                            <img className='  w-full h-full ' src={item.img} alt="" />
                           </div>
                              <div className='  sm:w-2/4 h-5/6 text-black flex justify-evenly items-center flex-col text-md mt-3 sm:m-3 '>
                                      <h1 className=' w-full text-center text-md md:text-[20px] font-semibold'>{item.Product.substring(0,120)}</h1>
                                  <div className=' w-full pl-6 h-full text-center'>
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
                                 item.Colour?<>
                                 <div className=" w-full flex justify-evenly items-center flex-row gap-3 " >
                                        <th className=' md:text-[16px]     text-black pl-2 font-semibold text-left w-44  text-[14px]  '>Color</th>
                                          <p className=' md:text-[16px]   text-black pr-2 text-xs font-semibold  w-36  text-center  '  >{item.Colour}</p>
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
                                {
                                 item.Brand?<>
                                 <div className=" w-full flex justify-evenly items-center flex-row gap-3 " >
                                        <th className=' md:text-[16px]     text-black pl-2 font-semibold text-left w-44  text-[14px]  '>Brand</th>
                                          <p className=' md:text-[16px]   text-black pr-2 text-xs font-semibold  w-36  text-center  '  >{item.Brand}</p>
                                 </div>
                                 </>:""
                                }
                                {
                                 item['CPU Model']?<>
                                 <div className=" w-full flex justify-evenly items-center flex-row gap-3 " >
                                        <th className=' md:text-[16px]     text-black pl-2 font-semibold text-left w-44  text-[14px]  '>CPU Model</th>
                                          <p className=' md:text-[16px]   text-black pr-2 text-xs font-semibold  w-36  text-center  '  >{item['CPU Model']}</p>
                                 </div>
                                 </>:""
                                }
                                {
                                 item['Closure type']?<>
                                 <div className=" w-full flex justify-evenly items-center flex-row gap-3 " >
                                        <th className=' md:text-[16px]     text-black pl-2 font-semibold text-left w-44  text-[14px]  '>Closure type</th>
                                          <p className=' md:text-[16px]   text-black pr-2 text-xs font-semibold  w-36  text-center  '  >{item["Closure type"]}</p>
                                 </div>
                                 </>:""
                                }
                                {
                                 item['Connectivity Technology']?<>
                                 <div className=" w-full flex justify-evenly items-center flex-row gap-3 " >
                                        <th className=' md:text-[16px]     text-black pl-2 font-semibold text-left w-44  text-[14px]  '>Connectivity Technology</th>
                                          <p className=' md:text-[16px]   text-black pr-2 text-xs font-semibold  w-36  text-center  '  >{item["Connectivity Technology"]}</p>
                                 </div>
                                 </>:""
                                }
                                {
                                 item['Electric fan design']?<>
                                 <div className=" w-full flex justify-evenly items-center flex-row gap-3 " >
                                        <th className=' md:text-[16px]     text-black pl-2 font-semibold text-left w-44  text-[14px]  '>Electric fan design</th>
                                          <p className=' md:text-[16px]   text-black pr-2 text-xs font-semibold  w-36  text-center  '  >{item["Electric fan design"]}</p>
                                 </div>
                                 </>:""
                                }
                                {
                                 item['Heel type']?<>
                                 <div className=" w-full flex justify-evenly items-center flex-row gap-3 " >
                                        <th className=' md:text-[16px]     text-black pl-2 font-semibold text-left w-44  text-[14px]  '>Heel type</th>
                                          <p className=' md:text-[16px]   text-black pr-2 text-xs font-semibold  w-36  text-center  '  >{item["Heel type"]}</p>
                                 </div>
                                 </>:""
                                }
                                {
                                 item['Frequency Response']?<>
                                 <div className=" w-full flex justify-evenly items-center flex-row gap-3 " >
                                        <th className=' md:text-[16px]     text-black pl-2 font-semibold text-left w-44  text-[14px]  '>Frequency Response</th>
                                          <p className=' md:text-[16px]   text-black pr-2 text-xs font-semibold  w-36  text-center  '  >{item["Frequency Response"]}</p>
                                 </div>
                                 </>:""
                                }
                                {
                                 item['Indoor/Outdoor Usagen']?<>
                                 <div className=" w-full flex justify-evenly items-center flex-row gap-3 " >
                                        <th className=' md:text-[16px]     text-black pl-2 font-semibold text-left w-44  text-[14px]  '>Indoor/Outdoor Usagen</th>
                                          <p className=' md:text-[16px]   text-black pr-2 text-xs font-semibold  w-36  text-center  '  >{item["Indoor/Outdoor Usagen"]}</p>
                                 </div>
                                 </>:""
                                }
                                {
                                 item['Light Source Type']?<>
                                 <div className=" w-full flex justify-evenly items-center flex-row gap-3 " >
                                        <th className=' md:text-[16px]     text-black pl-2 font-semibold text-left w-44  text-[14px]  '>Light Source Type</th>
                                          <p className=' md:text-[16px]   text-black pr-2 text-xs font-semibold  w-36  text-center  '  >{item["Light Source Type"]}</p>
                                 </div>
                                 </>:""
                                }
                                {
                                 item['Memory Storage Capacity']?<>
                                 <div className=" w-full flex justify-evenly items-center flex-row gap-3 " >
                                        <th className=' md:text-[16px]     text-black pl-2 font-semibold text-left w-44  text-[14px]  '>Memory Storage Capacity</th>
                                          <p className=' md:text-[16px]   text-black pr-2 text-xs font-semibold  w-36  text-center  '  >{item["Memory Storage Capacity"]}</p>
                                 </div>
                                 </>:""
                                }
                                {
                                 item['Model Name']?<>
                                 <div className=" w-full flex justify-evenly items-center flex-row gap-3 " >
                                        <th className=' md:text-[16px]     text-black pl-2 font-semibold text-left w-44  text-[14px]  '>Model Name</th>
                                          <p className=' md:text-[16px]   text-black pr-2 text-xs font-semibold  w-36  text-center  '  >{item["Model Name"]}</p>
                                 </div>
                                 </>:""
                                }





                                  </div>
                               
                                    <div className=' w-full h-1/6 grid grid-cols-2  mt-3 justify-items-center items-center '>
                                     <Link to="/home" className=' text-purple-950 text-center hover:border hover:border-fuchsia-400 hover:bg-fuchsia-300 shadow-md  bg-fuchsia-200  border-purple-950 text-[14px] font-semibold  p-1 sm:p-1 md:p-1  w-20 sm:w-20 rounded-md '>Shoping</Link>
                                     <button className=' text-purple-950 hover:border hover:border-fuchsia-400 hover:bg-fuchsia-300 bg-fuchsia-200 shadow-md text-[14px]  font-semibold  sm:p-1 md:p-1 p-1 w-24  sm:w-24 rounded-md  '    onClick={()=>{addtocart(item)}}  >Add to cart</button>

                                 </div>
                                
                           </div>
                            
                       </div>
                     
              </>:(""))
        })
          
      }

       {
        ceteData?<>
        <div className=' w-full sm:w-5/6 lg:w-4/6 h-36 mt-1 bg-white  shadow-2xl  flex justify-evenly items-center flex-row  flex-wrap pt-1  md:mt-2 '>
        <h4 className=' font-bold'>Products  Suggestions</h4>
        <div className=' w-full flex justify-evenly items-center flex-row  '>
        {
                     Data.ProductDetails.map((item)=>{
                        return (
                               item.cetegory===ceteData?<>
                                         <div className='flex justify-evenly items-center flex-col rounded-full w-26 h-26 p-2 sm:w-28 sm:h-28 ' key={item.id}>
                                              <img onClick={()=>{nestdeData(item.subcetegory)}} className=' w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full hover:border-fuchsia-300  hover:border-2 ' src={item.img} alt="" />
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
