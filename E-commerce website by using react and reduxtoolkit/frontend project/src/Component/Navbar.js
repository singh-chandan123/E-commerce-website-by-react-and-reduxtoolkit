import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../Pages/Home'
import Cart from '../Pages/Cart'
import {  useDispatch, useSelector } from 'react-redux'

const Navbar = () => {
  const totalproduct=useSelector((item)=>( item.cart)
   
  )
  return (
    <div className='navbar'>
<span className='logo'>REDUX LOGO</span>
<Link to="/" className='homelink'>Home</Link>
<Link to= "/cart" className='cartlink'>Cart</Link>
<span className='cartitem'>CART ITEM:{totalproduct.length}</span>
    </div>
  )
}

export default Navbar