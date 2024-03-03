import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams , Link } from "react-router-dom";
import Banner from "./Banner";


const DisplayOne = (props) => {

    const {id} = useParams()
    const [oneUser, setOneUser] = useState({})
    const navigate = useNavigate();


    useEffect(()=> {
        axios.get(`http://localhost:8000/api/users/${id}`)
            .then((response) => {
                console.log(response)
                console.log(response.data)
                setOnePatient(response.data)
            })
            .catch((err)=> console.log(err))
    },[id])

    const deletePatient = () => {
        axios.delete(`http://localhost:8000/api/deleteUser/${id}`)
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
                <h1>{oneUser.name}'s Details</h1> 
                <Link to={`/${oneUser._id}/edit`} className="link-buttons">Update</Link>
            </header>
            <br />
            <h2>{oneUser.age} years of age.</h2>
            <br />
            <h2>Symptoms:</h2>
            <p>{oneUser.symptoms}</p>
            <br />
            <Link onClick={deleteUser} className="link-buttons">Discharge User</Link>
        </div>
    )
}

export default DisplayOne