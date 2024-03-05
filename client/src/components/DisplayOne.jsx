import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams , Link } from "react-router-dom";
import Banner from "./Banner";


const DisplayOne = (props) => {

    const {id} = useParams()
    const [oneStory, setOneStory] = useState({})
    const navigate = useNavigate();


    useEffect(()=> {
        axios.get(`http://localhost:8000/api/stories/${id}`)
            .then((response) => {
                console.log(response)
                console.log(response.data)
                setOneStory(response.data)
            })
            .catch((err)=> console.log(err))
    },[id])

    const deleteStory = () => {
        axios.delete(`http://localhost:8000/api/deleteStory/${id}`)
        .then((response) => {
            console.log(response)
            console.log(response.data)
            navigate('/')
        })
        .catch((err)=> console.log(err))
    }

    return(
        <div>
            <header>
                <Banner/>
                <h1>{oneStory.location}</h1> 
                <Link to={`/${oneStory._id}/edit`} className="link-buttons">Update</Link>
            </header>
            <h2>Details:</h2>
            <p>{oneStory.story}</p>
            <br />
            <h2>Date: </h2>
            <p>{oneStory.date}</p>
            <br />
            <br />
            <Link onClick={deleteStory} className="link-buttons">Remove Story</Link>
        </div>
    )
}

export default DisplayOne