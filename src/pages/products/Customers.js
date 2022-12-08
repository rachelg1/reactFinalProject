import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllCustomers } from '../../features/customers/customersSlice'
import { selectAllPurchases } from '../../features/purchases/purchasesSlice'
import Customer from './Customer'

const Customers = (props) => {
    const { productId } = props

    const purchases = useSelector(selectAllPurchases).filter(p => p.product_id === productId)

    return (
        <div>Customers
            {purchases.map(p => {
                return <Customer key={p.id} purchases={p} />
            })}
        </div>
    )
}

export default Customers