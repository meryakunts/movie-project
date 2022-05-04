import React, { useState, useEffect, useStyles } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignInComponent from "./components/SignInComponent";
import SignUpComponent from "./components/SignUpComponent";
import Main from "./components/Main";
import ForgotPasswordComponent from "./components/ForgotPasswordComponent";
import AllShowing from "./components/AllShowing";
import Movies from "./components/HomeMovies";
import TopShows from "./components/HomeTopshows";
import TopMovies from "./components/HomeTopMovies";
import Watchlist from "./components/HomeWatchlist";
import NestedList from "./components/sidebar/NestedList";
import { AuthContext } from "./components/UserContext";
import { DataContext } from "./components/DataContext";
import { userLogin } from "./components/UserContext";
import db from "./firebase";
import { onSnapshot, collection } from "firebase/firestore";
import Dashboard from "./components/Dashboard";

function App() {
  const [user, setUser] = useState(userLogin);
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setfilteredMovies] = useState([]);
  const [shows, setShows] = useState([]);
  const [searchedString, setSearchedString] = useState("");
  

  useEffect(
    () =>
      onSnapshot(collection(db, "movies"), (snapshot) => {
        const movies = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        setMovies(movies);
        setfilteredMovies(movies);
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

  // const filteredMovies = movies.filter((movie) => {
  //   return movie.genre === "Fantasy";
  // });

  console.log(movies)

  const handleFilter = (filterOption) => {
    let newFilteredMovies = [];
    console.log(filterOption);
    const filterKey = filterOption[0];

    if (filterKey === "genre") {
      newFilteredMovies = movies.filter(movie => {
        return movie[filterKey] === filterOption[1];
      })
    } else if (filterKey === "year") {
      newFilteredMovies = movies.filter(movie => {
        if (!filterOption[1].from) {
          return +movie[filterKey] <= filterOption[1].to
        } else if (!filterOption[1].to) {
          return +movie[filterKey] >= filterOption[1].from
        } else {
          return +movie[filterKey] >= filterOption[1].from && +movie[filterKey] <= filterOption[1].to
        }
      })
    } else if (filterKey === "price") {
        if (filterOption[1] === "free") {
          newFilteredMovies = movies.filter(movie => {
            return movie[filterKey] === "free";
          })
        } else if (filterOption[1] === "buy") {
          newFilteredMovies = movies.filter(movie => {
            return movie[filterKey] !== "free";
          })
        } else {
          newFilteredMovies = movies.filter(movie => {
            return (movie[filterKey] === "free" || +movie[filterKey].slice(1) <= filterOption[1]);
          })
        }
    }
    console.log(newFilteredMovies);
    setfilteredMovies(newFilteredMovies);
  };

  const handleSearch = (str) => {
    setSearchedString(str);
  }

  return (
    <>
      <AuthContext.Provider value={user}>
        <DataContext.Provider value={{ moviesData: movies, showsData: shows, filterFunc: handleFilter, searchFunc: handleSearch, searchString: searchedString}}>
          <Router>
            <Switch>
              {/* <Route exact path="/home" render={(props) => <Main />} /> */}
              <Route exact path="/" render={(props) => <Dashboard/>} />
              <Route
                path="/signin"
                render={(props) => (
                  <SignInComponent setLogIn={setLogedInUser} {...props} />
                )}
              />
              {!user.isLogged && (
                <Route path="/signup" component={SignUpComponent}></Route>
              )}
              {!user.isLogged && (
                <Route path="/movies" component={Movies}></Route>
              )}
              {!user.isLogged && (
                <Route path="/topshows" component={TopShows}></Route>
              )}
              {!user.isLogged && (
                <Route path="/topmovies" component={TopMovies}></Route>
              )}
              {!user.isLogged && (
                <Route path="/watchlist" component={Watchlist}></Route>
              )}
              {user.isLogged && (
                <Route path="/allshowing" component={AllShowing}></Route>
              )}
              {!user.isLogged && (
                <Route
                  path="/forgotpassword"
                  component={ForgotPasswordComponent}
                ></Route>
              )}
            </Switch>
          </Router>
          {/* <NestedList className="sidebar" onFilter={handleFilter}/> */}
        </DataContext.Provider>
      </AuthContext.Provider>
    </>
  );
}

export default App;
