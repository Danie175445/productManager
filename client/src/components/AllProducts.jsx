import React,{useState,useEffect} from "react";
import {Link } from "react-router-dom"
import axios from "axios";

const AllProducts = ({allProducts}) =>{
    
    return (
        <div>
            <h1>All Products:</h1>
            {allProducts.map((oneProducts,index)=>{
                return(<div key={index}><Link to={`/product/${oneProducts._id}`}>{oneProducts.title}</Link></div>)
            })}
        </div>
    )
}
export default AllProducts