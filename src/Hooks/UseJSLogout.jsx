import { UseJSContext } from "./UseJSContext"
export const UseJSLogout = () =>
{
 const {dispatch} = UseJSContext() 
 const jslogout =() =>
 {
 localStorage.removeItem('JS')
 dispatch({type:'LOGOUT'})
}
return({jslogout})
}
