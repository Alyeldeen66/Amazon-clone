import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signIn = (e) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    console.log("hello");
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_img"
          src="https://turnerduckworth.com/sites/default/files/styles/case_study_single_image_s_2x/public/2019-03/5_Amazon_Lettermark_2560.jpg?h=a92f03cd&itok=2nBmNv14"
        />
      </Link>
      <div className="login_container">
        <h1>Sign In</h1>
        <div className="login_form">
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <button onClick={signIn} className="login_sign-in">
            Sign In
          </button>
        </div>
        <p>
          By siging-in you agree to Amazon's Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and out Interest-Based ads
          notice.
        </p>
        <button onClick={register} className="login_register">
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
