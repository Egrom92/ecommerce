import React, {useCallback, useState} from 'react'
import {useDispatch} from 'react-redux';
import {add} from '../../store/products'
import './Form.css'


const Form = (props) => {

    const dispatch = useDispatch()

    const [img, setImg] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)

    const onAdd = useCallback((e)=> {

        dispatch(add({img, name, price}))

        setImg('');
        setName('');
        setPrice('');
    }, [img, name, price, dispatch])

    return (
        <>
            <h2>Add product form</h2>

                <input onChange={(e) => setImg(e.target.value)} value={img} type="url" placeholder='Product image'/>
                <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder='Product name'/>
                <input onChange={(e) => setPrice(e.target.value)} value={price} type="number" placeholder='Product price'/>
                <button onClick={() => onAdd()}>Submit</button>

        </>
    )
}

export default Form