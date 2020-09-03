import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import DiscoverMovies from "./pages/DiscoverMoviesPage";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/discover" component={DiscoverMovies} />
        <Route path="/about" component={About} />
        <Route path="/discover/:imdb_id" component={MoviePage} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
