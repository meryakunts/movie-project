import React, { useState, useEffect } from "react";
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
import { userLogin } from "./components/UserContext";
import db from "./firebase";
import { onSnapshot, collection } from "firebase/firestore";

function App() {
  const [user, setUser] = useState(userLogin);
  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);

  useEffect(
    () =>
      onSnapshot(collection(db, "movies"), (snapshot) => {
        setMovies(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      }),
    []
  );

  useEffect(
    () =>
      onSnapshot(collection(db, "tvshows"), (snapshot) => {
        setShows(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      }),
    []
  );

  useEffect(() => {
    let data = localStorage.getItem("user");
    const initialValue = JSON.parse(data);
    if (initialValue) {
      setUser({ ...initialValue, signOut: signOutCallback });
    }
  }, []);

  const setLogedInUser = (us) => {
    setUser({ ...us, signOut: signOutCallback });
    localStorage.setItem("user", JSON.stringify(us));
  };

  const signOutCallback = () => {
    localStorage.removeItem("user");
    setUser(userLogin);
  };

  return (
    <>
      <AuthContext.Provider value={user}>
        <Router>
          <Switch>
            <Route
              exact
              path="/home"
              render={(props) => (
                <Home movies={movies} shows={shows} {...props} />
              )}
            />
            <Route
              path="/signin"
              render={(props) => (
                <SignInComponent setLogIn={setLogedInUser} {...props} />
              )}
            />
            {!user.isLogged && (
              <Route path="/signup" component={SignUpComponent}></Route>
            )}
            <Route path="/movies" component={Movies}></Route>
            <Route path="/topshows" component={TopShows}></Route>
            <Route path="/topmovies" component={TopMovies}></Route>
            <Route path="/watchlist" component={Watchlist}></Route>
            {user.isLogged && (
              <Route path="/allshowing" component={AllShowing}></Route>
            )}
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
