import React, { useState, useEffect, useContext } from "react";
import db from "../firebase";
import { onSnapshot, collection } from "firebase/firestore";
import { makeStyles } from "@material-ui/core/styles";
import { DataContext } from "../components/DataContext";
import Grid from "@material-ui/core/Grid";
import Item from "../sharedComponents/Item";
import CardComponent from "../sharedComponents/CardComponent";
import Container from "@material-ui/core/Container";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

function Favorites() {
  const data = useContext(DataContext);
  const classes = useStyles();
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [isLoadingFavorites, setIsLoadingFavorites] = useState(true);
  const [currentUser, setCurrentUser] = useState("");
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      setCurrentUser(uid);
      // ...
    } else {
      const uid = "";
      setCurrentUser(uid);
    }
  });

  useEffect(
    () =>
      onSnapshot(collection(db, "favorites"), (snapshot) => {
        setFavoriteItems(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
        setIsLoadingFavorites(false);
      }),
    []
  );

  // console.log(favoriteItems);

  return (
    <div>
      <Container className={classes.cardGrid} maxWidth="xl">
        <Grid container spacing={3}>
          {favoriteItems.map((item) => {
            if (item.currentUser === currentUser) {
              return (
                <Grid item key={item.id} xs={12} sm={6} md={3}>
                  <Item key={item.id}>
                    <CardComponent itemData={item} />
                  </Item>
                </Grid>
              );
            }
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default Favorites;
