import React from "react";
import "./App.css";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import navBar from "./components/navBar";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import DiscoverMovies from "./pages/DiscoverMoviesPage";

function App() {
  return (
    <div className="App">
      <navBar />
      <Switch>
        <Route path="/discover" component={DiscoverMovies} />
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
