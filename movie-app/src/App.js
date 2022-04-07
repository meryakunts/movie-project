import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignInComponent from "./components/SignInComponent";
import SignUpComponent from "./components/SignUpComponent";
import Home from "./components/Home";
import ForgotPasswordComponent from "./components/ForgotPasswordComponent";
import db from "./firebase";
import { onSnapshot, collection } from "firebase/firestore";
// import FireStoreData from "./components/FireStoreData";

function App() {
  const [movies, setMovies] = useState("Loading");
  const [shows, setShows] = useState("Loading");

  useEffect(
    () =>
      onSnapshot(collection(db, "movies"), (snapshot) =>
        setMovies(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

  useEffect(
    () =>
      onSnapshot(collection(db, "tvshows"), (snapshot) =>
        setShows(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

  // console.log(shows);
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
                  <li key={movie.id}>
                    Name: {movie.name} | Genre: {movie.genre} | Year:{" "}
                    {movie.year}
                  </li>
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
  );
}

export default App;
