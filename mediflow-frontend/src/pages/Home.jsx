// Home.jsx

import "../styles/Home.css";
import { Link } from "react-router-dom";
import doctorImage from "../assets/doc image 1.jpg";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../components/Footer";

import SRILAKSHMI from "../assets/hospital-logo/SRILAKSHMI.png";
import RAO from "../assets/hospital-logo/RAO.png";
import KAVERY from "../assets/hospital-logo/KAVERY.png";
import ECC from "../assets/hospital-logo/ECC.png";
import PARK from "../assets/hospital-logo/PARK.png";
import AROKYA from "../assets/hospital-logo/AROKYA.jpg";
import SHEELA from "../assets/hospital-logo/SHEELA.png";
import KOWSALYA from "../assets/hospital-logo/KOWSALYA.png";
import NALAN from "../assets/hospital-logo/NALAN.png";

import VGM from "../assets/hospital-logo/VGM.jpg";
import MEDWIN from "../assets/hospital-logo/MEDWIN.png";
import GANGA from "../assets/hospital-logo/GANGA.jpg";
import ORTHOONE from "../assets/hospital-logo/ORTHOONE.jpg";
import ASHWIN from "../assets/hospital-logo/ASHWIN.jpg";
import Bethesda from "../assets/hospital-logo/Bethesda.png";
import KG from "../assets/hospital-logo/KG.png";
import VELAN from "../assets/hospital-logo/VELAN.png";
import VASANTH from "../assets/hospital-logo/VASANTH.jpg";

import LOTUS from "../assets/hospital-logo/LOTUS.png";
import SUDHA from "../assets/hospital-logo/SUDHA.png";
import ARUN from "../assets/hospital-logo/ARUN.png";
import CKC from "../assets/hospital-logo/CKC.jpg";
import FIMS from "../assets/hospital-logo/FIMS.png";
import NG from "../assets/hospital-logo/NG.jpg";
import KONGUNAD from "../assets/hospital-logo/KONGUNAD.png";
import SRIRAMAKRISHNA from "../assets/hospital-logo/SRIRAMAKRISHNA.png";
import PSG from "../assets/hospital-logo/PSG.jpg";

import ROYAL from "../assets/hospital-logo/ROYAL.png";
import GKNM from "../assets/hospital-logo/GKNM.png";
import KMCH from "../assets/hospital-logo/KMCH.png";
import operationsImage from "../assets/operations.png";
import smart1 from "../assets/smart1.png";
import smart2 from "../assets/smart2.png";

import patientManagement from "../assets/patient-management.png";
import appointmentBooking from "../assets/appointment-booking.jpg";
import healthcareData from "../assets/healthcare-data.jpg";
import doctorCoordination from "../assets/doctor-coordination.jpg";
import dashboardImage from "../assets/dashboard.jpg";
import userExperience from "../assets/user-experience.webp";

import patientregistration from "../assets/patientregistration.webp";
import homepageaccess from "../assets/homepageaccess.webp";
import appointmentbooking from "../assets/appointmentbooking.png";
import patientmanagement from "../assets/patientmanagement.jpg";
import doctorcoordination from "../assets/doctorcoordination.jpg";
import Securehealthcare from "../assets/Securehealthcare.webp";

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

import AOS from "aos";
import "aos/dist/aos.css";
function Home() {
useEffect(() => {
  const counters = document.querySelectorAll(".ach-number");

  const animateCount = (el) => {
    const target = parseInt(el.getAttribute("data-target"));
    const suffix = el.getAttribute("data-suffix") || "";
    const duration = 2200;
    const stepTime = 16;
    const steps = duration / stepTime;
    const increment = target / steps;
    let current = 0;

    // easing — fast start, slow end
    let frame = 0;
    const totalFrames = steps;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      current = Math.floor(eased * target);

      el.textContent = current + suffix;

      if (frame >= totalFrames) {
        el.textContent = target + suffix;
        clearInterval(timer);
      }
    }, stepTime);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.6 }
  );

  counters.forEach((counter) => observer.observe(counter));
  return () => observer.disconnect();
}, []);

useEffect(() => {




  AOS.init({
    duration: 1000,
    once: true
  });

}, []);


const reviews = [

  {
    name: "Arun Kumar",

    review:
      "MediFlow made hospital management extremely simple and efficient. Appointment booking and patient tracking are now much faster and easier for our staff."
  },

  {
    name: "Priya Sharma",

    review:
      "The dashboard and smart healthcare features are very user friendly. Our hospital workflow has improved significantly after using MediFlow."
  },

  {
    name: "Rahul Mehta",

    review:
      "Excellent UI design and smooth experience. Doctor coordination and patient management became more organized and secure."
  },

  {
    name: "Sneha Reddy",

    review:
      "MediFlow reduced paperwork and improved appointment scheduling. The responsive design and animations look very professional."
  },

  {
    name: "Karthik Raj",

    review:
      "Real-time dashboard monitoring and healthcare data management are very impressive. This system helps hospitals operate smarter."
  }

];

const [currentReview, setCurrentReview] = useState(0);

const [showSpeciality, setShowSpeciality] = useState(false);



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


// inside your component:



const prevReview = () => {
  setCurrentReview((prev) =>
    prev === 0 ? reviews.length - 1 : prev - 1
  );
};

const nextReview = () => {
  setCurrentReview((prev) =>
    prev === reviews.length - 1 ? 0 : prev + 1
  );
};

// AUTO SLIDE — changes every 4 seconds
useEffect(() => {
  const timer = setInterval(() => {
    setCurrentReview((prev) =>
      prev === reviews.length - 1 ? 0 : prev + 1
    );
  }, 4000);
  return () => clearInterval(timer);
}, []);

  return (

    <div className="home-page">

      {/* NAVBAR */}
<Navbar />
     

      {/* HERO SECTION */}

      {/* HERO SECTION */}
<div className="hero-section">

  {/* Floating background elements */}
  <div className="hero-bg-circle hbc1"></div>
  <div className="hero-bg-circle hbc2"></div>
  <div className="hero-bg-circle hbc3"></div>

  {/* LEFT */}
  <div className="hero-left">

    {/* Top badge */}
    <div className="hero-badge">
      <span className="hero-badge-dot"></span>
      Smart Healthcare Platform
    </div>

    {/* Heading */}
    <h1 className="hero-heading">
      Hospital Management
      <span className="hero-heading-highlight">
           System
      </span><br></br>
      for a Healthier Life
    </h1>

    {/* Description */}
    <p className="hero-description">
      We provide exceptional healthcare services
      with a focus on trust, compassion, and
      personalized treatment for every patient.
    </p>

    {/* Stats row */}
    <div className="hero-stats">
      <div className="hero-stat">
        <span className="hero-stat-number">100+</span>
        <span className="hero-stat-label">Doctors</span>
      </div>
      <div className="hero-stat-divider"></div>
      <div className="hero-stat">
        <span className="hero-stat-number">400+</span>
        <span className="hero-stat-label">Hospitals</span>
      </div>
      <div className="hero-stat-divider"></div>
      <div className="hero-stat">
        <span className="hero-stat-number">50K+</span>
        <span className="hero-stat-label">Patients</span>
      </div>
    </div>

    {/* Feature pills */}
    <div className="hero-pills">
      <div className="hero-pill">
        <span>✅</span> Smart Appointments
      </div>
      <div className="hero-pill">
        <span>🔒</span> Secure Records
      </div>
      <div className="hero-pill">
        <span>📊</span> Live Dashboard
      </div>
    </div>

  </div>

  {/* RIGHT */}
  <div className="hero-right">

    <div className="hero-image-wrapper">

      {/* Decorative ring */}
      <div className="hero-ring hero-ring1"></div>
      <div className="hero-ring hero-ring2"></div>

      {/* Main image */}
      <img
        src={doctorImage}
        alt="Doctor"
        className="doctor-image"
      />

      {/* Floating card 1 */}
      <div className="hero-float-card card-top">
        <div className="float-card-icon">🩺</div>
        <div className="float-card-text">
          <span className="float-card-title">Active Doctors</span>
          <span className="float-card-value">100+</span>
        </div>
      </div>

      {/* Floating card 2 */}
      <div className="hero-float-card card-bottom">
        <div className="float-card-icon">📅</div>
        <div className="float-card-text">
          <span className="float-card-title">Appointments Today</span>
          <span className="float-card-value">250+</span>
        </div>
      </div>

      {/* Live badge */}
      <div className="hero-live-badge">
        <span className="live-dot"></span>
        System Live
      </div>

    </div>

  </div>

</div>

      {/* TRUSTED HOSPITALS SECTION */}

      {/* TRUSTED HOSPITALS SECTION */}


    {/* TRUSTED HOSPITALS SECTION */}



<div className="trusted-section">

  {/* HEADER */}
  <div className="trusted-header">
    <span className="trusted-tag">Our Partners</span>
    <p className="trusted-title">
      Trusted By Hospitals Across<br />Erode & Coimbatore
    </p>
    <span className="trusted-subtitle">
      35+ hospitals and healthcare centers powered by MediFlow
    </span>
  </div>

  {/* ROW 1 — forward */}
  <div className="logo-slider">
    <div className="logo-track">

      {/* ORIGINAL */}
      <div className="hospital-item"><img src={KMCH} alt="" /><p>KMCH Hospital</p></div>
      <div className="hospital-item"><img src={GKNM} alt="" /><p>GKNM Hospital</p></div>
      <div className="hospital-item"><img src={ROYAL} alt="" /><p>Royal Care Hospital</p></div>
      <div className="hospital-item"><img src={PSG} alt="" /><p>PSG Hospitals</p></div>
      <div className="hospital-item"><img src={SRIRAMAKRISHNA} alt="" /><p>Sri Ramakrishna Hospital</p></div>
      <div className="hospital-item"><img src={KONGUNAD} alt="" /><p>Kongunad Hospital</p></div>
      <div className="hospital-item"><img src={NG} alt="" /><p>NG Hospital</p></div>
      <div className="hospital-item"><img src={FIMS} alt="" /><p>FIMS Hospital</p></div>
      <div className="hospital-item"><img src={CKC} alt="" /><p>Coimbatore Kidney Centre</p></div>
      <div className="hospital-item"><img src={ARUN} alt="" /><p>Arun Hospital</p></div>
      <div className="hospital-item"><img src={SUDHA} alt="" /><p>Sudha Hospitals</p></div>
      <div className="hospital-item"><img src={LOTUS} alt="" /><p>Lotus Hospital</p></div>
      <div className="hospital-item"><img src={VASANTH} alt="" /><p>Vasan Eye Care</p></div>
      <div className="hospital-item"><img src={VELAN} alt="" /><p>Velan Hospital</p></div>
      <div className="hospital-item"><img src={KG} alt="" /><p>KG Hospital</p></div>

      {/* DUPLICATE for seamless infinite loop */}
      <div className="hospital-item"><img src={KMCH} alt="" /><p>KMCH Hospital</p></div>
      <div className="hospital-item"><img src={GKNM} alt="" /><p>GKNM Hospital</p></div>
      <div className="hospital-item"><img src={ROYAL} alt="" /><p>Royal Care Hospital</p></div>
      <div className="hospital-item"><img src={PSG} alt="" /><p>PSG Hospitals</p></div>
      <div className="hospital-item"><img src={SRIRAMAKRISHNA} alt="" /><p>Sri Ramakrishna Hospital</p></div>
      <div className="hospital-item"><img src={KONGUNAD} alt="" /><p>Kongunad Hospital</p></div>
      <div className="hospital-item"><img src={NG} alt="" /><p>NG Hospital</p></div>
      <div className="hospital-item"><img src={FIMS} alt="" /><p>FIMS Hospital</p></div>
      <div className="hospital-item"><img src={CKC} alt="" /><p>Coimbatore Kidney Centre</p></div>
      <div className="hospital-item"><img src={ARUN} alt="" /><p>Arun Hospital</p></div>
      <div className="hospital-item"><img src={SUDHA} alt="" /><p>Sudha Hospitals</p></div>
      <div className="hospital-item"><img src={LOTUS} alt="" /><p>Lotus Hospital</p></div>
      <div className="hospital-item"><img src={VASANTH} alt="" /><p>Vasan Eye Care</p></div>
      <div className="hospital-item"><img src={VELAN} alt="" /><p>Velan Hospital</p></div>
      <div className="hospital-item"><img src={KG} alt="" /><p>KG Hospital</p></div>

    </div>
  </div>

  {/* ROW 2 — reverse */}
  <div className="logo-slider reverse">
    <div className="logo-track">

      {/* ORIGINAL */}
      <div className="hospital-item"><img src={Bethesda} alt="" /><p>Bethesda Hospital</p></div>
      <div className="hospital-item"><img src={ASHWIN} alt="" /><p>Ashwin Hospital</p></div>
      <div className="hospital-item"><img src={ORTHOONE} alt="" /><p>Ortho One Hospital</p></div>
      <div className="hospital-item"><img src={GANGA} alt="" /><p>Ganga Hospital</p></div>
      <div className="hospital-item"><img src={MEDWIN} alt="" /><p>Medwin Hospital</p></div>
      <div className="hospital-item"><img src={VGM} alt="" /><p>VGM Hospital</p></div>
      <div className="hospital-item"><img src={NALAN} alt="" /><p>Nalan Hospital</p></div>
      <div className="hospital-item"><img src={KOWSALYA} alt="" /><p>Kausalya Medical Centre</p></div>
      <div className="hospital-item"><img src={SHEELA} alt="" /><p>Sheela Hospital</p></div>
      <div className="hospital-item"><img src={AROKYA} alt="" /><p>Arokya Hospital</p></div>
      <div className="hospital-item"><img src={PARK} alt="" /><p>Park Hospital</p></div>
      <div className="hospital-item"><img src={ECC} alt="" /><p>Erode Cancer Centre</p></div>
      <div className="hospital-item"><img src={KAVERY} alt="" /><p>Kavery Medical Centre</p></div>
      <div className="hospital-item"><img src={RAO} alt="" /><p>Rao Hospital</p></div>
      <div className="hospital-item"><img src={SRILAKSHMI} alt="" /><p>Sri Lakshmi Medical Centre</p></div>

      {/* DUPLICATE for seamless infinite loop */}
      <div className="hospital-item"><img src={Bethesda} alt="" /><p>Bethesda Hospital</p></div>
      <div className="hospital-item"><img src={ASHWIN} alt="" /><p>Ashwin Hospital</p></div>
      <div className="hospital-item"><img src={ORTHOONE} alt="" /><p>Ortho One Hospital</p></div>
      <div className="hospital-item"><img src={GANGA} alt="" /><p>Ganga Hospital</p></div>
      <div className="hospital-item"><img src={MEDWIN} alt="" /><p>Medwin Hospital</p></div>
      <div className="hospital-item"><img src={VGM} alt="" /><p>VGM Hospital</p></div>
      <div className="hospital-item"><img src={NALAN} alt="" /><p>Nalan Hospital</p></div>
      <div className="hospital-item"><img src={KOWSALYA} alt="" /><p>Kausalya Medical Centre</p></div>
      <div className="hospital-item"><img src={SHEELA} alt="" /><p>Sheela Hospital</p></div>
      <div className="hospital-item"><img src={AROKYA} alt="" /><p>Arokya Hospital</p></div>
      <div className="hospital-item"><img src={PARK} alt="" /><p>Park Hospital</p></div>
      <div className="hospital-item"><img src={ECC} alt="" /><p>Erode Cancer Centre</p></div>
      <div className="hospital-item"><img src={KAVERY} alt="" /><p>Kavery Medical Centre</p></div>
      <div className="hospital-item"><img src={RAO} alt="" /><p>Rao Hospital</p></div>
      <div className="hospital-item"><img src={SRILAKSHMI} alt="" /><p>Sri Lakshmi Medical Centre</p></div>

    </div>
  </div>

</div>

<div className="operations-section">

   <div className="operations-header" data-aos="fade-up">
    <span className="operations-tag">What We Offer</span>
    <h2 className="operations-heading">
      Operations We <span>Provide</span>
    </h2>
    <p className="operations-subtext">
      Streamlined tools built for modern hospital management
    </p>
  </div>

  <div className="operations-content">

    {/* LEFT IMAGE */}

    <div className="operations-left">

      <img
        src={operationsImage}
        alt="Operations"
        className="operations-image"
      />

    </div>

    {/* RIGHT CONTENT */}

    <div className="operations-right">

      <div
  className="operation-card"
  data-aos="fade-left"
  data-aos-delay="100"
>
        <span>01</span>
        <p>Smart Appointment Booking</p>
      </div>

      <div
  className="operation-card"
  data-aos="fade-left"
  data-aos-delay="300"
>
        <span>02</span>
        <p>Digital Patient Management</p>
      </div>

      <div
  className="operation-card"
  data-aos="fade-left"
  data-aos-delay="500"
>
        <span>03</span>
        <p>Doctor & Department Management</p>
      </div>

      <div
  className="operation-card"
  data-aos="fade-left"
  data-aos-delay="700"
>
        <span>04</span>
        <p>Queue & Token Management</p>
      </div>

      <div
  className="operation-card"
  data-aos="fade-left"
  data-aos-delay="900"
>
        <span>05</span>
        <p>Secure Healthcare Dashboard</p>
      </div>

    </div>

  </div>

</div>


{/* TAGLINE SECTION */}

<div className="tagline-section">
  <div className="bg-circle bg-circle1"></div>
  <div className="bg-circle bg-circle2"></div>
  <div className="bg-circle bg-circle3"></div>
 <div className="tg-tag">
    <span className="tg-tag-dot"></span>
    MediFlow Platform
  </div>
  <h2 className="tagline-heading">
    SMART HEALTHCARE SEAMLESS MANAGEMENT
  </h2>

  <p className="tagline-description">
    MediFlow helps hospitals streamline patient management,
    appointments, healthcare operations, and digital workflows
    through a modern and intelligent hospital management system.
  </p>

   <div className="tagline-divider"></div>

  <div className="smart-images-section">

    {/* IMAGE 1 */}
    <div className="smart-image-card" data-aos="fade-right">
      <div className="glow-ring"></div>
      <span className="corner corner-tl"></span>
      <span className="corner corner-tr"></span>
      <span className="corner corner-bl"></span>
      <span className="corner corner-br"></span>
      <img src={smart1} alt="Smart Healthcare" />
    </div>

    {/* IMAGE 2 */}
    <div className="smart-image-card" data-aos="fade-left">
      <div className="glow-ring"></div>
      <span className="corner corner-tl"></span>
      <span className="corner corner-tr"></span>
      <span className="corner corner-bl"></span>
      <span className="corner corner-br"></span>
      <img src={smart2} alt="Healthcare Management" />
    </div>

  </div>

</div>

{/* WHY MEDIFLOW SECTION */}

{/* WHY MEDIFLOW SECTION */}

<div className="why-mediflow-section">

  <h2 className="why-heading">Why MediFlow?</h2>

  <div className="why-container">

    {/* CARD 1 */}
    <div className="why-card" data-aos="zoom-in">
      <img src={patientManagement} alt="Patient Management" className="why-image" />
      <div className="why-card-body">
        <div className="why-number">01</div>
        <h3>Smart Patient Management</h3>
        <p>Easily manage patient records, medical history, appointments, and reports in one secure digital platform.</p>
      </div>
    </div>

    {/* CARD 2 */}
    <div className="why-card" data-aos="zoom-in" data-aos-delay="100">
      <img src={appointmentBooking} alt="Appointment Booking" className="why-image" />
      <div className="why-card-body">
        <div className="why-number">02</div>
        <h3>Faster Appointment Booking</h3>
        <p>Reduce waiting time with quick and intelligent appointment scheduling for doctors and departments.</p>
      </div>
    </div>

    {/* CARD 3 */}
    <div className="why-card" data-aos="zoom-in" data-aos-delay="200">
      <img src={healthcareData} alt="Healthcare Data" className="why-image" />
      <div className="why-card-body">
        <div className="why-number">03</div>
        <h3>Secure Healthcare Data</h3>
        <p>Protect sensitive patient information with safe, reliable, and organized digital record management.</p>
      </div>
    </div>

    {/* CARD 4 */}
    <div className="why-card" data-aos="zoom-in" data-aos-delay="300">
      <img src={doctorCoordination} alt="Doctor Coordination" className="why-image" />
      <div className="why-card-body">
        <div className="why-number">04</div>
        <h3>Efficient Doctor Coordination</h3>
        <p>Manage doctor schedules, departments, availability, and consultations without manual paperwork.</p>
      </div>
    </div>

    {/* CARD 5 */}
    <div className="why-card" data-aos="zoom-in" data-aos-delay="400">
      <img src={dashboardImage} alt="Dashboard" className="why-image" />
      <div className="why-card-body">
        <div className="why-number">05</div>
        <h3>Real-Time Dashboard</h3>
        <p>Track hospital operations, appointments, patient flow, and performance through live dashboards and reports.</p>
      </div>
    </div>

    {/* CARD 6 */}
    <div className="why-card" data-aos="zoom-in" data-aos-delay="500">
      <img src={userExperience} alt="User Experience" className="why-image" />
      <div className="why-card-body">
        <div className="why-number">06</div>
        <h3>Modern User Experience</h3>
        <p>Simple, responsive, and user-friendly interface designed for hospitals, doctors, staff, and patients.</p>
      </div>
    </div>

  </div>

</div>


{/* ACHIEVEMENT SECTION */}
<div className="achievement-section">

  <div className="achievement-header" data-aos="fade-up">
    <span className="achievement-tag">Our Achievement</span>
    <h2 className="achievement-heading">
      Numbers That <span>Speak</span> For Us
    </h2>
    <p className="achievement-subtext">
      Trusted by healthcare professionals across Tamil Nadu
    </p>
  </div>

  <div className="achievement-grid">

    {/* STAT 1 */}
    <div className="achievement-card" data-aos="flip-left" data-aos-delay="100">
      <div className="ach-shimmer"></div>
      <div className="ach-top">
        <div className="ach-icon-ring">
          <svg viewBox="0 0 24 24" fill="currentColor" className="ach-svg">
            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
          </svg>
        </div>
        <div className="ach-badge">Doctors</div>
      </div>
      <div className="ach-number" data-target="100" data-suffix="+">100+</div>
      <div className="ach-desc">Expert medical professionals on our platform</div>
      <div className="ach-dots">
        <span></span><span></span><span></span>
      </div>
    </div>

    {/* STAT 2 — featured */}
    <div className="achievement-card featured" data-aos="flip-left" data-aos-delay="200">
      <div className="ach-shimmer"></div>
      <div className="ach-top">
        <div className="ach-icon-ring">
          <svg viewBox="0 0 24 24" fill="currentColor" className="ach-svg">
            <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-7 3a2 2 0 110 4 2 2 0 010-4zm4 12H8v-.5c0-2 2.7-3 4-3s4 1 4 3v.5z"/>
          </svg>
        </div>
        <div className="ach-badge">Clients</div>
      </div>
      <div className="ach-number" data-target="400" data-suffix="+">350+</div>
      <div className="ach-desc">Hospitals and clinics trusting MediFlow daily</div>
      <div className="ach-dots">
        <span></span><span></span><span></span>
      </div>
    </div>

    {/* STAT 3 */}
    <div className="achievement-card" data-aos="flip-left" data-aos-delay="300">
      <div className="ach-shimmer"></div>
      <div className="ach-top">
        <div className="ach-icon-ring">
          <svg viewBox="0 0 24 24" fill="currentColor" className="ach-svg">
            <path d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/>
          </svg>
        </div>
        <div className="ach-badge">Appointments</div>
      </div>
      <div className="ach-number" data-target="250" data-suffix="+">145+</div>
      <div className="ach-desc">Successful bookings managed every month</div>
      <div className="ach-dots">
        <span></span><span></span><span></span>
      </div>
    </div>

  </div>

</div>



{/* PATIENT ACCESS SECTION */}
<div className="access-section">



  <div className="access-header" data-aos="fade-up">
    <span className="access-tag">Patient Access</span>
    <h2 className="access-main-heading">
      How MediFlow <span>Works</span>
    </h2>
    <p className="access-main-sub">
      A seamless journey from registration to smart healthcare management
    </p>
  </div>

  {/* ROW 1 — image left, content right */}
  <div className="access-row" data-aos="fade-right">
    <div className="access-image-wrap">
      <div className="access-img-decoration dec-blue"></div>
      <img src={patientregistration} alt="User Registration" className="access-img" />
      <div className="access-img-badge">
        <span className="badge-dot"></span>
        Step 01
      </div>
    </div>
    <div className="access-content">
      <span className="access-step-tag">01 — Registration</span>
      <h3 className="access-heading">User Registration</h3>
      <p className="access-summary">
        The user first creates an account in MediFlow by entering basic details
        such as name, email address, and password. The registration system
        securely stores user information and prevents duplicate accounts.
        After successful registration, the user can access the healthcare
        platform through the login page.
      </p>
      <div className="access-features">
        <div className="access-feature-pill">
          <span className="pill-dot"></span> Secure Creation
        </div>
        <div className="access-feature-pill">
          <span className="pill-dot"></span> Duplicate Prevention
        </div>
        <div className="access-feature-pill">
          <span className="pill-dot"></span> Instant Login Access
        </div>
      </div>
    </div>
  </div>

  {/* ROW 2 — content left, image right */}
  <div className="access-row reverse" data-aos="fade-left">
    <div className="access-content">
      <span className="access-step-tag">02 — Access</span>
      <h3 className="access-heading">Homepage Access</h3>
      <p className="access-summary">
        Once logged in, users can explore the MediFlow homepage which displays
        healthcare services, hospital partnerships, and smart healthcare features.
        The homepage provides a responsive and interactive interface with
        animations, hospital logos, feature highlights, and modern UI elements.
      </p>
      <div className="access-features">
        <div className="access-feature-pill">
          <span className="pill-dot"></span> Interactive UI
        </div>
        <div className="access-feature-pill">
          <span className="pill-dot"></span> Hospital Partnerships
        </div>
        <div className="access-feature-pill">
          <span className="pill-dot"></span> Smart Features
        </div>
      </div>
    </div>
    <div className="access-image-wrap">
      <div className="access-img-decoration dec-teal"></div>
      <img src={homepageaccess} alt="Homepage Access" className="access-img" />
      <div className="access-img-badge">
        <span className="badge-dot"></span>
        Step 02
      </div>
    </div>
  </div>

  {/* ROW 3 — image left, content right */}
  <div className="access-row" data-aos="fade-right">
    <div className="access-image-wrap">
      <div className="access-img-decoration dec-blue"></div>
      <img src={appointmentbooking} alt="Appointment Booking" className="access-img" />
      <div className="access-img-badge">
        <span className="badge-dot"></span>
        Step 03
      </div>
    </div>
    <div className="access-content">
      <span className="access-step-tag">03 — Booking</span>
      <h3 className="access-heading">Appointment Booking</h3>
      <p className="access-summary">
        Users can book appointments with doctors or departments through the
        smart appointment booking system. The platform helps users select
        available doctors, departments, and timings quickly and efficiently.
        This feature reduces waiting time and improves patient convenience.
      </p>
      <div className="access-features">
        <div className="access-feature-pill">
          <span className="pill-dot"></span> Smart Scheduling
        </div>
        <div className="access-feature-pill">
          <span className="pill-dot"></span> Reduced Wait Time
        </div>
        <div className="access-feature-pill">
          <span className="pill-dot"></span> Doctor Selection
        </div>
      </div>
    </div>
  </div>

  {/* ROW 4 — content left, image right */}
  <div className="access-row reverse" data-aos="fade-left">
    <div className="access-content">
      <span className="access-step-tag">04 — Management</span>
      <h3 className="access-heading">Patient Management</h3>
      <p className="access-summary">
        The system allows users and hospital staff to manage patient records
        digitally. Important information such as medical history, appointments,
        reports, and healthcare details are stored securely within the platform.
        This reduces manual paperwork and improves healthcare workflow management.
      </p>
      <div className="access-features">
        <div className="access-feature-pill">
          <span className="pill-dot"></span> Digital Records
        </div>
        <div className="access-feature-pill">
          <span className="pill-dot"></span> Medical History
        </div>
        <div className="access-feature-pill">
          <span className="pill-dot"></span> No Paperwork
        </div>
      </div>
    </div>
    <div className="access-image-wrap">
      <div className="access-img-decoration dec-teal"></div>
      <img src={patientmanagement} alt="Patient Management" className="access-img" />
      <div className="access-img-badge">
        <span className="badge-dot"></span>
        Step 04
      </div>
    </div>
  </div>

  {/* ROW 5 — image left, content right */}
  <div className="access-row" data-aos="fade-right">
    <div className="access-image-wrap">
      <div className="access-img-decoration dec-blue"></div>
      <img src={doctorcoordination} alt="Doctor Coordination" className="access-img" />
      <div className="access-img-badge">
        <span className="badge-dot"></span>
        Step 05
      </div>
    </div>
    <div className="access-content">
      <span className="access-step-tag">05 — Coordination</span>
      <h3 className="access-heading">Doctor & Department Coordination</h3>
      <p className="access-summary">
        MediFlow helps hospitals efficiently manage doctor schedules, department
        availability, and healthcare coordination. Users can easily view available
        services and healthcare operations through the platform, improving
        communication between doctors, staff, and patients.
      </p>
      <div className="access-features">
        <div className="access-feature-pill">
          <span className="pill-dot"></span> Schedule Management
        </div>
        <div className="access-feature-pill">
          <span className="pill-dot"></span> Department View
        </div>
        <div className="access-feature-pill">
          <span className="pill-dot"></span> Staff Coordination
        </div>
      </div>
    </div>
  </div>

  {/* ROW 6 — content left, image right */}
  <div className="access-row reverse" data-aos="fade-left">
    <div className="access-content">
      <span className="access-step-tag">06 — Security</span>
      <h3 className="access-heading">Secure Digital Healthcare Experience</h3>
      <p className="access-summary">
        MediFlow ensures a secure and user-friendly healthcare environment by
        maintaining organized digital records and responsive system performance.
        The platform improves healthcare efficiency, enhances patient experience,
        and provides a seamless hospital management solution using modern
        healthcare technologies.
      </p>
      <div className="access-features">
        <div className="access-feature-pill">
          <span className="pill-dot"></span> Organized Records
        </div>
        <div className="access-feature-pill">
          <span className="pill-dot"></span> High Performance
        </div>
        <div className="access-feature-pill">
          <span className="pill-dot"></span> Modern Technology
        </div>
      </div>
    </div>
    <div className="access-image-wrap">
      <div className="access-img-decoration dec-teal"></div>
      <img src={Securehealthcare} alt="Secure Healthcare" className="access-img" />
      <div className="access-img-badge">
        <span className="badge-dot"></span>
        Step 06
      </div>
    </div>
  </div>

</div>


{/* =========================================
   PATIENT REVIEWS SECTION
========================================= */}

<div className="reviews-section">

  <h2 className="reviews-heading">
    Patient Reviews
  </h2>

  <div className="review-card">

    <button className="review-btn left-btn" onClick={prevReview}>
      ❮
    </button>

    <div className="review-content" key={currentReview}>

      <div className="default-profile">
        <div className="profile-circle">👤</div>
      </div>

      <div className="review-stars">★★★★★</div>

      <h3>{reviews[currentReview].name}</h3>

      <p>{reviews[currentReview].review}</p>

    </div>

    <button className="review-btn right-btn" onClick={nextReview}>
      ❯
    </button>

  </div>

  {/* DOTS */}
  <div className="review-dots">
    {reviews.map((_, index) => (
      <button
        key={index}
        className={`review-dot ${index === currentReview ? "active" : ""}`}
        onClick={() => setCurrentReview(index)}
      />
    ))}
  </div>

  {/* PROGRESS BAR */}
  <div className="review-progress-bar">
    <div className="review-progress-fill" key={currentReview}></div>
  </div>

</div>
<Footer />
    </div>

  );

}

export default Home;