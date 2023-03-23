import './App.css';
import React,{useState,useEffect} from "react";
import {BrowserRouter,Routes,Route}  from 'react-router-dom'
import HomePage from './components/HomePage';
import Edit from './components/Edit';
import CreateProductForm from './components/CreateProductForm';
import AllProducts from './components/AllProducts';
import Product from './components/Product';
// should i remove the unused componesnts 
function App() {
  const [product,setProduct] = useState({})
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/product/:id' element={<Product product={product} setProduct={setProduct}/>}/>
          <Route path='/product/edit/:id' element={<Edit />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
