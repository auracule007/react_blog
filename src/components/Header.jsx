import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top shadow">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="/img/blogo.png" alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <!-- <span className="navbar-toggler-icon"></span> --> */}
            <i className="fa-solid fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Posts
                </Link>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href=""
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2 w-100 p-3"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary rounded" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* <!-- header done --> */}

      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item h-100 active" data-bs-interval="10000">
          <img src="/img/carousel - 2.jpg" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item h-100" data-bs-interval="2000">
          <img src="/img/carousel - 3.jpg" className="d-block w-100" alt="..."/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    {/* <!-- banner done --> */}

    </>
  );
};
