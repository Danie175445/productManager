import React,{useState,useEffect} from "react";
import CreateProductForm from "./CreateProductForm";
import AllProducts from "./AllProducts";

const HomePage = ({allProducts,setAllProducts }) =>{

    return(
        <div>
            <CreateProductForm allProducts = {allProducts} setAllProducts = {setAllProducts}/>
            <AllProducts allProducts = {allProducts}/>
        </div>
    )
}
export default HomePage