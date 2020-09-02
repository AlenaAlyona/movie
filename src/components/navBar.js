import React from "react";
import {
  Switch,
  Route,
  NavLink,
  BrowserRouter as Router,
} from "react-router-dom";
import Home from "../pages/AboutPage";
import About from "../pages/AboutPage";
import DiscoverMovies from "../pages/DiscoverMoviesPage";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/discover" className="nav-link">
              Discover Movies
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
    </div>
  );
}
