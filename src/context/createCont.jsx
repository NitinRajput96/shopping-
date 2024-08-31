import { createContext, useContext, useState } from "react";

export const UseContext=createContext()

const UseContaxtProvider=({children})=>{
        const [categ,setCateg]=useState()
        const [futures,setFutures]=useState(null)
        const [login,setLogin]=useState(1)
        
    return(
         <UseContext.Provider value={{categ,setCateg,futures,setFutures,login,setLogin}}>
         {children}
         </UseContext.Provider>
    )
}

export const useCategory=()=>{
     return useContext(UseContext)
}

 
export default UseContaxtProvider;