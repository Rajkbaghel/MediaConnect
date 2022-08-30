import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css"
import nature from "./nature.png"


const LandingPage=()=>{
    return (
        <>
           <div className="landingcontainer">
        <div className="left_side">
          <img src={nature} alt="nature"/>
        </div>
        <div className="right_side">
          <h1>10X Team 04</h1>
          <Link to="/postView">
            <button> Enter </button>
          </Link>
        </div>
      </div>
    </>
    )
}
export default LandingPage;