import {Link, useParams} from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Details = () => {
    const [product, setProduct] = useState('')
    const {id} = useParams()
    // const navigate  = useNavigate()

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/product/${id}`)
        .then((res) => {
            console.log("This is our details request: ", res.data)
            setProduct(res.data)
        })
        .catch(err => console.log("This is details get error ", err))

    }, [id])
    return (
        <div>
            <h1>{product.full_name}</h1>
            <h3>{product.phone}</h3>
            <h3>{product.email}</h3>
            <h3>{product.news ? "Yes" : "No"}</h3>
            <button className='btn btn-danger'><Link to='/' className='btn-link'>Home</Link></button>
        </div>
    )
}

export default Details