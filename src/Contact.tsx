import { useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message — I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section">
      <div className="section-head section-head--split">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h2>Have an idea, a role, or a project you&apos;d like to ship?</h2>
        </div>
        <p>
          I&apos;m open to frontend roles, freelance projects, and thoughtful
          collaborations. Drop a note below or reach me on any of the channels
          on the right.
        </p>
      </div>

      <div className="contact-wrap">
        <form className="contact-form fade-up" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name">Your name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Jane Doe"
              required
            />
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@company.com"
              required
            />
          </div>

          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="A quick line about what you're working on…"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Send message
            <span className="btn-arrow" aria-hidden="true">→</span>
          </button>
        </form>

        <aside className="contact-side fade-up delay-2">
          <h3>Prefer a different channel?</h3>
          <p>
            Reach me directly through any of these. I usually reply within a
            day.
          </p>

          <div className="contact-channels">
            <a
              className="contact-channel"
              href="mailto:iranloye8.hannah@gmail.com"
            >
              <span className="contact-channel-icon">
                <MailOutlineIcon fontSize="small" />
              </span>
              <span className="contact-channel-text">
                <small>Email</small>
                <strong>iranloye8.hannah@gmail.com</strong>
              </span>
            </a>

            <a
              className="contact-channel"
              href="https://www.linkedin.com/in/iranloye-hannah/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-channel-icon">
                <LinkedInIcon fontSize="small" />
              </span>
              <span className="contact-channel-text">
                <small>LinkedIn</small>
                <strong>iranloye-hannah</strong>
              </span>
            </a>

            <a
              className="contact-channel"
              href="https://github.com/iranloyehannah"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-channel-icon">
                <GitHubIcon fontSize="small" />
              </span>
              <span className="contact-channel-text">
                <small>GitHub</small>
                <strong>iranloyehannah</strong>
              </span>
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
