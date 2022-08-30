import React from "react";
import "./PostForm.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import FileBase64 from "react-file-base64";
import instaClone from "./assets/instaClone.png"
import camera from "./assets/camera.png"

const PostForm=()=>{
    const [newPostState, setnewPostState] = useState({
        image: "",
        author: "",
        location: "",
        description: "",
      });
      const handleUserPost = () => {
        axios({
          url: "https://instaclone-10x-server-node.herokuapp.com/add",
          method: "POST",
          headers: {},
          data: newPostState,
        })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      };
    return(
         <>
        <div className="Post_head">
          <img className="post_header_img instaclone" src={instaClone} alt="insta" />
          <img className="post_header_img" src={camera} alt="camera" />
        </div>
        <hr />
        <div className="container-form">
             <h1 id="heading">Add Post</h1>
             <div className="form">
             {" "}
             <div className="form-table">
                 {" "}
            <div>
            {/* <label htmlFor="image">Image:</label> */}{" "}
            <FileBase64 type="file" multiple={false}
                onDone={({ base64 }) =>setnewPostState({ ...newPostState, image: base64 })
              } />
            </div>
            <div className="author-location">
            {/* <label htmlFor="author">Author:</label> */}
            <input
              type="text"
              className="author"
              placeholder="Author"
              onChange={(e) =>
                setnewPostState({ ...newPostState, author: e.target.value })
              }
            />{" "}
            {/* <label htmlFor="location">Location:</label> */}
            <input
              type="text"
              className="location"
              placeholder="Location"
              onChange={(e) =>
                setnewPostState({ ...newPostState, location: e.target.value })
              }
            />
          </div>{" "}
          {/* <label htmlFor="description">Description:</label> */}
          <input
            type="text"
            className="des"
            placeholder="Description"
            onChange={(e) =>
              setnewPostState({ ...newPostState, description: e.target.value })
            }
          />{" "}
          <div className="post-button">
            <Link to="/PostView">
              <button id="post-button" type="submit" onClick={handleUserPost}>
                Post
              </button>
            </Link>
          </div>{" "}

             </div>
             {" "}
             </div>


        </div>

        </>
        
    )
}

export default PostForm;