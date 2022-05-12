import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
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
    menuItem: {
      "& span": {
        color: "#ffdfde",
        fontSize: "20px",
        transition: "0.3s",
        fontWeight: "400",
        letterSpacing: "0.7px",
        textTransform: "capitalize",
      },
    },
  })
);

export default function SimpleList({ data, onItemClick, onFilterClick }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
    onFilterClick();

  };
  const { Icon } = data;

  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <Icon style={{ color: "#ffdfde", size: "small" }} />
        </ListItemIcon>
        <ListItemText primary={data.title} className={classes.menuItem} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {data.items.map((item) => {
            return (
              <ListItem
                key={item.name || item}
                button
                className={classes.nested}
              >
                <ListItemText
                  onClick={() => {
                    onItemClick([
                      data.filterBy || data.name,
                      item.filterBy || item,
                    ]);
                  }}
                  primary={item.name || item}
                />
              </ListItem>
            );
          })}
        </List>
      </Collapse>
    </>
  );
}
