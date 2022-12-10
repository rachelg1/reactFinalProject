import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllPurchases } from '../../features/purchases/purchasesSlice'
import BuyingCustomer from './BuyingCustomer'

const BuyingCustomers = (props) => {
    const { productId } = props

    const purchases = useSelector(selectAllPurchases).filter(p => p.productId === productId)

    return (
        <div>
            {purchases.map(p => {
                return <BuyingCustomer key={p.id} purchase={p} />
            })}
        </div>
    )
}

export default BuyingCustomers