import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from '@reduxjs/toolkit'

const initialState = [
    {
        id: nanoid(),
        firstName: 'Avi',
        lastName: 'Cohen',
        city: 'Haifa'
    },
    {
        id: nanoid(),
        firstName: 'David',
        lastName: 'Levi',
        city: 'Tel Aviv'
    }
]

const customersSlice = createSlice({
    name: 'customers',
    initialState,
    reducers: {
        addCustomer: (state, action) => {
            state.push({ id: nanoid(), ...action.payload })
        },
        updateCustomer: (state, action) => {
            return state.map(item => {
                if (item.id === action.payload.id)
                    return { ...item, ...action.payload }
                return item
            })
        },
        deleteCustomer: (state, action) => {
            state.splice(state.findIndex(customer => customer.id === action.payload), 1)
        }
    }
})
export const selectAllCustomers = state => state.customers
export const { addCustomer, updateCustomer, deleteCustomer } = customersSlice.actions;
export default customersSlice.reducer