import { createContext, useContext } from "react";

 const stateContext=createContext()

 export const StateProvider=stateContext.Provider;

const stateCategroy=()=>{

    return  useContext(stateContext)
}

export default stateCategroy;