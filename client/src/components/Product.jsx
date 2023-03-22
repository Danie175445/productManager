import axios from "axios"
import React,{useState,useEffect} from "react"
import { useParams } from "react-router-dom"

const Product = (props) =>{
    const {id} = useParams()
    const [produt,setProduct] = useState({})
    useEffect(()=> {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res => {
            console.log(res)
            setProduct(res.data[0])
        })
        .catch((err)=> console.log(err))
    },[])

    return(
        <div>
            <h1>{produt.title}</h1>
            <p>{produt.price}</p>
            <p>{produt.description}</p>
        </div>
    )
}
export default Product