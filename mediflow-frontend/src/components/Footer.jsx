import "../styles/Footer.css";

import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

function Footer() {

  return (

    <footer className="footer">

      <div className="footer-top-line"></div>

      <div className="footer-container">

        {/* LOGO */}

        <div className="footer-column">

          <img
            src={logo}
            alt="MediFlow"
            className="footer-logo"
          />

          <p className="footer-desc">

            MediFlow provides modern
            healthcare management
            solutions for hospitals,
            doctors, and patients through
            secure and intelligent digital
            healthcare systems.

          </p>

        </div>

        {/* QUICK LINKS */}

        <div className="footer-column">

          <h2>
            Quick Links
          </h2>

          <div className="footer-links">

            <Link to="/home"
    onClick={() =>
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }
    >
              Home
            </Link>

            <Link to="/about">
              About Us
            </Link>

            <Link to="/blog">
              Blog
            </Link>

            <Link to="/clients">
              Clients
            </Link>

            <Link to="/specialities">
              Book Appointment
            </Link>

            <Link to="/why-mediflow">
              Why MediFlow
            </Link>

          </div>

        </div>

        {/* SERVICES */}

        <div className="footer-column">

          <h2>
            Services
          </h2>

          <div className="footer-links">

            <Link to="/speciality/Dermatology">
              Dermatology
            </Link>

            <Link to="/speciality/Cardiology">
              Cardiology
            </Link>

            <Link to="/speciality/Neurology">
              Neurology
            </Link>

            <Link to="/speciality/Pediatrics">
              Pediatrics
            </Link>

            <Link to="/speciality/Orthopedics">
              Orthopedics
            </Link>

            <Link to="/specialities">
              View All Services
            </Link>

          </div>

        </div>

        {/* CONTACT */}

        <div className="footer-column">

          <h2>
            Contact Us
          </h2>

          <div className="footer-contact">

            <p>
              📧 mediflow@gmail.com
            </p>

            <p>
              📞 +91 9876543210
            </p>

            <p>
              📍 Coimbatore, Tamil Nadu
            </p>

            <p>
              🕒 Mon - Sat : 9AM - 8PM
            </p>

          </div>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="footer-bottom">

        © 2026 MediFlow.
        All Rights Reserved.

      </div>

    </footer>

  );

}

export default Footer;