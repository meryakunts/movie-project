import React from "react";
import "./SimpleList.css";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  })
);

export default function SimpleList({ data, onItemClick }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const { Icon } = data;

  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <Icon style={{ color: "#d1afdf", size: "small" }} />
        </ListItemIcon>
        <ListItemText primary={data.title} style={{ color: "rgb(255, 223, 222)" }} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {data.items.map((item) => {
            return (
              <ListItem key={item.name || item} button className={classes.nested}>
                <ListItemText onClick={() => {
                  onItemClick([data.filterBy || data.name, item.filterBy || item]);
                }} primary={item.name || item} />
              </ListItem>
            );
          })}
        </List>
      </Collapse>
    </>
  );
}
