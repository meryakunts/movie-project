import React, { useContext } from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import Link from "@material-ui/core/Link";
import { AuthContext } from "./UserContext";
import "../sharedComponents/styles.css";
import Movies from "./Movies";
import { useHistory } from "react-router-dom";
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
  // subTitles: {
  //   display: "none",
  //   [theme.breakpoints.up("sm")]: {
  //     display: "block",
  //   },
  //   "& a": {
  //     fontSize: "20px",
  //     marginRight: theme.spacing(3),
  //     marginLeft: theme.spacing(3),
  //     color: "#fff",
  //     display: "flex !important",
  //     alignItems: "center",
  //     fontWeight: "400",
  //     cursor: "pointer",
  //     lineHeight: "1.6",
  //     position: "relative",
  //     overflow: "hidden",
  //     letterSpacing: ".7px",
  //     transition: ".3s",
  //     "&:after": {
  //       content: "",
  //       position: "absolute",
  //       bottom: "0",
  //       left: "0",
  //       width: "100%",
  //       height: "0",
  //       borderBottom: "2px solid",
  //       borderColor: "#ff9201",
  //       background: "#ff9201",
  //       transform: "translateX(calc(-100% - 2px))",
  //       transition: ".3s",
  //     },
  //     "&:hover": {
  //       textDecoration: "none",
  //       "&:after": {
  //         width: "100%",
  //         transform: "translateX(0)",
  //       },
  //     },
  //   },
  // },
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
}));

export default function Header(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const login = useContext(AuthContext);
  let history = useHistory();

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
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
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
                color="inherit"
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
          color="inherit"
        >
          <MoreIcon />
        </IconButton>
      </div>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

// import React from "react";
// import Link from "@material-ui/core/Link";

// function Header() {
//   return (
//     <div className="header">
//       <div className="header_section">
//         <div className="header_item headerlogo">LOGO</div>

//         <div className="header_item headerButton">
//           <Link href="/home"> Home </Link>
//           <Link href="/movies"> Movies</Link>
//           <Link href="/topShows">Top Shows</Link>
//           <Link href="topMovies">Top Movies</Link>
//           <Link href="/watchlist">Watchlist</Link>
//         </div>
//       </div>
//       <div className="header_section">
//         <Link href="#">Settings</Link>
//         <Link href="/signin">Sign In</Link>
//         <Link href="/signup">Sign Up</Link>
//       </div>
//     </div>

//   );
// }

// export default Header;
