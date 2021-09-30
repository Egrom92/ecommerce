import React from 'react'
import {useSelector} from 'react-redux';
import './Cart.css'

const Cart = (props) => {

    const cart = useSelector(state => state.products.cart)

    return (
        <>
            <h2 className='cart'>Products in cart: {cart}</h2>
        </>
    )
}

export default Cart