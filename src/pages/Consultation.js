import React from "react";
import { Link } from "react-router-dom";
import Questions from "../components/Home/Quetions";

const Consultation = () => {
  return (
    <div className="container">
      <div style={{ margin: "50px" }}>
        <div style={{ marginBottom: "60px" }}>
          <Link
            to="#"
            className="btn btn-light btn-lg mb-3 text-white"
            style={{
              backgroundColor: "#f28d35",
              border: "none",
            }}
          >
            Get Free Consultation
          </Link>
        </div>
        <div
          className="border border-dark border-3 border-dot p-3 "
          style={{ marginBottom: "100px", marginLeft: 0 }}
        >
          <div>
            <Questions
              question="What is Webflow and why is it the best website builder?"
              answer="Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere."
            />
          </div>
          <Questions
            question="What is Webflow and why is it the best website builder?"
            answer="Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere."
          />
        </div>
      </div>
    </div>
  );
};

export default Consultation;
