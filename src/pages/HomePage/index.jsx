import React from 'react'
import {Cart, Form, ProductList} from '../../components';

import './HomePage.css'


const HomePage = (props) => {
    return (
        <>
            <header>
                <Form/>
                <Cart/>
            </header>

            <ProductList/>
        </>
    )
}

export default HomePage