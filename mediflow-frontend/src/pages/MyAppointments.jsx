import "../styles/MyAppointments.css";

import Navbar from "../components/Navbar";

import { useEffect, useState } from "react";

function MyAppointments() {

  const [appointments, setAppointments] =
    useState([]);

  useEffect(() => {

    const phone =
      localStorage.getItem("patientMobile");

    if (!phone) return;

    fetch(
      `https://mediflow-xw59.onrender.com/api/appointments/patient/${phone}`
    )

      .then((res) => res.json())

      .then((data) => {

        setAppointments(data);

      })

      .catch((err) => console.log(err));

  }, []);

  // CURRENT DATE & TIME

  const now = new Date();

  // UPCOMING

  const upcomingAppointments =
    appointments.filter((appointment) => {

      const appointmentDateTime =
        new Date(
          `${appointment.appointmentDate} ${appointment.appointmentTime}`
        );

      return appointmentDateTime > now;

    });

  // COMPLETED

  const completedAppointments =
    appointments.filter((appointment) => {

      const appointmentDateTime =
        new Date(
          `${appointment.appointmentDate} ${appointment.appointmentTime}`
        );

      return appointmentDateTime <= now;

    });

  return (

    <div className="appointments-page">

      <Navbar />

      <div className="appointments-container">

        <h1 className="appointments-title">

          My Appointments

        </h1>

        {/* UPCOMING */}

        <div className="appointment-section">

          <h2 className="section-heading">

            Upcoming Appointments

          </h2>

          {upcomingAppointments.length === 0 ? (

            <p className="no-appointments">

              No upcoming appointments

            </p>

          ) : (

            upcomingAppointments.map((appointment) => (

              <div
                className="appointment-card"
                key={appointment.id}
              >

                <div>

                  <h3>
                    {appointment.doctorName}
                  </h3>

                  <p>
                    {appointment.speciality}
                  </p>

                  <p>
                    Date:
                    {" "}
                    {appointment.appointmentDate}
                  </p>

                  <p>
                    Time:
                    {" "}
                    {appointment.appointmentTime}
                  </p>

                  <p>
                    Hospital:
                    {" "}
                    {appointment.hospital}
                  </p>

                  <p>
                    Booking ID:
                    {" "}
                    {appointment.bookingId}
                  </p>

                </div>

                <div className="appointment-status">

                  <span className="status upcoming">

                    Upcoming

                  </span>

                  <button className="cancel-btn">

                    Cancel

                  </button>

                </div>

              </div>

            ))

          )}

        </div>

        {/* COMPLETED */}

        <div className="appointment-section">

          <h2 className="section-heading">

            Completed Appointments

          </h2>

          {completedAppointments.length === 0 ? (

            <p className="no-appointments">

              No completed appointments

            </p>

          ) : (

            completedAppointments.map((appointment) => (

              <div
                className="appointment-card"
                key={appointment.id}
              >

                <div>

                  <h3>
                    {appointment.doctorName}
                  </h3>

                  <p>
                    {appointment.speciality}
                  </p>

                  <p>
                    Date:
                    {" "}
                    {appointment.appointmentDate}
                  </p>

                  <p>
                    Time:
                    {" "}
                    {appointment.appointmentTime}
                  </p>

                  <p>
                    Hospital:
                    {" "}
                    {appointment.hospital}
                  </p>

                  <p>
                    Booking ID:
                    {" "}
                    {appointment.bookingId}
                  </p>

                </div>

                <div className="appointment-status">

                  <span className="status completed">

                    Completed

                  </span>

                </div>

              </div>

            ))

          )}

        </div>

      </div>

    </div>

  );

}

export default MyAppointments;