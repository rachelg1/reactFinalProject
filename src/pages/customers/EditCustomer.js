import { Card, CardContent, TextField, Button } from '@mui/material'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteCustomer, selectAllCustomers, updateCustomer } from '../../features/customers/customersSlice'
import { deletePurchaseByCustomer } from '../../features/purchases/purchasesSlice'
import PurchasedProducts from './PurchasedProducts'

const EditCustomer = () => {
    const { id } = useParams()
    const [customer, setCustomer] = useState(useSelector(selectAllCustomers).find(c => c.id === id))
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (e) => {
        let { name, value } = e.target
        value = isNaN(value) ? value : +value
        setCustomer({ ...customer, [name]: value })
    }

    const onSave = () => {
        dispatch(updateCustomer(customer))
    }

    const onDelete = () => {
        dispatch(deleteCustomer(id))
        dispatch(deletePurchaseByCustomer(id))
        navigate('/customers')
    }
    return (
        <div style={{ padding: 20 }}>
            <Card>
                <CardContent>
                    <div style={{ padding: 20 }}>
                        <TextField name='firstName' label='First Name' variand='outlined'
                            defaultValue={customer.firstName} onChange={handleChange} />
                        <TextField name='lastName' label='Last Name' variand='outlined'
                            defaultValue={customer.lastName} onChange={handleChange} />
                        <TextField name='city' label='City' variand='outlined'
                            defaultValue={customer.city} onChange={handleChange} />
                    </div>
                    <Button style={{ textTransform: 'none' }} variand='outlined' onClick={onSave}>Save</Button>
                    <Button style={{ textTransform: 'none' }} variand='outlined' onClick={onDelete}>Delete</Button>
                    <Button style={{ textTransform: 'none' }} onClick={() => navigate('/customers')}>Back</Button>
                </CardContent>
            </Card>
            <PurchasedProducts customerId={id} />
        </div>
    )
}

export default EditCustomer