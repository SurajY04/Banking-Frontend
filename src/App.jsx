import React from 'react'
import { BrowserRouter as Router , Routes , Route, BrowserRouter } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import AccountCreate from './pages/AccountCreate'
import Dashboard from './pages/Dashboard'
import Transaction from './pages/Transaction'
import UserVerify from './pages/userVerify'
import ProtectedRoutes from './pages/ProtectedRoutes'

const App = () => {
  return (
    <>
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Register/>} />
        <Route path='verify-email' element={<UserVerify/>}/>
        <Route path='/login' element={<Login/>} />
        <Route element={<ProtectedRoutes/>}>
        <Route path='/create-account' element={<AccountCreate/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/transaction' element={<Transaction/>} />        
        </Route>
      </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App