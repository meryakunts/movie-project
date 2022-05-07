import React, { useState, useEffect } from "react";
import db from "../firebase";
import { onSnapshot, collection } from "firebase/firestore";
import Zoom from "@material-ui/core/Zoom";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import ReactPlayer from "react-player";
import AdvancedFilter from "./AdvancedFilter";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   height: 180,
  //   margin: "50px 60px",
  // },
  // container: {
  //   display: "flex",
  // },
  // paper: {
  //   margin: theme.spacing(1),
  // },
  // svg: {
  //   width: 100,
  //   height: 100,
  // },
  // polygon: {
  //   fill: theme.palette.common.white,
  //   stroke: theme.palette.divider,
  //   strokeWidth: 1,
  // },
  // filterBtn: {
  //   marginRight: "20px",
  // },
  // formControl: {
  //   margin: theme.spacing(1),
  //   minWidth: 120,
  // },
  // selectEmpty: {
  //   marginTop: theme.spacing(2),
  // },
}));

export default function AllShowing() {
  const classes = useStyles();
  const [handleTrailer] = useState(
    "https://www.youtube.com/watch?v=oUFJJNQGwhk"
  );

  return (
    <div>
      <AdvancedFilter />
      <div>
        <h1>Video Player:</h1>
        <ReactPlayer url={handleTrailer} />
      </div>
    </div>
  );
}
