import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  let [click, setClick] = useState(true);
  return (
    <>
      <nav
        id={click ? "nav-bar" : "nav-bar-hamburger"}
        style={{
          backgroundColor: props.mode === "dark" ? "black" : "#e38b9b",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <Link
          to="/"
          id="nav-logo"
          style={{
            color: props.mode === "dark" ? "white" : "black",
            textShadow:
              props.mode === "light" ? "0px 2px white" : "0px 0px gray",
          }}
        >
          TextAnalyzer
        </Link>

        <ul id={click ? "nav-list" : "nav-list-hamburger"}>
          <li className="nav-list-li">
            <Link
              to="/"
              className="nav-list-elements"
              style={{ color: props.mode === "dark" ? "white" : "black" }}
            >
              Home
            </Link>
          </li>

          <li className="nav-list-li">
            <Link
              to="/About"
              className="nav-list-elements"
              style={{ color: props.mode === "dark" ? "white" : "black" }}
            >
              About Us
            </Link>
          </li>
          <li className="nav-list-li">
            <Link
              to="/Contact"
              className="nav-list-elements"
              style={{ color: props.mode === "dark" ? "white" : "black" }}
            >
              Contact Us
            </Link>
          </li>
          <li className="nav-list-li">
            <a
              className="nav-list-elements"
              id="btn_mode"
              onClick={props.toggleMode}
              style={{ color: props.mode === "dark" ? "white" : "black" }}
            >
              {props.btn_mode_name}
            </a>
          </li>
        </ul>

        <div id="hamburger" onClick={() => setClick(!click)}>
          <div className="hamburger-d"></div>
          <div className="hamburger-d"></div>
          <div className="hamburger-d"></div>
        </div>
      </nav>
    </>
  );
}
Navbar.propTypes = {
  title: PropTypes.string,
};
Navbar.defaultProps = {
  title: "My App",
};
