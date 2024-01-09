import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a
            className="navbar-brand d-flex align-items-center"
            href="index.html"
          >
            <img
              style={{ marginRight: "0px" }}
              src="assets/1st-logo.jpg"
              className="img-fluid logo-image"
            />

            <div className="d-flex flex-column">
              <strong className="logo-text">
                Internee<span style={{ color: "black" }}>.pk</span>
              </strong>
              <small style={{ fontSize: "10.5px" }} className="logo-slogan">
                Virtual Internship PLATFORM
              </small>
            </div>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav align-items-center ms-lg-5">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="about">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="internship">
                  Internships
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="contact">
                  Contact
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="https://lms-internee-pk.great-site.net/"
                >
                  LMS<sup>New</sup>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="job portal coming soon">
                  Job Portal<sup>Coming Soon</sup>
                </Link>
              </li>

              <li className="nav-item ms-lg-auto">
                <Link className="nav-link" to="#"></Link>
              </li>

              <li className="nav-item">
                
                  Internee Portal
                
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="hero-section d-flex justify-content-center align-items-center">
        <div
          style={{ backgroundColor: "#376828" }}
          className="section-overlay"
        ></div>

        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 mb-5 mb-lg-0">
              <div className="hero-section-text mt-5">
                <h6 className="text-white">
                  Are you looking for your dream Internship ?
                </h6>

                <h1 className="hero-title text-white mt-4 mb-4">
                  Join <br /> Internee.pk now..!
                </h1>
                <p style={{ color: "white" }}>
                  Pakistan's Virtual Internship Platform Powered By
                  <Link
                    to="https://techviochats.com/"
                    style={{ fontWeight: "bold", color: "rgb(208, 228, 255)" }}
                  >
                    TechvioChats
                  </Link>
                </p>

                <Link
                  to="job portal coming soon"
                  style={{ color: "white", border: "2px solid white" }}
                  id="styling"
                  className="custom-btn custom-border-btn btn styling"
                >
                  Browse Internships
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <br />
      <br />
      <br />

      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-12">
              <div
                style={{ backgroundColor: "green" }}
                className="about-image-wrap custom-border-radius-start"
              >
                <img
                  src="assets/images/founder.jpg"
                  className="about-image custom-border-radius-start img-fluid"
                  alt=""
                />

                <div className="about-info">
                  <h4 className="text-white mb-0 me-2">Hammad Sheikh</h4>
                  <p className="text-white mb-0">Founder</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <div className="custom-text-block">
                <h2 className="text-white mb-2">Welcome to Internee.pk</h2>
                <p className="text-white">
                  Our internship program is designed to give students the
                  opportunity to work on meaningful projects and tasks, while
                  also receiving mentorship and guidance from experienced
                  professionals in the field. Our goal is to help interns
                  develop the skills and knowledge they need to succeed in their
                  careers, while also building a strong network of talented
                  individuals who may become valuable members of our team in the
                  future. If you're looking for a challenging and rewarding
                  internship experience, we invite you to explore our program
                  and{" "}
                  <Link
                    to="internship "
                    style={{ color: "#30e792", fontWeight: "bolder" }}
                    target="_parent"
                  >
                    Apply Today
                  </Link>
                </p>

                <div className="custom-border-btn-wrap d-flex align-items-center mt-5">
                  <Link
                    to="about"
                    className="custom-btn custom-border-btn btn me-4"
                  >
                    Get to know us
                  </Link>

                  <Link
                    to="internship"
                    className="custom-link smoothscroll"
                  >
                    Explore Internships
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-12">
              <div className="instagram-block">
                <img
                  src="assets/images/rayyan.jpg"
                  className="about-image custom-border-radius-end img-fluid"
                  alt=""
                />
                <div className="about-info">
                  <h4 className="text-white mb-0 me-2">Rayyan Zain</h4>
                  <p className="text-white mb-0">CMO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="categories-section section-padding"
        id="categories-section"
      >
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12 col-12 text-center">
              <h2 className="mb-5">
                Browse by <span>Categories</span>
              </h2>
            </div>

            <div className="col-lg-2 col-md-4 col-6">
              <div className="categories-block">
                <Link
                  to="web-design"
                  className="d-flex flex-column justify-content-center align-items-center h-100"
                >
                  <i className="categories-icon bi-window"></i>

                  <small className="categories-block-title">
                    Website Designing{" "}
                  </small>

                  <div className="categories-block-number d-flex flex-column justify-content-center align-items-center">
                    <span className="categories-block-number-text">05</span>
                  </div>
                </Link>
              </div>
            </div>

            <div className="col-lg-2 col-md-4 col-6">
              <div className="categories-block">
                <Link
                  to="web-development"
                  className="d-flex flex-column justify-content-center align-items-center h-100"
                >
                  <i className="categories-icon bi-globe"></i>

                  <small to="listing" className="categories-block-title">
                    {" "}
                    Web Development{" "}
                  </small>

                  <div className="categories-block-number d-flex flex-column justify-content-center align-items-center">
                    <span className="categories-block-number-text">05</span>
                  </div>
                </Link>
              </div>
            </div>

            <div className="col-lg-2 col-md-4 col-6">
              <div className="categories-block">
                <Link
                  to="chatbot"
                  className="d-flex flex-column justify-content-center align-items-center h-100"
                >
                  <i className="categories-icon bi-robot"></i>
                  <small className="categories-block-title">
                    CRM's & Chatbot Development
                  </small>
                  <div className="categories-block-number d-flex flex-column justify-content-center align-items-center">
                    <span className="categories-block-number-text">04</span>
                  </div>
                </Link>
              </div>
            </div>

            <div className="col-lg-2 col-md-4 col-6">
              <div className="categories-block">
                <Link
                  to="graphic"
                  className="d-flex flex-column justify-content-center align-items-center h-100"
                >
                  <i className="categories-icon bi-vector-pen"></i>

                  <small className="categories-block-title">
                    Graphic Designing & 3D Modeling
                  </small>

                  <div className="categories-block-number d-flex flex-column justify-content-center align-items-center">
                    <span className="categories-block-number-text">05</span>
                  </div>
                </Link>
              </div>
            </div>

            <div className="col-lg-2 col-md-4 col-6">
              <div className="categories-block">
                <Link
                  to="mobile-development"
                  className="d-flex flex-column justify-content-center align-items-center h-100"
                >
                  <i className="categories-icon bi-phone"></i>

                  <small className="categories-block-title">
                    Mobile Application Development
                  </small>

                  <div className="categories-block-number d-flex flex-column justify-content-center align-items-center">
                    <span className="categories-block-number-text">06</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      <section className="job-section recent-jobs-section section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12 mb-4">
              <h2>Recent Internships</h2>
              <p>
                <strong>Internships come every two months</strong> Grab your
                internships in your favorite domain to boost yourself in the
                field of Computer Technology
              </p>
            </div>

            <div className="clearfix"></div>

            {/* Machine Learning */}
            <div className="col-lg-4 col-md-6 col-12">
              <div className="job-thumb job-thumb-box">
                <div className="job-image-box-wrap">
                  <a href="https://forms.gle/3e2bWbthoNJvj7999">
                    <img
                      height="130"
                      src="assets/images/jobs/analysis.jpg"
                      className="job-image img-fluid"
                      alt=""
                    />
                  </a>
                </div>

                <div className="job-body">
                  <h4 className="job-title">
                    <a
                      href="https://forms.gle/3e2bWbthoNJvj7999"
                      className="job-title-link"
                    >
                      Data Analyst
                    </a>
                  </h4>

                  <div className="d-flex align-items-center">
                    <p className="job-location">
                      <i className="custom-icon bi-geo-alt me-1"></i> Remote
                    </p>

                    <p className="job-date">
                      <i className="custom-icon bi-clock me-1"></i> 1 Month
                    </p>
                  </div>

                  <div className="d-flex align-items-center border-top pt-3">
                    <a
                      href="https://forms.gle/3e2bWbthoNJvj7999"
                      className="custom-btn btn ms-auto"
                    >
                      Apply now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Development */}
            <div className="col-lg-4 col-md-6 col-12">
              <div className="job-thumb job-thumb-box">
                <div className="job-image-box-wrap">
                  <a href="https://forms.gle/jxkmaCWHZA8wyHYGA">
                    <img
                      height="130"
                      src="assets/images/jobs/hack.jpeg"
                      className="job-image img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div className="job-body">
                  <h4 className="job-title">
                    <a
                      href="https://forms.gle/jxkmaCWHZA8wyHYGA"
                      className="job-title-link"
                    >
                      Cyber Security
                    </a>
                  </h4>
                  <div className="d-flex align-items-center">
                    <p className="job-location">
                      <i className="custom-icon bi-geo-alt me-1"></i> Remote
                    </p>

                    <p className="job-date">
                      <i className="custom-icon bi-clock me-1"></i> 1 Month
                    </p>
                  </div>
                  <div className="d-flex align-items-center border-top pt-3">
                    <a
                      href="https://forms.gle/jxkmaCWHZA8wyHYGA"
                      className="custom-btn btn ms-auto"
                    >
                      Apply now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Graphic Design */}
            <div className="col-lg-4 col-md-6 col-12">
              <div className="job-thumb job-thumb-box">
                <div className="job-image-box-wrap">
                  <a href="https://forms.gle/JG5kUmwFuzYjvP248">
                    <img
                      height="130"
                      src="assets/images/jobs/cloud.jpg"
                      className="job-image img-fluid"
                      alt=""
                    />
                  </a>
                </div>

                <div className="job-body">
                  <h4 className="job-title">
                    <a
                      href="https://forms.gle/JG5kUmwFuzYjvP248"
                      className="job-title-link"
                    >
                      Cloud Computing
                    </a>
                  </h4>

                  <div className="d-flex align-items-center">
                    <p className="job-location">
                      <i className="custom-icon bi-geo-alt me-1"></i> Remote
                    </p>

                    <p className="job-date">
                      <i className="custom-icon bi-clock me-1"></i> 1 Month
                    </p>
                  </div>

                  <div className="d-flex align-items-center border-top pt-3">
                    <a
                      href="https://forms.gle/JG5kUmwFuzYjvP248"
                      className="custom-btn btn ms-auto"
                    >
                      Apply now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Front End Card */}
            <div className="col-lg-4 col-md-6 col-12">
              <div className="job-thumb job-thumb-box">
                <div className="job-image-box-wrap">
                  <a href="/web-design.html">
                    <img
                      src="assets/images/jobs/FrontEnd.jpeg"
                      className="job-image img-fluid"
                      alt=""
                    />
                  </a>
                </div>

                <div className="job-body">
                  <h4 className="job-title">
                    <a href="/web-design.html" className="job-title-link">
                      Frontend Development
                    </a>
                  </h4>

                  <div className="d-flex align-items-center">
                    <p className="job-location">
                      <i className="custom-icon bi-geo-alt me-1"></i> Remote
                    </p>

                    <p className="job-date">
                      <i className="custom-icon bi-clock me-1"></i> 1 Month
                    </p>
                  </div>

                  <div className="d-flex align-items-center border-top pt-3">
                    <p className="job-price mb-0"></p>
                    <a
                      href="/web-design.html"
                      className="custom-btn btn ms-auto"
                    >
                      Apply now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Backend Card */}
            <div className="col-lg-4 col-md-6 col-12">
              <div className="job-thumb job-thumb-box">
                <div className="job-image-box-wrap">
                  <a href="/web-development.html">
                    <img
                      width="1000"
                      height="667"
                      src="assets/images/jobs/BackendDevelopment.jpeg"
                      className="job-image img-fluid"
                      alt="marketing assistant"
                    />
                  </a>
                </div>

                <div className="job-body">
                  <h4 className="job-title">
                    <a href="/web-development.html" className="job-title-link">
                      Backend Development
                    </a>
                  </h4>

                  <div className="d-flex align-items-center"></div>

                  <div className="d-flex align-items-center">
                    <p className="job-location">
                      <i className="custom-icon bi-geo-alt me-1"></i> Remote
                    </p>

                    <p className="job-date">
                      <i className="custom-icon bi-clock me-1"></i> 1 Month
                    </p>
                  </div>

                  <div className="d-flex align-items-center border-top pt-3">
                    <p className="job-price mb-0"></p>
                    <a
                      href="/web-development.html"
                      className="custom-btn btn ms-auto"
                    >
                      Apply now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Chatbot Development */}
            <div className="col-lg-4 col-md-6 col-12">
              <div className="job-thumb job-thumb-box">
                <div className="job-image-box-wrap">
                  <a href="/chatbot.html">
                    <img
                      src="assets/images/jobs/chatbotDevelopment.jpeg"
                      className="job-image img-fluid"
                      alt=""
                    />
                  </a>
                </div>

                <div className="job-body">
                  <h4 className="job-title">
                    <a href="/chatbot.html" className="job-title-link">
                      Chatbot Development
                    </a>
                  </h4>

                  <div className="d-flex align-items-center">
                    <p className="job-location">
                      <i className="custom-icon bi-geo-alt me-1"></i> Remote
                    </p>

                    <p className="job-date">
                      <i className="custom-icon bi-clock me-1"></i> 1 Month
                    </p>
                  </div>

                  <div className="d-flex align-items-center border-top pt-3">
                    <a href="/chatbot.html" className="custom-btn btn ms-auto">
                      Apply now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Machine Learning */}
            <div className="col-lg-4 col-md-6 col-12">
              <div className="job-thumb job-thumb-box">
                <div className="job-image-box-wrap">
                  <a href="https://forms.gle/h16QDGvAGpTEz7Ko7">
                    <img
                      height="130"
                      src="assets/images/jobs/Machine Learning.jpeg"
                      className="job-image img-fluid"
                      alt=""
                    />
                  </a>
                </div>

                <div className="job-body">
                  <h4 className="job-title">
                    <a
                      href="https://forms.gle/h16QDGvAGpTEz7Ko7"
                      className="job-title-link"
                    >
                      Machine Learning
                    </a>
                  </h4>

                  <div className="d-flex align-items-center">
                    <p className="job-location">
                      <i className="custom-icon bi-geo-alt me-1"></i> Remote
                    </p>

                    <p className="job-date">
                      <i className="custom-icon bi-clock me-1"></i> 1 Month
                    </p>
                  </div>

                  <div className="d-flex align-items-center border-top pt-3">
                    <a
                      href="https://forms.gle/h16QDGvAGpTEz7Ko7"
                      className="custom-btn btn ms-auto"
                    >
                      Apply now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Development */}
            <div className="col-lg-4 col-md-6 col-12">
              <div className="job-thumb job-thumb-box">
                <div className="job-image-box-wrap">
                  <a href="/mobile-development.html">
                    <img
                      height="130"
                      src="assets/images/jobs/Mobile App Developer.jpeg"
                      className="job-image img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div className="job-body">
                  <h4 className="job-title">
                    <a
                      href="/mobile-development.html"
                      className="job-title-link"
                    >
                      Mobile App Development
                    </a>
                  </h4>
                  <div className="d-flex align-items-center">
                    <p className="job-location">
                      <i className="custom-icon bi-geo-alt me-1"></i> Remote
                    </p>

                    <p className="job-date">
                      <i className="custom-icon bi-clock me-1"></i> 1 Month
                    </p>
                  </div>

                  <div className="d-flex align-items-center border-top pt-3">
                    <a
                      href="/mobile-development.html"
                      className="custom-btn btn ms-auto"
                    >
                      Apply now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Graphic Design */}
            <div className="col-lg-4 col-md-6 col-12">
              <div className="job-thumb job-thumb-box">
                <div className="job-image-box-wrap">
                  <a href="/graphic.html">
                    <img
                      height="130"
                      src="assets/images/jobs/logo-designer-working-computer-desktop.jpg"
                      className="job-image img-fluid"
                      alt=""
                    />
                  </a>
                </div>

                <div className="job-body">
                  <h4 className="job-title">
                    <a href="/graphic.html" className="job-title-link">
                      Graphic Design
                    </a>
                  </h4>

                  <div className="d-flex align-items-center">
                    <p className="job-location">
                      <i className="custom-icon bi-geo-alt me-1"></i> Remote
                    </p>

                    <p className="job-date">
                      <i className="custom-icon bi-clock me-1"></i> 1 Month
                    </p>
                  </div>

                  <div className="d-flex align-items-center border-top pt-3">
                    <a href="/graphic.html" className="custom-btn btn ms-auto">
                      Apply now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-12 recent-jobs-bottom d-flex ms-auto my-4">
              <a href="job-listings.html" className="custom-btn btn ms-lg-auto">
                Browse Internship
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="reviews-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <h2 className="text-center mb-5">Happy Intern Reviews</h2>

              <div className="owl-carousel owl-theme reviews-carousel">
                <div className="reviews-thumb">
                  <div className="reviews-info d-flex align-items-center">
                    <img
                      src="/images/obaid.jfif"
                      className="avatar-image img-fluid"
                      alt=""
                    />

                    <div className="d-flex align-items-center justify-content-between flex-wrap w-100 ms-3">
                      <p className="mb-0">
                        <strong>Obaid Muneer</strong>
                        <small>AI & Chatbot Developer</small>
                      </p>

                      <div className="reviews-icons">
                        <i className="bi-star-fill"></i>
                        <i className="bi-star-fill"></i>
                        <i className="bi-star-fill"></i>
                        <i className="bi-star-fill"></i>
                        <i className="bi-star-fill"></i>
                      </div>
                    </div>
                  </div>

                  <div className="reviews-body">
                    <img
                      src="images/left-quote.png"
                      className="quote-icon img-fluid"
                      alt=""
                    />
                    <h5 className="reviews-title">
                      This internship gives me challenges through which it helps
                      me grow myself in the field of Chatbot development
                    </h5>
                  </div>
                </div>

                {/* ... (similar blocks for other reviews) ... */}

                <div className="reviews-thumb">
                  <div className="reviews-info d-flex align-items-center">
                    <img
                      src="/images/hafsa.jpg"
                      className="avatar-image img-fluid"
                      alt=""
                    />

                    <div className="d-flex align-items-center justify-content-between flex-wrap w-100 ms-3">
                      <p className="mb-0">
                        <strong>Hafsa Nadeem</strong>
                        <small>Web Developer</small>
                      </p>

                      <div className="reviews-icons">
                        <i className="bi-star-fill"></i>
                        <i className="bi-star-fill"></i>
                        <i className="bi-star-fill"></i>
                        <i className="bi-star-fill"></i>
                        <i className="bi-star-fill"></i>
                      </div>
                    </div>
                  </div>

                  <div className="reviews-body">
                    <img
                      src="images/left-quote.png"
                      className="quote-icon img-fluid"
                      alt=""
                    />
                    <h5 className="reviews-title">
                      Internee.pk helps me to scale my programming skills, and
                      now I am good in JAVASCRIPT programming, especially in
                      Front End development
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#376828" }} className="cta-section">
        <div
          style={{ backgroundColor: "#376828" }}
          className="section-overlay"
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-10">
              <h2 className="text-white mb-2">Internships every month</h2>
              <p className="text-white">
                Introducing Internee.pk, the ultimate platform designed to
                turbocharge the IT sector in Pakistan! We recognize the immense
                potential of talented individuals in the country and aim to
                bridge the gap between them and the thriving IT industry.
                Internee.pk offers a comprehensive range of virtual internship
                opportunities exclusively in the IT field.
              </p>
            </div>
          </div>
        </div>
      </section>

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
                <a href="https://www.internee.pk/" className="site-footer-link">
                  www.internee.pk
                </a>
              </p>

              <p className="mb-2">
                <i className="custom-icon bi-telephone me-1"></i>
                <a
                  href="https://api.whatsapp.com/send/?phone=%2B923453191638&text&app_absent=0"
                  className="site-footer-link"
                >
                  +92 345 3191638 <br /> &nbsp; &nbsp; &nbsp; +92 349 2861021
                </a>
              </p>

              <p>
                <i className="custom-icon bi-envelope me-1"></i>
                <a href="mailto:info@internee.pk" className="site-footer-link">
                  info@internee.pk
                </a>
              </p>
            </div>

            <div className="col-lg-2 col-md-3 col-6 ms-lg-auto">
              <h6 className="site-footer-title">Company</h6>

              <ul className="footer-menu">
                <li className="footer-menu-item">
                  <a href="/index.html" className="footer-menu-link">
                    Home
                  </a>
                </li>
                <li className="footer-menu-item">
                  <a href="/about.html" className="footer-menu-link">
                    About
                  </a>
                </li>
                <li className="footer-menu-item">
                  <a href="/job-listings.html" className="footer-menu-link">
                    Internships
                  </a>
                </li>
                <li className="footer-menu-item">
                  <a href="/contact.html" className="footer-menu-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-3 col-6">
              <h6 className="site-footer-title">Resources</h6>

              <ul className="footer-menu">
                <li className="footer-menu-item">
                  <a href="/soon.html" className="footer-menu-link">
                    Discord Server
                  </a>
                </li>
                <li className="footer-menu-item">
                  <a href="/soon.html" className="footer-menu-link">
                    Blog
                  </a>
                </li>
                <li className="footer-menu-item">
                  <a href="/policy.html" className="footer-menu-link">
                    Podcast
                  </a>
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
                    <a href="/policy.html" className="footer-menu-link">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="footer-menu-item">
                    <a href="/policy.html" className="footer-menu-link">
                      Terms
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-5 col-12 mt-2 mt-lg-0">
                <ul className="social-icon">
                  <li className="social-icon-item">
                    <a
                      href="https://twitter.com/Internee_pk"
                      className="social-icon-link bi-twitter"
                    ></a>
                  </li>

                  <li className="social-icon-item">
                    <a
                      href="https://www.facebook.com/profile.php?id=100092672087043"
                      className="social-icon-link bi-facebook"
                    ></a>
                  </li>

                  <li className="social-icon-item">
                    <a
                      href="https://www.linkedin.com/in/internee-pk-1ba44a276/"
                      className="social-icon-link bi-linkedin"
                    ></a>
                  </li>

                  <li className="social-icon-item">
                    <a
                      href="https://www.instagram.com/internee.pk/"
                      className="social-icon-link bi-instagram"
                    ></a>
                  </li>

                  <li className="social-icon-item">
                    <a
                      href="https://www.youtube.com/channel/UCKmNYb6PiShShRf-ZI2O8Ag"
                      className="social-icon-link bi-youtube"
                    ></a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-12 mt-2 d-flex align-items-center mt-lg-0">
                <p>
                  Powered By:{" "}
                  <a
                    className="sponsored-link"
                    rel="sponsored"
                    href="http://techviochats.epizy.com/?i=1"
                    target="_blank"
                  >
                    Techvio Chats
                  </a>
                </p>
              </div>

              <a
                className="back-top-icon bi-arrow-up smoothscroll d-flex justify-content-center align-items-center"
                href="#top"
              ></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
