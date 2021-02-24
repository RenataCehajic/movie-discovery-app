import React from "react";
import "./MovieCard.css";
import { Link } from "react-router-dom";

function MovieCard({ title, year, poster, imdbId }) {
  return (
    <div className="movie-card">
      <Link to={`/movie/${imdbId}`}>
        <h3>
          {title} {year}
        </h3>
      </Link>
      {poster !== "N/A" ? <img src={poster} /> : <p>no image</p>}
    </div>
  );
}

export default MovieCard;
