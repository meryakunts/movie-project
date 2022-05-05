import React, { useState, useEffect } from "react";
import db from "../firebase";
import { onSnapshot, collection } from "firebase/firestore";
import Zoom from "@material-ui/core/Zoom";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import ReactPlayer from "react-player";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 180,
    margin: "50px 60px",
  },
  container: {
    display: "flex",
  },
  paper: {
    margin: theme.spacing(1),
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
  filterBtn: {
    marginRight: "20px",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function AllShowing() {
  const [isLoadingMovies, setIsLoadingMovies] = useState(true);
  const [isLoadingShows, setIsLoadingShows] = useState(true);
  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);
  const [checked, setChecked] = useState(false);
  const classes = useStyles();
  const [pickedMovies, setPickedMovies] = useState([]);
  const [pickedShows, setPickedShows] = useState([]);
  const [movieIsPicked, setMovieIsPicked] = useState(false);
  const [showIsPicked, setShowIsPicked] = useState(false);
  const [handleTrailer] = useState(
    "https://www.youtube.com/watch?v=oUFJJNQGwhk"
  );
  const [state, setState] = useState({
    genre: undefined,
    yearState: undefined,
    priceState: undefined,
    ratingState: undefined,
  });
  const genres = [
    "Action",
    "Adventure",
    "Animation",
    "Comedy",
    "Crime",
    "Fantasy",
    "Horror",
    "Romance",
    "Sci-fi",
    "Thriller",
  ];
  const years = ["2020s", "2010s", "2000s", "1990s", "1980s", "1970s"];
  const prices = [
    "Free",
    "$0.99 - $4.99",
    "$5.00 - $9.99",
    "$10.00 - $14.99",
    "$15.00 - $19.99",
  ];
  const ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const filterClick = () => {
    setChecked((prev) => !prev);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    let value = event.target.value;
    if (value) {
      setState({
        ...state,
        [name]: event.target.value,
      });
    } else {
      setState({ ...state, [name]: undefined });
    }
  };

  const chooseTitle = (e) => {
    console.log(e.target.value);
  };

  useEffect(
    () =>
      onSnapshot(collection(db, "movies"), (snapshot) => {
        setMovies(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setIsLoadingMovies(false);
      }),
    []
  );

  useEffect(
    () =>
      onSnapshot(collection(db, "tvshows"), (snapshot) => {
        setShows(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setIsLoadingShows(false);
      }),
    []
  );

  // useEffect(() => {
  //   console.log(pickedMovies);
  // }, [pickedMovies]);

  useEffect(() => {
    setPickedMovies(
      movies.filter((movie) => {
        for (let key in state) {
          if (state[key] !== undefined && movie[key] !== state[key]) {
            return false;
          }
        }
        return true;
      })
    );
    setPickedShows(
      shows.filter((show) => {
        for (let key in state) {
          if (state[key] !== undefined && show[key] !== state[key]) {
            return false;
          }
        }
        return true;
      })
    );
    for (let key in state) {
      if (state[key]) {
        setMovieIsPicked(true);
        setShowIsPicked(true);
      }
    }
  }, [state.genre, state.yearState, state.priceState, state.ratingState]);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <button
          className={classes.filterBtn}
          checked={checked}
          onClick={filterClick}
        >
          Filter
        </button>
        <Zoom
          in={checked}
          style={{ transitionDelay: checked ? "100ms" : "200ms" }}
        >
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="genre-native-simple">Genre</InputLabel>
            <Select
              native
              value={state.genre}
              onChange={handleChange}
              inputProps={{
                name: "genre",
                id: "genre-native-simple",
              }}
            >
              <option aria-label="None" value="" />
              {genres.map((genre) => (
                <option value={genre}>{genre}</option>
              ))}
            </Select>
          </FormControl>
        </Zoom>
        <Zoom
          in={checked}
          style={{ transitionDelay: checked ? "200ms" : "100ms" }}
        >
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="year-native-simple">Year</InputLabel>
            <Select
              native
              value={state.yearState}
              onChange={handleChange}
              inputProps={{
                name: "yearState",
                id: "year-native-simple",
              }}
            >
              <option aria-label="None" value="" />
              {years.map((year) => (
                <option value={year}>{year}</option>
              ))}
            </Select>
          </FormControl>
        </Zoom>
        <Zoom
          in={checked}
          style={{ transitionDelay: checked ? "200ms" : "100ms" }}
        >
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="price-native-simple">Price</InputLabel>
            <Select
              native
              value={state.priceState}
              onChange={handleChange}
              inputProps={{
                name: "priceState",
                id: "price-native-simple",
              }}
            >
              <option aria-label="None" value="" />
              {prices.map((price) => (
                <option value={price}>{price}</option>
              ))}
            </Select>
          </FormControl>
        </Zoom>
        <Zoom
          in={checked}
          style={{ transitionDelay: checked ? "200ms" : "100ms" }}
        >
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="rating-native-simple">Rating</InputLabel>
            <Select
              native
              value={state.ratingState}
              onChange={handleChange}
              inputProps={{
                name: "ratingState",
                id: "rating-native-simple",
              }}
            >
              <option aria-label="None" value="" />
              {ratings.map((rating) => (
                <option value={rating}>{rating}</option>
              ))}
            </Select>
          </FormControl>
        </Zoom>
      </div>
      <br></br>
      <div>
        <h1>Filtered Movies:</h1>
        {!movieIsPicked
          ? movies.map((movie) => (
              <li key={movie.id} onClick>
                {movie.name}
              </li>
            ))
          : pickedMovies.map((movie) => <li key={movie.id}>{movie.name}</li>)}
      </div>
      <div>
        <h1>Filtered Shows:</h1>
        {!showIsPicked
          ? shows.map((show) => <li key={show.id}>{show.name}</li>)
          : pickedShows.map((show) => <li key={show.id}>{show.name}</li>)}
      </div>
      <div>
        <h1>Video Player:</h1>
        <ReactPlayer url={handleTrailer} />
      </div>
    </div>
  );
}

// const [isLoadingMovies, setIsLoadingMovies] = useState(true);
// const [isLoadingShows, setIsLoadingShows] = useState(true);
// const [movies, setMovies] = useState([]);
// const [shows, setShows] = useState([]);
// const [placeholder, setPlaceholder] = useState([]);
// const [checked, setChecked] = useState(false);
// const [pickedMovies, setPickedMovies] = useState([]);
// const [state, setState] = useState({
//   genre: undefined,
//   yearState: undefined,
//   priceState: undefined,
//   ratingState: undefined,
// });
// const genres = [
//   "Action",
//   "Adventure",
//   "Animation",
//   "Comedy",
//   "Crime",
//   "Fantasy",
//   "Horror",
//   "Romance",
//   "Sci-fi",
//   "Thriller",
// ];
// const years = ["2020s", "2010s", "2000s", "1990s", "1980s", "1970s"];
// const prices = [
//   "Free",
//   "$0.99 - $4.99",
//   "$5.00 - $9.99",
//   "$10.00 - $14.99",
//   "$15.00 - $19.99",
// ];
// const ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const filterClick = () => {
//   setChecked((prev) => !prev);
// };

// // const handleChange = (event) => {
// //   const name = event.target.name;
// //   let value = event.target.value;
// //   if (value) {
// //     setState({
// //       ...state,
// //       [name]: event.target.value,
// //     });
// //   } else {
// //     setState({ ...state, [name]: undefined });
// //   }
// // };

// useEffect(
//   () =>
//     onSnapshot(collection(db, "movies"), (snapshot) => {
//       setMovies(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//       setIsLoadingMovies(false);
//     }),
//   []
// );

// useEffect(
//   () =>
//     onSnapshot(collection(db, "tvshows"), (snapshot) => {
//       setShows(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//       setIsLoadingShows(false);
//     }),
//   []
// );

// useEffect(
//   () =>
//     onSnapshot(collection(db, "placeholder"), (snapshot) => {
//       setPlaceholder(
//         snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
//       );
//     }),
//   []
// );

// // useEffect(() => {
// //   console.log(placeholder.image);
// // }, [placeholder]);

// useEffect(() => {
//   const abc = movies.filter((movie) => {
//     for (let key in state) {
//       if (state[key] !== undefined && movie[key] !== state[key]) {
//         return false;
//       }
//     }
//     return true;
//   });
//   setPickedMovies(abc);
// }, [state.genre, state.yearState, state.priceState, state.ratingState]);
