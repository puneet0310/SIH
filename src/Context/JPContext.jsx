import { createContext,useReducer,useEffect } from "react";
export const JPContext = createContext()

const authreducer = (state,action) =>
{
    switch(action.type)
    {
        case 'LOGIN':
            return {JP:action.payload}
        case 'LOGOUT':
           return  {JP:null}   
        default:
            return state
    }
}
export const JPContextProvider = ({children}) =>
{
    useEffect(() => {
        const jp = JSON.parse(localStorage.getItem('JP'))
        if(jp)
        {
            dispatch({type:'LOGIN',payload:jp})
        }
    },[])
   const [state,dispatch] = useReducer(authreducer,{
    JP:null
   })
   return(
    <JPContext.Provider value={{...state,dispatch}}>
        {children}
    </JPContext.Provider>
   )
}