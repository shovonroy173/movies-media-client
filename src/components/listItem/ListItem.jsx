import "./listItem.scss";

import "react-multi-carousel/lib/styles.css";
import PlayCircle from "@mui/icons-material/PlayCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const ListItem = (item) => {
  const user = useSelector((state) => state.user);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const handleClick = async () => {
    const res = axios.put(
      `https://movies-media-api.onrender.com/api/movie/view/${item?.item?._id}`
    );
    console.log((await res).data);
    navigate(`/watch/${item?.item?._id}`);
  };
  const handleLike = async () => {
    await axios.put(
      `https://movies-media-api.onrender.com/api/movie/like/${item?.item?._id}`,
      { userId: user?.currentUser._id }
    );
  };
  const handleDislike = async () => {
    await axios.put(
      `https://movies-media-api.onrender.com/api/movie/dislike/${item?.item?._id}`,
      { userId: user?.currentUser._id }
    );
  };
  const handleWishlist = async () => {
    await axios.put(
      `https://movies-media-api.onrender.com/api/movie/addwishlist/${item?.item?._id}`,
      { userId: user?.currentUser._id }
    );
  };
  return (
    <div
      className="listItem"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isHovered && (
        <img src={item?.item?.imgUrl} alt="" className="listImg" />
      )}

      {isHovered && (
        <>
          <video
            src={item?.item?.videoUrl}
            autoPlay={true}
            className="listImg"
            onClick={handleClick}
          />
          <div className="listDetails">
            <div className="lIcons">
              <PlayCircle onClick={handleClick} />
              <AddCircleIcon onClick={handleWishlist} />
              <ThumbUpIcon onClick={handleLike} />
              <ThumbDownIcon onClick={handleDislike} />
            </div>
            <p className="lTime">1 hours 14 mins</p>
            <div className="lDesc">{item?.item?.desc}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
