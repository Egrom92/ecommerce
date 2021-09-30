import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {OneProduct} from '../../components'
import {remove} from '../../store/products';

const ProductList = (props) => {

    const products = useSelector(state => state.products.products)
    const dispatch = useDispatch()

    const removeHandler = (id) => {
        dispatch(remove(id))
    }
    return (
        <div className='products'>
            {products.map(prod => <OneProduct
                key={prod.id}
                id={prod.id}
                name={prod.name}
                img={prod.img}
                price={prod.price}
                onRemove={() => removeHandler(prod.id)}
            />)}
        </div>
    )
}

export default ProductList