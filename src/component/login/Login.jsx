import React, { useState } from 'react'
import { TiDeleteOutline } from "react-icons/ti";
import { useCategory } from '../../context/createCont';

export const Login = () => {
            
      const {loginToggle,setLoginToggle}=useCategory()
      const [loginData,setLoginData]=useState({})


      const handler=()=>{
                 
                    
      }
      

      const sendData=(e)=>{
            e.preventDefault()
            
      }
     
      

       useState(()=>{
        setTimeout(() => {
          setLoginToggle(!loginToggle)
        }, 2000);
       },[])
       
         
  
  return (
    <>
        {
          loginToggle?
          <div className=' w-full h-[95vh]   z-50 absolute  flex justify-center items-center'>
               <div className=' w-11/12 sm:w-5/6 md:w-4/6 lg:w-2/5 xl:w-2/6 h-4/6 flex gap-2  justify-start items-center flex-col  shadow-xl rounded-lg  bg-black opacity-80  '>
                  <div className='w-11/12 h-auto  mt-1 flex justify-end  '>
                       <span className=' text-[40px] text-white  ' onClick={()=>{setLoginToggle(!loginToggle)}}><TiDeleteOutline/></span>
                  </div>
                <form action="" className='w-11/12 h-4/6 ' onSubmit={sendData}>
                <div className=' w-full h-full    opacity-100 '>
                         
                         <div className=' w-full h-1/6  flex justify-center items-center flex-col border-b-2'>
                               <div className=' w-full h-full text-center text-2xl underline  text-purple-400 font-bold'> Login</div>
                        </div>
                        <div className=' w-full h-[90px]  flex justify-center gap-1 items-center flex-col'>
                             <span className='w-5/6 text-white font-bold'>Email.id</span>
                              <input className='w-5/6 h-8 text-white text-sm  rounded-md pl-3 border-2 bg-black' name='email' onChange={handler} type="email" placeholder='Enter your email ' />
                        </div>
                        <div className=' w-full h-[90px]  flex justify-center gap-1 items-center flex-col'>
                              <span className='w-5/6 text-white font-bold'>Password</span>
                              <input className='w-5/6 h-8 text-white text-sm font-bold   rounded-md pl-3 border-2 bg-black' name='password' onChange={handler} type="password" placeholder='Enter your email ' />
                        </div>
 
                        <div className=' w-full h-1/6  flex justify-center items-center flex-col'>
                               <button className=' text-white border border-white px-2 py-1 rounded-lg' type='submit'>Submit</button>
                        </div>
                   </div>
                </form>
                  <div className=' w-11/12 h-1/6 '></div>
               </div>
        </div>:''
        }   
    </>
  )
}
