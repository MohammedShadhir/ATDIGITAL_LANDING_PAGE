import React, { useState } from "react";

const Question = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div>
      <div
        className="d-flex justify-content-between align-items-md-start align-items-start col-12 col-md-6"
        style={{
          color: !showAnswer ? "#000000" : "#6B3CC9",
          margin: "auto",
        }}
      >
        <h5>{question}</h5>
        <button className="btn btn-unstyled fs-3" onClick={toggleAnswer}>
          {showAnswer ? "-" : "+"}
        </button>
      </div>
      {showAnswer && (
        <div
          className="d-flex justify-content-center  col-12 col-md-6"
          style={{ margin: "auto" }}
        >
          <p style={{ color: "#6F6C90" }}>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Question;
