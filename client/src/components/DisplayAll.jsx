import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Banner from './Banner'

const DisplayAll = (props) => {
    const { storyList, setStoryList } = props

    useEffect(() => {
        axios.get('http://localhost:8000/api/stories')
            .then((response) => {
                setStoryList(response.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <div>
            <header>
                <Banner/>
                <h2>All Stories: </h2>
                
            </header>
            <div className='all-users'>
                {
                    storyList.map((story) => (
                        <div key={story._id} className='story'>
                            <Link to={`/${story._id}/details`}>
                                <h3>{story.location}</h3>
                            </Link>
                            <Link to={`/${story._id}/edit`}>Edit</Link>
                            <p>Date: {story.date}</p>
                            <p>{story.story}</p>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default DisplayAll;