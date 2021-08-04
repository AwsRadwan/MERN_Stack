import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';

const DisplayProducts = (props) => {

    const [products, setProducts] = useState([]);
    // const [status, setStatus] = useState(false);
    // var [x, setX] = useState(props.data);

    useEffect(
        () => {
            axios.get("http://localhost:8000/api/products")
            .then(res => {
                setProducts(res.data.Products);
                // setStatus(true);
            })
        }, [products]
    );

    // const test3 = () => {
    //     axios.get("http://localhost:8000/api/products")
    //         .then(res => {
    //             setProducts(res.data.products);
    //         })
    // };

    // const sendGetRequest = async () => {
    //     try {
    //         const resp = await axios.get('http://localhost:8000/api/products');
    //         console.log(resp.data);
    //         setProducts(resp.data.products);
    //     } catch (err) {
    //         // Handle Error Here
    //         console.error(err);
    //     }
    // };
    
    // sendGetRequest();

    

    const deleteProduct = (x) => {
        // setProducts(products.filter(p => p._id !== x));
        axios.delete("http://localhost:8000/api/products/delete/" + x)
        .then(res => console.log("-I- " + res))
        .catch(err => console.log("-E- " + err))
        
    }
        
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Price</th>
                    <th scope="col">Description</th>
                    <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                {
                    products ? products.map( (item) => {
                        return (
                        <tr key={item._id}>
                            <th scope="row">{item._id}</th>
                            <td id={item._id} className="aaa">{item.title}</td>
                            <td id="zzz">{item.price}</td>
                            <td> {item.description} </td>
                            <td> <button type="button" class="btn btn-danger" onClick={e => {deleteProduct(item._id)}}>Delete</button> </td>
                        </tr>
                        )
                    }
                    
                )
                : <h1>Loading...</h1>
                }
                </tbody>
            </table>
            <br />
            <Link to="/">Add New Product ...</Link>
        </div>
    )
}

export default DisplayProducts
