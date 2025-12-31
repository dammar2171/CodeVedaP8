import { useRef } from "react";
import "../css/LoginUser.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { StoreContext } from "../store/Store";
const LoginUser = () => {
  const { setAuthenticated } = useContext(StoreContext);
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleLoginForm = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const response = await axios.post(
      "http://localhost:5000/user/loginUser",
      {
        email,
        password,
      },
      { headers: { "Content-Type": "application/json" } }
    );
    const { token } = response.data;

    if (token) {
      localStorage.setItem("token", token);
      setAuthenticated(true);
      alert("sucessfully logged In");
      navigate("/create");
    } else {
      alert("login failed!");
    }
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };
  return (
    <div className="login-card">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleLoginForm}>
        <label>Email</label>
        <input
          type="email"
          ref={emailRef}
          placeholder="Enter your email"
          required
        />

        <label>Password</label>
        <input
          type="password"
          ref={passwordRef}
          placeholder="Enter your password"
          required
        />

        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
      <p className="text-center mt-4 text-white">
        If you dont have account click{" "}
        <NavLink className={"signup-anchor"} to="/signup">
          Signin
        </NavLink>
      </p>
    </div>
  );
};

export default LoginUser;
