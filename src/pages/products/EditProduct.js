import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectAllProducts } from '../../features/products/productsSlice'
import { Card, CardContent, CardHeader, Typography } from '@mui/material'

const EditProduct = () => {
    const { id } = useParams()
    const product = useSelector(selectAllProducts).filter(p => p.id === id)[0]

    return (
        <div style={{ padding: 20 }}>
            <Card>
                <CardContent>
                    <Typography variant='body1'>
                        Name: {product.name}
                    </Typography>
                    <Typography variant='body1'>
                        Price: {product.price}
                    </Typography>
                    <Typography variant='body1'>
                        Quantity: {product.quantity}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default EditProduct