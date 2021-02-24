import React from "react";
import { Link } from "react-router-dom";

function Header(){
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-secondary navbar-light custom-navbar">
        <h1 className="navbar-brand nav-title">Memory Lane Flash Card Maker!!</h1>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className= "nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className= "nav-link" to="/signin">Sign In/Out</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;