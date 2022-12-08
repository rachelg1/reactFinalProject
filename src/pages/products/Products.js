import { Grid } from '@mui/material'
import React from 'react'
import ProductsData from './ProductsData'
import Total from './Total'

const Products = () => {
    return (
        <div style={{ padding: 20 }}>
            <Grid container
                spacing={5}>
                <Grid
                    item
                    lg={9}
                    sm={9}
                    xl={9}
                    xs={12}
                >

                    <ProductsData />
                </Grid>
                <Grid
                    item
                    lg={3}
                    sm={3}
                    xl={3}
                    xs={12}
                >
                    <Total />
                </Grid>
            </Grid>
        </div>
    )
}

export default Products