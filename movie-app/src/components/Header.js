import React from "react";
import Link from "@material-ui/core/Link";

function Header() {
  return (
    <div className="header">
      <div className="header_section">
        <div className="header_item headerlogo">LOGO</div>

        <div className="header_item headerButton">
          <Link href="/home"> Home </Link>
          <Link href="/movies"> Movies</Link>
          <Link href="/topShows">Top Shows</Link>
          <Link href="topMovies">Top Movies</Link>
          <Link href="/watchlist">Watchlist</Link>
        </div>
      </div>
      <div className="header_section">
        <Link href="#">Settings</Link>
        <Link href="/signin">Sign In</Link>
        <Link href="/signup">Sign Up</Link>
      </div>
    </div>
  );
}

export default Header;
