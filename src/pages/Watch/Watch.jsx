import { useEffect, useState } from "react";
import "./watch.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
const Watch = () => {
    const [movie , setMovie] = useState({});
    const location = useLocation();
    // console.log(location.pathname.split("/")[2]);
    const id = location.pathname.split("/")[2];
    useEffect(()=>{
        const getMovie = async()=>{
            const res = await axios.get(`http://localhost:5000/api/movie/getmovie/${id}`);
            setMovie(res.data[0]?.videoUrl);
            // console.log(res.data);
        }
        getMovie();
    } , [id]);
    console.log(movie);
    // if(!movie[0]){
    //     var {videoUrl  , ...others} = movie[0];

    // }
    // else{
    //     setLoading()
    // }
    // console.log(videoUrl);
    // const m = movie
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate("/")
    }
  return (
    <div>
      <div className="watch">
        <div className="back" onClick={handleClick}>
          <ArrowBackIcon />
          Home
        </div>
        <video src = {movie} className="video"  autoPlay controls/>
      </div>
    </div>
  );
};

export default Watch;
