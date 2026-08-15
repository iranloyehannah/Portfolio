import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    setStatus("Opening your email app…");
    window.location.href = `mailto:iranloye8.hannah@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-index" aria-hidden="true">04</div>
      <div className="contact-grid">
        <div className="contact-intro">
          <p className="kicker">Contact</p>
          <h2>Have something worth <em>building?</em></h2>
          <p>For frontend roles, freelance work, or thoughtful collaborations, send a note and tell me what you’re trying to make.</p>
          <a className="email-link" href="mailto:iranloye8.hannah@gmail.com">iranloye8.hannah<br />@gmail.com <span>↗</span></a>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/iranloye-hannah/" target="_blank" rel="noreferrer"><LinkedInIcon sx={{ fontSize: 18 }} /> LinkedIn</a>
            <a href="https://github.com/iranloyehannah" target="_blank" rel="noreferrer"><GitHubIcon sx={{ fontSize: 18 }} /> GitHub</a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="field-row">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@company.com" required />
            </div>
          </div>
          <div className="field">
            <label htmlFor="message">What are you working on?</label>
            <textarea id="message" name="message" rows={6} value={formData.message} onChange={handleChange} placeholder="A short brief, role, idea, or hello…" required />
          </div>
          <div className="form-footer">
            <button className="send-button" type="submit">Send enquiry <span>↗</span></button>
            <p aria-live="polite">{status}</p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
