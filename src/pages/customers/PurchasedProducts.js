import { Card, List, ListItem } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectAllProducts } from '../../features/products/productsSlice'
import { selectAllPurchases } from '../../features/purchases/purchasesSlice'

const PurchasedProducts = (props) => {
    const { customerId } = props
    const purchases = useSelector(selectAllPurchases).filter(p => p.customerId === customerId)
    const products = useSelector(selectAllProducts)

    return (
        <div style={{ padding: 20 }}>
            <Card>
                <List>
                    {purchases.map(purchase => {
                        return <ListItem key={purchase.id}>
                            <Link to={'/products/' + purchase.productId}>{products.find(prod => prod.id === purchase.productId).name}</Link>
                        </ListItem>
                    })}
                </List>
            </Card>
        </div>
    )
}

export default PurchasedProducts