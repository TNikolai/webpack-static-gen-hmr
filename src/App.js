import React from "react";
import { Route, Switch, Link } from "react-router-dom";

const ClickMe = () => (
  <button onClick={() => console.log("thank you!!")}>click me</button>
);

const Hello = () => (
  <div>
    <Link to="/">Back to index</Link>
    <ClickMe />
  </div>
);
const World = () => (
  <div>
    <Link to="/">Back to index</Link>
    <ClickMe />
  </div>
);

const App = () => (
  <Switch>
    <Route
      path="/"
      exact
      render={() => (
        <div>
          <Link to="/hello">Hello Works with hot reload</Link>
          <br />
          <Link to="/world">World </Link>
        </div>
      )}
    />
    <Route exact path="/hello" component={Hello} />
    <Route exact path="/world" component={World} />
    <Route path="/*" render={() => "Incorrect route path -- 404"} />
  </Switch>
);

export default App;
