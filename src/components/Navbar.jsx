import { useState } from "react";
import { Link } from "react-router-dom";
import '../stylesheets/navbarStyle.css';
import { motion } from "framer-motion";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const navLinks = [
    { id: "dataStructures", title: "Data Structures" },
    { id: "algorithms", title: "Algorithms" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link
          to="/"
          className="navbar-logo"
          onClick={() => setActive("")}
        >
          <p className="logo-text">
            AlgorithmVisualiser
          </p>
        </Link>

        <ul className="nav-links">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`nav-item ${active === nav.title ? "active" : ""}`}
              onClick={() => setActive(nav.title)}
            >
              <Link to={`/${nav.id}`} className="nav-link">
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>


        <div className="hamburger-container">
          <img
            src={toggle ? close : menu}
            alt='menu'
            className="hamburger-icon"
            onClick={() => setToggle(!toggle)}
          />

          <div
            style={{ display: toggle ? "flex" : "none" }}
            className="hamburgerMenu-container  black-gradient"
          >
            <ul className="hamburgerMenu-nav-links">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className=""
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                <Link to={`/${nav.id}`}>
                  {nav.title}
                </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>


     

      </div>
    </nav>
  );
};

export default Navbar;
