import "./register.scss";
const Register = () => {
  return (
    <div className="register">
        <div className="registerContainer">
            <p className="registerText">Sign Up</p>
            <input type="text" placeholder="Name" className="registerInput" />
            <input type="text" placeholder="Email" className="registerInput" />
            <input type="text" placeholder="Password" className="registerInput" />
            <input type="text" placeholder="Confirm Password" className="registerInput" />
            <input type="file" placeholder="Name" className="registerInput" />
            <button className="registerBtn">Sign Up</button>
        </div>
    </div>
  )
}

export default Register