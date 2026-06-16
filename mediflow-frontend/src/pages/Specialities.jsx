import "../styles/Specialities.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useState } from "react";
import Footer from "../components/Footer";

/* ICONS */
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

function Specialities() {

  const [searchQuery, setSearchQuery] = useState("");

  const specialities = [
    { image: Dermatology,      title: "Dermatology",      desc: "Skin and hair treatments"  },
    { image: Gynecology,       title: "Gynecology",       desc: "Women's healthcare"         },
    { image: Pediatrics,       title: "Pediatrics",       desc: "Child healthcare"           },
    { image: Urology,          title: "Urology",          desc: "Kidney and urinary care"    },
    { image: Orthopedics,      title: "Orthopedics",      desc: "Bone and joint care"        },
    { image: Psychiatry,       title: "Psychiatry",       desc: "Mental wellness support"    },
    { image: Gastroenterology, title: "Gastroenterology", desc: "Digestive care"             },
    { image: Oncology,         title: "Oncology",         desc: "Cancer treatment"           },
    { image: Pulmonology,      title: "Pulmonology",      desc: "Lung healthcare"            },
    { image: GeneralSurgery,   title: "General Surgery",  desc: "Advanced surgical care"     },
    { image: Nephrology,       title: "Nephrology",       desc: "Kidney specialists"         },
    { image: Radiology,        title: "Radiology",        desc: "Medical imaging"            },
    { image: Cardiology,       title: "Cardiology",       desc: "Heart specialists"          },
    { image: Neurology,        title: "Neurology",        desc: "Brain and nerve care"       },
  ];

  /* ── FILTER LOGIC ── */
  const filteredSpecialities = specialities.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (

    <div className="specialities-page">

      <Navbar />

      <div className="specialities-hero">

        <div className="hero-top-tag">
          <span className="hero-top-tag-dot"></span>
          MediFlow Healthcare
        </div>

        <h1>Explore Medical Specialities</h1>

        <p>
          Discover expert healthcare departments and
          specialist services available in MediFlow.
        </p>

        {/* ── LIVE SEARCH BAR ── */}
        <div className="specialities-search">
          <input
            type="text"
            placeholder="Search speciality..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {/* Clear button */}
          {searchQuery && (
            <button
              className="search-clear-btn"
              onClick={() => setSearchQuery("")}
            >
              ✕
            </button>
          )}
          <button>Search</button>
        </div>

        <div className="specialities-stats">
          <div className="spec-stat">
            <span className="spec-stat-dot"></span>
            <span>14</span>
            <span>Specialities</span>
          </div>
          <div className="spec-stat">
            <span className="spec-stat-dot"></span>
            <span>100+</span>
            <span>Specialists</span>
          </div>
          <div className="spec-stat">
            <span className="spec-stat-dot"></span>
            <span>35+</span>
            <span>Hospitals</span>
          </div>
        </div>

        <div className="spec-pill-left">🩺 Expert Doctors</div>
        <div className="spec-pill-right">🏥 35+ Hospitals</div>

      </div>

      {/* ── GRID ── */}
      <div className="specialities-grid">

        {filteredSpecialities.length > 0 ? (

          filteredSpecialities.map((item, index) => (
            <Link
              to={`/speciality/${item.title}`}
              className="speciality-page-card"
              key={index}
            >
              <img src={item.image} alt={item.title} />
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <div className="card-arrow">→</div>
            </Link>
          ))

        ) : (

          /* ── NO RESULTS ── */
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <h3>No speciality found</h3>
            <p>Try searching with a different keyword</p>
            <button onClick={() => setSearchQuery("")}>
              Clear Search
            </button>
          </div>

        )}

      </div>
<Footer />
    </div>

  );

}

export default Specialities;