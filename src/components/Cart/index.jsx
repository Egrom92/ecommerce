import React from 'react'
import {useSelector} from 'react-redux';

const Cart = (props) => {

    const cart = useSelector(state => state.products.cart)

    return (
        <>
            <h1>{cart}</h1>
        </>
    )
}

export default Cart