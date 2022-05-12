import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ReactPlayer from "react-player/youtube";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    "& div": {
      width: "100%",
    },
  },
  title: {
    fontSize: "1.6rem",
    margin: "10px",
    color: "#4069bf",
  },
  description: {
    fontSize: "1rem",
    color: "#222",
    margin: "5px",
    textAlign: "center",
  },
  details: {
    color: "#222",
    fontSize: "1rem",
    display: "flex",
    flexDirection: "column",
    margin: "5px",
    "& span": {
      padding: "3px",
      lineHeight: "1.2",
    },
  },
  trailer: {
    padding: "5px 0",
    "& div": {
      width: "100% !important",
      height: "100%",
    },
  },
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
