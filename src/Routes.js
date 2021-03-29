import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Shop from "./pages/shop/shop";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Shop />} />
       
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;