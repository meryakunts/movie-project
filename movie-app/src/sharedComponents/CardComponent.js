import React, { useState } from "react";
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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

function CardComponent(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { description, name, src } = props.itemData;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={src ? src : "https://images.cdn1.stockunlimited.net/preview1300/film-reel-with-popcorn_1972467.jpg"}
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
            <Tooltip TransitionComponent={Zoom} title="add to favorites" arrow>
              <IconButton aria-label="add to favorites">
                <FavoriteBorderIcon />
              </IconButton>
            </Tooltip>
            <Tooltip TransitionComponent={Zoom} title="add to watchlist" arrow>
              <IconButton aria-label="aadd to watchlist">
                <AddToQueueOutlinedIcon />
              </IconButton>
            </Tooltip>
          </div>
          <div>
            <Tooltip TransitionComponent={Zoom} title="more information" arrow>
              <IconButton
                aria-label="more information"
                onClick={handleClickOpen}
              >
                <InfoOutlinedIcon />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </CardActions>
      {open && <DialogComponent onClose={handleClose} data={props.itemData} />}
    </Card>
  );
}

export default CardComponent;
