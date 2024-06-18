import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {
    const {getTotalCartAmount}=useContext(StoreContext)
  return (
    <form className='place-order'>
        <div className='place-order-left'>
            <p className='title'>Delivery Information</p>
            <div className='multi-fields'>
                <input type="text" placeholder='First name'></input>
                <input type="text" placeholder='Second name'></input>
            </div>
            <input type='text' placeholder='Email address'></input>
            <input type='text' placeholder='Street'></input>
            <div className='multi-fields'>
                <input type="text" placeholder='City'></input>
                <input type="text" placeholder='State'></input>
            </div>
            <div className='multi-fields'>
                <input type="text" placeholder='Zip Code'></input>
                <input type="text" placeholder='Country'></input>
            </div>
            <input type="text" placeholder='Phone number'></input>
        </div>
        <div className='place-order-right'>
        <div className='cart-total'>
                <h2>Cart Totals</h2>
                <div>
                    <div className='cart-total-details'>
                        <p>Subtotal</p>
                        <p>Rs. {getTotalCartAmount()}</p>
                    </div>
                    <hr></hr>
                    <div className='cart-total-details'>
                        <p>Delivery Fee</p>
                        <p>Rs. {50}</p>
                    </div>
                    <hr></hr>
                    <div className='cart-total-details'>
                        <b>Total</b>
                        <b>{getTotalCartAmount() === 0 ? '-' : `Rs. ${getTotalCartAmount() + 50}`}</b>
                        

                    </div>
                    <button >PROCEED TO PAYMENT</button>
                </div>
                <div className='cart-promocode'>
            

        </div>

            </div>
        </div>
    </form>
  )
}

export default PlaceOrder