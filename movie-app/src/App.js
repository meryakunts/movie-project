import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignInComponent from "./components/SignInComponent";
import SignUpComponent from "./components/SignUpComponent";
import Home from "./components/Home";
import ForgotPasswordComponent from "./components/ForgotPasswordComponent";
import AllShowing from "./components/AllShowing";
import Movies from "./components/HomeMovies";
import TopShows from "./components/HomeTopshows";
import TopMovies from "./components/HomeTopMovies";
import Watchlist from "./components/HomeWatchlist";
import NestedList from "./components/sidebar/NestedList";
import { AuthContext } from "./components/UserContext";

function App() {
  const value = "My Context Value";
  return (
    <>
      <AuthContext.Provider value={value}>
        <Router>
          <Switch>
            <Route exact path="/home" component={Home}></Route>
            <Route path="/signin" component={SignInComponent}></Route>
            <Route path="/signup" component={SignUpComponent}></Route>
            <Route path="/movies" component={Movies}></Route>
            <Route path="/topshows" component={TopShows}></Route>
            <Route path="/topmovies" component={TopMovies}></Route>
            <Route path="/watchlist" component={Watchlist}></Route>
            <Route path="/allshowing" component={AllShowing}></Route>
            <Route
              path="/forgotpassword"
              component={ForgotPasswordComponent}
            ></Route>
          </Switch>
        </Router>
      </AuthContext.Provider>
    </>
  );
}

export default App;
