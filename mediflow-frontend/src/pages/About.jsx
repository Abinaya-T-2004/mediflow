import "../styles/About.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import aboutImage from "../assets/smart1.png";

function About() {

  return (

    <div className="about-page">

      <Navbar />

      {/* HERO */}

      <div className="about-hero">

        <div className="about-bg-circle circle1"></div>
        <div className="about-bg-circle circle2"></div>

        <div className="about-left">

          <span className="about-tag">

            ABOUT MEDIFLOW

          </span>

          <h1>

            Smart Healthcare
            <br />

            Seamless Management

          </h1>

          <p>

            MediFlow is an advanced hospital
            management platform designed to
            simplify healthcare operations,
            improve patient management,
            streamline appointments, and
            enhance digital healthcare services.

          </p>

        </div>

        <div className="about-right">

          <img
            src={aboutImage}
            alt="about"
          />

        </div>

      </div>

      {/* MISSION VISION */}

      <div className="mission-section">

        <div className="mission-card">

          <h2>
            Our Mission
          </h2>

          <p>

            To provide modern, secure, and
            intelligent healthcare solutions
            that improve hospital efficiency
            and patient experience.

          </p>

        </div>

        <div className="mission-card">

          <h2>
            Our Vision
          </h2>

          <p>

            To transform traditional healthcare
            systems into smart digital healthcare
            ecosystems through innovation and
            technology.

          </p>

        </div>

      </div>

      {/* WHY CHOOSE */}

      <div className="why-about-section">

        <h1>
          Why Choose MediFlow?
        </h1>

        <div className="why-about-grid">

          <div className="why-about-card">

            <h2>01</h2>

            <h3>
              Smart Management
            </h3>

            <p>

              Simplifies hospital workflows,
              appointments, and healthcare data.

            </p>

          </div>

          <div className="why-about-card">

            <h2>02</h2>

            <h3>
              Secure Platform
            </h3>

            <p>

              Ensures patient records and
              healthcare information stay safe.

            </p>

          </div>

          <div className="why-about-card">

            <h2>03</h2>

            <h3>
              Easy Access
            </h3>

            <p>

              Provides smooth and responsive
              user experience for hospitals
              and patients.

            </p>

          </div>

        </div>

      </div>

      {/* ACHIEVEMENTS */}

      <div className="about-achievement">

        <div className="about-ach-card">

          <h1>30+</h1>
          <p>Hospital Partners</p>

        </div>

        <div className="about-ach-card">

          <h1>100+</h1>
          <p>Doctors Connected</p>

        </div>

        <div className="about-ach-card">

          <h1>10K+</h1>
          <p>Appointments Managed</p>

        </div>

      </div>

      {/* SERVICES */}

<div className="about-services">

  <h1>
    Our Healthcare Services
  </h1>

  <div className="about-service-grid">

    <div className="about-service-card">

      <h2>🏥</h2>

      <h3>
        Hospital Management
      </h3>

      <p>

        Efficiently manage hospital
        operations, patient records,
        and appointments digitally.

      </p>

    </div>

    <div className="about-service-card">

      <h2>📅</h2>

      <h3>
        Appointment Booking
      </h3>

      <p>

        Easy appointment scheduling
        between doctors and patients
        in real time.

      </p>

    </div>

    <div className="about-service-card">

      <h2>💊</h2>

      <h3>
        Patient Care
      </h3>

      <p>

        Smart healthcare solutions
        focused on better patient
        experience and safety.

      </p>

    </div>

  </div>

</div>

{/* TEAM */}



{/* FUTURE */}

<div className="future-section">

  <h1>
    Future Of MediFlow
  </h1>

  <p>

    MediFlow aims to transform
    healthcare using Artificial
    Intelligence, smart patient
    monitoring, digital healthcare
    systems, and secure cloud-based
    hospital management solutions.

  </p>

</div>

{/* JOURNEY */}

<div className="journey-section">

  <h1>
    Our Journey
  </h1>

  <div className="journey-timeline">

    <div className="journey-card">

      <span>
        2023
      </span>

      <h2>
        MediFlow Started
      </h2>

      <p>

        Began as a smart healthcare
        management idea focused on
        improving hospital systems.

      </p>

    </div>

    <div className="journey-card">

      <span>
        2024
      </span>

      <h2>
        Digital Healthcare Expansion
      </h2>

      <p>

        Added appointment booking,
        patient management, and
        hospital integration features.

      </p>

    </div>

    <div className="journey-card">

      <span>
        2025
      </span>

      <h2>
        AI Healthcare Vision
      </h2>

      <p>

        Started implementing smart AI
        healthcare solutions for future
        digital hospitals.

      </p>

    </div>

  </div>

</div>
<Footer />

    </div>

  );

}

export default About;