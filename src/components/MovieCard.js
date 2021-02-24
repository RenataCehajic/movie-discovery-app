import React from "react";

function MovieCard({ title, year, poster }) {
  return (
    <div>
      <h3>
        {title} {year}
      </h3>
      {poster !== "N/A" ? <img src={poster} /> : <p>no image</p>}
    </div>
  );
}

export default MovieCard;
