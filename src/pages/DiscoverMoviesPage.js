import React, { useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");
  const [searchState, set_searchState] = useState({ status: "idle" });
  const [movieState, set_movieState] = useState([]);

  const search = async () => {
    console.log("Start searching for:", searchText);
    const queryParam = encodeURIComponent(searchText);

    set_searchState({ status: "searching" });

    const response = await axios.get(
      `https://omdbapi.com/?apikey=e7900a63&s=${queryParam}`
    );

    console.log("Success!", response.data);
    set_searchState({ status: "done" });
    set_movieState(response.data.Search);
    set_searchText("");
  };

  return (
    <div>
      <h1>Discover some movies!</h1>
      <p>{searchState.status}</p>
      <p>
        <input
          value={searchText}
          onChange={(event) => set_searchText(event.target.value)}
        />
        <button onClick={search}>Search</button>
      </p>
      {movieState.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          imdbId={movie.imdbID}
          title={movie.Title}
          year={movie.Year}
          poster={movie.Poster}
        />
      ))}
    </div>
  );
}
