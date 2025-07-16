import React from 'react';

const Home = () => (
  <div>

    {/* Hero Section */}
    <div
      className="text-white text-center d-flex flex-column justify-content-center align-items-center"
      style={{
        backgroundImage: 'url(/smile.jpg)',  // Place your image in /public folder as smile.jpg
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '400px',
        backgroundColor: 'rgba(0,0,0,0.5)',
        backgroundBlendMode: 'overlay',
        padding: '2rem'
      }}
    >
      <h1 className="display-4 fw-bold">Your Smile, Our Passion</h1>
      <p className="lead mb-4">Expert care, modern technology, and compassionate service—all in one place.</p>
      <a href="/contact" className="btn btn-warning btn-lg fw-bold shadow">
  Book Appointment
</a>
    </div>
    

    {/* Services Section */}
    <div className="container my-5">
      <h2 className="text-center mb-4">Our Services</h2>
      <div className="row">
        {[
          { title: "Cleaning", desc: "Routine dental cleaning to maintain oral health." },
          { title: "Whitening", desc: "Professional whitening for a brighter smile." },
          { title: "Root Canal", desc: "Painless treatment for infected teeth." },
          { title: "Braces", desc: "Modern braces to align your smile." },
          { title: "Implants", desc: "Replace missing teeth with permanent solutions." },
          { title: "Cosmetic Dentistry", desc: "Smile makeovers with advanced techniques." }
        ].map((service, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card shadow h-100 service-card">
              <div className="card-body text-center">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.desc}</p>
                <a href="/services" className="btn btn-outline-primary btn-sm mt-2">Learn More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  </div>
);

export default Home;
