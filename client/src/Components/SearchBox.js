import React, { useContext } from 'react'
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

  const submit = (e) => {
    e.preventDefault();
    dispatch({
      type: "SUBMIT_TERM",
    })
  }

  return (
    <form className="search-bar" onSubmit={submit}>
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
