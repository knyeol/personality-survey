import React from "react";
import { GiBrain } from "react-icons/gi";

import "../Styles/Result.css";

function BarValue({ field, value }) {
  return (
    <div className="bar-container">
      <label className="bar-label">{field}</label>
      <div className="bar-wrapper">
        <span className="bar-percentage" style={{ width: `${value}%` }}>
          <span className="bar-value">{`${value}%`}</span>
        </span>
      </div>
    </div>
  );
}

export function Result({ state }) {
  return (
    <div className="container spaced">
      <h3>
        <GiBrain />
        &ensp;Your results
      </h3>
      <BarValue field="Agreeableness" value={state.agreeableness} />
      <BarValue field="Conscientiousness" value={state.conscientiousness} />
      <BarValue field="Extraversion" value={state.extraversion} />
      <BarValue field="Openness to Experience" value={state.openness} />
      <BarValue field="Emotional Stability" value={state.stability} />
    </div>
  );
}
