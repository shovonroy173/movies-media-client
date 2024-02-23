import "./featured.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoIcon from "@mui/icons-material/Info";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Featured = () => {
  const navigate = useNavigate();
  const [mov, setMov] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const getMov = async () => {
      const res = await axios.get("https://movies-media-api.onrender.com/api/movie/getmovies");
      console.log(res.data);
      setMov(res.data);
    };
    getMov();
  }, []);
  console.log(mov);
  return (
    <>
      {mov.length !== 0 ? (
        <div className="featured">
          <img src={mov[0]?.imgUrl} alt="" className="featuredImg" />
          <div className="featuredBox">
            <div className="featuredContainer">
              <div className="fDeatails">
                <p className="fName">{mov[0]?.name}</p>

                <p className="fDesc">{mov[0]?.desc}</p>
              </div>
              <div className="fBtns">
                <button
                  className="fPlay"
                  onClick={() => navigate(`/watch/${mov[0]?._id}`)}
                >
                  <PlayArrowIcon />
                  Play
                </button>
                <button className="fInfo" onClick={() => setOpen(!open)}>
                  <InfoIcon />
                  Info
                  
                </button>
                
                
              </div>
              {open && (
                  <div className="movInfo">
                    <p>{mov[0]?.rating}</p>
                    <p>{mov[0]?.genre}</p>
                    <p>{mov[0]?.category}</p>
                    </div>
                )}
            </div>
          </div>
        </div>
      ) : (
        <div className="featuredLoading">Loading..</div>
      )}
    </>
  );
};

export default Featured;
