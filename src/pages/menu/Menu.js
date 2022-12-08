import { Table, TableBody, TableCell, TableRow } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <div>
            <Table style={{ backgroundColor: 'lightyellow' }}>
                <TableBody>
                    <TableRow>
                        <TableCell style={{ textAlign: 'center' }}>
                            <Link to='/products'>Products</Link>
                        </TableCell>
                        <TableCell style={{ textAlign: 'center' }}>
                            <Link to='/customers'>Customers</Link>
                        </TableCell>
                        <TableCell style={{ textAlign: 'center' }}>
                            <Link to='/purchases'>Purchases</Link>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>

        </div>
    )
}

export default Menu