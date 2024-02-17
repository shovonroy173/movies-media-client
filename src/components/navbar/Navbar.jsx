import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
const Navbar = () => {
  const [open , setOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="navContainer">
      <div className="left">
        <p>movies-media</p>
        <p>Home</p>
        <p>Series</p>
        <p>Movies</p>
        <p>New and Popular</p>
        <p>My List</p>
      </div>
      <div className="right">
        
          <SearchIcon onClick={()=>(setOpen(!open))} />
          {open &&  
          <div className="searchedBar">
          <input type="text" placeholder="movies , shows.." className="inputBar" />
          <div className="searchedMovie">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjI3jcavpiBBT4pxJTu5n5Frxp9FjiclqRjs_vOJbk-tubcaZkBo4fEr2zV47dc5ar3X0&usqp=CAU" className="movImg" />
            <div className="movDetails">
              <p className="movName">Rick and Morty</p>
              <p className="movType">TV Show</p>
              <p className="movRating">8.1</p>
            </div>
            <DisabledByDefaultIcon />  
          </div>
          </div>
          }
          
        
        <p>Men</p>
        <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1z" alt="" className='profileImg' />
        <Avatar>S</Avatar>
        <LogoutIcon />
        
      </div>
      </div>
    </div>
  );
};

export default Navbar;
