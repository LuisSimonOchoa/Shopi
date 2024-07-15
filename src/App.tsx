import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import './App.css'
import MyAccount from './pages/MyAccount/MyAccount'
import MyOrders from './pages/MyOrders/MyOrders'
import MyOrder from './pages/MyOrder/MyOrder'
import SignIn from './pages/SignIn/SignIn'
import NotFound from './pages/NotFound/NotFound'

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='my-account' element={<MyAccount />} />
        <Route path='my-orders' element={<MyOrders />} />
        <Route path='my-order' element={<MyOrder />} />
        <Route path='sign-in' element={<SignIn />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
