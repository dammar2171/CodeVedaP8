import { useContext, useRef, useState } from "react";
import "../css/SignupUser.css";
import { NavLink, useNavigate } from "react-router-dom";
import WrongAlert from "./WrongAlert";
import { StoreContext } from "../store/Store";
const SignupUser = () => {
  const { setSignupData } = useContext(StoreContext);
  const fullnameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPsdRef = useRef();
  const navigate = useNavigate();

  const [alertWrong, setAlertWrong] = useState(null);

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const fullname = fullnameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPsd = confirmPsdRef.current.value;

    if (password === confirmPsd) {
      setSignupData({ fullname, email, password });
      alert("Account created sucessfully");
      navigate("/");
    } else {
      setAlertWrong("wrong");
    }
    fullnameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
    confirmPsdRef.current.value = "";
  };

  return (
    <div className="signup-card">
      <h2>Create Account</h2>
      <form className="signup-form" onSubmit={handleSubmitForm}>
        {alertWrong == "wrong" && (
          <WrongAlert message={"Password do not matched"} />
        )}
        <label>Full Name</label>
        <input
          type="text"
          ref={fullnameRef}
          placeholder="Enter your full name"
          required
        />
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
          placeholder="Enter password"
          required
        />
        <label>Confirm Password</label>
        <input
          type="password"
          ref={confirmPsdRef}
          placeholder="Confirm password"
          required
        />
        <button type="submit" className="signup-btn">
          Sign Up
        </button>
      </form>
      <p className="text-center mt-4 text-white">
        If already have an account click{" "}
        <NavLink className={"signup-anchor"} to="/">
          Login
        </NavLink>
      </p>
    </div>
  );
};

export default SignupUser;
