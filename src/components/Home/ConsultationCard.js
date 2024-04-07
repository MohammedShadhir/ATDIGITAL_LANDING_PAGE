import React from "react";
import { Link } from "react-router-dom";
import "../../style/custom.css";

const ConsultationCard = () => {
  return (
    <div
      className="text-left Dark-Color-gradiyant p-4 rounded"
      style={{
        width: "100%",
        maxWidth: "100%",
        margin: "0 auto",
      }}
    >
      <h1 className="h1 mb-4 text-white font-weight-bold">
        We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
      </h1>
      <Link
        to="/consultation"
        className="btn btn-light btn-lg text-white font-weight-bold"
        style={{ backgroundColor: "#f28d35", border: "none" }}
      >
        GET FREE CONSULTATION
      </Link>
    </div>
  );
};

export default ConsultationCard;
