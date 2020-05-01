import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import "../Styles/Start.css";

export function Start() {
  return (
    <div className="window">
      <div className="container">
        <h3 className="start-title">
          Ten Questions <FiArrowRight className="start-title-icon" /> Five
          Traits
        </h3>
        <p className="start-paragraph">
          This test, called the BFI-10, was published by psychologists Beatrice
          Rammstedt and Oliver P. John. It quickly measures one's Big Five
          personality traits with moderate accuracy.
        </p>
        <div className="link-container">
          <Link className="link" to="/survey">
            Start Test
          </Link>
        </div>
      </div>
    </div>
  );
}
