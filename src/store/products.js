import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => ({
    products: [
        {
            id: 1,
            name: 'Vildist toasuss',
            img: 'https://www.abcking.ee/media/catalog/product/cache/1/small_image/540x/9df78eab33525d08d6e5fb8d27136e95/4/7/4740453174359_1.jpg',
            price: '19.99'
        },
        {
            id: 2,
            name: 'Meestesuss SARU',
            img: 'https://www.abcking.ee/media/catalog/product/cache/1/small_image/540x/9df78eab33525d08d6e5fb8d27136e95/4/7/4740453250404_1.jpg',
            price: '39.99'
        }
    ],
    cart: 0
});

export const postsSlice = createSlice({
    name: "products",

    initialState: getInitialState(),

    reducers: {
        add(state, action) {
            const {name, img, price} = action.payload
            const item = {
                id: 1 + Math.max(0, ...state.products.map((x) => x.id)),
                name,
                img,
                price
            };
            state.products.push(item);
        },


        remove(state, action) {
            state.products = state.products.filter((el) => el.id !== action.payload);
        },

    }
});

export const { add, remove } = postsSlice.actions;

export default postsSlice.reducer;
