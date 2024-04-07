import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/images/logo.svg";
import { Navbar } from "react-bootstrap";
import "../../style/custom.css";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar
      expanded={expanded}
      expand="lg"
      className={`navbar navbar-expand-lg navbar-light
      ${!expanded ? "custom-primary" : ""}
      `}
    >
      <div className="container-fluid">
        <Navbar.Brand>
          <Link className="navbar-brand" to="/">
            {!expanded && <img src={Logo} alt="Logo" />}
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav "
          onClick={toggleExpanded}
          className="border-0"
        >
          <span>
            {expanded ? (
              <FontAwesomeIcon icon={faTimes} color="black" />
            ) : (
              <FontAwesomeIcon icon={faBars} color="white" />
            )}
          </span>
        </Navbar.Toggle>
        <Navbar.Collapse
          className={"collapse navbar-collapse justify-content-end"}
          id="navbarNav"
        >
          <ul className={`navbar-nav`}>
            <li className="nav-item d-md-none">
              <Link
                className={`nav-link ${!expanded ? "text-white" : ""}`}
                to="/"
              >
                HOME
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${!expanded ? "text-white" : ""}`}
                to="/services"
              >
                SERVICES
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${!expanded ? "text-white" : ""}`}
                to="/about"
              >
                ABOUT US
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${!expanded ? "text-white" : ""}`}
                to="/contact"
              >
                CONTACT US
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${!expanded ? "text-white" : ""}`}
                to="/careers"
              >
                CAREERS
              </Link>
            </li>
          </ul>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
