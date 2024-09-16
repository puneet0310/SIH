import {JPContext} from '../Context/JPContext'
import { useContext } from 'react'


export const UseJPContext = () =>
{
    const context = useContext(JPContext)
    if(!context)
    {
        throw Error("Error in JPContext")
    }
    return context
}