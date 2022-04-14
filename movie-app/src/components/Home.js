import React, { useContext } from "react";
import Header from "../components/Header";
import CarouselComponent from "../sharedComponents/CarouselComponent";
import { makeStyles } from "@material-ui/core/styles";
import { BottomNavigation } from "@material-ui/core";
import NestedList from "./sidebar/NestedList";

const useStyles = makeStyles(() => ({
  mainContent: {
    background: "#181925",
  },
  header: {
    marginLeft: "100px",
    color: "#96a5d4",
    backgroundColor: "#181925",
    width: "100%",
    boxSizing: "border-box",
    flexShrink: "0",
    position: "fixed",
    zIndex: "1100",
    top: "0px",
    left: "auto",
    right: "0px",
  },
  containerPage: {
    margin: "100px 30px 0",
    color: "white",
    height: "100vh",
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
      <div className={classes.containerPage}>
        <h2>Watch Movies Online</h2>
        <CarouselComponent movies={props.movies} shows={props.shows} />
      </div>
      <BottomNavigation className={classes.footer}></BottomNavigation>
    </div>
  );
}

export default Home;
