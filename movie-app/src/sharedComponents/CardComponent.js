import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./styles.css";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  textBold: {
    fontSize: "0.875rem",
    color: "rgb(33, 33, 33)",
    fontWeight: "bold",
  },
  secondaryText: {
    color: "#616161",
    fontWeight: "normal",
  },
}));

function CardComponent(props) {
  const classes = useStyles();
  const {
    description,
    genre,
    name,
    year,
    image,
    title,
    price,
    rating,
    stars,
    trailer,
  } = props.itemData;

  return (
    <Card className={classes.root}>
      <CardHeader
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={name}
        subheader={year}
        className="cardTitle"
      />
      <CardMedia
        className={classes.media}
        image="https://images.cdn1.stockunlimited.net/preview1300/film-reel-with-popcorn_1972467.jpg"
        title={name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <span className="textEllipsis gray-text">{description}</span>
        </Typography>
      </CardContent>
      <CardContent>
        <Typography paragraph className={classes.textBold}>
          Genre: <span className={classes.secondaryText}>{genre}</span>
        </Typography>
        <Typography paragraph className={classes.textBold}>
          Stars: <span className={classes.secondaryText}>{stars}</span>
        </Typography>
        <Typography className={classes.textBold}>
          Price: <span className={classes.secondaryText}>{price}</span>
        </Typography>
        <Typography className={classes.textBold}>
          Rating: <span className={classes.secondaryText}>{rating}</span>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" color="inherit">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Watchlist" color="inherit">
          <ShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default CardComponent;
