import "../styles/SpecialityPage.css";
import Navbar from "../components/Navbar";
import { specialityInfo } from "../data/specialityInfo";
import { useParams } from "react-router-dom";
import { specialityIcons } from "../data/specialityIcons";
import { hospitalsData } from "../data/hospitalsData";
import { specialityGallery } from "../data/specialityGallery";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function SpecialityPage() {

  const { name } = useParams();
  const navigate = useNavigate();

  const hospitals = hospitalsData[name] || [];
  const circles = specialityInfo[name] || [];
  const specialityLogo = specialityIcons[name];
  const gallery = specialityGallery[name] || [];

  return (

    <div className="home-page">

      <Navbar />

      {/* HEADER */}

      <div className="speciality-page-header">

        <h1 className="speciality-page-title">

          MEDIFLOW

        </h1>

        <p className="speciality-page-tagline">

          Smart Healthcare Seamless Management

        </p>

        <h2 className="speciality-page-name">

          {name} Specialists

        </h2>

      </div>

      {/* HOSPITALS */}

      <div className="speciality-hospital-grid">

        {hospitals.map((item, index) => (

          <div
  className="speciality-hospital-card"
  key={index}
>

  <div className="hospital-card-top">

    <div className="hospital-number">

      0{index + 1}

    </div>

    <div className="hospital-status">

      Available

    </div>

  </div>

  <h3>
    {item.hospital}
  </h3>

  <p className="hospital-doctor">

    {item.doctor}

  </p>

  <p className="hospital-location">

    📍 {item.location}

  </p>

  <button
  className="hero-btn"
  onClick={() =>
    navigate("/appointment", {

      state: {

        hospital: item.hospital,
        doctor: item.doctor,
        location: item.location,
        speciality: name

      }

    })
  }
>

  Book Appointment

</button>

</div>
        ))}

      </div>

      {/* SPECIALITY INFO SECTION */}

<div className="speciality-info-section">

  <h1 className="info-main-title">

    {name}

  </h1>

  <div className="speciality-circle-layout">

    <div className="center-logo">

      <img
  src={specialityLogo}
  alt={name}
/>

    </div>

    <div className="circle-item top-circle">
  {circles[0]}
</div>

<div className="circle-item left-circle">
  {circles[1]}
</div>

<div className="circle-item right-circle">
  {circles[2]}
</div>

<div className="circle-item bottom-left-circle">
  {circles[3]}
</div>

<div className="circle-item bottom-right-circle">
  {circles[4]}
</div>

  </div>

</div>
{/* SPECIALITY GALLERY */}

<div className="speciality-gallery-section">

  {gallery.map((item, index) => (

    <div
      className={`gallery-row ${
        index % 2 === 0
          ? "normal-row"
          : "reverse-row"
      }`}
      key={index}
    >

      <div className="gallery-image-box">

        <img
          src={item.image}
          alt=""
        />

      </div>

      <div className="gallery-content-box">

        <h2>
          {item.title}
        </h2>

        <p>
          {item.desc}
        </p>

      </div>

    </div>

  ))}

</div>
<Footer />
    </div>

  );

}

export default SpecialityPage;