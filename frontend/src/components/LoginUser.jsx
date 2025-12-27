import { useContext, useRef } from "react";
import "../css/LoginUser.css";
import { NavLink, useNavigate } from "react-router-dom";
import { StoreContext } from "../store/Store";
const LoginUser = () => {
  const { setLoginData, signupData } = useContext(StoreContext);
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleLoginForm = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    setLoginData({ email, password });

    console.log("signup email:", signupData.email);
    console.log("signup password:", signupData.password);

    if (signupData.email == email && signupData.password == password) {
      alert("sucessfully logged In");
      navigate("/create");
      emailRef.current.value = "";
      passwordRef.current.value = "";
    }
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
