import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
    <Header/>


    <header className="site-header">
      <div style={{ backgroundColor: '#376828' }} className="section-overlay"></div>

      <div className="container">
        <div className="row">

          <div className="col-lg-12 col-12 text-center">
            <h1 className="text-white">About</h1>

            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <Link className="breadcrumb-item"><a to="home">Home</a></Link>

                <Link className="breadcrumb-item active" aria-current="page">About</Link>
              </ol>
            </nav>
          </div>

        </div>
      </div>
    </header>
    
    <section className="about-section">
      <div className="container">
        <div className="row justify-content-center align-items-center">

          <div className="col-lg-5 col-12">
            <div className="about-info-text">
              <h2 className="mb-0">Introducing Internee.pk</h2>

              <h4 className="mb-2"></h4>

              <p>The ultimate platform designed to turbocharge the IT sector in Pakistan! We recognize the immense potential of talented individuals in the country and aim to bridge the gap between them and the thriving IT industry. Internee.pk
                offers a comprehensive range of virtual internship opportunities exclusively in the IT field.</p>

              <div className="d-flex align-items-center mt-4">
                <a href="/job-listings.html" className="custom-btn custom-border-btn btn me-4">Explore Internships</a>

                <a href="contact.html" className="custom-link smoothscroll">Contact Us</a>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-12 mt-5 mt-lg-0">
            <div className="about-image-wrap">
              <img src="assets/images/horizontal-shot-happy-mixed-race-females.jpg" className="about-image about-image-border-radius img-fluid" alt="" />
            </div>
          </div>

        </div>
      </div>
    </section>


    <br/>
        <br/>
        <br/>

        <section className="reviews-section section-padding">
      <div className="container">
        <div className="row">

          <div className="col-lg-12 col-12">
            <h2 className="text-center mb-5">Happy Internee Reviews</h2>

            <div className="owl-carousel owl-theme reviews-carousel">
              <div className="reviews-thumb">

                <div className="reviews-info d-flex align-items-center">
                  <img src="assets/images/obaid.jfif" className="avatar-image img-fluid" alt="" />

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
                  <img src="assetss/images/left-quote.png" className="quote-icon img-fluid" alt="" />

                  <h5 className="reviews-title">This internship gives me challenges through which it helps me grow myself in the field of Chatbot development</h5>
                </div>
              </div>

              {/* Repeat similar structure for other reviews... */}

            </div>
          </div>



          

        </div>
      </div>
    </section>


    <section style={{ backgroundColor: '#376828' }} className="cta-section">
      <div style={{ backgroundColor: '#376828' }} className="section-overlay"></div>

      <div className="container">
        <div className="row">

          <div className="col-lg-6 col-10">
            <h2 className="text-white mb-2">Internships every month</h2>

            <p className="text-white">Introducing Internee.pk, the ultimate platform designed to turbocharge the IT sector in Pakistan! We recognize the immense potential of talented individuals in the country and aim to bridge the gap between them and the thriving IT industry. Internee.pk offers a comprehensive range of virtual internship opportunities exclusively in the IT field.</p>
          </div>

        </div>
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default About;