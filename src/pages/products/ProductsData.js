import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllProducts } from '../../features/products/productsSlice'
import ProductData from './ProductData'

const ProductsData = () => {
    const productList = useSelector(selectAllProducts)

    return (
        <div>
            {productList.map(prod => {
                return <ProductData key={prod.id} product={prod} />
            })}
        </div>
    )
}

export default ProductsData