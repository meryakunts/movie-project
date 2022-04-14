import React, { useContext } from "react";
import Header from "../components/Header";
import CarouselComponent from "../sharedComponents/CarouselComponent";
import { makeStyles } from "@material-ui/core/styles";
import { BottomNavigation } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  mainContent: {
    background: "#181925",
  },
  header: {
    marginLeft: "100px",
    color: "#96a5d4",
  },
  footer: {
    backgroundColor: "#212443",
    // position: "absolute",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "100px",
    width: "100%",
  },
}));

function Home(props) {
  const classes = useStyles();

  return (
    <div className={classes.mainContent}>
      <Header></Header>
      <CarouselComponent movies={props.movies} shows={props.shows} />
      <BottomNavigation className={classes.footer}></BottomNavigation>
    </div>
  );
}

export default Home;
