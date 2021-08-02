import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Router } from '@reach/router';
import { Link } from '@reach/router';
import { navigate } from '@reach/router';

const ProductForm = (props) => {


    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState(1);
    const [description, setDescription] = useState("");

    const [titleError, setTitleError] = useState(""); 
    const [priceError, setPriceError] = useState("");
    const [descriptionError, setDescriptionError] = useState("");
    // const [products, setProducts] = useState([]);

    // useEffect(
    //     () => {
    //         axios.get("http://localhost:8000/api/products")
    //         .then(res => {
    //             setProducts(res.data.products);
    //         })
    //     }, [products]
    // );

    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        if(titleError.length <=1 && priceError.length <=1 && descriptionError.length <=1){
            axios.post('http://localhost:8000/api/products/new', {
            title,
            price,
            description
            })
            .then(res=>{
                console.log(res);
                setTitle("");
                setPrice(0);
                setDescription("");
                
            })
            .catch(err=>console.log(err))
            // navigate("/all_products");
        }
        else {
            console.log("!!!")
        }
    }

    const validateTitle = (value) => {
        setTitle(value);
        if(value.length < 1){
            setTitleError("This field can't be empty !!");
        }
        else if(!isNaN(value)){
            setTitleError("this field can't contain a numbers");
        }
        else if(value.length < 3){
            setTitleError("Title shold not be less than 3 characters");
        }
        else {
            setTitleError("");
        }
    }

    const validateDecription = (value) => {
        setDescription(value);
        if(value.length < 10){
            setDescriptionError("Title shold not be less than 10 characters")
        }
        else if(value.length < 1){
            setDescriptionError("This field can't be empty !!")
        }
        else if(!isNaN(value)){
            setDescriptionError("this field can't contain a numbers")
        }
        else {
            setDescriptionError("");
        }
    }

    const validatePrice = (value) => {
        setPrice(value);
        if(value < 0){
            setPriceError("Price can't be less than 0 $")
        }
        else if(value == 0){
            setPriceError("Price can't be 0 $")
        }
        else if(isNaN(value)){
            setPriceError("this field can't contain other than numbers")
        }
        else {
            setPriceError("");
        }
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Title</label><br/>
                    <input type="text" onChange={(e)=>validateTitle(e.target.value)}/>
                </p>
                {
                    titleError && 
                    <p style={{color: 'red'}}>{titleError}</p>
                }
                <p>
                    <label>Price</label><br/>
                    <input type="number" onChange={(e)=>validatePrice(e.target.value)}/>
                </p>
                {
                    priceError && 
                    <p style={{color: 'red'}}>{priceError}</p>
                }
                <p>
                    <label>Description</label><br/>
                    <input type="text" onChange={(e)=>validateDecription(e.target.value)}/>
                </p>
                {
                    descriptionError && 
                    <p style={{color: 'red'}}>{descriptionError}</p>
                }
                <input type="submit"/>
            </form>
        </div>
    )
}

export default ProductForm
