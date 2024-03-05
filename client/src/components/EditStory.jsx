import React, { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import Banner from "./Banner"

const EditStory = (props) => {
    const {id} = useParams()
    const [location, setLocation] = useState("")
    const [date, setDate] = useState()
    const [story, setStory] = useState("")
    const [errors, setErrors] = useState({})

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/stories/${id}`)
        .then((response) => {
            console.log(response.data)
            setLocation(response.data.location)
            setDate(response.data.date)
            setStory(response.data.story)
        })
        .catch((err) => console.log(err))
    },[])

    const submitHandler = (e) => {
        e.preventDefault()
        const updatedStory = {location, date, story}
        axios.put(`http://localhost:8000/api/editStory/${id}`, updatedStory)
        .then((response) => {
            console.log(response.data)
            navigate('/stories')
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
                <h2>Update {location} Details</h2>
                <Link to={`/${id}/details`} className="link-buttons">Details</Link>
            </header>
            <form onSubmit={submitHandler}>
                <label>Location: </label>
                <br />
                <input type="text" onChange={(e) => setLocation(e.target.value)} value={location}/>
                <br />
                {
                    errors.location?
                    <p>{errors.location.message}</p>:
                    null
                }
                <br />
                <label>Date: </label>
                <br />
                <input type="date" onChange={(e) => setDate(e.target.value)} value={date}/>
                <br />
                {
                    errors.date?
                    <p>{errors.date.message}</p>:
                    null
                }
                <br />
                <label>Story: </label>
                <br />
                <input type="text" onChange={(e) => setStory(e.target.value)} value={story}/>
                <br />
                {
                    errors.story?
                    <p>{errors.story.message}</p>:
                    null
                }
                <br />
                <button>Update</button>
            </form>
        </div>
    )

}
export default EditStory