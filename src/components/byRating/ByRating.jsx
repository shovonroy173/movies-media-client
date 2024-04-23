import "./byrating.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ListItem from "../listItem/ListItem";
import { useEffect, useState } from "react";
import axios from "axios";

const ByRating = () => {

  
  const responsive = {
    superLargeDesktop: {

      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [movies , setMovies] = useState([]);

  

  useEffect(()=>{
    const getMovies = async()=>{
      const res = await axios.get("https://movies-media-api.onrender.com/api/movie/getmovies/getbyrating");

      setMovies(res.data);
    }
    getMovies();
    
  } , []);


  return (
    <div className="list" >
      
      <Carousel responsive={responsive} 
      autoPlay={true}
      infinite={true}
      showDots={true}
      partialVisible={true} 
      >
        {movies?.map((item)=>(
          <ListItem item={item} key={item._id}/>

          
        ))}
        
      </Carousel>
      
    </div>
  );
};

export default ByRating;
