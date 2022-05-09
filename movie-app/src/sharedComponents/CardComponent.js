import React, { useEffect, useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AddToQueueOutlinedIcon from "@material-ui/icons/AddToQueueOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import "./styles.css";
import DialogComponent from "./DialogComponent";
import { OpenInBrowser, OpenInNew } from "@material-ui/icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { userLogin } from "../components/UserContext";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import MoviePage from "../components/MoviePage";
import { DataContext } from "../components/DataContext";
import { AuthContext } from "../components/UserContext";
import { useHistory } from "react-router-dom";
import db from "../firebase";
import {
  collection,
  addDoc,
  doc,
  query,
  where,
  deleteDoc,
  getDocs,
} from "firebase/firestore";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

function CardComponent(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const [userFavorites, setUserFavorites] = useState("");
  const [userWatchlist, setUserWatchlist] = useState("");
  const [clicked, setClicked] = useState(false);
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      setCurrentUser(uid);
    } else {
      const uid = "";
      setCurrentUser(uid);
    }
  });

  const { itemClicked } = useContext(DataContext);
  let history = useHistory();
  const { isLogged } = useContext(AuthContext);

  const handleClickOpen = (e) => {
    setOpen(true);
    e.stopPropagation();
  };

  const handleClose = (e) => {
    setOpen(false);
    e.stopPropagation();
  };

  const handleClickItem = () => {
    itemClicked(props.itemData);
    if (!isLogged) {
      history.push("/signIn");
    }
  };

  const { description, name, id, src } = props.itemData;

  const handleDeleteFave = async (docId) => {
    console.log("handling delete");
    const docRef = doc(db, "favorites", docId);
    deleteDoc(docRef);
    currentFavorites();
  };

  const handleFavorite = async () => {
    console.log(id);
    let pickedItemId = id;
    let alreadyAdded = false;
    userFavorites.map((item) => {
      if (item.id === pickedItemId) {
        alreadyAdded = true;
        return;
      }
    });
    // console.log(alreadyAdded);
    if (alreadyAdded) {
      console.log("already added, deleting");
      return handleDeleteFave(pickedItemId);
    } else {
      alreadyAdded = false;
      const collectionRef = collection(db, "favorites");
      const payload = { name, pickedItemId, currentUser, description };
      const docRef = await addDoc(collectionRef, payload);
      currentFavorites();
    }
  };

  const currentFavorites = async () => {
    const collectionRef = collection(db, "favorites");
    const q = query(collectionRef, where("currentUser", "==", currentUser));
    const snapshot = await getDocs(q);
    const results = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: id,
    }));
    console.log(results);
    setUserFavorites(results);
  };

  useEffect(() => {
    // console.log(currentUser);
    currentFavorites();
  }, [currentUser]);

  const handleWatchlist = (e) => {
    console.log("added to watchlist");
    console.log(id);
  };

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea onClick={handleClickItem}>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={
              src
                ? src
                : "https://images.cdn1.stockunlimited.net/preview1300/film-reel-with-popcorn_1972467.jpg"
            }
            title={name}
            className="cardTitle"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className="cardTitle"
            >
              <span className="textEllipsis gray-text">{name}</span>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <span className="textEllipsis gray-text">{description}</span>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <div className="flex-btw">
            <div>
              <Tooltip
                TransitionComponent={Zoom}
                title="add to favorites"
                arrow
              >
                <IconButton
                  aria-label="add to favorites"
                  color="inherit"
                  onClick={handleFavorite}
                >
                  <FavoriteBorderIcon />
                </IconButton>
              </Tooltip>
              <Tooltip
                TransitionComponent={Zoom}
                title="add to watchlist"
                arrow
              >
                <IconButton
                  color="primary"
                  aria-label="add to watchlist"
                  onClick={handleWatchlist}
                >
                  <AddToQueueOutlinedIcon />
                </IconButton>
              </Tooltip>
            </div>
            <div>
              <Tooltip
                TransitionComponent={Zoom}
                title="more information"
                arrow
              >
                <IconButton
                  color="primary"
                  aria-label="more information"
                  onClick={handleClickOpen}
                >
                  <InfoOutlinedIcon />
                </IconButton>
              </Tooltip>
            </div>
          </div>
        </CardActions>
        {open && (
          <DialogComponent onClose={handleClose} data={props.itemData} />
        )}
      </Card>
    </div>
  );
}

export default CardComponent;
