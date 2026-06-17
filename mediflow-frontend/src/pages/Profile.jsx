import "../styles/Profile.css";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {

  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

 useEffect(() => {
const mobile = localStorage.getItem("patientMobile");
  

  

console.log("Mobile from localStorage:", mobile);

if (!mobile) {
  setError(true);
  setLoading(false);
  return;
}
  // encode email because it has @ symbol
  fetch(`https://mediflow-xw59.onrender.com/api/patients/get/${mobile}`)
    .then((res) => {
      console.log("Response status:", res.status); // debug
      if (!res.ok) throw new Error("Not found");
      return res.json();
    })
    .then((data) => {
      console.log("Patient data:", data); // debug
      setPatient(data);
      setLoading(false);
    })
    .catch((err) => {
      console.log("Error:", err); // debug
      setError(true);
      setLoading(false);
    });

}, []);

  // ── LOADING ──
  if (loading) {
    return (
      <div className="profile-page">
        <Navbar />
        <div className="profile-loading">
          <div className="profile-spinner"></div>
          <p>Loading your profile...</p>
        </div>
      </div>
    );
  }

  // ── ERROR / NOT FOUND ──
  if (error || !patient) {
    return (
      <div className="profile-page">
        <Navbar />
        <div className="profile-error">
          <div className="profile-error-icon">⚠️</div>
          <h2>Profile Not Found</h2>
          <p>No patient details found. Please complete your registration first.</p>
          <button onClick={() => navigate("/patient-details")}>
            Complete Registration
          </button>
        </div>
      </div>
    );
  }

  // ── PROFILE ──
  return (

    <div className="profile-page">

      <Navbar />

      {/* HEADER */}
      <div className="profile-header">
        <div className="profile-header-content">

          {/* Avatar */}
          <div className="profile-avatar">
            <span className="profile-avatar-text">
              {patient.initial
                ? patient.initial.charAt(0).toUpperCase()
                : patient.name.charAt(0).toUpperCase()
              }
            </span>
            <div className="profile-avatar-ring"></div>
          </div>

          {/* Name & badge */}
          <div className="profile-header-info">
            <div className="profile-verified-badge">
              <span className="profile-verified-dot"></span>
              Verified Patient
            </div>
            <h1 className="profile-name">
              {patient.initial} {patient.name}
            </h1>
            <p className="profile-sub">
              📍 {patient.city} &nbsp;|&nbsp; 📞 {patient.mobile}
            </p>
          </div>

          {/* Blood group chip */}
          <div className="profile-blood-chip">
            <span className="blood-icon">🩸</span>
            <div>
              <span className="blood-label">Blood Group</span>
              <span className="blood-value">{patient.bloodGroup}</span>
            </div>
          </div>

        </div>
      </div>

      {/* DETAILS GRID */}
      <div className="profile-body">

        <div className="profile-section-title" data-label="Personal Information">
          <h2>Personal Information</h2>
          <div className="profile-section-line"></div>
        </div>

        <div className="profile-grid">

          <div className="profile-detail-card">
            <span className="detail-icon">👤</span>
            <div className="detail-text">
              <span className="detail-label">Full Name</span>
              <span className="detail-value">
                {patient.initial} {patient.name}
              </span>
            </div>
          </div>

          <div className="profile-detail-card">
            <span className="detail-icon">🎂</span>
            <div className="detail-text">
              <span className="detail-label">Date of Birth</span>
              <span className="detail-value">{patient.dob}</span>
            </div>
          </div>

          <div className="profile-detail-card">
            <span className="detail-icon">📅</span>
            <div className="detail-text">
              <span className="detail-label">Age</span>
              <span className="detail-value">{patient.age} Years</span>
            </div>
          </div>

          <div className="profile-detail-card">
            <span className="detail-icon">⚧</span>
            <div className="detail-text">
              <span className="detail-label">Gender</span>
              <span className="detail-value">{patient.gender}</span>
            </div>
          </div>

          <div className="profile-detail-card">
            <span className="detail-icon">🩸</span>
            <div className="detail-text">
              <span className="detail-label">Blood Group</span>
              <span className="detail-value">{patient.bloodGroup}</span>
            </div>
          </div>

          <div className="profile-detail-card">
            <span className="detail-icon">📞</span>
            <div className="detail-text">
              <span className="detail-label">Mobile Number</span>
              <span className="detail-value">{patient.mobile}</span>
            </div>
          </div>

          <div className="profile-detail-card full-card">
            <span className="detail-icon">📍</span>
            <div className="detail-text">
              <span className="detail-label">Address</span>
              <span className="detail-value">
                {patient.address}, {patient.city}
              </span>
            </div>
          </div>

        </div>

      </div>

    </div>

  );

}

export default Profile;