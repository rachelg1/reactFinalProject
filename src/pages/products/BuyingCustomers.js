import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllPurchases } from '../../features/purchases/purchasesSlice'
import Customer from './BuyingCustomer'

const BuyingCustomers = (props) => {
    const { productId } = props

    const purchases = useSelector(selectAllPurchases).filter(p => p.product_id === productId)

    return (
        <div>
            {purchases.map(p => {
                return <Customer key={p.id} purchases={p} />
            })}
        </div>
    )
}

export default BuyingCustomers