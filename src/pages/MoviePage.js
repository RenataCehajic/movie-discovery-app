import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function MoviePage() {
  console.log("Hello from movie page!");
  const route_parameters = useParams();
  const imdb_id = route_parameters.imdb_id;

  const [movieData, set_movieData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      console.log("Fetching data!");

      const response = await axios.get(
        `https://www.omdbapi.com/?i=${imdb_id}&apikey=e7900a63`
      );
      set_movieData(response.data);
      console.log("response", response);
      console.log("response.data", response.data);
    }
    fetchData();
  }, [imdb_id]);

  console.log(movieData);
  console.log(movieData.Genre);

  return (
    <div>
      <h2>
        {movieData.Title} {movieData.Year}
      </h2>
      <p>{movieData.Genre}</p>
      <img src={movieData.Poster} alt={`${movieData.Title}'s poster`} />
      <p>IMDB Rating:</p>
      <p>{movieData.imdbRating}</p>
    </div>
  );
}
