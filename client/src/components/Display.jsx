import React, {useState, useEffect} from 'react'
import { Link} from 'react-router-dom'
import axios from 'axios'

const Display = () => {
    const [clientList, setClientsList] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/products')
        .then((bucket) => {
            console.log('This is my get bucket: ', bucket.data)
            setClientsList(bucket.data)
        })
        .catch((error) => {
            console.log('This is our catch error: ', error)
        })
    }, [loaded])
    const handleDelete = (e, id) => {
        axios.delete(`http://127.0.0.1:8000/api/product/${id}`)
        .then((res) => {
            console.log("Deleting this Client: ", res);
            setLoaded(!loaded)
        })
        .catch(err => console.log("This is handleDelete catch error: ", err))
    }
    return (
        <div>
        <button className='btn btn-dark'><Link to={'/create'} className='btn-link'>Add a Client</Link></button>
        <table className='table'>
            <thead>
                <tr>
                    <th>Full Name:</th>
                    <th>Phone Number:</th>
                    <th>Email:</th>
                    <th>Accept News Update:</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    clientList.map((glove, i) => {
                        return(
                            <tr key={i}>
                                <td>{glove.full_name}</td>
                                <td>{glove.phone}</td>
                                <td>{glove.email}</td>
                                {/* Condition ? "Truthy : "False */}
                                <td>{glove.news ? "Yes" : "No"}</td>
                                <td><button className='btn btn-warning'><Link to={`/details/${glove._id}`} className='btn-link'>View</Link></button> | <button className='btn btn-primary'><Link to={`/edit/${glove._id}`} className='btn-link'>Edit</Link></button> | <button onClick={(e) =>{handleDelete(e, glove._id)}} className='btn btn-danger'>Delete</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>

        </div>
    )
}

export default Display