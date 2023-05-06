import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

const Root=createContext()

const PropertisProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,[])
   return  <Root.Provider value={[state,dispatch]}>{children}</Root.Provider>
}

export default PropertisProvider