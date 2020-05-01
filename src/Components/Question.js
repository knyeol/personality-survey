import React from "react";

export function Question({ text, index, answers, setAnswers }) {
  const updateAnswers = (value) => {
    !index
      ? setAnswers([value, answers[1]])
      : setAnswers([answers[0], 100 - value]);
  };

  return (
    <div>
      <p>{text}</p>
      <input
        type="range"
        onClick={(event) => updateAnswers(+event.target.value)}
      />
    </div>
  );
}
