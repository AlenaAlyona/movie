import React, { useState, useEffect } from "react";
import Timeout from "await-timeout";
import Film from "../components/Film";
import "./DiscoverMoviesPage.css";
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "axios";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");
  const [status, set_status] = useState("idle");
  const [films, set_film] = useState([]);
  const history = useHistory();
  const params = useParams();
  console.log("PARAMS", params);

  const search = () => {
    const routeParam = encodeURIComponent(searchText);
    history.push(`/discover/${routeParam}`);
  };

  useEffect(() => {
    async function fetchSomeData() {
      const queryParam = encodeURIComponent(params.searchText);
      console.log("Start searching for:", searchText);
      set_status("searching");

      await Timeout.set(2000);

      const data = await axios.get(
        `https://omdbapi.com/?apikey=f2d4bd6a&s=${queryParam}`
      );

      console.log("Success!", data);
      // set_searchText(data.data)
      set_status("done");
      set_film(data.data.Search);
    }
    fetchSomeData();
  }, [params.searchText]);

  return (
    <div>
      <h1>Discover some movies!</h1>
      {status}
      <p>
        <input
          value={searchText}
          type="text"
          onChange={(e) => set_searchText(e.target.value)}
        />
        <button onClick={search}>Search</button>
      </p>
      <div className="image-list">
        {films.map((film) => {
          return (
            <Link key={film.imdbID} to={`/movie/${film.imdbID}`}>
              <Film title={film.Title} year={film.Year} img={film.Poster} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
