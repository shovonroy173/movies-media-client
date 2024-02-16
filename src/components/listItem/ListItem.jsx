import "./listItem.scss";

import "react-multi-carousel/lib/styles.css";
import PlayCircle from "@mui/icons-material/PlayCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { useState } from "react";
const trailer =
  "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
const ListItem = () => {
    const [isHovered, setIsHovered] = useState(false);

  return (
    <div
        className="listItem"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {!isHovered && (
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjI3jcavpiBBT4pxJTu5n5Frxp9FjiclqRjs_vOJbk-tubcaZkBo4fEr2zV47dc5ar3X0&usqp=CAU"
            alt=""
            className="listImg"
          />
        )}

        {isHovered && (
          <>
            <video src={trailer} autoPlay={true} className="listImg" />
            <div className="listDetails">
              <div className="lIcons">
                <PlayCircle />
                <AddCircleIcon />
                <ThumbUpIcon />
                <ThumbDownIcon />
              </div>
              <p className="lTime">1 hours 14 mins</p>
              <div className="lDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                aliquam, recusandae ut veniam est ex a repellendus
              </div>
            </div>
          </>
        )}
      </div>
  )
}

export default ListItem