import React,{useState,useEffect} from "react";
import CreateProductForm from "./CreateProductForm";
import AllProducts from "./AllProducts";
import axios from 'axios';
// do i need the state

const HomePage = () =>{
    const [allProducts,setAllProducts] = useState([])
    return(
        <div>
            <CreateProductForm allProducts = {allProducts} setAllProducts = {setAllProducts}/>
            <AllProducts allProducts = {allProducts} setAllProducts = {setAllProducts}/>
        </div>
    )
}
export default HomePage