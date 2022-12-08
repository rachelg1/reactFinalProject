import { Button, Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllCustomers } from '../../features/customers/customersSlice'

const Customer = (props) => {
    const { purchase } = props
    const customer = useSelector(selectAllCustomers).filter(c => c.id === purchase.customerId)[0]
    const [showProducts, setShowProducts] = useState(false)
    return (
        <div style={{ padding: 20 }}>
            <Card>
                <CardContent>
                    <Typography variant='body1'>
                        Name: <Link to={'/customers/' + customer.id} >{customer.firstName + ' ' + customer.lastName}</Link>
                    </Typography>
                    <Typography variant='body1'>
                        Purchase Data: {purchase.date}
                    </Typography>
                    <Button onClick={() => setShowProducts(true)}>Add</Button>
                    {showProducts && <div>

                    </div>}
                </CardContent>
            </Card>
        </div>

    )
}

export default Customer