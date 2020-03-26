import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Logon from "./pages/Logon";
import Register from "./pages/Register";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
