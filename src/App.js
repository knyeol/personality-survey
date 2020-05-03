import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Start, Survey, Result } from "./Containers";

import "./App.css";

const paths = {
  start: ["/", "/start"],
  survey: "/survey",
  result: "/result",
};

const initialState = {
  openness: 50,
  conscientiousness: 50,
  agreeableness: 50,
  extraversion: 50,
  stability: 50,
};

function App() {
  const [personality, setPersonality] = useState(initialState);

  return (
    <Router>
      <Switch>
        <Route exact path={paths.start}>
          <Start />
        </Route>
        <Route exact path={paths.survey}>
          <Survey state={personality} setState={setPersonality} />
        </Route>
        <Route exact path={paths.result}>
          <Result state={personality} setState={setPersonality} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
