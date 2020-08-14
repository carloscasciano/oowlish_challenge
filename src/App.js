import React from "react";
import Main from "./components/mainPage/Main";
import UserDetails from "./components/userPage/UserDetails";
import Header from "./components/header/Header"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route path="/:id">
            <UserDetails />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
