import React, { useState } from 'react';

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const faqs = [
    { q: "What are your working hours?", a: "9 AM to 6 PM, Monday to Saturday." },
    { q: "Do you accept walk-ins?", a: "Yes, but appointments preferred." },
    { q: "Is insurance accepted?", a: "We accept all major dental insurances." }
  ];

  return (
    <section className="faq">
      <h2>FAQs</h2>
      {faqs.map((faq, idx) => (
        <div key={idx}>
          <button onClick={() => setOpen(open === idx ? null : idx)}>{faq.q}</button>
          {open === idx && <p>{faq.a}</p>}
        </div>
      ))}
    </section>
  );
};

export default FAQ;
