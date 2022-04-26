import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  dialogStyle: {
    padding: "1rem",
    color: "#fff",
    boxShadow: "0.4rem 0.4rem 2.4rem 0.2rem hsl(236deg 50% 50% / 30%)",
    background: "linear-gradient(to right bottom, hsl(236, 50%, 50%), hsl(195, 50%, 50%))"
  },
  title: {
    textAlign: "center",
    "& span": {
      fontSize: "1.6rem",
      fontWeight: "bold",
    },
    "& h4": {
      fontSize: "1rem",
      fontStyle: "italic",
      fontWeight: "normal",
      paddingBottom: "2rem",
      borderBottom: "2px solid hsla(0, 0%, 100%, .4)"
    }
  },
  closeBtn: {
    cursor: "pointer",
    position: "absolute",
    right: "0",
    top: "0",
    margin: "10px"
  }
});



function DialogComponent({onClose, data}) {

  const { name, stars } = data;
  const classes = useStyles();

  return (
    <div>
      <Dialog
        aria-labelledby="draggable-dialog-title"
        open={true}
      >
        <div className={classes.dialogStyle}>
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title" className={classes.title}> 
          <span>{name}</span>
          <h4>{stars}</h4>
        </DialogTitle>
        <DialogActions>
        <HighlightOffRoundedIcon autoFocus onClick={onClose} color="#fff" className={classes.closeBtn}/>
        </DialogActions>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
        </DialogContent>
        </div>
      </Dialog>
    </div>
  );
}

export default DialogComponent;