import { useState } from "react";
import "./resetpassword.scss";
// import { useDispatch } from "react-redux";
// import { useLocation } from "react-router-dom";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
const ResetPassword = () => {
    const location = useLocation()
    // console.log(location.pathname.split("/")[5]);
    const id = location.pathname.split("/")[4];
    const token = location.pathname.split("/")[5];


  const [password , setPassword] = useState(null);
  const [confirmPassword , setConfirmPassword] = useState(null);
//   const dispatch = useDispatch();
const navigate = useNavigate();

//   const location = useLocation();
  const handleClick = async()=>{
    console.log("clicked!");
    await axios.put(`http://localhost:5000/api/auth/resetpassword/${id}/${token}` , {password});
    // console.log(res);
    navigate("/")
  }
//   console.log(password);
  return (
    <div className="register">
      <div className="registerContainer">
        <p className="registerText">Reset Password</p>

        <input type="password" placeholder="Password" className="registerInput" onChange={(e)=>(setPassword(e.target.value))} />
        {/* <p className="inputErrText">*password required!!</p> */}
        <input type="password" placeholder="Confirm Password" className="registerInput" onChange={(e)=>(setConfirmPassword(e.target.value))} />
 
        <button className="registerBtn" onClick={handleClick} disabled={(password !== confirmPassword)} >Reset Password</button>
      </div>
    </div>
  );
};

export default ResetPassword;
