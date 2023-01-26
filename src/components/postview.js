import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Card.css';
import { useNavigate } from 'react-router-dom';
const Postview=()=>{
    let navigate = useNavigate()
    return(
        <div id="head">
            <h1 id="ha" onClick={()=>{navigate('/')}}>Instaclone</h1>
            <Link to="/form" ><img src="./images/cam.png" width="25px" height="25px" id="cam" alt='cam'></img></Link>
        </div>
    )
}

export default Postview;