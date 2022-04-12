import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignInComponent from "./components/SignInComponent";
import SignUpComponent from "./components/SignUpComponent";
import Home from "./components/Home";
import ForgotPasswordComponent from "./components/ForgotPasswordComponent";
import AllShowing from "./components/AllShowing";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={Home}></Route>
        <Route path="/signin" component={SignInComponent}></Route>
        <Route path="/signup" component={SignUpComponent}></Route>
        <Route
          path="/forgotpassword"
          component={ForgotPasswordComponent}
        ></Route>
        <Route path="/allshowing" component={AllShowing}></Route>
      </Switch>
    </Router>
  );
}

export default App;
