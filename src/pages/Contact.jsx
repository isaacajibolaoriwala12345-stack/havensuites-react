import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [feedback, setFeedback] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const messages = JSON.parse(localStorage.getItem("havenMessages") || "[]");

    messages.push({ ...form, id: Date.now() });

    localStorage.setItem("havenMessages", JSON.stringify(messages));

    setFeedback("Thank you! Your message has been received.");

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  return (
    <section className="page-section contact-page">
      <p className="eyebrow">GET IN TOUCH</p>
      <h1>We'd Love to Hear From You.</h1>
      <p className="page-description">
        Have a question or need assistance? Send us a message.
      </p>

      <div className="contact-layout">
        <div className="contact-details">
          <h2>Contact Information</h2>
          <p>
            <strong>Email:</strong> hello@havensuites.com
          </p>
          <p>
            <strong>Phone:</strong> +234 800 000 0000
          </p>
          <p>
            <strong>Address:</strong> Abuja, Nigeria
          </p>
          <p>Our team is ready to help make your stay comfortable.</p>
        </div>

        <form className="booking-form" onSubmit={handleSubmit}>
          <label>Your Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
          />

          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />

          <label>Subject</label>
          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            required
            placeholder="Message subject"
          />

          <label>Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            placeholder="Write your message..."
            rows="5"
          />

          <button className="primary-button" type="submit">
            Send Message
          </button>

          {feedback && <p className="form-message">{feedback}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
