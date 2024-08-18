import { useState } from "react";
import "./login.scss";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";
import { useLocation } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [email , setEmail] = useState(null);
  const [password , setPassword] = useState(null);
  const dispatch = useDispatch();
  const handleClick = ()=>{
    login(dispatch , {email , password}); 
  };
  const location = useLocation();
  const handlePassword = async()=>{
    console.log("clicked!");
    const res = await axios.post("https://movies-media-api.onrender.com/api/auth/sendlink" , {email});
    console.log(res.data);
  }
  console.log(email);
  return (
    <div className="register">
      <div className="registerContainer">
        <p className="registerText">Sign In</p>

        <input type="text" placeholder="Email" className="registerInput" onChange={(e)=>(setEmail(e.target.value))} />
        {/* <p className="inputErrText">*email required!!</p> */}
        <input type="password" placeholder="Password" className="registerInput" onChange={(e)=>(setPassword(e.target.value))} />
        {/* <p className="inputErrText">*password required!!</p> */}
 
        <button className="registerBtn" onClick={handleClick} disabled={location.state.email !== email} >Sign In</button>
        <p className="forgotPass" onClick={handlePassword}>*Forgot Password?</p>
      </div>
    </div>
  );
};

export default Login;
