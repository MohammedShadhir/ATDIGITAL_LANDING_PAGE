import React from "react";
import HeroImage from "../../assets/images/hero.svg";
import ConsultationCard from "./ConsultationCard";
import "./style/heroStyle.css";

const Hero = () => {
  return (
    <div className="position-relative">
      <img
        src={HeroImage}
        alt="Hero"
        className="img-fluid"
        style={{ width: "100%" }}
      />

      <div className="consultation-card">
        <ConsultationCard />
      </div>
    </div>
  );
};

export default Hero;
