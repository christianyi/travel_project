import { Link } from "react-router-dom"


const Banner = (props) => {

    return (
        <div className="banner">
            <p className="banner-item"><Link to='/stories' className="link-buttons">Home</Link></p>
            
            <p className="banner-item"><Link to='/' className="link-buttons">New Story</Link></p>
            
        </div>
        
    )

}

export default Banner
