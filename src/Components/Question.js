import React from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

export function Question({ text, index, answers, setAnswers }) {
  const updateAnswers = (value) => {
    !index
      ? setAnswers([value, answers[1]])
      : setAnswers([answers[0], 100 - value]);
  };

  return (
    <div className="question-container">
      <p>{text}</p>
      <div className="slider-container">
        <FiMinus />
        <input
          type="range"
          onClick={(event) => updateAnswers(+event.target.value)}
        />
        <FiPlus />
      </div>
    </div>
  );
}
