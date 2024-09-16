import React from 'react'
import Login from './Components/Login'
import { UseJPContext } from './Hooks/UseJPContext'
import { BrowserRouter, Route, Routes ,Navigate} from 'react-router-dom'
import { UseJSContext } from './Hooks/UseJSContext'
import { UseJSLogout } from './Hooks/UseJSLogout'
import { UseJPLogout } from './Hooks/UseJPLogut'

const App = () => {
  const {JS} = UseJSContext()
  const {JP} = UseJPContext()

  return (
      <BrowserRouter>
        <Routes>
        <Route path='/' element={!JP && !JS ? <Login /> : <Navigate to='/JPpage' />}></Route>
        <Route path='/JPpage' element={JP ? <h1>Job Provider Login successfull</h1> : <Navigate to='/JSpage'/>}></Route>
        <Route path='/JSpage' element={JP ? <h1>Job seeker Login successfull</h1> : <Navigate to='/JSpage'/>}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
