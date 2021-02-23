import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink exact to="/" activeStyle={{ fontWeight: "bold" }}>
        Home
      </NavLink>
      <NavLink exact to="/about" activeStyle={{ fontWeight: "bold" }}>
        About this page
      </NavLink>
      <NavLink exact to="/discover" activeStyle={{ fontWeight: "bold" }}>
        Discover Movies
      </NavLink>
    </div>
  );
}
