import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Question, Group } from "../Components";

const facets = {
  openness: "openness",
  conscientiousness: "conscientiousness",
  agreeableness: "agreeableness",
  stability: "stability",
  extraversion: "extraversion",
};

export function Survey({ state, setState }) {
  return (
    <Fragment>
      <p>I see myself as someone who&#8230;</p>
      <Group facet={facets.openness} state={state} setState={setState}>
        <Question text="has an active imagination" />
        <Question text="has few artistic interests" />
      </Group>
      <Group facet={facets.conscientiousness} state={state} setState={setState}>
        <Question text="does a thorough job" />
        <Question text="tends to be lazy" />
      </Group>
      <Group facet={facets.agreeableness} state={state} setState={setState}>
        <Question text="is generally trusting" />
        <Question text="tends to find fault with others" />
      </Group>
      <Group facet={facets.stability} state={state} setState={setState}>
        <Question text="is relaxed, handles stress well" />
        <Question text="gets nervous easily" />
      </Group>
      <Group facet={facets.extraversion} state={state} setState={setState}>
        <Question text="is outing, sociable" />
        <Question text="is reserved" />
      </Group>
      <Link to="/result">View Personality</Link>
    </Fragment>
  );
}
