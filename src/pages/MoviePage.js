import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function MoviePage() {
  const route_parameters = useParams();
  console.log("ROUTE", route_parameters);

  const [movieData, set_movieData] = useState({});

  useEffect(() => {
    async function doSomeDataFetching() {
      console.log("I'm gonna fetch some data!");

      const res = await axios.get(
        `https://www.omdbapi.com/?i=${route_parameters.imdb_id}&plot=full&apikey=f2d4bd6a`
      );

      console.log("Got back:", res);
      set_movieData(res.data);
    }

    doSomeDataFetching();
  }, [route_parameters.imdb_id]);

  return (
    <div>
      <div key={movieData.imdbID}>
        <h4>{movieData.Title}</h4>
        <h5>{movieData.Year}</h5>
        <img src={movieData.Poster} alt="MoviePic" />
        <p>Director {movieData.Director}</p>
        <p>Actors: {movieData.Actors}</p>
        <p>{movieData.Plot}</p>
      </div>
    </div>
  );
}
