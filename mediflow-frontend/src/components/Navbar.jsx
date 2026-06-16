import "../styles/Home.css";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import logo from "../assets/logo.png";

import Dermatology from "../assets/icon/Dermatology.png";
import Gynecology from "../assets/icon/Gynecology.png";
import Pediatrics from "../assets/icon/Pediatrics.png";
import Urology from "../assets/icon/Urology.png";
import Orthopedics from "../assets/icon/Orthopedics.png";
import Psychiatry from "../assets/icon/Psychiatry.png";
import Gastroenterology from "../assets/icon/Gastroenterology.png";
import Oncology from "../assets/icon/Oncology.png";
import Pulmonology from "../assets/icon/Pulmonology.png";
import GeneralSurgery from "../assets/icon/GeneralSurgery.png";
import Nephrology from "../assets/icon/Nephrology.png";
import Radiology from "../assets/icon/Radiology.png";
import Cardiology from "../assets/icon/Cardiology.png";
import Neurology from "../assets/icon/Neurology.png";

function Navbar() {

  const [showSpeciality, setShowSpeciality] =
    useState(false);


  const [showProfileDropdown, setShowProfileDropdown] =
  useState(false);

const navigate = useNavigate();

  const specialities = [

    {
      image: Dermatology,
      title: "Dermatology",
      desc: "Skin and hair treatments"
    },

    {
      image: Gynecology,
      title: "Gynecology",
      desc: "Women's healthcare solutions"
    },

    {
      image: Pediatrics,
      title: "Pediatrics",
      desc: "Child healthcare services"
    },

    {
      image: Urology,
      title: "Urology",
      desc: "Kidney and urinary care"
    },

    {
      image: Orthopedics,
      title: "Orthopedics",
      desc: "Bone and joint treatments"
    },

    {
      image: Psychiatry,
      title: "Psychiatry",
      desc: "Mental wellness support"
    },

    {
      image: Gastroenterology,
      title: "Gastroenterology",
      desc: "Digestive system care"
    },

    {
      image: Oncology,
      title: "Oncology",
      desc: "Cancer treatment support"
    },

    {
      image: Pulmonology,
      title: "Pulmonology",
      desc: "Lung and respiratory care"
    },

    {
      image: GeneralSurgery,
      title: "General Surgery",
      desc: "Advanced surgical care"
    },

    {
      image: Nephrology,
      title: "Nephrology",
      desc: "Kidney specialist care"
    },

    {
      image: Radiology,
      title: "Radiology",
      desc: "Medical imaging services"
    },

    {
      image: Cardiology,
      title: "Cardiology",
      desc: "Heart care specialists"
    },

    {
      image: Neurology,
      title: "Neurology",
      desc: "Brain and nerve treatments"
    }

  ];

  return (

    <nav className="home-navbar">

      <div className="logo-section">

        <img
          src={logo}
          alt="MediFlow Logo"
          className="home-logo"
        />

      </div>

      <ul className="nav-links">

        <li>

          <Link
            to="/home"
            style={{
              textDecoration: "none",
              color: "inherit"
            }}
          >
            Home
          </Link>

        </li>

        <li
          className="speciality-nav"
          onMouseEnter={() => setShowSpeciality(true)}
          onMouseLeave={() => setShowSpeciality(false)}
        >

          <Link
  to="/specialities"
  style={{
    textDecoration: "none",
    color: "inherit"
  }}
>

  Speciality

</Link>

          

        </li>

        <li>

  <Link
    to="/clients"
    style={{
      textDecoration: "none",
      color: "inherit"
    }}
  >
    Clients
  </Link>

</li>

      

        <li>

  <Link
    to="/contact"
    style={{
      textDecoration: "none",
      color: "inherit"
    }}
  >

    Contact Us

  </Link>

</li>

        <li className="profile-nav">

  <div
    className="profile-text"
    onClick={() =>
      setShowProfileDropdown(
        !showProfileDropdown
      )
    }
  >

    Profile ▼

  </div>

  {showProfileDropdown && (

    <div className="profile-dropdown">

      <p
        onClick={() =>
          navigate("/profile")
        }
      >
        My Profile
      </p>

      <p
        onClick={() =>
          navigate("/appointments")
        }
      >
        My Appointments
      </p>

      <p
        onClick={() => {

          localStorage.clear();

          navigate("/");

        }}
      >
        Logout
      </p>

    </div>

  )}

</li>

      </ul>

    </nav>

  );

}

export default Navbar;