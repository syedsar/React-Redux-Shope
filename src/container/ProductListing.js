import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from './Product'
import {setProducts} from '../redux/actions/productActions'

const ProductListing = () => {

    const products = useSelector(state => state.allProducts.products)
    const dispatch = useDispatch();

    const fetchProducts = async ()=>{
        const response = await axios.get('https://fakestoreapi.com/products').catch(err => console.log(err));
        dispatch(setProducts(response.data))
    }

    useEffect(()=>{
        fetchProducts();
    },[])

    console.log(products)
    return (
        <div className = 'container d-flex flex-wrap'>
            <Product />
        </div>
    )
}

export default ProductListing
