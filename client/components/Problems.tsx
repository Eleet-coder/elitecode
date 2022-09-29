import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Problems = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const username = urlParams.get('user')
  const [problems, setProblems] = useState<any[]>([]);
  //     axios
  //     .get("http://localhost:3000/getProblems")
  //     .then(function (data) {
  //       const newProb = [];
  //       data.forEach((ele) => {
  //         newProb.push(
  //           <div className="card-container">
  //             <div>
  //               ${ele.problem_name}
  //               <br />
  //               <p>
  //                 <b>Prompt: </b> ${ele.prompt}
  //               </p>
  //               <br />
  //               <button>difficult</button>
  //               <button>attempt</button>
  //             </div>
  //           </div>
  //         );
  //         setProblems([ ...newProb ]);
  //       });
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);
  useEffect(() => {
      axios
      .get("http://localhost:3000/getProblems")
      .then(function (data:any) {
        console.log('problem data: ', data);
        let k = 100;
        let array = data.data.map((problem) => (
          <div className="card-container" key={k++}>
            <div className="border border-light p-2 text-center fs-1">
              {problem.problems_name}
            <p>
              {/* <b>Prompt: </b> {problem.prompt} */}
            </p>
            <p>
              difficulty: med
            </p>
            <Link to='/code' style={{ textDecoration: 'none' }}>
              <button className="btn2">attempt</button>
              </Link>
            </div>
          </div>  
        ))
        setProblems([...array]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark px-3">
        <div className="container-fluid">
          <a className="navbar-brand   logo" href="/">
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
        <div className="text-light fs-1">{username}</div>
      </nav>

      <div id="problem-cards">
        <div className="card-container">
          <div className="border border-light p-2 text-center fs-1">
            Twosum          
            <br />
            <div>difficulty:easy</div>
            <div className="d-flex justify-content-center">
            <Link to='/code' style={{ textDecoration: 'none' }}>
            <button className="btn2 " >attempt</button>
            </Link>
            </div>
          </div>
        </div>
        
        {problems}
      </div>
    </div>
  );
};

export default Problems;
