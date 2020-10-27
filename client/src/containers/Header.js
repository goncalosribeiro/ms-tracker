import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Context } from '../store/store'
import './Header.css'

const Header = (props) => {
  const [state, dispatch] = useContext(Context);

  const modeClick = (mode) => {
    dispatch({ type: "MODE", payload: mode });
  };

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
          <NavLink to="/movie" className="ch-button"
            onClick={() => modeClick("movie")}>
            Movies
          </NavLink>
          <NavLink to="/tv" className="ch-button"
            onClick={() => modeClick("tv")}>
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
