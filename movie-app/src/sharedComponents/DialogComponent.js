import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



function DialogComponent({onClose, data}) {

  const { name } = data;

  return (
    <div>
      <Dialog
        aria-labelledby="draggable-dialog-title"
        open={true}
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Subscribe {name}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus color="primary" onClick={onClose}>
            Cancel
          </Button>
          <Button color="primary" onClick={onClose}>
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DialogComponent;