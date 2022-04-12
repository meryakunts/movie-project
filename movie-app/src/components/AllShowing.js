import React, { useState, useEffect } from "react";
import db from "../firebase";
import { onSnapshot, collection } from "firebase/firestore";

export default function AllShowing() {
  const [isLoadingMovies, setIsLoadingMovies] = useState(true);
  const [isLoadingShows, setIsLoadingShows] = useState(true);
  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);

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

  return (
    <div className="showingLists">
      <h4>Movies:</h4>
      <br></br>
      {isLoadingMovies ? (
        <li>Loading...</li>
      ) : (
        <form>
          {movies.map((movie) => (
            <li key={movie.id}>{movie.name}</li>
          ))}
        </form>
      )}
      <h4>Shows:</h4>
      <br></br>
      {isLoadingShows ? (
        <li>Loading...</li>
      ) : (
        <form>
          {shows.map((show) => (
            <li key={show.name}>{show.name}</li>
          ))}
        </form>
      )}
    </div>
  );
}
