import React, { useEffect, useState } from 'react'
import axios from 'axios';

const CreateProductForm = () =>{
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState()
    const [description, setdescription] = useState("")
    const onsubmittHandler = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/products',{
            title,
            price,
            description
        })
        .then(res=>{
            console.log(res); // always console log to get used to tracking your data!
            console.log(res.data);
        })
        .catch(err=>console.log(err))
    }
    return (
        <div>
            <h1>Product Manager</h1>
            <form onSubmit={onsubmittHandler}>
                <label htmlFor="title">Title</label>
                <input type="text" onChange={(e)=>setTitle(e.target.value)}/><br/>
                <label htmlFor="price">Price</label>
                <input type="number" onChange={(e)=> setPrice(e.target.value)}/><br/>
                <label htmlFor="description">Description</label>
                <input type="text" onChange={(e)=>setdescription(e.target.value)}/><br/>
                <button>Submit</button>
            </form>
        </div>
    )
}
export default CreateProductForm
