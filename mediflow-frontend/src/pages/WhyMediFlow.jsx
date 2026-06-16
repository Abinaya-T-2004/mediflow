import "../styles/WhyMediFlow.css";

import Navbar from "../components/Navbar";

import Cardiology1 from "../assets/speciality-image/Cardiology1.jpg";
import Cardiology3 from "../assets/speciality-image/Cardiology3.jpg";

import Dermatology3 from "../assets/speciality-image/Dermatology3.jpg";

import Neurology3 from "../assets/speciality-image/Neurology3.jpg";
import Neurology1 from "../assets/speciality-image/Neurology1.png";
import Pulmonology1 from "../assets/speciality-image/Cardiology2.jpg";
import Orthopedic1 from "../assets/speciality-image/Orthopedic1.jpg";
import Footer from "../components/Footer";

function WhyMediFlow() {

  return (

    <div className="why-page">

      <Navbar />

      {/* HERO */}

      <div className="why-hero">

        <div className="why-left">

          <span>
            WHY MEDIFLOW
          </span>

          <h1>

            Revolutionizing
            Smart Healthcare
            Management

          </h1>

          <p>

            MediFlow simplifies hospital
            management through secure,
            intelligent, and modern digital
            healthcare solutions for hospitals,
            doctors, and patients.

          </p>

        </div>

        <div className="why-right">

          <img
            src={Cardiology1}
            alt="doctor"
          />

        </div>

      </div>

      {/* FEATURES */}

      <div className="why-features">

        <div className="why-feature-card">

          <h2>🏥</h2>

          <h3>
            Smart Hospital Management
          </h3>

          <p>

            Manage hospital operations,
            appointments, and patient
            workflows efficiently.

          </p>

        </div>

        <div className="why-feature-card">

          <h2>📅</h2>

          <h3>
            Seamless Appointment Booking
          </h3>

          <p>

            Patients can quickly connect
            with specialists and hospitals.

          </p>

        </div>

        <div className="why-feature-card">

          <h2>🔒</h2>

          <h3>
            Secure Patient Records
          </h3>

          <p>

            Protect sensitive healthcare
            information with secure systems.

          </p>

        </div>

      </div>

      {/* DOCTOR SECTION */}

      <div className="doctor-showcase">

        <div className="doctor-box">

          <img
            src={Neurology1}
            alt="doctor"
          />

        </div>

        <div className="doctor-content">

          <h1>

            Trusted By Healthcare
            Professionals

          </h1>

          <p>

            MediFlow supports doctors,
            hospitals, and healthcare
            institutions with modern tools
            for better patient care and
            seamless digital healthcare.

          </p>

        </div>

      </div>

      {/* STATS */}

      <div className="why-stats">

        <div className="stat-card">

          <h1>30+</h1>

          <p>Hospital Partners</p>

        </div>

        <div className="stat-card">

          <h1>100+</h1>

          <p>Doctors Connected</p>

        </div>

        <div className="stat-card">

          <h1>10K+</h1>

          <p>Appointments Managed</p>

        </div>

      </div>

      {/* FUTURE */}

      <div className="future-healthcare">

        <div className="future-left">

          <h1>

            The Future Of
            Digital Healthcare

          </h1>

          <p>

            MediFlow aims to integrate
            Artificial Intelligence,
            predictive healthcare analytics,
            and cloud-based hospital systems
            for next-generation healthcare
            experiences.

          </p>

        </div>

        <div className="future-right">

          <img
            src={Orthopedic1}
            alt="future"
          />

        </div>

      </div>

      {/* TECHNOLOGY */}

<div className="technology-section">

  <div className="technology-left">

    <img
      src={Pulmonology1}
      alt="technology"
    />

  </div>

  <div className="technology-right">

    <span>
      ADVANCED TECHNOLOGY
    </span>

    <h1>

      Smart Digital Healthcare
      Powered By Innovation

    </h1>

    <p>

      MediFlow integrates modern digital
      healthcare technologies to improve
      hospital efficiency, reduce manual
      processes, and provide better
      patient experiences through
      intelligent healthcare systems.

    </p>

    <div className="technology-points">

      <div>

        ✔ AI Healthcare Support

      </div>

      <div>

        ✔ Cloud-Based Hospital Systems

      </div>

      <div>

        ✔ Real-Time Appointment Tracking

      </div>

      <div>

        ✔ Smart Patient Monitoring

      </div>

    </div>

  </div>

</div>

{/* EXPERT DOCTORS */}

<div className="expert-doctors">

  <div className="expert-header">

    <span>
      HEALTHCARE PROFESSIONALS
    </span>

    <h1>

      Dedicated Experts
      Behind MediFlow

    </h1>

    <p>

      MediFlow connects hospitals with
      highly experienced healthcare
      professionals to ensure quality
      patient care and seamless
      healthcare experiences.

    </p>

  </div>

  <div className="expert-grid">

    <div className="expert-card">

      <img
        src={Cardiology3}
        alt="doctor"
      />

      <div className="expert-content">

        <h2>
          Cardiology Specialists
        </h2>

        <p>

          Expert heart care professionals
          supporting advanced cardiac
          healthcare management.

        </p>

      </div>

    </div>

    <div className="expert-card">

      <img
        src={Dermatology3}
        alt="doctor"
      />

      <div className="expert-content">

        <h2>
          Dermatology Experts
        </h2>

        <p>

          Providing specialized skin and
          cosmetic healthcare solutions
          for patients.

        </p>

      </div>

    </div>

    <div className="expert-card">

      <img
        src={Neurology3}
        alt="doctor"
      />

      <div className="expert-content">

        <h2>
          Neurology Consultants
        </h2>

        <p>

          Advanced neurological care
          supported through modern
          healthcare technology.

        </p>

      </div>

    </div>

  </div>

</div>

{/* HEALTHCARE IMPACT */}

<div className="impact-section">

  <div className="impact-left">

    <span>
      GLOBAL HEALTHCARE IMPACT
    </span>

    <h1>

      Improving Healthcare
      Through Smart Innovation

    </h1>

    <p>

      MediFlow focuses on creating
      modern healthcare experiences
      that reduce delays, improve
      patient care, and support
      healthcare professionals with
      intelligent digital solutions.

    </p>

    <div className="impact-list">

      <div>

        ✔ Faster hospital coordination

      </div>

      <div>

        ✔ Improved patient communication

      </div>

      <div>

        ✔ Reduced appointment delays

      </div>

      <div>

        ✔ Better healthcare accessibility

      </div>

    </div>

  </div>

  {/* RIGHT */}

  <div className="impact-right">

    <div className="impact-box">

      <h1>95%</h1>

      <p>
        Faster Appointment Scheduling
      </p>

    </div>

    <div className="impact-box">

      <h1>24/7</h1>

      <p>
        Digital Healthcare Access
      </p>

    </div>

    <div className="impact-box">

      <h1>50K+</h1>

      <p>
        Healthcare Records Managed
      </p>

    </div>

    <div className="impact-box">

      <h1>100+</h1>

      <p>
        Healthcare Specialists
      </p>

    </div>

  </div>

</div>
<Footer />
    </div>

  );

}

export default WhyMediFlow;