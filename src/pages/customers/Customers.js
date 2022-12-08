import { Button, List, ListItem, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectAllCustomers } from '../../features/customers/customersSlice'
import { selectAllProducts } from '../../features/products/productsSlice'
import { selectAllPurchases } from '../../features/purchases/purchasesSlice'
import BuyProduct from '../components/BuyProduct'
import Menu from '../menu/Menu'

const Customers = () => {
    const [displayBuyRegion, setDisplayBuyRegion] = useState(false)
    const customers = useSelector(selectAllCustomers)
    const allPurchases = useSelector(selectAllPurchases)
    const products = useSelector(selectAllProducts)
    const [customerId, setCustomerId] = useState()

    return (
        <div>
            <Menu />

            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Customer Name</TableCell>
                        <TableCell>Product Name</TableCell>
                        <TableCell>Purchase Date</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {customers.map(customer => {
                        const purchases = allPurchases.filter(p => p.customerId === customer.id)
                        return <TableRow key={customer.id}>
                            <TableCell>{customer.firstName + ' ' + customer.lastName}</TableCell>
                            <TableCell>
                                <List>
                                    {purchases.map(p => {
                                        const productData = products.find(prod => prod.id === p.productId)
                                        return <ListItem key={p.id}>{productData.name}</ListItem>
                                    })}
                                </List>
                            </TableCell>
                            <TableCell>
                                <List>
                                    {purchases.map(p => { return <ListItem key={p.id}>{p.date}</ListItem> })}
                                </List>
                            </TableCell>
                            <TableCell>
                                <Button style={{ textTransform: 'none' }} onClick={() => {
                                    setCustomerId(customer.id)
                                    setDisplayBuyRegion(true)
                                }}>Buy Product</Button>
                            </TableCell>
                            <TableCell>
                                {displayBuyRegion && customer.id === customerId &&
                                    <BuyProduct customerId={customerId} setDisplay={setDisplayBuyRegion} />}
                            </TableCell>
                        </TableRow>
                    })}
                </TableBody>

            </Table>
        </div>



    )
}

export default Customers