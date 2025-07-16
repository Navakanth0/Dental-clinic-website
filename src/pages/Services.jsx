import React, { useState } from 'react';

const servicesList = [
  { title: "Cleaning", desc: "Routine plaque removal and cleaning." },
  { title: "Whitening", desc: "Professional teeth whitening for a brighter smile." },
  { title: "Root Canal", desc: "Treat and save infected teeth." },
  { title: "Braces", desc: "Orthodontic treatments to align teeth." },
  { title: "Implants", desc: "Permanent tooth replacement solutions." },
  { title: "Cosmetic Dentistry", desc: "Smile enhancement services." }
];

const Services = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="services">
      <h2>Our Services</h2>
      {servicesList.map((srv, idx) => (
        <div key={idx} onClick={() => setSelected(idx === selected ? null : idx)}>
          <h4>{srv.title}</h4>
          {selected === idx && <p>{srv.desc}</p>}
        </div>
      ))}
    </section>
  );
};

export default Services;
