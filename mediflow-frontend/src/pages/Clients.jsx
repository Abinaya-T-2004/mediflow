import "../styles/Clients.css";
import Footer from "../components/Footer";
import { clientsData } from "../data/clientsData";
import Navbar from "../components/Navbar";

function Clients() {

  return (
    
<div>
     <Navbar />
    <div className="clients-section">
        

      <div className="clients-header">

  <span className="clients-header-tag">Trusted Partners</span>

  <h1>Our Trusted Clients</h1>

  <p>Hospitals and healthcare centers using MediFlow</p>

  <div className="clients-header-stats">
    <div className="header-stat">
      <span className="header-stat-number">35+</span>
      <span className="header-stat-label">Hospitals</span>
    </div>
    <div className="header-stat-divider"></div>
    <div className="header-stat">
      <span className="header-stat-number">250+</span>
      <span className="header-stat-label">Doctors</span>
    </div>
    <div className="header-stat-divider"></div>
    <div className="header-stat">
      <span className="header-stat-number">50K+</span>
      <span className="header-stat-label">Patients</span>
    </div>
  </div>

  {/* Floating pills */}
  <div className="clients-header-pill pill-left">
    ✅ Verified Hospitals
  </div>
  <div className="clients-header-pill pill-right">
    🏥 Coimbatore & Erode
  </div>

</div>

      <div className="clients-grid">

        {clientsData.map((client, index) => (

          <div
            className="client-card"
            key={index}
          >

            <img
              src={client.image}
              alt={client.name}
            />

            <h2>
              {client.name}
            </h2>

            <p>
              📍 {client.location}
            </p>

            <div className="client-info">

              <span>
                {client.doctors}
              </span>

              <span>
                {client.patients}
              </span>

            </div>

          </div>

        ))}

      </div>

    </div>
    <Footer />
    </div>

  );

}

export default Clients;