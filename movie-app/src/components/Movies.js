import React, { useContext } from "react";
import { DataContext } from "../components/DataContext";
import Grid from "@material-ui/core/Grid";
import Item from "../sharedComponents/Item";
import CardComponent from "../sharedComponents/CardComponent";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

function Movies() {
  const data = useContext(DataContext);
  const classes = useStyles();
  return (
    <Container className={classes.cardGrid} maxWidth="xl">
      <Grid container spacing={3}>
        {data.moviesData.map((item) => {
          return (
            <Grid item key={item.id} xs={12} sm={6} md={3}>
              <Item key={item.id}>
                <CardComponent itemData={item} />
              </Item>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default Movies;
