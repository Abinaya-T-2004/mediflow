import "../styles/Register.css";
import logo from "../assets/logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] =
    useState(false);

  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: ""
  });

  const [rememberMe, setRememberMe] =
    useState(false);

  // HANDLE INPUT CHANGE

  const handleChange = (e) => {

    setUser({
      ...user,
      [e.target.name]: e.target.value
    });

  };

  // HANDLE REGISTER

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        "http://localhost:8080/api/users/register",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify(user)
        }
      );

      const data = await response.json();

      alert(data.message);

      // AFTER REGISTER
      // GO TO PATIENT DETAILS

      if (
        data.message ===
        "Registration successful"
      ) {

        navigate("/patient-details");

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

      {/* MAIN CONTENT */}

      <div className="register-content">

        {/* WELCOME */}

        <div className="welcome-section">

          <h1>Welcome to MediFlow</h1>

          <p>
            Smart Healthcare Management
            System for seamless patient
            care and hospital workflow.
          </p>

        </div>

        {/* REGISTER CARD */}

        <div className="register-card">

          <h2>Create Account</h2>

          <form
            className="register-form"
            onSubmit={handleSubmit}
            autoComplete="off"
          >

            {/* FULL NAME */}

            <div className="input-group">

              <label>Full Name</label>

              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={user.fullName}
                onChange={handleChange}
                autoComplete="off"
              />

            </div>

            {/* EMAIL */}

            <div className="input-group">

              <label>Email Address</label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={user.email}
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
                  value={user.password}
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

            {/* REMEMBER */}

            <div className="remember-section">

              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() =>
                  setRememberMe(
                    !rememberMe
                  )
                }
              />

              <span>
                Keep me logged in
              </span>

            </div>

            {/* REGISTER BUTTON */}

            <button
              type="submit"
              className="register-btn"
            >
              Agree & Join
            </button>

            {/* LOGIN */}

            <p className="login-text">

              Already have an account ?

              <span
                onClick={() =>
                  navigate("/login")
                }
              >
                Sign In
              </span>

            </p>

          </form>

        </div>

      </div>

    </div>

  );

}

export default Register;