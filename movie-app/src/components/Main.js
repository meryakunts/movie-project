import React, { useContext } from "react";
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
  bgColor: {
    background:
      " linear-gradient(to right top, hsl(236, 50%, 50%), hsl(195, 50%, 50%))",
    height: "48px",
    color: "rgb(97, 97, 97)",
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    boxShadow: "none",
    borderRadius: '12px',
    overflow: 'hidden',
    marginBottom: '24px',
    border: '1px solid #5c95c96b',
    background: 'rgb(255, 255, 255)',
    "& div": {
      minHeight: "100%",
    },
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 2),
    position: "relative",
    "& h2": {
      fontSize: "2.6rem",
      fontWeight: "normal",
    },
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  backBtn: {
    background:
      "linear-gradient(to right top, hsl(236, 50%, 50%), hsl(195, 50%, 50%))",
    color: "white",
    fontWeight: "bold",
    padding: " 6px 12px",
    position: "absolute",
    right: "0",
    top: "5%",
    borderRadius: "0",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

function Main() {
  const classes = useStyles();
  const data = useContext(DataContext);
  const { searchFunc, searchString } = data;

  return (
    <div className={classes.mainContent}>
      <div className={classes.containerPage}>
        <AppBar position="relative" className={classes.bgColor}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Search Results
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            {searchString && (
              <Button
                variant="contained"
                onClick={() => searchFunc("")}
                className={classes.backBtn}
              >
                go back
              </Button>
            )}
            <Typography
              component="h2"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              {searchString != "" ? " Search Results" : "Let's film together )"}
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              “ Three films a day, three books a week and records of great music
              would be enough to make me happy to the day I die. ” ― François
              Truffaut
            </Typography>
          </Container>
        </div>
        <div>
        {searchString != "" ? (
          <div>
            <Data />
          </div>
        ) : (
          <div>
            <h2>Watch Movies Online</h2>
            <CarouselComponent type="movies" />
            <h2>Watch Shows Online</h2>
            <CarouselComponent type="shows" />
          </div>
        )}
        </div>
        <div className={classes.moviesPage}>
        {searchString != "" &&  <Data />}
        </div>
      </div>
    </div>
  );
}

export default Main;
