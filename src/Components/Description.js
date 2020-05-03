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
      <div className="description-overview">
        <h3>Big Five Summary</h3>
        <label>Agreeableness</label>
        <figure>
          The tendency to be cooperative, pleasant, and empathetic. Agreeable
          people tend to make attractive friends and employees. However they are
          easier to take advantage of and may not always stand up for
          themselves. Disagreeable people can be hard to get along with and may
          treat others poorly. They rant, complain, and feel treated unfairly
          more often.
        </figure>
        <label>Conscientiousness</label>
        <figure>
          The tendency to see be diligent, careful, and persevering.
          Conscientiousness people are more reliable and moralistic. They can
          seem, however, uptight and perfectionistic. Peole low in conscientious
          are more laid back and calm. But they are also more lazy and flaky.
        </figure>
        <label>Extraversion</label>
        <figure>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quia
          rem obcaecati cupiditate dolorum quo, amet quasi esse minus qui
          sapiente ratione aperiam quos rerum blanditiis. Dicta quod reiciendis
          nulla.
        </figure>
        <label>Openness to Experience</label>
        <figure>
          Interest in new or unordinary experiences and ideas. People low in
          openness can seem boring and narrow minded. People high in openness
          are more likely to experiment with drugs or get into danger. They may
          also over invest in unrealistic ideas or goals.
        </figure>
        <label>Emotional Stability</label>
        <figure>
          People low in emotional stability feel depressed, anxious, and
          frustrated easily. They have a tendency to over react and can be
          impulsive. They are more sensitive and volatile. People with high
          emotional stability are more resilient and less bothered by unpleasant
          people and experiences.
        </figure>
      </div>

      <p>Learn more about the Big Five</p>
      <figure className="flex">
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
      </figure>
    </div>
  );
};
