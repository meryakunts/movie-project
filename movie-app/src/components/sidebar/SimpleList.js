import React from 'react';
import './SimpleList.css' 
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import SortIcon from '@material-ui/icons/Sort';
import MovieIcon from '@material-ui/icons/Movie';
import ShopIcon from '@material-ui/icons/Shop';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import TheatersIcon from '@material-ui/icons/Theaters';
import StarsIcon from '@material-ui/icons/Stars';
import CreditCardIcon from '@material-ui/icons/CreditCard';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }),

);

export default function SimpleList({data}) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  // const [value, setValue] = React.useState(null)
    const handleClick = (arg) => {
          setOpen(!open);
        // setOpen(!open);
    };

    return (
      <>
      <ListItem button onClick={() => handleClick(data.name)}>
          <ListItemIcon>
              <StarBorder style='none'/>
          </ListItemIcon>
          <ListItemText primary={data.title} style={{ color: 'blue' }} />
          {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
              {
                  data.items.map(item => {
                      return (
                          <ListItem key={item} button className={classes.nested}>
                              <ListItemText primary={item} />
                          </ListItem>
                      )
                  })
              }
          </List>
      </Collapse>
      </>
  )
}




    