import React from "react";
import "./MovieCard.css";
import { Link } from "react-router-dom";

function MovieCard({ title, year, poster, imdbId }) {
  return (
    <div className="movie-card">
      <Link to={`/movie/${imdbId}`}>
        <h3 className="title">{title}</h3>
        <h4>{year}</h4>
        <h4> {poster !== "N/A" ? <img src={poster} /> : <p>no image</p>}</h4>
      </Link>
    </div>
  );
}

export default MovieCard;
