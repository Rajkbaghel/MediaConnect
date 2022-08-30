import React from "react";
import "./PostView.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import instaClone from "./assets/instaClone.png";
import camera from "./assets/camera.png"
import option from "./assets/option.png"
import send from "./assets/send.png"
import heart from "./assets/heart.png"
const PostView = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch("https://instaclone-10x-server-node.herokuapp.com/postView")
      .then((data) => {
        return data.json();
      })
      .then((userData) => {
      
        setUserData(userData.data.reverse());
      });
  }, []);
  return (
    <>
      <div className="Post_body">
        <div className="Post_head">
          <img
            className="post_header_img instaclone"
            src={instaClone}
            alt="insta"
          />
          <Link to="/postForm">
            <img className="post_header_img" src={camera} alt="camera" />
          </Link>
        </div>
        <hr />
        <div>
        {userData.map((user, i) => {
             return (
    
              <div className="container">
              <div className="main"  key={i}>
              <div className="header">
                <div className="name">
                            <h3>{user.author}</h3>
                            <span className="location">{user.location}</span>
                        </div>
                <img className='icon dot' src={option} alt="dots" />
              </div>
                <img className="post" src={user.image} alt="what" />
                <div className="icon-date">
                  <div className="icon-img">
                    <img className='icon' src={heart} alt="" />
                    <img className='icon' src={send} alt="" />
                  </div>
                  <span className='date'>{user.date}</span>
                </div>
                <p className='para'>{user.likes} likes</p>
                <p><strong>{user.description}</strong></p>
              
            </div>
            </div>
          )
          })}
        </div>   
          
      </div>
    </>
  );
};
export default PostView;
