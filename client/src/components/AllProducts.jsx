import React,{useState,useEffect} from "react";
import {Link,useNavigate } from "react-router-dom"
import axios from "axios";

const AllProducts = ({allProducts,setAllProducts}) =>{
    const navigate = useNavigate()
    useEffect(()=> {
        axios.get('http://localhost:8000/api/products')
            .then(res =>{
                console.log(res.data)
                setAllProducts(res.data)
            })
            .catch((err)=>console.log(err))
    },[])
    const deleteHandler = (productId)=>{
        axios.delete(`http://localhost:8000/api/products/${productId}`)
        .then(res =>{
            console.log(res)
            console.log("then11")
            removefromdom(productId)
        })
        .catch(err=>console.log(err))
    }
    const removefromdom =productId=>{
        setAllProducts(allProducts.filter(product=>product._id != productId))
    }
    return (
        <div>
            <h1>All Products:</h1>
            {allProducts.map((oneProducts,index)=>{
                return(<div key={index}>
                    <Link to={`/product/${oneProducts._id}`}>{oneProducts.title}</Link>
                    <button onClick={(e)=>{deleteHandler(oneProducts._id)}}>Delete</button>
                    </div>)
            })}
        </div>
    )
}
export default AllProducts