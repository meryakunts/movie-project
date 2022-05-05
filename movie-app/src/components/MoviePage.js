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
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    background:
      "linear-gradient(to right bottom, hsl(220, 80%, 10%), hsl(195, 50%, 50%))",
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
    marginLeft: "2%",
    fontSize: "40px",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    boxShadow: "0px 0px 10px",
    background: "#14324c",
    width: "55%",
  },
  description: {
    margin: "2% 10%",
    fontSize: "18px",
    color: "white",
  },
  details: {
    marginLeft: "8%",
    color: "#608bb1",
    fontSize: "14px",
  },
  backArrow: {
    color: "white",
    fontSize: "48px",
    "&:hover": {
      color: "#3972a0",
    },
    trailer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "1",
    },
  },
}));

export default function MoviePage(props) {
  const classes = useStyles();
  // const location = useLocation();
  // const { from } = location.state;

  const handleArrow = () => {
    // console.log(props.location);
    props.history.goBack();
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
        <p className={classes.details}>
          stars over here | year: 0000 | Rating: 0 | Price: 0
        </p>
        <p className={classes.description}>
          Movie description here. Movie description here. Movie description
          here. Movie description here. Movie description here. Movie
          description here. Movie description here. Movie description here.
        </p>
        <div className={classes.trailer}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=oUFJJNQGwhk"
            style={{ margin: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}
