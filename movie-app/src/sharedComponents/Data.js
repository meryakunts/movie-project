import React, { useContext } from "react";
import "./styles.css";
import { DataContext } from "../components/DataContext";
import Item from "./Item";
import CardComponent from "./CardComponent";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import noitem from "../Images/noitem.png";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  noData: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "1",
    flexDirection: "column",
    "& h2": {
      color: "#4a6cca",
      fontSize: "1.2rem",
      fontWeight: "normal",
    },
  },
}));

function Data() {
  const classes = useStyles();
  const data = useContext(DataContext);
  const { moviesData, showsData, searchString } = data;
  let allData = moviesData.concat(showsData);
  let isNotEmpty = false;

  for (let item of allData) {
    if (
      Object.values(item.name)
        .join("")
        .toLowerCase()
        .includes(searchString.toLowerCase())
    ) {
      isNotEmpty = true;
      break;
    }
  }

  return (
    <Container className={classes.cardGrid} maxWidth="xl">
      <Grid container spacing={3}>
        {isNotEmpty &&
          allData.map((item) => {
            if (
              Object.values(item.name)
                .join("")
                .toLowerCase()
                .includes(searchString.toLowerCase())
            ) {
              return (
                <Grid item key={item.id} xs={12} sm={6} md={3}>
                  <Item key={item.id}>
                    <CardComponent itemData={item} />
                  </Item>
                </Grid>
              );
            }
            return null;
          })}
        {!isNotEmpty && (
          <div className={classes.noData}>
            <img src={noitem} width="150" height="150" alt={"not found item"} />
            <h2>Sorry, no results found.</h2>
          </div>
        )}
      </Grid>
    </Container>
  );
}

export default Data;
