import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent.js'
import {fetchProducts} from '../redux/actions/productAction'


function ProductList() {
    const products = useSelector((state) => state);
    const dispatch = useDispatch()

    // const fetchProducts = async () => {
    //   const response = await axios.get('https://fakestoreapi.com/products')
    //         .catch((err) => {
    //             console.log("error", err)
    //         })
    //         dispatch(setProducts(response.data))
    // }

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    console.log("products:", products)
  return (
    <div className="ui grid container">
        <ProductComponent />
    </div>
  )
}

export default ProductList