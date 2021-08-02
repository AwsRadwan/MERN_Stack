import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Show_This from '../components/Show_This';

const Update = (props) => {

    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [product, setProduct] = useState({});

    const [titleError, setTitleError] = useState(""); 
    const [priceError, setPriceError] = useState("");
    const [descriptionError, setDescriptionError] = useState("");

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

    useEffect(
        () => {
            axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => {
                setProduct(res.data.Product);
                setTitle(res.data.Product.title);
                setPrice(res.data.Product.price);
                setDescription(res.data.Product.description);
                // setStatus(true);
                console.log(res.data.Product.title)
            })
        }, []
    );

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/update/' + props.id, {
            title,
            price,
            description
        })
        .then(res=>{
            console.log(res);
            // setTitle(product.title);
            // setPrice(product.price);
            // setDescription(product.description);
            
        });
        console.log("hhahahahha")
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Title</label><br/>
                    <input type="text" onChange={(e)=>validateTitle(e.target.value)} value={title} />
                </p>
                {
                    titleError && 
                    <p style={{color: 'red'}}>{titleError}</p>
                }
                <p>
                    <label>Price</label><br/>
                    <input type="number" onChange={(e)=>validatePrice(e.target.value)} value={price} />
                </p>
                {
                    priceError && 
                    <p style={{color: 'red'}}>{priceError}</p>
                }
                <p>
                    <label>Description</label><br/>
                    <input type="text" onChange={(e)=>validateDecription(e.target.value)} value={description} />
                </p>
                {
                    descriptionError && 
                    <p style={{color: 'red'}}>{descriptionError}</p>
                }
                <input type="submit"/>
            </form>
            <br /><br />
            <Show_This id={props.id} />
        </div>
    )
}

export default Update
