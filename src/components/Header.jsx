import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
     <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="index.html">
          <img style={{ marginRight: '0px' }} src="assets/1st-logo.jpg" className="img-fluid logo-image" alt="Logo" />

          <div className="d-flex flex-column">
            <strong className="logo-text">Internee<span style={{ color: 'black' }}>.pk</span></strong>
            <small style={{ fontSize: '10.5px' }} className="logo-slogan">Virtual Internship PLATFORM</small>
          </div>
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav align-items-center ms-lg-5">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/internship">Internships</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="https://lms-internee-pk.great-site.net/">LMS</a>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="job portal coming soon">Job Portal<sup>Coming Soon</sup></Link>
            </li>

            <li className="nav-item ms-lg-auto">
              <a className="nav-link" href="#"></a>
            </li>

            <li className="nav-item">
              <Link className="nav-link custom-btn btn" to="http://internee-pk.great-site.net/">Internee Portal</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
  
    </>
  )
}

export default Header