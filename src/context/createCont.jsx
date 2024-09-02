import { createContext, useContext, useState } from "react";

export const UseContext=createContext()

const UseContaxtProvider=({children})=>{
        const [categ,setCateg]=useState()
        const [futures,setFutures]=useState(null)
        const [loginToggle,setLoginToggle]=useState(false)
        const [loginData,setLoginData]=useState(null)
        
        
    return(
         <UseContext.Provider value={{
          categ,setCateg,
          futures,setFutures,
          loginToggle,setLoginToggle,
          loginData,setLoginData
         }}>
         {children}
         </UseContext.Provider>
    )
}

export const useCategory=()=>{
     return useContext(UseContext)
}

 
export default UseContaxtProvider;