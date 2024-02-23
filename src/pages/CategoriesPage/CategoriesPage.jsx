import "./categoriespage.scss";

import "react-multi-carousel/lib/styles.css";
import PlayCircle from "@mui/icons-material/PlayCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import Navbar from "../../components/navbar/Navbar";

const CategoriesPage = () => {
  const location = useLocation();
  const type = location?.state?.option;
  console.log(type);
  const user = useSelector((state) => state.user);
  const [isHovered, setIsHovered] = useState(false);
  const [genreMov, setGenreMov] = useState([]);
  const navigate = useNavigate();
  const handleClick = async (item) => {
    axios.put(`http://localhost:5000/api/movie/view/${item}`);
    // console.log((await res).data);
    navigate(`/watch/${item?._id}`);
  };
  const handleLike = async (item) => {
    axios.put(`http://localhost:5000/api/movie/like/${item}`, {
      userId: user?.currentUser._id,
    });
    // console.log("LINE AT 24", (await res).data);
  };
  const handleDislike = async (item) => {
    axios.put(`http://localhost:5000/api/movie/dislike/${item}`, {
      userId: user?.currentUser._id,
    });
    // console.log("LINE AT 24", (await res).data);
  };
  const handleWishlist = async (item) => {
    axios.put(`http://localhost:5000/api/movie/wishlist/${item}`, {
      userId: user?.currentUser._id,
    });
    // console.log("LINE AT 24", (await res).data);
  };
  useEffect(() => {
    const getByGenre = async () => {
      const res = await axios.get(
        `http://localhost:5000/api/movie/getmovies/getbygenre/${type}`
      );
      setGenreMov(res.data);
    };
    getByGenre();
  }, [type]);

  return (
    <div>
      <Navbar genre='true' />
      <div className="categoriesPage">
        {genreMov ? (
          genreMov.map((item, index) => (
            <div
              className="listItem"
              key={index}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {!isHovered && (
                <img src={item?.imgUrl} alt="" className="listImg" />
              )}

              {isHovered && (
                <>
                  <video
                    src={item?.videoUrl}
                    autoPlay={true}
                    className="listImg"
                    onClick={() => handleClick(item._id)}
                  />
                </>
              )}
              <div className="listDetails">
                <div className="lIcons">
                  <PlayCircle onClick={() => handleClick(item._id)} />
                  <AddCircleIcon onClick={() => handleWishlist(item._id)} />
                  <ThumbUpIcon onClick={() => handleLike(item._id)} />
                  <ThumbDownIcon onClick={() => handleDislike(item._id)} />
                </div>
                <p className="lTime">1 hours 14 mins</p>
                <div className="lDesc">{item?.desc}</div>
              </div>
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default CategoriesPage;
