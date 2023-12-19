import {useNavigate, Link} from 'react-router-dom'
import React, {useState} from 'react'
import axios from 'axios'

const Create = () => {
    const [full_name, setFull_Name] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [news, setNews] = useState(true)

    const navigate = useNavigate()

    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault()
        const product = {full_name, phone, email, news}
        console.log("This is my handle submit: ", product)
        axios.post("http://127.0.0.1:8000/api/products/new", product)
        .then((res) => {
            console.log("This is my post request: ", res)
            navigate("/")
        })
        .catch(err => {
            const errorResponse = err.response.data.errors;
            const errorArr = []
            for (const key of Object.keys(errorResponse)){
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        })
    }
    return (
        <div>
            {errors.map((err, idx) => <p key={idx}>{err}</p>)}
            <form className='form form-primary' onSubmit={handleSubmit}>
                <div>
                    <label>Full Name:</label>
                    <input type="text" onChange={(e) => setFull_Name(e.target.value)}/>
                </div>
                <div>
                    <label>Phone:</label>
                    <input type="text" onChange={(e) => setPhone(e.target.value)}/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>News</label>
                    <input type="checkbox" onChange={(e) => setNews(e.target.checked)}/>
                </div>
                <div>
                    <button type='submit' className='btn btn-primary'>Create a Product</button>  | <button className='btn btn-danger'><Link className='btn-link' to='/'>Cancel</Link></button> 
                </div>
            </form>
        </div>
    )
}

export default Create