import { Button, FormControl, InputLabel, MenuItem, Select, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectAllCustomers } from '../../features/customers/customersSlice'
import { selectAllProducts } from '../../features/products/productsSlice'
import Menu from '../menu/Menu'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { selectAllPurchases } from '../../features/purchases/purchasesSlice'
import moment from 'moment';

const Purchases = () => {
    const products = useSelector(selectAllProducts)
    const customers = useSelector(selectAllCustomers)
    const purchases = useSelector(selectAllPurchases)

    const [productId, setProductId] = useState('')
    const [customerId, setCustomerId] = useState('')
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedPurchases, setSelectedPurchases] = useState(null)

    const filterData = () => {
        setSelectedPurchases(purchases.filter(p =>
            (productId === '' || p.productId === productId) &&
            (customerId === '' || p.customerId === customerId) &&
            (selectedDate === '' || p.date === moment(selectedDate).format('DD MMMM YYYY'))
        ))
    }

    return (
        <div>
            <Menu />

            <FormControl sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="demo-simple-select-label">Customer</InputLabel>
                <Select
                    display="inline"
                    value={customerId}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Customer"
                    onChange={(e) => setCustomerId(e.target.value)}
                >
                    <MenuItem value=''>{''}</MenuItem>
                    {customers.map(c => {
                        return <MenuItem key={c.id} value={c.id}>{c.firstName + ' ' + c.lastName}</MenuItem>
                    })}
                </Select>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="demo-simple-select-label">Product</InputLabel>
                <Select
                    display="inline"
                    value={productId}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Product"
                    onChange={(e) => setProductId(e.target.value)}
                >
                    <MenuItem value=''>{''}</MenuItem>
                    {products.map(p => {
                        return <MenuItem key={p.id} value={p.id}>{p.name}</MenuItem>
                    })}
                </Select>
            </FormControl>
            <div style={{ margin: '0 auto', width: '200px' }}>
                <DatePicker
                    dateFormat='dd/MM/yyyy'
                    selected={selectedDate}
                    onChange={(date) => {
                        console.log('onChange')
                        if (date instanceof Date)
                            setSelectedDate(date)

                        else
                            setSelectedDate('')



                    }}
                />
            </div>

            <Button onClick={filterData}>Search</Button>

            {selectedPurchases !== null &&
                (selectedPurchases.length > 0 ? <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Customer Name
                            </TableCell>
                            <TableCell>
                                Product
                            </TableCell>
                            <TableCell>
                                Purchased Date
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {selectedPurchases.map(purchase => {
                            const customer = customers.find(c => c.id === purchase.customerId)
                            return <TableRow key={purchase.id}>
                                <TableCell>
                                    {customer.firstName + ' ' + customer.lastName}
                                </TableCell>
                                <TableCell>
                                    {products.find(p => p.id === purchase.productId).name}
                                </TableCell>
                                <TableCell>
                                    {purchase.date}
                                </TableCell>
                            </TableRow>
                        })}
                    </TableBody>
                </Table> :
                    <Typography variant='h5'>No Data Found</Typography>)}
        </div>
    )
}

export default Purchases