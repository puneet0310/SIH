import { createContext,useReducer,useEffect } from "react";
export const JSContext = createContext()

const authreducer = (state,action) =>
{
    switch(action.type)
    {
        case 'LOGIN':
            return {JS:action.payload}
        case 'LOGOUT':
           return  {JS:null}   
        default:
            return state
    }
}
export const JSContextProvider = ({children}) =>
{
    useEffect(() => {
        const User = JSON.parse(localStorage.getItem('JS'))
        console.log(User)
        if(User)
        {
            dispatch({type:'LOGIN',payload:User})
        }
    },[])
   const [state,dispatch] = useReducer(authreducer,{
    JS:null
   })
   console.log('DeanAuthContext',state)
   return(
    <JSContext.Provider value={{...state,dispatch}}>
        {children}
    </JSContext.Provider>
   )
}