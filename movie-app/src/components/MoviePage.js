import React, { useState, useEffect, useContext } from "react";
import db from "../firebase";
import { onSnapshot, collection } from "firebase/firestore";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
// import ReactPlayer from "react-player";
import ReactPlayer from 'react-player/youtube'
import { Gradient, LocalPrintshopSharp } from "@material-ui/icons";
import { DataContext } from "../components/DataContext";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: "1.6rem",
    margin: "10px",
    color: "#4069bf"
  },
  description: {
    fontSize: "1rem",
    color: "#222",
    margin: "5px",
    textAlign: "center"
  },
  details: {
    color: "#222",
    fontSize: "1rem",
    display: "flex",
    flexDirection: "column",
    margin: "5px",
    "& span": {
      padding: "3px",
      lineHeight: "1.2"
    },
  },
  trailer: {
    padding: "5px 0",
    "& div": {
      width: "100% !important",
      height: "100%",
    }
  }
}));

export default function MoviePage(props) {
  const classes = useStyles();
  const {
    description,
    name,
    title,
    genre,
    price,
    rating,
    src,
    stars,
    trailer,
    year,
  } = props.data;

  // console.log("props", LocalPrintshopSharp)
  // const location = useLocation();
  // const { from } = location.state;

  // const handleArrow = () => {
  //   // console.log(props.location);
  //   props.history.goBack();
  // };

  return (
    <div className={classes.root}>
      <div>
        <div>
          <h1 className={classes.title}>{name}</h1>
          <img src={src} alt={title} width="100%" height="100%" />
        </div>
        <p className={classes.description}>{description}</p>
        <p className={classes.details}>
          <span>Genre: {genre}</span>
          <span> Year: {year}</span>
          <span>Stars: {stars}</span>
          <span>Rating: {rating}</span>
          <span>Price: {price}</span>
        </p>
        <div className={classes.trailer}>
          <ReactPlayer url={trailer} style={{ margin: "auto" }} />
        </div>
      </div>
    </div>
  );
}
