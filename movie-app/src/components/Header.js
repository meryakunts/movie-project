import React from 'react';
import haderstyle from '../components/header/navbar.css';
import Link from '@material-ui/core/Link';
import Home from '../components/Home';

function HeAder() {
    
    return( 
      
      <div className="header">
        <div className="header_section">
          <div className="header_item headerlogo">
                        LOGO
          </div>
      
            <div className="header_item headerButton">
              <a className="btna" href="/home"> Home </a>
              <a className="btna " href="/movies"> Movies</a>
              <a className="btna " href="/TopShows">Top Shows</a>
              <a className="btna " href="TopMovies">Top Movies</a>
              <a className="btna " href="/Watchlist">Watchlist</a>
        
            </div>
         
        </div>
          <div className="header_section">
          {/* <input></input> */}
            <a className="btns" href="#">Setings</a>
            <a className="btns" href="/signin">Log in</a>
            
          </div>
         
        </div>
         

      
    )
  }

export default HeAder;