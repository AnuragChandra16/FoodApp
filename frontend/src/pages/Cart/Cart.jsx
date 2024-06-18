import React, { useContext } from 'react'

import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
const Cart = () => {
    const {cartItems,food_list,removeFromCart,getTotalCartAmount} = useContext(StoreContext);
    const navigate=useNavigate();
  return (
    <div className='cart'>
        <div className='cart-items'>
            <div className='cart-items-title'>
                <p>Items</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <br />
            <hr />
            {food_list.map((item,index)=>{
                if(cartItems[item._id]>0){
                    return(
                        <div>

                        <div className='cart-items-title cart-items-item'>
                            <img src={item.image} alt=""></img>
                            <p>{item.name}</p>
                            <p>Rs. {item.price}</p>
                            <p>{cartItems[item._id]}</p>
                            <p>Rs. {item.price*cartItems[item._id]}</p>
                            <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
                        </div>
                        <hr></hr>
                        </div>
                    )
                }
            })}
        </div>
        <div className='cart-bottom'>
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
                    <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
                </div>
                <div className='cart-promocode'>
            

        </div>

            </div>
        </div>
            <div>
                <p>If you have a promo code,Enter it here</p>
                <div className='cart-promocode-input'>
                    <input type="text" placeholder='promo code'></input>
                    <button>Submit</button>
                </div>
            </div>
        

    </div>
  )
}

export default Cart