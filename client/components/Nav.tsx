import React from 'react'
import { Link } from 'react-router-dom'
import TopText from './TopText'


const Nav = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg  navbar-dark">
    <div className="container-fluid">
      <a className="navbar-brand   logo" href="#">Eleetcoder</a>
      <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon "></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active  a-hover ms-5 text-white" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link  a-hover ms-5 text-white" href="#">Problems</a>
          </li>
        </ul>
        <Link to="/login">
        <div className='login ms-lg-auto ms-3'>Log in </div>
        </Link>
      </div>
    </div>
    
  </nav>
  <TopText></TopText>
  </div>
  )
}

export default Nav