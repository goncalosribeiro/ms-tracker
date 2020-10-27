import React, { useContext } from "react";
import Card from "./Card";
import { Context } from "../store/store";
import './CardList.css';

const CardList = (props) => {
  const [state, dispatch] = useContext(Context);

  return (
    <section className="list">

      {state.searchField && !state.loading ? (
        <h1 className="search-title">{`Search Result for: "${state.searchFiled}"`}</h1>
      ) : null}
      <div className="item-list">
        {state.mode === "movie"
          ? state.itemsList.map((item, i) => {
            return (
              <Card
                key={i}
                mode={state.mode}
                id={state.itemsList[i].id}
                title={state.itemsList[i].title}
                imageUrl={state.itemsList[i].poster_path}
                rate={state.itemsList[i].vote_average}
                ratePercent={state.itemsList[i].vote_average * 10}
                year={
                  state.itemsList[i].release_date
                    ? state.itemsList[i].release_date.substring(0, 4)
                    : "N/A"
                }
              />
            );
          })
          : state.itemsList.map((item, i) => {
            return (
              <Card
                key={i}
                id={state.itemsList[i].id}
                title={state.itemsList[i].name}
                imageUrl={state.itemsList[i].poster_path}
                rate={state.itemsList[i].vote_average}
                ratePercent={state.itemsList[i].vote_average * 10}
                year={
                  state.itemsList[i].first_air_date
                    ? state.itemsList[i].first_air_date.substring(0, 4)
                    : "N/A"
                }
              />
            );
          })}
      </div>
    </section>
  );
};

export default CardList;
