
import React, { useCallback, useEffect, useState }  from 'react'
import Data from '../json_data/Data.json';
import { FaEye } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../context/store/slice/slice';
import toast, { Toaster } from 'react-hot-toast';
import { useCategory } from '../../context/createCont';






export const View = () => {
        
         const {categ}=useCategory()
         const [useP,setUsep]=useState(categ)
         const  [ceteData,setCeteData]=useState();
         const dispatch=useDispatch();
       
         const getCetegory=()=>{
          Data.ProductDetails.filter((item)=>{return (item.subcetegory===useP?setCeteData(item.cetegory):"")})    
         }

        
         useEffect(()=>{
          window.scroll(0,0)
           getCetegory()
              
         },[getCetegory])
      

        
         const nestdeData=(data)=>{
               setUsep(data);
              }        
         const addtocart = (prod)=>{
               dispatch(addToCart(prod))
               toast.success("Add to cart Successfuly")
              }

          
              
              

       
         

         
         

         
  return (
   <>
   <Toaster/>
      <div className=' w-full  h-auto bg-gray-100 flex justify-center flex-col items-center px-3 py-2'>
      {
        Data.ProductDetails.map((item,i)=>{
              return(item.subcetegory===useP?
                     
                      <div className=' w-full  max-[640px]:h-[80vh]  sm:h-[280px]   lg:h-[370px]  max-[640px]:h-5/6  sm:w-5/6 lg:w-4/6    bg-white    sm:flex sm:flex-row justify-evenly items-center shadow-xl ' key={item.id} >
                           <div className=' sm:w-2/4  sm:h-full max-[640px]:h-2/4  p-2   flex justify-center items-center '>
                            <img className='  w-5/6 h-full  max-[640]:h-full sm:w-full  ' src={item.img} alt="" />
                           </div>
                              <div className=' sm:h-full  px-1 py-2 sm:pt-3 lg:m-0 max-[640px]:h-2/4 sm:w-2/4 text-black flex justify-evenly items-center flex-col text-md  sm:m-3 '>
                                      <h1 className=' w-full text-center  sm:text-sm text-md md:text-[20px] font-semibold'>{item.Product.substring(0,120)}</h1>
                                  <div className='flex justify-center items-center flex-col w-full pl-6 h-full text-center'>
                                  {
                                 item.Rating?
                                 <table className=" w-full flex justify-evenly items-center flex-row gap-3 " >
                                        <th className=' md:text-[16px]     text-black pl-2 font-semibold text-left w-44  text-[12px]  '>Review</th>
                                          <td className=' md:text-[16px]   text-black pr-2 text-xs font-semibold  w-36 flex justify-center items-center gap-2 pl- '  >{item.Rating} <span><FaEye/></span> </td>
                                 </table>
                                 :""
                                }
                                {
                                 item.Price?<>
                                 <table className=" w-full flex justify-evenly items-center flex-row gap-3 " >
                                        <th className=' md:text-[16px]     text-black pl-2 font-semibold text-left w-44  text-[12px]  '>Price</th>
                                          <td className=' md:text-[16px]   text-black pr-2 text-xs font-semibold  w-36 text-center'  ><span className=' bg-yellow-300 px-2'>{item.Price} Rs</span></td>
                                 </table>
                                 </>:""
                                }
                                {
                                 item['Band_material type']?<>
                                 <table className=" w-full flex justify-evenly items-center flex-row gap-3" >
                                        <th className=' md:text-[16px]     text-black pl-2 font-semibold text-left w-44  text-[12px]  ' >Band material type</th>
                                          <td className=' md:text-[16px]   text-black pr-2 text-xs font-semibold  w-36  text-center  '   >{item['Band_material type']}</td>
                                 </table>
                                 </>:""
                                }
                                {
                                 item['Case diameter']?<>
                                 <table className=" w-full flex justify-evenly items-center flex-row gap-3 " >
                                        <th className=' md:text-[16px]     text-black pl-2 font-semibold text-left w-44  text-[12px]  '>Case diameter</th>
                                          <td className=' md:text-[16px]   text-black pr-2 text-xs font-semibold  w-36  text-center  '  >{item['Case diameter']}</td>
                                 </table>
                                 </>:""
                                }
                                {
                                 item.color?<>
                                 <table className=" w-full flex justify-evenly items-center flex-row gap-3 " >
                                        <th className=' md:text-[16px]     text-black pl-2 font-semibold text-left w-44  text-[12px]  '>Color</th>
                                          <td className=' md:text-[16px]   text-black pr-2 text-xs font-semibold  w-36  text-center  '  >{item.color}</td>
                                 </table>
                                 </>:""
                                }
                                {
                                 item.Colour?<>
                                 <table className=" w-full flex justify-evenly items-center flex-row gap-3 " >
                                        <th className=' md:text-[16px]     text-black pl-2 font-semibold text-left w-44  text-[12px]  '>Color</th>
                                          <td className=' md:text-[16px]   text-black pr-2 text-xs font-semibold  w-36  text-center  '  >{item.Colour}</td>
                                 </table>
                                 </>:""
                                }
                                {
                                 item.Collarstyle?<>
                                 <table className=" w-full flex justify-evenly items-center flex-row gap-3 " >
                                        <th className=' md:text-[16px]     text-black pl-2 font-semibold text-left w-44  text-[12px]  '>Collarstyle</th>
                                          <td className=' md:text-[16px]   text-black pr-2 text-xs font-semibold  w-36  text-center  '  >{item.Collarstyle}</td>
                                 </table>
                                 </>:""
                                }
                                {
                                 item.Dial_Colour?<>
                                 <table className=" w-full flex justify-evenly items-center flex-row gap-3 " >
                                        <th className=' md:text-[16px]     text-black pl-2 font-semibold text-left w-44  text-[12px]  '>Dial Colour</th>
                                          <td className=' md:text-[16px]   text-black pr-2 text-xs font-semibold  w-36  text-center  '  >{item.Dial_Colour}</td>
                                 </table>
                                 </>:""
                                }
                                {
                                 item['Fit type']?<>
                                 <table className=" w-full flex justify-evenly items-center flex-row gap-3 " >
                                        <th className=' md:text-[16px]     text-black pl-2 font-semibold text-left w-44  text-[12px]  '>Fit type</th>
                                          <td className=' md:text-[16px]   text-black pr-2 text-xs font-semibold  w-36  text-center  '  >{item['Fit type']}</td>
                                 </table>
                                 </>:""
                                }
                                {
                                 item['Item weight']?<>
                                 <table className=" w-full flex justify-evenly items-center flex-row gap-3 " >
                                        <th className=' md:text-[16px]     text-black pl-2 font-semibold text-left w-44  text-[12px]  '>Item weight</th>
                                          <td className=' md:text-[16px]   text-black pr-2 text-xs font-semibold  w-36  text-center  '  >{item['Item weight']}</td>
                                 </table>
                                 </>:""
                                }
                                {
                                 item.Length?<>
                                 <table className=" w-full flex justify-evenly items-center flex-row gap-3 " >
                                        <th className=' md:text-[16px]     text-black pl-2 font-semibold text-left w-44  text-[12px]  '>Length</th>
                                          <td className=' md:text-[16px]   text-black pr-2 text-xs font-semibold  w-36  text-center  '  >{item.Length}</td>
                                 </table>
                                 </>:""
                                }

                                {
                                 item['Occasion-Type ']?<>
                                 <table className=" w-full flex justify-evenly items-center flex-row gap-3 " >
                                        <th className=' md:text-[16px]     text-black pl-2 font-semibold text-left w-44  text-[12px]  '>Occasion</th>
                                          <td className=' md:text-[16px]   text-black pr-2 text-xs font-semibold  w-36  text-center  '  >{item['Occasion-Type ']}</td>
                                 </table>
                                 </>:""
                                }
                                {
                                 item.Pattern?<>
                                 <table className=" w-full flex justify-evenly items-center flex-row gap-3 " >
                                        <th className=' md:text-[16px]     text-black pl-2 font-semibold text-left w-44  text-[12px]  '>Pattren</th>
                                          <td className=' md:text-[16px]   text-black pr-2 text-xs font-semibold  w-36  text-center  '  >{item.Pattern}</td>
                                 </table>
                                 </>:""
                                }
                                {
                                 item.Sleeve_type?<>
                                 <table className=" w-full flex justify-evenly items-center flex-row gap-3 " >
                                        <th className=' md:text-[16px]     text-black pl-2 font-semibold text-left w-44  text-[12px]  '>Sleeve type</th>
                                          <td className=' md:text-[16px]   text-black pr-2 text-xs font-semibold  w-36  text-center  '  >{item.Sleeve_type}</td>
                                 </table>
                                 </>:""
                                }
                                {
                                 item.Warranty?<>
                                 <table className=" w-full flex justify-evenly items-center flex-row gap-3 " >
                                        <th className=' md:text-[16px]     text-black pl-2 font-semibold text-left w-44  text-[12px]  '>Warranty</th>
                                          <td className=' md:text-[16px]   text-black pr-2 text-xs font-semibold  w-36  text-center  '  >{item.Warranty}</td>
                                 </table>
                                 </>:""
                                }
                                {
                                 item.cetegory?<>
                                 <table className=" w-full flex justify-evenly items-center flex-row gap-3 " >
                                        <th className=' md:text-[16px]     text-black pl-2 font-semibold text-left w-44  text-[12px]  '>cetegory</th>
                                          <td className=' md:text-[16px]   text-black pr-2 text-xs font-semibold  w-36  text-center  '  >{item.cetegory}</td>
                                 </table>
                                 </>:""
                                }
                                {
                                 item.Brand?<>
                                 <table className=" w-full flex justify-evenly items-center flex-row gap-3 " >
                                        <th className=' md:text-[16px]     text-black pl-2 font-semibold text-left w-44  text-[12px]  '>Brand</th>
                                          <td className=' md:text-[16px]   text-black pr-2 text-xs font-semibold  w-36  text-center  '  >{item.Brand}</td>
                                 </table>
                                 </>:""
                                }
                                {
                                 item['CPU Model']?<>
                                 <table className=" w-full flex justify-evenly items-center flex-row gap-3 " >
                                        <th className=' md:text-[16px]     text-black pl-2 font-semibold text-left w-44  text-[12px]  '>CPU Model</th>
                                          <td className=' md:text-[16px]   text-black pr-2 text-xs font-semibold  w-36  text-center  '  >{item['CPU Model']}</td>
                                 </table>
                                 </>:""
                                }
                                {
                                 item['Closure type']?<>
                                 <table className=" w-full flex justify-evenly items-center flex-row gap-3 " >
                                        <th className=' md:text-[16px]     text-black pl-2 font-semibold text-left w-44  text-[12px]  '>Closure type</th>
                                          <td className=' md:text-[16px]   text-black pr-2 text-xs font-semibold  w-36  text-center  '  >{item["Closure type"]}</td>
                                 </table>
                                 </>:""
                                }
                                {
                                 item['Connectivity Technology']?<>
                                 <table className=" w-full flex justify-evenly items-center flex-row gap-3 " >
                                        <th className=' md:text-[16px]     text-black pl-2 font-semibold text-left w-44  text-[12px]  '>Connectivity Technology</th>
                                          <td className=' md:text-[16px]   text-black pr-2 text-xs font-semibold  w-36  text-center  '  >{item["Connectivity Technology"]}</td>
                                 </table>
                                 </>:""
                                }
                                {
                                 item['Electric fan design']?<>
                                 <table className=" w-full flex justify-evenly items-center flex-row gap-3 " >
                                        <th className=' md:text-[16px]     text-black pl-2 font-semibold text-left w-44  text-[12px]  '>Electric fan design</th>
                                          <td className=' md:text-[16px]   text-black pr-2 text-xs font-semibold  w-36  text-center  '  >{item["Electric fan design"]}</td>
                                 </table>
                                 </>:""
                                }
                                {
                                 item['Heel type']?<>
                                 <table className=" w-full flex justify-evenly items-center flex-row gap-3 " >
                                        <th className=' md:text-[16px]     text-black pl-2 font-semibold text-left w-44  text-[12px]  '>Heel type</th>
                                          <td className=' md:text-[16px]   text-black pr-2 text-xs font-semibold  w-36  text-center  '  >{item["Heel type"]}</td>
                                 </table>
                                 </>:""
                                }
                                {
                                 item['Frequency Response']?<>
                                 <table className=" w-full flex justify-evenly items-center flex-row gap-3 " >
                                        <th className=' md:text-[16px]     text-black pl-2 font-semibold text-left w-44  text-[12px]  '>Frequency Response</th>
                                          <td className=' md:text-[16px]   text-black pr-2 text-xs font-semibold  w-36  text-center  '  >{item["Frequency Response"]}</td>
                                 </table>
                                 </>:""
                                }
                                {
                                 item['Indoor/Outdoor Usagen']?<>
                                 <table className=" w-full flex justify-evenly items-center flex-row gap-3 " >
                                        <th className=' md:text-[16px]     text-black pl-2 font-semibold text-left w-44  text-[12px]  '>Indoor/Outdoor Usagen</th>
                                          <td className=' md:text-[16px]   text-black pr-2 text-xs font-semibold  w-36  text-center  '  >{item["Indoor/Outdoor Usagen"]}</td>
                                 </table>
                                 </>:""
                                }
                                {
                                 item['Light Source Type']?<>
                                 <table className=" w-full flex justify-evenly items-center flex-row gap-3 " >
                                        <th className=' md:text-[16px]     text-black pl-2 font-semibold text-left w-44  text-[12px]  '>Light Source Type</th>
                                          <td className=' md:text-[16px]   text-black pr-2 text-xs font-semibold  w-36  text-center  '  >{item["Light Source Type"]}</td>
                                 </table>
                                 </>:""
                                }
                                {
                                 item['Memory Storage Capacity']?<>
                                 <table className=" w-full flex justify-evenly items-center flex-row gap-3 " >
                                        <th className=' md:text-[16px]     text-black pl-2 font-semibold text-left w-44  text-[12px]  '>Memory Storage Capacity</th>
                                          <td className=' md:text-[16px]   text-black pr-2 text-xs font-semibold  w-36  text-center  '  >{item["Memory Storage Capacity"]}</td>
                                 </table>
                                 </>:""
                                }
                                {
                                 item['Model Name']?<>
                                 <table className=" w-full flex justify-evenly items-center flex-row gap-3 " >
                                        <th className=' md:text-[16px]     text-black pl-2 font-semibold text-left w-44  text-[12px]  '>Model Name</th>
                                          <td className=' md:text-[16px]   text-black pr-2 text-xs font-semibold  w-36  text-center  '  >{item["Model Name"]}</td>
                                 </table>
                                 </>:""
                                }





                                  </div>
                               
                                    <div className=' w-full h-1/6 grid grid-cols-2  mt-3 justify-items-center items-center '>
                                     <Link to="/home" className=' text-purple-950 text-center border border-fuchsia-300 hover:bg-gradient-to-r from-violet-200 to-pink-200 shadow-md    text-[12px] font-semibold  p-1 sm:p-1 md:p-1  w-20 sm:w-20 rounded-md '>Shoping</Link>
                                     <button className=' text-purple-950 border border-fuchsia-300 hover:bg-gradient-to-r from-violet-200 to-pink-200  shadow-md text-[12px]  font-semibold  sm:p-1 md:p-1 p-1 w-24  sm:w-24 rounded-md  '    onClick={()=>{addtocart(item)}}  >Add to cart</button>

                                 </div>
                                
                           </div>
                            
                       </div>
                  :(""))
        })
          
      }

       {
        ceteData?<>
        <div className=' max sm:w-5/6 lg:w-4/6 h-1/6 mt-1 bg-white  shadow-2xl  flex justify-evenly items-center flex-row  flex-wrap pt-1  md:mt-1 '>
        <h4 className=' font-bold'>Products  Suggestions</h4>
        <div className=' w-full h-full flex justify-evenly flex-row '>
        {
                     Data.ProductDetails.map((item)=>{
                        return (
                               item.cetegory===ceteData?
                                         <div className=' w-full pb-2 flex justify-center  flex-col items-center w-26 h-26  sm:w-26 sm:h-26 ' key={item.id}>
                                             <div onClick={()=>{nestdeData(item.subcetegory)}}  className='w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex justify-center items-center   hover:border-fuchsia-300  hover:border-2'>
                                                 <img className=' shadow-md w-full h-full p-1 rounded-full ' src={item.img} alt="" />
                                             </div>
                                              <span className=' text-xs font-semibold '>{item.Product.substring(0,13)}</span>
                                         </div>
                                         
                               
                               :""
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
