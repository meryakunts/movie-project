import React, { useContext } from "react";
import Header from "./Header";
import CarouselComponent from "../sharedComponents/CarouselComponent";
import { makeStyles } from "@material-ui/core/styles";

import NestedList from "./sidebar/NestedList";
import { DataContext } from "./DataContext";
import SearchList from "./SearchList";

const useStyles = makeStyles(() => ({
  mainContent: {
    // background: "red",
    // background: "linear-gradient(90deg, rgba(39,75,152,1) 0%, rgba(104,130,187,1) 0%, rgba(52,77,148,1) 14%)"
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
    margin: "20px 0",
    color: "black",
  },
  footer: {
    backgroundColor: "#212443",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "100px",
    width: "100%",
  },
}));

function Main() {
  const classes = useStyles();

  return (
    <div className={classes.mainContent}>
      <div className={classes.containerPage}>
        <h2>Watch Movies Online</h2>
        <SearchList type="movies"/>
        {/* <CarouselComponent type="movies" /> */}
        <h2>Watch Shows Online</h2>
        <SearchList type="shows"/>
        {/* <CarouselComponent type="shows"/> */}
      </div>
    </div>
  );
}

export default Main;
