import React, { useState, useContext } from "react";
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
import MoviePage from "../components/MoviePage";
import { DataContext } from "../components/DataContext";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

function CardComponent(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [clicked, setClicked] = useState(false);
  const {itemClicked} = useContext(DataContext);

  const handleClickOpen = (e) => {
    setOpen(true);
    e.stopPropagation();
  };

  const handleClose = (e) => {
    setOpen(false);
    e.stopPropagation();
  };

  const handleClickItem = () => {
    itemClicked(props.itemData)
  };

  const { description, name } = props.itemData;

  return (
    <div>
      <Card className={classes.root} onClick={handleClickItem}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image="https://images.cdn1.stockunlimited.net/preview1300/film-reel-with-popcorn_1972467.jpg"
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
                <IconButton aria-label="add to favorites" color="inherit">
                  <FavoriteBorderIcon />
                </IconButton>
              </Tooltip>
              <Tooltip
                TransitionComponent={Zoom}
                title="add to watchlist"
                arrow
              >
                <IconButton color="primary" aria-label="aadd to watchlist">
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
