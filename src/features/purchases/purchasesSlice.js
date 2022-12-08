import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from '@reduxjs/toolkit'

const initialState = []

const purchasesSlice = createSlice({
    name: 'purchases',
    initialState,
    reducers: {
        addPurchase: (state, action) => {
            state.push({ id: nanoid(), ...action.payload })
        },
        deletePurchase: (state, action) => {
            state.splice(state.findIndex(purchase => purchase.id === action.payload), 1)
        },
        deletePurchaseByProduct: (state, action) => {
            return state.filter(purchase => purchase.productId !== action.payload)
        }
    }
})
export const selectAllPurchases = state => state.purchases

export const { addPurchase, deletePurchase, deletePurchaseByProduct } = purchasesSlice.actions;
export default purchasesSlice.reducer