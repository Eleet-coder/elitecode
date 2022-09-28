import React from "react";

const Problems = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark px-3">
        <div className="container-fluid">
          <a className="navbar-brand   logo" href="#">
            Eleetcoder
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#problemNav"
          >
            <span className="nav-bar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="problemNav">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-light"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Catagories
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      BST
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Link-List
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Arrays
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link  a-hover ms-5 text-white" href="#">
                  Problems
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div id="problem-cards">
        <div className="card-container">
          <div>
            Problem
            <br />
            <p>
              <b>Prompt: </b> xxxxxxx....
            </p>
            <br />
            <button>difficult</button>
            <button>attempt</button>
          </div>
        </div>
        <div className="card-container">
          <div>
            Problem
            <br />
            <p>
              <b>Prompt: </b> xxxxxxx....
            </p>
            <br />
            <button>difficult</button>
            <button>attempt</button>
          </div>
        </div>
        <div className="card-container">
          <div>
            Problem
            <br />
            <p>
              <b>Prompt: </b> xxxxxxx....
            </p>
            <br />
            <button>difficult</button>
            <button>attempt</button>
          </div>
        </div>
        <div className="card-container">
          <div>
            Problem
            <br />
            <p>
              <b>Prompt: </b> xxxxxxx....
            </p>
            <br />
            <button>difficult</button>
            <button>attempt</button>
          </div>
        </div>
      </div>
      {/* <div class="container text-center text-white">
        <div class="row row-cols-2">
          <div class="col">
            Problem
            <br />
            <p1><b>Prompt: </b> xxxxxxx....</p1>
            <br/>
            <button>difficult</button>
            <button>attempt</button>
          </div>
          <div class="col">
            Problem
            <br />
            <button>difficult</button>
            <button>attempt</button>
          </div>
          <div class="col">
            Problem
            <br />
            <button>difficult</button>
            <button>attempt</button>
          </div>
          <div class="col">
            Problem
            <br />
            <button>difficult</button>
            <button>attempt</button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Problems;
