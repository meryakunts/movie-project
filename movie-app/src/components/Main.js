import React, { useContext, useState } from "react";
import CarouselComponent from "../sharedComponents/CarouselComponent";
import { makeStyles } from "@material-ui/core/styles";
import { DataContext } from "./DataContext";
import Data from "../sharedComponents/Data";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  mainContent: {
    "& h2": {
      margin: "5px 0",
      fontWeight: "normal",
      color: "rgba(0, 0, 0, 0.87)",
    },
  },
}));

function Main() {
  const classes = useStyles();
  return (
    <div className={classes.mainContent}>
      <div>
        <h2>Watch Movies Online</h2>
        <CarouselComponent type="movies" />
        <h2>Watch Shows Online</h2>
        <CarouselComponent type="shows" />
      </div>
    </div>
  );
}

export default Main;
