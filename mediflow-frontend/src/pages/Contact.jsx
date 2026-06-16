import "../styles/Contact.css";

import Navbar from "../components/Navbar";

import { useRef } from "react";
import Footer from "../components/Footer";

import emailjs from "@emailjs/browser";

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm(

      "service_fos61x8",
      "template_89b6zz9",
      form.current,
      "TRKJzQYk_hE4yQDXS"

    )

    .then(() => {

      alert("Message Sent Successfully!");

      form.current.reset();

    })

    .catch((error) => {

      console.log(error);

      alert("Failed To Send Message");

    });

  };

  return (

    <div className="contact-page">

      <Navbar />

      <div className="contact-bg-circle circle1"></div>
      <div className="contact-bg-circle circle2"></div>
      <div className="contact-bg-circle circle3"></div>

      <div className="contact-container">

        {/* LEFT */}

        <div className="contact-left">

          <span className="contact-tag">

            CONTACT MEDIFLOW

          </span>

          <h1>

            Get In Touch With Us

          </h1>

          <p>

            We are here to support hospitals,
            doctors, and patients with smart
            healthcare management solutions.

          </p>

          <div className="contact-details">

            <div className="contact-box">

              <h3>📞 Phone</h3>

              <p>+91 9876543210</p>

            </div>

            <div className="contact-box">

              <h3>📧 Email</h3>

              <p>abinayarani876@gmail.com</p>

            </div>

            <div className="contact-box">

              <h3>📍 Location</h3>

              <p>Coimbatore, Tamil Nadu</p>

            </div>

            <div className="contact-box">

              <h3>🕒 Working Hours</h3>

              <p>Mon - Sat : 9AM - 8PM</p>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="contact-right">

          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact-form"
          >

            <div className="contact-form-title">

              Send Us a Message

            </div>

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="user_email"
              placeholder="Email Address"
              required
            />

            <input
              type="text"
              name="user_phone"
              placeholder="Phone Number"
              required
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit">

              Send Message

            </button>

          </form>

        </div>

      </div>
<Footer />
    </div>

  );

}

export default Contact;