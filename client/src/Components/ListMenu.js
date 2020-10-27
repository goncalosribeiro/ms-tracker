import React, { useContext } from "react";
import { withRouter, NavLink } from "react-router-dom";
import { Context } from "../store/store";
import "./ListMenu.css";

const ListMenu = () => {
  const [state, dispatch] = useContext(Context);

  const onClick = (type) => {
    dispatch({ type: "TYPE", payload: type });
  };

  return state.mode === "movie" ? (
    <div className="search-type">
      <NavLink
        to="/movies/popular"
        className="type"
        onClick={() => onClick("popular")}
      >
        POPULAR
      </NavLink>
      <NavLink
        to="/movies/now_playing"
        className="type"
        onClick={() => onClick("now_playing")}
      >
        NOW PLAYING
      </NavLink>
      <NavLink
        to="/movies/top_rated"
        className="type"
        onClick={() => onClick("top_rated")}
      >
        TOP RATED
      </NavLink>
      <NavLink
        to="/movies/upcoming"
        className="type"
        onClick={() => onClick("upcoming")}
      >
        UPCOMING
      </NavLink>
    </div>
  ) : (
      <div className="search-type">
        <NavLink
          to="/series/popular"
          className="type"
          onClick={() => onClick("popular")}
        >
          POPULAR
      </NavLink>
        <NavLink
          to="/series/on_the_air"
          className="type"
          onClick={() => onClick("on_the_air")}
        >
          ON THE AIR
      </NavLink>
        <NavLink
          to="/series/airing_today"
          className="type"
          onClick={() => onClick("airing_today")}
        >
          AIRING TODAY
      </NavLink>
        <NavLink
          to="/series/top_rated"
          className="type"
          onClick={() => onClick("top_rated")}
        >
          TOP RATED
      </NavLink>
      </div>
    );
};

export default withRouter(ListMenu);
