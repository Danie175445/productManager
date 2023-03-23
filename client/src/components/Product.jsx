import axios from "axios"
import React,{useState,useEffect} from "react"
import {Link,useParams,useNavigate} from "react-router-dom"

const Product = ({props}) =>{
    const {id}= useParams()
    const [product,setProduct] = useState({})
    const navigate = useNavigate()
    useEffect(()=> {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res => {
            console.log(res)
            setProduct(res.data)
        })
        .catch((err)=> console.log(err))
    },[])
    const deleteHandler = ()=>{
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then(res =>{
            console.log(res)
            navigate("/")
        })
        .catch(err=>console.log(err))
    }
    return(
        <div>
            <h1>{product.title}</h1>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <Link to={`/product/edit/${product._id}`}>Edit </Link><Link to={'/'}> Home</Link> <button onClick={deleteHandler}>Delete</button>
        </div>
    )
}
export default Product