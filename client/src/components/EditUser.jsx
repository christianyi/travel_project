import React, { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import Banner from "./Banner"

const EditUser = (props) => {
    const {id} = useParams()
    const [name, setName] = useState("")
    const [age, setAge] = useState()
    const [symptoms, setSymptoms] = useState("")
    const [errors, setErrors] = useState({})

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/users/${id}`)
        .then((response) => {
            console.log(response.data)
            setName(response.data.name)
            setAge(response.data.age)
            setSymptoms(response.data.symptoms)
        })
        .catch((err) => console.log(err))
    },[])

    const submitHandler = (e) => {
        e.preventDefault()
        const updatedPatient = {name, age, symptoms}
        axios.put(`http://localhost:8000/api/editUser/${id}`, updatedUser)
        .then((response) => {
            console.log(response.data)
            navigate('/users')
        }) 
        .catch((err) => {
            console.log(err.response.data.errors);
            setErrors(err.response.data.errors)
        })
    }
    return (
        <div>
            <header>
                <Banner/>
                <h2>Update {name}'s Details</h2>
                <Link to={`/${id}/details`} className="link-buttons">Details</Link>
            </header>
            <form onSubmit={submitHandler}>
                <label>Name: </label>
                <br />
                <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
                <br />
                {
                    errors.name?
                    <p>{errors.name.message}</p>:
                    null
                }
                <br />
                <label>Age: </label>
                <br />
                <input type="number" onChange={(e) => setAge(e.target.value)} value={age}/>
                <br />
                {
                    errors.age?
                    <p>{errors.age.message}</p>:
                    null
                }
                <br />
                <label>Symptoms: </label>
                <br />
                <input type="text" onChange={(e) => setSymptoms(e.target.value)} value={symptoms}/>
                <br />
                {
                    errors.symptoms?
                    <p>{errors.symptoms.message}</p>:
                    null
                }
                <br />
                <button>Update</button>
            </form>
        </div>
    )

}
export default EditUser