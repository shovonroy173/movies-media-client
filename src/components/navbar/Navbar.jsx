import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import Avatar from "@mui/material/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/authRedux";
import { useEffect, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Navbar = (cat) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logOut());
  };
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [option, setOption] = useState(false);
  const navigate = useNavigate();
  const handleOption = async (e) => {
    setOption(e.target.value);
    console.log(option);
    navigate(`/categories/${e.target.value}`, {
      state: { option: e.target.value },
    });
  };
  const [text, setText] = useState(null);
  const [sMovie, setSMovie] = useState([]);

  useEffect(() => {
    const handleChange = async () => {
      const res = await axios.get(
        `https://movies-media-api.onrender.com/api/movie/getmovies/search?q=${text}`
      );
      setSMovie(res.data);
    };
    handleChange();
  }, [text]);

  return (
    <div className="navbar">
      <div className="navContainer">
        <div className="left">
          <a href="/">
            <img
              src="https://cdn2.vectorstock.com/i/1000x1000/26/81/red-grunge-cinema-logo-vector-4492681.jpg"
              alt=""
              className="logo"
            />
          </a>

          {cat.genre === "false" && (
            <>
              <a href="#series">Series</a>
              <a href="#movies">Movies</a>
              <a href="#new">New</a>
              <a href="#mylist">Mylist</a>
            </>
          )}

          <ArrowDropDownIcon onClick={() => setOpen2(!open2)} />
          {open2 && (
            <select id="dropdown" onChange={handleOption}>
              <option>Genre</option>
              <option value={"horror"}>horror</option>
              <option value={"thriller"}>thriller</option>
              <option value={"comedy"}>comedy</option>
              <option value={"action"}>action</option>
            </select>
          )}
        </div>
        <div className="right">
          <SearchIcon onClick={() => setOpen(!open)} />
          {open && (
            <div className="searchedBar">
              <input
                type="text"
                placeholder="movies , shows.."
                className="inputBar"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              {sMovie.map((item, index) => (
                <div className="searchedMovie" key={index}>
                  <img
                    src={item.imgUrl}
                    className="movImg"
                    onClick={() => navigate(`/watch/${item?._id}`)}
                  />
                  <div className="movDetails">
                    <p className="movName">{item.name}</p>
                    <p className="movType">{item.category}</p>
                    <p className="movRating">{item.rating}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <img src={user?.currentUser?.img} alt="" className="profileImg" />
          <Avatar>{user.currentUser.name[0].toUpperCase()}</Avatar>
          <LogoutIcon onClick={handleClick} className="logOutBtn" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
