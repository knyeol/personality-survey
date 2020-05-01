import React from "react";
import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";

export const Description = ({ setState }) => {
  return (
    <>
      <p>Learn more about the Big Five:</p>
      <div>
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
      <Link to="/survey" className="button">
        Retry Quiz
      </Link>
    </>
  );
};
