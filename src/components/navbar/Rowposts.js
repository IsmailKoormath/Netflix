import React, { useEffect, useState } from "react";
import Youtube from "react-youtube"
import "./Rowpost.css";
import axios from "../axios";

import { imageUrl,Api_Key } from "../../constants/constants";
import { useRevalidator } from "react-router-dom";

const Rowposts = (props) => {
  const [movies, setmovies] = useState([]); //card images
  const [urlId,seturlId] =useState("")
  useEffect(() => {
    axios
      .get(props.url)
      .then((Response) => {
        setmovies(Response.data.results);
      });
  }, []);
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }}
  const handleMovie=(id)=>{
    console.log(id);
    
    axios.get(`/movie/${id}/videos?api_key=${Api_Key}&language=en-US`).then(Response=>{
      if(Response.data.results.length!==0){
      seturlId(Response.data.results[0])}
    })
  }
  
  return (
    <div>
      <div className="second-page">
        <h3 className="netflix-original">{props.title}</h3>
        <div className="row card-container">
          {movies.map((obj) => (
            <img onClick={()=>handleMovie(obj.id)}
              className={props.isSmall ? "small-card-img":"card-img"}
              src={`${imageUrl + obj.backdrop_path}`}
              alt="image"
            />
          ))}
        </div>
       {urlId &&  <Youtube opts={opts} videoId={urlId.key}/>}
      </div>
    </div>
  );
};

export default Rowposts;
