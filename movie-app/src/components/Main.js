import React from "react";
import CarouselComponent from "../sharedComponents/CarouselComponent";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
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
