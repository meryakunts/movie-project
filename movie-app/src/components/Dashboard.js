import React, { useContext } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Link from "@material-ui/core/Link";
import Main from "./Main";
import NestedList from "./sidebar/NestedList";
import { DataContext } from "./DataContext";
import Data from "../sharedComponents/Data";
import Button from "@material-ui/core/Button";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import Header from "./Header";
import logo from "../Images/logo.png";
import Search from "./Search";
import Movies from "./Movies";
import Shows from "./Shows";
import Favorites from "./Favorites";
import Watchlist from "./Watchlist";
import { AuthContext } from "./UserContext";
import MoviePage from "./MoviePage";
import KeyboardBackspaceOutlinedIcon from "@material-ui/icons/KeyboardBackspaceOutlined";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100vh",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    color: "rgb(255, 223, 222)",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background:
      "linear-gradient(to right bottom, hsl(236, 50%, 50%), hsl(195, 50%, 50%))",
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
    color: "rgb(255, 223, 222)",
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    fontWeight: "bold",
    marginRight: 24,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    borderRight: " 0.5px solid #4076bf",
    background:
      "linear-gradient(to right bottom, hsl(236, 50%, 50%), hsl(195, 50%, 50%))",
    boxShadow:
      " 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  headerCom: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flex: "1",
  },
  isOpen: {
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.04)",
      border: "1px solid #ffdfde",
    },
  },
  rotateLeftIcon: {
    color: "#ffdfde",
  },
  resetAll: {
    color: "#ffdfde",
    fontWeight: "bold",
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
    color: "rgb(97, 97, 97)",
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    boxShadow: "none",
    borderRadius: "4px",
    overflow: "hidden",
    marginBottom: "10px",
    border: "1px solid #5c95c96b",
    background: "rgb(255, 255, 255)",
    "& div": {
      minHeight: "100%",
      padding: "8px",
    },
    "& p": {
      margin: "0",
      lineHeight: "1.2",
      fontSize: "1rem",
    },
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1, 0, 1),
    position: "relative",
    "& h2": {
      fontSize: "1.8rem",
      fontWeight: "normal",
    },
    "& p": {
      fontSize: "1.2rem",
      fontWeight: "normal",
    },
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    background: "red",
  },
  backBtn: {
    color: "#4069bf",
    fontWeight: "bold",
    padding: "5px",
    position: "absolute",
    left: "0",
    top: "5%",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default function Dashboard(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const { onResetFilter, searchFunc, searchString, clickedData, itemClicked } =
    useContext(DataContext);
  const { isLogged } = useContext(AuthContext);
  const isMovies = props.type === "movies";
  const isMain = props.type === "main";
  const isShows = props.type === "shows";
  const isFavorites = props.type === "favorites";
  const isWatchlist = props.type === "watchlist";

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.headerCom}>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              <Link
                href="/"
                style={{
                  textDecoration: "none",
                  color: "rgb(255, 223, 222)",
                  display: "flex",
                }}
              >
                <img src={logo} alt={logo} width="50" height="50" />
              </Link>
            </Typography>
            <Search />
            <Header />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose} color="inherit">
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <Button
          variant="outlined"
          color="primary"
          size="large"
          onClick={onResetFilter}
          className={clsx(classes.resetButton, open && classes.isOpen)}
        >
          {!open && <RotateLeftIcon className={classes.rotateLeftIcon} />}
          {open && <div className={classes.resetAll}>Reset All</div>}
        </Button>
        <Divider />
        <NestedList />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <div className={classes.containerPage}>
                  <AppBar position="relative" className={classes.bgColor}>
                    <Toolbar>
                      <Typography variant="h6" color="inherit" noWrap>
                        {searchString !== "" ? (
                          <p>Search results</p>
                        ) : isMain ? (
                          <p>Home Page</p>
                        ) : isMovies ? (
                          <p>Movies</p>
                        ) : isShows ? (
                          <p>Shows</p>
                        ) : isFavorites ? (
                          <p>Favorites</p>
                        ) : isWatchlist ? (
                          <p>Watchlist</p>
                        ) : (
                          <div></div>
                        )}
                      </Typography>
                    </Toolbar>
                  </AppBar>
                  <div className={classes.heroContent}>
                    <Container maxWidth="md">
                      {searchString && (
                        <Tooltip
                          TransitionComponent={Zoom}
                          title="go back"
                          arrow
                        >
                          <IconButton
                            variant="contained"
                            onClick={() => {
                              searchFunc("");
                              itemClicked(null);
                            }}
                            className={classes.backBtn}
                          >
                            <KeyboardBackspaceOutlinedIcon />
                          </IconButton>
                        </Tooltip>
                      )}
                      {clickedData && (
                        <Tooltip
                          TransitionComponent={Zoom}
                          title="go back"
                          arrow
                        >
                          <IconButton
                            variant="contained"
                            onClick={() => {
                              searchFunc("");
                              itemClicked(null);
                            }}
                            className={classes.backBtn}
                          >
                            <KeyboardBackspaceOutlinedIcon />
                          </IconButton>
                        </Tooltip>
                      )}
                      <Typography
                        component="h2"
                        variant="h2"
                        align="center"
                        color="textPrimary"
                        gutterBottom
                      >
                        {searchString !== ""
                          ? " Search Results"
                          : "Let's film together!"}
                      </Typography>
                      <Typography
                        variant="h5"
                        align="center"
                        color="textSecondary"
                        paragraph
                      >
                        “ Three films a day, three books a week and records of
                        great music would be enough to make me happy to the day
                        I die. ” ― François Truffaut
                      </Typography>
                    </Container>
                  </div>
                  <div>
                    {isLogged && clickedData ? (
                      <MoviePage data={clickedData} />
                    ) : searchString !== "" ? (
                      <div>
                        <Data />
                      </div>
                    ) : isMain ? (
                      <Main />
                    ) : isMovies ? (
                      <Movies />
                    ) : isShows ? (
                      <Shows />
                    ) : isFavorites ? (
                      <Favorites />
                    ) : isWatchlist ? (
                      <Watchlist />
                    ) : (
                      <div></div>
                    )}
                  </div>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}
