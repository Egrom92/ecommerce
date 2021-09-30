import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {OneProduct} from '../../components'
import {remove, toggleSelect, count} from '../../store/products';

const ProductList = (props) => {

    const products = useSelector(state => state.products.products)
    const dispatch = useDispatch()

    const productActionHandler = (id) => {
        dispatch(toggleSelect(id))
        dispatch(count(id))
    }

    return (
        <div className='products'>
            {products.map(prod => <OneProduct
                key={prod.id}
                id={prod.id}
                name={prod.name}
                img={prod.img}
                price={prod.price}
                selected={prod.selected}
                onRemove={() => dispatch(remove(prod.id))}
                onProductAction={() => productActionHandler(prod.id)}
            />)}
        </div>
    )
}

export default ProductList