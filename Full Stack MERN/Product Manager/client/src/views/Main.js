import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import axios from 'axios';
import DisplayProducts from '../components/DisplayProducts';
import { Router } from '@reach/router';


const Main = () => {

    const [x, setProducts] = useState([]);

    // useEffect(
    //     () => {
    //         axios.get("http://localhost:8000/api/products")
    //         .then(res => {
    //             setProducts(res.data.products);
    //         })
    //     }
    // );

    const getData = () => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                setProducts(res.data.products);
            })
        }

    return (
        <div>
            {/* <Router> */}
                <ProductForm />
                <DisplayProducts />
            {/* </Router> */}
        </div>
    )
}

export default Main
