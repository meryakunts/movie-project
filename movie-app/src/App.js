import React, { useState, useEffect, useStyles } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignInComponent from "./components/SignInComponent";
import SignUpComponent from "./components/SignUpComponent";
import Main from "./components/Main";
import ForgotPasswordComponent from "./components/ForgotPasswordComponent";
import AllShowing from "./components/AllShowing";
import MoviePage from "./components/MoviePage";
import Movies from "./components/Movies";
import Shows from "./components/Shows";
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
import { useHistory } from "react-router-dom";

function App() {
  let history = useHistory();
  const [user, setUser] = useState(userLogin);
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setfilteredMovies] = useState([]);
  const [shows, setShows] = useState([]);
  const [filteredShows, setfilteredShows] = useState([]);
  const [searchedString, setSearchedString] = useState("");
  const [itemclickedData, setItemclickedData] = useState(null);

  useEffect(
    () =>
      onSnapshot(collection(db, "movies"), (snapshot) => {
        const movies = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setMovies(movies);
        setfilteredMovies(movies);
      }),
    []
  );

  useEffect(
    () =>
      onSnapshot(collection(db, "tvshows"), (snapshot) => {
        const shows = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setShows(shows);
        setfilteredShows(shows);
      }),
    []
  );

  useEffect(() => {
    let data = localStorage.getItem("user");
    const initialValue = JSON.parse(data);
    console.log("data", data);
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

  const setDataState = () => {
    setfilteredMovies(filteredData[0]);
    setfilteredShows(filteredData[1]);
  };

  console.log(movies);
  console.log(shows);
  let filteredData = [];
  let allData = [movies, shows];

  const handleFilter = (filterOption) => {
    const filterKey = filterOption[0];

    if (filterKey === "genre") {
      filteredData = allData.map((data) => {
        return data.filter((item) => {
          return item[filterKey] === filterOption[1];
        });
      });
    } else if (filterKey === "year") {
      filteredData = allData.map((data) => {
        return data.filter((item) => {
          if (!filterOption[1].from) {
            return +item[filterKey] <= filterOption[1].to;
          } else if (!filterOption[1].to) {
            return +item[filterKey] >= filterOption[1].from;
          } else {
            return (
              +item[filterKey] >= filterOption[1].from &&
              +item[filterKey] <= filterOption[1].to
            );
          }
        });
      });
    } else if (filterKey === "price") {
      filteredData = allData.map((data) => {
        if (filterOption[1] === "free") {
         return data.filter(item => {
            return item[filterKey] === "free";
          })
        } else if (filterOption[1] === "buy") {
          return data.filter(item => {
             return item[filterKey] !== "free";
           })
        } else {
          return data.filter(item => {
            return (item[filterKey] === "free" || +item[filterKey].slice(1) <= filterOption[1]);
          })
        }
      })
      } else if (filterKey === "rating") {
        filteredData = allData.map(data => {
          return data.filter(item => {
              return +item[filterKey] >= filterOption[1].from && +item[filterKey] <= filterOption[1].to
          }) 
      })
    }
    console.log(filterOption)
    setDataState();
  };

  const resetFilters = () => {
    filteredData = allData;
    setDataState();
  };
  const handleSearch = (str) => {
    setSearchedString(str);
  };

  const handleClick = (item) => {
    setItemclickedData(item);
  };

  return (
    <>
      <AuthContext.Provider value={user}>
        <DataContext.Provider
          value={{
            moviesData: filteredMovies,
            showsData: filteredShows,
            filterFunc: handleFilter,
            onResetFilter: resetFilters,
            searchFunc: handleSearch,
            searchString: searchedString,
            itemClicked: handleClick,
            clickedData: itemclickedData,
          }}
        >
          <Router>
            <Switch>
              {/* <Route exact path="/home" render={(props) => <Main />} /> */}
              <Route
                exact
                path="/"
                render={(props) => <Dashboard type={"main"} {...props} />}
              />
              <Route
                path="/signin"
                render={(props) => (
                  <SignInComponent setLogIn={setLogedInUser} {...props} />
                )}
              />
              {!user.isLogged && (
                <Route
                  path="/signup"
                  render={(props) => (
                    <SignUpComponent setLogIn={setLogedInUser} {...props} />
                  )}
                ></Route>
              )}
              {user.isLogged && (
                <Route
                  path="/movies"
                  render={(props) => <Dashboard type={"movies"} {...props} />}
                ></Route>
              )}
              {user.isLogged && (
                <Route
                  path="/shows"
                  render={(props) => <Dashboard type={"shows"} {...props} />}
                ></Route>
              )}
              {user.isLogged && (
                <Route
                  path="/watchlist"
                  render={(props) => (
                    <Dashboard type={"watchlist"} {...props} />
                  )}
                ></Route>
              )}
              {user.isLogged && (
                <Route
                  path="/favorites"
                  render={(props) => (
                    <Dashboard type={"favorites"} {...props} />
                  )}
                ></Route>
              )}
              {user.isLogged && (
                <Route path="/allshowing" component={AllShowing}></Route>
              )}
              {user.isLogged && (
                <Route path="/moviepage" component={MoviePage}></Route>
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
