import React from 'react'


const JobPortal = () => {
  return (
    <>
    
    <div className="mobile-container">
    <header>
      <section className="hero-banner">
        <div className="logo-wrapper">
          <img src="assets/images/slogan.png" alt="Adidas logo." />
        </div>
        <div className="hero-image"></div>
      </section>
    </header>
    
    
      <article className="text-info">
        <h2 style={{ color: 'rgb(7, 203, 7)' }}>We're</h2>
        <h2>Coming<br />Soon</h2>
        <p>
          Hello Internee's! We are currently building our Job Portal
          <sup>Coming Soon</sup>. Over there, you will find top industries remote and physical jobs in just a few clicks.
          Add your email address below to stay up-to-date with announcements and our launch proposals. <b>Join our wishlist</b>
        </p>
        <section className="email-signup">
          <form action="https://formsubmit.co/hammadn788@gmail.com" method="POST">
            <input className="email-input" type="email" required placeholder="Email Address" name="email-address" />
            <button className="email-submit" type="submit">Go</button>
          </form>
        </section>
      </article>
    </div>
    
    <div className="hero-image-desktop">
      <img
        src="https://img.freepik.com/free-vector/career-growth-design-with-flying-businessman-red-cloak-blue-background-with-green-arrows-vector-illustration_1284-18142.jpg?w=740&t=st=1691791301~exp=1691791901~hmac=d6157148edead0a6c037a5a428272b0375b988315ffca95f37b7b249ec3b41e7"
        alt="Female athlete squinting towards the camera."
      />
    </div>

    </>
  )
}

export default JobPortal