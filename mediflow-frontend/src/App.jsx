import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import PatientDetails from "./pages/PatientDetails";
import Login from "./pages/Login";
import SpecialityPage from "./pages/SpecialityPage";
import Appointment from "./pages/Appointment";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Specialities from "./pages/Specialities";
import WhyMediFlow from "./pages/WhyMediFlow";
import ScrollToTop from "./components/ScrollToTop";
import AppointmentSuccess
from "./pages/AppointmentSuccess";
import Profile from "./pages/Profile";
import MyAppointments from "./pages/MyAppointments";
function App() {

  return (

  <>

    <ScrollToTop />

    <Routes>

      

      <Route
        path="/"
        element={<Register />}
      />

      <Route
        path="/patient-details"
        element={<PatientDetails />}
      />

      <Route
        path="/login"
        element={<Login />}
      />
<Route
        path="/home"
        element={<Home />}
      />
      <Route
        path="/speciality/:name"
        element={<SpecialityPage />}
      />

      <Route
        path="/appointment"
        element={<Appointment />}
      />

      <Route
        path="/clients"
        element={<Clients />}
      />

      <Route
        path="/contact"
        element={<Contact />}
      />

      <Route
        path="/about"
        element={<About />}
      />

      <Route
        path="/blog"
        element={<Blog />}
      />

      <Route
        path="/specialities"
        element={<Specialities />}
      />

      <Route
        path="/why-mediflow"
        element={<WhyMediFlow />}
      />

      <Route
  path="/appointment-success"
  element={<AppointmentSuccess />}
/>

<Route
  path="/profile"
  element={<Profile />}
/>
<Route
  path="/appointments"
  element={<MyAppointments />}
/>

    </Routes>

  </>

);

}

export default App;