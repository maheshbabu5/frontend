
import React from "react";
//import '../styles/Card.css';
const Card = ({item}) => {

    // console.log(item)
    // let date = item.Date.String()
    // console.log(date)

    return (
        <div>

<div id="card">
                <div id="dot-cont">
                    <div>
                        <h3 className="author">{item.Author}</h3>
                        <p className="opac" >{item.Location}</p>
                    </div>
                    <div id="dot">
                        <img src="./images/dots.png" width="20em" height="20em" alt="dots"></img>
                    </div>
                </div>
                <div>
                    <img src={item.file} width="590px" height="400px" alt="item"></img>
                </div>
                <div id="date-con">
                <img src="./images/like.png" width="30px" height="20px"  alt="like" id="likeimg"></img>
                <img src="./images/share.png" width="30px" height="20px" id="imgd" alt="share"></img>
                <p id="date">{item.Date}</p>
                </div>
                <p className="opac" id='like'>{item.Likes} likes</p>
                <h3 id="des">{item.Description}</h3>
            </div>

        </div>
    )
}

export default Card;

