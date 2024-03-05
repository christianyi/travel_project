import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import Banner from './Banner'

const CreateStory = (props) => {
    const navigate = useNavigate()
    const [location, setLocation] = useState("");
    const [date, setDate] = useState();
    const [story, setStory] = useState("");
    const [errors, setErrors] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()
        const newStory = {location, date, story}
        axios.post('http://localhost:8000/api/createStory', newStory)
            .then((res) => {
                console.log(res);
                navigate('/stories')
            })
            .catch((err) => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors)
            })
    }
    

    return (
        <div>
            <Banner/>
            <h1>New Story: </h1>
            <form onSubmit={submitHandler}>
                <label>Where did the Story take place? </label>
                <br />
                <input type="text" onChange={(e) => setLocation(e.target.value)} value={location}/>
                <br />
                {
                    errors.location?
                    <p>{errors.location.message}</p>:
                    null
                }
                <br />
                <label>When did the Story take place? </label>
                <br />
                <input type="date" onChange={(e) => setDate(e.target.value)} value={date}/>
                <br />
                {
                    errors.date?
                    <p>{errors.date.message}</p>:
                    null
                }
                <br />
                <label>What happened in your story? </label>
                <br />
                <input type="text" onChange={(e) => setStory(e.target.value)} value={story}/>
                <br />
                {
                    errors.story?
                    <p>{errors.story.message}</p>:
                    null
                }
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default CreateStory;