import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignInComponent from "./components/SignInComponent";
import SignUpComponent from "./components/SignUpComponent";
import Home from "./components/Home";
import ForgotPasswordComponent from "./components/ForgotPasswordComponent";
<<<<<<< HEAD
import db from "./firebase";
import { onSnapshot, collection } from "firebase/firestore";
import Movies from './components/HomeMovies';
import TopShows from './components/HomeTopshows';
import TopMovies from './components/HomeTopMovies';
import Watchlist from './components/HomeWatchlist';



=======
import AllShowing from "./components/AllShowing";
import Movies from "./components/HomeMovies";
import TopShows from "./components/HomeTopshows";
import TopMovies from "./components/HomeTopMovies";
import Watchlist from "./components/HomeWatchlist";
import NestedList from "./components/sidebar/NestedList";
>>>>>>> b1cedd7aee533a491700628c383a12eebc286dd4

function App() {
  return (
<<<<<<< HEAD
    <Router>
       
      <Switch>
          <Route path="/TopShows" component={TopShows}></Route>
          <Route path="/TopMovies" component={TopMovies}></Route>
          <Route path="/Watchlist" component={Watchlist}></Route>
          <Route path="/movies" component={Movies}></Route>
        <Route exact path="/home" component={Home}></Route>
        <Route path="/signin" component={SignInComponent}></Route>
        <Route path="/signup" component={SignUpComponent}></Route>
        <Route path="/forgotpassword" component={ForgotPasswordComponent}
        ></Route>
        
        <Route path="/allshowing">
          <div className="showingLists">
            <h4>Movies:</h4>
            <br></br>
            {!movies[0].hasOwnProperty("id") ? (
              <form>
                <li key="movieLoading">Loading...</li>
              </form>
            ) : (
              <form>
                {movies.map((movie) => (
                  <li key={movie.id}>{movie.name}</li>
                ))}
              </form>
            )}
            <h4>Shows:</h4>
            <br></br>
            {!shows[0].hasOwnProperty("id") ? (
              <form>
                <li key="showLoading">Loading...</li>
              </form>
            ) : (
              <form>
                {shows.map((show) => (
                  <li key={show.name}>{show.name}</li>
                ))}
              </form>
            )}
          </div>
        </Route>
      </Switch>

    </Router>
=======
    <>
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
    </>
>>>>>>> b1cedd7aee533a491700628c383a12eebc286dd4
  );
}

export default App;
