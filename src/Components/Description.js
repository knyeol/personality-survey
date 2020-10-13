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
          to="/start"
          className="link"
          onClick={handleClick}
          onTouchEnd={handleClick}
        >
          Start Page
        </Link>
        &emsp;
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
          The tendency to be cooperative, pleasant, and empathetic. More
          agreeable people make attractive friends and partners. However they
          are easier to take advantage of and have trouble standing up for
          themselves. Disagreeable people can be hard to get along with and may
          treat others poorly. They complain, and feel treated unfairly often.
        </figure>
        <label>Conscientiousness</label>
        <figure>
          The tendency to see be diligent, careful, and persevering. More
          conscientiousness people are reliable and moralistic. They can seem,
          however, uptight and perfectionistic. People low in conscientious are
          more laid back and calm, but they are also lazy and flaky.
        </figure>
        <label>Extraversion</label>
        <figure>
          More extraverted people enjoy social activities and feel more
          comfortable meeting new people. Introverts aren't necessarily quiet
          but instead prefer talking about their interests rather than talking
          to socialize. Humans are very extraverted compared to other species,
          so talkative aren't necessarily far on the extraverted side of the
          spectrum.
        </figure>
        <label>Openness to Experience</label>
        <figure>
          Interest in new or unordinary experiences and ideas. People low in
          openness can seem boring and narrow minded. People high in openness
          are more likely to experiment with drugs or get into danger. They are
          also more likely to invest in unrealistic ideas or goals.
        </figure>
        <label>Emotional Stability</label>
        <figure>
          People low in emotional stability feel depressed, anxious, and
          frustrated easily. They have a tendency to over react and can be
          impulsive. People with high emotional stability are more resilient and
          less bothered by unpleasant people and experiences.
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
