import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllPurchases } from '../../features/purchases/purchasesSlice'

const Total = () => {
    const purchases = useSelector(selectAllPurchases)
    return (
        <Card>
            <CardHeader title='Total:' />
            <CardContent>
                <Typography variant='body2'>
                    {purchases.length}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Total