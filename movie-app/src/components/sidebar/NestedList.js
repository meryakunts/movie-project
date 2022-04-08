import React from 'react';
import SimpleList from './SimpleList';
// import './NestedList.css'
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

export default function NestedList() {
  const classes = useStyles();
  
  const list = [{title: "SORT BY", name: "sort", icon: "SortIcon", items: ["Popular", "New Releases", "Recently Added", "IMDb Rating"]},
          {title: "SOURCE", name: "source", icon: "ShopIcon", items: ['Free', 'Rent or Buy']},
          {title: "GENRE", name: "genre", icon: "MovieIcon", items: ["Drama", "Comedy", "Romance", "Thriller",'Action','Kids & Family','Fantasy','Animation']},
          {title: "NEW RELEASES", name: "newReleases", icon: "FiberNewIcon", items: ['Last 3 months', 'Last 6 months', 'Last 9 months']},
          {title: "YEAR", year: "genre", icon: "TheatersIcon", items: ['2020 & Newer', '2010-2019','2001-2009','2000 & Older']},
          {title: "RATING", name: "rating", icon: "StarsIcon", items: ['Stars(***)']},
          {title: "PRICE", name: "price", icon: "CreditCardIcon", items: ['4.99 or Less', '3.99 or Less','2.99 or Less','1.99 or Less','0.99 or Less']}
  ]
  return (
    
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader" >
          <SortIcon style={{ color: 'gray', size:'small' }}/>
          FILTER
        </ListSubheader>
      }
      className={classes.root}
    >
    {
      list.map(item => <SimpleList key={item.title} data={item} />)
    }


  
    </List>
  );
}