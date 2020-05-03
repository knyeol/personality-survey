import React from "react";
import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";

export const Description = ({ setState }) => {
  function handleClick() {
    setState({
      openness: 50,
      conscientiousness: 50,
      agreeableness: 50,
      extraversion: 50,
      stability: 50,
    });
  }

  return (
    <div className="description-container">
      <div className="link-container flex-end">
        <Link
          to="/survey"
          className="link"
          onClick={handleClick}
          onTouchEnd={handleClick}
        >
          Retry Quiz
        </Link>
      </div>
      <p>Learn more about the Big Five:</p>
      <div className="flex">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.westmont.edu/_academics/departments/psychology/documents/Rammstedt_and_John.pdf"
        >
          Measuring personality in one minute...&ensp;
          <FiExternalLink />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.sciencedirect.com/topics/computer-science/big-five-personality-trait"
        >
          Big Five Personality Trait&ensp;
          <FiExternalLink />
        </a>
      </div>
    </div>
  );
};
