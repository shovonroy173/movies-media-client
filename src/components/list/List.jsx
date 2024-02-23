import "./list.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ListItem from "../listItem/ListItem";
import { useEffect, useState } from "react";
import axios from "axios";
const List = (item) => {
  // console.log("LINE AT 8 IN LIST" ,  item);
  
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
  // const [movie , setMovie] = useState([]);
  

  useEffect(()=>{
    const getMovies = async()=>{
      if(item.category === "new"){
        const res = await axios.get(`https://movies-media-api.onrender.com/api/movie/getmovies/getbycreation`);
      // setMovie([...Object.values(item)]?.[0]);
      setMovies(res.data)
      }
      else if(item.category === "mylist"){
        const res = await axios.get(`https://movies-media-api.onrender.com/api/movie/getmovies/getbywishlist/${item.userId}`);
      // setMovie([...Object.values(item)]?.[0]);
      setMovies(res.data)
      }else{
      const res = await axios.get(`https://movies-media-api.onrender.com/api/movie/getmovies/getbycategory/${item.category}`);
      // setMovie([...Object.values(item)]?.[0]);
      setMovies(res.data);
      }
    }
    getMovies();
    
  } , [item]);
  // console.log("LINE AT 40" , movie.length);
  // console.log("LINE AT 41" , movies);

  return (
    <div className="list" id={item.id}>
      <Carousel responsive={responsive} 
      autoPlay={true}
      infinite={true}
      showDots={true}
      partialVisible={true} 
      >
        {movies?.map((item , index)=>(
          <ListItem item={item} key={index}/>
          // <div key={index}>index</div>
          
        ))}
        
      </Carousel>
    </div>
  );
};

export default List;
