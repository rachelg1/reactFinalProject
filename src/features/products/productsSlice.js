import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from '@reduxjs/toolkit'

const initialState = [
    {
        id: nanoid(),
        name: 'pen',
        price: 5,
        quantity: 200
    },
    {
        id: nanoid(),
        name: 'eraser',
        price: 2,
        quantity: 300
    }
]

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.push({ id: nanoid(), ...action.payload })
        },
        updateProduct: (state, action) => {
            return state.map(item => {
                if (item.id === action.payload.id)
                    return { ...item, ...action.payload }
                return item
            })
        },
        deleteProduct: (state, action) => {
            state.splice(state.findIndex(product => product.id === action.payload), 1)
        }
    }
})
export const selectAllProducts = state => state.products

export const { addProduct, updateProduct, deleteProduct } = productsSlice.actions;
export default productsSlice.reducer