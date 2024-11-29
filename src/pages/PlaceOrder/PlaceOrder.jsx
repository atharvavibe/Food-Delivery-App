import React, { useContext } from 'react'
import './PlaceOrder.css'
import {StoreContext} from '../../context/storeContext' 

function PlaceOrder() {
  const{getTotalCartAmount} = useContext(StoreContext);

  return (
    <form className='placeorder'>
      <div className="placeorder-left">
        <p className="title">Delivery Information</p>
        <div className="multi-inputfield">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="email" placeholder='Email'/>
        <input type="text" placeholder='Street'/>
        <div className="multi-inputfield">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-inputfield">
          <input type="text" placeholder='Zipcode' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone'/>
      </div>
      <div className="placeorder-right">
      <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
             <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
             </div>
             <hr/>
             <div className="cart-total-details">
              <p>Delivery fees</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
             </div>
             <hr/>
             <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 :getTotalCartAmount()+2}</b>
             </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
