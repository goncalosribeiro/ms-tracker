import React, { useEffect, useState } from "react";
import rating from "../assets/images/rating.png";
import noPoster from "../assets/images/no_poster.png";
import axios from "axios";
import { Link } from "react-router-dom";
import './Card.css'

const Card = (props) => {
  const [tagLine, setTagLine] = useState('')

  useEffect(() => {
    if (props.mode === "movie") {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${props.id}?api_key=${process.env.REACT_APP_MSDB_ACCESS}`
        )
        .then((response) => {
          setTagLine(response.data.tagline);
        });
    }
  })

  const imageUrl = props.imageUrl ? `https://image.tmdb.org/t/p/w300${props.imageUrl}` : noPoster;

  return (
    <Link to={`/${props.id}`} className="item" id={props.id}>
      <div className="item-img">
        <img src={imageUrl} alt="movie poster" />
      </div>
      <div className="item-description">
        <div className="item-rate">
          <div className="progress-container">
            <div
              className="progress-rate"
              style={{ width: `${props.ratePercent}%` }}
            />
          </div>
          <img src={rating} alt="rating stars" />
          <div className="rate-value">
            <p>{props.rate}</p>
          </div>
        </div>
        <div className="text-content">
          <p className="item-title">{props.title}</p>
          <p className="item-tagline">{tagLine}</p>
          <p className="item-year">{props.year}</p>
        </div>
      </div>
    </Link>
  )
}

export default Card