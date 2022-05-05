import React, { useState, useEffect, useContext } from "react";
import db from "../firebase";
import { onSnapshot, collection } from "firebase/firestore";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import ReactPlayer from "react-player";
import { Gradient } from "@material-ui/icons";
import { DataContext } from "../components/DataContext";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "grey",
  },
  body: {
    backgroundImage: `url("https://cdn.discordapp.com/attachments/521049144740020234/971398550799941662/movie-image.png")`,
    backgroundSize: "cover",
    backgroundPositionY: "bottom",
    width: "100%",
  },
  title: {
    color: "#08c0e8",
    marginTop: "50%",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    boxShadow: "0px 0px 10px",
    background: "#14324c",
  },
  description: {
    margin: "2% 10%",
  },
  stars: {
    marginLeft: "5%",
    marginTop: "-2%",
    color: "#608bb1",
  },
  backArrow: {
    color: "white",
    fontSize: "48px",
    "&:hover": {
      color: "#3972a0",
    },
  },
}));

export default function MoviePage() {
  const classes = useStyles();

  const handleArrow = () => {
    console.log("arrow is clicked");
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.body}>
          <ArrowBackRoundedIcon
            className={classes.backArrow}
            onClick={handleArrow}
          />
          <h1 className={classes.title}>Movie Name</h1>
        </div>
        <p className={classes.stars}>stars over here</p>
        <p className={classes.description}>
          Movie description here. Movie description here. Movie description
          here. Movie description here. Movie description here.{" "}
        </p>
        <p className={classes.description}>
          Movie description here. Movie description here. Movie description
          here. Movie description here. Movie description here.{" "}
        </p>
      </div>

      {/* <ReactPlayer url="https://www.youtube.com/watch?v=oUFJJNQGwhk" /> */}
    </div>
  );
}
