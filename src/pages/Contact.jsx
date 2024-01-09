import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <>
    <Header/>

    
    <header className="site-header">
      <div style={{ backgroundColor: '#376828' }} className="section-overlay"></div>

      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12 text-center">
            <h1 className="text-white">Get in touch</h1>

            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Contact</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </header>
    
    
    <section className="contact-section section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-12 mb-lg-5 mb-3">
            <iframe
              className="google-map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14468.480271972865!2d66.9630595!3d24.962029249999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1684627801858!5m2!1sen!2s"
              width="100%"
              height="350"
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="col-lg-5 col-12 mb-3 mx-auto">
            <div className="contact-info-wrap">
              <div className="contact-info d-flex align-items-center mb-3">
                <i className="custom-icon bi-building"></i>
                <p className="mb-0">
                  <span className="contact-info-small-title">Office</span> National Incubation Center, Karachi, Pakistan
                </p>
              </div>

              <div className="contact-info d-flex align-items-center">
                <i className="custom-icon bi-linkedin"></i>
                <p className="mb-0">
                  <span className="contact-info-small-title">Linkedin</span>
                  <a href="https://www.linkedin.com/in/internee-pk-1ba44a276/" className="site-footer-link">
                    internee-pk
                  </a>
                </p>
              </div>

              <div className="contact-info d-flex align-items-center">
                <i className="custom-icon bi-telephone"></i>
                <p className="mb-0">
                  <span className="contact-info-small-title">Phone</span>
                  <a href="https://api.whatsapp.com/send/?phone=%2B923453191638&text&app_absent=0" className="site-footer-link">
                    +92 345 3191638 <br /> +92 349 2861021
                  </a>
                </p>
              </div>

              <div className="contact-info d-flex align-items-center">
                <i className="custom-icon bi-envelope"></i>
                <p className="mb-0">
                  <span className="contact-info-small-title">Email</span>
                  <a href="mailto:info@internee.pk" className="site-footer-link">
                    info@internee.pk
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-8 col-12 mx-auto">
            <form
              className="custom-form contact-form"
              action="https://formsubmit.co/hammadn788@gmail.com"
              method="POST"
              role="form"
            >
              <h2 className="text-center mb-4">Project in mind? Let’s Talk</h2>

              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                  <label htmlFor="full-name">Full Name</label>
                  <input type="text" name="full-name" id="full-name" className="form-control" placeholder="Hammad Sheikh" required />
                </div>

                <div className="col-lg-6 col-md-6 col-12">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    pattern="[^ @]*@[^ @]*"
                    className="form-control"
                    placeholder="hammadsheikh@gmail.com"
                    required
                  />
                </div>

                <div className="col-lg-12 col-12">
                  <label htmlFor="message">Message</label>
                  <textarea name="message" rows="6" className="form-control" id="message" placeholder="What can we help you?"></textarea>
                </div>

                <div className="col-lg-4 col-md-4 col-6 mx-auto">
                  <button type="submit" className="form-control">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
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

export default Contact