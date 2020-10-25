import React, { createContext, useReducer } from "react";

const initialState = {
  page: 1,
  totalPages: 0,
  listType: "popular",
  mode: "movie",
  itemsList: [],
  searchTerm: "",
  submitTerm: '',
  loading: false,
  error: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_TERM":
      return { ...state, searchTerm: action.payload };
    case "SUBMIT_TERM":
      return { ...state, submitTerm: state.searchTerm };
    case "CLEAR_ITEMS":
      return { ...state, itemsList: [] };
    case "LOADING":
      return { ...state, loading: action.payload, error: false };
    case "PAGE":
      return { ...state, page: action.payload };
    case "TOTAL_PAGES":
      return { ...state, totalPages: action.payload };
    case "ERROR":
      return { ...state, error: action.payload };
    case "ITEMS_LIST":
      return { ...state, itemsList: action.payload };

    default:
      return state;
  }
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialState);
export default Store;
