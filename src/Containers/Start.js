import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export function Start() {
  return (
    <Fragment>
      <p className="start-title">
        Ten Questions <FiArrowRight className="start-title-icon" /> Five Traits
      </p>
      <p>
        This test, called the BFI-10, was published by psychologists Beatrice
        Rammstedt and Oliver P. John. It quickly measures one's Big Five
        personality traits with moderate accuracy.
      </p>
      <Link to="/survey">Start Test</Link>
    </Fragment>
  );
}
