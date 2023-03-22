import './App.css';
import React,{useState,useEffect} from "react";
import axios from 'axios';
import {BrowserRouter,Routes,Route}  from 'react-router-dom'
import HomePage from './components/HomePage';
import CreateProductForm from './components/CreateProductForm';
import AllProducts from './components/AllProducts';
import Product from './components/Product';

function App() {
  const [allProducts,setAllProducts] = useState([])
    useEffect(()=> {
        axios.get('http://localhost:8000/api/products')
            .then(res =>{
                console.log(res.data)
                setAllProducts(res.data)
            })
            .catch((err)=>console.log(err))
    },[])
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage allProducts = {allProducts} setAllProducts = {setAllProducts}/>}/>
          <Route path='/product/:id' element={<Product />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
