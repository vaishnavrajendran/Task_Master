import React, { useEffect, useRef, useState } from "react";
import "./LandingPage.css";
import ErrorMessage from "../../components/ErrorMessage";
import { login, register } from "../../actions/userActions.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

const LandingPage = () => {
  const [pageType, setPageType] = useState("login");
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const { reason } = useSelector((state) => state.authData);
  const token = useSelector((state) => state.authData.userInfo);
  const [message, setMessage] = useState(null);
  const isLogin = pageType === "login";
  const isRegister = pageType === "register";
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const conf_passwordRef = useRef();
  const navigate = useNavigate();

  useEffect (() => {
    if(reason!=null){
        console.log("reason",reason);
        setError(reason)
      }
  },[reason])

  useEffect(() => {
    if (token != null) {
      navigate("/home");
    }
  }, [token]);

  useEffect(() => {
    if(error){
        toast.error(error)
    }
  },[error])

  const handleLogin = () => {
    if (emailRef?.current.value == "" || passwordRef?.current.value == "") {
      setMessage("All fields are mandatory");
      return;
    }
    let formData = new FormData();
    formData.append("email", emailRef.current.value);
    formData.append("password", passwordRef.current.value);
    dispatch(login(formData));
    console.log("error",error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      firstNameRef?.current.value == "" ||
      lastNameRef?.current.value == "" ||
      emailRef?.current.value == "" ||
      passwordRef?.current.value == "" ||
      conf_passwordRef?.current.value == ""
    ) {
      setMessage("All fields are mandatory");
      return;
    } else if (
      !(
        passwordRef.current.value.length >= 8 &&
        conf_passwordRef.current.value.length >= 8
      )
    ) {
      setMessage("Password must be atleast 8 characters");
      return;
    } else if (passwordRef.current.value !== conf_passwordRef.current.value) {
      setMessage("Passwords do not match");
      return;
    } else if (firstNameRef.current.value.length < 4) {
      setMessage("Name must be atleast 8 characters");
      return;
    } else {
      setMessage(null);
      try {
        let formData = new FormData();
        formData.append("firstName", firstNameRef.current.value);
        formData.append("lastName", lastNameRef.current.value);
        formData.append("email", emailRef.current.value);
        formData.append("password", passwordRef.current.value);
        dispatch(register(formData));
        navigate("/home")
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <div>
        <div><Toaster/></div>
      {isLogin && (
        <div className="bgmain">
          <div class="login-box">
            <p>Login</p>
            {message && (
              <ErrorMessage className="errorCode" variant="danger">
                {message}
              </ErrorMessage>
            )}
            {/* {error && <ErrorMessage variant="danger">{error}</ErrorMessage>} */}
            <form>
              <div class="user-box">
                <input ref={emailRef} required name="" type="text" />
                <label>Email</label>
              </div>
              <div class="user-box">
                <input ref={passwordRef} required name="" type="password" />
                <label>Password</label>
              </div>
              <a onClick={handleLogin}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
              </a>
            </form>
            <p>
              Don't have an account?{" "}
              <a onClick={() => setPageType("register")} class="a2">
                Sign up!
              </a>
            </p>
          </div>
        </div>
      )}
      {isRegister && (
        <div className="bgmain">
          <div class="login-box">
            <p>Register</p>
            <div>
              {message && (
                <ErrorMessage className="errorCode" variant="danger">
                  {message}
                </ErrorMessage>
              )}
            </div>
            <form>
              <div class="user-box">
                <input
                  ref={firstNameRef}
                  required=""
                  name="firstName"
                  type="text"
                />
                <label>First Name</label>
              </div>
              <div class="user-box">
                <input
                  ref={lastNameRef}
                  required=""
                  name="lastName"
                  type="text"
                />
                <label>Last Name</label>
              </div>
              <div class="user-box">
                <input ref={emailRef} required="" name="" type="email" />
                <label>Email</label>
              </div>
              <div class="user-box">
                <input ref={passwordRef} required="" name="" type="password" />
                <label>Password</label>
              </div>
              <div class="user-box">
                <input
                  ref={conf_passwordRef}
                  required=""
                  name=""
                  type="password"
                />
                <label>Repeat Password</label>
              </div>

              <a onClick={handleSubmit}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
              </a>
            </form>
            <p>
              Have an account?{" "}
              <a onClick={() => setPageType("login")} class="a2">
                Login
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
