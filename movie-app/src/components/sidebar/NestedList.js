import { React, useState, useContext } from "react";
import SimpleList from "./SimpleList";
import {
  makeStyles,
  Theme,
  useTheme,
  createStyles,
} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import MovieIcon from "@material-ui/icons/Movie";
import ShopIcon from "@material-ui/icons/Shop";
import TheatersIcon from "@material-ui/icons/Theaters";
import StarsIcon from "@material-ui/icons/Stars";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import { DataContext } from "../DataContext";

// const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    menuIcon: {
      position: "fixed",
      left: "10px",
      top: "22px",
      color: "#ffffff",
    },
    // menuButton: {
    //   marginRight: theme.spacing(5),
    //   marginLeft: "240px",
    //   width: "10px",
    // },
    hide: {
      display: "none",
    },
    drawer: {
      // width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      // width: drawerWidth,
      backgroundColor: "#4c2b5b",
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
    root: {
      color: "rgb(255, 223, 222)",
    },
  })
);

export default function NestedList() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const { filterFunc } = useContext(DataContext);

  const list = [
    {
      title: "source",
      name: "source",
      filterBy: "price",
      Icon: ShopIcon,
      items: ["Free", "Buy"],
    },
    {
      title: "genre",
      name: "genre",
      Icon: MovieIcon,
      items: [
        "Action",
        "Animation",
        "Horror",
        "Thriller",
        "Adventure",
        "Sci-fi",
        "Fantasy",
      ],
    },
    {
      title: "year",
      name: "year",
      Icon: TheatersIcon,
      items: [
        { name: "2020 & Newer", filterBy: { from: 2020, to: null } },
        { name: "2010-2019", filterBy: { from: 2010, to: 2019 } },
        { name: "2001-2009", filterBy: { from: 2001, to: 2009 } },
        { name: "2000 & Older", filterBy: { from: null, to: 2000 } },
      ],
    },
    { title: "rating",
      name: "rating", 
      Icon: StarsIcon, 
      items: [
        {name: "From 1 to 4.99", filterBy: {from: 1, to: 4.99}},
        {name: "From 5 to 6.99", filterBy: {from: 5, to: 6.99}},
        {name: "From 7 to 10", filterBy: {from: 7, to: 10}}
      ]},
    {
      title: "price",
      name: "price",
      Icon: CreditCardIcon,
      items: [
        { name: "19.99 or Less", filterBy: 19.99 },
        { name: "9.99 or Less", filterBy: 9.99 },
        { name: "4.99 or Less", filterBy: 4.99 },
      ],
    },
  ];

  const handleItemClick = (filter) => {
    filterFunc(filter);
  };

  return (
    <>
      <div
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          className={classes.root}
        >
          {list.map((item) => (
            <SimpleList
              onItemClick={handleItemClick}
              key={item.title}
              data={item}
            />
          ))}
        </List>
      </div>
    </>
  );
}
