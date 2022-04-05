import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import SignInComponent from "./components/SignInComponent";
import SignUpComponent from "./components/SignUpComponent";
import Home from "./components/Home";
import ForgotPasswordComponent from "./components/ForgotPasswordComponent";

const firebaseConfig = {
  apiKey: "AIzaSyA50jGxyZVJEu0N_tDJh1SwdbEQzU3HyNs",
  authDomain: "movie-project-26ffe.firebaseapp.com",
  projectId: "movie-project-26ffe",
  storageBucket: "movie-project-26ffe.appspot.com",
  messagingSenderId: "61136410009",
  appId: "1:61136410009:web:87d80a8727cac9bd96ef08",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

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
      </Switch>
    </Router>
  );
}

export default App;
