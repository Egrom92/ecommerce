import React from 'react'

const OneProduct = (props) => {
    const {img, name, price, selected, onRemove, onProductAction} = props
    return (
        <div className='one-product'>
            <span onClick={onRemove}>&times;</span>
            <img src={img} alt={name}/>
            <h3>{name}</h3>
            <span>{price}</span>
            <button onClick={onProductAction}>{selected ? 'Remove from cart' : 'Add to card'}</button>
        </div>
    )
}

export default OneProduct