import React from "react";
import "./nav.css";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
const Navbar = ({icon, title}) => {
  return (
    <nav className=" container navbar navbar-expand-lg navbar-light bg-light">
      <h1 className="navbar-brand">
        <i className={icon}></i> {title}
      </h1>
      <ul>
        <li className=" me-3">
          <Link to="/">Home </Link>
        </li>
        <li>
          <Link to="/About">about </Link>
        </li>
      </ul>
    </nav>
  );
};
Navbar.defaultProps = {
  title: "Github finder",
  icon: "bi bi-github",
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
