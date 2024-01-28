import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../Store/Cartslice';


const Cart = () => {
    const product=useSelector((item)=>(item.cart));
    const dispatch=useDispatch();
    const handleremove=(id)=>{
dispatch(remove(id))
    }
  return (
    <div className='Cartclass'>
      <h2 className='heading'>All Selected products are here</h2>
      {
        product.map((product)=>(
           <div className='selectprod'> 
            <img className='selectimage' src={product.image}/>
            <h4 className='producttitle'>{product.title}</h4>
            <h4 className='productprice'>{product.price}</h4>
            <button className='add' onClick={()=>{handleremove(product.id)}}>Remove</button>
            </div> 
        ))
      }

    </div>
  )
}

export default Cart