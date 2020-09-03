import React, { useState } from "react";
import Timeout from "await-timeout";
import Film from "../components/Film";
import "./DiscoverMoviesPage.css";
import { Link } from "react-router-dom";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");
  const [status, set_status] = useState("idle");
  const [films, set_film] = useState([]);

  const search = async () => {
    console.log("Start searching for:", searchText);
    set_status("searching");
    await Timeout.set(2000);

    const queryParam = encodeURIComponent(searchText);

    const data = await fetch(
      `http://www.omdbapi.com/?s=${queryParam}&apikey=f2d4bd6a`
    ).then((r) => r.json());

    console.log("Success!", data);
    // set_searchText(data.data)
    set_film(data.Search);
    set_status("done");
  };

  return (
    <div>
      <h1>Discover some movies!</h1>
      {status}
      <p>
        <input
          value={searchText}
          onChange={(e) => set_searchText(e.target.value)}
        />
        <button onClick={search}>Search</button>
      </p>
      <div className="image-list">
        {films.map((film) => {
          return (
            <Link key={film.imdbID} to={`/discover/${film.imdbID}`}>
              <Film title={film.Title} year={film.Year} img={film.Poster} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
