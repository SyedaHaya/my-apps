import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12 mb-3">
              <div
                style={{ marginLeft: "-20px" }}
                className="d-flex align-items-center mb-4"
              >
                <img
                  style={{ marginRight: "0px" }}
                  src="assets/1st-logo.jpg"
                  className="img-fluid logo-image"
                  alt="Logo"
                />

                <div className="d-flex flex-column">
                  <strong className="logo-text">
                    Internee<span style={{ color: "black" }}>.pk</span>
                  </strong>
                  <small style={{ fontSize: "10.5px" }} className="logo-slogan">
                    Virtual Internship PLATFORM
                  </small>
                </div>
              </div>

              <p className="mb-2">
                <i className="custom-icon bi-globe me-1"></i>
                <Link to="https://www.internee.pk/" className="site-footer-link">
                  www.internee.pk
                </Link>
              </p>

              <p className="mb-2">
                <i className="custom-icon bi-telephone me-1"></i>
                <Link
                  to="https://api.whatsapp.com/send/?phone=%2B923453191638&text&app_absent=0"
                  className="site-footer-link"
                >
                  +92 345 3191638 <br /> &nbsp; &nbsp; &nbsp; +92 349 2861021
                </Link>
              </p>

              <p>
                <i className="custom-icon bi-envelope me-1"></i>
                <Link to="mailto:info@internee.pk" className="site-footer-link">
                  info@internee.pk
                </Link>
              </p>
            </div>

            <div className="col-lg-2 col-md-3 col-6 ms-lg-auto">
              <h6 className="site-footer-title">Company</h6>

              <ul className="footer-menu">
                <li className="footer-menu-item">
                  <Link to="/" className="footer-menu-link">
                    Home
                  </Link>
                </li>
                <li className="footer-menu-item">
                  <Link to="/about" className="footer-menu-link">
                    About
                  </Link>
                </li>
                <li className="footer-menu-item">
                  <Link to="/job-listings" className="footer-menu-link">
                    Internships
                  </Link>
                </li>
                <li className="footer-menu-item">
                  <Link to="/contact" className="footer-menu-link">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-3 col-6">
              <h6 className="site-footer-title">Resources</h6>

              <ul className="footer-menu">
                <li className="footer-menu-item">
                  <Link to="/soon.html" className="footer-menu-link">
                    Discord Server
                  </Link>
                </li>
                <li className="footer-menu-item">
                  <Link to="/soon" className="footer-menu-link">
                    Blog
                  </Link>
                </li>
                <li className="footer-menu-item">
                  <Link to="/policy" className="footer-menu-link">
                    Podcast
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-8 col-12 mt-3 mt-lg-0">
              <h6 className="site-footer-title"></h6>

              <form
                className="custom-form newsletter-form"
                action="https://formsubmit.co/hammadn788@gmail.com"
                method="POST"
                role="form"
              >
                <h6 className="site-footer-title">
                  Get Updates About Internships
                </h6>

                <div className="input-group">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="bi-person"></i>
                  </span>
                  <input
                    type="text"
                    name="newsletter-name"
                    id="newsletter-name"
                    className="form-control"
                    placeholder="yourname@gmail.com"
                    required
                  />
                  <button type="submit" className="form-control">
                    <i className="bi-send"></i>
                  </button>
                </div>
                <br />
              </form>
            </div>
          </div>
        </div>

        <div className="site-footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-12 d-flex align-items-center">
                <p className="copyright-text">Copyright © Internee.pk 2024</p>

                <ul className="footer-menu d-flex">
                  <li className="footer-menu-item">
                    <Link to="/policy" className="footer-menu-link">
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="footer-menu-item">
                    <Link  to="/policy" className="footer-menu-link">
                      Terms
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-5 col-12 mt-2 mt-lg-0">
                <ul className="social-icon">
                  <li className="social-icon-item">
                    <Link
                      to="https://twitter.com/Internee_pk"
                      className="social-icon-link bi-twitter"
                    ></Link>
                  </li>

                  <li className="social-icon-item">
                    <Link
                      to="https://www.facebook.com/profile.php?id=100092672087043"
                      className="social-icon-link bi-facebook"
                    ></Link>
                  </li>

                  <li className="social-icon-item">
                    <Link
                      to="https://www.linkedin.com/in/internee-pk-1ba44a276/"
                      className="social-icon-link bi-linkedin"
                    ></Link>
                  </li>

                  <li className="social-icon-item">
                    <Link
                      to="https://www.instagram.com/internee.pk/"
                      className="social-icon-link bi-instagram"
                    ></Link>
                  </li>

                  <li className="social-icon-item">
                    <Link
                      to="https://www.youtube.com/channel/UCKmNYb6PiShShRf-ZI2O8Ag"
                      className="social-icon-link bi-youtube"
                    ></Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-12 mt-2 d-flex align-items-center mt-lg-0">
                <p>
                  Powered By:{" "}
                  <Link
                    className="sponsored-link"
                    rel="sponsored"
                    to="http://techviochats.epizy.com/?i=1"
                    target="_blank"
                  >
                    Techvio Chats
                  </Link>
                </p>
              </div>

              <Link
                className="back-top-icon bi-arrow-up smoothscroll d-flex justify-content-center align-items-center"
                to="#top"
              ></Link>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer