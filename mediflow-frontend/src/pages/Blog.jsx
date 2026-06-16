import "../styles/Blog.css";

import Navbar from "../components/Navbar";
import smart1 from "../assets/speciality-image/Cardiology1.jpg";

import smart2 from "../assets/speciality-image/Neurology1.png";
import Footer from "../components/Footer";

import smart3 from "../assets/speciality-image/Orthopedic1.jpg";

function Blog() {

  const blogs = [

    {
      image: smart1,
      title: "The Future Of Smart Healthcare",
      desc:
        "Discover how AI and digital healthcare systems are transforming hospitals and patient care.",
      date: "12 Jan 2026"
    },

    {
      image: smart2,
      title: "Benefits Of Online Appointment Systems",
      desc:
        "Learn how digital appointment booking improves patient experience and hospital efficiency.",
      date: "18 Feb 2026"
    },

    {
      image: smart3,
      title: "Why Hospital Management Systems Matter",
      desc:
        "Explore the importance of secure healthcare platforms and smart hospital management.",
      date: "25 Mar 2026"
    }

  ];

  return (

    <div className="blog-page">

      <Navbar />

      {/* HERO */}

      <div className="blog-hero">

        <div className="blog-circle circle1"></div>
        <div className="blog-circle circle2"></div>

        <h1>
          MediFlow Healthcare Blogs
        </h1>

        <p>

          Explore smart healthcare articles,
          medical technology updates,
          patient care innovations,
          and digital healthcare solutions.

        </p>

      </div>

      {/* BLOGS */}

      <div className="blog-container">

        {blogs.map((blog, index) => (

          <div
            className="blog-card"
            key={index}
          >

            <img
              src={blog.image}
              alt={blog.title}
            />

            <div className="blog-content">

              <span>
                {blog.date}
              </span>

              <h2>
                {blog.title}
              </h2>

              <p>
                {blog.desc}
              </p>

              <div className="blog-tag">

  Healthcare Article

</div>

            </div>

          </div>

        ))}

      </div>

      {/* FEATURED BLOG */}

<div className="featured-blog">

  <div className="featured-left">

    <img
      src={smart1}
      alt="featured"
    />

  </div>

  <div className="featured-right">

    <span>
      Featured Healthcare Article
    </span>

    <h1>

      How AI Is Revolutionizing
      Modern Healthcare Systems

    </h1>

    <p>

      Artificial Intelligence is transforming
      healthcare through smart diagnostics,
      patient monitoring, predictive analytics,
      and digital hospital management systems.
      MediFlow aims to bring intelligent
      healthcare technology into everyday
      hospital operations.

    </p>

    <div className="featured-stats">

      <div>

        <h2>24K+</h2>

        <p>Readers</p>

      </div>

      <div>

        <h2>120+</h2>

        <p>Healthcare Articles</p>

      </div>

      <div>

        <h2>98%</h2>

        <p>User Satisfaction</p>

      </div>

    </div>

  </div>

</div>

{/* HEALTHCARE NEWS */}

<div className="health-news">

  <h1>
    Latest Healthcare News
  </h1>

  <div className="health-news-grid">

    <div className="health-news-card">

      <h2>
        AI-Based Diagnosis Systems
      </h2>

      <p>

        Hospitals are increasingly adopting
        AI-powered diagnosis systems for
        faster and more accurate treatments.

      </p>

      <span>
        April 2026
      </span>

    </div>

    <div className="health-news-card">

      <h2>
        Digital Patient Monitoring
      </h2>

      <p>

        Smart monitoring systems are helping
        doctors track patient health remotely
        and improve healthcare response times.

      </p>

      <span>
        May 2026
      </span>

    </div>

    <div className="health-news-card">

      <h2>
        Cloud-Based Hospital Systems
      </h2>

      <p>

        Modern hospitals are shifting towards
        secure cloud healthcare systems for
        better patient record management.

      </p>

      <span>
        June 2026
      </span>

    </div>

  </div>

</div>

{/* HEALTHCARE TIPS */}

<div className="health-tips">

  <h1>
    Daily Healthcare Tips
  </h1>

  <div className="tips-grid">

    <div className="tip-card">

      <h2>💧</h2>

      <h3>
        Stay Hydrated
      </h3>

      <p>

        Drinking enough water daily
        improves energy levels and
        supports healthy body functions.

      </p>

    </div>

    <div className="tip-card">

      <h2>🥗</h2>

      <h3>
        Eat Healthy Food
      </h3>

      <p>

        Balanced nutrition helps
        strengthen immunity and
        maintain overall wellness.

      </p>

    </div>

    <div className="tip-card">

      <h2>🏃</h2>

      <h3>
        Exercise Regularly
      </h3>

      <p>

        Daily physical activity improves
        cardiovascular health and reduces
        stress levels.

      </p>

    </div>

    <div className="tip-card">

      <h2>😴</h2>

      <h3>
        Proper Sleep
      </h3>

      <p>

        Good sleep improves mental
        health, memory, and body
        recovery.

      </p>

    </div>

  </div>

</div>

{/* FAQ */}

<div className="faq-section">

  <h1>
    Frequently Asked Questions
  </h1>

  <div className="faq-container">

    <div className="faq-card">

      <h2>
        What is MediFlow?
      </h2>

      <p>

        MediFlow is a smart healthcare
        management platform designed to
        simplify hospital operations,
        appointments, and patient care.

      </p>

    </div>

    <div className="faq-card">

      <h2>
        Can patients book appointments online?
      </h2>

      <p>

        Yes. Patients can easily book
        appointments with hospitals and
        specialists through the platform.

      </p>

    </div>

    <div className="faq-card">

      <h2>
        Is MediFlow secure?
      </h2>

      <p>

        MediFlow uses secure digital systems
        to protect patient records and
        healthcare information.

      </p>

    </div>

    <div className="faq-card">

      <h2>
        Does MediFlow support multiple hospitals?
      </h2>

      <p>

        Yes. Multiple hospitals and healthcare
        centers can be connected through
        the MediFlow platform.

      </p>

    </div>

  </div>

</div>
<Footer />
    </div>

  );

}

export default Blog;