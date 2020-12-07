

import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/home";

import "./css/bootstrap.min.css";
import "./css/style.css";
import "./css/owl.carousel.min.css";
import "./css/responsive.css";


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} status={200}></Route>
      </Switch>
      </div>
  );
}

export default App;
