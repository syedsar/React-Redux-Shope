import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import {removeSelectedProduct, selectedProduct} from '../redux/actions/productActions'

const ProductDetails = () => {
    const product = useSelector(state => state.product);
    const {image, title, description, category, price} = product;
    const {productId} = useParams();
    const dispatch = useDispatch();
    console.log(product)

    const fetchProductDetails = async ()=>{
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch(err => console.log(err));
        dispatch(selectedProduct(response.data))
    }

    useEffect(()=>{
       if(productId && productId !== '') fetchProductDetails();

       return ()=>{
           dispatch(removeSelectedProduct())
       }
    },[productId])
    return (
        <div className= 'container'>
        {Object.keys(product).length === 0 ? (
            <h5>Loding...</h5>
        ):(
            <div className='row'>
            
                <img className = 'col-12 col-lg-4 col-md-4' src={image} alt='product' />
            
            <div className='col-12 col-lg-8 col-md-8 my-5'>
                <h1>{title}</h1>
                <h5>price : ${price}</h5>
                <h6>{category}</h6>
                <p>{description}</p>
            </div>
            </div>
        )}
        </div>
    )
}

export default ProductDetails
