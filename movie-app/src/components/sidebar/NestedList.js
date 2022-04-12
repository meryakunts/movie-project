import { React, useState } from "react";
import SimpleList from "./SimpleList";
import {
  makeStyles,
  Theme,
  useTheme,
  createStyles,
} from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import SortIcon from "@material-ui/icons/Sort";
import MovieIcon from "@material-ui/icons/Movie";
import ShopIcon from "@material-ui/icons/Shop";
import FiberNewIcon from "@material-ui/icons/FiberNew";
import TheatersIcon from "@material-ui/icons/Theaters";
import StarsIcon from "@material-ui/icons/Stars";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import AppBar from "@material-ui/core/AppBar";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { red } from "@material-ui/core/colors";

const drawerWidth = 200;

const useStyles = makeStyles((theme) =>
  createStyles({
    // : Theme
    //     root: {
    //       width: '100%',
    //       maxWidth: 360,
    //       backgroundColor: theme.palette.background.paper,
    //     },
    //     nested: {
    //       paddingLeft: theme.spacing(4),
    //     },
    //   }),
    // );

    // iconMenuButton: {
    //   marginLeft: '10px'
    // },
    // appBarShift: {
    //   width: `calc(100% - ${drawerWidth}px)`,
    //   marginLeft: drawerWidth,
    //   transition: theme.transitions.create(['margin', 'width'], {
    //     easing: theme.transitions.easing.easeOut,
    //     duration: theme.transitions.duration.enteringScreen,
    //   }),
    // },
    menuButton: {
      marginRight: theme.spacing(5),
      marginLeft: "15px",
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: "#ffffff",
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
  })
);

export default function NestedList() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const list = [
    {
      title: "SORT BY",
      name: "sort",
      Icon: SortIcon,
      items: ["Popular", "New Releases", "Recently Added", "IMDb Rating"],
    },
    {
      title: "SOURCE",
      name: "source",
      Icon: ShopIcon,
      items: ["Free", "Rent or Buy"],
    },
    {
      title: "GENRE",
      name: "genre",
      Icon: MovieIcon,
      items: [
        "Drama",
        "Comedy",
        "Romance",
        "Thriller",
        "Action",
        "Kids & Family",
        "Fantasy",
        "Animation",
      ],
    },
    {
      title: "NEW RELEASES",
      name: "newReleases",
      Icon: FiberNewIcon,
      items: ["Last 3 months", "Last 6 months", "Last 9 months"],
    },
    {
      title: "YEAR",
      year: "genre",
      Icon: TheatersIcon,
      items: ["2020 & Newer", "2010-2019", "2001-2009", "2000 & Older"],
    },
    { title: "RATING", name: "rating", Icon: StarsIcon, items: ["Stars(***)"] },
    {
      title: "PRICE",
      name: "price",
      Icon: CreditCardIcon,
      items: [
        "4.99 or Less",
        "3.99 or Less",
        "2.99 or Less",
        "1.99 or Less",
        "0.99 or Less",
      ],
    },
  ];
  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        className={clsx(classes.menuButton, open && classes.hide)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              FILTER
            </ListSubheader>
          }
          className={classes.root}
        >
          {list.map((item) => (
            <SimpleList key={item.title} data={item} />
          ))}
        </List>
      </Drawer>
    </>
  );
}
