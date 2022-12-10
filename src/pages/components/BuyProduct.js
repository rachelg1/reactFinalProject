import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useState } from 'react'
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux'
import { selectAllProducts, updateProduct } from '../../features/products/productsSlice'
import { addPurchase } from '../../features/purchases/purchasesSlice'


const BuyProduct = (props) => {
    const { customerId, setDisplay } = props
    const products = useSelector(selectAllProducts)
    const [product, setProduct] = useState('')
    const dispatch = useDispatch()

    const handleSave = () => {
        setDisplay(false)
        dispatch(addPurchase({
            customerId: customerId, productId: product, date: moment().format('DD MMMM YYYY')
        }))
        const prod = products.find(p => p.id === product)
        dispatch(updateProduct({ ...prod, quantity: prod.quantity - 1 }))
    }


    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="demo-simple-select-label">Select Product...</InputLabel>
                <Select
                    display="inline"
                    value={product}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Product"
                    onChange={(e) => setProduct(e.target.value)}
                >
                    {products.map(p => {
                        return <MenuItem key={p.id} value={p.id}>{p.name}</MenuItem>
                    })}
                </Select>
            </FormControl>
            <Button onClick={handleSave} >Save</Button>

        </div>
    )
}

export default BuyProduct