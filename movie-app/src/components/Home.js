import React, { useContext } from "react";
import Header from "../components/Header";
import CarouselComponent from "../sharedComponents/CarouselComponent";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  mainContent: {
    // marginLeft: "60px",
    background: "#181925",
  },
  header: {
    marginLeft: "100px",
    color: "#96a5d4",
  },
}));

function Home(props) {
  const classes = useStyles();

  return (
    <div className={classes.mainContent}>
      <Header></Header>
      <CarouselComponent movies={props.movies} shows={props.shows}/>
    </div>
  );
}

export default Home;
