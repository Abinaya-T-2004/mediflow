import "../styles/AppointmentSuccess.css";

import { useLocation, useNavigate } from "react-router-dom";

function AppointmentSuccess() {

  const { state } = useLocation();

  const navigate = useNavigate();

  return (

    <div className="success-page">

      <div className="success-card">

        <div className="success-icon">
          ✅
        </div>

        <h1>
          Appointment Confirmed
        </h1>

        <p>
          Your appointment has been
          booked successfully.
        </p>

        <div className="success-details">

          <div className="detail-box">

            <h3>Booking ID</h3>

            <p>{state?.bookingId}</p>

          </div>

          <div className="detail-box">

            <h3>Slot Number</h3>

            <p>{state?.slotNumber}</p>

          </div>

          <div className="detail-box">

            <h3>Appointment Time</h3>

            <p>{state?.appointmentTime}</p>

          </div>

          <div className="detail-box">

            <h3>Doctor</h3>

            <p>{state?.doctorName}</p>

          </div>

          <div className="detail-box">

            <h3>Hospital</h3>

            <p>{state?.hospital}</p>

          </div>

        </div>

        <button
          className="home-btn"
          onClick={() =>
            navigate("/home")
          }
        >

          Go To Home

        </button>

      </div>

    </div>

  );

}

export default AppointmentSuccess;