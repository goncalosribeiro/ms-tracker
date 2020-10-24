import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = (props) => {
  return (
    <div>
      <div className="bg-content" />
      <div className="top-section">
        <div className="top-left">
          <div className="logo" />
          <div className="logo-text">
            <p>Movies & Series</p>
            <p>Tracker</p>
          </div>
        </div>
        <div className="top-center">
          <NavLink to="/movies" className="ch-button">
            {/* onClick={props.mode} */}
            Movies
          </NavLink>
          <NavLink to="/series" className="ch-button">
            {/* onClick={props.mode} */}
            Series
          </NavLink>
        </div>
        <div className="top-right">
          <div className="login-link">
            <a href="/">
              <p>LOGIN/REGISTER</p>
            </a>
          </div>
          <div className="avatar">
            <i className="fa fa-user-circle" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header
