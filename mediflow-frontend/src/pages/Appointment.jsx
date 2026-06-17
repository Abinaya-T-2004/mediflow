import "../styles/Appointment.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  useLocation,
  useNavigate
} from "react-router-dom";

import { useState } from "react";

function Appointment() {

  const { state } = useLocation();

  const navigate = useNavigate();

  // APPOINTMENT STATE

  const [appointment, setAppointment] =
    useState({

      patientName: "",
      age: "",
      gender: "",
      phone: "",
      email: "",
      appointmentDate: "",
      symptoms: ""

    });

  // LOADING STATE

  const [loading, setLoading] =
    useState(false);

  // HANDLE INPUT CHANGE

  const handleChange = (e) => {

    setAppointment({

      ...appointment,
      [e.target.name]: e.target.value

    });

  };

  // HANDLE SUBMIT

  const handleSubmit = async (e) => {

    e.preventDefault();

    // PREVENT DOUBLE CLICK

    if (loading) return;

    setLoading(true);

    try {

      const response = await fetch(
        "https://mediflow-xw59.onrender.com/api/appointments/book",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({

            ...appointment,

            // WHO BOOKED APPOINTMENT

            bookedByMobile:
              localStorage.getItem(
                "patientMobile"
              ),

            doctorName: state?.doctor,
            hospital: state?.hospital,
            location: state?.location,
            speciality: state?.speciality

          })

        }
      );

      const data = await response.json();

      setLoading(false);

      // REDIRECT TO SUCCESS PAGE

      navigate("/appointment-success", {

        state: {

          bookingId: data.bookingId,
          slotNumber: data.slotNumber,
          appointmentTime: data.appointmentTime,
          doctorName: state?.doctor,
          hospital: state?.hospital

        }

      });

    } catch (error) {

      console.error(error);

      setLoading(false);

      alert("Failed to book appointment");

    }

  };

  return (

    <div className="appointment-page">

      <Navbar />

      {/* TOP INFO */}

      <div className="appointment-top-section">

        <div className="appointment-info-card">

          <h1>
            {state?.hospital}
          </h1>

          <p>
            👨‍⚕️ {state?.doctor}
          </p>

          <p>
            📍 {state?.location}
          </p>

          <span>
            {state?.speciality}
          </span>

        </div>

      </div>

      {/* WELCOME */}

      <div className="appointment-welcome-section">

        <h1>
          Let’s Start!
        </h1>

        <p>
          Schedule your healthcare
          appointment quickly and
          securely with MediFlow.
        </p>

      </div>

      {/* FORM */}

      <div className="appointment-form-section">

        <form
          className="appointment-form"
          onSubmit={handleSubmit}
          autoComplete="off"
        >

          {/* PATIENT NAME */}

          <div className="form-group">

            <label>
              Patient Name
            </label>

            <input
              type="text"
              name="patientName"
              placeholder="Enter patient name"
              value={appointment.patientName}
              onChange={handleChange}
            />

          </div>

          {/* AGE */}

          <div className="form-group">

            <label>
              Age
            </label>

            <input
              type="number"
              name="age"
              placeholder="Enter age"
              value={appointment.age}
              onChange={handleChange}
            />

          </div>

          {/* GENDER */}

          <div className="form-group">

            <label>
              Gender
            </label>

            <select
              name="gender"
              value={appointment.gender}
              onChange={handleChange}
            >

              <option value="">
                Select Gender
              </option>

              <option value="Male">
                Male
              </option>

              <option value="Female">
                Female
              </option>

              <option value="Other">
                Other
              </option>

            </select>

          </div>

          {/* PHONE */}

          <div className="form-group">

            <label>
              Phone Number
            </label>

            <input
              type="text"
              name="phone"
              placeholder="Enter phone number"
              value={appointment.phone}
              onChange={handleChange}
            />

          </div>

          {/* EMAIL */}

          <div className="form-group">

            <label>
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={appointment.email}
              onChange={handleChange}
            />

          </div>

          {/* DATE */}

          <div className="form-group">

            <label>
              Appointment Date
            </label>

            <input
              type="date"
              name="appointmentDate"
              value={appointment.appointmentDate}
              onChange={handleChange}

              min={
                new Date(
                  Date.now() + 86400000
                )
                  .toISOString()
                  .split("T")[0]
              }
            />

          </div>

          {/* SYMPTOMS */}

          <div className="form-group full-width">

            <label>
              Problem Description
            </label>

            <textarea
              rows="5"
              name="symptoms"
              placeholder="Describe your problem"
              value={appointment.symptoms}
              onChange={handleChange}
            ></textarea>

          </div>

          {/* BUTTON */}

          <button
            type="submit"
            className="appointment-submit-btn"
            disabled={loading}
          >

            {loading
              ? "Booking..."
              : "Confirm Appointment"}

          </button>

        </form>

      </div>

      <Footer />

    </div>

  );

}

export default Appointment;