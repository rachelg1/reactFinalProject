import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, Typography } from '@mui/material'
import BuyingCustomers from './BuyingCustomers'

const ProductData = (props) => {
    const { product } = props
    return (
        <div style={{ padding: 10 }}>
            <Card>
                <CardContent>
                    <Typography variant='body1'>
                        Name: <Link to={product.id} >{product.name}</Link>
                    </Typography>
                    <Typography variant='body1'>
                        Price: {product.price}
                    </Typography>
                    <Typography variant='body1'>
                        Quantity: {product.quantity}
                    </Typography>
                </CardContent>
            </Card>
            <BuyingCustomers productId={product.id} />
        </div>
    )
}

export default ProductData