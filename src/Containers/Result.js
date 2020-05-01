import React from "react";

function BarValue({ field, value }) {
  return (
    <div>
      <span>{field}</span>
      <span>{`${value}%`}</span>
    </div>
  );
}

export function Result({ state }) {
  return (
    <>
      <BarValue field="Agreeableness" value={state.agreeableness} />
      <BarValue field="Conscientiousness" value={state.conscientiousness} />
      <BarValue field="Extraversion" value={state.extraversion} />
      <BarValue field="Openness to Experience" value={state.openness} />
      <BarValue field="Emotional Stability" value={state.stability} />
    </>
  );
}
