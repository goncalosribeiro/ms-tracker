import React, { useContext, useEffect } from 'react'
import FontAwesome from "react-fontawesome";
import { Context } from "../store/store";
import './SearchBox.css'

const SearchBox = () => {
  const [state, dispatch] = useContext(Context);

  const changeValue = (event) => {
    dispatch({
      type: "SEARCH_TERM", payload: event.target.value
    })
  }

  useEffect(() => {
    if (state.clearInput === true) {
      document.querySelector('input').value = '';
      dispatch({ type: "CLEAR_INPUT" })
    }
  }, [state.clearInput])

  return (
    <form className="search-bar">
      <FontAwesome className="search" name="search" />
      <input
        className=""
        type="search"
        placeholder="Search for Movies.."
        autoComplete="off"
        onChange={changeValue}
        value={state.SearchTerm}
      />
    </form>
  )
}

export default SearchBox
