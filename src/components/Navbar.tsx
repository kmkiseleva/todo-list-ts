import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => (
  <nav>
    <div className="nav-wrapper pink darken-3 px1">
      <a href="/" className="brand-logo">
        React + Typescript
      </a>
      <ul className="right hide-on-med-and-down">
        <li>
          <NavLink to="/todo-list-ts">Todo List</NavLink>
        </li>
        <li>
          <NavLink to="/todo-list-ts/about">About</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
