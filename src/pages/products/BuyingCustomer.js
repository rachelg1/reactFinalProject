import { Button, Card, CardContent, Typography } from '@mui/material'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectAllCustomers } from '../../features/customers/customersSlice'
import CustomerAdd from '../components/BuyProduct'

const BuyingCustomer = (props) => {
    const { purchase } = props
    const customer = useSelector(selectAllCustomers).find(c => c.id === purchase.customerId)
    const [displayAddRegion, setDisplayAddRegion] = useState(false)
    return (
        <div style={{ padding: 20 }}>
            <Card style={{ backgroundColor: 'lightcyan' }}>
                <CardContent>
                    <Typography variant='body1'>
                        Name: <Link to={'/customers/' + customer.id} >{customer.firstName + ' ' + customer.lastName}</Link>
                    </Typography>
                    <Typography variant='body1'>
                        Purchased Data: {purchase.date}
                    </Typography>
                    <Button onClick={() => setDisplayAddRegion(true)}>Add</Button>
                    {displayAddRegion && <CustomerAdd customerId={customer.id} setDisplay={setDisplayAddRegion} />}
                </CardContent>
            </Card>
        </div>

    )
}

export default BuyingCustomer