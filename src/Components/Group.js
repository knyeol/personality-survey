import React, { useState, useEffect } from "react";

export function Group({ children, facet, state, setState }) {
  if (children.length !== 2) throw new Error("Group must have 2 children");

  const [answers, setAnswers] = useState([-1, -1]);
  const [average, setAverage] = useState(0);
  const mounted = React.useRef();

  useEffect(() => {
    if (!answers.includes(-1)) {
      setAverage(Math.round((answers[0] + answers[1]) / 2));
    }
  }, [answers]);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      switch (facet) {
        case "openness":
          return setState({ ...state, openness: average });
        case "conscientiousness":
          return setState({ ...state, conscientiousness: average });
        case "extraversion":
          return setState({ ...state, extraversion: average });
        case "agreeableness":
          return setState({ ...state, agreeableness: average });
        case "stability":
          return setState({ ...state, stability: average });
        default:
          break;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [average]);

  return (
    <div>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          index: index,
          answers: answers,
          setAnswers: setAnswers,
        });
      })}
    </div>
  );
}
