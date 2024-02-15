import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import Avatar from "@mui/material/Avatar";
const Navbar = () => {
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
        <p>
          <SearchIcon />
        </p>
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
