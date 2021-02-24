import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import { useHistory, useParams } from "react-router-dom";
import "./DiscoverMoviePage.css";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");
  const [searchState, set_searchState] = useState({ status: "idle" });
  const [movieState, set_movieState] = useState([]);

  const history = useHistory();

  const navigateToSearch = () => {
    const routeParam = encodeURIComponent(searchText);
    history.push(`/discover/${routeParam}`);
  };

  const route_parameters = useParams();
  const searchedWords = route_parameters;
  console.log(searchedWords);

  useEffect(() => {
    async function fetchData() {
      console.log("Start searching for:", searchText);
      // const queryParam = encodeURIComponent(searchText);

      set_searchState({ status: "searching" });

      const response = await axios.get(
        `https://omdbapi.com/?s=${searchedWords.searchText}&apikey=e7900a63`
      );

      console.log("Success!", response.data);
      set_searchState({ status: "done" });
      set_movieState(response.data.Search);
      set_searchText("");
    }
    if (searchedWords.searchText) {
      fetchData();
    }
  }, [searchedWords, searchText]);

  return (
    <div>
      <h1>Discover some movies!</h1>
      <p>{searchState.status}</p>
      <p>
        <input
          type="text"
          value={searchText}
          onChange={(event) => set_searchText(event.target.value)}
        />
        <button onClick={navigateToSearch}>Search</button>
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
