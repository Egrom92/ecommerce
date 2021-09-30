import React from 'react'

const OneProduct = (props) => {
    const {img, name, price, onRemove} = props

    return (
        <div className='one-product'>
            <span onClick={onRemove}>&times;</span>
            <img src={img} alt={name}/>
            <h3>{name}</h3>
            <span>{price}</span>
            <button onClick={onRemove}>Add to card</button>
        </div>
    )
}

export default OneProduct