// AppRouter.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Main";
import CategoryPage from "./CategoryPage";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/category/:category" component={CategoryPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;y

