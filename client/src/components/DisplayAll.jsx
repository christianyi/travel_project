import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Banner from './Banner'

const DisplayAll = (props) => {
    const { userList, setUserList } = props

    useEffect(() => {
        axios.get('http://localhost:8000/api/users')
            .then((response) => {
                console.log('user list called');
                console.log(response.data);
                setUserList(response.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <div>
            <header>
                <Banner/>
                <h2>Manager: </h2>
                <Link to='/' className="link-buttons">Admit</Link>
            </header>
            <div className='all-users'>
                {
                    patientList.map((user) => (
                        <div key={user._id} className='user'>
                            <Link to={`/${user._id}/details`}>
                                <h3>{user.name}</h3>
                            </Link>
                            <Link to={`/${user._id}/edit`}>Edit</Link>
                            <p>Age: {user.age}</p>
                            <p>{user.symptoms}</p>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default DisplayAll;