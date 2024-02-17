import "./login.scss";
const Login = () => {
  return (
    <div className="register">
      <div className="registerContainer">
        <p className="registerText">Sign In</p>

        <input type="text" placeholder="Email" className="registerInput" />
        <input type="text" placeholder="Password" className="registerInput" />

        <button className="registerBtn">Sign In</button>
      </div>
    </div>
  );
};

export default Login;
