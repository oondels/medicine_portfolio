import React from "react";
import "../styles/Hero.css";
import NavBar from "./NavBar";

const Hero = () => {
  return (
		<section className="hero">
			<NavBar />
			
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Os sonhos da vida permanecem até o coração bater</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim ex quis tempus
            sagittis.
          </p>
          <a href="#appointment" className="btn">
            Make Appointment
          </a>
        </div>
        <div className="hero-image">
          <img src="https://via.placeholder.com/400" alt="Doctor" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
