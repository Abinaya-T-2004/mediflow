import "../styles/Login.css";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] =
    useState(false);

  const [loginData, setLoginData] =
    useState({
      email: "",
      password: ""
    });

  // HANDLE INPUT CHANGE

  const handleChange = (e) => {

    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });

  };

  // HANDLE LOGIN

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        "https://mediflow-xw59.onrender.com/api/users/login",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify(loginData)
        }
      );

      const data = await response.json();

      alert(data.message);

      // AFTER LOGIN
      // GO TO HOME PAGE

      if (
  data.message ===
  "Login successful"
) {

  // SAVE MOBILE AGAIN

  localStorage.setItem(
  "userEmail",
  data.email
);

  navigate("/home");

}

    } catch (error) {

      console.error(error);

      alert("Something went wrong");

    }

  };

  return (

    <div className="register-container">

      {/* HEADER */}

      <div className="top-navbar">

        <img
          src={logo}
          alt="MediFlow Logo"
          className="navbar-logo"
        />

      </div>

      {/* CONTENT */}

      <div className="register-content">

        {/* WELCOME */}

        <div className="welcome-section">

          <h1>Welcome Back</h1>

          <p>
            Login to continue using
            MediFlow
          </p>

        </div>

        {/* LOGIN CARD */}

        <div className="register-card">

          <h2>Sign In</h2>

          <form
            className="register-form"
            onSubmit={handleSubmit}
            autoComplete="off"
          >

            {/* EMAIL */}

            <div className="input-group">

              <label>Email Address</label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={loginData.email}
                onChange={handleChange}
                autoComplete="off"
              />

            </div>

            {/* PASSWORD */}

            <div className="input-group">

              <label>Password</label>

              <div className="password-box">

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  placeholder="Enter your password"
                  value={loginData.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                />

                <span
                  className="show-btn"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                >
                  {showPassword
                    ? "Hide"
                    : "Show"}
                </span>

              </div>

            </div>

            {/* LOGIN BUTTON */}

            <button
              type="submit"
              className="register-btn"
            >
              Login
            </button>

            {/* REGISTER */}

            <p className="login-text">

              Don’t have an account ?

              <span
                onClick={() =>
                  navigate("/")
                }
              >
                Register
              </span>

            </p>

          </form>

        </div>

      </div>

    </div>

  );

}

export default Login;