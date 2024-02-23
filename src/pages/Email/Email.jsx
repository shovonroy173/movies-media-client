import { useEffect, useState } from "react";
import "./email.scss";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Email = () => {
  // const user = useSelector((state) => state.user);

  const [email, setEmail] = useState(null);
  const [user, setUser] = useState(null);
  // const [redirect, setRedirect] = useState(null);
  // const email = 'user1@gmail.com'

  const navigate = useNavigate();
  useEffect(()=>{
    const getUser = async()=>{
      const res = await axios.get(`https://movies-media-api.onrender.com/api/user/getuser/${email}`);
      // console.log(res);
      setUser(res.data);
    }
    getUser();
  } , [email]);
  // console.log("LINE AT 21", email, user);

  const handleClick = () => {
    if (user) {
      navigate("/login", { state: { email } });
    } else {
      navigate("/register", { state: { email } });
    }
  };
 

  return (
    <div className="email">
      <input
        type="text"
        placeholder="Enter you email.."
        className="emailInput"
        onChange={(e) => setEmail(e.target.value)}
      />
      {/* onClick={handleClick} */}
      <button className="emailBtn" onClick={handleClick}>
        Get Started
      </button>
    </div>
  );
};

export default Email;
