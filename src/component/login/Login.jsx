import React, { useRef, useState } from 'react'
import { TiDeleteOutline } from "react-icons/ti";
import { useCategory } from '../../context/createCont';
import toast, { Toaster } from 'react-hot-toast';


export const Login = () => {
            
      const {loginToggle,setLoginToggle,loginData,setLoginData}=useCategory()
      const [state, setState] = useState({
             fristName:"",
             email:'',
             mobile:""

      })
     
     

    
      const handler=(e)=>{
          const {name,value}=e.target
          setState({...state,[name]:value})
          
      }
      console.log(state);
      
     
      const getDataFromIn=(e)=>{
            e.preventDefault()

             
            

           if(state.fristName=="" ){
            toast.error("please enter your Name")
              
           }
           else if(state.email=="")
            {
             toast.error("please enter your Email id")      
            }
           else if(state.mobile=="")
            {
             toast.error("please enter your Mobile")
            }else{
                    
              toast.success("Login Successfully")
              setLoginData(state)
               setTimeout(() => {
                  setLoginToggle(!loginToggle)
            }, 100);

            }                        
             
          
            
        
          
          
    
      }
 
     
      
      
     
      
      

       useState(()=>{
        setTimeout(() => {
          setLoginToggle(!loginToggle)
        }, 2000);

      


       },[])
       
         
  
  return (
    <>
    <Toaster/>
        {
          loginToggle?
          <div className=' w-full h-full  top-28 sm:top-10 md:items-center lg:top-10  z-30  absolute  flex justify-center '>
               <div className=' w-11/12 h-4/6 sm:h-full sm:w-3/6 md:h-3/6 lg:h-4/6 2xl:h-3/6   md:w-4/6 lg:w-2/5 xl:w-2/6  p-4 flex justify-center flex-col items-center   shadow-xl rounded-lg  bg-black opacity-80  '>
              
               <form action="" className='w-full h-full ' onSubmit={getDataFromIn}>
               <div className=' w-full  h-full   grid grid-rows-5 opacity-100 '>   
                        <div className=' w-full border-b   grid grid-cols-8 justify-items-center items-center'>
                               <span className=' text-[40px] underline  text-purple-500 font-bold col-span-7  ml-10'> Login</span>
                               <span className=' text-[35px] text-white align-text-top  h-full  ' onClick={()=>{setLoginToggle(!loginToggle)}}><TiDeleteOutline/></span>
                         </div>
                        
                        <div className=' w-full  flex justify-center gap-1 items-center flex-col'>
                             <span className='w-5/6 text-white font-bold'>Name</span>
                              <input className='w-5/6 h-10 text-white text-sm  rounded-md pl-3 border-2 bg-black' name='fristName' onChange={handler}   type="text" placeholder=' ' />
                        </div>
                        <div className=' w-full  flex justify-center gap-1 items-center flex-col'>
                              <span className='w-5/6 text-white font-bold'>Email</span>
                              <input className='w-5/6 h-10 text-white text-sm font-bold   rounded-md pl-3 border-2 bg-black' name='email'  onChange={handler}  type="email" placeholder='' />
                        </div>
                        <div className=' w-full  flex justify-center gap-1 items-center flex-col'>
                              <span className='w-5/6 text-white font-bold'>Mobile</span>
                              <input className='w-5/6 h-10 text-white text-sm font-bold   rounded-md pl-3 border-2 bg-black' name='mobile'  onChange={handler}  type="mobile" placeholder='' />
                        </div>
 
                        <div className=' w-full flex justify-center items-center flex-col'>
                               <button className=' text-white border border-white px-2 py-1 rounded-lg' type='submit' >Submit</button>
                        </div>
                       
                   </div>
               </form>
               
                
               </div>
        </div>:''
        }   
    </>
  )
}
