import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import HighlightOffRoundedIcon from "@material-ui/icons/HighlightOffRounded";
import { makeStyles } from "@material-ui/core/styles";
import "./styles.css";

const useStyles = makeStyles({
  dialogStyle: {
    padding: "1rem",
    color: "#fff",
    boxShadow: "0.4rem 0.4rem 2.4rem 0.2rem hsl(236deg 50% 50% / 30%)",
    background:
      "linear-gradient(to right bottom, hsl(236, 50%, 50%), hsl(195, 50%, 50%))",
  },
  title: {
    textAlign: "center",
    paddingBottom: "0",
    "& p": {
      fontSize: "1.6rem",
      fontWeight: "bold",
      margin: "0.5rem auto",
    },
  },
  descriptionText: {
    textAlign: "center",
    padding: "0.5rem 2rem",
    color: "#fff",
    fontSize: "0.9rem",
    fontWeight: "normal",
    lineHeight: "1.6",
    marginBottom: "0",
  },
});

function DialogComponent({ onClose, data }) {
  const { name, stars, year, genre, price, rating, description } = data;
  const classes = useStyles();

  return (
    <div>
      <Dialog aria-labelledby="draggable-dialog-title" open={true}>
        <div className={classes.dialogStyle}>
          <DialogTitle
            style={{ cursor: "move" }}
            id="draggable-dialog-title"
            className={classes.title}
          >
            <p>{name}</p>
            <span className="dialogText">{stars}</span>
          </DialogTitle>
          <DialogContent>
            <DialogContentText className={classes.descriptionText}>
              {description}
            </DialogContentText>
            <div className="flexDescript">
              <DialogContentText className={classes.descriptionText}>
                Year: <span>{year}</span>
              </DialogContentText>
              <DialogContentText className={classes.descriptionText}>
                Genre: <span>{genre}</span>
              </DialogContentText>
              <DialogContentText className={classes.descriptionText}>
                Price: <span>{price}</span>
              </DialogContentText>
              <DialogContentText className={classes.descriptionText}>
                Rating: <span>{rating}</span>
              </DialogContentText>
            </div>
          </DialogContent>
          <DialogActions>
            <HighlightOffRoundedIcon
              autoFocus
              onClick={onClose}
              className="closeBtn"
            />
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
}

export default DialogComponent;
