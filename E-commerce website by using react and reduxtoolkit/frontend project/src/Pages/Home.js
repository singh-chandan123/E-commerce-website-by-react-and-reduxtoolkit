import React from 'react'
import Products from '../Component/Products'

const Home = () => {
  return (
    <div className='home'>
     <h2 className='homeheading'>Welcome to Redux toolkit store</h2>
     <h3 className='product-heading'>Products</h3>
     <Products></Products>

    </div>
  )
}

export default Home