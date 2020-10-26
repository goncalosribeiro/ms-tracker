import React, { useContext } from 'react'
import SearchBox from "../Components/SearchBox";
import ListMenu from "../Components/ListMenu";
import Spinner from "../Components/Spinner";
import CardList from "../Components/CardList";
import LoadMoreBtn from "../Components/LoadMoreBtn";
import { Context } from '../store/store';

const ListMode = () => {

  const [state, dispatch] = useContext(Context);

  let listDisplay = state.error ? <p>Something went wrong!</p> : <CardList />;

  return (
    <div>
      <SearchBox />
      <ListMenu
        type={state.typeSelection}
        mode={state.mode}
        activeType={state.listType}
      />
      {state.loading ? <Spinner /> : null}
      {listDisplay}
      {state.loading ? <Spinner /> : null}
      {state.page < state.totalPages && !state.loading ? (
        <LoadMoreBtn />
      ) : null}
    </div>
  );
};

export default ListMode
