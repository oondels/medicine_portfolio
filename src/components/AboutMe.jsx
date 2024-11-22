import React from "react";
import "../styles/AboutMe.css";

const AboutMe = () => {
  return (
    <section id="about" class="about-me">
      <div class="about-me-content">
        <div class="profile-info">
          <h2>Dr. Skyler White</h2>
          <p class="profession">Profissa & profis Profissão</p>
          <p class="qualifications">MBBS (DDM), FCPS (DRM)</p>
        </div>

        <div class="profile-picture">
          <img src="https://via.placeholder.com/250" alt="Doctor Profile" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
