import { useState } from "react";
import { useDispatch } from "react-redux";
import "./register.scss";
import { register } from "../../redux/apiCalls";
import { useLocation, useNavigate } from "react-router-dom";
const Register = () => {
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirm, setConfirmPassword] = useState(null);
  const location = useLocation();
  // console.log(location.state.email);
  const dispatch = useDispatch();

  const [imageUrl, setImageUrl] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const navigate = useNavigate();
  const handleClick = () => {
    register(dispatch, { name, email, password });
    navigate("/payment" , {state:{user:email}});
  };

  return (
    <div className="register">
      <div className="registerContainer">
        <p className="registerText">Sign Up</p>
        <input
          type="text"
          placeholder="Name"
          className="registerInput"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          className="registerInput"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="registerInput"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="registerInput"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <input
          type="file"
          placeholder="Name"
          className="registerInput"
          onClick={handleFileChange}
        />
        <img src={imageUrl} alt="" />
        <button className="registerBtn" onClick={handleClick} disabled={location.state.email !== email}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Register;
