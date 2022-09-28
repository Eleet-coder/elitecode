import React from 'react'
import { Link } from 'react-router-dom'
import './TopText.css'
const TopText = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center ms-lg-5 mt-5 p-lg-5'>
    <div className='text-center text-light top-text ms-lg-5 mt-lg-5'>Practice Makes Perfect</div>
    <p className='text-center top-text2 ms-lg-5 '><span className='text-light'>Training</span> <span className='text-white-50'>by levels to improve your development skills</span></p>
    <Link to="/code" style={{ textDecoration: 'none' }}>
    <button className=' btn ms-lg-5' id='challengeBtn'>Start Challenge</button>
        </Link>
   
    </div>
  )
}

export default TopText