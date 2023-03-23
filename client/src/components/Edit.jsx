import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams,useNavigate } from "react-router-dom"

const Edit = ({props})=>{
    const navigate = useNavigate()
    const {id}= useParams()
    const [product,setProduct] = useState({})
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
    useEffect(()=> {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res => {
            console.log(res)
            console.log(res.data)
            setProduct(res.data)
            setTitle(res.data.title)
            setPrice(res.data.price)
            setDescription(res.data.description)
        })
        .catch((err)=> console.log(err))
    },[])
    const onSubmittHandler = (e) =>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/products/${id}`,{
            title,
            price,
            description
        })
        .then(res=>{
            console.log(res); // always console log to get used to tracking your data!
            console.log(res.data);
            navigate(`/product/${id}`)
        })
        .catch((err)=> console.log(err))
    }
    return(
        <div>
            <p>{product?.title}</p>
            <p>{product?.price}</p>
            <p>{product?.description}</p>
            <form onSubmit={onSubmittHandler}>
                <label htmlFor="title">Title</label>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/><br/>
                <label htmlFor="price">Price</label>
                <input type="number" name="price" value={price} onChange={(e)=>setPrice(e.target.value)}/><br/>
                <label htmlFor="description">Description</label>
                <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)}/><br/>
                <button>Update</button>
            </form>
        </div>
    )
}
export default Edit