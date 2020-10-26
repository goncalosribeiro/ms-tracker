import React, { useContext, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './containers/Header'
import ListMode from './containers/ListMode';
import { Context } from './store/store';

const App = () => {
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    dispatch({ type: "LOADING", payload: true });
    const endPoint = `https://api.themoviedb.org/3/${state.mode}/${state.listType}?api_key=${process.env.REACT_APP_MSDB_ACCESS}&page=${state.page}&include_adult=false`;
    fetchItems(endPoint);
  }, []);

  useEffect(() => {
    if (!state.searchTerm) {
      dispatch({ type: "SUBMIT_AND_SEND_TERM", payload: state.searchTerm });
    } else if (state.searchTerm.length <= 2) {
      dispatch({ type: "SUBMIT_TERM", payload: state.searchTerm });
    } else {
      dispatch({ type: "SUBMIT_AND_SEND_TERM", payload: state.searchTerm });
    }
  }, [state.searchTerm]);

  useEffect(() => {
    if (!state.submitTerm) {
      const endPoint = `https://api.themoviedb.org/3/${state.mode}/${state.listType}?api_key=${process.env.REACT_APP_MSDB_ACCESS}&page=${state.page}&include_adult=false`;
      fetchItems(endPoint);
    }
    if (state.submitTerm.length >= 3) {
      const endPoint = `https://api.themoviedb.org/3/search/${state.mode}?api_key=${process.env.REACT_APP_MSDB_ACCESS}&query=${state.submitTerm}&page=${state.page}&include_adult=false`;
      fetchItems(endPoint);
    }
  }, [state.submitTerm]);

  const fetchItems = (endPoint) => {
    axios
      .get(endPoint)
      .then((response) => {
        // const newItemsList = [...itemsList];
        const newItems = response.data.results;
        if (newItems) {
          dispatch({ type: "PAGE", payload: response.data.page });
          dispatch({ type: "ITEMS_LIST", payload: [...state.itemsList, ...newItems] });
          dispatch({ type: "LOADING", payload: false });
          dispatch({ type: "TOTAL_PAGES", payload: response.data.total_pages });
        };
      })
      .catch((error) => {
        dispatch({ type: "ERROR", payload: true });
        console.log('fetchItems: ', error);
      });
  };

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/">
          <ListMode />
        </Route>
        {/* <Route path="/:mode">
          <ListMode
            searchForItems={searchItems}
            //searchFiled={searchBoxTerm}
            typeSelection={typeSelection}
            mode={mode}
            listType={listType}
            error={error}
            itemsList={itemsList}
            loading={loading}
            page={page}
            totalPages={totalPages}
            loadMoreItems={loadMoreItems}
          />
        </Route>
        <Route path="/:mode/:listType">
          <ListMode
            searchForItems={searchItems}
            //searchFiled={searchBoxTerm}
            typeSelection={typeSelection}
            mode={mode}
            listType={listType}
            error={error}
            itemsList={itemsList}
            loading={loading}
            page={page}
            totalPages={totalPages}
            loadMoreItems={loadMoreItems}
          />
        </Route>
        <Route exact path="/:id">
          <DetailItem />
        </Route> */}
      </Switch>

    </div>
  );
}

export default App;
