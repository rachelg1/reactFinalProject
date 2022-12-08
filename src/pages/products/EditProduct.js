import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateProduct, deleteProduct, selectAllProducts } from '../../features/products/productsSlice'
import { Card, CardContent, TextField, Button } from '@mui/material'
import { deletePurchaseByProduct } from '../../features/purchases/purchasesSlice'
import BuyingCustomers from './BuyingCustomers'

const EditProduct = () => {
    const { id } = useParams()
    const [product, setProduct] = useState(useSelector(selectAllProducts).find(p => p.id === id))
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (e) => {
        let { name, value } = e.target
        value = isNaN(value) ? value : +value
        setProduct({ ...product, [name]: value })
    }

    const onSave = () => {
        dispatch(updateProduct(product))
    }

    const onDelete = () => {
        dispatch(deleteProduct(id))
        dispatch(deletePurchaseByProduct(id))
        navigate('/products')
    }

    return (
        <div style={{ padding: 20 }}>
            <Card>
                <CardContent>
                    <div style={{ padding: 20 }}>
                        <TextField name='name' label='Name' variand='outlined'
                            defaultValue={product.name} onChange={handleChange} />
                        <TextField name='price' label='Price' variand='outlined'
                            defaultValue={product.price} onChange={handleChange} />
                        <TextField name='quantity' label='Quantity' variand='outlined'
                            defaultValue={product.quantity} onChange={handleChange} />
                    </div>
                    <Button style={{ textTransform: 'none' }} variand='outlined' onClick={onSave}>Save</Button>
                    <Button style={{ textTransform: 'none' }} variand='outlined' onClick={onDelete}>Delete</Button>
                    <Button style={{ textTransform: 'none' }} onClick={() => navigate('/products')}>Back</Button>
                </CardContent>
            </Card>
            <BuyingCustomers />
        </div>
    )
}

export default EditProduct