import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const purchasesSlice = createSlice({
    name: 'purchases',
    initialState,
    reducers: {
        addPurchase: (state, action) => {
            state.push(action.payload)
        },
        deletePurchase: (state, action) => {
            state.splice(state.findIndex(purchase => purchase.id === action.payload), 1)
        }
    }
})
export const selectAllPurchases = state => state.purchases

export const { addPurchase, deletePurchase } = purchasesSlice.actions;
export default purchasesSlice.reducer