import React, { useState, useContext } from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { DataContext } from "../components/DataContext";
import Item from "../sharedComponents/Item";
import CardComponent from "../sharedComponents/CardComponent";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(4),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
    flex: "1",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "rgb(255, 223, 222)",
  },
  inputRoot: {
    color: "rgb(255, 223, 222)",
    width: "100%",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
  },
}));

function Search(props) {
  const classes = useStyles();
  const {searchFunc} = useContext(DataContext);

  const searchItems = (event) => {
    if (event.key == "Enter") {
      let value = event.target.value;
      if (value !== "") {
        searchFunc(value)
      }
    }
    // if (searchInput !== "") {
    //   const filteredData = allData.filter((item) => {
    //     return Object.values(item)
    //       .join("")
    //       .toLowerCase()
    //       .includes(searchInput.toLowerCase());
    //   });
    //   setFilteredResults(filteredData);
    // } else {
    //   setFilteredResults(allData);
    // }
  };

  return (
    <>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
          onKeyDown = {searchItems}
        />
      </div>
    </>
  );
}

export default Search;
