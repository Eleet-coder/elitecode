import React from "react";
import { Link } from "react-router-dom";
import Feature from "./Feature";
import TopText from "./TopText";

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand   logo" href="#">
            Eleetcoder
          </a>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active  a-hover ms-5 text-white"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item ms-5 mt-2">
         
                <Link to="/problems" style={{ color:'white',textDecoration: "none" }}>
                  <div >Problems</div>
                </Link>
              </li>
            </ul>
            <div className="ms-lg-auto ms-3">
              <Link to="/login" style={{ textDecoration: "none" }}>
                <div className="login ">Log in </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <TopText></TopText>
      <Feature></Feature>
    </div>
  );
};

export default Nav;
