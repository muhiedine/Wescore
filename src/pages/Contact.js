import React, { useState } from 'react';
function Contact() {
  const [values, setValues] = useState({
    fname: '',
    email: '',
    message: ''
  });
  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({
      ...values,
      [name]: value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (!values.fname.trim() || !values.email.trim() || !values.message.trim()) {
      alert('Please complete all required fields.');
      return;
    }
    alert('Demo form submitted successfully!\n' + JSON.stringify(values, null, 2) + '\n\nThis form does not send an email.');
  };
  return <div><section className="inner-hero compact"><div className="container"><p className="section-kicker light-kicker">SAY HELLO / CONTACT</p><h2>LET'S TALK <span>FOOTBALL.</span></h2><p>Questions, ideas, or feedback? Leave us a message.</p></div></section>
      <section className="section section-light"><div className="container contact-grid">
        <div className="contact-intro"><p className="section-kicker">WE'RE LISTENING</p><h2>Got something<br />on your mind?</h2><p>Use the form to try our frontend interaction. As this is Phase 1, your message is displayed in an alert and is not sent to a server.</p><div className="contact-panel"><strong>WE SCORE. YOU EXPLORE.</strong><p>A student-built football experience.</p></div></div>
        <div className="contact-form-card"><h3>Send a message</h3><p>Fill out the fields below to test the React contact form.</p><form onSubmit={handleSubmit}>
          <label htmlFor="fname">Full name</label><input id="fname" name="fname" type="text" required placeholder="Your name" value={values.fname} onChange={handleChange} />
          <label htmlFor="email">Email address</label><input id="email" name="email" type="email" required placeholder="you@example.com" value={values.email} onChange={handleChange} />
          <label htmlFor="message">Your message</label><textarea id="message" name="message" rows="6" required placeholder="Write your message..." value={values.message} onChange={handleChange}></textarea>
          <button className="button button-green" type="submit">Send demo message ↗</button>
        </form></div>
      </div></section>
    </div>;
}
export default Contact;
