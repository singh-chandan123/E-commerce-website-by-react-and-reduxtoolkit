import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Navbar from './Component/Navbar'
const App = () => {
  return (
    <div>
      <Navbar/>
<Routes>
  <Route path='/'  element={<Home/>}>  </Route>
  <Route path='/cart'  element={<Cart/>}>  </Route>

 

</Routes>
    </div>
  )
}

export default App