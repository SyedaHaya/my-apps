import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
export const InternShip = () => {
  return (
    <>
      <Header />
      <header className="site-header">
        <div
          style={{ backgroundColor: "#376828" }}
          className="section-overlay"
        ></div>

        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12 text-center">
              <h1 className="text-white">Internships listings</h1>

              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>

                  <li className="breadcrumb-item active" aria-current="page">
                    Internships listings
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <section className="section-padding pb-0 d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <img
                src="assets/images/4557388.png"
                className="hero-image img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="job-section section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12 mb-lg-4">
              <h3>Internships on Different Tech Domains</h3>
            </div>

            <div className="col-lg-4 col-12 d-flex align-items-center ms-auto mb-5 mb-lg-4"></div>

            {/* Front End Card */}
            <div className="col-lg-4 col-md-6 col-12">
              <div className="job-thumb job-thumb-box">
                <div className="job-image-box-wrap">
                  <Link to="web-design">
                    <img
                      src="assets/images/jobs/FrontEnd.jpeg"
                      className="job-image img-fluid"
                      alt=""
                    />
                  </Link>
                </div>

                <div className="job-body">
                  <h4 className="job-title">
                    <Link to="web-design" className="job-title-link">
                      Frontend Development
                    </Link>
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
                    <Link
                      to="web-design"
                      className="custom-btn btn ms-auto"
                    >
                      Apply now
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Backend Card */}
            <div className="col-lg-4 col-md-6 col-12">
              <div className="job-thumb job-thumb-box">
                <div className="job-image-box-wrap">
                  <Link to="web-development">
                    <img
                      width="1000"
                      height="667"
                      src="assets/images/jobs/BackendDevelopment.jpeg"
                      className="job-image img-fluid"
                      alt="marketing assistant"
                    />
                  </Link>
                </div>

                <div className="job-body">
                  <h4 className="job-title">
                    <Link to="web-development" className="job-title-link">
                      Backend Development
                    </Link>
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
                    <Link
                      to="web-development"
                      className="custom-btn btn ms-auto"
                    >
                      Apply now
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Chatbot Development */}
            <div className="col-lg-4 col-md-6 col-12">
              <div className="job-thumb job-thumb-box">
                <div className="job-image-box-wrap">
                  <Link to="chatbot">
                    <img
                      src="assets/images/jobs/chatbotDevelopment.jpeg"
                      className="job-image img-fluid"
                      alt=""
                    />
                  </Link>
                </div>

                <div className="job-body">
                  <h4 className="job-title">
                    <Link to="chatbot" className="job-title-link">
                      Chatbot Development
                    </Link>
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
                    <Link to="chatbot" className="custom-btn btn ms-auto">
                      Apply now
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Machine Learning */}
            <div className="col-lg-4 col-md-6 col-12">
              <div className="job-thumb job-thumb-box">
                <div className="job-image-box-wrap">
                  <Link to="https://forms.gle/h16QDGvAGpTEz7Ko7">
                    <img
                      height="130"
                      src="assets/images/jobs/Machine Learning.jpeg"
                      className="job-image img-fluid"
                      alt=""
                    />
                  </Link>
                </div>

                <div className="job-body">
                  <h4 className="job-title">
                    <Link
                      to="https://forms.gle/h16QDGvAGpTEz7Ko7"
                      className="job-title-link"
                    >
                      Machine Learning
                    </Link>
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
                    <Link
                      to="https://forms.gle/h16QDGvAGpTEz7Ko7"
                      className="custom-btn btn ms-auto"
                    >
                      Apply now
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Science */}
            <div className="col-lg-4 col-md-6 col-12">
              <div className="job-thumb job-thumb-box">
                <div className="job-image-box-wrap">
                  <Link to="https://forms.gle/sK7DqdFxLwbtU5eXA">
                    <img
                      height="130"
                      src="assets/images/jobs/DataScience.jpeg"
                      className="job-image img-fluid"
                      alt=""
                    />
                  </Link>
                </div>

                <div className="job-body">
                  <h4 className="job-title">
                    <Link
                      to="https://forms.gle/sK7DqdFxLwbtU5eXA"
                      className="job-title-link"
                    >
                      Data Science
                    </Link>
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
                    <Link
                      to="https://forms.gle/sK7DqdFxLwbtU5eXA"
                      className="custom-btn btn ms-auto"
                    >
                      Apply now
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Graphic Design */}
            <div className="col-lg-4 col-md-6 col-12">
              <div className="job-thumb job-thumb-box">
                <div className="job-image-box-wrap">
                  <Link to="graphic">
                    <img
                      height="130"
                      src="assets/images/jobs/logo-designer-working-computer-desktop.jpg"
                      className="job-image img-fluid"
                      alt=""
                    />
                  </Link>
                </div>

                <div className="job-body">
                  <h4 className="job-title">
                    <Link to="graphic" className="job-title-link">
                      Graphic Design
                    </Link>
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
                    <a href="graphic.html" className="custom-btn btn ms-auto">
                      Apply now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Application Development */}
            <div className="col-lg-4 col-md-6 col-12">
              <div className="job-thumb job-thumb-box">
                <div className="job-image-box-wrap">
                  <Link to="mobile-development">
                    <img
                      height="130"
                      src="assets/images/jobs/Mobile App Developer.jpeg"
                      className="job-image img-fluid"
                      alt=""
                    />
                  </Link>
                </div>

                <div className="job-body">
                  <h4 className="job-title">
                    <Link
                      to="/mobile-development"
                      className="job-title-link"
                    >
                      Mobile App Development
                    </Link>
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
                    <Link
                      to="/mobile-development"
                      className="custom-btn btn ms-auto"
                    >
                      Apply now
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Animation */}
            <div className="col-lg-4 col-md-6 col-12">
              <div className="job-thumb job-thumb-box">
                <div className="job-image-box-wrap">
                  <Link to="https://forms.gle/s3piaLNMs7AFq1LQA">
                    <img
                      height="130"
                      src="assets/images/jobs/video editor.jpeg"
                      className="job-image img-fluid"
                      alt=""
                    />
                  </Link>
                </div>

                <div className="job-body">
                  <h4 className="job-title">
                    <Link
                      to="https://forms.gle/s3piaLNMs7AFq1LQA"
                      className="job-title-link"
                    >
                      Video Animation
                    </Link>
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
                    <Link
                      to="https://forms.gle/s3piaLNMs7AFq1LQA"
                      className="custom-btn btn ms-auto"
                    >
                      Apply now
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Marketing */}
            <div className="col-lg-4 col-md-6 col-12">
              <div className="job-thumb job-thumb-box">
                <div className="job-image-box-wrap">
                  <Link to="https://forms.gle/FaL2UCHRTiYPb9xt5">
                    <img
                      height="130"
                      src="assets/images/jobs/marketing-assistant.jpg"
                      className="job-image img-fluid"
                      alt=""
                    />
                  </Link>
                </div>

                <div className="job-body">
                  <h4 className="job-title">
                    <Link
                      to="https://forms.gle/FaL2UCHRTiYPb9xt5"
                      className="job-title-link"
                    >
                      Social Media Marketing
                    </Link>
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
                    <Link
                      to="https://forms.gle/FaL2UCHRTiYPb9xt5"
                      className="custom-btn btn ms-auto"
                    >
                      Apply now
                    </Link>
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
      <Footer />
    </>
  );
};
