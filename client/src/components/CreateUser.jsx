import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import Banner from './Banner'

const CreateUser = (props) => {
    const navigate = useNavigate()
    const [name, setName] = useState("");
    const [age, setAge] = useState();
    const [symptoms, setSymptoms] = useState("");
    const [errors, setErrors] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()
        const newUser = {name, age, symptoms}
        axios.post('http://localhost:8000/api/createUser', newUser)
            .then((res) => {
                console.log(res);
                navigate('/users')
            })
            .catch((err) => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors)
            })
    }
    

    return (
        <div>
            <Banner/>
            <h1>Admit User: </h1>
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
                <button>Admit</button>
            </form>
        </div>
    )
}

export default CreateUser;