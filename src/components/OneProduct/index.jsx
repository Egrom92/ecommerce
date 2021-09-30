import React from 'react'
import './OneProduct.css'

const OneProduct = (props) => {
    const {img, name, price, selected, onRemove, onProductAction} = props

    return (
        <div className='one-product'>
            <span className='remove' onClick={onRemove}>&times;</span>
            <img src={img} alt={name}/>
            <h3>{name}</h3>
            <span className='price'>{price}</span>
            <button onClick={onProductAction}>{selected ? 'Remove from cart' : 'Add to card'}</button>
        </div>
    )
}

export default OneProduct