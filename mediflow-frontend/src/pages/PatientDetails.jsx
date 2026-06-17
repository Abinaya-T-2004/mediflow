import "../styles/PatientDetails.css";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function PatientDetails() {

  const navigate = useNavigate();

  const [patient, setPatient] = useState({

    name: "",
    initial: "",
    dob: "",
    age: "",
    gender: "",
    bloodGroup: "",
    mobile: "",
    address: "",
    city: "",

    email:
  localStorage.getItem(
    "userEmail"
  )

  });

  // HANDLE INPUT

  const handleChange = (e) => {

    const { name, value } = e.target;

    // AUTO AGE CALCULATION

    if (name === "dob") {

      const birthYear =
        new Date(value).getFullYear();

      const currentYear =
        new Date().getFullYear();

      const calculatedAge =
        currentYear - birthYear;

      setPatient({

        ...patient,
        dob: value,
        age: calculatedAge

      });

    } else {

      setPatient({

        ...patient,
        [name]: value

      });

    }

  };

  // HANDLE SUBMIT

  const handleSubmit = async (e) => {

  e.preventDefault();

  try {

    const response = await fetch(
      "https://mediflow-xw59.onrender.com/api/patients/save",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(patient)
      }
    );

    const data = await response.json();

    alert(data.message);

    if (
      data.message ===
      "Patient details saved successfully"
    ) {

      // SAVE MOBILE TO LOCALSTORAGE
       localStorage.setItem(
    "patientMobile",
    patient.mobile
  );

      navigate("/home");

    }

  } catch (error) {

    console.error(error);
    alert("Failed to save patient details");

  }

};

  return (

    <div className="patient-page">

      {/* NAVBAR */}

      <div className="patient-navbar">

        <img
          src={logo}
          alt="MediFlow Logo"
          className="patient-logo"
        />

      </div>

      {/* MAIN */}

      <div className="patient-container">

        <div className="patient-card">

          <h1>Patient Details</h1>

          <p>
            Complete your healthcare
            profile
          </p>

          <form
            className="patient-form"
            onSubmit={handleSubmit}
            autoComplete="off"
          >

            {/* NAME */}

            <div className="form-group">

              <label>Name</label>

              <input
                type="text"
                name="name"
                placeholder="Enter full name"
                value={patient.name}
                onChange={handleChange}
                autoComplete="off"
              />

            </div>

            {/* INITIAL */}

            <div className="form-group">

              <label>Initial</label>

              <input
                type="text"
                name="initial"
                placeholder="Enter initials"
                value={patient.initial}
                onChange={handleChange}
                autoComplete="off"
              />

            </div>

            {/* DOB */}

            <div className="form-group">

              <label>Date of Birth</label>

              <input
                type="date"
                name="dob"
                value={patient.dob}
                onChange={handleChange}
              />

            </div>

            {/* AGE */}

            <div className="form-group">

              <label>Age</label>

              <input
                type="text"
                name="age"
                value={patient.age}
                readOnly
              />

            </div>

            {/* GENDER */}

            <div className="form-group">

              <label>Gender</label>

              <select
                name="gender"
                value={patient.gender}
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

            {/* BLOOD GROUP */}

            <div className="form-group">

              <label>Blood Group</label>

              <select
                name="bloodGroup"
                value={patient.bloodGroup}
                onChange={handleChange}
              >

                <option value="">
                  Select Blood Group
                </option>

                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>AB+</option>
                <option>AB-</option>
                <option>O+</option>
                <option>O-</option>

              </select>

            </div>

            {/* MOBILE */}

            <div className="form-group">

              <label>Mobile Number</label>

              <input
                type="text"
                name="mobile"
                placeholder="Enter mobile number"
                value={patient.mobile}
                onChange={handleChange}
                autoComplete="off"
              />

            </div>

            {/* ADDRESS */}

            <div className="form-group">

              <label>Address</label>

              <textarea
                name="address"
                placeholder="Enter address"
                value={patient.address}
                onChange={handleChange}
                autoComplete="off"
              />

            </div>

            {/* CITY */}

            <div className="form-group">

              <label>City</label>

              <input
                type="text"
                name="city"
                placeholder="Enter city"
                value={patient.city}
                onChange={handleChange}
                autoComplete="off"
              />

            </div>

            {/* SAVE BUTTON */}

            <button
              type="submit"
              className="save-btn"
            >
              Save Details
            </button>

          </form>

        </div>

      </div>

    </div>

  );

}

export default PatientDetails;