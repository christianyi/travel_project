import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import Banner from './Banner'

const CreateUser = (props) => {
    const navigate = useNavigate()
    const [name, setName] = useState("");
    const [age, setAge] = useState();
    const [bio, setBio] = useState("");
    const [errors, setErrors] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()
        const newUser = {name, age, bio}
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
            <h1>New User: </h1>
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
                <label>Bio: </label>
                <br />
                <input type="text" onChange={(e) => setBio(e.target.value)} value={bio}/>
                <br />
                {
                    errors.bio?
                    <p>{errors.bio.message}</p>:
                    null
                }
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default CreateUser;