import {JSContext} from '../Context/JSContext'
import { useContext } from 'react'


export const UseJSContext = () =>
{
    const context = useContext(JSContext)
    if(!context)
    {
        throw Error("Error in UserContext")
    }
    return context
}