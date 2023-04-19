import React, { useEffect, useState } from "react";
// import Button from "react-bootstrap/Button";
import Rowposts from "./Rowposts";
import {Actions,original} from "./url"
import "./Netflix.css";
import axios from "../axios"
import { Api_Key,imageUrl } from "../../constants/constants";
const Netflix = () => {
  const [movie, setmovie] = useState() //background image changing
  
  useEffect(()=>{
  axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${Api_Key}&language=en-US`).then((Response)=>{
    console.log(Response.data.results)
    setmovie( Response.data.results.sort(function (a, b) { return 0.5 - Math.random() })[0])

    


  })
 
  },[])
  return (
    <>
    <div >
      
      <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path :""})` }}
       className="main-page">
        <div className="navbar">
          <div className="logo">
            <img
              className="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
              alt=""
            />
          </div>

          <img
            className="avatar"
            src="https://image.winudf.com/v2/image1/Y29tLmJsYWNrcGVhcmx4LmF2dGFybWFrZXJfc2NyZWVuXzRfMTU1MjI0MTk3NF8wNjk/screen-4.jpg?fakeurl=1&type=.webp"
            alt=""
          />
        </div>
        
        
          <div className="banner row">
            
            <div className=" heading col-md-12">
              <h1>
                {movie?movie.title : ""}
              </h1>
              <h2 className="second-heading">
                {movie ? movie.overview : ""}
              </h2>
              <button className="btn">Play</button>
              <button className="btn">Mylist</button>
            </div>
            <div className="side-image col-md-12   ">
              <img
                className="image1"
                src="https://images.news18.com/ibnkhabar/uploads/2022/04/Netflix-16512110963x2.jpg"
                alt=""
              />
              <img
                className="double-img"
                src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmV0ZmxpeHxlbnwwfHwwfHw%3D&w=1000&q=80"
                alt=""
              />
            </div>
          </div>
        
      </div>
     <Rowposts url={original} title="Netflix originals"/>
     <Rowposts url={Actions} title="Actions" isSmall />
      </div>
    </>
  );
};

export default Netflix;
