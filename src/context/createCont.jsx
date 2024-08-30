import { createContext, useContext, useState } from "react";

export const UseContext=createContext()

const UseContaxtProvider=({children})=>{
        const [categ,setCateg]=useState()
        const [futures,setFutures]=useState(null)
        
    return(
         <UseContext.Provider value={{categ,setCateg,futures,setFutures}}>
         {children}
         </UseContext.Provider>
    )
}

export const useCategory=()=>{
     return useContext(UseContext)
}

 
export default UseContaxtProvider;