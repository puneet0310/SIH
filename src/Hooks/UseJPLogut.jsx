import { UseJPContext } from "./UseJPContext"
export const UseJPLogout = () =>
{
 const {dispatch} = UseJPContext() 
 const logout =() =>
 {
 localStorage.removeItem('JP')
 dispatch({type:'LOGOUT'})
}
return({logout})
}
