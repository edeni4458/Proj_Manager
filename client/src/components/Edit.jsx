import {useNavigate, Link, useParams} from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Edit = () => {
    const [full_name, setFull_Name] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [news, setNews] = useState(true)

    const {id} = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/product/${id}`)
        .then((res) => {
            console.log("This is our edit request: ", res.data)  
            const product = res.data
            setFull_Name(product.full_name)      
            setPhone(product.phone)      
            setEmail(product.email)      
            setNews(product.news)      
        })
        .catch(err => console.log("This is edit error ", err))

    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault()
        const product = {full_name, phone, email, news}
        console.log("This is my handle submit: ", product)
        axios.put(`http://127.0.0.1:8000/api/product/${id}`, product)
        .then((res) => {
            console.log("This is my put/update request: ", res)
            navigate("/")
        })
        .catch(err => console.log("This is edit/update error: ", err))
    }
    return (
        <div>
            
            <form onSubmit={handleSubmit} className='form form-primary'>
                <div>
                    <label>Full Name:</label>
                    <input value={full_name} type="text" onChange={(e) => setFull_Name(e.target.value)}/>
                </div>
                <div>
                    <label>Phone:</label>
                    <input value={phone} type="text" onChange={(e) => setPhone(e.target.value)}/>
                </div>
                <div>
                    <label>Email:</label>
                    <input value={email} type="text" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>News</label>
                    <input checked={news} type="checkbox" onChange={(e) => setNews(e.target.checked)}/>
                </div>
                <div>
                    <button type='submit' className='btn btn-primary'>Update Client</button>  | <button className='btn btn-danger'><Link className='btn-link' to='/'>Cancel</Link></button> 
                </div>
            </form>
        </div>
    )
}

export default Edit