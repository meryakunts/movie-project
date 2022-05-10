import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import Link from "@material-ui/core/Link";
import { AuthContext } from "./UserContext";
import "../sharedComponents/styles.css";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

const useStyles = makeStyles((theme) => ({
  grow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  menuButton: {
    width: "70px",
    height: "70px",
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    fontFamily: "fantasy",
    fontSize: "36px",
    marginRight: theme.spacing(4),
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  headerBar: {
    backgroundColor: "#212443",
  },
  userBtn: {
    color: "rgb(255, 223, 222)",
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const login = useContext(AuthContext);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleSignOut = () => {
    handleMenuClose();
    login.signOut();
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <p>Movies</p>
      </MenuItem>
      <MenuItem>
        <p>Shows</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <p>Favorites</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <p>Watchlist</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <p>Sign In</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <p>Sign Up</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <div className={classes.sectionDesktop}>
        <Typography className="subTitles" variant="h5" noWrap>
          {!login.isLogged ? (
            <Link href="/signin">Movies</Link>
          ) : (
            <Link href="/movies">Movies</Link>
          )}
        </Typography>
        <Typography className="subTitles" variant="h5" noWrap>
          {!login.isLogged ? (
            <Link href="/signin">Shows</Link>
          ) : (
            <Link href="/shows">Shows</Link>
          )}
        </Typography>
        <Typography className="subTitles" variant="h5" noWrap>
          {!login.isLogged ? (
            <Link href="/signin">Favorites</Link>
          ) : (
            <Link href="/favorites">Favorites</Link>
          )}
        </Typography>
        <Typography className="subTitles" variant="h5" noWrap>
          {!login.isLogged ? (
            <Link href="/signin">Watchlist</Link>
          ) : (
            <Link href="/watchlist">Watchlist</Link>
          )}
        </Typography>
        {login.isLogged && (
          <div>
            <Tooltip TransitionComponent={Zoom} title={login.email} arrow>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                className={classes.userBtn}
              >
                <AccountCircle />
              </IconButton>
            </Tooltip>
          </div>
        )}
        <Typography className="subTitles" variant="h5" noWrap>
          {!login.isLogged && <Link href="/signin">Sign In</Link>}
        </Typography>
        <Typography className="subTitles" variant="h5" noWrap>
          {!login.isLogged && <Link href="/signup">Sign Up</Link>}
        </Typography>
      </div>
      <div className={classes.sectionMobile}>
        <IconButton
          aria-label="show more"
          aria-controls={mobileMenuId}
          aria-haspopup="true"
          onClick={handleMobileMenuOpen}
          className={classes.userBtn}
        >
          <MoreIcon />
        </IconButton>
      </div>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
