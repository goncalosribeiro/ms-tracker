import React, { useContext } from 'react'
import SearchBox from "../Components/SearchBox";
import ListMenu from "../Components/ListMenu";
import Spinner from "../Components/Spinner";
import CardList from "../Components/CardList";
import LoadMoreBtn from "../Components/LoadMoreBtn";
import { Context } from '../store/store';

const ListMode = () => {

  const [state, dispatch] = useContext(Context);

  let listDisplay = <p>Something went wrong!</p>;

  if (!state.error) {
    listDisplay = (
      <CardList />
    );
  }

  return (
    <div>
      <SearchBox />
      <ListMenu
        type={state.typeSelection}
        mode={state.mode}
        activeType={state.listType}
      />
      {listDisplay}
      {state.loading ? <Spinner /> : null}
      {state.page < state.totalPages && !state.loading ? (
        <LoadMoreBtn text="Load More" onClick={state.loadMoreItems} />
      ) : null}
    </div>
  );
};

export default ListMode
