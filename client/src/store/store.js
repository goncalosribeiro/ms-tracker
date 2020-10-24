import React, { createContext, useReducer } from "react";

const initialState = {
  searchTerm: ""
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TERM":
      return {
        ...state,
        searchTerm: action.payload
      };
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
