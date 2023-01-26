import React from "react";
import { Link } from "react-router-dom";

import '../styles/Home.css'
const Home = () => {

   return (

      <div id="homepage">
         <div id="home">
            <img src="./images/main.jpg" id="img1" alt="main"></img>
            
         </div>
         <div id="green">10x Team 04</div>
         <Link to="/fetch" id="btn">Enter</Link>
      </div>
   )

}

export default Home;